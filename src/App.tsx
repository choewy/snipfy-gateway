import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NotFoundPage } from './pages/NotFound';
import { HitLinkPage } from './pages/HitLink';
import { NavigateToWebPage } from './pages/NavigateToWeb';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/404',
          element: <NotFoundPage />,
        },
        {
          path: '/:linkId',
          element: <HitLinkPage />,
        },
        {
          path: '/',
          element: <NavigateToWebPage />,
        },
      ])}
    />
  );
}

export default App;
