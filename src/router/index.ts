import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
  name: '主页',
  path: '/index',
  component: () => import('../views/indexPage.vue'),
}];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

export const setupRouter = (app: App) => {
  app.use(router);
};
