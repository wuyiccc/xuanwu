import { app, BrowserWindow, dialog, globalShortcut, ipcMain } from 'electron'
import IpcMainEvent = Electron.IpcMainEvent

export const registerShortCut = (win: BrowserWindow) => {
  ipcMain.on('shortCut', (_event: IpcMainEvent, shortCut: string) => {
    // 注册一个'CommandOrControl+X' 快捷键监听器
    const ret = globalShortcut.register(shortCut, () => {
      // console.log('CommandOrControl+X is pressed')
      if (win.isVisible()) {
        win.hide()
      } else {
        win.show()
      }
    })
    if (!ret) {
      dialog.showErrorBox('温馨提示', '快捷键注册失败')
    }
  })
}

app.on('will-quit', () => {
  // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')

  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
