import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vueScrollto from 'vue-scrollto'
import VueCodemirror from 'vue-codemirror'
 
// require styles
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror, /* { 
    options: { theme: 'base16-dark', ... },
    events: ['scroll', ...]
  } */)
Vue.config.productionTip = false;
Vue.use(vueScrollto)
Vue.use(BootstrapVue);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
