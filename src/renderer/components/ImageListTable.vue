<template>

  <el-table :data="imagesfilepathlist">
    <el-table-column label="预览"  width="110">
      <template slot-scope="scope">
        <img :src="scope.row.path+scope.row.name" alt="" style="width:50px; height:50px;">
      </template>
    </el-table-column>
    <!-- <el-table-column prop="path" label="路径" width="240"><span>Hello World</span>
    </el-table-column> -->
    <el-table-column prop="name" label="名称" width="120">
    </el-table-column>
    <el-table-column prop="size" label="大小" width="120">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="exportClick(scope.row)" type="info" plain icon="el-icon-download">导出</el-button>
        <el-button @click="lookClick(scope.row)" type="info" plain icon="el-icon-view">查看</el-button>
        <el-button type="danger" icon="el-icon-delete" plain></el-button>
      </template>
    </el-table-column>
  </el-table>

</template>


<script>
import imageinfo from '../service/pictureinfo.js'
import bus from '../service/evenbus.js'
import myutils from '../service/myutils.js'
  export default {
    name: '',
    data(){
      return{
        imagesfilepathlist:[]
      }
    },
    created(){
      this.imagesfilepathlist = imageinfo.getImageInfo('static/upload/images/')
      // console.log(this.imagesfilepathlist)
    },
    mounted(){
      // 同级 组件传值 测试
      // bus.$emit("userDefinedEvent",this.imagesfilepathlist)
    },
    components: {  },
    methods: {
      // 导出图片 触发事件
      exportClick(row) {
        myutils.openImageDialog((selectedpath) => {
          // 这里的路径没有转化 --没有报错？
          imageinfo.copyfile(row.path+row.name,selectedpath)

          this.$message({
            showClose: true,
            message: '保存成功',
            type: 'success',
            center: true
          });
        })       
      },
      // 查看按钮 触发事件
      lookClick(row){
        
      }
      
    }
  }
</script>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

