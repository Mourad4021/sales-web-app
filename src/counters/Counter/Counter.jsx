import { number } from "prop-types";
import { useCounter } from "../../hooks";
import { Button, ButtonGroup, Card, Chip } from "@mui/material";
import { CardContent } from "./styles";
import SpeedIcon from "@mui/icons-material/Speed";

export default function Counter({ initialValue = 0, step = 1, counterId }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <Card
      sx={{ maxWidth: 200, margin: "2rem", borderRadius: "20px" }}
      elevation={3}
    >
      <CardContent>
        <Chip
          label={`Counter ${counterId}`}
          sx={{ margin: "0.5rem" }}
          color="primary"
          icon={<SpeedIcon />}
        />
        <ButtonGroup>
          <Button variant="contained" onClick={increment}>
            +{step}
          </Button>
          <Button variant="outlined">{counter}</Button>
          <Button variant="contained" onClick={decrement}>
            -{step}
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
  counterId: number,
};
