import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProducts({ condition }) {
  const searchParams = new URLSearchParams();
  if (condition) searchParams.set("condition", condition);

  return useQuery(["products", { condition }], async () => {
    const response = await salesHttpClient.get(`/products?${searchParams}`);
    return response.data;
  });
}
