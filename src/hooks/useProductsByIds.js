import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProductsByIds({ ids } = {}) {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => searchParams.append("id", id));

  return useQuery(["products", { ids }], async () => {
    const response = await salesHttpClient.get(`/products?${searchParams}`);
    return ids.length > 0 ? response.data : [];
  });
}
