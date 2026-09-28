import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Antigravity Blog",
    default: "Antigravity Blog - เรียนรู้การใช้งาน AI Coding Assistant",
  },
  description:
    "บล็อกสำหรับนักพัฒนาที่ต้องการเรียนรู้การใช้งาน Antigravity AI Coding Assistant อย่างมืออาชีพ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-sans-thai)]">
        {children}
      </body>
    </html>
  );
}
