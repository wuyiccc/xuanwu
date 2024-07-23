import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'
import Error from './components/Error'
import { useEffect, useRef } from 'react'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', () => {
      // 鼠标移入 则关闭穿透
      window.api.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target === document.body) {
        // 鼠标移入到body, 就加上穿透
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }, [])

  const { register } = useShortcut()
  register('search', 'CommandOrControl+Shift+;')

  window.api.setIgnoreMouseEvents(false, { forward: true })

  return (
    <div ref={mainRef} style={{ padding: '1.25rem' }}>
      <Error />
      <Search />
      <Result />
    </div>
  )
}

export default App
