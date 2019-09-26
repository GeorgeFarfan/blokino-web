import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlokinoAbout from "./views/BlokinoAbout";
import GetStarted from "./views/GetStarted";
import Download from "./views/Download";
import Robots from "./views/Robots";
import Kit from "./views/Kit";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/blokino",
            name: "blokino",
            component: BlokinoAbout
        },
        {
            path: "/kit",
            name: "kit",
            component: Kit
        },
        {
            path: "/get_started",
            name: "get_started",
            component: GetStarted
        },
        {
            path: "/projects",
            name: "robots",
            component: Robots
        },

        {
            path: "/download",
            name: "download",
            component: Download
        }
    ]
});
