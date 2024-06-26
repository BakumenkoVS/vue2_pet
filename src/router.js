import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/page/MainPage";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      component: MainPage,
   },
   {
      path: "/photo",
      component: () => import("./page/PhotosPage"),
   },
];

export default new VueRouter({ mode: "history", routes });
