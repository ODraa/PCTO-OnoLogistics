import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/crono",
    name: "Crono",
    component: () => import("../components/Chrono.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
