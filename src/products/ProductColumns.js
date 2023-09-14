import { withRow } from "../hoc";
import { ProductActions } from "./ProductActions";
import { ProductCondition } from "./ProductCondition";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";

export const productsColumns = [
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
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    renderCell: withRow(ProductActions),
  },
];
