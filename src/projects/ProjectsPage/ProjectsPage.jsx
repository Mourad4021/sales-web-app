import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  Typography,
} from "@mui/material";
import { useConstraints } from "../../hooks";

const contraints = [
  {
    name: "cost",
    label: "Cost",
  },
  {
    name: "scope",
    label: "Scope",
  },
  {
    name: "time",
    label: "Time",
  },
];

export default function ProjectsPage() {
  const { constraintsState, toggle } = useConstraints(contraints);
  return (
    <>
      <Typography variant="h1">Projects</Typography>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Project Management Triangle</FormLabel>
        <FormGroup>
          {contraints.map(({ name, label }) => (
            <FormControlLabel
              key={name}
              control={
                <Switch
                  checked={constraintsState[name]}
                  onChange={toggle(name)}
                  name={name}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
}
