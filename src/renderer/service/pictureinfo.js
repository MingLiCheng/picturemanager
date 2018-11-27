//获取项目工程里的图片


var fs = require('fs');//引用文件系统模块
var path = require('path')
var image = require("imageinfo"); //引用imageinfo模块


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




module.exports ={
  getImageInfo:(imagespath)=>{
    var imageslist = MyDirectory.getImageFiles(imagespath);//"../../../static/upload/images/"
    return imageslist
  },
  test:'Hello World'
} 


//  测试记载所有文件 在文件上传列表
//    var aaa = []
      // var imagesfilepathlist = imageinfo.getImageInfo('static/upload/images/')
      // console.log(imagesfilepathlist)
      // imagesfilepathlist.forEach(function(item,index){
        
      //   var temp = {}
      //   temp.name = item.name
      //   temp.url = item.path+item.name  
      //   aaa.push(temp)

      // })
      // this.fileList = this.fileList.concat(aaa)
      // this.fileList.forEach(function (item,index) {
      //   console.log(item)
      // })