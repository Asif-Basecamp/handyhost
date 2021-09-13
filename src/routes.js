import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { defaultLayout } from "./layouts";

// Route Views
import HomeView from "./components/home/home";

export default [
  {
    path: "/",
    exact: true,
    layout: defaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    exact: true,
    layout: defaultLayout,
    component: HomeView
  },
];