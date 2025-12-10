import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home';
import AllTickets from '../pages/AllTickets';
import AuthLayout from "../layouts/AuthLayout";
import Login from '../pages/Login';
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {index: true, Component: Home},
        {path:'all-tickets', Component: AllTickets},
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
        {path: 'login', Component: Login},
        {path: 'register', Component: Register},
    ]
  }
]);