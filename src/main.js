import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import BaseApi from './api/BaseApi';
import config from './config';

// 需要加载mock数据
if (config.MOCK_ENABLE) {
  require('./data')
}

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.BaseApi = BaseApi; //将BaseApi挂载在Vue中

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
