<template>
  <div class="warper">
    <el-header height="50px"> 
      <!-- <header-view></header-view> -->
    </el-header>
    <div class="image-box">
      <img @click.ctrl="test" :class="'image-size'+flag"  :src="$route.query.path" alt="" />
    </div>     
    
    <div class="btn-box">
      <el-button type="info" icon="el-icon-zoom-out" circle @click="test"></el-button>
    </div>
    <el-row type="flex" class="row-bg">
      <el-col :span="1" :offset="10"><el-button type="info" icon="el-icon-zoom-out" circle @click="flag = flag > -2 ? flag-1 : flag"></el-button></el-col>     
      <el-col :span="1" :offset="2"><el-button type="info" icon="el-icon-zoom-in"  circle @click="flag = flag < 5 ? flag+1 : flag"></el-button></el-col>     
    </el-row>
  </div>
</template>

<script>
import myutils from '../service/myutils.js'
import HeaderView from '../components/Header'
  export default {
    name: '',
    data(){
      return{
        flag: 0,
      }
    },
    components: { 
      HeaderView
     },
    methods: {
      test(){
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
  left: 0;
  top: 0%;
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

.bg-purple{
  background-color: tomato;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.image-size-2{
  zoom: 30%;  
}
.image-size-1{
  zoom: 40%;  
}
.image-size0{
  zoom: 50%;  
}
.image-size1{
  zoom: 60%;  
}
.image-size2{
  zoom: 80%;  
}
.image-size3{
  zoom: 100%;  
}
.image-size4{
  zoom: 120%;  
}
.image-size5{
  zoom: 200%;  
}

</style>
