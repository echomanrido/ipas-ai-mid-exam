// AI 核心考點速記資料庫 - 初級 科目二（L12 生成式 AI 應用與規劃）
const L12_CHEATSHEET_DATA = [
  // ==========================================
  // L121: 生成式 AI 應用領域與工具使用 (工具、Prompt、Token、RAG、Agent)
  // ==========================================
  {
    id: "l12_01",
    category: "L121",
    code: "L121",
    title: "生成式 AI（Generative AI）核心定義",
    summary: "利用深度學習模型學習海量資料的潛在分佈，進而「創造」出全新的文字、影像、音訊、程式碼或視訊內容，而非僅做既有標籤的判別分類。",
    confusing: [
      "鑑別式 AI 回答「是非題/選擇題」（如這張圖是不是貓）；生成式 AI 回答「問答/申論/創作題」（如請畫出一隻太空中的貓）。"
    ],
    keywords: ["生成式AI", "Generative AI", "內容創造", "鑑別式對比"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 5, note: "生成式 AI 理解意圖並自動產出文字摘要" },
      { subj: "primary_115_1_2", qId: 10, note: "生成式 AI 工具產出概念圖與設計" }
    ]
  },
  {
    id: "l12_02",
    category: "L121",
    code: "L121",
    title: "Token 機制與 API 計費法則",
    summary: "Token 是大語言模型處理文字的最小基本單位（1 個英文單詞約 1~1.3 Token，中文約 1~2 字為 1 Token）。商業 API 通常將「輸入 Token（Prompt）」與「輸出 Token（Completion）」分開計費，且輸出價格通常遠高於輸入！",
    confusing: [
      "Token 不是等於字元數或單詞數！在撰寫長篇提示詞或設計多輪對話時，上下文視窗（Context Window）會累積前面的所有對話紀錄，導致每一輪請求消耗的輸入 Token 呈倍數累積！"
    ],
    keywords: ["Token", "API計費", "輸入Token", "輸出Token", "Context Window"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 4, note: "Token 計算與 API 成本影響" }
    ]
  },
  {
    id: "l12_03",
    category: "L121",
    code: "L121",
    title: "提示詞工程四大黃金元素（RTFC 框架）",
    summary: "① Role（角色設定: 如專業法務律師）② Context（背景情境: 企業目前面臨的挑戰）③ Instruction/Task（明確指令: 找出三條合約風險）④ Constraint/Format（限制與格式: 繁體中文、以 Markdown 表格列出、禁止編造）。",
    confusing: [
      "提示詞越籠統，模型產生的隨機性與幻覺機率越高！具體的角色設定能激活模型神經網路中相關專業領域的權重區塊。"
    ],
    keywords: ["提示詞工程", "Prompt", "RTFC", "角色設定", "輸出格式限制"],
    examRefs: [
      { subj: "primary_115_3_2", qId: 8, note: "提示詞同時加入角色設定、格式與語氣限制" }
    ]
  },
  {
    id: "l12_04",
    category: "L121",
    code: "L121",
    title: "Few-shot Prompting（少樣本提示）",
    summary: "在給予模型任務時，先附上 2~3 個「輸入 ➔ 輸出」的標準示範範例，引導模型精準模仿該格式、邏輯或分類標準。",
    confusing: [
      "Zero-shot 是直接發問不給示範；Few-shot 能大幅提升罕見分類任務、自訂 JSON 結構提取與專業領域術語的一致性。"
    ],
    keywords: ["Few-shot", "少樣本提示", "Zero-shot", "範例引導", "格式對齊"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 9, note: "設計少量樣本提示(Few-shot)進行文字分類" }
    ]
  },
  {
    id: "l12_05",
    category: "L121",
    code: "L121",
    title: "提示鏈（Prompt Chaining）技巧",
    summary: "將一個複雜龐大的長任務拆解為多個相互銜接的單一提示詞模組。第一步的生成結果經校驗後，作為第二步提示詞的輸入，步步推進完成複雜任務。",
    confusing: [
      "單一提示詞塞入過多互斥要求容易導致模型注意力分散並漏掉指令；透過 Prompt Chaining 可確保每個子步驟皆受嚴格控制與條件檢驗。"
    ],
    visualHtml: `
      <div style="display:flex; align-items:center; justify-content:center; gap:0.35rem; flex-wrap:wrap; font-size:0.75rem; margin:0.5rem 0;">
        <span style="background:var(--bg-main); border:1px solid var(--border-color); padding:0.25rem 0.5rem; border-radius:4px;">提示詞 1 (抽取關鍵字)</span>
        <span>➔</span>
        <span style="background:var(--bg-main); border:1px solid var(--border-color); padding:0.25rem 0.5rem; border-radius:4px;">提示詞 2 (檢索核對)</span>
        <span>➔</span>
        <span style="background:var(--bg-main); border:1px solid var(--border-color); padding:0.25rem 0.5rem; border-radius:4px;">提示詞 3 (草擬回覆)</span>
      </div>
    `,
    keywords: ["提示鏈", "Prompt Chaining", "步驟拆解", "複雜任務鏈結"],
    examRefs: [
      { subj: "primary_115_3_2", qId: 7, note: "訂單異常處理採用提示鏈技術逐步分析" }
    ]
  },
  {
    id: "l12_06",
    category: "L121",
    code: "L121",
    title: "RAG（檢索增強生成）核心架構",
    summary: "將企業內部最新知識庫切割為文本塊並轉化為向量（Vector），使用者提問時先至向量資料庫進行語意檢索，取出前 K 篇最相關文檔注入 Prompt 供 LLM 參考作答。",
    confusing: [
      "RAG 不需要重新訓練或修改底層大模型的任何權重！它的核心價值是：低成本引入私有資料、零時差更新內部政策、附帶引用來源可查核、大幅抑制幻覺。"
    ],
    keywords: ["RAG", "檢索增強生成", "向量資料庫", "抑制幻覺", "零時差更新"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 10, note: "建置檢索增強生成(RAG)架構" }
    ]
  },
  {
    id: "l12_07",
    category: "L121",
    code: "L121",
    title: "RAG vs 微調 (Fine-tuning) 決策矩陣",
    summary: "① 選 RAG：資料頻繁變動（如每日商品庫存）、需明確附帶參考來源以供稽核、預算與算力有限；② 選 Fine-tuning：需要模型深度內化特定的專業語音風格、固定輸出格式、或訓練小模型以求邊緣端低延遲部署。",
    confusing: [
      "在 GPU 資源極度受限且內部知識日新月異的情況下，企圖透過全參數微調更新知識是不切實際且成本極高的！首選 RAG 搭配 LoRA 輕量微調。"
    ],
    keywords: ["RAG vs 微調", "Fine-tuning", "LoRA", "決策矩陣", "算力限制"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 2, note: "GPU 資源受限時企業專屬知識更新評估" }
    ]
  },
  {
    id: "l12_08",
    category: "L121",
    code: "L121",
    title: "視訊生成與 C2PA 數位出處證明",
    summary: "視訊生成（如 OpenAI Sora、Runway）：可根據文字描述生成高畫質動態連續影片。為防止假訊息詐騙與深度偽造（Deepfake），業界導入 C2PA 規範（內容真實性聯盟），在檔案中寫入防篡改的數位密碼學簽章與出處證明元數據。",
    confusing: [
      "單純的可見浮水印很容易被裁切或用 AI 消除抹除；C2PA 是寫入檔案中繼資料的密碼學防偽簽章，能記錄內容從創作者、編輯到發布的全鏈條軌跡。"
    ],
    keywords: ["Sora", "視訊生成", "C2PA", "內容真實性", "出處證明", "Deepfake"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 6, note: "Sora 影片出處證明與反欺騙防護機制" }
    ]
  },
  {
    id: "l12_09",
    category: "L121",
    code: "L121",
    title: "AI Agent（智慧代理人）四核心運作機制",
    summary: "AI Agent = 大腦（LLM 大模型推理）+ 規劃（Planning, 任務拆解）+ 記憶（Memory, 短期上下文/長期向量資料庫）+ 工具使用（Tools, 呼叫外部 API、搜尋引擎、資料庫查詢）。",
    confusing: [
      "普通聊天機器人只能被動問答；AI Agent 能主動擬定執行計畫、調用各類軟體工具執行真實動作，並根據執行結果反覆自我反思修正！"
    ],
    keywords: ["AI Agent", "智慧代理人", "規劃", "記憶", "工具調用", "自主執行"],
    examRefs: [
      { subj: "primary_115_3_2", qId: 10, note: "AI Agent 處理退款自動建立單次任務記憶" }
    ]
  },
  {
    id: "l12_10",
    category: "L121",
    code: "L121",
    title: "多代理人協同（Multi-Agent）與死循環防範",
    summary: "透過多個各司其職的 Agent（如研究員、程式設計師、代碼審查員、測試工程師）彼此分工協同完成專案。若缺乏中央協調者或結束條件，代理人間可能陷入無限相互指責或循環對話。",
    confusing: [
      "多代理人架構必須設定「最大反覆輪數限制（Max Iterations）」與「中央編排者（Orchestrator）」，以防陷入資源耗盡的對話死循環。"
    ],
    keywords: ["Multi-Agent", "多代理人協同", "死循環防範", "Orchestrator", "最大輪數"],
    examRefs: [
      { subj: "primary_115_3_2", qId: 9, note: "多個 AI Agent 協同運作產生死循環的處置" }
    ]
  },

  // ==========================================
  // L122: 生成式 AI 導入評估規劃 (No Code/Low Code、Webhook、資安隱私、影子IT)
  // ==========================================
  {
    id: "l12_11",
    category: "L122",
    code: "L122",
    title: "No Code / Low Code 與生成式 AI 融合效益",
    summary: "現代 Low-Code 平台（如 Dify、Coze、Make）整合生成式 AI：業務人員只需拖拉圖形節點或使用自然語言 Prompt，即可組裝出包含 RAG、API 串接、自動發信的完整 AI 工作流。",
    confusing: [
      "Low-Code 不等於完全不需要寫代碼！它允許在節點中嵌入少量 Python/JavaScript 處理自訂字串或資料格式，兼顧敏捷速度與客製彈性。"
    ],
    keywords: ["Low-Code", "No-Code", "Dify", "圖形節點", "AI工作流", "融合效益"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 3, note: "透過 Low-Code 平台建置可視化營運儀表板" },
      { subj: "primary_115_2_2", qId: 3, note: "人資部使用 Dify 平台建置面試輔助機器人" }
    ]
  },
  {
    id: "l12_12",
    category: "L122",
    code: "L122",
    title: "事件驅動核心機制：Webhook",
    summary: "Webhook 是系統間由「事件觸發（Event-driven）」的主動通知機制。當特定事件發生時（如收到客戶退款申請、表單提交），來源伺服器立即向目標系統的 URL 發送 HTTP POST 請求推送資料。",
    confusing: [
      "傳統輪詢（Polling）是定時一直問「有沒有新資料？」（浪費頻寬且有延遲）；Webhook 是「一有事情立即通知你」，即時性高且大幅節省伺服器資源！"
    ],
    keywords: ["Webhook", "事件驅動", "HTTP POST", "即時通知", "對比Polling"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 8, note: "自動化工作流中 Webhook 事件觸發機制" }
    ]
  },
  {
    id: "l12_13",
    category: "L122",
    code: "L122",
    title: "No Code / Low Code 平台致命適用邊界",
    summary: "① 毫秒級高頻即時交易（< 50ms 延遲）➔ 絕對不可用（平台封裝層過厚）；② 複雜強約束數學排程最佳化 ➔ 不可用；③ 海量高併發底層效能調校 ➔ 不可用。首選適用於：內部審批流、表單數位化、初階客服問答、行銷文案生成。",
    confusing: [
      "看到「股票高頻交易、自駕車路徑即時控制、晶圓廠精密排程」等場景，若題目詢問是否適合用 No-Code/Low-Code，答案必定為「不適合」！"
    ],
    keywords: ["適用邊界", "高頻交易不適用", "強約束排程不適用", "平台封裝延遲"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 10, note: "50毫秒高頻交易工具不適合封閉型平台" },
      { subj: "primary_115_3_2", qId: 6, note: "精密製造排程系統不宜單靠 Low-Code 平台" }
    ]
  },
  {
    id: "l12_14",
    category: "L122",
    code: "L122",
    title: "供應商鎖定（Vendor Lock-in）與遷移成本",
    summary: "使用特定封閉型 No-Code 平台多年後，業務邏輯、客戶資料與流程深度綁定在該平台專有格式中。當供應商漲價、服務終止或資安疑慮時，企業難以平滑匯出程式碼遷移至其他平台。",
    confusing: [
      "評估導入 Low-Code 平台時，必須優先檢查該平台是否支援：標準 API 匯出、標準關聯式資料庫備份、或能導出標準開源代碼（如 Node.js/Python）。"
    ],
    keywords: ["Vendor Lock-in", "供應商鎖定", "資料遷移", "封閉平台風險"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 5, note: "使用封閉式 No-Code 平台遭遇供應商鎖定困境" },
      { subj: "primary_115_3_2", qId: 4, note: "初創電商平台後期遭遇架構瓶頸與重構" }
    ]
  },
  {
    id: "l12_15",
    category: "L122",
    code: "L122",
    title: "企業導入新危機：影子 IT（Shadow IT）",
    summary: "因為 No-Code/AI 工具極易上手，各業務部門（如行銷、財務）在未告知並未獲得資訊部門（IT）安全審核的情況下，私自訂閱第三方雲端 AI 服務建置系統。",
    confusing: [
      "影子 IT 雖然短期提升部門效率，但會帶來毀滅性的安全災難：機密資料外洩、權限未受管控、缺乏審計日誌、法規稽核違規。應建立全公司統一的 AI 採購標準與中央管控平台。"
    ],
    keywords: ["影子IT", "Shadow IT", "未授權工具", "資安漏洞", "中央治理"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 7, note: "各部門自行建立應用衍生影子 IT 治理挑戰" },
      { subj: "primary_115_2_2", qId: 7, note: "部門快速開發應用帶來的資安審計失控" }
    ]
  },
  {
    id: "l12_16",
    category: "L122",
    code: "L122",
    title: "企業資料外洩風險與 Zero Data Retention 原則",
    summary: "員工若將內部未公開財報、核心研發專利、客戶個資輸入到一般免費版公用 AI 工具中，該數據極可能被服務商留存並用於下一代公用大模型的訓練語料中，造成不可挽回的洩密！",
    confusing: [
      "企業商務版解決方案：簽署 BAA/DPA 協議，開啟「Zero Data Retention（零數據保留）」原則，要求供應商不得將客戶 API 呼叫數據用於模型二次訓練。"
    ],
    keywords: ["資料外洩", "Zero Data Retention", "訓練數據污染", "企業隱私協議"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 3, note: "面試機器人處理敏感求職者履歷的個資保護" }
    ]
  },
  {
    id: "l12_17",
    category: "L122",
    code: "L122",
    title: "生成式 AI 的智財權與侵權爭議",
    summary: "① 訓練端侵權風險：未經授權爬取受版權保護的著作、受著作權保護的程式碼或付費圖庫；② 生成端爭議：純 AI 生成之作品因缺乏「人類原創性（Human Authorship）」，在多數國家法律上無法享有著作權保護！",
    confusing: [
      "若使用開源程式碼大模型輔助開發，必須特別注意模型是否會直接背誦產出帶有 GPL 嚴格傳染性開源授權的代碼片段，進而威脅企業專有商業軟體著作權。"
    ],
    keywords: ["智財權", "著作權", "侵權爭議", "人類原創性", "GPL傳染性"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 6, note: "影片真實性與創作者智財權益維護" }
    ]
  },
  {
    id: "l12_18",
    category: "L122",
    code: "L122",
    title: "多雲架構（Multi-Cloud）與資料在地化主權",
    summary: "跨國企業為滿足不同國家法規（如歐盟 GDPR 要求歐盟公民資料必須儲存於歐盟境內伺服器），必須採取多雲或混合雲部署架構，避免單一雲端供應商中斷服務或觸犯跨國資料主權法規。",
    confusing: [
      "合規不僅是技術問題，更是法律主權問題！涉及金融交易、醫療病歷與政府資料時，首選支援在地資料中心（Local Data Residency）的雲端解決方案。"
    ],
    keywords: ["多雲架構", "Multi-Cloud", "資料主權", "GDPR", "在地化部署"],
    examRefs: [
      { subj: "primary_115_3_2", qId: 1, note: "歐盟客戶要求在地部署促使多雲架構導入" }
    ]
  },
  {
    id: "l12_19",
    category: "L122",
    code: "L122",
    title: "邊緣運算（Edge Computing）結合 Low-Code 的產線應用",
    summary: "在智慧工廠產線端，透過邊緣工控機或邊緣微型晶片部署輕量 AI 模型，搭配 Low-Code 視覺化排程，實現毫秒級不良品自動剔除，且能保證在斷網離線環境下依然持續生產運作！",
    confusing: [
      "若將每一幀工業相機的高畫質影像都傳送回遠端雲端處理，不但會吃滿工廠網路頻寬，且網路抖動（Jitter）會導致即時剔除失敗。"
    ],
    keywords: ["邊緣運算", "Edge Computing", "離線運作", "智慧製造", "即時檢驗"],
    examRefs: [
      { subj: "primary_115_1_2", qId: 8, note: "製造設備端建置邊緣運算搭配 No-Code 架構" }
    ]
  },
  {
    id: "l12_20",
    category: "L122",
    code: "L122",
    title: "紙本表單數位化與工作流自動化（Workflow Automation）",
    summary: "製造業或傳統企業將巡檢表單、報銷單據透過 OCR + 生成式 AI 進行文字理解與欄位提取，再透過 Low-Code 平台建立自動通報、異常簽核與主管核准流程，大幅縮短紙本跑流程時間。",
    confusing: [
      "單純的 OCR 只能轉文字，生成式 AI 能進一步理解「欄位語意（如發票號碼、稅額、未稅金額）」並自動填入 ERP 系統對應欄位中。"
    ],
    keywords: ["表單數位化", "OCR", "工作流自動化", "異常通報", "流程簽核"],
    examRefs: [
      { subj: "primary_115_2_2", qId: 1, note: "會計師事務所透過工具自動處理各類報銷單據" },
      { subj: "primary_115_3_2", qId: 2, note: "紙本巡檢表單數位化與自動簽核通報流程" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L12_CHEATSHEET_DATA;
}
