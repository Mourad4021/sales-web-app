import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
export default function useProducts({ condition }) {
  const searchParams = new URLSearchParams();
  if (condition) searchParams.set("condition", condition);

  return useQuery(["products", { condition }], async () => {
    const response = await fetch(`${baseUrl}/products?${searchParams}`);
    const data = await response.json();
    return data;
  });
}
