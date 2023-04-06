import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TemplateUser from "../views/users/Template.vue";
import IndexUser from "../views/users/Index.vue";
import ShowUser from "../views/users/Show.vue";
import TemplatePost from "../views/posts/Template.vue";
import IndexPost from "../views/posts/Index.vue";
import ShowPost from "../views/posts/Show.vue";
import CreatePost from "../views/posts/Create.vue";
import EditPost from "../views/posts/Edit.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "userTemplate",
    component: TemplateUser,
    children: [
      { path: "", name: "users", component: IndexUser },
      { path: ":id", name: "userId", component: ShowUser },
    ],
  },
  {
    path: "/posts",
    name: "postTemplate",
    component: TemplatePost,
    children: [
      { path: "", name: "posts", component: IndexPost },
      { path: ":id", name: "postId", component: ShowPost },
      { path: "create", name: "createPost", component: CreatePost },      
      { path: "edit/:id", name: "editPost", component: EditPost },      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
