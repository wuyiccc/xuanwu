import { createWindow } from './window'
import { app } from 'electron'
import { registerIpc } from '../ipc'
import { registerShortCut } from './shortCut'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
})
