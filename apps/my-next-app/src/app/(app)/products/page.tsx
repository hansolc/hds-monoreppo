import http from "@/lib/http";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function ProductPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await http.get("/products");
      return res.data;
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      add children
    </HydrationBoundary>
  );
}
