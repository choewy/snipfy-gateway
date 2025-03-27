import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LinkPage } from './pages/Link';
import { NavigateToWebPage } from './pages/Navigate';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/:linkId',
          element: <LinkPage />,
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
