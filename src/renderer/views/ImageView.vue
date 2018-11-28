<template>
  <div >
      <el-header height="50px" style="-webkit-app-region: drag" @click="test"> 
        <!-- <header-view></header-view> -->
      </el-header>
    <b-img @click.ctrl="test" src="static/upload/images/22.jpg" fluid-grow alt="Fluid-Grow image" />
  </div>
</template>

<script>
import myutils from '../service/myutils.js'
import HeaderView from '../components/Header'
  export default {
    name: '',
    components: { 
      HeaderView
     },
    methods: {
      test(){
        alert("点击el-header")
      },
    }
  }
</script>

<style scoped>

</style>
