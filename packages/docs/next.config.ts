import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@backoffice-hq/ui"]
};

export default nextConfig;
