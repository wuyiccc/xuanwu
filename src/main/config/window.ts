import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../../resources/icon.png?asset'
// import { shell, BrowserWindow, screen } from 'electron'
import { BrowserWindow, shell } from 'electron'
import * as url from 'node:url'

export function createWindow(): BrowserWindow {
  // const { width: winWidth, height: winHeight } = screen.getPrimaryDisplay().workAreaSize
  // const width = winWidth * 0.75
  // const myHeight = winHeight * 1
  // console.log(winHeight)
  // console.log(myHeight)
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1050,
    height: 650,
    show: false,
    // 不显示顶部导航条
    frame: true,
    // transparent: transparent,
    // x: winWidth - width,
    // y: 0,
    center: true,
    // 窗口永远保持置顶
    // alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

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
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    mainWindow.loadURL(
      url.format({
        // 编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        // 协议
        protocol: 'file',
        // protocol后面需要两个/
        slashes: true,
        // hash的值
        hash: 'config'
      })
    )
  }

  return mainWindow
}
