import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/Lista-de-Tareas',
      name: 'ListadeTareas',
      component: () => import('../modules/listaDeTareas/components/ListadeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/Registrarview.vue'),
    },
    {
      path: '/Calcular',
      name: 'Calcular',
      component: () => import('../modules/calcular/views/CalcularView.vue'),
    },
  ],
})

export default router
