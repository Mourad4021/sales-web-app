import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Router } from "./Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { FavoritesContext } from "../contexts";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContext.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Router} />;
        </ThemeProvider>
      </FavoritesContext.Provider>
    </QueryClientProvider>
  );
}
