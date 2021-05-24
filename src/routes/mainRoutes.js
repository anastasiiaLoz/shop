import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)),
    isPrivate: false,
    isRestricted: false
  },
  {
    name: "Products",
    path: "/products",
    exact: false,
    component: lazy(() => import("../pages/ProductsPage" /*webpackChunkName:'ProductsPage'*/)),
    isPrivate: false,
    isRestricted: false
  },
  {
    name: "Admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage" /*webpackChunkName:'AdminPage'*/)),
    isPrivate: true,
    isRestricted: false
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)),
    isPrivate: false,
    isRestricted: true
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)),
    isPrivate: false,
    isRestricted: true
  }
];
export default mainRoutes;
