import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import QuestionsSlide from "@/views/QuestionsSlide.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/question",
    name: "Question",
    component: QuestionsSlide,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
