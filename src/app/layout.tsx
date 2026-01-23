import type { Metadata } from "next";
import { Zen_Old_Mincho, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const bodyFont = Zen_Old_Mincho({
  variable: "--font-body",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "牧田哲明 | 木版画で辿るクラシックカーの歴史",
  description:
    "木版画家・牧田哲明の足跡を、年代記と作品の展示室のように巡るトリビュートサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
