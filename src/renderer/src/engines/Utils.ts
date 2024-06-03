export const SelectFolder = () => {};

export const SaveFile = (fileData: any) => {
  window.electron.ipcRenderer.send('saveExcelFile', JSON.stringify(fileData));
};
