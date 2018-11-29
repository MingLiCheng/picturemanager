<template>
  <div id="imagelist">
    <!-- <landing-page></landing-page> -->
    
    <el-container style="border: 1px solid #eee">
      
      <!-- 左侧边栏 -->
      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <router-link to="/imagelist/listtable">
                <el-menu-item index="1-1">图片列表</el-menu-item>
              </router-link>
              <router-link to="/imagelist/show">
                <el-menu-item index="1-2">相册</el-menu-item>
              </router-link>             
              <router-link to="/imagelist/upload">
                <el-menu-item index="1-3">图片上传</el-menu-item>
              </router-link>              
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title" >测试</template>
              <el-menu-item index="1-4-1" @click="createNewWin">打开新窗口</el-menu-item>
              <el-menu-item index="1-4-2" @click="newDialog">会话测试</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>

        <!-- 上方导航栏 -->
        <el-header style="text-align: right; font-size: 12px">         
        </el-header>

        <el-main>
          <!-- main 主要内容显示位置 -->
          <router-view :imageinfolist="imagesfilepathlist"></router-view>

        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import myutils from '../service/myutils.js'
  import imageinfo from '../service/pictureinfo.js'
  const path = require('path')

  export default {
    name: '',
    data(){
      return{
        imagesfilepathlist: [],
      }
    },
    created(){
      // 获取文件夹下的数据
      this.imagesfilepathlist = imageinfo.getImageInfo('static/upload/images/')    
    },
    methods:{
      createNewWin(){
        myutils.openNewWin('static/upload/images/11.jpg')
      },
      newDialog(){
        myutils.openImageDialog((selectedpath) => {
          console.log(selectedpath)         
        })
      }
    }

  }
</script>

<style>
  /* CSS */
  .el-header{
    background-color: #212529 !important;
  }
</style>
