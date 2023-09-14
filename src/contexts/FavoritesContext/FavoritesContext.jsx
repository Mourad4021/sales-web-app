import { arrayOf, node, string } from "prop-types";
import React from "react";
import { useSet } from "react-use";

const initialFavorites = [];

const FavoritesContext = React.createContext(initialFavorites);

const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = initialFavorites }) => {
  const [favoritesIds, { toggle }] = useSet(new Set(favorites));

  const toggleFavorite = (id) => () => toggle(id);
  return (
    <FavoritesContext.Provider
      value={{ favorites: Array.from(favoritesIds), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
  favorites: arrayOf(string),
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
