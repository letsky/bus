import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import Operation from "@/views/Operation.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/", component: Index},
    {path: "/about", component: About},
    {path: "/operation", component: Operation}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;