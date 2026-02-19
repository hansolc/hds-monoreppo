import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MUIThemeProvider from "@/lib/MUIThemeProvider";
import TanstackqueryProvider from "@/lib/TanstackqueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackqueryProvider>
          <AppRouterCacheProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
          </AppRouterCacheProvider>
        </TanstackqueryProvider>
      </body>
    </html>
  );
}
