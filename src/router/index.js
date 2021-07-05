import { createRouter, createWebHistory } from 'vue-router';
import TodayPage from '@/views/Today';
const routes = [
  //配置路由
  { path: '/', component: TodayPage, name: 'today' },
  {
    path: '/tomorrow',
    component: () => import('../views/Tomorrow.vue'),
    name: 'tomorrow',
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../views/Week.vue')
  },
  {
    path: '/year',
    component: () => import('../views/Year.vue'),
    name: 'year'
  },
  {
    path: '/month',
    component: () => import('../views/Month.vue'),
    name: 'month',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
