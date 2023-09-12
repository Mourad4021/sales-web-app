import { useQuery } from "react-query";

export default function useProducts() {
  return useQuery(["products"], async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
  });
}
