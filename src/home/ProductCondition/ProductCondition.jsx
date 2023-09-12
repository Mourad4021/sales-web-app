import { Chip } from "@mui/material";
import { oneOf } from "prop-types";

/**
 * ProductCondition
 *
 * @param {Object} props
 * @param {"new"|"used"} props.condition
 * @returns {React.ReactElement}
 */
export default function ProductCondition({ condition }) {
  return (
    <Chip
      label={condition === "new" ? "Neuf" : "Occasion"}
      color={condition === "new" ? "primary" : "secondary"}
    />
  );
}

ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
