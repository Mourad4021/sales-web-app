import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.js";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Button, Footer } from "./styles.js";
import { FavoritesContext } from "../../../contexts";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const { favorites } = FavoritesContext.useContext();
  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/favorites",
      label: "Favorites",
    },
    {
      to: "/counters",
      label: "Counters",
    },
    {
      to: "/projects",
      label: "Projets",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sales
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menu.map(({ to, label }) => (
                <Button
                  key={label}
                  component={Link}
                  to={to}
                  current={pathname === to}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton component={Link} to="/favorites" sx={{ p: 0 }}>
                <Badge badgeContent={favorites.length} color="error">
                  <Avatar>M</Avatar>
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Typography variant="h7">© 2023</Typography>
      </Footer>
    </>
  );
}
