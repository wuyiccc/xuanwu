import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'
import Error from './components/Error'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()

  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
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
