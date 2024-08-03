import { createWindow } from './window'
import { app } from 'electron'
import { registerIpc } from './ipc'
import { registerShortCut } from './shortCut'
import ignoreMouseEvents from './ignoreMouseEvents'

app.whenReady().then(() => {
  // 创建主窗口
  const win = createWindow(500, 500, true)
  // 注册主窗口的ipc通信事件
  registerIpc(win)
  registerShortCut(win)
  // 设置鼠标事件, 主要是鼠标穿透事件
  ignoreMouseEvents(win)
})
