import { Grid, Skeleton, Typography } from "@mui/material";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";

export default function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data: product } = useProduct(id);

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Typography variant="h1">
        {isLoading ? <Skeleton /> : product.name}
      </Typography>
      <Grid container paddingX={2}>
        <Grid item md={4}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <ProductImage
              imageUrl={product.imageUrl}
              name={product.name}
              width={350}
              height={350}
            />
          )}
        </Grid>
        <Grid container item direction="column" md={6}>
          <Grid container item spacing={2} marginBottom={2}>
            {isLoading ? (
              <Skeleton variant="rectangular" />
            ) : (
              <>
                <Grid item>
                  <ProductCondition condition={product.condition} />
                </Grid>
                <Grid item>
                  <ProductPrice price={product.price} />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item>
            <Typography>
              {isLoading ? <Skeleton /> : product.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
