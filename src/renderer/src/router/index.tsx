import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import ContentList from '../pages/ContentList'
import CategoryList from '../pages/CategoryList'
import CategoryListLoader from '../pages/CategoryList/CategoryListLoader'
import ContentListLoader from '../pages/ContentList/ContentListLoader'
import Content from '../pages/Content'

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
        loader: CategoryListLoader,
        children: [
          {
            path: 'contentList/:cid',
            element: <ContentList />,
            loader: ContentListLoader,
            children: [
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
