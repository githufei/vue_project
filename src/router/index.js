import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue';
import Users from '../components/Users.vue';
Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/login' },
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		redirect: '/welcome',
		children: [
			{
				path: '/welcome',
				component: Welcome
			},
			{
				path: '/users',
				component: Users
			}
		]
	}
];

const router = new VueRouter({
	routes
});

// 路由导航守卫 -- 当用户没登录时, 如果访问需要登录才能看到的页面, 自动跳转到登录页面
// to: 要进入的页面
// from: 要离开的页面
// next: 是个函数, 必须被调用, 才能跳转页面, 可以传递参数, 跳转到对应的页面
router.beforeEach((to, from, next) => {
	let token = sessionStorage.getItem('token');
	if (!token && to.path !== '/login') {
		next('/login');
	} else {
		next();
	}
});

export default router;
