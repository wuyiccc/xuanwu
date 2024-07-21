import { createWindow } from './window'
import { app } from 'electron'
import { registerIpc } from '../ipc'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
})
