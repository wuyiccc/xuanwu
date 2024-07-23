import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'
import Error from './components/Error'
import { useEffect, useRef } from 'react'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', (e: MouseEvent) => {
      console.log('mouseover')
      window.api.setIgnoreMouseEvents(false)
    })
    mainRef.current?.addEventListener('mouseout', (e: MouseEvent) => {
      console.log('mouseout')
      window.api.setIgnoreMouseEvents(true, { forward: true })
    })
  }, [])

  const { register } = useShortcut()
  register('search', 'CommandOrControl+Shift+;')

  window.api.setIgnoreMouseEvents(false, { forward: true })

  return (
    <div ref={mainRef}>
      <Error />
      <Search />
      <Result />
    </div>
  )
}

export default App
