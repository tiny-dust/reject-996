import { createApp } from 'vue';
import App from './App.vue';
import { setupI18n } from './locales';

const app = createApp(App);

async function setup() {
  await setupI18n(app);
}
setup();
