import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home';
import AllTickets from '../pages/AllTickets';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {index: true, Component: Home},
        {path:'all-tickets', Component: AllTickets},
    ]
  }
]);