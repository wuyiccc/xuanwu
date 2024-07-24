import { createWindow } from './window'
import { BrowserWindow } from 'electron'

let win = null as null | BrowserWindow
const createConfigWindow = () => {
  if (!win) {
    win = createWindow()
  }
  win.on('closed', () => (win = null))
}

export { createConfigWindow }
