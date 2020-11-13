<template>
	<el-container class="home-container">
		<el-header class="header">
			<img
				class="logo"
				src="../assets/images/logo.png"
				@click="toggleCollapse"
			/>
			<span class="title">后台管理系统</span>
			<el-button type="info" size="medium" class="exit" @click="exit"
				>退出</el-button
			>
		</el-header>
		<el-container class="body">
			<el-aside class="aside" style="width: auto">
				<el-menu
					default-active="1-1"
					:collapse="isCollapse"
					unique-opened
					background-color="#44627f"
					text-color="#fff"
					active-text-color="#4DA3FF"
					:collapse-transition="false"
				>
					<el-submenu
						v-for="item in menuData"
						:key="item.id"
						:index="item.id + ''"
					>
						<template slot="title">
							<i :class="iconObj[item.id]"></i>
							<span>{{ item.authName }}</span>
						</template>
						<el-menu-item
							v-for="subItem in item.children"
							:key="subItem.id"
							:index="subItem.id + ''"
						>
							<i class="el-icon-menu"></i>
							<span slot="title">{{ subItem.authName }}</span>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
		<el-footer class="footer">@版权所有</el-footer>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false,
			menuData: [],
			iconObj: {
				125: "iconfont icon-user",
				103: "iconfont icon-tijikongjian",
				101: "iconfont icon-shangpin",
				102: "iconfont icon-danju",
				145: "iconfont icon-baobiao",
			},
		};
	},
	created() {
		this.$http.get("menus").then(({ data }) => {
			this.menuData = data;
		});
	},
	methods: {
		exit() {
			sessionStorage.removeItem("token");
			this.$router.push("/login");
		},
		toggleCollapse() {
			this.isCollapse = !this.isCollapse;
		},
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
}
.aside {
	width: 200px;
	background: #44627f;
	.el-menu {
		border-right-color: #44627f;
		&:not(.el-menu--collapse) {
			width: 200px;
		}
	}
	.el-menu,
	.el-submenu {
		outline: none;
		[class^="iconfont"] {
			margin-right: 8px;
			width: 24px;
			text-align: center;
			font-size: 20px;
			vertical-align: middle;
			color: currentColor;
		}
		[class^="el-icon-"] {
			color: currentColor;
		}
	}
}
.footer {
	background-color: #2b4b6b;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
}
</style>