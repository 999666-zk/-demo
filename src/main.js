import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// vant 组件使用

import {
  Button,
  NavBar,
  Icon,
  Tabbar,
  TabbarItem,
  Cell,
  Tabs,
  Tab,
  Form,
  Field,
  CountDown,
  Card,
  Loading,
  SwipeCell,
} from "vant";
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(Tab);
Vue.use(Form);
Vue.use(Field);
Vue.use(Tabs);
Vue.use(CountDown);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(Loading);

// 移动端兼容
import "amfe-flexible";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
