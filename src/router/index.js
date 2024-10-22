import { createRouter, createWebHistory } from 'vue-router';


import TomaView from '../views/TomaView.vue';
import LoginView from '@/views/LoginView.vue';
import ListarTomaView from '@/views/ListarTomaView.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/toma',
    name: 'Toma',
    component: TomaView
  },
  {
    path: '/listar_toma',
    name: 'listar_toma',
    component: ListarTomaView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
