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
import { useCondition, useProducts } from "../../hooks";
import { productsColumns } from "../../products/ProductColumns";

export default function HomePage() {
  const [condition, setCondition] = useCondition();

  const { isLoading, error, data: products } = useProducts({ condition });

  if (isLoading) return <LinearProgress />;
  if (error) return "An error has occurred: " + error.message;

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
