// iPAS AI 應用規劃師（中級）官方學習指引核心精華速記資料庫
// 來源依據：學習指指/Markdown_Files/（科目1、科目2、科目3及官方勘誤表）

const STUDY_GUIDE_DATA = [
  // =========================================================================
  // 【官方勘誤特輯】學習指引勘誤表核心考點 (Errata Key Points)
  // =========================================================================
  {
    id: "sg_err_01",
    subject: "errata",
    chapter: "官方勘誤表",
    section: "科目一：3.1 NLP 詞頻計算",
    code: "L21101",
    isErrata: true,
    title: "【勘誤重點】TF-IDF 之 IDF 算式嚴格修正",
    summary: "官方勘誤表明確修正：在文件總數 $D=1000$、包含該詞的文件數為 $10$ 時，逆文件頻率 IDF 應精準計算為 $\\log(1000/10) = \\log(100) = 2$（以 10 為底之對數）。原教材誤印為 $\\approx 2$，考試時請直接以等號精確計算整數結果！",
    confusing: [
      "TF (Term Frequency) 詞頻：單一詞在特定文件中出現的次數佔該文件總詞數的比例（局部特徵）。",
      "IDF (Inverse Document Frequency) 逆文件頻率：衡量該詞的普遍度與鑑別力，$\\text{IDF}(t, D) = \\log(\\frac{|D|}{|\\{d \\in D : t \\in d\\}|})$。若詞在每篇文件都出現（如常見停用詞），IDF 會趨近於 0；若極為罕見，IDF 極高。",
      "TF-IDF = $\\text{TF} \\times \\text{IDF}$：數值越高代表該詞對該文件具備高鑑別度。"
    ],
    formulas: "\\text{TF}(t, d) = \\frac{f_{t,d}}{\\sum_{t' \\in d} f_{t',d}}, \\quad \\text{IDF}(t, D) = \\log_{10}\\left(\\frac{N}{n_t}\\right) = \\log_{10}(100) = 2",
    keywords: ["TF-IDF", "IDF算式", "勘誤修正", "詞頻", "逆文件頻率", "停用詞"],
    examRefs: [
      { subj: "114_2_1", qId: 5, note: "NLP 文字特徵提取與 TF-IDF 計算原則" }
    ]
  },
  {
    id: "sg_err_02",
    subject: "errata",
    chapter: "官方勘誤表",
    section: "科目三：5.3 模型評估與驗證",
    code: "L23303",
    isErrata: true,
    title: "【勘誤重點】召回率（Recall）官方公式嚴格修正",
    summary: "官方學習指引勘誤表第 7 頁緊急更正：召回率（Recall，又稱敏感度 Sensitivity）之分母必須為『所有真實為正例的樣本數』，即 $\\text{Recall} = \\frac{TP}{TP + FN}$。原教材誤植為 $TP + FP$（那是 Precision），請考生務必牢記正確定義！",
    confusing: [
      "Precision（精確率 / 查準率）：$\\frac{TP}{TP + FP}$，分母是『預測為正例的所有樣本』，代表預測陽性中真正為陽性的比例。",
      "Recall（召回率 / 查全率）：$\\frac{TP}{TP + FN}$，分母是『真實為正例的所有樣本』，代表真實陽性中有多少被抓出來。",
      "醫療診斷、詐欺偵測、地震警報特別看重 Recall（寧可誤報，不可漏抓，FN 的代價極高）。"
    ],
    formulas: "\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}, \\quad F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}",
    visualHtml: `
      <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:8px; padding:0.75rem; margin:0.5rem 0; font-size:0.85rem;">
        <table style="width:100%; text-align:center; border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--border-color); background:var(--bg-main);">
            <th></th><th>預測 Positive</th><th>預測 Negative</th>
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td><b>真實 Positive</b></td><td style="color:#059669; font-weight:700;">TP (真陽性)</td><td style="color:#dc2626; font-weight:700;">FN (偽陰性-漏報)</td>
          </tr>
          <tr>
            <td><b>真實 Negative</b></td><td style="color:#d97706; font-weight:700;">FP (偽陽性-誤報)</td><td style="color:#2563eb; font-weight:700;">TN (真陰性)</td>
          </tr>
        </table>
      </div>
    `,
    keywords: ["Recall", "召回率", "Precision", "混淆矩陣", "勘誤修正", "F1-Score"],
    examRefs: [
      { subj: "114_2_3", qId: 21, note: "混淆矩陣指標定義與不平衡資料評估" }
    ]
  },
  {
    id: "sg_err_03",
    subject: "errata",
    chapter: "官方勘誤表",
    section: "科目一：4.3 AI 風險管理",
    code: "L21203",
    isErrata: true,
    title: "【勘誤重點】台灣個人資料保護法（PDPA）事前告知 6 大要件",
    summary: "官方勘誤表特別擴增並強調：依台灣《個人資料保護法》（PDPA）第 8 條規定，蒐集個人資料前應向當事人明確告知 6 大法定事項。核心在於落實當事人之『充分知情權』與『自主決定權』！",
    confusing: [
      "① 蒐集機關名稱（公務機關或非公務機關名稱）。",
      "② 蒐集目的與使用範圍（必須具備特定合法目的）。",
      "③ 個人資料之類別（如姓名、識別碼、消費紀錄等）。",
      "④ 個人資料利用情形（包含利用期間、地區、對象及方式）。",
      "⑤ 當事人權利及行使方式（依第 3 條：查詢、閱覽、製給複製本、補充/更正、停止蒐集處理利用、刪除）。",
      "⑥ 當事人得自由選擇是否提供資料，以及不提供時對其權益之影響。"
    ],
    keywords: ["PDPA", "個人資料保護法", "事前告知義務", "告知6要件", "知情同意", "個資當事人權利"],
    examRefs: [
      { subj: "115_1_1", qId: 35, note: "AI 系統導入之個資隱私合規與告知義務" }
    ]
  },
  {
    id: "sg_err_04",
    subject: "errata",
    chapter: "官方勘誤表",
    section: "科目三：3.2 線性代數與矩陣分解",
    code: "L23102",
    isErrata: true,
    title: "【勘誤重點】非負矩陣分解（NMF）之元素級非負定義",
    summary: "官方勘誤表特別補充釐清：將非負矩陣 $X \\in \\mathbb{R}^{m \\times n}$ 分解為 $X \\approx WH$（其中 $W \\in \\mathbb{R}^{m \\times k}, H \\in \\mathbb{R}^{k \\times n}$）時，算式中標示的 $X \\ge 0, W \\ge 0, H \\ge 0$ 是線性代數中針對非負矩陣的標準簡寫，指的是矩陣內『每一個個別元素』皆大於等於零（Element-wise non-negative），而非純量比較！",
    confusing: [
      "PCA 允許數值有正有負，因此主成分可能難以用直觀物理意義解釋。",
      "NMF（Non-negative Matrix Factorization）強制所有元素皆非負，具有『部分組成整體（Parts-based representation）』的自然解釋性（例如影像像素、文字主題詞頻）。",
      "基底矩陣 $W$ 代表特徵基底（如臉部五官特徵），組合係數 $H$ 代表權重疊加。"
    ],
    formulas: "X \\approx W \\cdot H, \\quad \\text{其中 } x_{ij} \\ge 0, \\; w_{ik} \\ge 0, \\; h_{kj} \\ge 0 \\quad (\\text{Element-wise})",
    keywords: ["NMF", "非負矩陣分解", "矩陣分解", "元素級非負", "降維", "主題模型"],
    examRefs: [
      { subj: "114_2_3", qId: 10, note: "非監督式特徵提取與矩陣分解比較" }
    ]
  },
  {
    id: "sg_err_05",
    subject: "errata",
    chapter: "官方勘誤表",
    section: "科目三：4.2 常見機器學習演算法",
    code: "L23202",
    isErrata: true,
    title: "【勘誤重點】邏輯迴歸（Logistic Regression）之模型假設本質",
    summary: "官方勘誤表修訂：邏輯迴歸的模型基本假設為『對數勝算（Log-Odds / Logit）與特徵變數之間具備線性關係（Linearity in Log-Odds）』，而非機率與特徵之間呈線性關係！",
    confusing: [
      "Odds（勝算）：事件發生機率除以不發生機率，$\\text{Odds} = \\frac{p}{1-p}$。",
      "Log-Odds（對數勝算 / Logit）：$\\ln\\left(\\frac{p}{1-p}\\right) = w^T x + b$。這正是邏輯迴歸的核心公式！",
      "經過 Sigmoid 映射後：$p = \\sigma(w^T x + b) = \\frac{1}{1 + e^{-(w^T x + b)}}$，呈現 S 型非線性機率曲線。"
    ],
    formulas: "\\text{Logit}(p) = \\ln\\left(\\frac{p}{1-p}\\right) = w_1 x_1 + w_2 x_2 + \\dots + w_n x_n + b",
    keywords: ["邏輯迴歸", "Log-Odds", "對數勝算", "Sigmoid", "模型假設", "二元分類"],
    examRefs: [
      { subj: "115_1_3", qId: 15, note: "廣義線性模型與邏輯迴歸機率映射" }
    ]
  },

  // =========================================================================
  // 【科目1：L21 人工智慧技術應用與規劃】官方學習指引核心精華
  // =========================================================================
  {
    id: "sg_l21_01",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.1 自然語言處理技術與應用",
    code: "L21101",
    title: "NLP 詞向量演進：從 Word2Vec、GloVe 到 Transformer 自注意力",
    summary: "學習指引完整梳理 NLP 技術演進里程碑：傳統 One-Hot 有維度災難與正交無語意問題；Word2Vec 提出 CBOW（由上下文預測目標詞）與 Skip-gram（由目標詞預測上下文）建立靜態分散式詞向量；現代 Transformer 透過自注意力機制（Self-Attention）解決動態上下文多義詞問題。",
    confusing: [
      "CBOW：上下文多詞輸入 $\\to$ 平均 $\\to$ 預測中心詞（訓練較快，高頻詞表現好）。",
      "Skip-gram：中心詞輸入 $\\to$ 預測上下文各詞（罕見詞表現更優，但訓練耗時較長）。",
      "BERT：基於 Transformer Encoder 的雙向上下文表示，採用 Masked LM 與 Next Sentence Prediction 預訓練。",
      "GPT：基於 Transformer Decoder 的自回歸語言模型，依賴因果遮罩（Causal Mask）單向預測下一個 Token。"
    ],
    formulas: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V",
    keywords: ["Word2Vec", "CBOW", "Skip-gram", "Transformer", "Self-Attention", "BERT", "GPT"],
    examRefs: [
      { subj: "114_2_1", qId: 1, note: "神經網路詞嵌入模型演進與 NLP 技術比較" },
      { subj: "115_1_1", qId: 2, note: "預訓練語言模型雙向與自回歸架構判別" }
    ]
  },
  {
    id: "sg_l21_02",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.1 自然語言處理技術與應用",
    code: "L21101",
    title: "NLP 評估指標：機器翻譯 BLEU 與摘要生成 ROUGE",
    summary: "學習指引規範文字生成與翻譯之量化評估：BLEU 基於精確率（Precision），統計模型生成文字在人工參考譯文中的 n-gram 匹配重合度，附帶長度懲罰因子（Brevity Penalty）；ROUGE 則側重召回率（Recall），統計參考摘要中有多少 n-gram 被模型完整生成出來。",
    confusing: [
      "BLEU（Bilingual Evaluation Understudy）：常考於機器翻譯，範圍 0~1，過短句子會受 BP 懲罰。公式側重 Precision。",
      "ROUGE（Recall-Oriented Understudy for Gisting Evaluation）：常考於文字摘要。ROUGE-N（n-gram 召回率）、ROUGE-L（基於最長公共子序列 LCS 評估流暢度與結構）。",
      "Perplexity（困惑度 PPL）：語言模型預測下一個詞的不確定性指標，數值越小代表模型語言生成能力越好。"
    ],
    keywords: ["BLEU", "ROUGE", "Perplexity", "NLP評估", "機器翻譯", "摘要生成"],
    examRefs: [
      { subj: "114_2_1", qId: 4, note: "文字生成模型評估指標 BLEU 與 ROUGE 差異" }
    ]
  },
  {
    id: "sg_l21_03",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.2 電腦視覺技術與應用",
    code: "L21102",
    title: "電腦視覺（CV）核心任務三階粒度與經典架構",
    summary: "學習指引依空間粒度將 CV 分為三大階層：① 影像分類（Image Classification，全圖單一標籤，CNN/ResNet）；② 物件偵測（Object Detection，定位邊界框 Bounding Box 與類別，兩階段 Faster R-CNN vs 單階段 YOLO/SSD）；③ 影像分割（Segmentation，像素級判別，語意分割 FCN/U-Net vs 實例分割 Mask R-CNN）。",
    confusing: [
      "卷積層（Convolutional Layer）：透過局部感受野（Receptive Field）與權重共享（Weight Sharing）提取空間局部特徵。",
      "池化層（Pooling Layer）：最大池化（Max Pooling）保留最強特徵；平均池化（Average Pooling）平滑特徵，主要目的為降低空間維度、減少參數量並提供平移不變性（Translation Invariance）。",
      "兩階段偵測（Faster R-CNN）：先由 RPN 產生候選區域，再進行分類與回歸，精度高但速度慢；單階段偵測（YOLO）：將全圖劃分為網格直接回歸邊界框與類別機率，速度極快適合即時應用。"
    ],
    keywords: ["CNN", "影像分類", "物件偵測", "YOLO", "Faster R-CNN", "影像分割", "Mask R-CNN"],
    examRefs: [
      { subj: "114_2_1", qId: 3, note: "卷積神經網路卷積核與池化操作功能" },
      { subj: "115_1_1", qId: 7, note: "物件偵測單階段與兩階段演算法架構比較" }
    ]
  },
  {
    id: "sg_l21_04",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.2 電腦視覺技術與應用",
    code: "L21102",
    title: "遷移學習（Transfer Learning）與微調（Fine-tuning）策略",
    summary: "學習指引強調工業級 CV 幾乎皆從大規模預訓練權重（如 ImageNet）出發進行遷移學習。微調策略取決於新資料集規模與原始任務相似度：若資料量小且相似，僅微調分類頭（Classifier Top Layer）；若資料量大且差異大，解凍全網路或深層卷積層進行全量微調。",
    confusing: [
      "特徵提取器模式（Feature Extractor）：凍結 Backbone（卷積基底特徵提取層）所有權重，僅重新初始化並訓練最後全連接層，避免過擬合，訓練最快。",
      "微調模式（Fine-tuning）：解凍骨幹網路部分深層層級，以極小學習率（如 1e-4 或 1e-5）進行微調，避免災難性遺忘（Catastrophic Forgetting）。",
      "資料增強（Data Augmentation）：翻轉、旋轉、隨機裁剪、Mixup 等，為防止小型資料集過擬合之必備手段。"
    ],
    keywords: ["遷移學習", "微調", "Fine-tuning", "特徵提取", "ImageNet", "預訓練模型"],
    examRefs: [
      { subj: "115_1_1", qId: 9, note: "遷移學習微調策略與不同資料規模選用" }
    ]
  },
  {
    id: "sg_l21_05",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.3 生成式 AI 技術與應用",
    code: "L21103",
    title: "生成式 AI 三大流派架構：GAN vs VAE vs 擴散模型（Diffusion）",
    summary: "學習指引深入剖析生成模型原理：① GAN 透過生成器（Generator）與判別器（Discriminator）進行零和賽局對抗訓練，生成影像最銳利但容易模式崩塌（Mode Collapse）；② VAE 引入變分推論與隱空間連續性，藉由 KL 散度約束重建，但影像容易模糊；③ 擴散模型（Diffusion Models）透過前向加噪與反向神經去噪，具備最高樣本多樣性與穩定度。",
    confusing: [
      "GAN 損失函數：$\\min_G \\max_D V(D, G) = \\mathbb{E}[\\log D(x)] + \\mathbb{E}[\\log(1 - D(G(z)))]$。",
      "Mode Collapse（模式崩塌）：生成器發現某幾種樣本能輕易騙過判別器，導致其重複生成單一或極少數幾種樣本，缺乏多樣性。",
      "擴散模型（如 Stable Diffusion、DALL-E 3）：前向過程逐步添加高斯噪聲，反向過程由神經網路（通常為 U-Net）預測並剔除噪聲。"
    ],
    keywords: ["GAN", "VAE", "Diffusion", "擴散模型", "模式崩塌", "生成對抗網路", "變分自編碼器"],
    examRefs: [
      { subj: "114_2_1", qId: 8, note: "生成對抗網路訓練不穩定與模式崩塌成因" },
      { subj: "115_1_1", qId: 12, note: "擴散模型前向加噪與反向去噪數學原理" }
    ]
  },
  {
    id: "sg_l21_06",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.3 生成式 AI 技術與應用",
    code: "L21103",
    title: "大型語言模型提示詞工程：CoT 思維鏈、ReAct 與 RAG 架構",
    summary: "指引解析生成式 AI 落地的三大前瞻架構：① CoT（Chain-of-Thought 思維鏈）：引導模型逐步輸出中間推理步驟，大幅提高複雜邏輯與數學推理能力；② ReAct（Reason + Act）：結合推理與外部工具呼叫；③ RAG（檢索增強生成）：外掛私有向量資料庫動態檢索注入上下文，徹底解決幻覺與時效性問題。",
    confusing: [
      "RAG vs 微調（Fine-tuning）：RAG 適合外掛動態高頻更新的私有企業知識庫、成本低、具備來源溯源引用；微調適合學習特定領域口吻風格、輸出特定 JSON 結構或低延遲邊緣部署。",
      "幻覺（Hallucination）：模型生成表面看似流暢可信但實質錯誤或捏造的事實，成因為自回歸機率取樣特性。",
      "Zero-shot vs Few-shot Prompting：提示詞中不給範例（Zero-shot）直接提問；給予少數標準問答範例（Few-shot）引導格式。"
    ],
    keywords: ["RAG", "CoT", "思維鏈", "提示詞工程", "幻覺", "向量資料庫", "Fine-tuning"],
    examRefs: [
      { subj: "115_1_1", qId: 15, note: "生成式 AI RAG 架構與幻覺緩解機制" }
    ]
  },
  {
    id: "sg_l21_07",
    subject: "subject1",
    chapter: "第三章 AI 相關技術應用",
    section: "3.4 多模態人工智慧應用",
    code: "L21104",
    title: "多模態 AI 對齊核心機制：CLIP 對比學習與跨模態融合",
    summary: "多模態核心在於將不同模態（文字、影像、語音）對齊映射至共享特徵空間。OpenAI 的 CLIP（Contrastive Language-Image Pre-training）透過雙塔結構（文字編碼器 + 影像編碼器），在批次中計算文字與影像的餘弦相似度對比損失，達成強大的 Zero-Shot 辨識能力。",
    confusing: [
      "早期融合（Early Fusion）：在特徵提取初期即將各模態原始資料串接，能捕捉低階交互但模態維度與採樣率難以統一。",
      "晚期融合（Late Fusion）：各模態獨立訓練專屬模型後，於輸出層融合（投票或加權平均），容錯性高但缺乏深層特徵交互。",
      "對比學習（Contrastive Learning）：正樣本對（匹配的圖文）距離拉近，負樣本對（不匹配的圖文）距離推遠。"
    ],
    keywords: ["多模態", "CLIP", "對比學習", "Zero-Shot", "雙塔架構", "跨模態融合"],
    examRefs: [
      { subj: "115_1_1", qId: 14, note: "多模態大模型圖文對齊與特徵映射技術" }
    ]
  },
  {
    id: "sg_l21_08",
    subject: "subject1",
    chapter: "第四章 AI 導入評估規劃",
    section: "4.1 ~ 4.2 AI 導入評估與規劃：PoC vs PILOT",
    code: "L21201",
    title: "企業導入 AI 的三維評估準則與 PoC / PILOT 落地流程",
    summary: "學習指引強調企業導入 AI 必須通過三維可行性驗證：業務可行性（是否解決核心痛點與具備 KPI 指標）、技術可行性（資料量是否充足、演算法成熟度）、經濟可行性（ROI 投資報酬率與 TCO 總擁有成本）。驗證流程需嚴格區分 PoC 與 PILOT 階段。",
    confusing: [
      "PoC（Proof of Concept 概念驗證）：在封閉沙盒環境中使用離線歷史資料，驗證『技術上是否可行、演算法能否達到基本準確率』，週期短（2~6週）。",
      "PILOT（小規模先導試行）：將模型部署至真實生產環境的一部分（如 5% 用戶或單一工廠產線），驗證『業務流程整合、推論延遲、使用者接受度與實際營收提升』，週期較長（1~3個月）。",
      "TCO 包含：資料收集標註、算力基礎建設、模型訓練維護、資安合規與人員培訓成本。"
    ],
    keywords: ["PoC", "PILOT", "ROI", "TCO", "AI導入規劃", "概念驗證", "先導試行"],
    examRefs: [
      { subj: "114_2_1", qId: 24, note: "企業導入 AI 專案 PoC 與 PILOT 階段劃分" }
    ]
  },
  {
    id: "sg_l21_09",
    subject: "subject1",
    chapter: "第四章 AI 導入評估規劃",
    section: "4.3 AI 風險管理：歐盟 AI 法案與資安防禦",
    code: "L21203",
    title: "歐盟 AI 法案（EU AI Act）四級風險金字塔與 AI 資安攻擊防範",
    summary: "學習指引針對治理與安全特別列出歐盟 AI 法案四級風險管控架構：① 不可接受風險（禁止）；② 高風險（強制偏見檢測、人工監督、CE認證）；③ 有限風險（透明揭露義務）；④ 最小風險（自由使用）。同時分析三大 AI 資安攻擊手法。",
    confusing: [
      "不可接受風險（Unacceptable Risk）：社會評分系統（Social Scoring）、即時遠端生物辨識（除嚴格授權犯罪追緝外）、認知行為操縱（對兒童或弱勢的潛意識暗示操控）。",
      "高風險（High-Risk）：醫療器材、招募升遷篩選、司法裁決、信用評級、重要公用設施（水電交通）。",
      "對抗樣本攻擊（Adversarial Attack）：加入人類不可見之微小擾動導致模型誤判；資料投毒（Data Poisoning）：在訓練資料中植入後門（Backdoor）；提示詞注入（Prompt Injection）：越獄繞過安全防護措施。"
    ],
    keywords: ["歐盟AI法案", "高風險AI", "對抗樣本攻擊", "資料投毒", "提示詞注入", "AI治理"],
    examRefs: [
      { subj: "114_2_1", qId: 30, note: "歐盟 AI 法案四級風險金字塔規範對照" },
      { subj: "115_1_1", qId: 28, note: "機器學習安全防護與對抗性攻擊防禦" }
    ]
  },
  {
    id: "sg_l21_10",
    subject: "subject1",
    chapter: "第五章 AI 技術應用與系統部署",
    section: "5.2 AI 技術系統集成與部署",
    code: "L21302",
    title: "AI 部署架構與維運監控：雲端 vs 邊緣、容器化與概念漂移（Drift）",
    summary: "學習指引詳解 AI 落地部署架構：雲端部署提供彈性算力但延遲高且耗頻寬；邊緣運算（Edge AI）具備低延遲、隱私性與斷網運作能力但受限於算力與功耗。模型上線後必須持續監控概念漂移與資料漂移。",
    confusing: [
      "Data Drift（資料漂移 / 共變異數偏移）：輸入資料特徵分佈改變 $P(X)$ 發生變化，但特徵與標籤的對應關係 $P(Y|X)$ 未變（例如相機更換導致畫質變清晰）。",
      "Concept Drift（概念漂移）：輸入與輸出的映射關係 $P(Y|X)$ 發生實質改變（例如疫情爆發導致消費習慣完全轉變，原詐欺特徵變成正常行為）。",
      "推論加速技術：模型量化（Quantization，FP32 轉 INT8）、剪枝（Pruning，刪除冗餘權重）、知識蒸餾（Knowledge Distillation，大模型教小模型）。"
    ],
    keywords: ["Edge AI", "雲端部署", "Concept Drift", "Data Drift", "模型量化", "剪枝", "蒸餾"],
    examRefs: [
      { subj: "114_2_1", qId: 38, note: "模型部署架構延遲考量與邊緣運算優勢" },
      { subj: "115_1_1", qId: 32, note: "模型上線後監控指標與資料漂移應對" }
    ]
  },

  // =========================================================================
  // 【科目2：L22 大數據處理分析與應用】官方學習指引核心精華
  // =========================================================================
  {
    id: "sg_l22_01",
    subject: "subject2",
    chapter: "第三章 機率統計基礎",
    section: "3.1 敘述性統計與資料摘要技術",
    code: "L22101",
    title: "統計摘要指標、偏態峰態與盒鬚圖（Boxplot）離群值判別法則",
    summary: "學習指引詳述統計指標特性：平均數易受極值拉扯，中位數具抗干擾穩健性（Robust）。盒鬚圖以四分位距 $\\text{IQR} = Q_3 - Q_1$ 為核心，嚴格定義離群值門檻為小於 $Q_1 - 1.5\\times\\text{IQR}$ 或大於 $Q_3 + 1.5\\times\\text{IQR}$。",
    confusing: [
      "正偏態（右偏態，Right-skewed）：長尾在右側，數值關係為 $\\text{Mean} > \\text{Median} > \\text{Mode}$（例如國民所得收入分配）。",
      "負偏態（左偏態，Left-skewed）：長尾在左側，數值關係為 $\\text{Mean} < \\text{Median} < \\text{Mode}$（例如簡單考卷分數分佈）。",
      "常態分佈峰態係數（Kurtosis）為 3（超額峰態 Excess Kurtosis = 0）。高峰態（Leptokurtic）具有厚尾（Fat-tail）特性，代表極端異常值出現機率高於常態分佈。"
    ],
    formulas: "\\text{IQR} = Q_3 - Q_1, \\quad \\text{下邊界} = Q_1 - 1.5 \\times \\text{IQR}, \\quad \\text{上邊界} = Q_3 + 1.5 \\times \\text{IQR}",
    keywords: ["盒鬚圖", "IQR", "四分位距", "離群值", "偏態", "峰態", "右偏態"],
    examRefs: [
      { subj: "114_2_1", qId: 15, note: "盒鬚圖四分位距計算與離群值判別規則" }
    ]
  },
  {
    id: "sg_l22_02",
    subject: "subject2",
    chapter: "第三章 機率統計基礎",
    section: "3.1 敘述性統計與資料摘要技術",
    code: "L22101",
    title: "變異係數（CV）無因次量綱比較與柴比雪夫不等式",
    summary: "學習指引強調：標準差受測量單位影響，無法直接跨單位或跨尺度比較。變異係數 $\\text{CV} = \\frac{s}{\\bar{x}} \\times 100\\%$ 為無因次指標，適合比較不同規模或單位的離散程度。柴比雪夫不等式則適用於任意未知分佈。",
    confusing: [
      "變異係數（Coefficient of Variation, CV）：$\\text{CV} = \\frac{\\sigma}{\\mu}$。例如比較大象體重與老鼠體重的相對波動幅度。",
      "柴比雪夫不等式（Chebyshev's Inequality）：對於『任何機率分佈』，資料落在距離平均數 $k$ 個標準差範圍內的比例至少為 $1 - \\frac{1}{k^2}$（當 $k=2$ 時至少 75%，$k=3$ 時至少 88.9%）。",
      "常態分佈的經驗法則（Empirical Rule）：僅適用於常態分佈，1 個標準差內 68%，2 個標準差內 95%，3 個標準差內 99.7%。"
    ],
    formulas: "\\text{CV} = \\frac{s}{\\bar{x}} \\times 100\\%, \\quad P(|X - \\mu| < k\\sigma) \\ge 1 - \\frac{1}{k^2}",
    keywords: ["變異係數", "柴比雪夫不等式", "標準差", "無因次", "離散趨勢"],
    examRefs: [
      { subj: "114_2_1", qId: 16, note: "不同尺度資料離散程度比較與變異係數" }
    ]
  },
  {
    id: "sg_l22_03",
    subject: "subject2",
    chapter: "第三章 機率統計基礎",
    section: "3.2 機率分佈與資料分佈模型",
    code: "L22102",
    title: "常見四大機率分佈特性：常態、二項、卜瓦松與指數分佈",
    summary: "學習指引歸納四大核心分佈應用情境：① 常態分佈（自然界大部分連續測量值，68-95-99.7 原則）；② 二項分佈（$n$ 次獨立白努利試驗中成功 $k$ 次之機率）；③ 卜瓦松分佈（固定時間或空間內稀有事件發生次數，$\\text{E}(X)=\\text{Var}(X)=\\lambda$）；④ 指數分佈（事件發生之等待間隔時間，具備無記憶性）。",
    confusing: [
      "卜瓦松分佈：平均數與變異數相等，皆為 $\\lambda$。適用於：客服中心每小時進線電話數、網站每分鐘訪問量、伺服器故障次數。",
      "指數分佈無記憶性（Memoryless Property）：$P(X > s + t \\mid X > s) = P(X > t)$。已等待了 $s$ 分鐘，對未來還要再等 $t$ 分鐘的機率完全無影響。",
      "當二項分佈試驗次數 $n$ 極大、成功機率 $p$ 極小時，二項分佈可逼近為卜瓦松分佈（$\\lambda = np$）。"
    ],
    formulas: "P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad f(x) = \\lambda e^{-\\lambda x} \\; (x \\ge 0)",
    keywords: ["常態分佈", "二項分佈", "卜瓦松分佈", "指數分佈", "無記憶性", "中央極限定理"],
    examRefs: [
      { subj: "114_2_1", qId: 18, note: "卜瓦松分佈期望值與變異數性質" }
    ]
  },
  {
    id: "sg_l22_04",
    subject: "subject2",
    chapter: "第三章 機率統計基礎",
    section: "3.3 假設檢定與統計推論",
    code: "L22103",
    title: "統計假設檢定決策框架：第一型與第二型錯誤、p-value 與三種檢定",
    summary: "學習指引建立統計推論標準決策樹：虛無假說 $H_0$（現狀無差異）與對立假說 $H_1$。第一型錯誤 $\\alpha$（棄真，型一錯誤）；第二型錯誤 $\\beta$（存偽，型二錯誤）；檢定力（Power）$= 1 - \\beta$。當 $p\\text{-value} < \\alpha$ 時拒絕 $H_0$。",
    confusing: [
      "型一錯誤 $\\alpha$：無罪被判有罪（偽陽性）。通常顯著水準設定為 $\\alpha = 0.05$。",
      "型二錯誤 $\\beta$：有罪被判無罪（偽陰性）。要降低 $\\beta$（提高檢定力），最直接有效的方法是增加樣本數（Sample Size）。",
      "常見檢定適用情境：① $t$ 檢定（連續變數、常態母體、小樣本比較兩組平均值）；② 卡方檢定（類別變數、次數資料的獨立性與適合度檢定）；③ ANOVA 單因子變異數分析（三個或以上組別的平均值是否有顯著差異）。"
    ],
    keywords: ["假設檢定", "型一錯誤", "型二錯誤", "檢定力", "p-value", "t檢定", "卡方檢定", "ANOVA"],
    examRefs: [
      { subj: "115_1_1", qId: 19, note: "統計假設檢定型一與型二錯誤權衡關係" }
    ]
  },
  {
    id: "sg_l22_05",
    subject: "subject2",
    chapter: "第四章 大數據處理技術",
    section: "4.1 數據收集與清理",
    code: "L22201",
    title: "缺失值三大機制（MCAR / MAR / MNAR）與填補對策",
    summary: "學習指引強調資料清理前必須先判定缺失機制的統計本質：① 完全隨機缺失（MCAR）；② 隨機缺失（MAR）；③ 非隨機缺失（MNAR）。不同機制決定了刪除是否會引入偏差。",
    confusing: [
      "MCAR（Missing Completely at Random）：缺失與任何已測量或未測量變數完全無關（如問卷隨機被咖啡弄髒）。直接刪除樣本不會引入偏差，但會損失統計檢定力。",
      "MAR（Missing at Random）：缺失與其他可觀察的已知變數相關，但與該變數本身未測得的數值無關（如女性較不願透露年齡，但年齡缺失已知與性別相關）。可用迴歸或 KNN 填補。",
      "MNAR（Missing Not at Random）：缺失直接取決於該變數自身的隱藏數值（如極高收入者刻意隱瞞收入）。不可直接刪除或均值填補，否則造成嚴重估計偏差，需建立專門的選擇偏差模型（Heckman 模型）。"
    ],
    keywords: ["缺失值", "MCAR", "MAR", "MNAR", "資料清理", "KNN填補", "選擇偏差"],
    examRefs: [
      { subj: "115_1_1", qId: 20, note: "資料預處理缺失值型態辨析與處理策略" }
    ]
  },
  {
    id: "sg_l22_06",
    subject: "subject2",
    chapter: "第四章 大數據處理技術",
    section: "4.2 ~ 4.3 數據架構與處理工具：Lakehouse 與 Spark",
    code: "L22202",
    title: "現代大數據架構變遷：ETL/ELT、Data Lakehouse 與 Apache Spark 核心機制",
    summary: "學習指引剖析現代大數據處理架構：從傳統資料倉儲（DW，結構化、Schema-on-Write）與資料湖（Data Lake，海量多結構、Schema-on-Read）演進為現代資料湖倉（Data Lakehouse，兼具資料湖低成本彈性與資料倉儲 ACID 事務保障）。分散式運算則以記憶體級 Apache Spark 為主流。",
    confusing: [
      "ETL（Extract-Transform-Load）：資料進入倉儲前先轉換，適合傳統運算資源受限；ELT（Extract-Load-Transform）：資料先載入雲端湖倉（如 BigQuery/Snowflake），利用雲端強大算力按需轉換，具更高彈性。",
      "Spark 核心 RDD（Resilient Distributed Dataset）：具備血統容錯（Lineage），轉換操作（Transformations，如 map/filter）具延遲評估（Lazy Evaluation），直到行動操作（Actions，如 count/collect）觸發才真正執行。",
      "窄依賴（Narrow Dependency）：父 RDD 分區僅被單一子分區使用（無需跨節點交換，如 map）；寬依賴（Wide Dependency）：多個子分區依賴父分區（觸發 Shuffle，為 Spark 效能瓶頸關鍵）。"
    ],
    keywords: ["Data Lakehouse", "ETL vs ELT", "Apache Spark", "RDD", "Shuffle", "ACID", "寬依賴"],
    examRefs: [
      { subj: "114_2_1", qId: 21, note: "分散式運算架構 Spark 記憶體機制與 RDD 特性" }
    ]
  },
  {
    id: "sg_l22_07",
    subject: "subject2",
    chapter: "第五章 大數據分析方法與工具",
    section: "5.2 常見的大數據分析方法",
    code: "L22302",
    title: "關聯規則 Apriori 三大指標與辛普森悖論（Simpson's Paradox）",
    summary: "學習指引強調大數據商業分析的兩大高頻考點：購物籃關聯規則分析的算式，以及統計學中因遺漏混雜變數導致趨勢反轉的辛普森悖論。",
    confusing: [
      "Support（支持度）：同時購買 A 與 B 的交易佔總交易數的比例，$P(A \\cap B)$。",
      "Confidence（信賴度 / 置信度）：在購買 A 的條件下同時購買 B 的機率，$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$。",
      "Lift（提升度）：$\\frac{\\text{Confidence}(A \\to B)}{P(B)} = \\frac{P(A \\cap B)}{P(A) \\times P(B)}$。提升度 $> 1$ 代表正相關（A 與 B 互有促進）；$= 1$ 代表獨立互不影響；$< 1$ 代表負相關（互為排斥替代品）。",
      "辛普森悖論：在各個子分組中 A 組表現皆優於 B 組，但在合併整體資料後，B 組表現反而優於 A 組！成因在於忽略了關鍵的『混雜變數（Confounding Variable）』與樣本群體規模不均。"
    ],
    formulas: "\\text{Support} = P(A \\cap B), \\quad \\text{Confidence} = \\frac{P(A \\cap B)}{P(A)}, \\quad \\text{Lift} = \\frac{P(A \\cap B)}{P(A) P(B)}",
    keywords: ["Apriori", "關聯規則", "支持度", "信賴度", "提升度", "辛普森悖論", "混雜變數"],
    examRefs: [
      { subj: "114_2_1", qId: 26, note: "關聯規則支持度與提升度計算" },
      { subj: "115_1_1", qId: 25, note: "大數據分析辛普森悖論與群體權重偏差" }
    ]
  },
  {
    id: "sg_l22_08",
    subject: "subject2",
    chapter: "第六章 大數據在人工智慧之應用",
    section: "6.4 大數據隱私保護、安全與合規",
    code: "L22404",
    title: "隱私增強計算（PETs）：去識別化三準則、差分隱私與聯邦學習",
    summary: "學習指引專章規範大數據治理之隱私保護技術（PETs）：傳統去識別化（$k$-匿名、$l$-多樣性、$t$-緊密性）以及現代密碼學與分散式學習（差分隱私、聯邦學習、同態加密）。",
    confusing: [
      "$k$-匿名性（$k$-Anonymity）：準識別碼相同之記錄至少有 $k$ 筆，防止身份關聯攻擊，但無法抵禦屬性揭露攻擊（Attribute Disclosure）。",
      "$l$-多樣性（$l$-Diversity）：在準識別碼相同的分組中，敏感屬性至少具備 $l$ 種不同取值，防止同質性攻擊（Homogeneity Attack）。",
      "$t$-緊密性（$t$-Closeness）：各等價類中敏感屬性分佈與整體母體分佈之距離不得超過 $t$ 門檻，防止傾斜攻擊。",
      "差分隱私（Differential Privacy）：在查詢結果中注入經過精準校準的數學噪聲（Laplace / Gaussian），確保任意單一資料記錄的存在與否不會顯著影響統計查詢結果。",
      "聯邦學習（Federated Learning）：『數據不動，模型動』。原始資料保留在各機構本地端，僅上傳模型梯度或參數至中央伺服器進行聚合更新（如 FedAvg）。"
    ],
    keywords: ["k-匿名", "l-多樣性", "差分隱私", "聯邦學習", "同態加密", "PETs", "去識別化"],
    examRefs: [
      { subj: "114_2_1", qId: 34, note: "資料去識別化準則與隱私保護技術比較" },
      { subj: "115_1_1", qId: 30, note: "聯邦學習分散式架構與隱私安全保障" }
    ]
  },

  // =========================================================================
  // 【科目3：L23 機器學習技術與應用】官方學習指引核心精華
  // =========================================================================
  {
    id: "sg_l23_01",
    subject: "subject3",
    chapter: "第三章 機器學習基礎數學",
    section: "3.1 ~ 3.2 基礎數學：機率、貝氏定理與主成分分析（PCA）",
    code: "L23101",
    title: "機器學習核心數學基石：貝氏定理更新、特徵分解與 PCA 降維",
    summary: "學習指引將機器學習數學拆解為機率推論與線性代數空間轉換：貝氏定理為由先驗機率結合樣本概似推導後驗機率的基礎；PCA（主成分分析）透過共變異數矩陣的特徵分解，尋找投影方差最大的正交正交基底，達成無監督資料降維。",
    confusing: [
      "貝氏定理：$P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}$。其中 $P(A)$ 為先驗（Prior），$P(B \\mid A)$ 為概似（Likelihood），$P(A \\mid B)$ 為後驗（Posterior）。",
      "PCA 核心步驟：① 資料零均值化（Zero-centering）；② 計算樣本共變異數矩陣 $\\Sigma = \\frac{1}{n} X^T X$；③ 求解特徵值與特徵向量；④ 按特徵值由大到小排序，選取前 $k$ 個對應的特徵向量作為投影矩陣。",
      "PCA 與 LDA 差異：PCA 為無監督學習，目標為最大化資料投影方差；LDA 為監督學習，目標為最大化類別間間距（Between-class scatter）並最小化類別內方差（Within-class scatter）。"
    ],
    formulas: "P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}, \\quad \\Sigma v = \\lambda v, \\quad X_{\\text{projected}} = X \\cdot W_k",
    keywords: ["貝氏定理", "PCA", "主成分分析", "特徵值", "特徵向量", "共變異數矩陣", "降維"],
    examRefs: [
      { subj: "114_2_3", qId: 1, note: "貝氏定理條件機率計算與疾病篩檢應用" },
      { subj: "114_2_3", qId: 3, note: "PCA 主成分分析無監督降維與特徵分解" }
    ]
  },
  {
    id: "sg_l23_02",
    subject: "subject3",
    chapter: "第三章 機器學習基礎數學",
    section: "3.3 數值優化技術與方法",
    code: "L23103",
    title: "數值優化技術：凸優化條件、梯度下降法變體與自適應優化器（Adam）",
    summary: "學習指引解析機器學習最佳化問題：凸優化（Convex Optimization）保證局部極值即為全域最優解。從批次梯度下降（BGD）發展出隨機梯度下降（SGD）、動量法（Momentum）與結合一階動量及二階自適應學習率的 Adam 優化器。",
    confusing: [
      "BGD（Batch Gradient Descent）：使用全量資料計算梯度，更新平穩但計算量極大、無法線上更新。",
      "SGD（Stochastic Gradient Descent）：每次僅用 1 筆樣本更新，速度極快但梯度震盪劇烈、易在鞍點（Saddle point）徘徊。",
      "Mini-batch SGD：取兩者折衷（常用 Batch Size 32, 64, 128），兼顧向量化矩陣加速與隨機探索跳脫局部最優的能力。",
      "Adam（Adaptive Moment Estimation）：記錄梯度的一階動量（指數移動平均方向）與二階動量（平方和自適應縮放步長），並進行偏差校正（Bias Correction），為現代深度學習預設優化器首選。"
    ],
    keywords: ["梯度下降", "凸優化", "Adam", "SGD", "動量法", "學習率", "局部極值"],
    examRefs: [
      { subj: "114_2_3", qId: 6, note: "數值優化器 Adam 與 SGD 動量機制比較" }
    ]
  },
  {
    id: "sg_l23_03",
    subject: "subject3",
    chapter: "第四章 機器學習與深度學習",
    section: "4.1 機器學習原理：偏差與方差權衡",
    code: "L23201",
    title: "偏差-方差權衡（Bias-Variance Tradeoff）與泛化能力診斷",
    summary: "機器學習總誤差可分解為三部分：總誤差 = $\\text{Bias}^2 + \\text{Variance} + \\text{不可避免的噪聲}$。高偏差對應欠擬合（Underfitting），高方差對應過擬合（Overfitting）。模型架構調整必須精確診斷這兩者。",
    confusing: [
      "欠擬合（高偏差 High Bias）：模型過於簡單，訓練集與測試集誤差皆很大。解法：增加特徵多項式維度、使用更複雜模型、減少正則化強度、增加神經網路層數。",
      "過擬合（高方差 High Variance）：模型過於複雜，訓練集誤差極小但測試集誤差極大（泛化能力差）。解法：增加訓練資料量、進行特徵選擇（降維）、加入正則化（L1/L2、Dropout）、提早停止（Early Stopping）、使用集成學習（如隨機森林）。"
    ],
    formulas: "\\text{Expected Error} = \\text{Bias}^2(f(x)) + \\text{Var}(f(x)) + \\sigma^2",
    keywords: ["偏差", "方差", "過擬合", "欠擬合", "泛化能力", "正則化", "Bias-Variance Tradeoff"],
    examRefs: [
      { subj: "114_2_3", qId: 8, note: "偏差與方差權衡診斷及改善方針判斷" }
    ]
  },
  {
    id: "sg_l23_04",
    subject: "subject3",
    chapter: "第四章 機器學習與深度學習",
    section: "4.2 常見機器學習演算法：SVM、決策樹與集成 Boosting",
    code: "L23202",
    title: "經典演算法對決：支援向量機（SVM）、隨機森林與 XGBoost 核心",
    summary: "學習指引條列三大經典代表：① SVM 最大化超平面間距，透過核技巧（RBF Kernel）映射至高維線性可分；② 隨機森林（Bagging 代表）利用 Bootstrap 自助採樣與特徵隨機子集降低方差；③ XGBoost（Boosting 代表）利用二階泰勒展開與結構正則化循序殘差學習。",
    confusing: [
      "SVM 支援向量（Support Vectors）：落在邊界邊緣（Margin Boundary）上的樣本點，只有這些點決定了最終超平面的位置，其餘樣本點的增刪完全不影響模型超平面。",
      "Bagging（如 Random Forest）：基學習器相互獨立、並行生成，主要目的為『降低模型方差（Variance）』，不容易過擬合。",
      "Boosting（如 AdaBoost, GBDT, XGBoost）：基學習器串聯依賴、循序強化錯題殘差，主要目的為『降低模型偏差（Bias）』，若迭代過多容易過擬合。",
      "決策樹節點分割指標：ID3 使用資訊增益（偏好取值多的屬性）；C4.5 使用資訊增益比（修正 ID3 偏差）；CART 使用基尼不純度（Gini Impurity）。"
    ],
    keywords: ["SVM", "核技巧", "隨機森林", "XGBoost", "Bagging", "Boosting", "基尼係數"],
    examRefs: [
      { subj: "114_2_3", qId: 12, note: "集成學習 Bagging 與 Boosting 演算法本質差異" },
      { subj: "115_1_3", qId: 10, note: "SVM 支援向量特性與核函數空間映射" }
    ]
  },
  {
    id: "sg_l23_05",
    subject: "subject3",
    chapter: "第四章 機器學習與深度學習",
    section: "4.2 常見機器學習演算法：分群演算法比較",
    code: "L23202",
    title: "分群演算法橫評：K-Means 質心聚類 vs DBSCAN 密度分群",
    summary: "指引剖析無監督分群代表：K-Means 依賴歐氏距離迭代質心，僅能發現球狀簇（Spherical clusters），易受離群值影響且須預先給定 $k$（利用手肘法或輪廓係數判定）；DBSCAN 基於密度連通性，能發現任意複雜形狀簇並自動辨識雜訊點。",
    confusing: [
      "K-Means 手肘法（Elbow Method）：計算各 $k$ 值下的組內平方和（WCSS / Inertia），曲線彎曲轉折處即為最佳 $k$。輪廓係數（Silhouette Score）介於 -1 到 1，越接近 1 分群效果越好。",
      "DBSCAN 核心參數：鄰域半徑 $\\epsilon$（Eps）與最小樣本數 $\\text{MinPts}$。核心點（$\\ge \\text{MinPts}$）、邊界點（$< \\text{MinPts}$ 但在核心點半徑內）、雜訊點（兩者皆非）。",
      "階層式分群（Hierarchical Clustering）：凝聚法（Agglomerative，由下而上合併）與分裂法（Divisive），以樹狀圖（Dendrogram）呈現多尺度分群層次。"
    ],
    keywords: ["K-Means", "DBSCAN", "手肘法", "輪廓係數", "密度分群", "分群演算法", "階層式分群"],
    examRefs: [
      { subj: "114_2_3", qId: 15, note: "K-Means 手肘法與 DBSCAN 任意形狀分群比較" }
    ]
  },
  {
    id: "sg_l23_06",
    subject: "subject3",
    chapter: "第四章 機器學習與深度學習",
    section: "4.3 深度學習原理與框架",
    code: "L23203",
    title: "深度神經網路訓練關鍵：反向傳播、激活函數、批次正規化與 Dropout",
    summary: "學習指引深入神經網路訓練瓶頸：反向傳播依賴連鎖法則計算梯度。深層網路面臨梯度消失（Gradient Vanishing）與爆炸，現代架構引入 ReLU 激活函數、批次正規化（Batch Normalization）與殘差連接（ResNet Skip-connection）徹底解決。",
    confusing: [
      "Sigmoid 激活函數：導函數最大值僅為 0.25，在多層連乘下梯度呈指數級衰減趨近於 0，導致前層權重無法更新（梯度消失）。",
      "ReLU（Rectified Linear Unit）：$\\max(0, x)$，在正區間導數恆為 1，徹底消除飽和區梯度消失問題，計算極快；但負區間導數為 0，可能發生神經元壞死（Dying ReLU）。",
      "Batch Normalization（批次正規化）：在層間將小批次輸出強制轉換為均值 0、方差 1 的標準分佈，並引入可學習仿射參數 $\\gamma, \\beta$，有效緩解內部協變量偏移（Internal Covariate Shift），允許使用較大學習率。",
      "Dropout：訓練時隨機將一定比例（如 $p=0.5$）神經元輸出置零，推論時恢復全部神經元並乘以權重係數 $(1-p)$，可視為無數個子神經網路的集成。"
    ],
    keywords: ["反向傳播", "梯度消失", "ReLU", "Batch Normalization", "Dropout", "連鎖法則"],
    examRefs: [
      { subj: "114_2_3", qId: 16, note: "深度神經網路梯度消失成因與解決方案" },
      { subj: "115_1_3", qId: 14, note: "正則化技術 Dropout 與 Batch Normalization 功能" }
    ]
  },
  {
    id: "sg_l23_07",
    subject: "subject3",
    chapter: "第五章 機器學習建模與參數調校",
    section: "5.1 ~ 5.3 特徵工程與模型評估指標全景",
    code: "L23301",
    title: "特徵工程編碼縮放與評估矩陣：ROC-AUC vs PR 曲線適用場景",
    summary: "學習指引規範標準機器學習管線：數值特徵標準化（Z-score）vs 歸一化（Min-Max）；類別特徵 One-Hot vs Label Encoding；分類指標除 Accuracy 外，必須掌握 ROC 曲線與 PR 曲線在不同正負樣本比例下的選用原則。",
    confusing: [
      "ROC 曲線（Receiver Operating Characteristic）：橫軸為偽陽性率（FPR = $FP / (FP + TN)$），縱軸為真陽性率（TPR = Recall = $TP / (TP + FN)$）。當類別分佈改變時，ROC 曲線基本保持不變（對不平衡資料較不敏感）。",
      "PR 曲線（Precision-Recall Curve）：橫軸為 Recall，縱軸為 Precision。在極端不平衡資料（如罕見疾病篩檢、刷卡詐欺偵測，正例僅 0.1%）時，PR 曲線更能精準反映模型的真實鑑別力，是評估極度不平衡模型的首選！",
      "Stratified $k$-Fold（分層交叉驗證）：在切分 $k$ 個折疊時，嚴格保持每個折疊中各類別標籤的比例與原始資料集完全一致，是不平衡分類資料之必備評估手段。"
    ],
    formulas: "\\text{FPR} = \\frac{FP}{FP + TN}, \\quad \\text{TPR} = \\frac{TP}{TP + FN}, \\quad \\text{AUC} \\in [0.5, 1.0]",
    keywords: ["ROC-AUC", "PR曲線", "不平衡資料", "特徵工程", "Stratified k-Fold", "交叉驗證"],
    examRefs: [
      { subj: "114_2_3", qId: 23, note: "ROC 與 PR 曲線在不平衡資料下之判讀選擇" }
    ]
  },
  {
    id: "sg_l23_08",
    subject: "subject3",
    chapter: "第六章 機器學習治理",
    section: "6.1 ~ 6.2 模型可解釋性（XAI）與公平性指標",
    code: "L23401",
    title: "可解釋性 AI（XAI）：SHAP 賽局理論值、LIME 局部擬合與公平性判準",
    summary: "學習指引強調負責任 AI 治理核心：複雜黑箱模型（如深度學習、XGBoost）必須具備可解釋性。SHAP 基於合作賽局理論的 Shapley Value，具備嚴格的局部精度、缺失性與一致性；LIME 則在單一預測點周圍採樣擬合局部線性模型。",
    confusing: [
      "SHAP（Shapley Additive exPlanations）：計算每個特徵加入所有可能特徵子集所帶來的邊際貢獻平均值，特徵 Shapley 值總和嚴格等於模型預測值與基準值的差額，保證可加性。",
      "LIME（Local Interpretable Model-agnostic Explanations）：局部無關模型解釋，在要解釋的樣本點附近進行擾動採樣，以複雜模型的輸出作為標籤，訓練一個局部的簡單可解釋模型（如決策樹或線性迴歸）。",
      "公平性指標：人口統計奇偶性（Demographic Parity，各敏感族群的正面決策率相同）；均等機會（Equal Opportunity，各族群的真實陽性召回率相同）。"
    ],
    keywords: ["SHAP", "LIME", "XAI", "可解釋性AI", "Shapley Value", "演算法偏見", "公平性指標"],
    examRefs: [
      { subj: "114_2_3", qId: 30, note: "模型可解釋性 SHAP 值與特徵歸因分析" },
      { subj: "115_1_3", qId: 25, note: "AI 治理公平性指標與人口統計奇偶性" }
    ]
  }
];

// 匯出至全域環境
if (typeof module !== "undefined" && module.exports) {
  module.exports = { STUDY_GUIDE_DATA };
}
