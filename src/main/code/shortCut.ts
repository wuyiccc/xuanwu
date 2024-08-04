import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import ConfigMapper from '../db/ConfigMapper'
import ConfigDTO from '../../pojo/dto/ConfigDTO'

const config = {
  search: ''
}

export const registerShortCut = (win: BrowserWindow) => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search') => {
    // 查询数据库
    const data = ConfigMapper.find()[0].content
    const dto = JSON.parse(data!) as ConfigDTO
    console.log(dto.shortCut)

    if (config.search) {
      globalShortcut.unregister(config.search)
    }

    config.search = dto.shortCut!
    switch (type) {
      case 'search':
        return registerSearchShortCut(win, dto.shortCut!)
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
