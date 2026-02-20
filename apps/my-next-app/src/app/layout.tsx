import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MUIThemeProvider from "@/lib/MUIThemeProvider";
import TanstackqueryProvider from "@/lib/TanstackqueryProvider";
import Toast from "@/components/Toast";

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
            <MUIThemeProvider>
              <Toast />
              {children}
            </MUIThemeProvider>
          </AppRouterCacheProvider>
        </TanstackqueryProvider>
      </body>
    </html>
  );
}
