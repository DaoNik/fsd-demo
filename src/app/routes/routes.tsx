import { createBrowserRouter } from 'react-router';
import { CategoryPage, HomePage } from '../../pages';
import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'community', element: <a>Community</a> },
      { path: ':category', Component: CategoryPage },
      {
        path: 'article',
        children: [{ path: ':alias', element: <a>article</a> }],
      },
      {
        path: 'profile',
        children: [
          { index: true, element: <a>Profile</a> },
          { path: 'edit', element: <a>Edit profile</a> },
        ],
      },
    ],
  },
]);
