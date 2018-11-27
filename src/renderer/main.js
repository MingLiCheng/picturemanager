import Vue from 'vue'

import App from './App'


// 引入element-ui 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入 bootstarp-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import router from './router'





// Vue 全局配置
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
  router,
}).$mount('#app')
