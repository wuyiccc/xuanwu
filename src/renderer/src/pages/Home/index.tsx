import Search from '../../components/Search'
import Result from '../../components/Result'
import useShortcut from '../../hooks/useShortcut'
import Error from '../../components/Error'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '../../hooks/useIgnoreMouseEvents'

export default function (): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()

  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
    // window.api.openConfigWindow()
  }, [])

  const { register } = useShortcut()
  register('search')

  window.api.setIgnoreMouseEvents(false, { forward: true })

  return (
    <div ref={mainRef} style={{ padding: '1.25rem' }}>
      <Error />
      <Search />
      <Result />
    </div>
  )
}
