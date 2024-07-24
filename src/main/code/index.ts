import { createWindow } from './window'
import { app } from 'electron'
import { registerIpc } from '../ipc'
import { registerShortCut } from './shortCut'
import ignoreMouseEvents from './ignoreMouseEvents'

app.whenReady().then(() => {
  const win = createWindow(500, 500, false)
  createWindow(500, 800, true, win)
  registerIpc(win)
  registerShortCut(win)
  ignoreMouseEvents(win)
})
