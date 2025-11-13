import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  // Turborepo 최적화
  transpilePackages: ["@repo/ui"],

  // 실험적 기능
  experimental: {
    // 최적화된 패키지 imports
    optimizePackageImports: ["@repo/ui"],
  },
};

export default withVanillaExtract(nextConfig);
