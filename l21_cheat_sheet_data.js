// AI 核心考點速記資料庫 - 科目1（L21 人工智慧技術應用與規劃）
const L21_CHEATSHEET_DATA = [
  // ==========================================
  // L211: AI 相關技術應用 (NLP, CV, GenAI, 多模態, 核心概念)
  // ==========================================
  {
    id: "l21_01",
    category: "L211",
    code: "L211",
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
      { subj: "114_2_1", qId: 7, note: "智慧監控物件偵測與實體環境邊界辨識" },
      { subj: "115_1_1", qId: 6, note: "自駕車像素級路面與障礙物實例分割" }
    ]
  },
  {
    id: "l21_02",
    category: "L211",
    code: "L211",
    title: "學界框架 vs 業界框架對照",
    summary: "學界著重底層計算哲學與架構演進；業界著重與商業價值、使用情境及實體世界的互動深度。",
    confusing: [
      "學界以「技術典範遞移」為軸（符號主義邏輯推理 ➔ 統計機器學習 ➔ 深度神經網路 ➔ 基礎大模型）。",
      "業界以「AI 與世界互動深度」為軸（數位感知 ➔ 認知推理 ➔ 決策模擬 ➔ 物理世界互動）。"
    ],
    keywords: ["學界框架", "業界框架", "典範遞移", "互動深度"],
    examRefs: [
      { subj: "114_2_1", qId: 44, note: "顧客流失預測走向策略模擬決策" }
    ]
  },
  {
    id: "l21_03",
    category: "L211",
    code: "L211",
    title: "AI 三大核心子技術",
    summary: "現代人工智慧三大核心技術基石：深度學習（DL, 神經網路演算法）、自然語言處理（NLP, 文本語意理解）與電腦視覺（CV, 圖像視訊理解）。",
    confusing: [
      "機器學習（ML）是深度學習（DL）的母集合；大語言模型（LLM）屬於 NLP 與 DL 的交集；多模態 AI 則是 NLP 與 CV 的跨域對齊。"
    ],
    keywords: ["深度學習", "自然語言處理", "電腦視覺", "NLP", "CV", "DL"],
    examRefs: [
      { subj: "114_2_1", qId: 1, note: "電商文字評論 NLP 情感分析" },
      { subj: "114_2_1", qId: 7, note: "智慧監控 CV 物件偵測" }
    ]
  },
  {
    id: "l21_04",
    category: "L211",
    code: "L211",
    title: "能力範疇三階判準（ANI / AGI / ASI）",
    summary: "ANI（弱/窄人工智慧, 當前所有系統）、AGI（通用人工智慧, 與人類同等自學與泛化能力）、ASI（超級人工智慧, 全面超越人類）。",
    confusing: [
      "判準為「單一系統能不能跨到沒訓練過的全新任務領域」，與系統串接的產品數量或參數量多寡無關！AlphaGo 即使算力再強仍是 ANI。"
    ],
    keywords: ["ANI", "AGI", "ASI", "窄人工智慧", "通用人工智慧", "能力範疇"],
    examRefs: [
      { subj: "115_1_1", qId: 15, note: "多 Agent 系統各自承擔特定窄任務" }
    ]
  },
  {
    id: "l21_05",
    category: "L211",
    code: "L211",
    title: "AI 應用領域判準",
    summary: "判定 AI 技術應用領域不是看「產業別」（製造、醫療、金融），而是看「輸入資料的模態」（Modality）與任務特性！",
    confusing: [
      "輸入為影像/視訊 ➔ CV 電腦視覺；輸入為文字/語意 ➔ NLP 自然語言處理；輸入為音訊 ➔ ASR/語音處理；輸入為數值表格/日誌 ➔ 結構化 ML。切勿以製造業或金融業名詞混淆！"
    ],
    keywords: ["應用領域判準", "輸入模態", "非產業別", "CV", "NLP"],
    examRefs: [
      { subj: "115_1_1", qId: 1, note: "法律合約文本解析屬於 NLP 資訊擷取" },
      { subj: "115_1_1", qId: 18, note: "異質模態整合：CT影像(CV)+病歷文字(NLP)" }
    ]
  },
  {
    id: "l21_06",
    category: "L211",
    code: "L21102",
    title: "視覺任務三階粒度（分類 / 偵測 / 分割）",
    summary: "視覺三大任務粒度：分類（看整圖類別/成熟度）➔ 物件偵測（看邊界框 Bounding Box 標註位置與計數）➔ 影像分割（看逐像素受損邊界與面積）。",
    confusing: [
      "語意分割（Semantic Segmentation）只分像素類別不分個別實體；實例分割（Instance Segmentation）既分像素又區分同一類別的不同個體（如區分畫面中兩名相鄰行人）。"
    ],
    visualHtml: `
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align:center; font-size:0.75rem; margin:0.5rem 0;">
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">影像分類</div>
          <div>整圖標籤 (有無瑕疵)</div>
        </div>
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">物件偵測</div>
          <div>BBox 框選 + 數量</div>
        </div>
        <div style="background:var(--bg-main); padding:0.4rem; border-radius:4px; border:1px solid var(--border-color);">
          <div style="font-weight:700; color:var(--primary);">影像分割</div>
          <div>逐像素邊緣與面積</div>
        </div>
      </div>
    `,
    keywords: ["影像分類", "物件偵測", "影像分割", "實例分割", "粒度", "YOLO"],
    examRefs: [
      { subj: "114_2_1", qId: 7, note: "智慧監控物件偵測框選與類別辨識" },
      { subj: "114_2_1", qId: 34, note: "自駕車道路與物件像素級語意分割" },
      { subj: "115_1_1", qId: 6, note: "逐像素分類且區分兩名相鄰行人（實例分割）" },
      { subj: "115_1_1", qId: 7, note: "超市多物件偵測與區域邊界標記" }
    ]
  },
  {
    id: "l21_07",
    category: "L211",
    code: "L211",
    title: "資料分析四層次",
    summary: "① 描述性（Descriptive, 發生了什麼）➔ ② 診斷性（Diagnostic, 為何發生）➔ ③ 預測性（Predictive, 將發生什麼）➔ ④ 指示性（Prescriptive, 該怎麼做/最佳策略）。",
    confusing: [
      "前兩者（描述、診斷）為事後歷史分析；後兩者（預測、指示）為事前與前瞻決策。指示性分析結合最佳化演算法提供最具體的操作方案。"
    ],
    keywords: ["資料分析四層次", "描述性", "診斷性", "預測性", "指示性"],
    examRefs: [
      { subj: "114_2_1", qId: 44, note: "顧客流失預測與後續促銷策略模擬" }
    ]
  },
  {
    id: "l21_08",
    category: "L211",
    code: "L211",
    title: "AI 應用三層次",
    summary: "① 感知辨識：將現實非結構化訊號（圖像、文字、聲音）轉換為數位資料；② 預測分析：根據歷史數據對未來數值或分類進行估計；③ 決策最佳化：給予具體可行的最佳行動方案。",
    confusing: [
      "感知辨識（如 OCR、語音轉文字）只是起點，企業導入 AI 的最高價值在於能形成閉環反饋的「決策最佳化」。"
    ],
    keywords: ["AI應用三層次", "感知辨識", "預測分析", "決策最佳化"],
    examRefs: [
      { subj: "114_2_1", qId: 42, note: "鑑別式模型用於風險預測與決策" }
    ]
  },
  {
    id: "l21_09",
    category: "L211",
    code: "L211",
    title: "路徑最佳化與強約束問題",
    summary: "看到排程（Scheduling）、調度（Dispatching）、派工、物流最佳路徑等「強數學約束最佳化問題」，生成式 AI（LLM）不擅長！",
    confusing: [
      "生成式 AI 擅長開放式文字創作與常識問答，但在求解 NP-Hard 最佳化問題時極易出錯或產生幻覺；應使用線性整數規劃（ILP）、運籌學演算法或強化學習。"
    ],
    keywords: ["路徑最佳化", "排程調度", "約束求解", "運籌學", "LLM不擅長"],
    examRefs: [
      { subj: "114_2_1", qId: 13, note: "分散式排程與資源最佳化調度" }
    ]
  },
  {
    id: "l21_10",
    category: "L211",
    code: "L211",
    title: "圖靈測試判別口訣",
    summary: "圖靈測試（Turing Test）核心判準：只問人類評審「分不分得出來對面是人還是機器」，不問對不對，也不問內部是怎麼推理的！",
    confusing: [
      "圖靈測試是「行為主義與表象模擬」，並不評價機器是否真的擁有自我意識、理解能力或輸出事實的絕對正確性。"
    ],
    keywords: ["圖靈測試", "行為主義", "只問分不分得出來", "不問對不對"],
    examRefs: [
      { subj: "114_2_1", qId: 1, note: "NLP 人機對話語意理解" }
    ]
  },
  {
    id: "l21_11",
    category: "L211",
    code: "L21101",
    title: "詞向量（Word Embedding）技術演進",
    summary: "One-Hot（高維稀疏, 正交無語意）➔ TF-IDF（詞頻逆文件頻率統計）➔ Word2Vec (CBOW/Skip-Gram, 密集向量) ➔ GloVe (全域共現矩陣) ➔ BERT (動態上下文嵌入)。",
    confusing: [
      "Word2Vec 與 GloVe 為「靜態詞向量」，無法解決一詞多義（如 Bank 是銀行還是河岸）；Transformer/BERT 根據前後文計算動態注意力向量，完美克服多義詞！"
    ],
    keywords: ["詞向量", "Word2Vec", "GloVe", "One-Hot", "TF-IDF", "BERT"],
    examRefs: [
      { subj: "114_2_1", qId: 4, note: "GloVe 結合局部上下文與全域共現矩陣" },
      { subj: "114_2_1", qId: 5, note: "TF-IDF 平衡單詞頻率與文件區分度" },
      { subj: "114_2_1", qId: 33, note: "Word2Vec Skip-Gram 適合大型稀疏語料" },
      { subj: "115_1_1", qId: 3, note: "海量長尾語料詞向量建構" },
      { subj: "115_1_1", qId: 5, note: "One-Hot 無法表達語意相似度缺點" }
    ]
  },
  {
    id: "l21_12",
    category: "L211",
    code: "L21101",
    title: "Transformer 架構核心：自注意力機制",
    summary: "Self-Attention 透過查詢向量 $Q$、鍵向量 $K$、值向量 $V$ 計算注意力權重：$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$。",
    confusing: [
      "除以 $\\sqrt{d_k}$ 是縮放因子（Scaling Factor），防止內積數值過大導致 Softmax 進入飽和區（梯度消失）；多頭注意力（Multi-Head）可並行捕獲不同語意維度關聯。"
    ],
    keywords: ["Transformer", "Self-Attention", "自注意力機制", "QKV", "縮放點積"],
    examRefs: [
      { subj: "114_2_1", qId: 2, note: "Transformer 解決長篇翻譯長距離依賴" },
      { subj: "114_2_1", qId: 18, note: "注意力塌陷 (Attention Collapse) 解決策略" },
      { subj: "115_1_1", qId: 11, note: "自注意力機制 Q, K, V 計算核心" }
    ]
  },
  {
    id: "l21_13",
    category: "L211",
    code: "L21101",
    title: "BERT vs GPT 架構對比",
    summary: "BERT（Transformer Encoder, 雙向上下文理解, 擅長文本分類/NER/閱讀理解）；GPT（Transformer Decoder, 單向自回歸, 擅長文字生成與連續對話）。",
    confusing: [
      "BERT 預訓練任務包含遮蔽語言模型（MLM）與下一句預測（NSP）；GPT 則是給定前文預測下一個 Token（Causal LM）。判斷兩者看「理解/分類 (BERT)」還是「生成 (GPT)」。"
    ],
    keywords: ["BERT", "GPT", "Encoder", "Decoder", "自回歸", "雙向表徵"],
    examRefs: [
      { subj: "114_2_1", qId: 3, note: "BERT 預訓練 Masked LM 雙向表徵" },
      { subj: "115_1_1", qId: 4, note: "BERT 預訓練數據準備與遮蔽策略" }
    ]
  },
  {
    id: "l21_14",
    category: "L211",
    code: "L21103",
    title: "RAG 檢索增強生成 vs 微調 (Fine-Tuning)",
    summary: "RAG（外部向量資料庫檢索最新私有知識，低成本、零時差、防幻覺）；微調（將專業語氣、指令格式或風格內化到模型權重中，成本高、無法頻繁更新即時資料）。",
    confusing: [
      "需要實時更新或查內部最新規章 ➔ 選 RAG；需要固定輸出格式、特定專業術語或輕量化部署 ➔ 選 LoRA/微調；實務首選 RAG 搭配輕量微調。"
    ],
    keywords: ["RAG", "微調", "Fine-Tuning", "向量資料庫", "防幻覺", "LoRA"],
    examRefs: [
      { subj: "114_2_1", qId: 17, note: "RAG 引入外部檢索減少生成幻覺" },
      { subj: "115_1_1", qId: 2, note: "70B 模型 LoRA 參數高效微調" },
      { subj: "115_1_1", qId: 13, note: "客服助理方案比較：提示微調 vs 檢索" },
      { subj: "115_1_1", qId: 21, note: "RAG 系統優化與檢索重排序 Rerank" }
    ]
  },
  {
    id: "l21_15",
    category: "L211",
    code: "L21103",
    title: "三大生成架構對比：GAN / VAE / Diffusion",
    summary: "① GAN：生成器與判別器博弈對抗，易發生模式崩潰（Mode Collapse）；② VAE：編碼到潛在分佈並重參數化取樣，穩定但生成較模糊；③ Diffusion：前向加噪與反向去噪，品質最高但推論計算步數多。",
    confusing: [
      "模式崩潰是指生成器只生成單一或極少數幾種逼真樣本（如只產特定人臉），無法涵蓋真實分佈的多樣性；WGAN 引入 Wasserstein 距離可大幅改善。"
    ],
    keywords: ["GAN", "VAE", "Diffusion", "模式崩潰", "重參數化", "擴散模型"],
    examRefs: [
      { subj: "114_2_1", qId: 20, note: "GAN 人臉生成模式崩潰 (Mode Collapse)" },
      { subj: "114_2_1", qId: 38, note: "Stable Diffusion 潛在擴散生成高畫質影像" },
      { subj: "114_2_1", qId: 40, note: "VAE 變分自編碼器潛在分佈與重參數化" }
    ]
  },
  {
    id: "l21_16",
    category: "L211",
    code: "L21102",
    title: "CNN 關鍵層：卷積層與池化層",
    summary: "卷積層（Convolution）：權重共享與局部感受野，提取邊緣特徵；池化層（Max-Pooling）：空間降維、減少參數量並提供微幅平移不變性。",
    confusing: [
      "Softmax 是將連續分數轉化為機率分佈（所有類別和為 1）；Max-Pooling 是在局部窗口內取最大值進行空間降維，兩者功能完全不同！"
    ],
    keywords: ["CNN", "卷積層", "池化層", "Max-Pooling", "Softmax", "平移不變性"],
    examRefs: [
      { subj: "114_2_1", qId: 8, note: "Softmax(機率歸一) vs Max-Pooling(特徵降維)" },
      { subj: "115_1_1", qId: 32, note: "PyTorch CNN 特徵圖大小與維度計算" }
    ]
  },
  {
    id: "l21_17",
    category: "L211",
    code: "L21102",
    title: "物件偵測：單階段 (YOLO) vs 二階段 (Faster R-CNN)",
    summary: "YOLO（單階段）：將影像劃分網格直接回歸邊界框與類別，推論速度極快（即時串流首選）；Faster R-CNN（二階段）：RPN 候選區域 + 分類回歸，速度較慢但高精度。",
    confusing: [
      "產線即時高頻檢測或無人機視訊 ➔ 首選 YOLO；醫療高精度病灶標註或追求極致 AP 且無即時延遲限制 ➔ 首選 Faster R-CNN。"
    ],
    keywords: ["YOLO", "Faster R-CNN", "單階段", "二階段", "RPN", "推論延遲"],
    examRefs: [
      { subj: "115_1_1", qId: 10, note: "工廠高頻即時檢驗 YOLO vs Faster R-CNN" }
    ]
  },
  {
    id: "l21_18",
    category: "L211",
    code: "L21104",
    title: "多模態對齊與融合策略",
    summary: "CLIP（對比學習讓文字與影像嵌入同一共享向量空間）；融合策略分為：早期融合（特徵拼接）、晚期融合（決策加權/各自輸出後融合）、混合融合。",
    confusing: [
      "早期融合各模態特徵互相交互深，但若單一模態遺失則容錯差；晚期融合（Late Fusion）獨立性高、對單一模態缺失容忍度強。"
    ],
    keywords: ["CLIP", "多模態對齊", "早期融合", "晚期融合", "對比學習"],
    examRefs: [
      { subj: "114_2_1", qId: 21, note: "多模態缺失時的特徵插補與晚期融合" },
      { subj: "114_2_1", qId: 35, note: "CLIP 對比文字-圖像特徵跨模態檢索" },
      { subj: "115_1_1", qId: 17, note: "醫療多模態風險評估異質資料融合" },
      { subj: "115_1_1", qId: 50, note: "肺炎診斷採用晚期融合(Late Fusion)策略" }
    ]
  },
  {
    id: "l21_19",
    category: "L211",
    code: "L21104",
    title: "AI Agent 架構與 ReAct 框架",
    summary: "AI Agent = LLM（大腦）+ 規劃（Planning）+ 記憶（Memory）+ 工具使用（Tools）。ReAct 框架透過「Reasoning（思考）+ Acting（行動）+ Observation（觀察）」閉環自主完成多步驟任務。",
    confusing: [
      "單純的 LLM 只能文字輸出；AI Agent 具有環境交互與工具調用（Function Calling/API）能力，遇到未知問題會主動搜尋或執行代碼後再回答。"
    ],
    keywords: ["AI Agent", "ReAct", "思考行動觀察", "工具調用", "多代理人"],
    examRefs: [
      { subj: "115_1_1", qId: 15, note: "多代理人(Multi-Agent)編排協同運作" },
      { subj: "115_1_1", qId: 16, note: "ReAct 框架的思考-行動-觀察迴圈" }
    ]
  },
  {
    id: "l21_20",
    category: "L211",
    code: "L21103",
    title: "提示詞工程（Prompt Engineering）技巧",
    summary: "Zero-shot（零樣本直接問）➔ Few-shot（給 2~3 個範例引導格式）➔ Chain-of-Thought (CoT, 思維鏈「一步步想」) ➔ Self-Consistency（多次取樣多數決）。",
    confusing: [
      "CoT 顯著提升算術、邏輯推理與多步驟推理準確率；若問題僅為事實檢索，CoT 效益不明顯且增加 Token 消耗。"
    ],
    keywords: ["提示詞工程", "Few-shot", "CoT", "思維鏈", "Self-Consistency"],
    examRefs: [
      { subj: "114_2_1", qId: 19, note: "低資源語言利用 Few-shot 引導生成" }
    ]
  },

  // ==========================================
  // L212: AI 導入評估規劃 (歐盟法案、評估、規劃、風險管理、XAI)
  // ==========================================
  {
    id: "l21_21",
    category: "L212",
    code: "L21203",
    title: "歐盟 AI 法案—四級風險金字塔",
    summary: "歐盟《人工智慧法案》（EU AI Act）採基於風險的分級監管模式：① 不可接受風險（完全禁止）② 高風險（嚴格監管合規）③ 有限風險（透明標示義務）④ 最小/無風險（不規範）。",
    confusing: [
      "聊天機器人與 Deepfake 屬於「有限風險」（須透明標示）；求職履歷篩選、醫療器材、信用評分屬於「高風險」；社會信用評分、潛意識操控屬於「不可接受風險」。"
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
    keywords: ["歐盟AI法案", "EU AI Act", "四級風險金字塔", "高風險", "有限風險", "透明義務"],
    examRefs: [
      { subj: "114_2_1", qId: 25, note: "生成式 AI 版權與合規標示" },
      { subj: "115_1_1", qId: 25, note: "NIST AI RMF 與外部法規稽核" },
      { subj: "115_1_1", qId: 26, note: "自動授信系統高風險監管審核" }
    ]
  },
  {
    id: "l21_22",
    category: "L212",
    code: "L21203",
    title: "歐盟 AI 法案—高風險規範要求",
    summary: "嚴格監管（強制偏見測試、人工監督、CE 認證），涵蓋人資招聘/履歷篩選、醫療器材、關鍵基礎設施、信用評分、司法判決等。",
    confusing: [
      "高風險並不是禁止使用！而是必須遵守嚴格的前置驗證、資料品質治理、歧視偏見測試與「人工監督機制」（Human-in-the-Loop），取得 CE 標誌方可上市。"
    ],
    keywords: ["歐盟高風險", "嚴格監管", "CE認證", "偏見測試", "人工監督"],
    examRefs: [
      { subj: "115_1_1", qId: 26, note: "金融授信模型公平性與監理合規" },
      { subj: "115_1_1", qId: 27, note: "醫療 AI 輔助系統的前置臨床驗證" }
    ]
  },
  {
    id: "l21_23",
    category: "L212",
    code: "L21203",
    title: "歐盟 AI 法案—有限風險與透明義務",
    summary: "賦予透明義務，聊天機器人（Chatbot）、Deepfake（深偽技術）及生成式內容必須主動標示揭露，讓使用者明確知曉正與 AI 互動。",
    confusing: [
      "有限風險不需要像高風險那樣提交完整技術稽核文件或取得 CE 認證，核心規範落在「知情同意與標示揭露義務」。"
    ],
    keywords: ["有限風險", "透明義務", "聊天機器人", "Deepfake", "標示揭露"],
    examRefs: [
      { subj: "114_2_1", qId: 25, note: "企業生成式內容侵權質疑與透明揭露" }
    ]
  },
  {
    id: "l21_24",
    category: "L212",
    code: "L21201",
    title: "AI 導入可行性評估（規則 vs 機器學習）",
    summary: "明確規則、低變異、邏輯清楚且不容許隨機誤差 ➔ 傳統規則軟體；資料量大、特徵複雜、規則寫不出來且容許一定機率統計誤差 ➔ AI/ML。",
    confusing: [
      "如果業務邏輯用 5 條 if-else 就能 100% 解決且無例外，導入 AI 只會增加算力成本與不確定性；切忌為了 AI 而 AI！"
    ],
    keywords: ["導入評估", "規則系統", "機器學習", "適用性邊界"],
    examRefs: [
      { subj: "114_2_1", qId: 43, note: "客服郵件分類規則與 ML 評估" },
      { subj: "115_1_1", qId: 19, note: "推薦系統上線業務成效與 ROI 評估" }
    ]
  },
  {
    id: "l21_25",
    category: "L212",
    code: "L21201",
    title: "POC 概念驗證（Proof of Concept）生命週期",
    summary: "定義明確問題與成功指標（KPI/ROI）➔ 準備最小代表性驗證資料 ➔ 快速建模與技術可行性驗證 ➔ 成果評估與業務效益對照 ➔ 決定是否進入正式 MVP 開發。",
    confusing: [
      "POC 的目標是「驗證可行性與邊界條件」，不是把系統做到 100% 完善；若 POC 失敗應果斷停損或調整資料特徵方向。"
    ],
    keywords: ["POC", "概念驗證", "KPI", "業務價值", "可行性"],
    examRefs: [
      { subj: "115_1_1", qId: 23, note: "製造業瑕疵檢測 POC 小樣本驗證" }
    ]
  },
  {
    id: "l21_26",
    category: "L212",
    code: "L21202",
    title: "人機協作模式（HITL / HOTL / HOOTL）",
    summary: "① Human-in-the-loop (HITL)：AI 推薦但必須由人類逐筆核准才能執行（醫療、授信）；② Human-on-the-loop (HOTL)：AI 自動執行，人類監控異常並隨時中斷；③ Human-out-of-the-loop：全自主無人介入。",
    confusing: [
      "高風險與高代價場景（如癌症確診、高額放款）必須堅持 HITL；低風險高頻場景（如垃圾郵件過濾、影片推薦）可採 HOTL。"
    ],
    keywords: ["HITL", "HOTL", "人機協作", "人工監督", "Human-in-the-loop"],
    examRefs: [
      { subj: "114_2_1", qId: 23, note: "醫院臨床輔助系統降低衝擊的人工確認" },
      { subj: "115_1_1", qId: 27, note: "放射科醫師搭配 AI 輔助判讀架構" }
    ]
  },
  {
    id: "l21_27",
    category: "L212",
    code: "L21202",
    title: "漸進式發布策略：Canary vs A/B 測試",
    summary: "① 藍綠部署（Blue-Green）：新舊環境完整切換；② 金絲雀部署（Canary）：先導流 1%~5% 流量至新模型，監控無異常再逐步擴大至 100%；③ A/B 測試：隨機分流評估商業轉化率。",
    confusing: [
      "Canary 重點在於「技術穩定度與降級安全」；A/B 測試重點在於「比較兩個演算法版本的業務效益（點擊率、營收）」。"
    ],
    keywords: ["金絲雀部署", "Canary", "A/B測試", "藍綠部署", "漸進式發布"],
    examRefs: [
      { subj: "114_2_1", qId: 29, note: "持續整合 CI/CD 與自動化驗證部署" },
      { subj: "115_1_1", qId: 43, note: "推薦模型離線與線上 A/B 測試差異" },
      { subj: "115_1_1", qId: 47, note: "推薦系統漸進式發布(Phased/Canary)" }
    ]
  },
  {
    id: "l21_28",
    category: "L212",
    code: "L21203",
    title: "可解釋性 AI（XAI）：SHAP vs LIME",
    summary: "LIME（局部代理模型, 用簡單線性模型逼近局部樣本邊界）；SHAP（基於博弈論 Shapley Values, 滿足加和性與對稱性，可計算全域特徵重要性與個別樣本貢獻度）。",
    confusing: [
      "SHAP 理論基礎最嚴謹且特徵貢獻度相加等於預測值與基準值之差，但計算複雜度高；影像領域可使用 Grad-CAM 呈現熱力圖（Heatmap）。"
    ],
    keywords: ["XAI", "SHAP", "LIME", "Grad-CAM", "特徵歸因", "可解釋性"],
    examRefs: [
      { subj: "115_1_1", qId: 28, note: "XGBoost 信用模型使用 SHAP 歸因特徵" },
      { subj: "115_1_1", qId: 29, note: "CNN 醫療影像使用 Grad-CAM 熱力圖" }
    ]
  },
  {
    id: "l21_29",
    category: "L212",
    code: "L21203",
    title: "對抗性攻擊（Adversarial Attack）防範",
    summary: "駭客對輸入加入人眼無法察覺的微小擾動（Perturbation, 如 FGSM），導致模型高信心誤判（如熊貓被辨識為長臂猿）。",
    confusing: [
      "防禦手段首選「對抗訓練（Adversarial Training）」，即在訓練集中加入帶有擾動的對抗樣本重新訓練模型，提升魯棒性（Robustness）。"
    ],
    keywords: ["對抗性攻擊", "Adversarial", "擾動", "對抗訓練", "模型魯棒性"],
    examRefs: [
      { subj: "114_2_1", qId: 24, note: "金融風控對抗性擾動攻擊與防禦" }
    ]
  },
  {
    id: "l21_30",
    category: "L212",
    code: "L21203",
    title: "演算法偏見與公平性（Fairness）",
    summary: "偏見來源包括：歷史資料偏見（性別/種族失衡）、測量偏見、代表性偏見。評估指標有統計平等（Demographic Parity）、均等機會（Equal Opportunity）。",
    confusing: [
      "即使從特徵中移除「性別」或「種族」，模型仍可能透過「郵遞區號」、「畢業學校」等代理特徵（Proxy Features）學習到歧視性關聯！"
    ],
    keywords: ["演算法偏見", "公平性", "Fairness", "代理特徵", "統計平等"],
    examRefs: [
      { subj: "115_1_1", qId: 26, note: "授信審核公平性檢測與敏感特徵隔離" }
    ]
  },
  {
    id: "l21_31",
    category: "L212",
    code: "L21203",
    title: "生成式 AI 版權與資料隱私合規",
    summary: "利用企業專有知識訓練或使用商業 API 時，必須確認服務條款是否包含「將客戶輸入作為公用模型訓練數據」；防止資料洩漏與生成物抄襲智財風險。",
    confusing: [
      "使用公有雲模型時，應選擇「企業級私有端點（Zero Data Retention / 不得保留數據訓練）」或本地私有化部署開源大模型。"
    ],
    keywords: ["版權合規", "智財權", "資料隱私", "Zero Data Retention"],
    examRefs: [
      { subj: "114_2_1", qId: 25, note: "生成內容智財版權爭議因應機制" }
    ]
  },
  {
    id: "l21_32",
    category: "L212",
    code: "L21201",
    title: "分類模型評估指標抉擇（Precision / Recall / F1 / AUC）",
    summary: "① 假陽性代價高（不能抓錯, 如垃圾郵件）➔ 看 Precision；② 假陰性代價高（寧可抓錯不能放過, 如癌症篩檢、防損）➔ 看 Recall；③ 兼顧 ➔ F1-score；④ 不平衡資料綜合排序 ➔ PR-AUC 或 ROC-AUC。",
    confusing: [
      "在極度類別不平衡（如瑕疵率 0.1%）的場景下，Accuracy 失去參考價值（全猜良品也有 99.9% 準確率），且 ROC-AUC 可能過度樂觀，應改用 PR-AUC！"
    ],
    keywords: ["Precision", "Recall", "F1-score", "ROC-AUC", "混淆矩陣"],
    examRefs: [
      { subj: "114_2_1", qId: 10, note: "兼顧 Precision 與 Recall 首選 F1-Score" },
      { subj: "115_1_1", qId: 8, note: "皮膚病變二元分類 ROC-AUC 評估" },
      { subj: "115_1_1", qId: 9, note: "線上監控混淆矩陣 (Confusion Matrix)" }
    ]
  },

  // ==========================================
  // L213: AI 技術應用與系統部署 (數據準備、模型選擇、邊緣/雲端、MLOps)
  // ==========================================
  {
    id: "l21_33",
    category: "L213",
    code: "L21301",
    title: "資料不平衡（Class Imbalance）四大解法",
    summary: "① 過採樣（SMOTE 生成少數類合成樣本）；② 欠採樣（Random Undersampling）；③ 演算法層級（加權損失 Class Weights / Focal Loss）；④ 轉換為異常偵測（One-Class SVM/Isolation Forest）。",
    confusing: [
      "直接隨機過採樣（Random Oversampling）容易導致模型對少數類重複樣本過擬合；SMOTE 在特徵空間進行線性插值更為穩健。"
    ],
    keywords: ["資料不平衡", "SMOTE", "欠採樣", "Focal Loss", "異常偵測"],
    examRefs: [
      { subj: "115_1_1", qId: 37, note: "產線良品占 99% 極度不平衡資料處置" }
    ]
  },
  {
    id: "l21_34",
    category: "L213",
    code: "L21301",
    title: "資料增強（Data Augmentation）",
    summary: "透過對現有資料進行變換（影像翻轉、旋轉、縮放、裁剪、添加雜訊、色彩抖動）擴充訓練資料量，提升模型泛化能力並降低過擬合。",
    confusing: [
      "資料增強僅在「訓練集」上進行，嚴禁在「驗證集與測試集」上使用，否則會破壞真實世界的評估基準！"
    ],
    keywords: ["資料增強", "翻轉旋轉", "泛化能力", "過擬合防範"],
    examRefs: [
      { subj: "114_2_1", qId: 9, note: "資料增強擴充訓練集並降低過擬合" },
      { subj: "115_1_1", qId: 33, note: "自駕車惡劣天氣資料不足利用合成擴增" }
    ]
  },
  {
    id: "l21_35",
    category: "L213",
    code: "L21301",
    title: "小樣本學習（Few-Shot Learning）與遷移學習",
    summary: "當標註樣本極少（如每類僅 50 張）時：① 採用在大型資料庫（ImageNet）預訓練的模型進行遷移學習（Transfer Learning）；② 凍結淺層卷積層，僅微調最後幾層分類頭。",
    confusing: [
      "小樣本切忌從零隨機初始化權重訓練大型深層神經網路，這必然導致嚴重過擬合與損失無法收斂！"
    ],
    keywords: ["小樣本", "遷移學習", "Transfer Learning", "微調分類頭"],
    examRefs: [
      { subj: "115_1_1", qId: 36, note: "工業零件每類僅 50 張採用遷移學習微調" }
    ]
  },
  {
    id: "l21_36",
    category: "L213",
    code: "L21301",
    title: "多重共線性（Multicollinearity）診斷與處理",
    summary: "當特徵間高度相關（如坪數與房間數）：① 計算變異數膨脹因子（VIF > 10 表高度共線）；② 剔除冗餘特徵；③ 使用 L2 正則化（Ridge）；④ 透過 PCA 進行主成分降維。",
    confusing: [
      "多重共線性不會影響模型整體的預測準確率，但會導致線性模型的迴歸係數估計極不穩定且失去可解釋性。"
    ],
    keywords: ["多重共線性", "VIF", "PCA", "Ridge", "特徵選擇"],
    examRefs: [
      { subj: "114_2_1", qId: 26, note: "房價預測坪數與房間數多重共線性處置" },
      { subj: "114_2_1", qId: 45, note: "PCA 主成分分析消除共線性並降維" },
      { subj: "115_1_1", qId: 30, note: "工廠 200 感測器特徵降維與共線性" }
    ]
  },
  {
    id: "l21_37",
    category: "L213",
    code: "L21302",
    title: "邊緣運算 (Edge AI) vs 雲端運算 (Cloud AI)",
    summary: "邊緣運算：在終端設備（工廠相機、車載晶片）推論，超低延遲、省頻寬、資料不出廠具隱私優勢；雲端運算：彈性算力強大、易於集中維運管理與持續訓練。",
    confusing: [
      "產線即時高速剔除瑕疵（< 10ms）或無網路連線場景 ➔ 必須邊緣運算；海量日誌離線分析、複雜大模型協同 ➔ 雲端運算。"
    ],
    keywords: ["邊緣運算", "Edge AI", "雲端運算", "低延遲", "資料隱私"],
    examRefs: [
      { subj: "115_1_1", qId: 20, note: "即時推薦系統 100ms 內回應架構" },
      { subj: "115_1_1", qId: 40, note: "工廠工業相機改採邊緣推論降低延遲與頻寬" },
      { subj: "115_1_1", qId: 46, note: "醫療混合雲：公有雲訓練+私有地端推論" }
    ]
  },
  {
    id: "l21_38",
    category: "L213",
    code: "L21302",
    title: "模型輕量化與加速技術",
    summary: "① 模型剪枝（Pruning）：移除接近零的冗餘權重；② 模型量化（Quantization）：將 FP32 轉換為 INT8/FP16，顯存佔用減半且推論大幅加速；③ 知識蒸餾（Distillation）：大模型教小模型。",
    confusing: [
      "ONNX（Open Neural Network Exchange）是跨框架通用模型格式；TensorRT / OpenVINO 則是針對特定硬體進行圖優化與算子融合的推論引擎。"
    ],
    keywords: ["模型輕量化", "剪枝", "量化", "知識蒸餾", "ONNX", "TensorRT"],
    examRefs: [
      { subj: "114_2_1", qId: 31, note: "每秒萬次請求推論加速與批次處理" },
      { subj: "115_1_1", qId: 24, note: "即時詐欺推論延遲瓶頸與硬體加速" }
    ]
  },
  {
    id: "l21_39",
    category: "L213",
    code: "L21302",
    title: "MLOps 核心：資料漂移 vs 概念漂移",
    summary: "① 資料漂移（Data Drift / Covariate Shift）：輸入特徵分佈 $P(X)$ 改變（如年輕用戶湧入），但特徵與標籤關係沒變；② 概念漂移（Concept Drift）：輸入與標籤映射關係 $P(Y|X)$ 改變（如疫情後消費模式劇變）。",
    confusing: [
      "監控到 Drift 時的標準處置流程：觸發警報 ➔ 收集最新帶標籤數據 ➔ 重新訓練（Retrain）或微調模型 ➔ 通過驗證後重新發布上線。"
    ],
    keywords: ["MLOps", "資料漂移", "概念漂移", "Data Drift", "Concept Drift", "重訓機制"],
    examRefs: [
      { subj: "114_2_1", qId: 15, note: "MLOps 自動化流水線與持續監控" },
      { subj: "114_2_1", qId: 22, note: "顧客流失模型上線數月後預測力下降（概念漂移）" },
      { subj: "114_2_1", qId: 32, note: "生產環境效能監控與提前預警指標" },
      { subj: "115_1_1", qId: 42, note: "保險理賠模型輸入特徵分佈漂移 (Data Drift)" },
      { subj: "115_1_1", qId: 48, note: "信用卡盜刷型態轉變導致概念漂移 (Concept Drift)" }
    ]
  },
  {
    id: "l21_40",
    category: "L213",
    code: "L21302",
    title: "推論服務架構：同步 (REST) vs 非同步 (佇列)",
    summary: "同步呼叫（REST/gRPC）：適用於即時性高、計算耗時短（< 100ms）的推論；非同步處理（Message Queue 如 Kafka/RabbitMQ）：適用於長耗時推論（如高解析度生成、音訊轉寫）。",
    confusing: [
      "當併發推論負載過大時，單靠同步 API 會導致連線超時與伺服器崩潰；應以訊息佇列作為緩衝並搭配動態批次處理（Dynamic Batching）。"
    ],
    keywords: ["推論架構", "RESTful", "gRPC", "Message Queue", "Kafka", "動態批次"],
    examRefs: [
      { subj: "114_2_1", qId: 31, note: "支撐高達 10,000 QPS 的微服務架構" },
      { subj: "115_1_1", qId: 41, note: "多租戶 GPU 推論伺服器批次佇列優化" },
      { subj: "115_1_1", qId: 44, note: "長耗時生成 API 採用非同步工作佇列設計" }
    ]
  },
  {
    id: "l21_41",
    category: "L213",
    code: "L21302",
    title: "Kubernetes 在 AI 部署中的關鍵價值",
    summary: "容器編排標準：支援自動水準擴展（HPA 依 GPU/CPU 使用率擴容）、故障自我修復（Pod 重啟）、滾動更新（零停機部署）與多租戶資源隔離。",
    confusing: [
      "K8s 本身不負責訓練模型演算法，而是提供標準化容器環境與硬體算力（GPU 資源調度）的高可用維運底座。"
    ],
    keywords: ["Kubernetes", "K8s", "HPA", "自動擴展", "滾動更新", "容器編排"],
    examRefs: [
      { subj: "114_2_1", qId: 13, note: "Kubernetes 容器彈性擴展與資源配額管理" },
      { subj: "115_1_1", qId: 22, note: "模型訓練至部署全流程 CI/CD/CT 平台" }
    ]
  },
  {
    id: "l21_42",
    category: "L213",
    code: "L21301",
    title: "超參數調校陷阱：資料洩漏 (Data Leakage)",
    summary: "在進行 K-Fold 交叉驗證或超參數網格搜尋時，特徵縮放（StandardScaler）與特徵選擇必須在「每一折的訓練折」內單獨擬合，嚴禁使用全資料集統一 fit！",
    confusing: [
      "如果先用全資料集做標準化或挑選特徵，驗證集的資訊就已提前洩漏給模型，導致離線評估指標過度樂觀，上線後崩盤！"
    ],
    keywords: ["資料洩漏", "Data Leakage", "K-Fold", "StandardScaler", "交叉驗證"],
    examRefs: [
      { subj: "114_2_1", qId: 14, note: "超參數調校避免過度擬合驗證集" },
      { subj: "114_2_1", qId: 41, note: "K-Fold 交叉驗證防範資料洩漏標準流程" }
    ]
  },
  {
    id: "l21_43",
    category: "L211",
    code: "L21101",
    title: "Seq2Seq 架構與應用場景",
    summary: "序列到序列（Sequence-to-Sequence）：編碼器將可變長度輸入序列壓縮為語意向量，解碼器自回歸生成可變長度輸出序列。最典型應用為機器翻譯與文本摘要。",
    confusing: [
      "輸入與輸出長度不等長時首選 Seq2Seq；若是定長分類（如情感分析 正向/負向），只需單一編碼器即可，不需要 Seq2Seq。"
    ],
    keywords: ["Seq2Seq", "編碼器解碼器", "機器翻譯", "文本摘要"],
    examRefs: [
      { subj: "114_2_1", qId: 16, note: "序列到序列(Seq2Seq)最適合跨語言機器翻譯" }
    ]
  },
  {
    id: "l21_44",
    category: "L212",
    code: "L21203",
    title: "金融核心系統對 AI 的安全合規要求",
    summary: "金融/證券/銀行核心交易系統整合 AI 詐欺或授信模組，主管機關強制要求：審計軌跡可追溯、模型決策具可解釋性、資料傳輸儲存加密、降級容錯機制。",
    confusing: [
      "不可將 AI 視為不可挑戰的黑盒子，所有自動化決策必須留存完整 Log 並提供人工覆核管道。"
    ],
    keywords: ["金融合規", "審計軌跡", "決策可解釋性", "資安加密"],
    examRefs: [
      { subj: "114_2_1", qId: 30, note: "銀行詐欺偵測符合金管會稽核軌跡要求" },
      { subj: "115_1_1", qId: 26, note: "授信審核監理單位要求完整可解釋性" }
    ]
  },
  {
    id: "l21_45",
    category: "L213",
    code: "L21301",
    title: "異常值檢測法則：Z-Score vs IQR",
    summary: "① Z-Score（標準差法）：假設常態分佈，超過 $\\pm 3\\sigma$ 視為異常（佔約 0.3%）；② IQR（四分位距法）：非參數法，小於 $Q_1 - 1.5\\text{IQR}$ 或大於 $Q_3 + 1.5\\text{IQR}$ 視為異常值。",
    confusing: [
      "當資料存在嚴重偏態或未知分佈時，不宜使用 Z-Score，IQR 更加穩健（Robust）抗極端值干擾。"
    ],
    keywords: ["異常值檢測", "Z-Score", "IQR", "3-Sigma", "穩健統計"],
    examRefs: [
      { subj: "115_1_1", qId: 38, note: "工廠溫度常態分佈以 3 個標準差判定異常" }
    ]
  },
  {
    id: "l21_46",
    category: "L212",
    code: "L21202",
    title: "模型降級與熔斷防禦（Fallback Strategy）",
    summary: "當線上 AI 服務發生逾時、網路中斷或幻覺率飆高時，系統必須自動熔斷切換至預設備用方案（如快取熱門推薦、規則引擎、人工客服回覆）。",
    confusing: [
      "優秀的 AI 架構設計永遠有 Fallback 保底方案，絕不能讓前端使用者看到 500 錯誤或空白頁面。"
    ],
    keywords: ["熔斷降級", "Fallback", "高可用性", "容錯設計"],
    examRefs: [
      { subj: "115_1_1", qId: 45, note: "整合多個外部 AI 微服務的超時與降級熔斷機制" }
    ]
  },
  {
    id: "l21_47",
    category: "L211",
    code: "L21103",
    title: "大模型量化技術（GPTQ, AWQ, GGUF）",
    summary: "透過權重後量化（PTQ），將 16-bit 浮點數轉換為 4-bit 整數。70B 參數模型原本需要 140GB 顯存，量化後僅需約 35~40GB，讓單台消費級伺服器即可推論。",
    confusing: [
      "4-bit 量化會帶來微幅的困惑度（Perplexity）上升，但在絕大多數通用對話與分類任務中，效能損失小於 1%，性價比極高。"
    ],
    keywords: ["大模型量化", "4-bit", "AWQ", "GPTQ", "GGUF", "顯存節省"],
    examRefs: [
      { subj: "115_1_1", qId: 2, note: "70B 模型透過量化與參數高效微調降本增效" }
    ]
  },
  {
    id: "l21_48",
    category: "L213",
    code: "L21302",
    title: "線上模型監控指標維度",
    summary: "① 系統層：推論延遲（P95/P99 Latency）、吞吐量（QPS）、GPU/記憶體利用率；② 資料層：特徵分佈漂移、空值率變化；③ 業務層：點擊率（CTR）、轉換率、使用者客訴投訴率。",
    confusing: [
      "技術指標（如 Loss 低）不等於業務指標好；若模型延遲過高（超過 500ms），即使預測再準，用戶也會直接跳出離開。"
    ],
    keywords: ["模型監控", "P99延遲", "QPS", "CTR", "業務指標與技術指標"],
    examRefs: [
      { subj: "114_2_1", qId: 32, note: "生產環境效能與健康度即時監控告警" },
      { subj: "115_1_1", qId: 49, note: "推薦系統線上儀表板追蹤技術與業務指標" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L21_CHEATSHEET_DATA;
}
