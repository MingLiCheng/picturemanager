<template>
  <div id="app">
    <!-- <landing-page></landing-page> -->
    
    <el-container style="border: 1px solid #eee">
      
      <!-- 左侧边栏 -->
      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <router-link to="/imageslist">
                <el-menu-item index="1-1">图片</el-menu-item>
              </router-link>
              <router-link to="/">
                <el-menu-item index="1-2">图片列表</el-menu-item>
              </router-link>             
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/imageupload">
                <el-menu-item index="1-3">图片上传</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title" >新窗口测试</template>
              <el-menu-item index="1-4-1" @click="createNewWin">打开新窗口</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>

        <!-- 上方导航栏 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>用户</span>
        </el-header>

        <el-main>
          <!-- main 主要内容显示位置 -->
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import createwin from './service/createwindow.js'
  export default {
    name: 'ele-vue-picturemanager',
    components: {
    },
    methods:{
      createNewWin(){
        createwin()
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
