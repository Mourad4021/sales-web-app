import { string } from "prop-types";

export default function ProductImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name} style={{ width: 100 }} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};
