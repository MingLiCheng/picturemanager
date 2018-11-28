import Vue from 'vue'
import Router from 'vue-router'


// import ImageList from '../views/ImageList.vue'




Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/',
      redirect:'/imagelist'
    },
    {
      path:'/imageview',
      component:() => import('../views/ImageView.vue')
    },
    {
      path:'/imagelist',
      redirect:'/imagelist/listtable',
      component:() => import('../views/ImageList.vue'),
      children:[
        {
          path:'listtable',// 显示图片信息的表格
          name:'listtable',
          component: ()=> import('../components/ImageListTable.vue')
        },
        {
          // 文件上传
          path:'upload',
          name:'upload',
          component: () => import('../components/ImageUpload.vue')
        },
        {
          // 图片相册方式展示
          path:'show',
          name:'show',
          component: () =>import('../components/ImageShow.vue')
        }
      ]
    }
],
  linkActiveClass: 'mui-active' // 覆盖默认的样式 router-link-active
})
