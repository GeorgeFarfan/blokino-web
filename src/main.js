import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker"; 
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
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
