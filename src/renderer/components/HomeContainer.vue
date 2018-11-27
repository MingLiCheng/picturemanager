<template>

  <el-table :data="imagesfilepathlist">
    <el-table-column prop="imsrc" label="日期" width="240">
    </el-table-column>
    <el-table-column prop="imsrc" label="姓名" width="240">
    </el-table-column>
    <el-table-column prop="imsrc" label="地址">
    </el-table-column>
  </el-table>

</template>


<script>
import { getImageFilesPath } from '../service/imagesfile.js'
  export default {
    created(){
      this.imagesfilepathlist = getImageFilesPath('static/upload/images/')
      console.log(this.imagesfilepathlist)
    },
    data() {
      return {
        imagesfilepathlist:[]
      }
    },
    
  };
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

