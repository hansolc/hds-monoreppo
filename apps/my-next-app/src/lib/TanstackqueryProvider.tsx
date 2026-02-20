// In Next.js, this file would be called: app/providers.tsx
"use client";

import { AppError } from "@/types/error";
// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
  isServer,
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ApiError } from "../axios/errorHandler";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useToastStore } from "@/store/toast";

function makeQueryClient() {
  const { actions } = useToastStore();
  return new QueryClient({
    mutationCache: new MutationCache({
      onError: (error, variables, context, mutation) => {
        const skipGlobalError = mutation.meta?.skipGlobalError;
        if (skipGlobalError) return;

        if (error instanceof AppError) {
          if (
            error.code === "VALIDATION_ERROR" ||
            error.code === "UNKNOWN_ERROR"
          ) {
            actions.showError(error.message);
          }
        }
      },
    }),
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client

        // TEMP for testing
        // staleTime: 0,
        staleTime: 60 * 1000, // 1분
        // api error 일 경우 재시도 하지 않음
        // 1번만 재시도
        retry: (failureCount, error) => {
          //   if (error instanceof ApiError) {
          //     return false;
          //   }
          return failureCount < 1;
        },
        // refetchOnWindowFocus: false  // 다시 브라우저가 focus 됐을 때 api 다시 호출출
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
