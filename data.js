const QUIZ_META = {
  school: "高雄中學",
  title: "113 學年度第二學期高二物理第三次段考",
  subject: "物理",
  grade: "高二下・第三次段考",
  perScore: 4,
  total: 100,
  note: "題目來源為使用者提供之試卷 DOCX。答案與解析為依題面推導的自學練習草稿，建議教師複核後正式使用。"
};

const opt5 = ["A", "B", "C", "D", "E"];

const QUESTIONS = [
  {
    id: 1,
    u: "圓周運動與能量",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q01.png"],
    oi: true,
    o: opt5,
    a: 1,
    points: 4,
    e: "由能量守恆得 v^2 = 3gr - 2gy。設由最低點量角為 theta，y = r(1 - cos theta)；脫離時 N = 0，內側圓周條件為 v^2 = -gr cos theta。聯立得 cos theta = -1/3，因此 y = 4r/3，選 B。"
  },
  {
    id: 2,
    u: "鉛直圓周運動",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q02.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "臨界鉛直圓周在最高點 v^2 = gr；到底端由能量守恆得 v^2 = 5gr。底端繩張力 T - mg = m(5gr)/r，所以 T = 6mg = 60 kgw。人受到向下拉力 60 kgw，加上自身 60 kgw，磅秤最大讀值為 120 kgw，選 C。"
  },
  {
    id: 3,
    u: "質心與能量守恆",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q03.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "盒與質點水平方向動量守恆。m = M/4，所以最低點時 M V + m v = 0，V = -v/4。位能下降 mgL(1 - cos37度)，取 L = 0.8 m、cos37度 = 0.8、g = 10，能量給兩物體平動：5mv^2/8 = 1.6m，得 v = 8/5 m/s，選 C。"
  },
  {
    id: 4,
    u: "萬有引力位能",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q04.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "距地表 2R 處代表離地心 3R，該處位能定為零。地表位能差為 -GMm/R + GMm/(3R) = -2GMm/(3R) = -2mgR/3，選 C。"
  },
  {
    id: 5,
    u: "萬有引力位能",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q05.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "圓環軸線上距中心 x 的位能 U = -GMm/sqrt(R^2 + x^2)。x = sqrt(3)R 時 U = -GMm/(2R)，中心 U = -GMm/R，所以到中心增加的動能 K = GMm/(2R)。由原位置搬到無窮遠所需功也等於 GMm/(2R)，即 K，選 C。"
  },
  {
    id: 6,
    u: "克卜勒軌道能量",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q06.png"],
    oi: true,
    o: opt5,
    a: 4,
    points: 4,
    e: "令近地點距離為 r，遠地點為 2r。由遠到近重力作功 W = GMm(1/r - 1/(2r)) = GMm/(2r)。橢圓半長軸 a = 3r/2，總力學能 E = -GMm/(2a) = -GMm/(3r) = -2W/3，選 E。"
  },
  {
    id: 7,
    u: "功與彈簧能",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q07.png"],
    oi: true,
    o: opt5,
    a: 0,
    points: 4,
    e: "物體沿斜面下滑並使彈簧伸長 x = 0.20 m，初末速皆為 0。mg sin37度 x = (1/2)kx^2 + mu mg cos37度 x。代入 m = 2、g = 10、k = 100，得 2.4 = 2 + 3.2mu，所以 mu = 0.125，選 A。"
  },
  {
    id: 8,
    u: "功與能量",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q08.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "設上滑過程重力作功為 -G、摩擦作功為 -f d。上滑：G + f d = (1/2)mv^2；下滑返回：G - f d = (1/2)m(v/3)^2 = mv^2/18。相加得 2G = 5mv^2/9，因此 G = 5mv^2/18，上滑到頂端重力作功為 -5mv^2/18，選 C。"
  },
  {
    id: 9,
    u: "一維彈性碰撞",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q09.png"],
    oi: true,
    o: opt5,
    a: 1,
    points: 4,
    e: "一維彈性碰撞且第二物體初靜止時，碰後動能比 K1:K2 = (m1 - m2)^2 : 4m1m2。令此比為 1:3，得 3(x - 1)^2 = 4x，其中 x = m1/m2，解得 x = 3 或 1/3，所以 m1:m2 = 3:1 或 1:3，選 B。"
  },
  {
    id: 10,
    u: "一維彈性碰撞",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q10.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "A 的質量為 B 的 2 倍，第一次彈性碰撞後 vA = u/3、vB = 4u/3。B 到牆並反彈時，A 已前進 d/4，離牆 3d/4。反彈後相向接近速率為 5u/3，再過 9d/(20u) 相遇，A 又前進 3d/20，因此第二次碰撞位置離牆 3d/5，選 C。"
  },
  {
    id: 11,
    u: "質心與能量守恆",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q11.png"],
    oi: true,
    o: opt5,
    a: 3,
    points: 4,
    e: "曲面固定時 hB = v0^2/(2g)。曲面可動且質量為 2m 時，最高點兩者同速，水平動量守恆得 V = v0/3；能量給共同平動後，mghA = (1/2)mv0^2 - (1/2)(3m)(v0/3)^2 = mv0^2/3，所以 hA:hB = 2:3，選 D。"
  },
  {
    id: 12,
    u: "碰撞與摩擦",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q12.png"],
    oi: true,
    o: opt5,
    a: 1,
    points: 4,
    e: "甲從 37 度釋放，下降高度 L(1 - cos37度) = 0.2L，因此最低點速率平方 v^2 = 2g(0.2L) = 0.4gL。等質量正向彈性碰撞後，乙取得此速率並滑行 L 停下：mu mgL = (1/2)mv^2，所以 mu = 0.2，選 B。"
  },
  {
    id: 13,
    u: "重力彈弓",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q13.png"],
    oi: true,
    o: opt5,
    a: 3,
    points: 4,
    e: "在行星參考系中，太空船相對速率約為 v + U，重力彈弓近似把相對速度方向反轉、大小不變。回到地面參考系後末速大小約為 v + 2U，選 D。"
  },
  {
    id: 14,
    u: "動量與衝量",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q14.png"],
    oi: true,
    o: opt5,
    a: 4,
    points: 4,
    e: "子彈嵌入靶後上升 20 cm，碰後速率約 sqrt(2gh) = 2 m/s。子彈初動量約為 (1.01 kg)(2 m/s) = 2.02 kg m/s，槍反衝速率約 2.02/5 = 0.404 m/s。槍在 0.01 s 停下，平均力約 5(0.404)/0.01 = 202 N，選 E。"
  },
  {
    id: 15,
    u: "動量與鉛直圓周",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q15.png"],
    oi: true,
    o: opt5,
    a: 3,
    points: 4,
    e: "木塊要剛好繞完整圈，底端最低速率 V = sqrt(5gl) = sqrt(5 x 9.8 x 4) = 14 m/s。子彈穿過瞬間水平方向動量守恆：mv = m(v/3) + MV。代入 m = 3、M = 4、V = 14，得 v = 28 m/s，選 D。"
  },
  {
    id: 16,
    u: "氣體定律",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q16.png"],
    oi: true,
    o: opt5,
    a: 1,
    points: 4,
    e: "p 高度固定可視為氣體體積固定，故 P/T 為定值；壓力可寫成 P0 + h。由 (P0 + 1)/298 = (P0 + 7)/318，得 P0 約 88.6 cmHg。當 h = 19 cm 時，T = 298(P0 + 19)/(P0 + 1) 約 358 K，也就是 85 度C，選 B。"
  },
  {
    id: 17,
    u: "理想氣體",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q17.png"],
    oi: true,
    o: opt5,
    a: 3,
    points: 4,
    e: "等溫近似下 PV 成正比。鋼瓶內氧氣折算到 1 atm 的體積約為 (15100/100) x 3.4 = 513 L；需保留約一瓶 1 atm 的殘氣，約可用 510 L。以每分鐘 2.0 L 供應，可用約 255 分鐘，選 D。"
  },
  {
    id: 18,
    u: "浮力與理想氣體",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q18.png"],
    oi: true,
    o: opt5,
    a: 0,
    points: 4,
    e: "外界空氣密度 1.2 kg/m3、體積 3000 m3，排開空氣質量為 3600 kg。臨界升空時，球內熱空氣質量 = 3600 - 900 = 2700 kg，密度 0.9 kg/m3。定壓下密度與絕對溫度成反比，0.9/1.2 = 300/T，得 T = 400 K = 127 度C，選 A。"
  },
  {
    id: 19,
    u: "理想氣體圖像",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q19.png"],
    oi: true,
    o: opt5,
    a: 1,
    points: 4,
    e: "P-T 圖中同一物質的體積 V 與 T/P 成正比，也就是與通過原點直線斜率的倒數成正比。A、B 對應斜率分別為 tan45度 與 tan53度，因此 VA/VB = tan53度/tan45度 = 4/3，選 B。"
  },
  {
    id: 20,
    u: "氣體與彈簧",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q20.png"],
    oi: true,
    o: opt5,
    a: 2,
    points: 4,
    e: "彈簧自然長等於容器總長，活塞下方氣柱高為 h 時，彈簧壓縮量也是 h，平衡給 PA = kh。故 nRT = PAh = kh^2。加熱到 3T/2 後，若高度為 x，則 nR(3T/2) = kx^2，得 x = sqrt(3/2)h，選 C。"
  },
  {
    id: 21,
    u: "功與彈簧能",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q21.png"],
    oi: true,
    o: opt5,
    type: "multi",
    a: [0, 2, 4],
    points: 5,
    e: "F-x 圖下方面積給外力作功 0.5 J，A 正確。彈力線在 x = 1 m 時為 -0.5 N，所以 k = 0.5 N/m，彈力作功為 -1/2 kx^2 = -0.25 J，B 錯。淨功為 0.5 - 0.25 = 0.25 J，C 正確。外力作功使系統機械能增加，D 錯。移除外力後總機械能 0.5 J，令 1/2 kx^2 = 0.5，得最大伸長 sqrt(2) m，E 正確。"
  },
  {
    id: 22,
    u: "衛星軌道能量",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q22.png"],
    oi: true,
    o: opt5,
    type: "multi",
    a: [0, 3, 4],
    points: 5,
    e: "圓軌道總能 E = -K。失去 K 能量後 E' = -2K，對應新圓軌道半徑 R/2，A 正確。速率變為 sqrt(2) 倍而非 2 倍，B 錯；新動能為 2K，C 錯。向心加速度 GM/r^2 變為 4 倍，D 正確。由新圓軌道脫離需補足其束縛能 2K，E 正確。"
  },
  {
    id: 23,
    u: "軌道能量與作功",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q23.png"],
    oi: true,
    o: opt5,
    type: "multi",
    a: [0, 1, 4],
    points: 5,
    e: "重力作功等於動能變化，所以 W1 = KB - KA，A 正確。又重力作功等於位能減少，且 UB = 0，所以 W1 = UA，B 正確。A 到 C 的總作功為 UA - UC，不是 UA + UC，C 錯。B 到 C 有 W2 = KC - KB = -UC，D 多減了一次 UC，錯。由 W1 = KB - KA = UA 得 KB = KA + UA，E 正確。"
  },
  {
    id: 24,
    u: "碰撞圖像與質心",
    s: "請閱讀題圖後作答。",
    img: ["assets/questions/q24.png"],
    oi: true,
    o: opt5,
    type: "multi",
    a: [0, 2],
    points: 5,
    e: "碰撞前 m1 的 S-t 斜率為 +4 m/s、m2 靜止，A 正確。碰撞後 m1 斜率為 -2 m/s、m2 斜率為 +2 m/s，因此 B 錯。動量守恆：0.2(4) = 0.2(-2) + m2(2)，得 m2 = 0.6 kg，C 正確。碰撞前後總動能皆為 1.6 J，沒有損失 0.6 J，D 錯。質心速率為 1 m/s，質心動能為 0.5(0.8)(1^2)=0.4 J，E 錯。"
  }
];
