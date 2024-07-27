import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Category from '../pages/Category'
import Content from '../pages/Content'
import CategoryLoader from '../pages/Category/CategoryLoader'

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
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            path: 'content/:cid',
            element: <Content />
          }
        ]
      }
    ]
  }
])

export default router
