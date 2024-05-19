import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import '@renderer/styles/index.scss';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
