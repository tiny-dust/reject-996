import { defineStore } from 'pinia';

interface Actions {
  savaUserInfo: (userEmail: string, userId: string, token: string) => void;
  saveIntro: (intro: string) => void;
}

interface State {
  locale: string;
  theme: boolean;
  loginAnime: boolean;
  token: string;
  userEmail: string;
  userId: string;
  intro: string;
}

interface Getters {
  [key: string]: any,
  locales: () => ({label:string, key:string}[])
}

export const GlobalStore = defineStore<string, State, Getters, Actions>({
  id: 'global',
  state: () => ({
    locale: '',
    theme: false,
    loginAnime: false,
    token: '',
    userEmail: '',
    userId: '',
    intro: '',
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
    saveIntro(intro: string) {
      this.intro = intro;
    },
  },
});
