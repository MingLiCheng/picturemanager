<template>

  <el-table :data="imagesfilepathlist">
    <el-table-column label="预览"  width="110">
      <template slot-scope="scope">
        <img :src="scope.row.path+scope.row.name" alt="" style="width:65px; height:50px;">
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.name | imageNameFormat }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="size" label="大小" width="120">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="exportClick(scope.row)" type="info" plain icon="el-icon-download">导出</el-button>
        <el-button @click="lookClick(scope.row)" type="info" plain icon="el-icon-view">查看</el-button>
        <el-button @click="new_test(scope.row)" type="info" plain icon="el-icon-view">测试</el-button>
        <el-button type="danger" icon="el-icon-delete" plain disabled></el-button>
      </template>
    </el-table-column>
  </el-table>

</template>


<script>
import imageinfo from '../service/pictureinfo.js'
import myutils from '../service/myutils.js'
  export default {
    name: '',
    props: ['imageinfolist'],
    data(){
      return{

         imagesfilepathlist:[]
      }
    },
    components: {  },
    created(){
      this.imagesfilepathlist = imageinfo.getImageInfo('static/upload/images/')
    },
    watch:{
      imageinfolist:function(newvalue,oldvalue){
        this.imagesfilepathlist = newvalue

      }

    },
    methods: {
      // 导出图片 触发事件
      exportClick(row) {
        myutils.openImageDialog((selectedpath) => {
          if(selectedpath === 'No path'){
            return false
          }else{
            // 拿到路径
            imageinfo.copyfile(row.path+row.name,selectedpath)
            this.$message({ showClose: true, message: '保存成功', type: 'success', center: true
            });

          }
        })       
      },
      // 查看按钮 触发事件
      lookClick(row){
        console.log(row.path+row.name)
        console.log(window.location.href)
        window.location.href="#/imageview?path="+row.path+row.name  
        // this.$router.push({path: '/cart?goodsId=12'})   
      },
      
      new_test(row){
        myutils.openNewWin(row.path+row.name)
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

