import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import '@renderer/styles/index.scss';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
