import { ElectronAPI } from '@electron-toolkit/preload'
import { SqlActionType } from '../main/db/ipc'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCut: (type: 'search', shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: {forward: boolean}) => void
      openConfigWindow: () => void
      mapper: <T>(methodName: string, methodParam: any) => Promise<T>
    }
  }
}
