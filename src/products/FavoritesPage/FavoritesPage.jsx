import { LinearProgress, Typography } from "@mui/material";
import { productsColumns } from "../ProductColumns";
import { DataGrid } from "@mui/x-data-grid";
import { useProductsByIds } from "../../hooks";
import { FavoritesContext } from "../../contexts";

export default function FavoritesPage() {
  const { favorites } = FavoritesContext.useContext();
  const {
    isLoading,
    error,
    data: products,
  } = useProductsByIds({ ids: favorites });

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Typography>FavoritesPage</Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={products}
          columns={productsColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
