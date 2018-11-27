import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ImageList from '../components/ImageList'
import HomeContainer from '../components/HomeContainer.vue'





Vue.use(Router)

export default new Router({
  
  routes: [
    { path: '/',component:HomeContainer},
    { path: '/imageslist',component:ImageList},
    // { path: '/imageslist',component:ImageList},
  ],
  linkActiveClass:'mui-active' // 覆盖默认的样式 router-link-active
})
