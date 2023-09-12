import { Grid, Typography } from "@mui/material";
import { Counter } from "../../ds/organisms";

export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CountersPage</Typography>
      <Grid justifyContent="center" container spacing={10}>
        <Grid item>
          <Counter counterId={1} />
        </Grid>
        <Grid item>
          <Counter initialValue={42} counterId={2} />
        </Grid>
        <Grid item>
          <Counter initialValue={10} step={5} counterId={3} />
        </Grid>
      </Grid>
    </>
  );
}
