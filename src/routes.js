// import HomeComponent from "./components/HomeComponent.vue";
// import UsersComponent from "./components/UsersComponent.vue";
import UserComponent from "./components/UserComponent.vue";

const HomeComponent = () => import("./components/HomeComponent.vue");
const UsersComponent = () => import("./components/UsersComponent.vue");

export const ROUTES = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "/Users",
    component: UsersComponent,
    name: "Users",
    alias: "/Usuarios"
    // children: [
    //   {
    //     path: ":id",
    //     component: UserComponent,
    //     name: "userInfo"
    //   }
    // ]
  },
  {
    path: "/Users/:id",
    component: UserComponent,
    name: "userInfo"
  },
  // {
  //   path: "/Usuarios",
  //   redirect: "/Users"
  // },
  {
    path: "*",
    redirect: "/"
  }
];
