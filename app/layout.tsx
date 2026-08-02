import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pro-art-company-hk.brks4p8t6v.chatgpt.site"),
  title: "Pro Art Company｜香港會所健身課程專業夥伴",
  description: "為香港私人屋苑會所策劃及承辦瑜伽、普拉提、健康舞、Zumba 及排舞課程。由規劃、導師到行政，一站式妥善處理。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Pro Art Company｜香港會所健身課程專業夥伴", description: "將健康與快樂，帶到每一個屋苑會所。", images: ["/og.png"], locale: "zh_HK", type: "website" },
  twitter: { card: "summary_large_image", title: "Pro Art Company", description: "將健康與快樂，帶到每一個屋苑會所。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant-HK"><body>{children}</body></html>;
}
