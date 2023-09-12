import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Router } from "./Router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={Router} />;
      </ThemeProvider>
    </QueryClientProvider>
  );
}
