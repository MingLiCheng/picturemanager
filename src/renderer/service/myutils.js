const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer


const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#/imageview`
  : `file://${__dirname}/`

module.exports = {
  
  openNewWin(){
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
  },
  bbimg(o){ 
    var zoom=parseInt(o.style.zoom, 10)||100;zoom+=event.wheelDelta/12;if (zoom>0) o.style.zoom=zoom+'%'; 
    return false; 
} 

}




