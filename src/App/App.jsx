import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Router } from "./Router";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Router} />;
    </ThemeProvider>
  );
}
