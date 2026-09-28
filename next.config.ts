import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ใช้ static export เพื่อ deploy บน GitHub Pages
  output: "export",

  // basePath ต้องตรงกับชื่อ repo เพื่อให้ GitHub Pages หา assets เจอ
  basePath: "/agent-skill-blog",

  // ใช้ unoptimized images เพราะ GitHub Pages ไม่รองรับ next/image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
