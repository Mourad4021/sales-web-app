import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ProductCondition } from "../ProductCondition";
import { withRow } from "../../hoc";
import { ProductImage } from "../ProductImage";
import { ProductDescription } from "../ProductDescription";
import { ProductPrice } from "../ProductPrice";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const productsColumns = [
    {
      field: "imageUrl",
      headerName: "Image produit",
      // renderCell: ({ row }) => {
      //   return <img src={row.imageUrl} alt={row.name} style={{ width: 100 }} />;
      // },
      renderCell: withRow(ProductImage),
    },

    {
      field: "description",
      headerName: "Description",
      flex: 1,
      // renderCell: ({ row }) => {
      //   const { id, name, description } = row;
      //   return (
      //     <Box>
      //       <Link to={`/products/${id}"`}>{name}</Link>
      //       <br />
      //       <Typography noWrap>{description}</Typography>
      //     </Box>
      //   );
      // },
      renderCell: withRow(ProductDescription),
    },
    {
      field: "price",
      headerName: "Prix",
      // renderCell: ({ row }) => {
      //   const { price } = row;
      //   return <Price value={price} />;
      // },
      renderCell: withRow(ProductPrice),
    },

    {
      field: "condition",
      headerName: "Etat",
      // renderCell: ({ row }) => {
      //   const { condition } = row;
      //   return <ProductCondition condition={condition}></ProductCondition>;
      // },
      renderCell: withRow(ProductCondition),
    },
    { field: "stock", headerName: "Stock" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={products}
        columns={productsColumns}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
