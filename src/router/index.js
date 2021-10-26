import { createRouter, createWebHashHistory } from 'vue-router';
import Lobby from '../views/Lobby.vue';

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby,
  },
  {
    path: '/newpage',
    name: 'newPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPage.vue'),
    children: [
      {
        path: 'childa',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'childb',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'nameView',
        component: () => import('../views/NameView.vue'),
      },
    ],
  },
  // 404頁面
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue'),
  // },
  // 重新導向
  // {
  //   path: '/newpage/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'Home',
  //   },
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
