// import Authorization from "./configuration/Authorization";

// layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx";
// views
import Views from "./modules";

// const loggedUser = Authorization([UserRole.SUPER_USER])
// const loggedUser = Authorization("ROLE_ADMIN");

const routes = [
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.LoginView
  },
  {
    layout: DefaultLayout,
    component: Views.NotFoundView
  }
];

export default routes;
