import http from "@/lib/http";

export const getProducts = async () => {
  try {
    const res = await http.get("/products");
  } catch (error) {}
};
