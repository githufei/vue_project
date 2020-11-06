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
	Notification
} from 'element-ui';

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
Vue.prototype.$message = Message;
Vue.prototype.$notification = Notification; // 挂在 vue 原型上, 就可以在组件中使用 this.$notification 来弹出提示了
