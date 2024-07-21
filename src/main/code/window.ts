import { join } from 'path'
import * as ipc from '../ipc'
import { is } from '@electron-toolkit/utils'
import icon from '../../../resources/icon.png?asset'
import { shell, BrowserWindow, screen } from 'electron'

export function createWindow(): void {
  const { width } = screen.getPrimaryDisplay().workAreaSize
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 350,
    show: false,
    // 不显示顶部导航条
    frame: false,
    // transparent: true,
    x: width / 2 - 250,
    y: 0,
    // 窗口永远保持置顶
    alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  ipc.registerIpc(mainWindow)
  // 开启开发者工具栏
  mainWindow.webContents.openDevTools()

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}
