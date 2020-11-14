import Vue from 'vue';
import axios from 'axios';
import { Notification } from 'element-ui';
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'; // 配置 axios 请求的基准 url
// 响应拦截器处理错误信息
axios.interceptors.response.use(
	(res) => {
		/* 	状态码	含义	说明
		200	OK	请求成功
		201	CREATED	创建成功
		204	DELETED	删除成功
		400	BAD REQUEST	请求的地址不存在或者包含不支持的参数
		401	UNAUTHORIZED	未授权
		403	FORBIDDEN	被禁止访问
		404	NOT FOUND	请求的资源不存在
		422	Unprocesable entity	[POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误
		500	INTERNAL SERVER ERROR	内部错误 */
		if (res.data.meta.status != 200) {
			Notification.error({
				title: '错误',
				message: res.data.meta.msg
			});
		}
		return res.data;
	},
	() => {
		Notification.error({
			title: '错误',
			message: '网络请求失败，请检查网络连接'
		});
		return { data: null };
	}
);

Vue.prototype.$http = axios; // 将 axios 挂在 Vue 的原型上, 这样在组件中可以用 this.$http 发送请求了
