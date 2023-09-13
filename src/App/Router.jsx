import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../home/HomePage";

import { MainTemplate } from "../ds/templates";
import CountersPage from "../counters/CountersPage/CountersPage";
import ProductPage from "../products/ProductPage/ProductPage";

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
    ],
  },
]);
