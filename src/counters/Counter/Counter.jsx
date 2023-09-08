import { number } from "prop-types";
import { useCounter } from "../../hooks";
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { CardContent } from "./styles";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <Card sx={{ maxWidth: 200, margin: "2rem" }} elevation={5}>
      <CardContent>
        <Typography variant="h3" component="p">
          {counter}
        </Typography>
        <ButtonGroup variant="outlined">
          <Button onClick={increment}>+{step}</Button>
          <Button onClick={decrement}>-{step}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
