// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '../static/icon/iconfont.css'
import store from './store/store'
import VueJsonp from 'vue-jsonp'
import VueLazyLoad from 'vue-lazyload'
import VueSocketio from 'vue-socket.io';
// 进度条
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// 注入路由守卫
// import guarder from './help/guarder'
import http from './help/http'
// import socketio from 'socket.io-client';
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 注册路由守卫
// guarder(router)
Vue.use(VueSocketio,'http://localhost:3000/');
Vue.use(VueLazyLoad,{
    error:'../static/loading.gif',
    loading:'../static/loading.gif'
})
// Vue.prototype.http = http;
Vue.use(VueJsonp)
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  http,
  components: { App },
  template: '<App/>'
})
