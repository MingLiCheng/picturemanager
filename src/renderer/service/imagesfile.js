// const fs = require('fs')
// const path = require('path')


// export default ()=>{
//   fs.readFile(path.join(__dirname,'binary','../../upload/images/22.jpg'),function(err,data){
//     if(err) return console.log(err.message)
//     console.log(data)
//   })
// }


//获取项目工程里的图片
var fs = require('fs');//引用文件系统模块
var path = require('path')
var image = require("imageinfo"); //引用imageinfo模块

function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    var stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + "/", filesList)
    } else {
      var obj = {};//定义一个对象存放文件的路径和名字
      obj.path = path;//路径
      obj.filename = itm//名字
      filesList.push(obj);
    }
  })
}
var getFiles = {
  //获取文件夹下的所有文件
  getFileList: function (path) {
    var filesList = [];
    readFileList(path, filesList);
    return filesList;
  },
  //获取文件夹下的所有图片
  getImageFiles: function (path) {
    var imageList = [];
    this.getFileList(path).forEach((item) => {
      var ms = image(fs.readFileSync(item.path + item.filename));
      ms.mimeType && (imageList.push(item.filename))
    });
    return imageList;
  }
};
//获取文件夹下的所有图片


module.exports ={
  getImageFilesPath:(imagespath)=>{
    var srclist = getFiles.getImageFiles(imagespath);//"../../../static/upload/images/"
    var srcNewList = [];
    // console.log(srclist);
    srclist.forEach(function (item, index) {
      item = path.join('static/upload/images', item)
      if (item.split(".")[1] == 'jpg') {
        srcNewList.push({
          'imsrc': item
        })
      } else {
        srcNewList.push({
          'videosrc': item
        })
      }
    })
    // console.log(srcNewList)
    return srcNewList
  },
  test:'Hello World'
} 