const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer


const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

module.exports = {
  openNewWin(){
    let win = new BrowserWindow({ width: 1800, height: 1600 })
    win.on('close', function () { win = null })
    win.loadURL(winURL)
    win.show() 
  },
  openImageDialog() {
    const saveBtn = document.getElementById('save-dialog')

    saveBtn.addEventListener('click', function (event) {
      ipc.send('save-dialog')
    })

    ipc.on('saved-file', function (event, path) {
      if (!path) path = 'No path'
      document.getElementById('file-saved').innerHTML = `Path selected: ${path}`
    })
  }

}




