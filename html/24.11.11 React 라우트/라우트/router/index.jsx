import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import Hello from '../pages/Hello';
import RootRayout from '../RootRayout';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />,
      },
      {
        path: '/hello',
        element: <Hello />,
      },
    ],
  },
]);

export default router;
