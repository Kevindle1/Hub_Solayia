import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Les packages internes sont consommés en TypeScript source.
  transpilePackages: ["@solayia/ui", "@solayia/supabase"],
};

export default nextConfig;
