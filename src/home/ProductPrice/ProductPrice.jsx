import { Price } from "../../ds/atoms";
import { number } from "prop-types";

export default function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};
