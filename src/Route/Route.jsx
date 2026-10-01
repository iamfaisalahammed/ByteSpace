import { createBrowserRouter } from "react-router";

import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/courses";
import CourseDetails from "../Pages/Courses/Coursedetails";
import Creator from "../Pages/Creators/creator";
import NotFound from "../Component/NotFound";
import Register from "../Pages/Auth/register";
import Login from "../Pages/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "courses/:id",
        Component: CourseDetails,
      },
      {
        path: "creators",
        Component: Creator,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);