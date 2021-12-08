import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Questions from "@/views/Questions/Questions.vue";
import Roadmaps from "@/views/Roadmaps/Roadmaps.vue";
import FrontEnd from "@/views/FrontEnd/FrontEnd.vue";
import BackEnd from "@/views/BackEnd/BackEnd.vue";
import Mobile from "@/views/Mobile/Mobile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/roadmaps",
    name: "Roadmaps",
    component: Roadmaps,
  },
  {
    path: "/frontend",
    name: "FrontEnd",
    component: FrontEnd,
  },
  {
    path: "/backend",
    name: "BackEnd",
    component: BackEnd,
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: Mobile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
