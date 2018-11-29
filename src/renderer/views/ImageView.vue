<template>
  <div class="warper">
    <el-header height="50px"> 
      <!-- <header-view></header-view> -->
    </el-header>
    <div class="image-box">
      <img @click.ctrl="test" :src="$route.query.path" alt="" />
    </div>     
    
    <!-- <div class="btn-box">
      <el-button type="info" icon="el-icon-zoom-out" circle @click="test"></el-button>
      <el-button type="info" icon="el-icon-zoom-in"  circle @click="test"></el-button>
    </div> -->
    <el-row type="flex" class="row-bg">
      <el-col :span="1" :offset="10"><el-button type="info" icon="el-icon-zoom-out" circle @click="test"></el-button></el-col>     
      <el-col :span="1" :offset="2"><el-button type="info" icon="el-icon-zoom-in"  circle @click="test"></el-button></el-col>     
    </el-row>
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
        // alert("点击el-header")
        this.$router.push({path: '/imagelist'})
      },
    }
  }
</script>

<style scoped>
.warper{
  position: relative;
}
.btn-box{
  width: 10%;
  height: 50px;
  /* background-color: pink; */
  padding: 2px 30px;
  position: fixed;
  left: 45%;
  top: 75%;
  border: 1px solid rgb(45, 45, 45);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;

}
.image-box{
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow: hidden;
}
.image-box img{
  zoom: 50%;

  
}

.bg-purple{
  background-color: tomato;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
