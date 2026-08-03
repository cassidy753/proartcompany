# Pro Art Company 網站 — 混合式架構規格 (ARCHITECTURE.md v2)

> 取代舊單頁 scroll 結構。**方案 3：Hybrid** — 精簡 Scroll World 開場 + 多頁正常內容。
> 設計方向：2026 lifestyle/wellness（natural greens、kinetic type、texture、克制微互動）。

## 整體結構

```
Nav（5 項 + CTA）：
首頁 · 課程 · 合作模式 · 關於我們 · 聯絡 | 查詢合作 ↗

首頁 Home
├── Scroll World 開場（精簡 4 幕，唔係 9 幕）
│     幕1 會所大門（推近）
│     幕2 舞蹈室大門（開門）
│     幕3 瑜伽課室（穿越）
│     幕4 俯瞰願景（拉遠 → 過渡落正常內容）
├── 正常內容區
│     ├── 課程預覽（5 課程卡片 → 課程頁）
│     ├── 信任數字（4+ 會所 / 15+ 班 / 5 課程 / 60-40 分成）
│     ├── 合作模式簡介（→ 合作頁）
│     ├── 導師區（預留）
│     └── 聯絡 CTA
└── Bottom Bar（公司資料）

課程頁 /courses
合作模式頁 /partnership
關於我們頁 /about
聯絡頁 /contact
```

## 每頁內容架構

### 首頁 Home
- **Scroll World 開場（4 幕）**：保留現有 scroll 技術（Lenis + GSAP + CSS scroll-driven + WebGL），但縮短做 4 幕，每幕一句大標 + 短句
  - 幕1：會所大門 —「健康生活，由屋苑開始。」／專業健身課程承辦商
  - 幕2：舞蹈室大門 —「五種節奏，一個專業夥伴。」／瑜伽・普拉提・健康舞・Zumba・排舞
  - 幕3：瑜伽課室 —「一呼一吸，找回身心平衡。」／住戶落樓即享專業課程
  - 幕4：俯瞰願景 —「讓會所，成為社區嘅活力中心。」＋ CTA「開始規劃課程」
- **課程預覽**：5 張卡片（Pixar 圖 + 課程名 + 一句特色）→ 課程頁
- **信任數字**：4+ 合作會所 · 15+ 每週班次 · 5 課程類別 · 60/40 靈活分成
- **合作模式簡介**：3 點（到會式 / 一站式行政 / 彈性分成）→ 合作頁
- **導師區**（預留）：專業導師團隊資料準備中
- **Bottom Bar**

### 課程頁 /courses
- 標題：五種課程，總有一堂適合您嘅住戶
- 5 個課程詳細區塊（每課程：Pixar 圖 + 名稱 + 特色 2-3 句 + 適合對象 + badge）
  - 瑜伽：柔韌/平衡/減壓，初學至進階
  - 普拉提：核心/姿勢/身體覺察，小班
  - 健康舞：帶氧/心肺/簡單易跟，銀齡友善
  - Zumba：舞蹈+帶氧/高能量/開心
  - 排舞：步法/協調/社交，輕鬆入門
- 彈性安排說明：課程內容、時段、收費可按會所住戶度身設計
- CTA：想喺你嘅會所開辦課程？WhatsApp 查詢

### 合作模式頁 /partnership
- 標題：低風險、透明、可持續的合作模式
- 60/40 分成詳述（承辦方 60 / 會所 40；每月結算、清晰帳單）
- 4 步流程：洽談 → 規劃 → 開班 → 結算
- 點解揀我哋：到會式教學 / 度身訂造 / 一站式行政 / 專業導師配對
- 信任數字 + 私隱聲明（「基於商業及私隱考慮，合作單位資料不作公開展示」）
- CTA：WhatsApp 查詢合作方案

### 關於我們頁 /about
- 公司簡介（company-intro-draft 長版）
- 願景：讓每一座屋苑會所，都成為社區嘅活力中心
- 數字：4+ 會所 / 15+ 班 / 5 課程
- 導師團隊（預留區）：資料準備中
- CTA：聯絡我哋

### 聯絡頁 /contact
- 聯絡方式：電話 +852 9680 3500 / WhatsApp（預填訊息）/ Email proartcompanyhk@gmail.com
- 辦公室地址：觀塘工業中心第 3 期 10 樓 S 室
- 查詢表單（WhatsApp 或 mailto）
- 歡迎對象：會所管理團隊、物業管理公司、業主委員會

## 設計方向（Taste skill 指引）

**Design Read：** wellness/lifestyle 公司網站（B2B 為主）for 會所決策者，premium-consumer 語言，leaning toward deep-green × gold 2026 wellness aesthetic + kinetic type + restrained motion。

**Dials：** DESIGN_VARIANCE 7 / MOTION_INTENSITY 6 / VISUAL_DENSITY 3

**保留品牌：** 深翠綠 #1E5B41 × 暖金 #C8A45D × 米白 #F7F4EE；Pixar 3D 圖；繁體中文（香港）。

**Taste 注意（anti-slop）：**
- Hero 用圖片（Pixar 場景）— 唔好 text-only
- Nav 5 項、單行、≤80px
- CTA 一個 intent 一個 label（「查詢合作」全站統一）
- 零 em-dash；零 section-number 眉標（第 1 幕/第 2 幕唔寫出嚟做 eyebrow）
- 每個 section 一個 layout family，唔好重複
- 克制 motion；reduced-motion 全面支援
- 每頁 dark/light 統一（建議維持現有深色 wellness feel，全站一致）

## 技術（不變）
- Next.js + Lenis + GSAP ScrollTrigger + CSS scroll-driven animations + WebGL particles
- Mobile-first；GitHub Pages static export（build:github-pages）
- 冇會所名/logo；冇導師名；WhatsApp 浮動按鈕全站
