import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { string } from "prop-types";
import { FavoritesContext } from "../../contexts";

export default function ProductActions({ id }) {
  const { favorites, toggleFavorite } = FavoritesContext.useContext();
  const isFavotite = favorites.includes(id);
  return (
    <IconButton onClick={toggleFavorite(id)}>
      {isFavotite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}

ProductActions.propTypes = {
  id: string,
};
