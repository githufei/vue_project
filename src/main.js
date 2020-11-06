import Vue from 'vue';
import App from './App.vue'; // 跟组件
import router from './router';
import './plugins/element'; // 引入 element 组件库
import './assets/style/global.less'; // 引入全局样式
import './utils/http';
new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
