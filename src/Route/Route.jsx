import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import courses from "../Pages/Courses/courses";
import CourseDetails from "../Pages/Courses/Coursedetails";
import Creator from "../Pages/Creators/creator";
import NotFound from "../Component/NotFound";

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
        path: "/courses",
        Component: courses,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "creators",
        Component: Creator,
      },
    ],
  },
    {
    path: "*",
    Component: NotFound,
  },
]);
