<template>
<div id="imagelist">
<b-container fluid class="p-3 bg-dark">
  <b-row >
    <b-col v-for="item in imagesfilepathlist" :key="item.imsrc">
      <div class="image-box">
      <b-img thumbnail fluid :src="item.imsrc" alt="Thumbnail" />
      <p>{{ item.imsrc }}</p>
      </div>
    </b-col>
  </b-row>
</b-container>
<div>
  <h5>Small image with <code>fluid</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
  <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-Grow image" />
</div>
</div>
</template>

<script>
// import readfile from '../assets/lib/index'
import { getImageFilesPath } from '../service/imagesfile.js'

  export default {
    name: '',
    data(){
      return{
        imagesfilepathlist:[]
      }
    },
    created(){
      this.imagesfilepathlist = getImageFilesPath('static/upload/images/')
      console.log(this.imagesfilepathlist)
    },
    components: {  },
    methods: {
      
    }
  }
</script>

<style>
.col p{
  /* color: aliceblue; */
  /* width: 120px; */
  overflow: hidden;
  background-color:#ffffff; 
  border:  1px solid black;
  border-radius:8px; 
}
.image-box{
  white-space: nowrap;
}
 
</style>
