import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const Footer = styled("footer")`
  background-color: #1976d2;
  color: white;
  padding: 12px;
  text-align: center;
  margin-top: 24px;
`;
/**
 * Button styled component for the nav links
 *
 * shouldForwardProp: is used to prevent the current prop from being passed to the DOM
 *
 * @returns React.Component
 */
export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ theme, current }) => ({
  margin: `${theme.spacing(1)} 0`,
  color: "white",
  borderBottom: current ? "2px solid white" : 0,
}));
