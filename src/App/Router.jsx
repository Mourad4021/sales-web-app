import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../home/HomePage";

import { MainTemplate } from "../ds/templates";
import CountersPage from "../counters/CountersPage/CountersPage";
import ProductPage from "../products/ProductPage/ProductPage";
import { ProjectsPage } from "../projects/ProjectsPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "projects/",
        element: <ProjectsPage />,
      },
    ],
  },
]);
