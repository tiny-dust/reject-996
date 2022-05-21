import { createApp } from 'vue';
import App from './App.vue';
import { setupI18n } from './locales';
import { setupRouter } from './router';
import { setupStore } from './store';

const app = createApp(App);

async function setup() {
  await setupI18n(app);

  setupStore(app);

  setupRouter(app);

  app.mount('#app');
}
setup();
