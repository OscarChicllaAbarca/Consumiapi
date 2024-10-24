import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(store).use(router).mount('#app')
