import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "userTemplate",
    component: () => import("../views/Users/Template.vue"),
    children: [
      {
        path: "",
        name: "users",
        component: () => import("../views/Users/Index.vue")
      },
      {
        path: "/addUser",
        name: "createUser",
        component: () => import("../views/Users/Create.vue"),
      },
    ],
  },
  {
    path: "/posts",
    name: "postTemplate",
    component: () => import("../views/posts/Template.vue"),
    children: [
      {
        path: "",
        name: "posts",
        component: () => import("../views/posts/Index.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
