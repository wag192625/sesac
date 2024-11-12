import { createBrowserRouter } from 'react-router-dom';
import RootRayout from '../rayout/RootRayout';

import Home from '../pages/Home';
import Webtoon from '../pages/webtoon/Webtoon';
import WebtoonList from '../pages/webtoon/WebtoonList';
import Novel from '../pages/novel/Novel';
import NovelList from '../pages/novel/NovelList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/webtoon',
        element: <Webtoon />,
        children: [{ path: '/webtoon/:weekId', element: <WebtoonList /> }],
      },
      {
        path: '/novel',
        element: <Novel />,
        children: [{ path: '/novel/:genre', element: <NovelList /> }],
      },
    ],
  },
]);

export default router;
