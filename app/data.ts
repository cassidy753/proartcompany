export const whatsappMessage = "你好，我哋會所想查詢健身課程合作方案。";
export const whatsapp = `https://wa.me/85296803500?text=${encodeURIComponent(whatsappMessage)}`;

export const courses = [
  { name: "瑜伽", en: "YOGA", image: "/images/course-yoga.png", short: "柔韌、平衡、減壓", description: "從呼吸與伸展開始，逐步改善柔韌度、平衡及放鬆能力。課堂可按程度調節，讓住戶建立穩定而持續的練習。", audience: "初學者至進階練習者", badge: "身心平衡" },
  { name: "普拉提", en: "PILATES", image: "/images/course-yoga.png", short: "核心、姿勢、覺察", description: "以精準而流暢的動作鍛鍊核心穩定，改善姿勢與身體覺察。小班形式讓導師更容易照顧每位參加者。", audience: "希望改善核心與姿勢的住戶", badge: "小班指導" },
  { name: "健康舞", en: "AEROBIC DANCE", image: "/images/course-linedance.png", short: "帶氧、心肺、易跟", description: "簡單易跟的帶氧動作配合熟悉節奏，循序提升心肺體能。氣氛輕鬆，讓不同年齡的住戶都能享受運動。", audience: "初學者及銀齡住戶", badge: "銀齡友善" },
  { name: "Zumba", en: "ZUMBA", image: "/images/course-zumba.png", short: "舞蹈、帶氧、能量", description: "融合舞蹈與帶氧訓練，以富感染力的音樂帶動全身。課堂節奏明快，為會所注入直接而愉快的活力。", audience: "喜歡音樂與高能量運動的住戶", badge: "高能量" },
  { name: "排舞", en: "LINE DANCE", image: "/images/course-linedance.png", short: "步法、協調、社交", description: "由基本步法開始，逐步掌握完整舞序，同時訓練協調與記憶。無需舞伴，容易投入，亦能促進住戶交流。", audience: "想輕鬆入門及享受社交的住戶", badge: "輕鬆入門" },
] as const;
