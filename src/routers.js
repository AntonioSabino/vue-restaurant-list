import AddPage from "./components/AddPage";
import UpdatePage from "./components/UpdatePage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "AddPage",
    component: AddPage,
    path: "/add",
  },
  {
    name: "UpdatePage",
    component: UpdatePage,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
