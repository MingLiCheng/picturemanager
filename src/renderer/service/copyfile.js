const fs = require('fs')
const path = require('path')


  // fs.writeFile('../../../static/upload/images/xxx.jpg',fs.readFileSync('C:/Users/Public/Pictures/Sample Pictures/Chrysanthemum.jpg'),(err,date)=>{
  //   // 不会处理...
  //   if(err) throw err
  // })
// 改写为 Promise  感觉



module.exports = function (path,topath) {
  fs.writeFileSync(topath,fs.readFileSync(path))
  }