import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "../home/HomePage";

import { CountersPage } from "../counters/CountersPage";
import { MainTemplate } from "../MainTemplate";
import "./styles.css";

const router = createBrowserRouter([
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
