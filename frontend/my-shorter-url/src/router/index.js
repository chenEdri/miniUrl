import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import UrlApp from '../views/UrlApp.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Register",
    component: Register
  },
  {
    path: "/url/:id",
    name: "UrlApp",
    component: UrlApp
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
