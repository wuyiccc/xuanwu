import { BrowserWindow, ipcMain } from 'electron'
import IpcMainEvent = Electron.IpcMainEvent

ipcMain.on('hideWindow', (event: IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  if (win) {
    win.hide()
  }
})
