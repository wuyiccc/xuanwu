import ReactDOM from 'react-dom/client'
import '@renderer/assets/global.less'
import { RouterProvider } from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
)
