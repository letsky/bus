import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import Operation from "@/views/Operation.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/", component: Index},
    {path: "/about", component: About},
    {path: "/operation", component: Operation}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;