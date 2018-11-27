
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
import copyfile from '../service/copyfile.js'
import bus from '../service/evenbus.js'
  export default {
    data() {
      return {
        fileList: [
          // 数据模板
          // {name: 'food.jpeg',
          //  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          // }         
        ],
        addImageinfolist:[],
        imagesfilepathlist:[],
        sourcepath:'',
        topath:''
      };

    },
    created(){

    },
    mounted(){
    },
    beforeMount() {   
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
        copyfile(this.sourcepath,this.topath)
        this.fileList = []

      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePreview(file) {
        // console.log(file);
      },
      submitAction(){
        // -----
        copyfile(this.sourcepath,this.topath)
        this.fileList = []
      },
      selectImage(file,fileList){
        this.sourcepath = file.raw.path.replace(/\\/g,'/')
        // 给上传的 图片 做一个唯一的名字 --
        this.topath = 'static/upload/images/'+'-'+new Date().getTime()+'-'+file.raw.name
        var imageitem = {}
        imageitem.name =  file.raw.name
        imageitem.url = this.sourcepath
        imageitem.status = "ready"
        this.fileList.push(imageitem)

      }

    }
  }
</script>

<style>

</style>
