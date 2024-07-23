import { MutableRefObject } from 'react'

export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      // 鼠标移入 则关闭穿透
      window.api.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target === document.body) {
        // 鼠标移入到body, 就加上穿透
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }

  return { setIgnoreMouseEvents }
}
