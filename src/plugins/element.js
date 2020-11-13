import Vue from 'vue';
import {
	Button,
	Form,
	FormItem,
	Input,
	Icon,
	Select,
	Col,
	DatePicker,
	TimePicker,
	Switch,
	Checkbox,
	RadioGroup,
	Radio,
	Message,
	Notification,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Container,
	Main,
	Aside,
	Header,
	Footer,
	MessageBox,
	Breadcrumb,
	breadcrumbItem
} from 'element-ui';
console.log(Container);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Breadcrumb);
Vue.use(breadcrumbItem);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notification = Notification; // 挂在 vue 原型上, 就可以在组件中使用 this.$notification 来弹出提示了
