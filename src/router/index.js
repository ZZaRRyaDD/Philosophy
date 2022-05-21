import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import QuestionsSlide from "@/views/QuestionsSlide.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
