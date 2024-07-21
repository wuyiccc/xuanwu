import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'

const config = {
  search: ''
}

export const registerShortCut = (win: BrowserWindow) => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    if (config.search) {
      globalShortcut.unregister(config.search)
    }

    config.search = shortCut
    switch (type) {
      case 'search':
        return registerSearchShortCut(win, shortCut)
    }
  })
}

function registerSearchShortCut(win: BrowserWindow, shortCut: string) {
  // 注册一个'CommandOrControl+X' 快捷键监听器
  return globalShortcut.register(shortCut, () => {
    // console.log('CommandOrControl+X is pressed')
    if (win.isVisible()) {
      win.hide()
    } else {
      win.show()
    }
  })
}

app.on('will-quit', () => {
  // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')

  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
