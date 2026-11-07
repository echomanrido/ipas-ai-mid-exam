// AI 核心考點速記資料庫 - 初級 科目一（L11 人工智慧基礎概論）
const L11_CHEATSHEET_DATA = [
  // ==========================================
  // L111: 人工智慧概念 (定義、發展、治理、法規、圖靈測試)
  // ==========================================
  {
    id: "l11_01",
    category: "L111",
    code: "L111",
    title: "黃仁勳 AI 四階段論—④物理 AI",
    summary: "進入物理世界執行任務（具身智慧 Embodied AI），代表技術為自駕車、人形機器人、自主移動機器人（AMR）。",
    confusing: [
      "AI 演進四階段：① 傳統軟體/感知 ➔ ② 生成式 AI ➔ ③ 代理型 AI (Agentic AI) ➔ ④ 物理 AI (Physical AI)。",
      "物理 AI 強調與實體物理世界的力學交互、感測回饋與實體動作控制，而非僅限於虛擬數位環境。"
    ],
    visualHtml: `
      <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin:0.5rem 0;">
        <span style="background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;">① 感知辨識 (數位)</span>
        <span style="background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;">② 生成式 AI (創作)</span>
        <span style="background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;">③ 代理型 AI (推理)</span>
        <span style="background:#fef3c7; color:#b45309; border:1px solid #fde68a; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700;">④ 物理 AI (實體執行)</span>
      </div>
    `,
    keywords: ["物理AI", "黃仁勳", "具身智慧", "自駕車", "人形機器人", "AMR"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 3, note: "產線機器手臂自動目視瑕疵判定" },
      { subj: "primary_115_3_1", qId: 8, note: "工廠生產線即時刮痕品質檢測" }
    ]
  },
  {
    id: "l11_02",
    category: "L111",
    code: "L111",
    title: "學界框架 vs 業界框架對照",
    summary: "學界著重底層計算哲學與架構演進；業界著重與商業價值、使用情境及實體世界的互動深度。",
    confusing: [
      "學界以「技術典範遞移」為軸（符號主義邏輯推理 ➔ 統計機器學習 ➔ 深度神經網路 ➔ 基礎大模型）。",
      "業界以「AI 與世界互動深度」為軸（數位感知 ➔ 認知推理 ➔ 決策模擬 ➔ 物理世界互動）。"
    ],
    keywords: ["學界框架", "業界框架", "典範遞移", "互動深度"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 4, note: "跨市場即時高頻交易與決策系統" }
    ]
  },
  {
    id: "l11_03",
    category: "L111",
    code: "L111",
    title: "AI 三大核心子技術",
    summary: "包含深度學習（DL, 演算法架構）、自然語言處理（NLP, 文字語言理解）與電腦視覺（CV, 圖像視訊理解）。",
    confusing: [
      "人工智慧（AI）範圍最廣，機器學習（ML）是其核心實現手段，深度學習（DL）是 ML 的子集，而 NLP 與 CV 是應用領域。"
    ],
    keywords: ["深度學習", "自然語言處理", "電腦視覺", "NLP", "CV", "DL"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 1, note: "社群網路文字輿情 NLP 情感分析" },
      { subj: "primary_115_2_1", qId: 3, note: "電路板外觀檢測 CV 電腦視覺" }
    ]
  },
  {
    id: "l11_04",
    category: "L111",
    code: "L111",
    title: "能力範疇三階判準（ANI / AGI / ASI）",
    summary: "ANI（弱/窄人工智慧, 當前所有系統）、AGI（通用人工智慧, 與人類同等自學與泛化能力）、ASI（超級人工智慧, 全面超越人類）。",
    confusing: [
      "判準為「單一系統能不能跨到沒訓練過的任務」，與產品數量或模型參數量無關！即便一家公司同時擁有三款獨立的專用 AI 產品，各產品依舊是專精特定任務的 ANI（弱人工智慧）。"
    ],
    keywords: ["ANI", "AGI", "ASI", "弱人工智慧", "通用人工智慧", "能力範疇判準"],
    examRefs: [
      { subj: "primary_115_3_1", qId: 5, note: "三款特定任務 AI 產品仍屬於弱人工智慧 (ANI)" }
    ]
  },
  {
    id: "l11_05",
    category: "L111",
    code: "L111",
    title: "AI 應用領域判準",
    summary: "判定 AI 技術類型不是看「產業別」（製造、醫療、金融），而是看「輸入資料的模態」（Modality）與任務特性！",
    confusing: [
      "輸入為影像/視訊 ➔ CV 電腦視覺；輸入為文字/語意 ➔ NLP 自然語言處理；輸入為語音 ➔ 語音識別；輸入為數值表格 ➔ 統計機器學習。醫療影像依然是 CV 任務，病歷文本依然是 NLP 任務！"
    ],
    keywords: ["應用領域判準", "輸入模態", "非產業別", "CV", "NLP"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 9, note: "病歷文本分析(NLP)與醫學影像(CV)整合" }
    ]
  },
  {
    id: "l11_06",
    category: "L111",
    code: "L111",
    title: "視覺任務三階粒度（分類 / 偵測 / 分割）",
    summary: "分類看整圖成熟度/有無瑕疵；物件偵測看框選邊界（Bounding Box）與數量計數；影像分割看逐像素受損邊界與面積比例。",
    confusing: [
      "影像分類只給整張圖一個標籤；物件偵測標出位置與類別；影像分割精確標示每個像素屬於哪個物件（如精確計算葉片病斑像素面積）。"
    ],
    visualHtml: `
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align:center; font-size:0.75rem; margin:0.5rem 0;">
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">影像分類</div>
          <div>成熟度 / 瑕疵</div>
        </div>
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">物件偵測</div>
          <div>框選標註 + 計數</div>
        </div>
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">影像分割</div>
          <div>逐像素邊緣面積</div>
        </div>
      </div>
    `,
    keywords: ["視覺粒度", "影像分類", "物件偵測", "影像分割", "Bounding Box"],
    examRefs: [
      { subj: "primary_115_3_1", qId: 8, note: "工廠鏡頭即時判定刮痕瑕疵" }
    ]
  },
  {
    id: "l11_07",
    category: "L111",
    code: "L111",
    title: "資料分析四層次",
    summary: "描述性（發生什麼）➔ 診斷性（為何發生）➔ 預測性（將發生什麼）➔ 指示性（該怎麼做/最佳方案）。",
    confusing: [
      "前兩者（描述、診斷）為事後回顧；預測性使用模型預估未來；指示性結合最佳化演算法給出行動指南（如處方性決策）。"
    ],
    keywords: ["資料分析四層次", "描述性", "診斷性", "預測性", "指示性"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 2, note: "異常偵測(診斷)到自動路線規劃(指示性)" }
    ]
  },
  {
    id: "l11_08",
    category: "L111",
    code: "L111",
    title: "AI 應用三層次",
    summary: "感知辨識轉成資料、預測分析到未來估計、決策最佳化給行動方案。",
    confusing: [
      "感知（OCR、語音輸入）➔ 預測（違約率預測）➔ 決策（自動調整信用額度）。生成式 AI 擅長內容生成，不擅長強約束條件最佳化。"
    ],
    keywords: ["AI應用三層次", "感知辨識", "預測分析", "決策最佳化"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 8, note: "核保系統初步風險預測與自動回覆決策" }
    ]
  },
  {
    id: "l11_09",
    category: "L111",
    code: "L111",
    title: "路徑最佳化問題",
    summary: "看到排程、調度、派工、最佳路線等最佳化，生成式 AI 不擅長！",
    confusing: [
      "生成式 AI 擅長發想、總結與文本生成，但在求解具備強約束條件的組合最佳化問題（如旅行推銷員問題 TSP）時極易出錯；應採用線性整數規劃、啟發式演算法或強化學習。"
    ],
    keywords: ["路徑最佳化", "排程調度", "派工", "生成式AI不擅長", "運籌學"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 2, note: "智慧城市垃圾收集路線動態調度" },
      { subj: "primary_115_2_1", qId: 2, note: "物流公司包裹配送路線最佳規劃" },
      { subj: "primary_115_3_1", qId: 3, note: "物流車輛即時路況配送最佳路徑" }
    ]
  },
  {
    id: "l11_10",
    category: "L111",
    code: "L111",
    title: "圖靈測試判別口訣",
    summary: "圖靈測試只問分不分得出來，不問對不對也不問為什麼！",
    confusing: [
      "圖靈測試的核心在於：人類裁判僅透過文字對話，能否分辨對面是人類還是機器。若有 30% 以上裁判無法區分，即視為通過圖靈測試。測試的是「模仿人類行為的表象」，而非測試內部思考邏輯或真理。"
    ],
    keywords: ["圖靈測試", "Turing Test", "只問分不分得出來", "不問對不對"],
    examRefs: [
      { subj: "primary_115_3_1", qId: 6, note: "顧客與客服助理對話全程未察覺對方為 AI (圖靈測試)" }
    ]
  },
  {
    id: "l11_11",
    category: "L111",
    code: "L111",
    title: "歐盟 AI 法案—高風險規範",
    summary: "嚴格監管（強制偏見測試、人工監督、CE 認證），涵蓋招募/履歷篩選、醫療、關鍵基礎設施、信用評分等。",
    confusing: [
      "高風險並不是禁止使用！而是必須遵守嚴格的前置合格評估、資料品質控管與「人工監督（Human-in-the-Loop）」機制。"
    ],
    keywords: ["歐盟高風險", "嚴格監管", "CE認證", "偏見測試", "人工監督"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 5, note: "低收入補助資格審核高風險演算法公平性" },
      { subj: "primary_115_3_1", qId: 7, note: "公部門重大衝擊決策要求人工監督" }
    ]
  },
  {
    id: "l11_12",
    category: "L111",
    code: "L111",
    title: "歐盟 AI 法案—有限風險與四級金字塔",
    summary: "賦予透明義務，聊天機器人、Deepfake 及生成式內容須標示揭露；四級金字塔：不可接受（完全禁止）➔ 高風險（嚴格監管）➔ 有限風險（透明義務）➔ 最小/無風險（不規範）。",
    confusing: [
      "社交信用評分與潛意識操控屬於「不可接受風險」；聊天機器人屬於「有限風險」；垃圾郵件過濾屬於「最小風險」。"
    ],
    visualHtml: `
      <div style="display:flex; justify-content:center; margin:0.75rem 0;">
        <svg viewBox="0 0 260 160" style="width:100%; max-width:240px; height:auto; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
          <!-- Tier 1: Red (Unacceptable) -->
          <polygon points="130,10 100,50 160,50" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
          <text x="130" y="38" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">不可接受：完全禁止</text>

          <!-- Tier 2: Orange (High Risk) -->
          <polygon points="100,50 70,90 190,90 160,50" fill="#f97316" stroke="#ffffff" stroke-width="1.5"/>
          <text x="130" y="75" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">高風險：嚴格監管</text>

          <!-- Tier 3: Yellow/Amber (Limited Risk) -->
          <polygon points="70,90 40,125 220,125 190,90" fill="#eab308" stroke="#ffffff" stroke-width="1.5"/>
          <text x="130" y="112" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">有限風險：透明義務</text>

          <!-- Tier 4: Green (Minimal Risk) -->
          <polygon points="40,125 10,155 250,155 220,125" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
          <text x="130" y="145" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">最小／無風險：不規範</text>
        </svg>
      </div>
    `,
    keywords: ["歐盟AI法案", "四級風險金字塔", "不可接受風險", "有限風險", "透明義務", "Deepfake"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 6, note: "AI 產品評測認證與國際法規對接" },
      { subj: "primary_115_3_1", qId: 6, note: "聊天機器人未揭露標示的合規風險" }
    ]
  },
  {
    id: "l11_13",
    category: "L111",
    code: "L111",
    title: "演算法偏見與代理特徵（Proxy Feature）",
    summary: "即使刻意在訓練資料中移除「性別、種族、年齡」等敏感特徵，模型仍可能透過「郵遞區號、畢業學校、社團經歷」等代理特徵學到隱性偏見！",
    confusing: [
      "單純刪除敏感特徵無法根除演算法歧視！必須透過因果公平性檢測與敏感特徵解耦（Fairness constraints）來進行矯正。"
    ],
    keywords: ["演算法偏見", "代理特徵", "Proxy Feature", "敏感特徵", "公平性"],
    examRefs: [
      { subj: "primary_115_3_1", qId: 4, note: "移除性別欄位仍產生歧視（代理變數現象）" }
    ]
  },

  // ==========================================
  // L112: 資料處理與分析概念 (結構、ETL、清理、偏誤、隱私)
  // ==========================================
  {
    id: "l11_14",
    category: "L112",
    code: "L112",
    title: "資料三大結構型態對照",
    summary: "① 結構化資料（Structured）：行列固定，如關聯式資料庫 RDBMS、Excel 表格；② 半結構化資料（Semi-structured）：具標籤但無嚴格綱要，如 JSON、XML、YAML、HTML；③ 非結構化資料（Unstructured）：無固定格式，如影像、音訊、視訊、自訂文本。",
    confusing: [
      "大數據世界中，非結構化資料佔比超過 80%！深度學習的突破正是在於能直接處理並抽取非結構化資料的高階特徵。"
    ],
    keywords: ["結構化資料", "半結構化", "非結構化", "JSON", "RDBMS"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 1, note: "資料整合不同來源與多樣格式轉換" }
    ]
  },
  {
    id: "l11_15",
    category: "L112",
    code: "L112",
    title: "資料整合（Data Integration）與 ETL 核心目的",
    summary: "消除企業「資訊孤島（Data Silo）」、統一資料格式、提升資料一致性與品質，為後續機器學習與商業分析提供單一真實來源（SSOT）。",
    confusing: [
      "資料整合的目的是提升資料品質與一致性，而不是為了完全取代人工業務決策，也不是單純把資料堆積成沒有治理的資料沼澤。"
    ],
    keywords: ["資料整合", "ETL", "資訊孤島", "資料品質", "一致性"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 1, note: "下列何者不屬於資料整合主要目的" }
    ]
  },
  {
    id: "l11_16",
    category: "L112",
    code: "L112",
    title: "特徵縮放：標準化 (Standardization) vs 正規化 (Normalization)",
    summary: "① 標準化（Z-score）：將特徵轉為均值 0、標準差 1，抗極端值較佳；② 正規化（Min-Max）：將特徵壓縮到 $[0, 1]$ 區間，對極端值極敏感。",
    confusing: [
      "若特徵未做縮放，數值範圍大的特徵（如年收入 100 萬）會主導距離計算，使數值範圍小的特徵（如年齡 30）被忽視！"
    ],
    keywords: ["特徵縮放", "標準化", "正規化", "Min-Max", "Z-Score"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 6, note: "特徵縮放消除尺度差異對模型權重之影響" }
    ]
  },
  {
    id: "l11_17",
    category: "L112",
    code: "L112",
    title: "類別特徵編碼：One-Hot 編碼的優點與限制",
    summary: "將離散文字標籤轉換為獨立二元特徵（0 與 1）。優點是避免模型誤學到虛假的大小順序關係；缺點是當類別數很多時（高基數），會導致維度爆炸與矩陣極度稀疏。",
    confusing: [
      "有大小順序的類別（如小學、中學、大學）用 Ordinal/Label Encoding；無大小順序且類別少（如紅、綠、藍）用 One-Hot 編碼。"
    ],
    keywords: ["One-Hot", "獨熱編碼", "高基數", "維度爆炸", "類別特徵"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 7, note: "類別型特徵編碼方法選用" },
      { subj: "primary_115_1_1", qId: 8, note: "稀疏類別特徵與數值特徵整合" }
    ]
  },
  {
    id: "l11_18",
    category: "L112",
    code: "L112",
    title: "資料不平衡（Class Imbalance）四大解法",
    summary: "正負樣本極度懸殊（如詐欺僅佔 0.1%）：① 過採樣少數類（SMOTE）；② 欠採樣多數類；③ 調整損失函數權重（Class Weight）；④ 評估指標改用 F1-score 或 PR-AUC，禁用 Accuracy！",
    confusing: [
      "若全猜「正常」，準確率 Accuracy 高達 99.9%，但真正的詐欺犯一個都沒抓到！此時 Accuracy 毫無參考價值。"
    ],
    keywords: ["資料不平衡", "SMOTE", "欠採樣", "過採樣", "F1-Score", "Accuracy失真"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 5, note: "詐欺樣本比例極低之資料不平衡處理" }
    ]
  },
  {
    id: "l11_19",
    category: "L112",
    code: "L112",
    title: "資料去識別化與隱私合規（個資法 / GDPR）",
    summary: "收集個人資料必須符合「目的明確性」與「最小必要原則」；去識別化分為遮蔽（Masking）、假名化（可逆、仍受管制）與匿名化（不可逆、免除個資法適用）。",
    confusing: [
      "只要持有對照金鑰還能還原身分的（假名化），在法律上「依然是個資」！必須達到永久不可逆的「匿名化」，才不屬於個資。"
    ],
    keywords: ["去識別化", "假名化", "匿名化", "個資法", "GDPR", "最小必要原則"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 7, note: "自行訓練 AI 系統前置資料合規與授權" }
    ]
  },

  // ==========================================
  // L113: 機器學習概念 (三大範式、過擬合、常見演算法)
  // ==========================================
  {
    id: "l11_20",
    category: "L113",
    code: "L113",
    title: "機器學習三大範式對照",
    summary: "① 監督式學習（Supervised）：有標籤（Label），分「分類」（預測類別）與「迴歸」（預測數值）；② 非監督式學習（Unsupervised）：無標籤，如「分群」（K-Means）與「降維」（PCA）；③ 強化學習（Reinforcement）：透過與環境互動獲得「獎勵與懲罰（Reward）」學習最佳策略。",
    confusing: [
      "非監督式學習不需要人工作標籤，適合用於探索未知客群或異常檢測；AlphaGo 下圍棋、自駕車路徑控制多採用強化學習。"
    ],
    keywords: ["監督式學習", "非監督式學習", "強化學習", "標籤", "分類與迴歸"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 3, note: "非監督式學習的典型特徵辨析" },
      { subj: "primary_115_3_1", qId: 2, note: "已標註與未標註資料混合分析" }
    ]
  },
  {
    id: "l11_21",
    category: "L113",
    code: "L113",
    title: "分類 (Classification) vs 迴歸 (Regression)",
    summary: "輸出為離散類別 ➔ 分類任務（如顧客是否流失、垃圾郵件、疾病惡性/良性）；輸出為連續數值 ➔ 迴歸任務（如房價預測、股票收盤價、理賠金額）。",
    confusing: [
      "羅吉斯迴歸（Logistic Regression）名字叫迴歸，但它是用 Sigmoid 函數輸出機率值，本質是「分類演算法」！"
    ],
    keywords: ["分類", "迴歸", "離散標籤", "連續數值", "羅吉斯迴歸"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 4, note: "理賠金額預測屬於連續迴歸問題" },
      { subj: "primary_115_3_1", qId: 9, note: "預測會員下個月是否流失（二元分類）" }
    ]
  },
  {
    id: "l11_22",
    category: "L113",
    code: "L113",
    title: "過擬合 (Overfitting) vs 欠擬合 (Underfitting)",
    summary: "過擬合（高變異數）：死記硬背訓練資料，訓練集準確度極高但測試集極差；欠擬合（高偏差）：模型太簡單，連訓練集都學不好。",
    confusing: [
      "解決過擬合心法：增加訓練資料量、降低模型複雜度、使用正則化（L1/L2 Regularization）、Dropout、提早停止訓練（Early Stopping）。"
    ],
    keywords: ["過擬合", "欠擬合", "Overfitting", "泛化能力", "正則化"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 5, note: "模型偏向多數類別與過擬合現象" }
    ]
  },
  {
    id: "l11_23",
    category: "L113",
    code: "L113",
    title: "資料集三劃分：訓練集 / 驗證集 / 測試集",
    summary: "① 訓練集（Training Set: 約 70%）：供模型學習調整內部權重參數；② 驗證集（Validation Set: 約 15%）：挑選超參數與決定何時停止訓練；③ 測試集（Test Set: 約 15%）：最終模擬真實世界的評估大考。",
    confusing: [
      "測試集如同正式大考考卷，在模型訓練與參數調校過程中「絕對不能看（不能 fit）」！若偷看測試集調整超參數，會造成「資料洩漏（Data Leakage）」。"
    ],
    keywords: ["訓練集", "驗證集", "測試集", "資料洩漏", "交叉驗證"],
    examRefs: [
      { subj: "primary_115_3_1", qId: 1, note: "五年設備運作歷史資料切割評估" }
    ]
  },
  {
    id: "l11_24",
    category: "L113",
    code: "L113",
    title: "分類評估四天王：Precision / Recall / F1 / Accuracy",
    summary: "Accuracy（準確率: 全猜對比例）；Precision（精確率: 抓出來的裡面有多少是對的）；Recall（召回率: 全部真實正類抓到了多少）；F1-Score（調和平均數）。",
    confusing: [
      "癌症診斷、防損、詐欺偵測 ➔ 寧可誤抓不可漏掉，看 Recall；垃圾郵件過濾、推薦精準度 ➔ 抓出來絕不能錯，看 Precision。"
    ],
    keywords: ["Precision", "Recall", "Accuracy", "F1-Score", "混淆矩陣"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 5, note: "詐欺偵測評估指標改採 Recall 與 F1" }
    ]
  },
  {
    id: "l11_25",
    category: "L113",
    code: "L113",
    title: "常見機器學習演算法特點口訣",
    summary: "決策樹（可解釋性最高、易過擬合）；隨機森林（多棵樹投票、抗過擬合穩健）；KNN（近朱者赤近墨者黑、無訓練過程惰性學習）；K-Means（非監督分群、指定 K 個群心）；SVM（尋找最大間隔超平面）。",
    confusing: [
      "樹狀模型（決策樹、隨機森林）不需要特徵縮放；KNN 與 SVM 基於距離計算，若不縮放則大數值特徵完全主導結果。"
    ],
    keywords: ["決策樹", "隨機森林", "KNN", "K-Means", "SVM", "模型特性"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 3, note: "非監督 K-Means 與監督演算法區分" }
    ]
  },

  // ==========================================
  // L114: 鑑別式 AI 與生成式 AI (原理、LLM、Prompt、幻覺)
  // ==========================================
  {
    id: "l11_26",
    category: "L114",
    code: "L114",
    title: "鑑別式 AI vs 生成式 AI 核心原理",
    summary: "① 鑑別式 AI（Discriminative）：學習條件機率 $P(Y|X)$，目標是「判別邊界」，回答是非題或選擇題（如判斷貓還是狗、是否有病）；② 生成式 AI（Generative）：學習聯合機率分佈 $P(X, Y)$，目標是「創造新資料」（如畫出從未存在過的貓）。",
    confusing: [
      "人臉辨識門禁系統 ➔ 鑑別式 AI；AI 換臉 Deepfake 或依描述畫人像 ➔ 生成式 AI。"
    ],
    keywords: ["鑑別式AI", "生成式AI", "判別邊界", "內容創作", "條件機率"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 10, note: "生成式 AI 自動產出概念圖與風格設計" }
    ]
  },
  {
    id: "l11_27",
    category: "L114",
    code: "L114",
    title: "大語言模型（LLM）的幻覺問題（Hallucination）",
    summary: "大語言模型生成表面流暢合理但與事實完全不符的虛假內容。成因是 LLM 本質是「基於機率預測下一個 Token 的語言接龍模型」，而非儲存真理的事實資料庫。",
    confusing: [
      "防範幻覺最佳實踐：① 檢索增強生成（RAG 引入私有知識庫）② 提示詞要求「不知道請回答不知道」③ 人工查驗審核（HITL）。"
    ],
    keywords: ["幻覺", "Hallucination", "語言接龍", "RAG", "事實錯誤"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 7, note: "生成式 AI 自動撰寫新聞評論的事實查核機制" }
    ]
  },
  {
    id: "l11_28",
    category: "L114",
    code: "L114",
    title: "提示詞工程（Prompt Engineering）基礎心法",
    summary: "撰寫高品質提示詞四大元素：① Role（角色設定）② Context（背景情境）③ Instruction（明確任務指令）④ Constraint/Format（限制與期望輸出格式，如 JSON 或列點）。",
    confusing: [
      "提示詞越模糊，模型自由發揮空間越大，產生幻覺機率越高；給予清晰的步驟規範與 1~2 個示範樣本（Few-Shot）能大幅提升穩定度。"
    ],
    keywords: ["提示詞工程", "Prompt", "Few-Shot", "角色設定", "輸出格式限制"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 10, note: "利用提示詞引導風格生成" }
    ]
  },
  {
    id: "l11_29",
    category: "L114",
    code: "L114",
    title: "鑑別式與生成式 AI 整合協同",
    summary: "實務系統常採「雙劍合璧」：先由生成式 AI 快速發想、撰寫多樣文案或合成樣本，再由鑑別式 AI 進行合規審查、品質評分與過濾；或由鑑別式 AI 辨識圖像邊界後交由生成式 AI 修補影像（Inpainting）。",
    confusing: [
      "生成式 AI 並非全面淘汰鑑別式 AI，兩者分工明確：生成式負責創造擴散，鑑別式負責把關收斂。"
    ],
    keywords: ["整合應用", "生成加鑑別", "品質過濾", "Inpainting"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 2, note: "異常偵測(鑑別)搭配生成式報告產出" }
    ]
  },

  // ==========================================
  // L115: No Code / Low Code 概念 (定義、拖拉介面、優缺點與限制)
  // ==========================================
  {
    id: "l11_30",
    category: "L115",
    code: "L115",
    title: "No Code / Low Code 定義與核心特徵",
    summary: "No Code（無程式碼）：透過視覺化圖形介面（GUI）、拖拉式模組（Drag-and-Drop）與預設範本，無需編寫程式即可開發應用；Low Code（低程式碼）：以視覺化為主，但允許專業開發者撰寫少量自訂腳本進行擴充。",
    confusing: [
      "No Code 目標客群是業務人員（Citizen Developer）；Low Code 則是協助工程師減少重複造輪子的樣板代碼（Boilerplate code），加速開發週期。"
    ],
    keywords: ["No Code", "Low Code", "視覺化拖拉", "公民開發者", "降低門檻"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 10, note: "免寫程式工具快速實現原型概念" }
    ]
  },
  {
    id: "l11_31",
    category: "L115",
    code: "L115",
    title: "No Code / Low Code 的核心優勢",
    summary: "① 降低技術進入門檻：非技術人員也能快速建立自動化流程；② 縮短開發週期：加速 POC（概念驗證）與 MVP 原型上線；③ 節省人力成本：減少對專屬軟體工程團隊的依賴。",
    confusing: [
      "No Code 最適合用於「驗證初期商業想法、內部簡單行政流程自動化、短期行銷活動」，能在幾小時內快速落地。"
    ],
    keywords: ["No Code優勢", "快速POC", "縮短開發週期", "降低門檻"],
    examRefs: [
      { subj: "primary_115_1_1", qId: 1, note: "系統快速整合工具應用" }
    ]
  },
  {
    id: "l11_32",
    category: "L115",
    code: "L115",
    title: "No Code / Low Code 的致命限制與風險",
    summary: "① 自訂彈性有限：無法實現高度客製化或複雜數學邏輯；② 供應商鎖定（Vendor Lock-in）：平台一旦倒閉或漲價難以搬遷；③ 效能瓶頸：海量高併發時無法做底層效能調校；④ 黑盒子維護困難：底層邏輯難以除錯與版本控制。",
    confusing: [
      "核心高頻交易系統、超大流量產線即時推論，絕不可使用純 No-Code 平台架構，必須回歸底層自研程式碼架構！"
    ],
    keywords: ["No Code限制", "供應商鎖定", "Vendor Lock-in", "黑盒子", "客製化不足"],
    examRefs: [
      { subj: "primary_115_2_1", qId: 4, note: "毫秒級高頻跨市場交易不宜採用非自研封閉架構" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L11_CHEATSHEET_DATA;
}
