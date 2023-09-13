import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ProductCondition } from "../ProductCondition";
import { withRow } from "../../hoc";
import { ProductImage } from "../ProductImage";
import { ProductDescription } from "../ProductDescription";
import { ProductPrice } from "../ProductPrice";
import { useCondition, useProducts } from "../../hooks";

export default function HomePage() {
  const [condition, setCondition] = useCondition();

  const { isLoading, error, data: products } = useProducts({ condition });

  if (isLoading) return <LinearProgress />;
  if (error) return "An error has occurred: " + error.message;
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
    <>
      <Stack direction="row" spacing={6} justifyContent="center" marginY={2}>
        <TextField label="Recheche" sx={{ width: 400 }} />
        <FormControl>
          <FormLabel id="condition-label">Condition</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-label"
            name="condition"
            value={condition}
            onChange={setCondition}
          >
            <FormControlLabel value="" control={<Radio />} label="Toutes" />
            <FormControlLabel value="new" control={<Radio />} label="Neuf" />
            <FormControlLabel
              value="used"
              control={<Radio />}
              label="Ocassion"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Box>
        <DataGrid
          rows={products}
          columns={productsColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      </Box>
    </>
  );
}
