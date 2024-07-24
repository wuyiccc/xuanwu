import { createHashRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Config from '../pages/Config'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'config',
    element: <Config />
  }
])

export default router
