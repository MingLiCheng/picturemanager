<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'ele-vue-picturemanager',
    components: {
    },
    methods:{
    }
  }
</script>

<style>
::-webkit-scrollbar{
  width: 0px;
}
  /* CSS */
  .el-header{
    background-color: #212529 !important;
  }
  .no-drag{
    -webkit-app-region: no-drag;
  }
</style>
