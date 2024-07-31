import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import ContentList from '../pages/ContentList'
import CategoryList from '../pages/CategoryList'
import CategoryListLoader from '../pages/CategoryList/CategoryListLoader'
import ContentListLoader from '../pages/ContentList/ContentListLoader'
import Content from '../pages/Content'
import ContentLoader from '../pages/Content/ContentLoader'
import ContentAction from '../pages/Content/ContentAction'

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
                element: <Content />,
                loader: ContentLoader,
                action: ContentAction
              }
            ]
          }
        ]
      }
    ]
  }
])

export default router
