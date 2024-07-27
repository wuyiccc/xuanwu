import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'
import Category from '../pages/Category'
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
        path: '',
        element: <Category />,
        children: [
          {
            index: true,
            element: <Content />
          }
        ]
      }
    ]
  }
])

export default router
