export const ROUTES = {
  home: '/',
  community: '/community',
  category: (alias: string) => `/${alias}`,
  article: (alias: string) => `/article/${alias}`,
  profile: {
    index: '/profile',
    edit: '/profile/edit',
  },
};
