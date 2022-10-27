import { createRouter, createWebHistory } from "vue-router";
// import Login from "../views/Login.vue";
// import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  {
    path: '/auth',
    name: 'login',
    component: () => import('../views/Login.vue'),
    children: [
      { path: "login", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },
  {
    path: '/',
    name: 'home', 
    component: () => import('../views/Home.vue')
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import { createRouter, createWebHashHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHashHistory(import.meta.env.BASE_URL),
//   routes,
// })