import { h } from 'vue';
import { RouterLink } from 'vue-router';

export const label = (path: string, text: string) => (h(
  RouterLink,
  {
    to: {
      path,
    },
  },
  { default: () => text || '空空如也' },
));
