import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pro-art-company-hk.brks4p8t6v.chatgpt.site"),
  title: "Pro Art Company｜私人屋苑會所健身課程承辦商",
  description: "為香港私人屋苑會所提供瑜伽、普拉提、健康舞、尊巴及排舞課程策劃與一站式承辦服務。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Pro Art Company｜專業會所健身課程承辦", description: "讓會所課程，成為住戶生活的活力日常。", images: ["/og.png"], locale: "zh_HK", type: "website" },
  twitter: { card: "summary_large_image", title: "Pro Art Company", description: "專業會所健身課程承辦", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant-HK"><body>{children}</body></html>;
}
