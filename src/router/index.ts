import { App } from 'vue';
import {
  createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized,
} from 'vue-router';
import { ChatbubbleEllipsesOutline, Fitness } from '@vicons/ionicons5';

export const routes = [
  {
    path: '/',
    meta: {
      title: '',
    },
    redirect: '/login',
    // component: () => import('../views/login/index.vue'),
  },
  {
    name: '登录页',
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('../views/login/login.vue'),
  },
  {
    name: '注册页',
    path: '/register',
    meta: {
      title: '注册',
    },
    component: () => import('../views/login/registerUser.vue'),
  },
  {
    path: '/company',
    component: () => import('../layout/baseLayout.vue'),
    redirect: '/company/list',
    children: [
      {
        name: '公司列表',
        path: 'list',
        meta: {
          title: '内卷之王',
          icon: Fitness,
        },
        component: () => import('../views/indexPage.vue'),
      },
      {
        name: '聊一下',
        path: 'instruction',
        meta: {
          title: '聊一聊',
          icon: ChatbubbleEllipsesOutline,
        },
        component: () => import('../views/instruction.vue'),
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
  document.title = `小卷村-${to.meta.title}`;
  next();
});

export const setupRouter = (app: App) => {
  app.use(router);
};
