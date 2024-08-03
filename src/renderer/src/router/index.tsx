import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import ContentList from '../pages/ContentList'
import CategoryList from '../pages/CategoryList'
import Content from '../pages/Content'
import Welcome from '../pages/Welcome'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'config',
    element: <Config />,
    children: [
      {
        path: 'categoryList',
        element: <CategoryList />,
        children: [
          {
            path: 'contentList/:cid?',
            element: <ContentList />,
            children: [
              {
                index: true,
                element: <Welcome />
              },
              {
                path: 'content/:id',
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
])

export default router
