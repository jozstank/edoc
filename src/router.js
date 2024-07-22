import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/SearchView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotfoundPage",
    component: () => import("@/views/NotFoundView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
