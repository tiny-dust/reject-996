import { App } from 'vue';
import {
  createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized,
} from 'vue-router';

const routes = [{
  path: '/company',
  component: () => import('../layout/baseLayout.vue'),
  children: [
    {
      name: '公司列表',
      path: 'list',
      meta: {
        title: '万卷之王',
      },
      component: () => import('../views/indexPage.vue'),
    },
  ],
}];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  next();
});

export const setupRouter = (app: App) => {
  app.use(router);
};
