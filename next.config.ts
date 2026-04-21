import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Firebase Hosting için statik çıktı */
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
