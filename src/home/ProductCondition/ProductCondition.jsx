import { oneOf } from "prop-types";

/**
 * ProductCondition
 *
 * @param {Object} props
 * @param {"new"|"used"} props.condition
 * @returns {React.ReactElement}
 */
export default function ProductCondition({ condition }) {
  return condition === "new" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
