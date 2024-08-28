import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron';
import { join, resolve } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import icon from '../../resources/icon.png?asset';
import inputWord from '../../resources/input.docx?asset';

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
  if (is.dev) {
    mainWindow.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron');

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // IPC test
  ipcMain.on('ping', () => console.log('pong'));
  ipcMain.on('saveExcelFile', (event, file: string) => {
    const fileJSON = JSON.parse(file);
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    if (!file) {
      dialog.showErrorBox('错误', '没有计算书数据');
      return;
    }
    if (!win) {
      dialog.showErrorBox('错误', '失去窗口引用');
      return;
    }
    dialog
      .showSaveDialog(win, {
        title: '生成计算书',
        defaultPath: resolve(app.getPath('documents'), '计算书.docx'),
        filters: [{ name: 'Word文件(doc、docx)', extensions: ['doc', 'docx'] }],
      })
      .then(({ canceled, filePath }) => {
        if (canceled) {
          console.warn('生成取消');
          return;
        }
        if (!filePath) {
          console.error('生成异常，没有文件路径');
          dialog.showErrorBox('错误', '生成异常，没有文件路径');
          return;
        }

        try {
          const content = fs.readFileSync(inputWord, 'binary');
          const zip = new PizZip(content);
          const docx = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          });
          try {

            // docx.setData(fileJSON);
            docx.render(fileJSON);
            const buf = docx.getZip().generate({
              type: 'nodebuffer',
              compression: 'DEFLATE',
            });
            fs.writeFile(filePath, buf, (err) => {
              if (err) {
                dialog.showErrorBox('错误', '生成失败，未知异常');
                return;
              }
              dialog
                .showMessageBox(win, {
                  message: '计算书生成成功',
                  type: 'info',
                  buttons: ['确定', '打开文件', '在文件夹查看'],
                  title: '成功',
                })
                .then(({ response }) => {
                  if (response) {
                    if (response === 1) {
                      shell.openPath(filePath);
                    } else {
                      shell.showItemInFolder(filePath);
                    }
                  }
                });
            });
          } catch (e) {
            console.error(e);
            dialog.showErrorBox('错误', '渲染失败');
          }
        } catch (e) {
          console.error(e);
          dialog.showErrorBox('错误', '生成失败，找不到模板');
        }
      });
  });

  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
