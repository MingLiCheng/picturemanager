var fs = require('fs');//引用文件系统模块
var path = require('path')
var image = require("imageinfo"); //引用imageinfo模块


var imageinfo = { // 用来存储所需要的图片的信息
  "name":'',
  "imagepath":'',
  "size":'',

}

// 获取给定路径下的所有 文件的信息  循环遍历
function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (filename, index) {
    var stat = fs.statSync(path + filename);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + filename + "/", filesList)
    } else {
      var fileinfo = {}//定义一个对象存放文件的路径和名字
      fileinfo.path = path//路径
      fileinfo.filename = filename//名字
      fileinfo.size = (stat.size / 1024).toFixed(2) + '/kb'//
      // console.log(fileinfo)

      filesList.push(fileinfo)
    }
  })
}

var MyDirectory = { //

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
      
      // 检测文件类型
      if(ms.type === 'image'){// 文件类型为image
        var imageinfo = {}
        imageinfo.name = item.filename
        imageinfo.path = item.path
        imageinfo.size = item.size
        imageList.push(imageinfo)
      }
    });
    return imageList;
  }

}


//获取文件夹下的所有文件信息

var fileslist = MyDirectory.getFileList('../../../static/upload/images/')
// console.log(fileslist.[0].path +'====='+ typeof(fileslist))
fileslist.forEach(function (item,index) {
  // console.log(item.path+'==='+item.filename +'==='+index)
  var fullpath = item.path+item.filename
  fs.stat(fullpath,function(err,stats) {
    // console.log((stats.size / 1024).toFixed(2) + '/kb')   
  })
  return false

  })


  // //获取文件夹下的所有图片信息

  var imageslist = MyDirectory.getImageFiles('../../../static/upload/images/')
  imageslist.forEach(function (image,index) {
    console.log(image.path+image.name+image.size)
    
  })