import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Pinia importálása
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap betöltése

const app = createApp(App);

app.use(router);
app.use(createPinia()); // Pinia hozzáadása
app.mount('#app');

