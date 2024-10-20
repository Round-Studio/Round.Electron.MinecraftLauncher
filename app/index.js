const { app, BrowserWindow,Menu } = require('electron/main')
const { dialog } = require('electron');

const createWindow = () => {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1000,
    height: 680,
    frame: false,
    minHeight: 680,
    minWidth: 1000
  })

  win.loadFile('app\\html\\index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})