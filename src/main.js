import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { dotPulse } from 'ldrs';
import 'font-awesome/css/font-awesome.min.css';

dotPulse.register();

// Importation des loaders

const app = createApp(App);


app.use(router).mount('#app');
