import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/proartcompany" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const, trailingSlash: true } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  typescript: isGitHubPages
    ? { tsconfigPath: "tsconfig.github-pages.json" }
    : undefined,
};

export default nextConfig;
