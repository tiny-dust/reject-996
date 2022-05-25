import { defineStore } from 'pinia';

export const GlobalStore = defineStore('global', {
  state: () => ({
    locale: '',
    theme: false,
    loginAnime: false,
    token: '',
    userEmail: '',
    userId: '',
  }),

  actions: {
    async savaUserInfo(userEmail: string, userId: string, token: string) {
      this.token = token;
      this.userEmail = userEmail;
      this.userId = userId;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userEmail', userEmail);
    },
  },
});
