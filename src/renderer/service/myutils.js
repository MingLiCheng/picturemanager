const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer



module.exports = {
  
  openNewWin(cpath){ // #/imageview?
    const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080/#/imageview/?path=${cpath}`
    : `file://${__dirname}/#/imageview/?path=${cpath}`
    // const modalPath = 'src/renderer/windows/windows.html'

    // console.log(__dirname)
    // console.log(modalPath)
    let win = new BrowserWindow({
    height: 800,
    useContentSize: true,
    width: 1200,
    skipTaskbar: false,
    transparent: false,
    autoHideMenuBar:true,     
     })
    win.on('close', function () { win = null })
    // win.setIgnoreMouseEvents(true)
    win.loadURL(winURL)

    win.show() 

  },
  openImageDialog(callback) {
    ipc.send('save-dialog')
    ipc.on('saved-file', function (event, path) {
      if (!path) path = 'No path'      
      callback(`${path}`)
    })
  }

}




