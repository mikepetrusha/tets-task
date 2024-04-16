import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout';

const GalleryPage = lazy(() => import('../pages/gallery/gallery'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GalleryPage />
      }
    ]
  }
]);
