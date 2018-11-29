
<template>
  <el-upload
  class="upload-demo"
  ref="upload"
  action="/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-change="selectImage"
  :file-list="fileList"
  list-type="picture"
  :auto-upload="false"
  :http-request="submitAction"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
import imageinfo from '../service/pictureinfo.js'
  export default {
    data() {
      return {
        fileList: [
          // 数据模板
          // {name: 'food.jpeg',
          //  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          // }         
        ],
        sourcepath:'',
        topath:''
      };

    },
    props:['imageinfolist'],
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
        // 点击上传 首先把 filelist中的所有的数据对应的 路径都保存到 一个数组中
        this.fileList.map(imageinfo.pathFormat).forEach(element => {
          alert(element.sourcepath+'-------'+element.topath)
          imageinfo.copyfile(element.sourcepath,element.topath)
        });       
        // 单文件上传
        // imageinfo.copyfile(this.sourcepath,this.topath)
        this.fileList = []
        this.$message({
            showClose: true,
            message: '上传成功',
            type: 'success',
            center: true
        });
        this.$emit('update:imageinfolist')

      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
        // 删除待上传的列表文件时，将对应的文件从数组中删除
      },
      handlePreview(file) {
        // console.log(file);
      },
      submitAction(){
        // 提交应该执行这里！！！？？
        alert('1')
        imageinfo.copyfile(this.sourcepath,this.topath)
        this.fileList = []
      },
      selectImage(file,fileList){
        // 给上传的 图片 做一个唯一的名字 --
        // this.topath = 'static/upload/images/'+'-'+new Date().getTime()+'-'+file.raw.name
        var imageitem = {}
        imageitem.name =  file.raw.name
        imageitem.url = file.raw.path.replace(/\\/g,'/')
        // imageitem.status = "ready"
        this.fileList.push(imageitem)
      }

    }
  }
</script>

<style>

</style>
