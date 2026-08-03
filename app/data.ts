export const whatsappMessage = "你好，我哋會所想查詢健身課程合作方案。";
export const whatsapp = `https://wa.me/85296803500?text=${encodeURIComponent(whatsappMessage)}`;

export const courses = [
  { name: "瑜伽", en: "YOGA", image: "/images/group-yoga.png", short: "一齊呼吸，放鬆身心", description: "一班人由呼吸與伸展開始，在互相鼓勵的節奏中改善柔韌、平衡與放鬆能力。課堂按程度調節，讓鄰里一齊建立穩定練習。", audience: "初學者至進階練習者", badge: "社區共練" },
  { name: "普拉提", en: "PILATES", image: "/images/group-pilates.png", short: "小班同行，練好核心", description: "以小班形式一齊鍛鍊核心、姿勢與身體覺察。導師照顧每位參加者，伙伴亦能互相支持，讓進步成為每週共同期待。", audience: "希望改善核心與姿勢的住戶", badge: "小班同行" },
  { name: "健康舞", en: "AEROBIC DANCE", image: "/images/group-aerobic.png", short: "簡單易跟，街坊同樂", description: "一班人跟住熟悉節奏做簡單帶氧動作，循序提升心肺體能。氣氛輕鬆，讓不同年齡的街坊一齊郁、一齊笑。", audience: "初學者及銀齡住戶", badge: "銀齡同樂" },
  { name: "Zumba", en: "ZUMBA", image: "/images/group-zumba.png", short: "全場起舞，共享能量", description: "舞蹈結合帶氧訓練，以富感染力的音樂帶動全班。大家一齊起舞、互相感染，為會所注入直接而愉快的社區活力。", audience: "喜歡音樂與高能量運動的住戶", badge: "群體能量" },
  { name: "排舞", en: "LINE DANCE", image: "/images/group-linedance.png", short: "同一步法，連結鄰里", description: "由基本步法開始，一班人逐步掌握完整舞序，同時訓練協調與記憶。無需舞伴也容易投入，在同樂中自然認識鄰里。", audience: "想輕鬆入門及享受社交的住戶", badge: "鄰里交流" },
] as const;
