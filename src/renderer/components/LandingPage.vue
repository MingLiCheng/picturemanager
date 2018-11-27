<template>
  <div id="wrapper">
  <el-container>
    <el-header>图片展示</el-header>
    <el-container>
      <el-aside width="200px"><el-button v-on:click="readfilebtn" type="primary">主要按钮</el-button></el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import readfile from '../assets/lib/index'
  export default {
    name: '',
    components: {  },
    methods: {
      readfilebtn(){
        readfile()
      },
      aler(){

      }
    }
  }
</script>

<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
