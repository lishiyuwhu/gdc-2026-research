import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDC 2026 深度调研报告",
  description: "GDC 2026 游戏开发者大会深度调研——行业报告、主题演讲、游戏设计、技术趋势、奖项全解析",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
