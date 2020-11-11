<template>
	<div class="home-container">
		<div class="header">
			<img class="logo" src="../assets/images/logo.png" />
			<span class="title">后台管理系统</span>
			<el-button type="info" size="medium" class="exit" @click="exit"
				>退出</el-button
			>
		</div>
		<div class="body">
			<div class="left">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#44627f"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<el-submenu index="1">
						<template slot="title">
							<i class="iconfont icon-user"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="iconfont icon-tijikongjian"></i>
						<span slot="title">权限管理</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="iconfont icon-shangpin"></i>
						<span slot="title">商品管理</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="iconfont icon-danju"></i>
						<span slot="title">订单管理</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="iconfont icon-baobiao"></i>
						<span slot="title"> 数据统计</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="right">right</div>
		</div>
		<div class="footer">@版权所有</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false,
		};
	},
	methods: {
		exit() {
			sessionStorage.removeItem("token");
			this.$router.push("/login");
		},
		handleOpen() {},
		handleClose() {},
	},
};
</script>

<style lang="less" scoped>
.home-container {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.header {
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	background-color: #2b4b6b;
	color: #fff;
	font-size: 18px;
	.logo {
		width: 30px;
		height: 30px;
	}
	.title {
		margin-left: 15px;
	}
	.exit {
		margin-left: auto;
		margin-right: 0;
	}
}
.body {
	display: flex;
	flex: 1;
	.left {
		// width: 120px;
		background: #44627f;
		.el-menu-vertical-demo:not(.el-menu--collapse) {
			width: 200px;
			min-height: 400px;
		}
		.el-menu {
			border-right-color: #44627f;
		}
		.el-menu [class^="iconfont"] {
			margin-right: 8px;
			width: 24px;
			text-align: center;
			font-size: 20px;
			vertical-align: middle;
		}
	}
}
.footer {
	height: 50px;
	background-color: #2b4b6b;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
}
</style>