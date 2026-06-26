import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set project root to avoid resolving to Desktop's parent node_modules
    root: path.resolve("."),
  },
};

export default nextConfig;
