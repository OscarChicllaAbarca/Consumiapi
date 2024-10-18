import { createRouter, createWebHistory } from 'vue-router';

import CreateView from '../views/CreateView.vue';
import EditView from '../views/EditView.vue';

import GraficaView from '../views/GraficaView.vue';
import ReporteView from '../views/ReporteView.vue';
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
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },
  {
    path: '/grafica',
    name: 'grafica',
    component: GraficaView
  },
  {
    path: '/reporte',
    name: 'reporte',
    component: ReporteView
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
