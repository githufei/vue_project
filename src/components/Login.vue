<template>
	<div class="login-container">
		<div class="login-box">
			<div class="avatar-box">
				<img src="../assets/images/logo.png" alt="" />
			</div>
			<el-form
				class="login_form"
				:model="form"
				:rules="rules"
				ref="ruleForm"
			>
				<el-form-item prop="username">
					<el-input
						prefix-icon="iconfont icon-user"
						placeholder="请输入用户名"
						v-model="form.username"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						prefix-icon="iconfont icon-3702mima"
						placeholder="请输入密码"
						show-password
						v-model="form.password"
					></el-input>
				</el-form-item>
				<el-form-item class="login_btns">
					<el-button type="primary" @click="handleLogin"
						>登录</el-button
					>
					<el-button type="info" @click="handleReset">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				username: "admin",
				password: "123456",
			},
			rules: {
				username: [
					{
						required: true,
						message: "请输入用户名",
						trigger: "blur",
					},
					{
						min: 3,
						max: 15,
						message: "长度在 3 到 15 个字符",
						trigger: "blur",
					},
				],
				password: [
					{
						required: true,
						message: "请输入密码",
						trigger: "blur",
					},
					{
						min: 6,
						max: 10,
						message: "长度在 6 到 10 个字符",
						trigger: "blur",
					},
				],
			},
		};
	},
	methods: {
		handleLogin() {
			this.$refs.ruleForm.validate(async (valid) => {
				if (valid) {
					// 表单校验通过后发送登陆请求
					let { data } = await this.$http.post("login", this.form);
					console.log(data);
					if (data.token) {
						sessionStorage.setItem("token", data.token); // 登陆成功后将 token 缓存起来
						this.$router.push("/home");
					}
				}
			});
		},
		// 重置按钮清空表单的值和校验提示
		handleReset() {
			this.$refs.ruleForm.resetFields();
		},
	},
};
</script>

<style lang="less" scoped>
.login-container {
	background: #2b4b6b;
	width: 100%;
	height: 100%;
}
.login-box {
	width: 450px;
	height: 300px;
	background: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 5px;
	transform: translate(-50%, -50%);
}
.avatar-box {
	width: 130px;
	height: 130px;
	border: 1px solid #eee;
	border-radius: 50%;
	padding: 10px;
	overflow: hidden;
	background-color: #fff;
	box-shadow: 0 0 5px #ccc;
	position: relative;
	left: 50%;
	transform: translate(-50%, -50%);
	img {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #eee;
	}
}
.login_form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	.login_btns {
		display: flex;
		justify-content: flex-end;
	}
}
</style>