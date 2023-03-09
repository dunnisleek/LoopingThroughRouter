import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import NotFound from "./components/NotFound.vue";
import store from "./store";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true, //How to pass Vue Router params as props to components
    },

    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true, //How to pass Vue Router params as props to components
      component: () =>
        import(
          /* webpackChunkName: "Destination" */ "./views/DestinationDetails.vue" //this is use if you want lazy load that the import comp...
        ),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(
              /*webpackChunkName: "ExperienceDetails"*/ "./views/ExperienceDetails"
            ),
        },
      ],
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./views/UserView.vue"),
      meta: { requiresAuth: true },
    },
    { path: "/:notfound(.*)", component: NotFound },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/LoginForm.vue"),
    },
  ],
  linkExactActiveClass: "vue-active-class",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //need to login
    if (!store.user) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
const app = createApp(App);
app.use(router);
app.mount("#app");
