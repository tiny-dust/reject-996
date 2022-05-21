import { createPinia } from 'pinia';
import { App } from 'vue';
import { GlobalStore } from './modules/global';

export const store = createPinia();

export const setupStore = (app: App) => {
  app.use(store);
};

export const useGlobalStore = () => GlobalStore(store);
