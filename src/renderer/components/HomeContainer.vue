<template>

  <el-table :data="imagesfilepathlist">
    <el-table-column prop="path" label="路径" width="240"><span>Hello World</span>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="240">
    </el-table-column>
    <el-table-column prop="size" label="大小" width="240">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handlClick(scope.row)" type="info" plain icon="el-icon-download">导出</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>

</template>


<script>
import imageinfo from '../service/pictureinfo.js'
import bus from '../service/evenbus.js'
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
      // 同级 组件传值
      // bus.$emit("userDefinedEvent",this.imagesfilepathlist)
    },
    components: {  },
    methods: {
      handlClick(row) {
        console.log(row);
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

