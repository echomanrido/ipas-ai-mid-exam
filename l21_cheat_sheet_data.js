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
  },
  {
    "id": "l21_49",
    "category": "L211",
    "code": "L21101",
    "title": "NLP 預處理黃金三部曲：分詞、詞性標註與詞形還原",
    "summary": "文本清洗標準管線：分詞（Tokenization）切分語義單元 ➔ POS 標註詞性語法角色 ➔ 詞形還原（Lemmatization）依字典還原原型。",
    "confusing": [
      "詞幹提取（Stemming）是啟發式粗暴截斷後綴（如 leaves➔leav），速度快但常產生無意義單字；詞形還原（Lemmatization）結合詞性與語料字典精準還原（leaves➔leaf），更適合嚴謹語義任務。",
      "停用詞（Stopwords，如「的」、「了」、「the」）通常在此階段過濾，但在情緒分析或古文處理中需謹慎剔除以免破壞語境。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.4rem; flex-wrap:wrap; margin:0.5rem 0;\">\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;\">① 分詞 (Tokenize)</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;\">② 停用詞過濾 (Stopwords)</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:600;\">③ 詞性標註 (POS)</span>\n        <span style=\"background:#fef3c7; color:#b45309; border:1px solid #fde68a; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700;\">④ 詞形還原 (Lemmatize)</span>\n      </div>\n    ",
    "keywords": [
      "NLP預處理",
      "分詞",
      "詞性標註",
      "詞形還原",
      "詞幹提取",
      "停用詞"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 1,
        "note": "自然語言前處理中詞形還原與標點符號清洗"
      },
      {
        "subj": "115_1_1",
        "qId": 3,
        "note": "資訊檢索中停用詞剔除與詞幹提取之優缺點"
      }
    ]
  },
  {
    "id": "l21_50",
    "category": "L211",
    "code": "L21101",
    "title": "子詞切分演算法：BPE vs WordPiece vs SentencePiece",
    "summary": "平衡詞表大小與未登錄詞（OOV）的現代解法。BPE 依字元頻率合併最常相鄰對；WordPiece 依似然概率最大化合併；SentencePiece 原生支援非空格語言。",
    "confusing": [
      "字層級（Character）詞表小但序列過長缺乏語意；詞層級（Word）語意豐富但詞表爆炸且無法處理生詞（OOV）。",
      "子詞（Subword）演算法能在保留高頻完整詞的同時，將生詞拆解為常見字根詞綴（如 un+afford+able），是 GPT 與 BERT 的標配。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.8rem; background:var(--bg-main); padding:0.5rem; border-radius:6px; border:1px solid var(--border-color); margin:0.4rem 0;\">\n        <strong>主流模型子詞對照：</strong><br>\n        • <strong>BPE</strong>：GPT-2 / GPT-4 / RoBERTa / LLaMA<br>\n        • <strong>WordPiece</strong>：BERT / DistilBERT<br>\n        • <strong>SentencePiece</strong>：T5 / ALBERT（將空格視為普通字元 <code>_</code>）\n      </div>\n    ",
    "keywords": [
      "子詞切分",
      "BPE",
      "WordPiece",
      "SentencePiece",
      "OOV",
      "詞表縮減"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 12,
        "note": "現代語言模型處理未登錄詞之子詞切分機制"
      }
    ]
  },
  {
    "id": "l21_51",
    "category": "L211",
    "code": "L21101",
    "title": "循環神經網路進化論：RNN ➔ LSTM ➔ GRU 門控對決",
    "summary": "RNN 易梯度消失難捕獲長程依賴；LSTM 引入細胞狀態與三門結構；GRU 將結構精簡為更新門與重置門。",
    "confusing": [
      "LSTM 擁有 3 個門（遺忘門 Forget、輸入門 Input、輸出門 Output）與獨立的 Cell State；GRU 只有 2 個門（更新門 Update、重置門 Reset），無單獨 Cell State。",
      "GRU 參數量比 LSTM 少約 25%~30%，運算速度顯著提升，且在中小規模訓練集上表現通常等同甚至略優於 LSTM。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; margin:0.5rem 0; font-size:0.75rem;\">\n        <div style=\"background:var(--bg-card); border:1px solid var(--border-color); padding:0.4rem; border-radius:4px;\">\n          <strong style=\"color:var(--primary);\">LSTM (3 門 + 1 狀態)</strong><br>\n          • 遺忘門: 決定丟棄哪些舊資訊<br>\n          • 輸入門: 決定寫入哪些新特徵<br>\n          • 輸出門: 決定輸出到隱藏層<br>\n          • 特點: 記憶力強但參數龐大\n        </div>\n        <div style=\"background:var(--bg-card); border:1px solid var(--border-color); padding:0.4rem; border-radius:4px;\">\n          <strong style=\"color:#059669;\">GRU (2 門精簡版)</strong><br>\n          • 重置門: 決定舊狀態與新輸入結合度<br>\n          • 更新門: 同時控制遺忘與記憶比例<br>\n          • 特點: 輕巧高速不易過擬合\n        </div>\n      </div>\n    ",
    "keywords": [
      "RNN",
      "LSTM",
      "GRU",
      "門控機制",
      "梯度消失",
      "長程依賴"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 2,
        "note": "處理序列時序資料時 LSTM 各門結構之作用"
      },
      {
        "subj": "115_1_1",
        "qId": 5,
        "note": "GRU 門控單元相較於 LSTM 之架構優勢"
      }
    ]
  },
  {
    "id": "l21_52",
    "category": "L211",
    "code": "L21101",
    "title": "Transformer 自注意力機制四步運算與縮放因子直覺",
    "summary": "透過 Q（查詢）、K（鍵）、V（值）矩陣計算全局語義關聯，除以 $\\sqrt{d_k}$ 確保 Softmax 梯度穩定不飽和。",
    "confusing": [
      "公式：$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$",
      "為什麼除以 $\\sqrt{d_k}$？若維度 $d_k$ 很大，點積數值會過大，導致 Softmax 函數落入極小梯度的飽和區（梯度消失），除以 $\\sqrt{d_k}$ 將變異數拉回 1。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.5rem; border-radius:6px; font-size:0.8rem; border-left:3px solid var(--primary);\">\n        <strong>四步流水線：</strong><br>\n        1. 投影矩陣生成 $Q, K, V$ 向量<br>\n        2. 點積計算相關度分數 $QK^T$<br>\n        3. 縮放並進行歸一化 $\\text{softmax}(\\cdot / \\sqrt{d_k})$<br>\n        4. 與 $V$ 矩陣進行加權線性組合輸出\n      </div>\n    ",
    "keywords": [
      "Transformer",
      "自注意力機制",
      "QKV",
      "縮放因子",
      "Softmax飽和",
      "多頭注意力"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 3,
        "note": "自注意力機制矩陣乘法與維度縮放目的"
      },
      {
        "subj": "115_1_1",
        "qId": 7,
        "note": "Transformer 架構相較於 RNN 實現高度平行運算之本質"
      }
    ]
  },
  {
    "id": "l21_53",
    "category": "L211",
    "code": "L21101",
    "title": "雙向自編碼 (BERT) vs 單向自回歸 (GPT) 核心預訓練任務",
    "summary": "BERT 採用雙向 Encoder 結構，擅長理解與分類；GPT 採用單向因果 Decoder 結構，擅長生成與續寫。",
    "confusing": [
      "BERT 預訓練兩大任務：① 遮罩語言模型（MLM，遮蔽 15% 詞彙）+ ② 下一句預測（NSP，判斷句子關聯性）。",
      "GPT 預訓練任務：因果語言模型（CLM，Causal Language Modeling，僅看左側上下文預測下一個 Token）。",
      "判準口訣：需要整體理解上下文（問答、NER、情感分類）選 BERT；需要創意創作、對話生成、寫程式碼選 GPT。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.5rem; margin:0.4rem 0;\">\n        <span style=\"flex:1; background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.4rem; border-radius:4px; font-size:0.75rem; text-align:center;\">\n          <strong>BERT (雙向 Encoder)</strong><br>看左也看右，語義理解之王\n        </span>\n        <span style=\"flex:1; background:#fef3c7; color:#b45309; padding:0.4rem; border-radius:4px; font-size:0.75rem; text-align:center;\">\n          <strong>GPT (單向 Decoder)</strong><br>由左至右逐字吐詞，文字生成霸主\n        </span>\n      </div>\n    ",
    "keywords": [
      "BERT",
      "GPT",
      "自編碼",
      "自回歸",
      "MLM",
      "CLM",
      "雙向注意"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 4,
        "note": "判斷情感分析與文本生成情境下的模型選型"
      },
      {
        "subj": "115_1_1",
        "qId": 10,
        "note": "BERT 遮罩語言模型預訓練之運作邏輯"
      }
    ]
  },
  {
    "id": "l21_54",
    "category": "L211",
    "code": "L21103",
    "title": "參數高效微調（PEFT）：LoRA 與 QLoRA 原理與優勢",
    "summary": "凍結主模型龐大權重 $W$，僅外掛低秩分解矩陣 $A \\times B$ 進行訓練，以 1% 以下參數量達到全量微調 95%+ 效果。",
    "confusing": [
      "全量微調（Full Fine-Tuning）顯存開銷極高且易發生災難性遺忘（Catastrophic Forgetting）。",
      "LoRA 在推論時可直接將 $\\Delta W = A \\times B$ 融入原始權重矩陣，不會造成額外的推論延遲（Zero Latency Overhead）。",
      "QLoRA 透過 4-bit NormalFloat (NF4) 量化基礎模型，大幅壓縮 GPU 顯存至單卡即可微調數百億參數模型。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.8rem; background:var(--bg-main); padding:0.5rem; border-radius:6px; border:1px solid var(--border-color); margin:0.4rem 0;\">\n        <strong>微調策略光譜：</strong><br>\n        Prompt 提示工程 (免訓練) ➔ RAG 檢索外掛 (低成本) ➔ <strong>LoRA/PEFT (輕量高效)</strong> ➔ 全量微調 (高耗能重訓)\n      </div>\n    ",
    "keywords": [
      "PEFT",
      "LoRA",
      "QLoRA",
      "低秩分解",
      "參數高效微調",
      "災難性遺忘"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 15,
        "note": "企業低算力資源下大語言模型微調技術選擇"
      },
      {
        "subj": "115_1_1",
        "qId": 14,
        "note": "LoRA 矩陣低秩分解在維持效能下的顯存優化"
      }
    ]
  },
  {
    "id": "l21_55",
    "category": "L211",
    "code": "L21102",
    "title": "電腦視覺資料增強三劍客：Mixup、CutMix 與 Mosaic",
    "summary": "透過幾何變換與多圖合成擴增訓練樣本多樣性，抑制深度 CNN 與 ViT 過擬合問題，強化物件空間感知。",
    "confusing": [
      "Mixup：兩張圖像素線性相加混合，標籤亦按比例混合（如 0.7 狗 + 0.3 貓），促使模型決策邊界平滑。",
      "CutMix：將 A 圖局部矩形區域裁切貼入 B 圖，保留真實局部像素紋理，避免雜訊失真。",
      "Mosaic（YOLOv4/v5 標配）：將 4 張不同圖片隨機縮放、裁切並拼合成 1 張，極大豐富了周圍背景與小物體上下文。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.35rem; flex-wrap:wrap; margin:0.5rem 0;\">\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">傳統: 翻轉/旋轉/色彩抖動</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">進階: Mixup (透明疊加)</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">進階: CutMix (貼布補丁)</span>\n        <span style=\"background:#fef3c7; color:#b45309; border:1px solid #fde68a; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700;\">YOLO標配: Mosaic (四圖拼貼)</span>\n      </div>\n    ",
    "keywords": [
      "資料增強",
      "Mixup",
      "CutMix",
      "Mosaic",
      "影像前處理",
      "過擬合防範"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 8,
        "note": "物件偵測模型訓練資料不足時的進階增強手法"
      }
    ]
  },
  {
    "id": "l21_56",
    "category": "L211",
    "code": "L21102",
    "title": "ResNet 殘差學習跳躍連接（Skip Connection）化解退化問題",
    "summary": "打破深層網路梯度消失與退化詛咒。學習殘差映射 $F(x) = H(x) - x$，讓網路即使只學恆等映射亦不會劣化。",
    "confusing": [
      "網路退化問題（Degradation Problem）並非過擬合！現象是隨著層數增加，訓練集誤差與測試集誤差『同時』上升。",
      "殘差連接（Identity Shortcut）讓梯度能夠無阻礙地直接反向傳播至淺層，使神經網路深度一舉突破 152 層甚至上千層。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.5rem; border-radius:6px; font-size:0.8rem; border-left:3px solid var(--primary);\">\n        <strong>殘差單元核心：</strong><br>\n        輸入 $x$ ➔ [權重層 ➔ ReLU ➔ 權重層] ➔ 加上跳躍分支 $x$ ➔ $\\text{ReLU}(F(x) + x)$\n      </div>\n    ",
    "keywords": [
      "ResNet",
      "殘差網絡",
      "跳躍連接",
      "Skip Connection",
      "網絡退化",
      "梯度傳播"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 9,
        "note": "ResNet 殘差結構解決深層神經網路退化問題機制"
      }
    ]
  },
  {
    "id": "l21_57",
    "category": "L211",
    "code": "L21102",
    "title": "輕量化卷積之王：MobileNet 深度可分離卷積（Depthwise Separable）",
    "summary": "專為邊緣設備與行動端設計。將標準卷積拆解為 Depthwise 空間濾波 + Pointwise 通道融合，運算量降至 1/9。",
    "confusing": [
      "Step 1 - Depthwise 卷積：每個輸入通道獨立進行單個 $3 \\times 3$ 卷積，不跨通道融合（負責空間特徵提取）。",
      "Step 2 - Pointwise 卷積：採用 $1 \\times 1$ 卷積進行跨通道線性組合（負責通道特徵交互）。",
      "參數量與乘加運算（FLOPs）約為傳統卷積的 $\\frac{1}{N} + \\frac{1}{D_k^2}$，在幾乎不損失準確率下實現超低延遲。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        標準卷積：空間 + 通道一次完成 (運算量極大)<br>\n        <strong>深度可分離</strong>：Depthwise (空間) ➔ Pointwise 1x1 (通道) (節省約 88% 運算)\n      </div>\n    ",
    "keywords": [
      "MobileNet",
      "深度可分離卷積",
      "Depthwise",
      "Pointwise",
      "邊緣計算",
      "模型輕量化"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 11,
        "note": "邊緣嵌入式設備部署影像辨識模型之輕量架構選型"
      }
    ]
  },
  {
    "id": "l21_58",
    "category": "L211",
    "code": "L21102",
    "title": "物件偵測後處理核心：非極大值抑制（NMS）與 Soft-NMS",
    "summary": "消除重疊冗餘預測框。按置信度排序，剔除與最高分候選框 IoU 超過閾值的重疊框；Soft-NMS 則採取連續衰減分數。",
    "confusing": [
      "傳統 NMS（Hard NMS）：只要候選框與最高分框的 IoU > 閾值（如 0.5），直接粗暴將置信度歸零（易誤殺緊密相鄰的多個真實物體）。",
      "Soft-NMS：將重疊框的置信度按高斯函數衰減而非直接刪除，在人群密集、重疊度高的檢測場景下 Recall 明顯更高。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.4rem; align-items:center; font-size:0.8rem; margin:0.4rem 0;\">\n        <span style=\"background:#fee2e2; color:#991b1b; padding:0.25rem 0.5rem; border-radius:4px;\">多重重疊候選框</span>\n        <span>➔ NMS 篩選 ➔</span>\n        <span style=\"background:#dcfce7; color:#166534; padding:0.25rem 0.5rem; border-radius:4px; font-weight:700;\">單一最精確邊界框</span>\n      </div>\n    ",
    "keywords": [
      "NMS",
      "非極大值抑制",
      "Soft-NMS",
      "IoU",
      "物件偵測",
      "邊界框去重"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 10,
        "note": "物件偵測後處理中 NMS 消除冗餘邊界框演算法"
      }
    ]
  },
  {
    "id": "l21_59",
    "category": "L211",
    "code": "L21102",
    "title": "影像分割三層粒度：語意分割 vs 實例分割 vs 全景分割",
    "summary": "像素級視覺理解。語意分割區分類別不分個體；實例分割只分割前景具體個體；全景分割統一結合二者。",
    "confusing": [
      "語意分割（Semantic Segmentation，如 FCN, U-Net）：將畫面每個像素標記為「人」、「道路」、「背景」，同框的多個人標為同一顏色。",
      "實例分割（Instance Segmentation，如 Mask R-CNN）：標記每個具體的個體「人A」、「人B」、「車1」，但通常忽略天空、草地等無數背景。",
      "全景分割（Panoptic Segmentation）：同時包含語意分割的 Background（Stuff）與實例分割的 Foreground（Things）。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>語意分割</strong>: 像素分群 (人 vs 路)<br>\n        • <strong>實例分割</strong>: 偵測 + 遮罩 (人A vs 人B)<br>\n        • <strong>全景分割</strong>: 語意 (背景草地) + 實例 (前景個體)\n      </div>\n    ",
    "keywords": [
      "語意分割",
      "實例分割",
      "全景分割",
      "Mask R-CNN",
      "U-Net",
      "像素級分類"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 6,
        "note": "自駕車視覺感測中辨識行人個體與道路邊界之分割技術選型"
      }
    ]
  },
  {
    "id": "l21_60",
    "category": "L211",
    "code": "L21104",
    "title": "跨模態對比學習先驅：CLIP 模型架構與 Zero-Shot 遷移",
    "summary": "OpenAI 提出的雙塔架構（Text Encoder + Image Encoder）。將圖文投影到共用空間，最大化正樣本餘弦相似度。",
    "confusing": [
      "傳統影像分類依賴預先定義好的固定類別標籤（如 ImageNet 1000 類，遇到未見類別無法辨識）。",
      "CLIP 透過 4 億對網頁自然圖文對比預訓練，分類時只需將類別名寫成 Prompt（如「a photo of a {dog}」）計算文字與圖片特徵相似度，具備強大的 Zero-Shot 泛化能力。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; align-items:center; background:var(--bg-main); padding:0.5rem; border-radius:6px; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"text-align:center;\">圖片 ➔ Image Encoder<br><strong>圖片特徵向量</strong></div>\n        <div style=\"font-weight:700; color:var(--primary);\">對比學習<br>餘弦相似度最大化</div>\n        <div style=\"text-align:center;\">文本 ➔ Text Encoder<br><strong>文字特徵向量</strong></div>\n      </div>\n    ",
    "keywords": [
      "CLIP",
      "多模態",
      "對比學習",
      "Zero-Shot",
      "圖文對齊",
      "雙塔架構"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 13,
        "note": "多模態圖文對比學習模型 CLIP 之運作原理與零樣本遷移"
      }
    ]
  },
  {
    "id": "l21_61",
    "category": "L211",
    "code": "L21104",
    "title": "多模態融合三大策略：早期融合、後期融合與混合融合",
    "summary": "融合文字、影像、語音、感測資訊之結構決策。早期在特徵層拼接；後期在決策層投票；混合兼具特徵交互與容錯性。",
    "confusing": [
      "早期融合（Early Fusion / Feature-level）：在特徵提取後立即拼接，模態間交互最充分，但對某一模態資料遺失極為敏感。",
      "後期融合（Late Fusion / Decision-level）：各模態獨立建模輸出預測機率，最後加權平均或投票，容錯性高、易擴展，但忽略了細粒度的跨模態交互。",
      "混合融合（Hybrid Fusion）：在中間層進行跨注意力（Cross-Attention）交互，兼顧深層交互與決策穩定性。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.4rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>早期融合 (特徵層)</strong><br>細粒度交互強，但一損俱損\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.4rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>後期融合 (決策層)</strong><br>獨立容錯性高，但缺乏關聯\n        </div>\n      </div>\n    ",
    "keywords": [
      "多模態融合",
      "早期融合",
      "後期融合",
      "跨注意力",
      "特徵拼接",
      "加權投票"
    ],
    "examRefs": [
      {
        "subj": "115_1_1",
        "qId": 11,
        "note": "智慧醫療融合病歷文字與 X 光影像之多模態融合架構抉擇"
      }
    ]
  },
  {
    "id": "l21_62",
    "category": "L211",
    "code": "L21103",
    "title": "大模型幻覺（Hallucination）成因剖析與工程消解四招",
    "summary": "LLM 本質是次詞機率統計採樣，缺乏真實定錨。工程消解策略：RAG 外掛定錨、限制系統 Prompt、調低 Temperature、自我反思驗證。",
    "confusing": [
      "幻覺分為事實性幻覺（與現實世界矛盾）與忠實性幻覺（與用戶提供之上下文矛盾）。",
      "單純依賴微調（Fine-tuning）無法徹底消滅幻覺，甚至可能加劇模型的過度自信；目前業界消解幻覺最行之有效的方法是 RAG（檢索增強生成）加上 Grounding 定錨。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.4rem; flex-wrap:wrap; margin:0.4rem 0;\">\n        <span style=\"background:#eff6ff; color:#1e40af; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">1. RAG 知識庫定錨</span>\n        <span style=\"background:#eff6ff; color:#1e40af; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">2. 嚴格系統提示詞 (無關拒答)</span>\n        <span style=\"background:#eff6ff; color:#1e40af; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">3. 低溫取樣 (Temperature 0~0.2)</span>\n        <span style=\"background:#eff6ff; color:#1e40af; padding:0.25rem 0.5rem; border-radius:4px; font-size:0.75rem;\">4. Self-Reflection 反思校驗</span>\n      </div>\n    ",
    "keywords": [
      "大模型幻覺",
      "Hallucination",
      "Grounding",
      "RAG定錨",
      "Temperature",
      "事實核查"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 14,
        "note": "企業客服生成式問答防範幻覺之工程架構設計"
      },
      {
        "subj": "115_1_1",
        "qId": 13,
        "note": "大語言模型產生看似合理卻完全捏造事實之應對策略"
      }
    ]
  },
  {
    "id": "l21_63",
    "category": "L211",
    "code": "L21103",
    "title": "進階提示工程思維範式：CoT、ToT 與 ReAct 框架",
    "summary": "CoT 激發線性多步推理；ToT 引導樹狀探索與回溯；ReAct 結合推理與工具調用（Reasoning + Action）。",
    "confusing": [
      "CoT（Chain-of-Thought 思維鏈）：加入「讓我們一步步思考（Let's think step by step）」，強制模型輸出中間推導，解決數學與邏輯推理錯誤。",
      "ToT（Tree-of-Thoughts 思維樹）：引入分支假設評估與回溯搜索（BFS/DFS），適合戰略規劃、路徑搜尋等複雜決策。",
      "ReAct 框架：AI Agent 的核心。Thought（思考）➔ Action（執行工具如查 Google）➔ Observation（觀察結果）➔ 循環直到得出解答。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>Zero-Shot CoT</strong>: \"請一步一步思考後回答\"<br>\n        • <strong>Few-Shot CoT</strong>: 提供帶有推理步驟的範例<br>\n        • <strong>ReAct</strong>: 思考 ➔ 呼叫工具 (API/搜尋) ➔ 觀察 ➔ 最終結論\n      </div>\n    ",
    "keywords": [
      "CoT",
      "思維鏈",
      "ToT",
      "思維樹",
      "ReAct",
      "AI Agent",
      "提示工程"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 16,
        "note": "提升生成式 AI 複雜邏輯推理準確率之提示詞架構"
      },
      {
        "subj": "115_1_1",
        "qId": 16,
        "note": "ReAct 框架在代理型 AI 工具呼叫之循環機制"
      }
    ]
  },
  {
    "id": "l21_64",
    "category": "L212",
    "code": "L21201",
    "title": "AI 導入三大可行性維度評估矩陣（三腳架模型）",
    "summary": "導入成功基石：業務可行性（ROI/痛點契合） + 技術可行性（算力/精確度/延遲） + 資料可行性（品質/數量/標註/合規）。",
    "confusing": [
      "常犯錯誤：技術可行但無業務價值（如投入數百萬訓練高精度模型，卻只能省下數千元人工作業費，ROI 為負）。",
      "資料可行性是最大隱形殺手：缺乏高品質標註數據或存在法規合規隱患（如醫療個人識別碼洩漏），導致專案中途夭折。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; gap:0.3rem; margin:0.4rem 0; font-size:0.75rem;\">\n        <span style=\"flex:1; background:#fef3c7; color:#b45309; padding:0.3rem; border-radius:4px; text-align:center;\">\n          <strong>業務可行性</strong><br>痛點、ROI、TCO\n        </span>\n        <span style=\"flex:1; background:#dbeafe; color:#1e40af; padding:0.3rem; border-radius:4px; text-align:center;\">\n          <strong>技術可行性</strong><br>成熟度、算力、延遲\n        </span>\n        <span style=\"flex:1; background:#dcfce7; color:#166534; padding:0.3rem; border-radius:4px; text-align:center;\">\n          <strong>資料可行性</strong><br>質量、標註量、隱私\n        </span>\n      </div>\n    ",
    "keywords": [
      "可行性評估",
      "業務可行性",
      "技術可行性",
      "資料可行性",
      "ROI",
      "TCO"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 17,
        "note": "企業評估導入生成式 AI 內部知識管理之可行性矩陣"
      },
      {
        "subj": "115_1_1",
        "qId": 18,
        "note": "AI 專案立項前期資料可行性評估三大指標"
      }
    ]
  },
  {
    "id": "l21_65",
    "category": "L212",
    "code": "L21201",
    "title": "企業 AI 成熟度五階段梯次演進模型",
    "summary": "評估企業組織準備度：探索期 ➔ 實驗期 (POC) ➔ 局部應用 ➔ 規模化運營 (MLOps) ➔ AI 驅動型組織。",
    "confusing": [
      "絕大多數傳統企業停留在「實驗期」或「局部應用」，無法跨越規模化門檻的關鍵在於缺乏統一的資料管線與 MLOps 治理體系。",
      "成熟度評估三大維度：數據成熟度（是否已有資料湖倉）、人才技術能力（跨領域協同）、組織文化（容錯度與高層支持）。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        ① 探索期 (零星試用) ➔ ② 實驗期 (單點POC) ➔ ③ 局部應用 (部門上線) ➔ ④ 規模運營 (MLOps自動化) ➔ ⑤ AI驅動 (戰略核心)\n      </div>\n    ",
    "keywords": [
      "AI成熟度",
      "數位轉型",
      "規模化落地",
      "MLOps",
      "組織文化",
      "準備度評估"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 18,
        "note": "評估組織文化與數據基盤對 AI 專案成功之影響"
      }
    ]
  },
  {
    "id": "l21_66",
    "category": "L212",
    "code": "L21202",
    "title": "POC 概念驗證成功法則：三不原則與量化退場機制",
    "summary": "POC 嚴控在 4~8 週內，以最低成本驗證關鍵假設。不追求完美功能、不過早優化效能、不投入重金硬體；設定明確止損點。",
    "confusing": [
      "POC 不是小型正式系統（Production），其唯一目標是「消除關鍵技術或業務不確定性（De-risk）」。",
      "成功標準必須事前白紙黑字寫明量化 KPI（如「辨識率達 85% 且推理延遲 < 1 秒」）；未達標準若無法修正，應果斷終止（Fail-Fast），避免陷入 POC 泥淖（POC Trap）。"
    ],
    "visualHtml": "\n      <div style=\"border-left:3px solid #dc2626; padding-left:0.5rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <strong>POC 三不原則：</strong><br>\n        1. <strong>不求全</strong>：只驗證核心痛點閉環，捨棄邊角功能<br>\n        2. <strong>不過早優化</strong>：先求跑通，性能調校留待工程階段<br>\n        3. <strong>不自建重資產</strong>：優先租用雲端資源或開源開箱即用方案\n      </div>\n    ",
    "keywords": [
      "POC",
      "概念驗證",
      "三不原則",
      "退場機制",
      "MVP",
      "POC泥淖"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 19,
        "note": "AI 專案概念驗證階段之範圍界定與退場評估標準"
      },
      {
        "subj": "115_1_1",
        "qId": 21,
        "note": "避免 POC 陷阱之敏捷時程控制與關鍵假設驗證"
      }
    ]
  },
  {
    "id": "l21_67",
    "category": "L212",
    "code": "L21202",
    "title": "AI 專案團隊六大關鍵角色職責與 RACI 矩陣",
    "summary": "專案發起人 (Sponsor) + 領域專家 (SME) + 資料工程師 (DE) + 資料科學家 (DS) + ML工程師 (MLE) + 專案經理 (PM)。",
    "confusing": [
      "資料科學家（DS）重在數學統計、演算法選型、特徵探索與建模；ML 工程師（MLE）重在工程化、API 封裝、模型服務化、延遲優化與 MLOps 監控部署。",
      "領域專家（SME）提供業務痛點、規則定義與資料標註驗收標準，若專案缺乏 SME 深度參與，往往造出「技術優秀卻無業務價值」的廢物模型。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div><strong>業務端：</strong><br>• Sponsor (出資定戰略)<br>• SME (業務定義與驗收)<br>• PM (時程範疇管理)</div>\n        <div><strong>技術端：</strong><br>• DE (管線清洗入庫)<br>• DS (建模特徵演算法)<br>• MLE (部署優化CI/CD)</div>\n      </div>\n    ",
    "keywords": [
      "RACI",
      "專案角色",
      "SME領域專家",
      "資料科學家",
      "ML工程師",
      "跨部門協同"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 20,
        "note": "AI 專案組織跨職能團隊角色職責分工與人員配置"
      },
      {
        "subj": "115_1_1",
        "qId": 20,
        "note": "領域專家 (SME) 在標註品質與業務驗收中之不可替代性"
      }
    ]
  },
  {
    "id": "l21_68",
    "category": "L212",
    "code": "L21202",
    "title": "WBS 工作分解結構在 AI 專案之五大階段配置",
    "summary": "需求界定 (10%) ➔ 資料準備與標註 (50%~70%) ➔ 模型開發驗證 (15%) ➔ 系統集成部署 (15%) ➔ 維運監控。",
    "confusing": [
      "AI 專案與傳統軟體開發最大的不同在於「資料準備」階段的不確定性極大，時程往往佔據整體 60% 以上。",
      "傳統瀑布式難以應對 AI 的實驗性質，建議採用「雙軌敏捷（Dual-Track Agile）」：探索軌（Data Science 實驗）與交付軌（Software Engineering 工程化）並行推進。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        <strong>典型 AI 專案工時分布：</strong><br>\n        [業務需求 10%] ➔ [<strong>資料收集清洗標註 60%</strong>] ➔ [模型演算法 15%] ➔ [集成部署上線 15%]\n      </div>\n    ",
    "keywords": [
      "WBS",
      "工作分解結構",
      "專案時程",
      "資料準備工時",
      "雙軌敏捷",
      "甘特圖"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 21,
        "note": "規劃機器學習專案時程之資源投入權重分配"
      }
    ]
  },
  {
    "id": "l21_69",
    "category": "L212",
    "code": "L21203",
    "title": "歐盟 AI 法案（EU AI Act）禁止級 AI 八大高危實踐清單",
    "summary": "不可接受風險（Unacceptable Risk）全面禁止：潛意識操控、弱點剝削、社會評分、公共即時生物識別、犯罪預測等。",
    "confusing": [
      "完全禁止實踐包括：① 認知行為操控損害自主權；② 剝削年齡/身心殘疾弱點；③ 社會信用評分（Social Scoring）；④ 執法用途犯罪預測（單純依個性畫像）；⑤ 無目標抓取臉部照片建立面部資料庫；⑥ 職場與學校之情緒識別（除醫療安全外）；⑦ 生物特徵類別分類推斷敏感屬性（性向/政治信仰）；⑧ 公共場所即時遠端生物識別（限反恐等少數極端例外）。",
      "違反禁止級實踐最高可處全球營業額 7% 或 3500 萬歐元鉅額罰款。"
    ],
    "visualHtml": "\n      <div style=\"background:#fef2f2; border:1px solid #fecaca; color:#991b1b; padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <strong>⛔ EU AI Act 嚴格禁止實踐：</strong><br>\n        社會信用評分、潛意識思想操控、弱點剝削、職場情緒識別、無差別臉部抓取資料庫、犯罪預測評分。\n      </div>\n    ",
    "keywords": [
      "EU AI Act",
      "禁止級AI",
      "社會評分",
      "潛意識操控",
      "情緒識別",
      "生物特徵識別"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 22,
        "note": "歐盟人工智慧法案中完全禁止使用之高風險應用範疇"
      },
      {
        "subj": "115_1_1",
        "qId": 23,
        "note": "人臉識別無差別採集與社會信用評分在法規上的定性"
      }
    ]
  },
  {
    "id": "l21_70",
    "category": "L212",
    "code": "L21203",
    "title": "演算法偏見三大源頭剖析：取樣偏誤、測量偏誤與歷史偏誤",
    "summary": "模型偏見根源：取樣偏誤（群體未按比例涵蓋） + 測量偏誤（代理特徵不公） + 歷史偏誤（如實學習社會既有歧視）。",
    "confusing": [
      "歷史偏誤（Historical Bias）：即使數據採集完美無瑕，但歷史數據本身反映了過去社會的性別或種族歧視（如過去主管多為男性，導致模型對女性求職者評分較低）。",
      "消解偏見四大法門：前處理（重取樣重加權）、處理中（加入公平性約束損失項）、後處理（針對不同群體動態調整決策閾值）。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.35rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <span style=\"flex:1; background:var(--bg-main); border:1px solid var(--border-color); padding:0.3rem; border-radius:4px;\">\n          <strong>取樣偏誤</strong><br>樣本分佈不均\n        </span>\n        <span style=\"flex:1; background:var(--bg-main); border:1px solid var(--border-color); padding:0.3rem; border-radius:4px;\">\n          <strong>測量偏誤</strong><br>特徵代標不當\n        </span>\n        <span style=\"flex:1; background:var(--bg-main); border:1px solid var(--border-color); padding:0.3rem; border-radius:4px;\">\n          <strong>歷史偏誤</strong><br>複製過往歧視\n        </span>\n      </div>\n    ",
    "keywords": [
      "演算法偏見",
      "公平性",
      "取樣偏誤",
      "歷史偏誤",
      "測量偏誤",
      "公平性正則化"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 23,
        "note": "招聘篩選 AI 模型因歷史訓練數據造成性別偏誤之成因與對策"
      }
    ]
  },
  {
    "id": "l21_71",
    "category": "L212",
    "code": "L21203",
    "title": "可解釋性 AI（XAI）：全域解釋（Global）vs 局部解釋（Local）",
    "summary": "黑箱模型白盒化。全域解釋看整體特徵權重；局部解釋用 SHAP（博弈論邊際貢獻）或 LIME（局部線性代理）拆解單一判決。",
    "confusing": [
      "全域可解釋性（Global Interpretability）：回答「模型整體最依賴哪些特徵做判斷？」，如隨機森林的 Feature Importance、全域偏依賴圖（PDP）。",
      "局部可解釋性（Local Interpretability）：回答「為什麼張三的房貸申請會被拒絕？」，SHAP 計算每個特徵數值對預測結果的正負邊際貢獻值，具備嚴謹數學公理證明。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>全域解釋 (Global)</strong>: 特徵重要度排序 (整體趨勢)<br>\n        • <strong>局部解釋 (Local)</strong>: <strong>SHAP / LIME</strong> (單一案由: 年齡+15分, 負債-40分)\n      </div>\n    ",
    "keywords": [
      "XAI",
      "可解釋性",
      "SHAP",
      "LIME",
      "全域解釋",
      "局部解釋",
      "黑箱模型"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 24,
        "note": "金融信用評分向客戶解釋貸款核准否決理由之 XAI 技術選型"
      },
      {
        "subj": "115_1_1",
        "qId": 24,
        "note": "SHAP 謝普利值在局部特徵邊際貢獻之理論優勢"
      }
    ]
  },
  {
    "id": "l21_72",
    "category": "L212",
    "code": "L21203",
    "title": "生成式 AI 版權爭議與企業四道安全合規防線",
    "summary": "防範未授權訓練侵權與輸出侵權。四道防線：資料授權查核、內容剽竊過濾器、系統日誌追蹤稽核、合成媒體強制標記浮水印。",
    "confusing": [
      "訓練數據合理使用（Fair Use）爭議持續發酵，企業採用專利/商業模型微調時，需確保訓練數據具備清晰商用授權。",
      "歐盟法案明確規定，凡由 AI 生成或操縱之文字、影像、影音（Deepfake），服務提供商負有『透明度揭露義務』，必須標明為 AI 生成內容。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; gap:0.4rem; flex-wrap:wrap; margin:0.4rem 0;\">\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.2rem 0.4rem; border-radius:4px; font-size:0.75rem;\">1. 訓練資料授權認證</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.2rem 0.4rem; border-radius:4px; font-size:0.75rem;\">2. 輸出文字相似度攔截</span>\n        <span style=\"background:var(--badge-blue-bg); color:var(--badge-blue-text); padding:0.2rem 0.4rem; border-radius:4px; font-size:0.75rem;\">3. Prompt 稽核日誌留存</span>\n        <span style=\"background:#fef3c7; color:#b45309; padding:0.2rem 0.4rem; border-radius:4px; font-size:0.75rem; font-weight:700;\">4. 隱形浮水印與透明揭露</span>\n      </div>\n    ",
    "keywords": [
      "GenAI版權",
      "資料合規",
      "透明度義務",
      "Deepfake標示",
      "著作權",
      "隱形浮水印"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 25,
        "note": "企業導入生成式 AI 行銷文案之版權風險與合規治理"
      }
    ]
  },
  {
    "id": "l21_73",
    "category": "L213",
    "code": "L21301",
    "title": "類別型特徵工程三大技法：One-Hot vs Target vs Entity Embedding",
    "summary": "低基數類別用 One-Hot；高基數類別（如郵遞區號）用 Target Encoding（須防洩漏）或神經網絡 Embedding 稠密降維。",
    "confusing": [
      "低基數類別（類別數 < 10）：One-Hot 簡單有效，但若基數成千上萬會導致維度災難與極度稀疏矩陣。",
      "目標編碼（Target Encoding）：用目標標籤的平均值替代類別，極度緊湊，但若不在交叉驗證摺內計算，會引發致命的『資料洩漏（Data Leakage）』！",
      "實體嵌入（Entity Embedding）：將高維離散類別轉成低維稠密向量，能主動捕捉類別間的隱性相似度（如衣服尺碼 S/M/L 的連續關係）。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>One-Hot</strong>: 低基數 (<10) ➔ 稀疏向量<br>\n        • <strong>Target Encoding</strong>: 高基數 ➔ 均值替換 (須防洩漏)<br>\n        • <strong>Embedding</strong>: 複雜類別 ➔ 稠密語意向量 (神經網路)\n      </div>\n    ",
    "keywords": [
      "特徵工程",
      "One-Hot",
      "Target Encoding",
      "Entity Embedding",
      "高基數類別",
      "資料洩漏"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 26,
        "note": "處理大量離散用戶 ID 與地理編碼時之特徵編碼選擇"
      }
    ]
  },
  {
    "id": "l21_74",
    "category": "L213",
    "code": "L21301",
    "title": "資料準備架構演進：ETL vs ELT 在大數據與 AI 之對決",
    "summary": "ETL 先清洗再載入（適合私密資料與地端倉儲）；ELT 先載入原始數據至雲端湖倉按需轉換（適合 AI 靈活探勘）。",
    "confusing": [
      "傳統 ETL：擷取（Extract）➔ 轉換（Transform）➔ 載入（Load）。在進入資料庫前已轉換，節省儲存空間但失去原始細節。",
      "現代 ELT：擷取（Extract）➔ 載入（Load）➔ 轉換（Transform）。原始數據全量入湖（Data Lake），由資料科學家透過雲端分散式 SQL/Spark 按需彈性轉換，保全原始數據資產。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"flex:1; background:var(--bg-card); padding:0.4rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>ETL (地端時代)</strong><br>E ➔ T(清洗) ➔ L(入庫)<br>優點: 隱私合規、省空間\n        </div>\n        <div style=\"flex:1; background:var(--bg-card); padding:0.4rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>ELT (雲原生湖倉)</strong><br>E ➔ L(先存) ➔ T(按需計算)<br>優點: 靈活、保全原始特徵\n        </div>\n      </div>\n    ",
    "keywords": [
      "ETL",
      "ELT",
      "資料湖",
      "資料倉儲",
      "資料管線",
      "特徵提取"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 27,
        "note": "企業建立機器學習資料前處理流水線之 ETL 與 ELT 架構考量"
      }
    ]
  },
  {
    "id": "l21_75",
    "category": "L213",
    "code": "L21301",
    "title": "特徵庫（Feature Store）核心價值：終結線上線下特徵偏差",
    "summary": "機器學習基礎設施支柱。提供統一定義、在線超低延遲讀取（Redis）與離線高吞吐批次訓練（Parquet），保證特徵一致性。",
    "confusing": [
      "線上線下偏差（Online-Offline Skew）：離線用 SQL 特徵計算公式，線上用 Java 寫了一套不同邏輯，導致線上預測性能崩跌。",
      "特徵庫透過時間旅行（Time Travel）功能，準確重現歷史時間戳記的特徵狀態，徹底杜絕特徵穿越（未來資訊洩漏）。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span><strong>離線特徵存儲</strong><br>(Hive/S3/BigQuery 供訓練)</span>\n        <span style=\"font-weight:700; color:var(--primary);\">← 特徵庫 Feature Store →<br>(統一特徵邏輯與版本)</span>\n        <span><strong>在線特徵存儲</strong><br>(Redis/DynamoDB 低延遲推論)</span>\n      </div>\n    ",
    "keywords": [
      "Feature Store",
      "特徵庫",
      "線上線下偏差",
      "時間旅行",
      "資料洩漏",
      "特徵一致性"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 28,
        "note": "解決訓練環境與推論環境特徵不一致之 MLOps 特徵庫架構"
      },
      {
        "subj": "115_1_1",
        "qId": 26,
        "note": "時間旅行 (Time-Travel) 在避免特徵穿越洩漏之機制"
      }
    ]
  },
  {
    "id": "l21_76",
    "category": "L213",
    "code": "L21302",
    "title": "模型推論模式三部曲：即時推論 vs 批次推論 vs 串流推論",
    "summary": "按延遲與觸發機制抉擇：即時推論（毫秒級 REST/gRPC） vs 批次推論（定時大規模低成本） vs 串流推論（事件流即時計算）。",
    "confusing": [
      "即時推論（Real-time / Online）：請求由用戶觸發，需在數十至數百毫秒內響應（如刷卡防盜刷、搜尋即時排序），算力與高可用成本最高。",
      "批次推論（Batch / Offline）：排程定時（如每天深夜）處理海量用戶，將結果預先計算好寫入資料庫（如隔日商品推薦清單），硬體利用率高成本低。",
      "串流推論（Streaming）：由數據流事件（Kafka / Flink）觸發，近即時計算（如 IoT 機台感測異常預警）。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.3rem; font-size:0.72rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>即時推論</strong><br>毫秒級 / REST<br>防盜刷、對話\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>批次推論</strong><br>小時級 / 排程<br>每日離線推薦\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>串流推論</strong><br>秒級 / Kafka<br>IoT即時告警\n        </div>\n      </div>\n    ",
    "keywords": [
      "推論模式",
      "即時推論",
      "批次推論",
      "串流推論",
      "RESTful",
      "Kafka",
      "延遲優化"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 29,
        "note": "電商首頁推薦系統採用批次推論預先計算之架構優勢"
      }
    ]
  },
  {
    "id": "l21_77",
    "category": "L213",
    "code": "L21302",
    "title": "生產環境部署四大發布策略：滾動、藍綠、金絲雀與 A/B 測試",
    "summary": "零停機平滑上線保證。滾動更新節省資源；藍綠部署瞬切回滾；金絲雀灰度引流驗證；A/B 測試對比業務 KPI。",
    "confusing": [
      "藍綠部署（Blue-Green）：配置兩套完全對等的獨立環境，切換路由即可瞬間生效，若有重大 Bug 可一秒切回舊版，但需付出雙倍伺服器成本。",
      "金絲雀發布（Canary）：先將 5% 的真實生產流量導引至新模型，監控其 Error Rate 與延遲無誤後逐步擴大至 20%、50%、100%，系統性風險最低。",
      "A/B 測試本質是業務實驗：將用戶群分流，比較的是點擊率（CTR）、轉換率等商業收益，而非純粹的系統穩定性測試。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>滾動發布</strong>: 逐台替換 (最省硬體)<br>\n        • <strong>藍綠部署</strong>: 雙倍環境一鍵瞬切 (回滾最速)<br>\n        • <strong>金絲雀</strong>: 5% ➔ 20% ➔ 100% (技術風險最小)<br>\n        • <strong>A/B 測試</strong>: 分流對比業務指標 (轉化率決策)\n      </div>\n    ",
    "keywords": [
      "發布策略",
      "藍綠部署",
      "金絲雀發布",
      "滾動更新",
      "A/B測試",
      "零停機上線"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 30,
        "note": "金融交易系統部署新模型時降低故障衝擊之發布模式選擇"
      },
      {
        "subj": "115_1_1",
        "qId": 28,
        "note": "金絲雀發布 (Canary) 在逐步引流監控模型延遲之實務應用"
      }
    ]
  },
  {
    "id": "l21_78",
    "category": "L213",
    "code": "L21302",
    "title": "模型輕量化四大神技：剪枝、量化、知識蒸餾與輕量架構",
    "summary": "邊緣端部署加速四本柱。剪枝去除零權重；量化壓縮數值位元（FP32➔INT8）；蒸餾將大模型知識轉移給小模型；輕量架構重設卷積。",
    "confusing": [
      "剪枝（Pruning）：結構化剪枝（直接剔除整個通道或層，能直接加速硬體運算）比非結構化剪枝（單純將個別權重歸零，需專用稀疏矩陣算力）更易落地。",
      "量化（Quantization）：後訓練量化（PTQ，無需重新訓練，簡單快） vs 量化感知訓練（QAT，在訓練中模擬量化誤差，精度幾乎無損）。",
      "知識蒸餾（Knowledge Distillation）：利用 Teacher 模型輸出的軟標籤（Soft Targets，包含不同錯誤選項間的相對機率分佈），指導輕巧的 Student 模型學習抽象知識。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>剪枝 (Pruning)</strong><br>砍除冗餘權重/通道\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>量化 (Quantization)</strong><br>FP32 ➔ INT8/INT4 減半\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>知識蒸餾 (Distill)</strong><br>Teacher 傳承給 Student\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>輕量架構 (Design)</strong><br>MobileNet / ShuffleNet\n        </div>\n      </div>\n    ",
    "keywords": [
      "模型輕量化",
      "剪枝",
      "量化",
      "PTQ",
      "QAT",
      "知識蒸餾",
      "軟標籤"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 31,
        "note": "物聯網邊緣端設備部署深度學習模型之輕量化技術組合"
      },
      {
        "subj": "115_1_1",
        "qId": 30,
        "note": "知識蒸餾中教師模型軟標籤 (Soft Labels) 的傳遞價值"
      }
    ]
  },
  {
    "id": "l21_79",
    "category": "L213",
    "code": "L21302",
    "title": "跨框架模型通用格式與推論加速引擎：ONNX 與 TensorRT",
    "summary": "消除訓練框架與部署環境的隔閡。ONNX 作為跨平台中介表示；NVIDIA TensorRT 進行算子融合與極致硬體編譯優化。",
    "confusing": [
      "ONNX（Open Neural Network Exchange）：將 PyTorch、TensorFlow 模型轉為統一的計算圖規格，實現「一次訓練，隨處推論」。",
      "TensorRT：專門針對 NVIDIA GPU 硬體的推論編譯器。透過算子融合（Vertical/Horizontal Layer Fusion，如將 Conv + Bias + ReLU 合併為單一 Kernel）、動態張量記憶體分配與 INT8 校準，能大幅將延遲降低 3~5 倍。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>PyTorch / TF<br>(訓練框架)</span>\n        <span>➔ <strong>ONNX 格式</strong><br>(中間表示圖)</span>\n        <span>➔ <strong>TensorRT / OpenVINO</strong><br>(硬體極限加速推論)</span>\n      </div>\n    ",
    "keywords": [
      "ONNX",
      "TensorRT",
      "OpenVINO",
      "算子融合",
      "推論引擎",
      "跨平台部署"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 33,
        "note": "生產環境部署 PyTorch 模型時轉換為 ONNX 與 TensorRT 加速"
      }
    ]
  },
  {
    "id": "l21_80",
    "category": "L213",
    "code": "L21302",
    "title": "MLOps 三大成熟度等級演進階梯（Level 0 ➔ Level 1 ➔ Level 2）",
    "summary": "Google 定義之 MLOps 等級：Level 0 手動流程 ➔ Level 1 自動化模型持續訓練 (CT) ➔ Level 2 完整 CI/CD/CT 自動化流水線。",
    "confusing": [
      "Level 0（手動）：資料科學家手動在 Jupyter 運行，手動導出模型權重交給工程團隊包裝上線，缺乏版本追蹤與自動監控，更新頻率以月/季計。",
      "Level 1（持續訓練 CT）：當生產數據發生漂移或定期排程時，觸發自動化資料前處理與模型重訓管線，但程式碼發布仍多為手動。",
      "Level 2（全自動 MLOps）：具備完整的 CI/CD 流水線，程式碼提交自動觸發單元測試與管線建置，模型自動驗證達標後自動灰度發布上線。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>Level 0</strong>: 手動腳本、手動交付模型 (效率低易出錯)<br>\n        • <strong>Level 1 (CT)</strong>: <strong>自動化模型重訓管線</strong> (資料觸發再訓練)<br>\n        • <strong>Level 2 (CI/CD/CT)</strong>: 全自動化管線發布 (幾小時內快速迭代)\n      </div>\n    ",
    "keywords": [
      "MLOps",
      "持續訓練",
      "CT",
      "CI/CD",
      "模型生命週期",
      "自動化流水線"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 34,
        "note": "企業評估導入 MLOps 之成熟度等級與持續訓練 (CT) 概念"
      }
    ]
  },
  {
    "id": "l21_81",
    "category": "L213",
    "code": "L21302",
    "title": "線上模型衰退兩大元凶：資料漂移（Data Drift）vs 概念漂移（Concept Drift）",
    "summary": "模型性能隨時間衰退的根本原因。資料漂移是輸入特徵分佈 $P(X)$ 改變；概念漂移是特徵與目標之對應關係 $P(Y|X)$ 改變。",
    "confusing": [
      "資料漂移（協變量轉移 Covariate Shift）：例如疫情爆發導致網購人群年齡層擴大到老年人，輸入特徵 $P(X)$ 變了，但正常交易判定邏輯沒變。",
      "概念漂移（Concept Drift）：輸入特徵分佈可能沒變，但真實世界規則變了（如詐欺犯掌握了反制規則，過去被判定為安全的消費行為現在成了詐欺交易），最佳決策邊界已被打破，必須重新標註並重訓模型！"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>資料漂移 (Data Drift)</strong><br>$P(X)$ 改變，特徵分佈位移<br>(如: 買家年齡層整體老化)\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>概念漂移 (Concept Drift)</strong><br>$P(Y|X)$ 改變，底層規則變更<br>(如: 詐欺手法翻新)\n        </div>\n      </div>\n    ",
    "keywords": [
      "資料漂移",
      "概念漂移",
      "Data Drift",
      "Concept Drift",
      "協變量轉移",
      "決策邊界衰退"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 35,
        "note": "區分生產環境中特徵分佈改變與真實目標關聯改變之漂移形態"
      },
      {
        "subj": "115_1_1",
        "qId": 32,
        "note": "概念漂移發生時必須重新標註資料並更新模型之應對策"
      }
    ]
  },
  {
    "id": "l21_82",
    "category": "L213",
    "code": "L21302",
    "title": "漂移檢測兩大統計利器：群體穩定度指標（PSI）與 KS 檢定",
    "summary": "量化線上特徵或預測機率分佈偏離基準之指標。PSI < 0.1 穩定；0.1~0.25 輕微變化；> 0.25 顯著漂移必須警報。",
    "confusing": [
      "PSI（Population Stability Index）計算公式：$\\text{PSI} = \\sum (A_i - E_i) \\times \\ln(A_i / E_i)$，其中 $A_i$ 為當前實際佔比，$E_i$ 為基線預期佔比。",
      "KS 檢定（Kolmogorov-Smirnov Test）：檢驗兩個連續變數累積分布函數（CDF）的最大垂直距離，若 $p\\text{-value} < 0.05$ 則拒絕同分佈假設，證明特徵顯著漂移。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        <strong>PSI 經驗判別門檻（金融與 MLOps 黃金準則）：</strong><br>\n        • $\\text{PSI} < 0.1$：分佈極度穩定，無須介入<br>\n        • $0.1 \\le \\text{PSI} \\le 0.25$：存在輕度漂移，建議密切監控<br>\n        • $\\text{PSI} > 0.25$：<strong>嚴重漂移！強制觸發模型重新訓練</strong>\n      </div>\n    ",
    "keywords": [
      "PSI",
      "群體穩定度指標",
      "KS檢定",
      "分佈漂移檢測",
      "連續特徵檢驗",
      "自動重訓告警"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 36,
        "note": "金融風控評分卡使用 PSI 監控客戶族群漂移與門檻值判別"
      }
    ]
  },
  {
    "id": "l21_83",
    "category": "L213",
    "code": "L21302",
    "title": "高可用 AI 系統彈性架構：模型降級（Fallback）與熔斷機制",
    "summary": "保障核心業務永不停機。當 AI 服務延遲飆高、GPU 崩潰或超載時，自動熔斷並降級至規則引擎、快取或熱門列表。",
    "confusing": [
      "熔斷器（Circuit Breaker）三大狀態：閉合（Closed，正常向 AI 模型發請求） ➔ 斷開（Open，錯誤率達門檻直接熔斷，全量轉入降級邏輯） ➔ 半開（Half-Open，嘗試放行少量請求測試模型是否恢復）。",
      "降級策略（Fallback）：例如電商推薦模型掛掉時，立即自動降級為『全站熱門銷售排行榜（Rule-based）』；影像辨識超時時，自動降級為『排隊進入後台人工作業佇列』。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span style=\"color:#166534; font-weight:700;\">閉合 (正常請求)</span>\n        <span>➔ 異常超標 ➔</span>\n        <span style=\"color:#991b1b; font-weight:700;\">斷開 (觸發熔斷)</span>\n        <span>➔ 降級為規則快取</span>\n      </div>\n    ",
    "keywords": [
      "模型降級",
      "Fallback",
      "熔斷機制",
      "Circuit Breaker",
      "高可用架構",
      "服務容錯"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 37,
        "note": "高並發促銷活動中推薦模型服務過載之降級應對策略"
      }
    ]
  },
  {
    "id": "l21_84",
    "category": "L213",
    "code": "L21302",
    "title": "企業核心系統深度整合：ERP、CRM、MES 與資料管線閉環",
    "summary": "AI 必須與業務系統雙向集成。MES 實現機台自動停機報警；ERP 動態調配採購庫存；CRM 自動觸發行銷旅程。",
    "confusing": [
      "孤島式 AI（Siloed AI）只是在儀表板上看預測數字，無法產生自動化業務價值；整合式 AI 將推論結果透過 API / 訊息佇列回寫業務系統。",
      "解耦設計：在 AI 服務與 ERP/CRM 間務必導入非同步訊息佇列（如 Kafka / RabbitMQ），避免業務系統尖峰流量直接沖垮 AI 推論節點。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>製造業 (MES)</strong>: 影像瑕疵偵測 ➔ 即時連動機台停機與產線分流<br>\n        • <strong>零售業 (ERP)</strong>: 銷售需求預測 ➔ 自動生成採購補貨訂單<br>\n        • <strong>金融業 (CRM)</strong>: 客戶流失預警 ➔ 自動指派理財專員外呼關懷\n      </div>\n    ",
    "keywords": [
      "系統集成",
      "ERP",
      "CRM",
      "MES",
      "資料管線",
      "訊息佇列",
      "業務自動化"
    ],
    "examRefs": [
      {
        "subj": "114_2_1",
        "qId": 38,
        "note": "智慧製造中瑕疵檢測 AI 模型與 MES 製造執行系統整合模式"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L21_CHEATSHEET_DATA;
}
