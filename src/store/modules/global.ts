import { defineStore } from 'pinia';

export const GlobalStore = defineStore('global', {
  state: () => ({
    locale: '',
    theme: '',
  }),
});
