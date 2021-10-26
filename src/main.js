import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/all.scss';
import 'bootstrap/dist/js/bootstrap';
import 'swiper/css/swiper.css';

createApp(App).use(router).mount('#app');
