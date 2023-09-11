import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import { theme } from "./theme";
import { Router } from "./Router.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />;
    </ThemeProvider>
  );
}
