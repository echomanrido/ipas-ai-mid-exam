// Technology Wiki Database (Algorithm Encyclopedia)
const WIKI_DATA = {
    "ExamSyllabus": {
        "title": "👑 能力鑑定考綱重點",
        "summary": "整理 AI 應用規劃師「初級」與「中級」各考科評鑑大綱重點與科目權重，方便考生隨時查閱與定位學習進度。",
        "content": `<h3>💡 AI 應用規劃師能力鑑定：官方評鑑大綱與重點模組</h3>

<div style="background-color: var(--card-bg); border-left: 4px solid var(--primary); padding: 0.8rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top:0; color:var(--primary); font-size:1.05rem; font-weight:bold;">🎒 【初級】考試科目與學習重點</h4>
    <ul style="margin-bottom:0; padding-left:1.2rem; font-size:0.92rem; list-style-type:square;">
        <li style="margin-bottom:0.4rem;"><b>科目一：人工智慧基礎概論</b> (佔比 100%)
            <ul style="list-style-type:circle; padding-left:1.2rem; margin-top:0.25rem;">
                <li>人工智慧概念：模擬人類智慧、分析型 AI 與生成型 AI 的特性及演進。</li>
                <li>資料處理與分析：資料清理、特徵表示與統計指標基本功。</li>
                <li>機器學習概念：監督式、非監督式與強化學習之基本定義與辨識。</li>
                <li>鑑別式與生成式 AI 整合：理解大型語言模型 (LLM) 與預訓練概念。</li>
            </ul>
        </li>
        <li style="margin-bottom:0.2rem;"><b>科目二：生成式 AI 應用與規劃</b> (佔比 100%)
            <ul style="list-style-type:circle; padding-left:1.2rem; margin-top:0.25rem;">
                <li>生成式 AI 工具應用：提示詞工程 (Prompt Engineering)、影音與文字生成。</li>
                <li>企業 AI 導入與規劃：評估業務情境、選擇工具、設計工作流與效益評估。</li>
                <li>AI 工具的風險管理：生成內容幻覺、智慧財產權與資訊安全風險。</li>
            </ul>
        </li>
    </ul>
</div>

<div style="background-color: var(--card-bg); border-left: 4px solid var(--success); padding: 0.8rem 1.25rem; margin-bottom: 1.5rem; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top:0; color:var(--success); font-size:1.05rem; font-weight:bold;">🎓 【中級】考試科目與官方評鑑單元大綱</h4>
    
    <h5 style="margin:0.8rem 0 0.4rem 0; color:var(--text-primary); font-size:0.95rem; font-weight:bold;">🏆 科目一：人工智慧技術應用與規劃 (L21)</h5>
    <ul style="margin-bottom:0.6rem; padding-left:1.2rem; font-size:0.92rem; list-style-type:disc;">
        <li><b>L211 AI 相關技術應用：</b>
            <ul>
                <li>L21101 自然語言處理技術與應用 (NLP, 文本標記, 情感分析, Word2Vec)</li>
                <li>L21102 電腦視覺技術與應用 (CV, 邊緣檢測, 卷積, 影像增強)</li>
                <li>L21103 生成式 AI 技術與應用 (GenAI, 提示詞工程, 模型微調 LLM)</li>
                <li>L21104 多模態人工智慧應用 (Multimodal, 跨模態對齊與感知整合)</li>
            </ul>
        </li>
        <li><b>L212 AI 導入評估規劃：</b>
            <ul>
                <li>L21201 AI 導入評估 (評估業務痛點、可行性與 ROI)</li>
                <li>L21202 AI 導入規劃 (跨部門團隊整合、產品生命週期優化)</li>
                <li>L21203 AI 風險管理 (模型幻覺、演算法偏見、數據洩漏防護)</li>
            </ul>
        </li>
        <li><b>L213 AI 技術應用與系統部署：</b>
            <ul>
                <li>L21301 數據準備與模型選擇 (數據標註、冷啟動、開源模型選擇)</li>
                <li>L21302 AI 技術系統集成與部署 (API 集成、CI/CD 部署、邊緣計算部署)</li>
            </ul>
        </li>
    </ul>

    <h5 style="margin:0.8rem 0 0.4rem 0; color:var(--text-primary); font-size:0.95rem; font-weight:bold;">🏆 科目二：大數據處理分析與應用 (L22)</h5>
    <ul style="margin-bottom:0.6rem; padding-left:1.2rem; font-size:0.92rem; list-style-type:disc;">
        <li><b>L221 機率統計基礎：</b>
            <ul>
                <li>L22101 敘述性統計與資料摘要技術 (中位數、集中趨勢、標準差)</li>
                <li>L22102 機率分佈與資料分佈模型 (常態分佈、二項分佈、偏態)</li>
                <li>L22103 假設檢定與統計推論 (顯著水準, p-value, A/B Test 統計基礎)</li>
            </ul>
        </li>
        <li><b>L222 大數據處理技術：</b>
            <ul>
                <li>L22201 數據收集與清理 (缺失值插補、離群值檢測、ETL 管道)</li>
                <li>L22202 數據儲存與管理 (關係型資料庫 vs NoSQL、資料湖、資料倉庫架構)</li>
                <li>L22203 數據處理技術與工具 (Hadoop 運算、MapReduce、Spark 分散式內存運算)</li>
            </ul>
        </li>
        <li><b>L223 大數據分析方法與工具：</b>
            <ul>
                <li>L22301 統計學在大數據中的應用 (相關分析、預測建模)</li>
                <li>L22302 常見的大數據分析方法 (時間序列分析、網絡分析)</li>
                <li>L22303 數據可視化工具 (箱型圖、散佈圖、熱力圖設計)</li>
            </ul>
        </li>
        <li><b>L224 大數據在人工智慧之應用：</b>
            <ul>
                <li>L22401 大數據與機器學習、L22402 大數據在鑑別式 AI 的應用</li>
                <li>L22403 大數據在生成式 AI 的應用、L22404 大數據隱私保護與個資合規 (PDPA, GDPR)</li>
            </ul>
        </li>
    </ul>

    <h5 style="margin:0.8rem 0 0.4rem 0; color:var(--text-primary); font-size:0.95rem; font-weight:bold;">🏆 科目三：機器學習技術與應用 (L23)</h5>
    <ul style="margin-bottom:0; padding-left:1.2rem; font-size:0.92rem; list-style-type:disc;">
        <li><b>L231 機器學習數學與優化基礎：</b>
            <ul>
                <li>3.1 機率與統計之機器學習應用、3.2 線性代數應用 (SVD、矩陣特徵值分解)</li>
                <li>3.3 數值優化技術與方法 (梯度下降優化、NMF 非負矩陣分解)</li>
            </ul>
        </li>
        <li><b>L232 機器學習與深度學習核心技術：</b>
            <ul>
                <li>4.1 機器學習原理與技術、4.2 常見 ML 演算法 (KNN, SVM, 決策樹, 隨機森林, 提升樹)</li>
                <li>4.3 深度學習原理與框架 (CNN 空間特徵、RNN/LSTM 時間序列、Transformer 注意力機制)</li>
            </ul>
        </li>
        <li><b>L233 機器學習建模與實務流程：</b>
            <ul>
                <li>5.1 數據準備與特徵工程 (One-Hot 編碼, 特徵標準化, PCA 降維)</li>
                <li>5.2 模型選擇與架構設計、5.3 模型訓練、評估與驗證 (交叉驗證, ROC-AUC, 混淆矩陣)</li>
                <li>5.4 模型調整與優化 (超參數網格搜尋, 防止過擬合 regularization)</li>
            </ul>
        </li>
        <li><b>L234 機器學習倫理與合規：</b>
            <ul>
                <li>6.1 數據隱私、安全與合規、6.2 演算法偏見與公平性 (可解釋性 AI, 演算法道德審查)</li>
            </ul>
        </li>
    </ul>
</div>`
    },
    "NLP": {
        "title": "📚 [理論] 自然語言處理技術 (NLP)",
        "summary": "自然語言處理是 AI 理解、分析與生成人類語言的核心技術，涵蓋斷詞、NER、語意向量與 Word2Vec 詞嵌入等重要理論。",
        "content": `<h3>一、 文本清理與文字標記</h3>
<p>無結構文字在輸入模型前需要經過清洗。<b>命名實體識別 (Named Entity Recognition, NER)</b> 用於自動定位文本中的關鍵實體（如人名、機構名、地名）；<b>詞性標記 (POS Tagging)</b> 則為每個詞標上名詞、動詞等語法屬性，是理解句法結構的基石。</p>

<h3>二、 語意向量與 Word Embedding (詞嵌入)</h3>
<p>電腦無法直接理解文字，必須將詞彙映射為低維稠密空間的連續實數向量，這稱為 <b>Word Embedding</b>。相較於稀疏的 One-Hot 編碼，詞嵌入向量能藉由空間距離（如餘弦相似度）保留詞彙間的語意相似性（例如『貓』與『狗』的向量距離比『貓』與『桌子』更近）。</p>

<h3>三、 Word2Vec 的兩大核心理論架構</h3>
<p>Word2Vec 是機器學習生成詞向量的最經典模型，包含兩種訓練架構：</p>
<ul>
    <li><b>CBOW (Continuous Bag-of-Words) 架構：</b>
        <p>利用目標詞周圍的<b>上下文詞預測目標詞本身</b>。適合在數據量較小、計算資源有限時使用，運算速度極快。</p>
    </li>
    <li><b>Skip-gram 架構：</b>
        <p>利用<b>中心目標詞預測周邊的上下文詞</b>。在處理海量語料時表現更為優越，且對於低頻詞（罕見詞）的語意特徵捕捉更為細緻準確。</p>
    </li>
</ul>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 1 題 (Sentiment Analysis)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 4 題 (Word Embedding (GloVe vs Word2Vec))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 5 題 (TF-IDF)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 16 題 (Seq2Seq Model)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 17 題 (Retrieval-Augmented Generation (...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 19 題 (Back-Translation (Data Augmentat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 20); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 20 題 (Generative Adversarial Network (...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 33); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 33 題 (Word2Vec (Skip-gram 架構))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 40 題 (生成式 AI 模型架構 (VAE, GAN, Diffusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 43 題 (生成式與鑑別式模型比較 (Generative vs Discr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 44 題 (深度生成模型 (Deep Generative Models, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 47 題 (多任務學習與損失平衡 (Multi-Task Learning ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 49); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 49 題 (AI 偏誤與資料代表性 (AI Bias and Data Re...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 50 題 (多模態對齊與生成缺陷 (Cross-modal Alignmen...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 1 題 (Part-of-Speech Tagging (POS Tagg...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 3 題 (Word2Vec (CBOW vs Skip-gram))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 5 題 (Word Embedding (Word2Vec))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 29); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 29 題 (Grad-CAM (Gradient-weighted Clas...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 35 題 (特徵融合 (Feature Fusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 45 題 (斷路器模式 (Circuit Breaker Pattern))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 6 題 (t-SNE 與 PCA 降維演算法)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 8); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 8 題 (Wide & Deep Learning)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 10 題 (Variational Autoencoder (VAE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 11 題 (自然語言推論 (Natural Language Inferen...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 21); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 21 題 (擴散模型 (Diffusion Model))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 42 題 (檢索增強生成中的增量索引管理（Incremental Index...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 47 題 (結構化預測（Structured Prediction）)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 6 題 (AI 生成內容出處證明與水印技術 (AI-Generated C...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 10 題 (知識蒸餾 (Knowledge Distillation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 12 題 (模型上下文協議與檢索增強生成定位對比 (Model Contex...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 13 題 (文本分塊技術 (Text Chunking Technology...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 18 題 (代碼生成自迴歸語言模型 (Autoregressive Lang...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 19 題 (AI 生成程式碼安全生命週期管理 (Lifecycle Mana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 23 題 (鑑別式機器學習與生成式人工智慧 (Discriminative ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 24 題 (人工智慧系統總體擁有成本與財務評估 (Total Cost of...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 26 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 31 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 35 題 (Transformer 模型架構變體 (Transformer ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 37 題 (檢索增強生成與提示詞工程協同 (RAG & Prompt Eng...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 3 題 (電腦視覺與工業瑕疵檢測 (Computer Vision and...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 27 題 (自編碼器 (Autoencoder, AE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 30 題 (顯著性圖 (Saliency Map))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 39 題 (條件隨機場 (Conditional Random Field,...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 40 題 (生成對抗網路 (Generative Adversarial N...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 49); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 49 題 (對抗訓練與生成式數據增強 (Adversarial Traini...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 50 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 1 題 (檢檢索增強生成 (Retrieval-Augmented Gen...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 4 題 (分詞機制與上下文限制 (Tokenization and Con...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 17 題 (法律文本生成與語意分析 (Legal Text Generati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 19 題 (檢索增強生成架構與生成式 AI 的範疇 (RAG Archite...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 21); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 21 題 (生成式影像編輯技術之範疇 (Scope of Generativ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 24 題 (AI 代理特性與單純文本生成之對比 (AI Agent Char...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 31 題 (多模態生成式 AI 工具鏈 (Multimodal Genera...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 32 題 (程式碼生成模型 (Code Generation Models))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 36 題 (代理人任務規劃 (Agent Task Planning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 37 題 (函數呼叫機制 (Function Calling / Tool ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 47 題 (總擁有成本與效益分析法 (Total Cost of Owner...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 48); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 48 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "ComputerVision": {
        "title": "📚 [理論] 電腦視覺與卷積網路 (CV)",
        "summary": "電腦視覺利用影像預處理與卷積網路 (CNN) 實現平移不變性、特徵提取與空間維度縮減，為視覺模型之核心。",
        "content": `<h3>一、 影像表示與預處理</h3>
<p>彩色影像在電腦中由 RGB 三通道矩陣表示。預處理技術包括灰階化（降低計算維度）、二值化與影像增強（如隨機裁切、旋轉、對比度調整），後者能顯著擴大訓練樣本數，提升模型的泛化能力並防止過擬合。</p>

<h3>二、 卷積神經網路 (CNN) 核心理論</h3>
<p>CNN 是專為網格結構數據（如二維影像）設計的深度神經網路結構，包含三大核心機制：</p>
<ol>
    <li><b>卷積層 (Convolutional Layer) 與卷積核 (Kernel)：</b>
        <p>使用多個局部卷積核在影像上滑動進行點積運算，自動抓取影像的局部特徵（如邊緣、紋理、輪廓）。具備『局部接收野 (Local Receptive Fields)』與『參數共享 (Weight Sharing)』特性，極大降低了參數規模。</p>
    </li>
    <li><b>激活層 (Activation Layer)：</b>
        <p>通常使用 <b>ReLU (Rectified Linear Unit)</b> 作為激活函數（\\(f(x)=\\max(0, x)\\\)，用以引入非線性表達力，並能有效減緩梯度消失問題。</p>
    </li>
    <li><b>池化層 (Pooling Layer，下採樣)：</b>
        <p>用於降低特徵圖的空間解析度，保留最重要特徵並減少參數量，能實現影像特徵的<b>平移不變性 (Translation Invariance)</b>。</p>
        <ul>
            <li><b>Max-Pooling (最大池化)：</b>只保留局部鄰域內的最大值，傾向提取最顯著的邊緣與特徵細節（最常用）。</li>
            <li><b>Average-Pooling (平均池化)：</b>計算鄰域平均值，特徵保留較為平滑，常用於模型深層的全局池化。</li>
        </ul>
    </li>
</ol>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 2); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 2 題 (Transformer)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 8); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 8 題 (Softmax and Max-Pooling)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 34 題 (全景分割 (Panoptic Segmentation))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 5 題 (卷積神經網路 (CNN) 的卷積層)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 6 題 (參數共享與區域感知 (Parameter Sharing & L...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 7 題 (長短期記憶網路 (LSTM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 27 題 (激活函數 (Activation Function))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 42 題 (卷積神經網路參數量分析 (CNN Parameter Distr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 43 題 (卷積層運算複雜度 (Convolutional FLOPs))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 44 題 (VGG 架構與記憶體估算 (VGG Architecture &...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 45 題 (遷移學習與參數凍結 (Transfer Learning & F...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 47 題 (K-近鄰演算法與交叉驗證 (KNN & Cross-Valida...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 10 題 (Object Detection (YOLO vs Faster...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 11 題 (Self-Attention Mechanism)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 17 題 (Multi-Modal Architecture Selection)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 19 題 (Offline vs Online Evaluation Met...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 29); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 29 題 (Grad-CAM (Gradient-weighted Clas...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 30 題 (主成分分析 (Principal Component Analy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 32 題 (神經網路展平操作 (Flatten in Neural Netw...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 36 題 (遷移學習 (Transfer Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 41); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 41 題 (動態批次推論與GPU排程 (Dynamic Batching &...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 46 題 (聯邦學習 (Federated Learning))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 4 題 (資料擴增 (Data Augmentation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 16 題 (XGBoost (Extreme Gradient Boosting))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 17 題 (殘差網路 (Residual Network, ResNet))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 18 題 (池化層 (Pooling Layer))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 20); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 20 題 (Softmax 函數與交叉熵 (Cross-Entropy))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 23 題 (自迴歸語言模型 (Autoregressive Language...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 45 題 (Stratified K-Fold Cross-Validation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 47 題 (Convolutional Neural Networks (B...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 12 題 (大型語言模型 (Large Language Model, LLM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 38 題 (電腦視覺（Computer Vision）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 48); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 48 題 (卷積神經網路（Convolutional Neural Netw...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 5 題 (基於 Transformer 架構的自迴歸模型 (Transfo...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 3 題 (電腦視覺與工業瑕疵檢測 (Computer Vision and...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 25); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 25 題 (長短期記憶網路與長程時序建模 (Long Short-Term ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 27 題 (自編碼器 (Autoencoder, AE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 33); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 33 題 (稀疏專家混合架構 (Sparse Mixture-of-Expe...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 36 題 (優化器 (Optimizer))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 37 題 (顯著性圖 / 類別激活映射 (Saliency Map / Gr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 40 題 (生成對抗網路 (Generative Adversarial N...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 41); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 41 題 (支援向量機 (Support Vector Machine, SVM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 45 題 (卷積神經網路 (Convolutional Neural Net...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "BigDataTech": {
        "title": "📚 [理論] 大數據處理與分散式運算",
        "summary": "大數據技術旨在解決海量數據的收集、清洗與儲存，並藉由 Hadoop MapReduce 與 Spark 記憶體運算實作分散式分析。",
        "content": `<h3>一、 Hadoop MapReduce 分散式運算</h3>
<p>MapReduce 是 Hadoop 框架的核心計算組件，將任務拆分為兩個核心步驟：</p>
<ul>
    <li><b>Map 階段：</b>將大任務拆分為若干小任務，分配給多台工作節點並行處理，輸出鍵值對 (Key-Value Pairs)。</li>
    <li><b>Reduce 階段：</b>對 Map 輸出的中間結果按 Key 進行聚合、洗牌 (Shuffle) 與整理，得出最後結果。</li>
    <li><b>限制：</b>運算過程高度依賴磁碟 I/O，每一步計算都需要將中間結果寫回磁碟，不適合需要頻繁反覆迭代的機器學習任務。</li>
</ul>

<h3>二、 Apache Spark 內存 (Memory) 運算</h3>
<p>為了克服 MapReduce 頻繁讀寫磁碟的效能瓶頸，Spark 引入了 <b>RDD (Resilient Distributed Dataset)</b> 架構，實作了<b>記憶體內運算 (In-Memory Computing)</b>。Spark 將數據暫存在內存中，減少磁碟寫入次數，使其執行機器學習與疊代算法（如邏輯迴歸、K-means）的效能比 MapReduce 快上 10 到 100 倍。</p>

<h3>三、 資料湖 (Data Lake) 與 資料倉庫 (Data Warehouse) 治理</h3>
<ul>
    <li><b>資料倉庫 (Data Warehouse)：</b>只儲存高度結構化、清洗完畢的業務指標數據，依據特定的 Schema (綱要) 組織，主要供 BI 工具與分析師查詢。</li>
    <li><b>資料湖 (Data Lake)：</b>儲存無結構化、半結構化（如 JSON、日誌）及結構化的原始海量數據。資料湖實施 <b>Schema-on-Read</b>（讀取時再定義 Schema），若缺乏有效的中繼數據 (Metadata) 治理與數據去識別合規管控，資料湖極易堆積髒數據，退化為無法使用的<b>『資料沼澤 (Data Swamp)』</b>。</li>
</ul>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 37 題 (批次大小調整 (Batch Size Tuning) 與分散式訓練)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 39 題 (資料湖與資料倉儲架構 (Data Lake & Data War...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 45 題 (斷路器模式 (Circuit Breaker Pattern))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 36 題 (Homomorphic Encryption)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 34 題 (自動化機器學習（Automated Machine Learni...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 35 題 (隱私保護去識別化（De-identification for P...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 32 題 (自動化機器學習與低代碼建模 (AutoML & Low-Code...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 39 題 (資料去識別化與隱私保護 (Data De-identificat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 42 題 (同態加密 (Homomorphic Encryption))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 1 題 (情感分析與關鍵詞提取 (Sentiment Analysis a...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 17 題 (數據假名化與 Linkability 隱私保護 (Data Ps...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 35 題 (多代理狀態同步與協作 (Multi-Agent State Sy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 44 題 (生成式 AI 之資料隱私與隔離架構 (Data Privacy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 46 題 (差分隱私 (Differential Privacy))</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "DescriptiveStats": {
        "title": "📚 [理論] 敘述性統計與假設檢定",
        "summary": "敘述性統計旨在度量數據的集中趨勢與分散性，假設檢定則藉由顯著水準與 p-value 進行統計推論（如 A/B 測試）。",
        "content": `<h3>一、 集中趨勢度量：平均數 vs 中位數的抗偏性</h3>
<p>當數據中存在極端值（離群值，Outliers）或呈現嚴重偏態分佈（如薪資結構）時，<b>平均數 (Mean)</b> 易受極端值拉扯，無法客觀代表集中趨勢。此時，使用<b>中位數 (Median)</b> 最具備「抗偏性 (Robustness)」，能更真實反映整體數據的中心水準。</p>

<h3>二、 數據離散度：標準差 (Standard Deviation)</h3>
<p>標準差衡量資料偏離平均值的離散程度。標準差越小代表數據點越集中，標準差越大代表數據波動幅度越大。在常態分佈下，約有 68% 的資料會落在正負一個標準差之間，95% 會落在正負兩個標準差之間。</p>

<h3>三、 假設檢定的三大核心理論</h3>
<p>假設檢定是用樣本數據來判斷母體特徵的一種推論方法，廣泛應用於產品的 A/B 測試：</p>
<ol>
    <li><b>虛無假設 (Null Hypothesis, \\(H_0\\)) vs 對立假設 (\\(H_1\\))：</b>
        <p>虛無假設通常指『沒有顯著差異』或『效應不存在』，對立假設則是研究者希望證實的『存在差異/效應』。</p>
    </li>
    <li><b>顯著水準 (Alpha, \\(\\alpha\\))：</b>
        <p>研究者願意承擔的第一型錯誤機率（即拒絕了真實虛無假設的風險），實務上通常設定為 <b>0.05 (5%)</b>。</p>
    </li>
    <li><b>p-value (概似值 / 顯著性值)：</b>
        <p>在虛無假設 \\(H_0\\) 為真之前提下，觀察到當前樣本結果或更極端結果的機率。
            <ul>
                <li>若 <b>\\(p\\text{-value} < \\alpha\\)</b> (如 < 0.05)：代表觀測到的差異極難由隨機偶然所解釋，因此<b>拒絕虛無假設</b>，接受對立假設，差異具有顯著性。</li>
                <li>若 <b>\\(p\\text{-value} \\ge \\alpha\\)</b>：接受（無法拒絕）虛無假設。</li>
            </ul>
        </p>
    </li>
</ol>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 7 題 (Object Detection (IoU / mAP))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 10 題 (F1 Score)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 11 題 (DBSCAN)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 1 題 (交叉驗證 (Cross-Validation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 4 題 (DBSCAN 群集分析 (Density-Based Clust...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 7 題 (長短期記憶網路 (LSTM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 22); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 22 題 (貝氏定理與單純貝氏分類 (Bayes' Theorem & Na...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 23 題 (蒙地卡羅方法 (Monte Carlo Method))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 38 題 (均方誤差 (Mean Squared Error, MSE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 48); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 48 題 (資料標準化 / 特徵縮放 (Standardization / ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 36 題 (遷移學習 (Transfer Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 38 題 (離群值處理 (Outlier Handling))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 2); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 2 題 (均方誤差 (Mean Squared Error, MSE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 15 題 (K-means 分群演算法 (K-means Clustering))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 32 題 (F1-score / Harmonic Mean)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 46 題 (Data Preprocessing (Min-Max Scal...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 4 題 (Outlier Handling / Data Preproce...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 6 題 (Feature Scaling (Standardization...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 16 題 (敘述性統計 (Descriptive Statistics) /...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 18 題 (二分搜尋演算法 (Binary Search Algorithm))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 19 題 (強化式學習 (Reinforcement Learning) /...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 40 題 (類別不平衡評估指標 F1-score（F1-score for ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 44 題 (對數轉換（Log Transformation）)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 2); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 2 題 (機器學習範式分類 (Machine Learning Parad...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 18 題 (時序數據清洗與線性插補 (Time Series Data Cl...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 23 題 (迴歸模型評估與均方誤差 (Regression Model Ev...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "MatrixMath": {
        "title": "📚 [理論] 線性代數與數值優化",
        "summary": "線性代數與優化是機器學習的基石，涵蓋降維推薦的 SVD 奇異值分解、非負約束的 NMF 矩陣分解與梯度下降法。",
        "content": `<h3>一、 奇異值分解 (SVD，Singular Value Decomposition)</h3>
<p>SVD 是線性代數中將任意實矩陣 \\(A\\) 分解為三個矩陣相乘的強大工具：\\(A = U \\Sigma V^T\\)。其中 \\(\\Sigma\\) 是一個對角矩陣，其對角線元素稱為奇異值（代表不同投影特徵軸的強度分佈）。SVD 常用於圖像壓縮、低秩近似，以及<b>推薦系統中的協同過濾 (Collaborative Filtering)</b>，將複雜的使用者-商品評分矩陣降維分解為潛在特徵向量。</p>

<h3>二、 非負矩陣分解 (NMF，Non-negative Matrix Factorization)</h3>
<p>NMF 限制矩陣分解後的所有元素都必須<b>非負</b>（即 \\(V \\approx WH\\，且 \\(W, H \\ge 0\\)）。此非負約束在物理上具有極佳的可解釋性，使得 NMF 具備『部分構成整體』的疊加特性，避免了 PCA 或 SVD 出現負權重難以解釋的限制。NMF 廣泛應用於<b>文本主題建模 (Topic Modeling)</b> 及人臉圖像特徵的局部提取。</p>

<h3>三、 梯度下降優化 (Gradient Descent)</h3>
<p>梯度下降是尋找損失函數極小值的一階數值優化演算法：</p>
<ol>
    <li>計算當前參數點損失函數的<b>梯度 (Gradient)</b>（即損失函數上升最快的方向）。</li>
    <li>沿著梯度的<b>反方向</b>更新參數：\\( \\theta_{\\text{new}} = \\theta_{\\text{old}} - \\eta \\nabla L(\\theta) \\)，其中 \\(\\eta\\) 為<b>學習率 (Learning Rate)</b>。</li>
    <li>若學習率設定過大，會導致更新在谷底兩側震盪甚至發散；學習率過小則會導致模型收斂速度極慢。</li>
</ol>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 4 題 (Word Embedding (GloVe vs Word2Vec))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 47 題 (多任務學習與損失平衡 (Multi-Task Learning ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 12 題 (學習率 (Learning Rate))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 35 題 (主成分分析 (Principal Component Analy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 40 題 (向量內積 (Dot Product))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 30 題 (主成分分析 (Principal Component Analy...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 1 題 (蒙地卡羅方法 (Monte Carlo Method))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 11 題 (小批次梯度下降 (Mini-batch Gradient Des...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 21); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 21 題 (模型量化 (Model Quantization))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 46 題 (Data Preprocessing (Min-Max Scal...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 2); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 2 題 (低秩適配 (Low-Rank Adaptation, LoRA))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 50 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "RLDQN": {
        "title": "📚 [理論] 強化學習與深度 Q 網路 (DQN)",
        "summary": "強化學習基於試誤與回饋機制，Q-learning 利用 Q-Table 疊代計算；DQN 則引入神經網路克服狀態爆炸之維度災難。",
        "content": `<h3>一、 強化學習基本理論</h3>
<p>強化學習 (RL) 是代理人（Agent）在環境（Environment）中進行決策，藉由與環境互動執行的 Action 與狀態 State 的移轉，獲得環境返回的 Reward (獎懲分數)，藉以學習出能最大化長期累積回報的最佳 <b>Policy (策略，記為 \\(\\pi\\))</b>。</p>

<h3>二、 探索與利用 (Exploration vs Exploitation)</h3>
<p>強化學習面臨的核心難題是平衡探索與利用。通常採用 <b>\\(\\epsilon\\)-Greedy (貪婪策略)</b>：以 \\(1-\\epsilon\\) 的高機率去『利用』目前已知的最優動作，以 \\(\\epsilon\\) 的小機率去『探索』未知的動作。隨著訓練的推進，\\(\\epsilon\\)應逐漸衰減，使策略趨於收斂。</p>

<h3>三、 傳統 Q-learning 與 DQN (深度 Q 網路) 的演化</h3>
<ul>
    <li><b>Q-learning 的 Q-Table 表格侷限：</b>
        <p>傳統 Q-learning 維護一個二維表格來儲存所有狀態-動作對的 Q 值。當環境的狀態空間或動作空間極為複雜（如圍棋、自駕影像畫面）時，Q 表格的大小會呈指數級暴增，遭遇<b>維度災難（Curse of Dimensionality，或稱狀態空間爆炸）</b>，模型完全無法收斂。</p>
    </li>
    <li><b>DQN 神經網路優化：</b>
        <p>DQN 採用<b>深度神經網路作為 Q 函數的近似器 (Function Approximator)</b>。它不維護表格，而是將當前狀態（如遊戲畫面像素）輸入神經網路，直接輸出每個動作對應的估算 Q值。DQN 利用了深度學習的特徵提取優勢，成功讓強化學習能應對高維度、連續的複雜現實環境。</p>
    </li>
</ul>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 3 題 (Masked Language Model (MLM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 9 題 (Data Augmentation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 14 題 (Cross-Validation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 18 題 (Attention Mechanism (Sparsity))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 21); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 21 題 (Multimodal AI (Modality Robustness))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 23 題 (Phased Rollout / Canary Deployment)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 24 題 (Adversarial Attacks and Defenses)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 25); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 25 題 (AI Data Governance / Copyright P...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 27 題 (時序特徵工程與時間窗口聚合)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 33); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 33 題 (Word2Vec (Skip-gram 架構))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 40 題 (生成式 AI 模型架構 (VAE, GAN, Diffusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 42 題 (分佈外偵測 (OOD Detection) 與潛在空間監控)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 44 題 (深度生成模型 (Deep Generative Models, ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 19 題 (不平衡資料集處理 (Imbalanced Data Handling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 22); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 22 題 (貝氏定理與單純貝氏分類 (Bayes' Theorem & Na...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 26 題 (過擬合防止與正則化 (Overfitting Prevention))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 29); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 29 題 (概念飄移適應與滑動視窗驗證 (Concept Drift & R...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 31 題 (早期停止 (Early Stopping))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 43 題 (卷積層運算複雜度 (Convolutional FLOPs))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 3 題 (Word2Vec (CBOW vs Skip-gram))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 14 題 (Parameter-Efficient Fine-Tuning ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 15 題 (Multi-Agent System (Orchestratio...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 16 題 (ReAct Framework (Reasoning and A...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 35 題 (特徵融合 (Feature Fusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 36 題 (遷移學習 (Transfer Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 38 題 (離群值處理 (Outlier Handling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 43 題 (金絲雀發布 (Canary Release / Canary D...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 47 題 (漸進式部署與效能調優 (Phased Rollout & Per...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 50 題 (晚期融合 (Late Fusion))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 4 題 (資料擴增 (Data Augmentation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 11 題 (小批次梯度下降 (Mini-batch Gradient Des...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 13 題 (L2 正則化 (L2 Regularization / Weig...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 27 題 (Rolling Window Validation (Time ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 28 題 (Random Forest Regression)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 31 題 (Reward Shaping (Reinforcement Le...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 35 題 (LoRA (Low-Rank Adaptation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 39 題 (In-processing Fairness / Adversa...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 42 題 (Transfer Learning: Feature Extra...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 19 題 (強化式學習 (Reinforcement Learning) /...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 24 題 (基於人類反饋的強化學習 (Reinforcement Learn...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 39 題 (非監督式學習（Unsupervised Learning）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 43 題 (機器學習學習模式分類（Classification of Mac...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 45 題 (啟動函數優化與梯度消失解決方案（Activation Funct...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 1 題 (資料偏差緩解與樣本代表性分析 (Data Bias Mitiga...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 7 題 (低程式碼平台的企業級資料治理與安全管控 (Enterprise ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 12 題 (模型上下文協議與檢索增強生成定位對比 (Model Contex...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 15 題 (情境感知代理設計與狀態管理 (Context-aware Age...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 16 題 (解決方案圖譜與代理任務規劃 (Solution Graph an...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 19 題 (AI 生成程式碼安全生命週期管理 (Lifecycle Mana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 21); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 21 題 (AI 代理開發框架與工具集成 (AI Agent Develop...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 36 題 (圖形提示工程 (Graph Prompting))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 37 題 (檢索增強生成與提示詞工程協同 (RAG & Prompt Eng...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 39 題 (資料去識別化與隱私保護 (Data De-identificat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 40 題 (強化學習微調與對齊 (Reinforcement Fine-Tu...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 45 題 (思維鏈提示工程 (Chain of Thought Prompt...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 46 題 (金融級安全部署與模型自主權 (Enterprise-grade ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 50 題 (人機協同與輸出審查機制 (Human-in-the-Loop &...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 2); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 2 題 (機器學習範式分類 (Machine Learning Parad...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 22); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 22 題 (無監督聚類與機器學習範式辨析 (Unsupervised Clu...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 24 題 (探索與利用的權衡 (Exploration vs. Exploi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 26 題 (半監督式學習 (Semi-supervised Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 29); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 29 題 (群體相對策略優化 (Group Relative Policy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 38 題 (半監督異常偵測 / 單類別分類 (Semi-supervised...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 46 題 (代理人技能發現與學習 (Agent Skill Discover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 47 題 (模式崩潰 (Mode Collapse))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 9 題 (無程式碼工作流編排 (No-Code Workflow Orch...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 13 題 (Vibe Coding 與低程式碼開發的對比 (Vibe Cod...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 14 題 (主動型 AI 編程代理與自主執行 (Agentic Coding...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 15 題 (強化微調與監督式微調的對比 (Reinforcement Fin...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 16 題 (AI 代理的主動決策與適應性 (AI Agent Autonom...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 24 題 (AI 代理特性與單純文本生成之對比 (AI Agent Char...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 25); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 25 題 (ReAct 代理架構之適用場景 (ReAct Agent Fra...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 28 題 (提示詞注入防護 (Prompt Injection Defense))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 30 題 (強化學習回饋優化 (Reinforcement Learning...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 35 題 (多代理狀態同步與協作 (Multi-Agent State Sy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 36 題 (代理人任務規劃 (Agent Task Planning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 40 題 (解決方案圖譜規劃 (Solution Graph Planning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 41); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 41 題 (語言模型引導之圖譜建構 (Language Model-guid...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 44 題 (生成式 AI 之資料隱私與隔離架構 (Data Privacy ...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "AILegalEthics": {
        "title": "📚 [理論] 個資保護法與 AI 倫理 (XAI)",
        "summary": "AI 倫理探討去識別化合規性、演算法偏見與可解釋性 AI (XAI) 技術（如 LIME 與 SHAP）之應用。",
        "content": `<h3>一、 個人資料保護法 (PDPA) 與數據合規</h3>
<p>在訓練 AI 模型收集大數據時，必須符合個資法規（如 PDPA、歐盟 GDPR）：</p>
<ul>
    <li><b>匿名化 (Anonymization)：</b>指透過加密、雜湊或去特徵化，使數據<b>『完全且不可逆地』</b>無法關聯至特定自然人。<b>匿名化後的數據不再受到個資法的約束</b>，可安全用於模型訓練。</li>
    <li><b>假名化 (Pseudonymization)：</b>指使用代號代替個人特徵，但保留了可透過額外資訊還原、重新關聯至個人的可能性。假名化數據在法律上<b>依然被視為個人資料</b>，必須受到個資法保護。</li>
</ul>

<h3>二、 演算法偏見與公平性 (Fairness)</h3>
<p>模型若在歷史偏見數據上訓練，會學習並放大偏見（例如貸款審核模型對特定性別或地區產生歧視）。我們可透過 **Demographic Parity**（各群組獲准率一致）或 **Equalized Odds**（各群組偽陽率與真陽率一致）等公平性量化指標，在建模前對數據進行偏差修正，並在建模後對演算法進行公平性指標審查。</p>

<h3>三、 可解釋性人工智慧 (XAI，Explainable AI)</h3>
<p>傳統深層神經網路或 Boosting 樹模型常被視為無法理解內部決策邏輯的『黑盒子 (Black Box)』。為了解決信任度與法規審查問題，XAI 提供了解密決策歸因的手段，核心技術包括：</p>
<ol>
    <li><b>LIME (Local Interpretable Model-agnostic Explanations)：</b>
        <p>在局部區域對特徵進行擾動，建立一個簡單的線性代理模型，藉以解釋某個特定樣本被分類的局部原因。</p>
    </li>
    <li><b>SHAP (SHapley Additive exPlanations)：</b>
        <p>基於合作博弈論的 Shapley Value，公平分配每個特徵對模型最終預測結果的邊際貢獻度，具有嚴緊的數學公理基礎，廣泛應用於金融風險評估與醫療決策。</p>
    </li>
</ol>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 20); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 20 題 (Generative Adversarial Network (...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 48); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 48 題 (DBSCAN 與空間索引優化 (KD-Tree/Ball Tree))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 49); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 49 題 (AI 偏誤與資料代表性 (AI Bias and Data Re...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 13 題 (標籤偏差 (Label Bias))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 14 題 (可解釋人工智慧 (Explainable AI, XAI))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 25); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 25 題 (信用評分卡模型 (Credit Scorecard Modeling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 39 題 (隨機失活 (Dropout))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 24 題 (Latency Testing in ML Deployments)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 26 題 (可解釋性人工智慧 (Explainable AI, XAI))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 28 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 29); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 29 題 (Grad-CAM (Gradient-weighted Clas...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 7 題 (L1 正則化 (L1 Regularization / Lasso))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 31 題 (Reward Shaping (Reinforcement Le...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 36 題 (Homomorphic Encryption)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 37 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 38 題 (Algorithmic Fairness (Statistica...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 39 題 (In-processing Fairness / Adversa...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 44 題 (Data Leakage / Cross-Validation ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 47 題 (Convolutional Neural Networks (B...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 13 題 (可解釋性 AI 與模型透明度 (Explainable AI, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 26 題 (局部可解釋模型無關解釋（Local Interpretable ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 27 題 (沙普利加性解釋（SHapley Additive exPlana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 28 題 (反事實解釋（Counterfactual Explanation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 34 題 (自動化機器學習（Automated Machine Learni...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 35 題 (隱私保護去識別化（De-identification for P...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 42 題 (檢索增強生成中的增量索引管理（Incremental Index...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 1 題 (資料偏差緩解與樣本代表性分析 (Data Bias Mitiga...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 39 題 (資料去識別化與隱私保護 (Data De-identificat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 41); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 41 題 (偏見檢測與公平性評估 (Bias Detection & Fai...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 42 題 (同態加密 (Homomorphic Encryption))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 50 題 (人機協同與輸出審查機制 (Human-in-the-Loop &...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 1 題 (情感分析與關鍵詞提取 (Sentiment Analysis a...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 5 題 (演算法公平性評估與可解釋性 AI (Algorithmic Fa...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 6 題 (可信賴 AI 系統安全性與信任度評測 (Trustworthy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 7 題 (訓練數據治理與偏見過濾 (Training Data Gover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 8); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 8 題 (金融科技合規與自動化決策揭露 (FinTech Complian...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 9 題 (人工智慧倫理與治理原則 (AI Ethics and Gover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 11 題 (敏感特徵控制與偏誤防範 (Sensitive Feature C...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 17 題 (數據假名化與 Linkability 隱私保護 (Data Ps...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 30 題 (顯著性圖 (Saliency Map))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 31 題 (部分依賴圖 (Partial Dependence Plot, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 32 題 (局部可解釋模型無關解釋 (Local Interpretable...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 37 題 (顯著性圖 / 類別激活映射 (Saliency Map / Gr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 42); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 42 題 (局部可解釋模型無關解釋 (Local Interpretable...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 43 題 (SHAP (SHapley Additive exPlanati...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 44 題 (生成式 AI 之資料隱私與隔離架構 (Data Privacy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 46); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 46 題 (差分隱私 (Differential Privacy))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 50 題 (可解釋性人工智慧與 AI 倫理 (Explainable AI ...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "MLMethodology": {
        "title": "💡 機器學習方法論 (ML Methodology)",
        "summary": "介紹監督式學習、非監督式學習與強化學習三大機器學習核心方法論之原理、常見演算法與實務應用，並結合 400 題官方考古題進行考點分析。",
        "content": `<h3>一、 監督式學習 (Supervised Learning) 🦾 📦</h3>
<p><b>定義：</b> 監督式學習是一種基於已知輸入和對應輸出標籤來訓練模型的學習方法，旨在學習出最佳的映射函數。</p>
<ul>
    <li><b>特徵：</b> 使用帶有標籤的訓練數據集，例如 \((x_i, y_i)\) 的配對，用以擬合模型。</li>
    <li><b>常用算法：</b> 例如線性迴歸 (Linear Regression)、決策樹 (Decision Trees)、支持向量機 (SVM) 等經典演算法。</li>
    <li><b>應用場景：</b> 適用於表格數據分析、圖像分類、情感分析、金融風控等業務場景。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--primary); font-size: 1rem; font-weight: bold;">💡 監督式學習 - 考古題典型考點 analysis</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>L1 與 L2 正規化 (Lasso vs Ridge)：</b> 差異、選擇時機、權重稀疏性。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>過度擬合 (Overfitting)：</b> 成因（複雜度、雜訊）、解決方案（正規化、交叉驗證、增加數據）。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>決策樹與隨機森林：</b> 原理、優缺點、參數調優（樹深、葉節點）。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>支持向量機 (SVM)：</b> 核函數 (Kernel Trick)、邊際最大化、參數 C 的影響。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>神經網絡基礎：</b> 激活函數 (ReLU, Sigmoid)、損失函數 (MSE, Cross-Entropy)。</span></li>
    </ul>
</div>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 1 題 (Sentiment Analysis)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 7 題 (Object Detection (IoU / mAP))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 9 題 (Data Augmentation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 10 題 (F1 Score)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 26 題 (LASSO 迴歸 (L1 正則化))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 33); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 33 題 (Word2Vec (Skip-gram 架構))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 34 題 (全景分割 (Panoptic Segmentation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 36 題 (網格搜尋 (Grid Search))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 39); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 39 題 (ARIMA 模型與殘差診斷 (Residual Diagnost...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 1 題 (交叉驗證 (Cross-Validation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 9 題 (特徵縮放 (Feature Scaling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 13 題 (標籤偏差 (Label Bias))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 14 題 (可解釋人工智慧 (Explainable AI, XAI))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 15 題 (決定係數 (R-squared, R²))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 16); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 16 題 (F1 分數 (F1 Score))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 19 題 (不平衡資料集處理 (Imbalanced Data Handling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 24); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 24 題 (殘差分析 (Residual Analysis))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 28 題 (取樣偏差 (Sampling Bias))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 34 題 (分層交叉驗證 (Stratified Cross-Validat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 36 題 (同態加密 (Homomorphic Encryption))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 37 題 (隱私強化計算技術 (Privacy-Enhancing Tech...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 38 題 (均方誤差 (Mean Squared Error, MSE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 47 題 (K-近鄰演算法與交叉驗證 (KNN & Cross-Valida...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 49); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 49 題 (多層感知機參數量計算 (MLP Parameter Calcul...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 1 題 (Part-of-Speech Tagging (POS Tagg...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 3 題 (Word2Vec (CBOW vs Skip-gram))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 6 題 (Instance Segmentation vs Semanti...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 7); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 7 題 (Instance Segmentation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 8); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 8 題 (Receiver Operating Characteristi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 9 題 (Confusion Matrix & AUC)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 12 題 (Sigmoid Activation Function)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 13 題 (Prompt Tuning vs Fine-Tuning)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 14 題 (Parameter-Efficient Fine-Tuning ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 18); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 18 題 (Cross-Modal Alignment)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 19 題 (Offline vs Online Evaluation Met...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 28 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 34 題 (增量學習 (Incremental Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 35); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 35 題 (特徵融合 (Feature Fusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 37 題 (SMOTE (合成少數類別過採樣技術))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 44); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 44 題 (AI 推論 API 設計 (AI Inference API D...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 5 題 (異質變異性分析 (Heteroscedasticity Anal...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 10 題 (損失函數設計 (Loss Function Design))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 12 題 (不平衡資料評估指標 (Imbalanced Data Metrics))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 14 題 (樸素貝氏分類器 (Naive Bayes Classifier))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 25); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 25 題 (對數轉換 (Log Transformation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 26 題 (Sliding Window / Lag Features)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 27 題 (Rolling Window Validation (Time ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 30 題 (Bias-Variance Tradeoff (High Var...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 34 題 (Grid Search Cross-Validation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 37); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 37 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 38); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 38 題 (Algorithmic Fairness (Statistica...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 45); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 45 題 (Stratified K-Fold Cross-Validation)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 4); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 4 題 (Outlier Handling / Data Preproce...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 5); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 5 題 (SMOTE (Synthetic Minority Over-s...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 6); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 6 題 (Feature Scaling (Standardization...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 10); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 10 題 (Variational Autoencoder (VAE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 14); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 14 題 (預測性維護 / 異常偵測 (Predictive Mainten...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 20); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 20 題 (資料擴增 (Data Augmentation) / 解決過擬合...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 26); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 26 題 (局部可解釋模型無關解釋（Local Interpretable ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 27 題 (沙普利加性解釋（SHapley Additive exPlana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 28 題 (反事實解釋（Counterfactual Explanation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 32); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 32 題 (影像分割（Image Segmentation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 36); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 36 題 (弱人工智慧（Weak AI / Narrow AI）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 40); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 40 題 (類別不平衡評估指標 F1-score（F1-score for ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 47 題 (結構化預測（Structured Prediction）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 49); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 49 題 (遷移學習（Transfer Learning）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 50); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 50 題 (分類評估指標召回率（Recall / Sensitivity）)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 1 題 (資料偏差緩解與樣本代表性分析 (Data Bias Mitiga...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 3); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 3 題 (低程式碼平台的即時資料整合 (Real-time Data In...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 9); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 9 題 (少量樣本提示與上下文學習限制 (Few-shot Prompti...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 11 題 (無程式碼應用開發與自動化機器學習工具選型 (No-Code Ap...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 19 題 (AI 生成程式碼安全生命週期管理 (Lifecycle Mana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 23 題 (鑑別式機器學習與生成式人工智慧 (Discriminative ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 28 題 (代幣經濟學與推理成本優化 (Token Economics & ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 30); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 30 題 (少樣本學習 (Few-shot Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 41); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 41 題 (偏見檢測與公平性評估 (Bias Detection & Fai...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 48); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 48 題 (資料漂移與概念漂移 (Data Drift & Concept ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 1 題 (情感分析與關鍵詞提取 (Sentiment Analysis a...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 11); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 11 題 (敏感特徵控制與偏誤防範 (Sensitive Feature C...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 12); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 12 題 (企業多模態資料型態分類 (Enterprise Multimod...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 13); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 13 題 (分類特徵標籤編碼局限性 (Limitations of Labe...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 15); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 15 題 (特徵尺度不敏感性與樹狀模型分裂機制 (Feature Scale...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 19 題 (分類指標選擇與召回率極大化 (Classification Me...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 23); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 23 題 (迴歸模型評估與均方誤差 (Regression Model Ev...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 31); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 31 題 (部分依賴圖 (Partial Dependence Plot, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 34); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 34 題 (多模態對比學習與無監督圖像特徵學習 (Multimodal Co...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 43 題 (SHAP (SHapley Additive exPlanati...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 1); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 1 題 (檢檢索增強生成 (Retrieval-Augmented Gen...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 17); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 17 題 (法律文本生成與語意分析 (Legal Text Generati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 19); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 19 題 (檢索增強生成架構與生成式 AI 的範疇 (RAG Archite...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 27); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 27 題 (編碼器-解碼器架構 (Encoder-Decoder Archi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 28); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 28 題 (提示詞注入防護 (Prompt Injection Defense))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 43); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 43 題 (AI 專案投資效益與總擁有成本評估 (AI Project RO...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 47); return false;" style="color: #2563eb !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 47 題 (總擁有成本與效益分析法 (Total Cost of Owner...)</a></li>
    </ul>
  </li>
</ul>
</div>

<h3>二、 非監督式學習 (Unsupervised Learning) 🔍 🌐</h3>
<p><b>定義：</b> 在沒有明確標籤的數據下，模型自主探索並發現數據潛在結構的學習方法。</p>
<ul>
    <li><b>特徵：</b> 使用無標籤數據，側重於數據內部的相似性、關聯度或分佈規律。</li>
    <li><b>常用算法：</b> K-means 聚類、DBSCAN 密度分群、主成分分析 (PCA) 降維。</li>
    <li><b>應用場景：</b> 客戶分群與市場區隔、社群偵測、圖像壓縮、異常行為偵測。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--accent); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--accent); font-size: 1rem; font-weight: bold;">💡 非監督式學習 - 考古題典型考點 analysis</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>主成分分析 (PCA) 降維：</b> 協方差矩陣、正交投影、變異量保留與多重共線性消除。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>DBSCAN 與分群特性：</b> Epsilon 鄰域半徑、MinPts 最小點數定義、核心點/邊界點/雜訊點識別。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>大數據查詢優化：</b> KD-Tree / Ball Tree 距離索引結構，加速空間鄰近點搜索。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>關聯規則 (Association Rules)：</b> 支持度 (Support)、信賴度 (Confidence)、提升度 (Lift) 及購物籃應用。</span></li>
    </ul>
</div>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 8); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 8 題 (Softmax and Max-Pooling)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 12); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 12 題 (Principal Component Analysis (PCA))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 45); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 45 題 (主成分分析 (Principal Component Analy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 48); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 48 題 (DBSCAN 與空間索引優化 (KD-Tree/Ball Tree))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 4); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 4 題 (DBSCAN 群集分析 (Density-Based Clust...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 23); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 23 題 (蒙地卡羅方法 (Monte Carlo Method))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 35); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 35 題 (主成分分析 (Principal Component Analy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 46); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 46 題 (PCA 降噪應用 (PCA for Noise Reduction))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 31); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 31 題 (DBSCAN與維度詛咒 (DBSCAN & Curse of D...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 42); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 42 題 (模型分群監控 (Subpopulation Monitoring))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 6); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 6 題 (t-SNE 與 PCA 降維演算法)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 7); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 7 題 (L1 正則化 (L1 Regularization / Lasso))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 15); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 15 題 (K-means 分群演算法 (K-means Clustering))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 28); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 28 題 (Random Forest Regression)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 29); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 29 題 (Semi-supervised Anomaly Detection)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 44); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 44 題 (Data Leakage / Cross-Validation ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 3); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 3 題 (Unsupervised Learning)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 17); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 17 題 (大型語言模型高可用集群部署與負載平衡 (High-Availab...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 16); return false;" style="color: var(--accent) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 16 題 (無監督異常檢測與預防性維護 (Unsupervised Anom...)</a></li>
    </ul>
  </li>
</ul>
</div>

<h3>三、 強化式學習 (Reinforcement Learning, RL) 🕹️ 🎯</h3>
<p><b>定義：</b> 是一種基於「試誤學習 (Trial-and-Error)」與環境互動回饋的決策學習方法，旨在最大化長期累積回報。</p>
<ul>
    <li><b>特徵：</b> 代理人與環境互動，執行動作並觀察狀態改變，無即時標籤但有延遲的獎勵或懲罰。</li>
    <li><b>常用算法：</b> Q-learning、深度 Q 網路 (DQN)、策略梯度 (Policy Gradient)。</li>
    <li><b>應用場景：</b> 遊戲 AI (如 AlphaGo)、自駕車路徑規劃、自動化生產、金融投資策略。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--success); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--success); font-size: 1rem; font-weight: bold;">💡 強化式學習 - 考古題典型考點 analysis</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>核心組成要素：</b> 代理人 (Agent)、環境 (Environment)、狀態 (State)、動作 (Action)、報酬 (Reward)、策略 (Policy)。</span></li>
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>DQN 深度 Q 網路：</b> Q-Table 的侷限、利用深度學習擬合估計 Q 函數以克服維度災難。</span></li>
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>探索與利用 (Exploration vs Exploitation)：</b> 探索度 (\(\epsilon\)-Greedy) 平衡即時與長期最優解。</span></li>
    </ul>
</div>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 5); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 5 題 (TF-IDF)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 15); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 15 題 (Model Registry (MLOps))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 20); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 20 題 (Generative Adversarial Network (...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 22); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 22 題 (Data Drift Detection (KL Diverge...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 23); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 23 題 (Phased Rollout / Canary Deployment)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 32); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 32 題 (群體穩定度指標 (Population Stability In...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 37); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 37 題 (批次大小調整 (Batch Size Tuning) 與分散式訓練)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 44); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 44 題 (深度生成模型 (Deep Generative Models, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 46); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 46 題 (MLOps 與資料/概念漂移監控 (Data/Concept D...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 2); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 2 題 (L1 正則化 (Lasso Regularization))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 22); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 22 題 (貝氏定理與單純貝氏分類 (Bayes' Theorem & Na...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 26); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 26 題 (過擬合防止與正則化 (Overfitting Prevention))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 29); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 29 題 (概念飄移適應與滑動視窗驗證 (Concept Drift & R...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 32); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 32 題 (L1 正則化 / Lasso 迴歸 (L1 Regulariza...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 15); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 15 題 (Multi-Agent System (Orchestratio...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 16); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 16 題 (ReAct Framework (Reasoning and A...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 23); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 23 題 (Transfer Learning & Model Compre...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 43); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 43 題 (金絲雀發布 (Canary Release / Canary D...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 46); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 46 題 (聯邦學習 (Federated Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 49); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 49 題 (機器學習生命週期追蹤與監控 (ML Lifecycle Trac...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 2); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 2 題 (均方誤差 (Mean Squared Error, MSE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 13); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 13 題 (L2 正則化 (L2 Regularization / Weig...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 16); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 16 題 (XGBoost (Extreme Gradient Boosting))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 31); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 31 題 (Reward Shaping (Reinforcement Le...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 33); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 33 題 (Ridge Regression (L2 Regularizat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 39); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 39 題 (In-processing Fairness / Adversa...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 2); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 2 題 (Sensor Network)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 19); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 19 題 (強化式學習 (Reinforcement Learning) /...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 24); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 24 題 (基於人類反饋的強化學習 (Reinforcement Learn...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 30); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 30 題 (監督式學習的分類問題（Supervised Classifica...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 31); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 31 題 (半監督式學習（Semi-supervised Learning）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 39); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 39 題 (非監督式學習（Unsupervised Learning）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 43); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 43 題 (機器學習學習模式分類（Classification of Mac...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 8); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 8 題 (邊緣運算與資源受限設備部署優化 (Edge Computing ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 12); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 12 題 (模型上下文協議與檢索增強生成定位對比 (Model Contex...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 15); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 15 題 (情境感知代理設計與狀態管理 (Context-aware Age...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 16); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 16 題 (解決方案圖譜與代理任務規劃 (Solution Graph an...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 21); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 21 題 (AI 代理開發框架與工具集成 (AI Agent Develop...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 40); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 40 題 (強化學習微調與對齊 (Reinforcement Fine-Tu...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 42); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 42 題 (同態加密 (Homomorphic Encryption))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 43); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 43 題 (私有化部署與數據主權 (Private Deployment &...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 47); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 47 題 (工業級 AI 的正確性與一致性驗證 (Accuracy & Co...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 49); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 49 題 (低代碼環境下的自動化集成測試與模擬 (Automated Int...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 2); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 2 題 (機器學習範式分類 (Machine Learning Parad...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 3); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 3 題 (電腦視覺與工業瑕疵檢測 (Computer Vision and...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 4); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 4 題 (超低延遲即時決策系統 (Ultra-low Latency Re...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 6); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 6 題 (可信賴 AI 系統安全性與信任度評測 (Trustworthy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 9); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 9 題 (人工智慧倫理與治理原則 (AI Ethics and Gover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 14); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 14 題 (時間序列資料分割與資訊洩漏防範 (Time Series Spl...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 22); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 22 題 (無監督聚類與機器學習範式辨析 (Unsupervised Clu...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 24); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 24 題 (探索與利用的權衡 (Exploration vs. Exploi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 26); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 26 題 (半監督式學習 (Semi-supervised Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 29); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 29 題 (群體相對策略優化 (Group Relative Policy ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 38); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 38 題 (半監督異常偵測 / 單類別分類 (Semi-supervised...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 44); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 44 題 (超大型語言模型部署與推理優化 (Large Language M...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 46); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 46 題 (代理人技能發現與學習 (Agent Skill Discover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 47); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 47 題 (模式崩潰 (Mode Collapse))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 48); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 48 題 (概念漂移與資料漂移檢測 (Concept Drift & Dat...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 11); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 11 題 (自動化機器學習 (Automated Machine Learn...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 13); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 13 題 (Vibe Coding 與低程式碼開發的對比 (Vibe Cod...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 14); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 14 題 (主動型 AI 編程代理與自主執行 (Agentic Coding...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 15); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 15 題 (強化微調與監督式微調的對比 (Reinforcement Fin...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 16); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 16 題 (AI 代理的主動決策與適應性 (AI Agent Autonom...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 24); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 24 題 (AI 代理特性與單純文本生成之對比 (AI Agent Char...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 25); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 25 題 (ReAct 代理架構之適用場景 (ReAct Agent Fra...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 30); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 30 題 (強化學習回饋優化 (Reinforcement Learning...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 32); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 32 題 (程式碼生成模型 (Code Generation Models))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 33); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 33 題 (少樣本提示 (Few-Shot Prompting))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 35); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 35 題 (多代理狀態同步與協作 (Multi-Agent State Sy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 36); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 36 題 (代理人任務規劃 (Agent Task Planning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 40); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 40 題 (解決方案圖譜規劃 (Solution Graph Planning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 41); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 41 題 (語言模型引導之圖譜建構 (Language Model-guid...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 44); return false;" style="color: var(--success) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 44 題 (生成式 AI 之資料隱私與隔離架構 (Data Privacy ...)</a></li>
    </ul>
  </li>
</ul>
</div>

<h3>四、 💡 關鍵子領域：深度學習 (Deep Learning, DL) 🧠 ⚡</h3>
<p><b>定義：</b> 機器學習的子領域，透過多層人工神經網路模仿人腦運作方式，自動從海量高維數據中提取特徵。</p>
<ul>
    <li><b>特徵：</b> 端到端學習 (End-to-End)、免除手動特徵工程、高度依賴算力與數據規模。</li>
    <li><b>常用架構：</b> 卷積神經網路 (CNN)、循環神經網路 (RNN/LSTM)、Transformer 架構。</li>
    <li><b>應用場景：</b> 大預訓練語言模型 (LLM)、機器翻譯、語音識別、自動駕駛。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid #8e44ad; padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: #8e44ad; font-size: 1rem; font-weight: bold;">💡 深度學習 - 考古題典型考點 analysis</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>Transformer 自注意力機制：</b> Self-Attention 計算（Query, Key, Value）、縮放點積、並行訓練優勢。</span></li>
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>BERT 雙向預訓練：</b> 遮罩語言模型 (MLM)、下一句預測 (NSP)、雙向上下文 (Bidirectional Context) 理解。</span></li>
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>卷積神經網路 (CNN)：</b> 卷積核 (Kernel) 特徵提取、池化層 (Pooling) 降維、影像特徵工程自動化。</span></li>
    </ul>
</div>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 2); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 2 題 (Transformer)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 3); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 3 題 (Masked Language Model (MLM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 4); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 4 題 (Word Embedding (GloVe vs Word2Vec))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 11); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 11 題 (DBSCAN)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 14); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 14 題 (Cross-Validation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 16); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 16 題 (Seq2Seq Model)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 18); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 18 題 (Attention Mechanism (Sparsity))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 27); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 27 題 (時序特徵工程與時間窗口聚合)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 28); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 28 題 (特徵工程 (標準化與目標編碼))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 35); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 35 題 (對比式語言-影像預訓練 (CLIP & Contrastive ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 38); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 38 題 (擴散模型取樣機制 (Diffusion Sampling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 40); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 40 題 (生成式 AI 模型架構 (VAE, GAN, Diffusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 42); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 42 題 (分佈外偵測 (OOD Detection) 與潛在空間監控)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 43); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 43 題 (生成式與鑑別式模型比較 (Generative vs Discr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 47); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 47 題 (多任務學習與損失平衡 (Multi-Task Learning ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 49); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 49 題 (AI 偏誤與資料代表性 (AI Bias and Data Re...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 50); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 50 題 (多模態對齊與生成缺陷 (Cross-modal Alignmen...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 3); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 3 題 (局部最優解 (Local Optima))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 5); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 5 題 (卷積神經網路 (CNN) 的卷積層)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 6); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 6 題 (參數共享與區域感知 (Parameter Sharing & L...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 7); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 7 題 (長短期記憶網路 (LSTM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 8); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 8 題 (決策樹與資訊增益 (Decision Trees & Infor...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 12); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 12 題 (學習率 (Learning Rate))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 18); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 18 題 (XGBoost (eXtreme Gradient Boosting))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 21); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 21 題 (多頭注意力機制 (Multi-head Attention))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 25); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 25 題 (信用評分卡模型 (Credit Scorecard Modeling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 27); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 27 題 (激活函數 (Activation Function))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 31); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 31 題 (早期停止 (Early Stopping))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 42); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 42 題 (卷積神經網路參數量分析 (CNN Parameter Distr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 43); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 43 題 (卷積層運算複雜度 (Convolutional FLOPs))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 44); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 44 題 (VGG 架構與記憶體估算 (VGG Architecture &...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 45); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 45 題 (遷移學習與參數凍結 (Transfer Learning & F...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 48); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 48 題 (資料標準化 / 特徵縮放 (Standardization / ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 2); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 2 題 (LoRA (Low-Rank Adaptation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 4); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 4 題 (Masked Language Modeling (MLM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 5); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 5 題 (Word Embedding (Word2Vec))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 10); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 10 題 (Object Detection (YOLO vs Faster...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 11); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 11 題 (Self-Attention Mechanism)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 17); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 17 題 (Multi-Modal Architecture Selection)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 29); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 29 題 (Grad-CAM (Gradient-weighted Clas...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 30); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 30 題 (主成分分析 (Principal Component Analy...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 32); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 32 題 (神經網路展平操作 (Flatten in Neural Netw...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 33); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 33 題 (合成資料 (Synthetic Data))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 36); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 36 題 (遷移學習 (Transfer Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 50); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 50 題 (晚期融合 (Late Fusion))</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 3); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 3 題 (矩陣運算 (Matrix Multiplication))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 8); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 8 題 (學習率調整與最佳化 (Learning Rate Tuning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 9); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 9 題 (Adam 優化器 (Adam Optimizer))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 11); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 11 題 (小批次梯度下降 (Mini-batch Gradient Des...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 17); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 17 題 (殘差網路 (Residual Network, ResNet))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 18); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 18 題 (池化層 (Pooling Layer))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 19); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 19 題 (Transformer 架構與自注意力機制)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 20); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 20 題 (Softmax 函數與交叉熵 (Cross-Entropy))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 23); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 23 題 (自迴歸語言模型 (Autoregressive Language...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 35); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 35 題 (LoRA (Low-Rank Adaptation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 40); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 40 題 (Softmax Activation and Categoric...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 46); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 46 題 (Data Preprocessing (Min-Max Scal...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 47); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 47 題 (Convolutional Neural Networks (B...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 49); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 49 題 (ResNet (Residual Networks) / Ski...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 7); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 7 題 (One-hot Encoding)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 8); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 8 題 (Wide & Deep Learning)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 9); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 9 題 (Softmax Function)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 12); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 12 題 (大型語言模型 (Large Language Model, LLM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 21); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 21 題 (擴散模型 (Diffusion Model))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 22); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 22 題 (變分自編碼器 (Variational Autoencoder,...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 29); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 29 題 (顯著性圖（Saliency Map）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 33); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 33 題 (長短期記憶網路（Long Short-Term Memory, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 38); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 38 題 (電腦視覺（Computer Vision）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 41); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 41 題 (快閃注意力機制（Flash Attention）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 44); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 44 題 (對數轉換（Log Transformation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 45); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 45 題 (啟動函數優化與梯度消失解決方案（Activation Funct...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 48); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 48 題 (卷積神經網路（Convolutional Neural Netw...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 5); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 5 題 (基於 Transformer 架構的自迴歸模型 (Transfo...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 18); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 18 題 (代碼生成自迴歸語言模型 (Autoregressive Lang...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 20); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 20 題 (即時端到端多模態語音模型與低延遲推論 (Realtime End...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 25); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 25 題 (AI 專案財務回報與 Token 經濟學估算 (AI Proje...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 26); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 26 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 31); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 31 題 (檢索增強生成 (Retrieval-Augmented Gene...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 33); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 33 題 (預訓練語言模型服務與低代碼集成 (Pre-trained Lan...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 35); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 35 題 (Transformer 模型架構變體 (Transformer ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 7); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 7 題 (訓練數據治理與偏見過濾 (Training Data Gover...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 18); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 18 題 (時序數據清洗與線性插補 (Time Series Data Cl...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 21); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 21 題 (深度學習與自動表徵學習 (Deep Learning and R...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 25); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 25 題 (長短期記憶網路與長程時序建模 (Long Short-Term ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 27); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 27 題 (自編碼器 (Autoencoder, AE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 28); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 28 題 (批次標準化 (Batch Normalization, BN))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 30); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 30 題 (顯著性圖 (Saliency Map))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 32); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 32 題 (局部可解釋模型無關解釋 (Local Interpretable...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 33); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 33 題 (稀疏專家混合架構 (Sparse Mixture-of-Expe...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 35); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 35 題 (Transformer 上下文窗口限制與長距離依賴 (Trans...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 36); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 36 題 (優化器 (Optimizer))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 37); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 37 題 (顯著性圖 / 類別激活映射 (Saliency Map / Gr...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 39); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 39 題 (條件隨機場 (Conditional Random Field,...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 40); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 40 題 (生成對抗網路 (Generative Adversarial N...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 41); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 41 題 (支援向量機 (Support Vector Machine, SVM))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 42); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 42 題 (局部可解釋模型無關解釋 (Local Interpretable...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 45); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 45 題 (卷積神經網路 (Convolutional Neural Net...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 49); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 49 題 (對抗訓練與生成式數據增強 (Adversarial Traini...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 21); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 21 題 (生成式影像編輯技術之範疇 (Scope of Generativ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 23); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 23 題 (記憶作為上下文機制 (Memory as Context Mec...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 29); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 29 題 (擴散模型 (Diffusion Models))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 31); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 31 題 (多模態生成式 AI 工具鏈 (Multimodal Genera...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 38); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 38 題 (程式碼與結構化標記語料庫預訓練 (Code and Struct...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 49); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 49 題 (神經網絡資料記憶效應與洩漏 (Neural Data Memor...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 50); return false;" style="color: #8e44ad !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 50 題 (可解釋性人工智慧與 AI 倫理 (Explainable AI ...)</a></li>
    </ul>
  </li>
</ul>
</div>`
    },
    "Monte Carlo": {
        "title": "蒙地卡羅模擬法 (Monte Carlo Method)",
        "summary": "蒙地卡羅模擬法是一種基於隨機抽樣與機率統計的數值計算技術，常用於預測風險與估算複雜的數學和物理結果。",
        "content": `<h3>一、 什麼是蒙地卡羅模擬法？</h3>
<p>蒙地卡羅模擬法（Monte Carlo Method），是一種透過<b>大量隨機抽樣</b>來估算未知數值或預測複雜系統行為的數值計算法。它屬於大數法則（Law of Large Numbers）的實務應用，即隨機試驗次數越多，樣本的平均值就會越逼近真實的理論值或物理規律。</p>

<h3>二、 蒙地卡羅的歷史起源</h3>
<p>這項技術起源於 1940 年代第二次世界大戰期間。當時，任職於洛斯阿拉莫斯國家實驗室的數學家<b>烏拉姆（Stanislaw Ulam）</b>在罹病療養期間玩撲克牌接龍，他想計算出接龍成功的機率，但發現用傳統組合數學計算極其困難。他想到：『不如隨機發牌玩 100 次，記錄成功幾次，這不就是答案的近似值嗎？』</p>
<p>隨後，他與電腦先驅<b>馮·紐曼（John von Neumann）</b>合作，將此隨機模擬的想法應用於曼哈頓計劃中原子彈中子擴散的物理估算。由於這項研究當時屬於高度機密，需要一個代號，烏拉姆的同事大都會建議以烏拉姆的叔叔經常借錢去賭博的摩納哥著名賭城——<b>蒙地卡羅（Monte Carlo）</b>命名。</p>

<h3>三、 經典數學實例：用「撒點法」求圓周率 (π)</h3>
<p>計算圓周率 \\(\\pi\\) 是理解蒙地卡羅法最直覺的例子：</p>
<ol>
    <li>想像一個邊長為 1 的正方形，其面積為 1。</li>
    <li>在正方形內畫一個半徑為 1 的四分之一圓，該扇形面積為 \\(\\frac{\\pi}{4}\\)。</li>
    <li>我們隨機在正方形內均勻地撒下大量的點（例如 10,000 個點）。</li>
    <li>檢驗每個點 \\((x, y)\\) 是否落在圓弧內（即滿足 \\(x^2 + y^2 \\le 1\\)）。</li>
    <li>計算比例：$$ \\frac{\\text{落在圓弧內的點數}}{\\text{總撒點數}} \\approx \\frac{\\text{四分之一圓面積}}{\\text{正方形面積}} = \\frac{\\pi}{4} $$</li>
</ol>
<p>藉此，我們能求出圓周率的近似值：\\( \\pi \\approx 4 \\times \\frac{\\text{落在圓弧內的點數}}{\\text{總撒點數}} \\)。點數撒得越多，得到的圓周率就越精準。</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>金融風險管理與期權定價：</b>在華爾街，這項技術被廣泛用於布萊克-舒爾斯模型 (Black-Scholes Model) 無法解決的複雜衍生性金融商品定價。透過模擬股票或資產在未來數萬種可能的隨機價格走勢，估算期權的預期回報與風險值 (Value at Risk, VaR)。</li>
    <li><b>專案時程與預算評估：</b>在大型工程中，各項子任務的時間與成本皆有不確定性。透過蒙地卡羅模擬，可以得出整個專案在預算內按時完工的機率分佈曲線，協助經理人制定應變準備金。</li>
</ul>`
    },
    "DBSCAN": {
        "title": "DBSCAN 密度分群法",
        "summary": "DBSCAN 是一種基於密度的無監督空間聚類演算法，能辨識任意形狀的群集並自動過濾噪聲點。",
        "content": `<h3>一、 什麼是 DBSCAN？</h3>
<p>DBSCAN（Density-Based Spatial Clustering of Applications with Noise），是一種經典的<b>無監督密度聚類演算法</b>。與傳統 K-means 演算法必須預先指定群集數量 \\(K\\) 且只能發現凸形（圓形）群集不同，DBSCAN 依據資料點的「局部密度」進行群集擴展，能夠自主發現任意形狀的群集，並天生具備識別並排除<b>噪聲點（Noise Points，即離群值）</b>的能力。</p>

<h3>二、 DBSCAN 的核心概念與參數</h3>
<p>DBSCAN 運作依賴於兩個關鍵的超參數：</p>
<ol>
    <li><b>Epsilon (\\(\\epsilon\\)，鄰域半徑)：</b>定義一個點周圍的搜尋距離半徑。</li>
    <li><b>MinPts (最小點數)：</b>在 \\(\\epsilon\\) 鄰域半徑內，必須包含的最少資料點數量（包含該點本身），用以判定該區域是否足夠『稠密』。</li>
</ol>
<p>根據這兩個參數，DBSCAN 將資料點劃分為三類：</p>
<ul>
    <li><b>核心點 (Core Points)：</b>在其 \\(\\epsilon\\) 鄰域內含有的資料點數量 \\(\\ge MinPts\\) 的點。核心點是群集的靈魂。</li>
    <li><b>邊界點 (Border Points)：</b>在其 \\(\\epsilon\\) 鄰域內點數 \\(< MinPts\\)，但落在了某個核心點的 \\(\\epsilon\\) 鄰域內。</li>
    <li><b>噪聲點/離群點 (Noise Points)：</b>既非核心點也非邊界點的點。</li>
</ul>

<h3>三、 演算法運作流程</h3>
<ol>
    <li>隨機選取一個未被訪問的資料點。</li>
    <li>檢驗該點是否為核心點。如果是，則以此點為起點創建一個新群集，並將其鄰域內的所有點加入群集中。</li>
    <li>對於鄰域內的新點，若它們也是核心點，則繼續『密度擴展』，將其鄰域點也併入群集中，直到群集無法繼續擴展為止。</li>
    <li>若起始點不是核心點，則將其標記為噪聲點（後續可能隨著密度擴展被併為邊界點）。</li>
    <li>重複上述步驟，直到所有點都被訪問並分類。</li>
</ol>

<h3>四、 實務應用與演算法限制</h3>
<ul>
    <li><b>客戶分群與信用卡詐欺檢測：</b>商業分析中，可利用交易行為特徵進行 DBSCAN 分群。偏離所有核心群落的噪聲點，通常代表異常信用卡盜刷或欺詐交易，應立即觸發警報。</li>
    <li><b>空間數據與地理資訊系統 (GIS)：</b>在物流規劃中，DBSCAN 被用於分析 GPS 軌跡，自動識別城市中的熱門送貨區域與交通堵塞點，忽略無效的偏遠雜訊數據。</li>
    <li><b>演算法限制：</b>當資料集的密度分佈極不均勻時（例如有些群極密，有些群極稀），使用統一的 \\(\\epsilon\\) 和 \\(MinPts\\) 會導致分群效果極差。此外，在大數據集上計算兩點間距離的複雜度為 \\(O(N^2)\\)，實務上通常需要配合 <b>KD-Tree</b> 或 <b>Ball Tree</b> 等空間距離索引結構進行加速。</li>
</ul>`
    },
    "PCA": {
        "title": "主成分分析 (PCA)",
        "summary": "主成分分析是一種線性降維技術，透過投影將高維特徵轉換為彼此正交的低維變數，以保留最大變異資訊並消除共線性。",
        "content": `<h3>一、 什麼是主成分分析？</h3>
<p>主成分分析（Principal Component Analysis，簡稱 PCA），是一種最經典的<b>線性降維（Dimensionality Reduction）技術</b>。在機器學習中，特徵過多會引發維度災難（Curse of Dimensionality）與過擬合（Overfitting）。PCA 透過數學投影，將原始高維特徵線性轉換為一組彼此<b>線性獨立（正交，相關係數為 0）</b>的新特徵，稱為<b>主成分 (Principal Components)</b>，並根據保留的累積解釋變異量（通常設定為 85%-95%），捨棄貢獻極小的後續主成分，達到簡化數據結構的目的。</p>

<h3>二、 數學原理解析</h3>
<p>PCA 的核心思想是在減少特徵維度的同時，儘可能保留原始資料的<b>變異量 (Variance)</b>（即資料所蘊含的資訊豐富度）：</p>
<ol>
    <li><b>特徵去中心化：</b>將每個特徵減去其平均值，使資料中心點移至原點。</li>
    <li><b>計算協方差矩陣 (Covariance Matrix)：</b>衡量特徵與特徵之間的線性協同關係。</li>
    <li><b>計算特徵值與特徵向量：</b>對協方差矩陣進行特徵分解（Eigenvalue Decomposition），求得特徵向量與特徵值。
        <ul>
            <li><b>特徵向量：</b>代表資料投影的新座標軸方向（即主成分方向，彼此正交）。</li>
            <li><b>特徵值：</b>代表資料在該特徵向量方向上的變異量大小（特徵值越大，代表該主成分保留的資訊越多）。</li>
        </ul>
    </li>
    <li><b>投影與選擇：</b>將特徵值由大到小排序，選擇前 \\(k\\) 個主成分，將原始資料投影到這 \\(k\\) 維新空間中。</li>
</ol>

<h3>三、 為什麼能消除「多重共線性」？</h3>
<p>在線性迴歸等統計模型中，若特徵之間高度相關（多重共線性，Multicollinearity），會導致模型參數估計極度不穩定，標準誤差飆升。PCA 產生的主成分是協方差矩陣的正交特徵向量，在數學上，正交投影意謂著主成分之間的相關係數為 0。因此，使用主成分代替原始特徵進行建模，能完美消除多重共線性。</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>高維感測器特徵預處理：</b>在半導體製程或飛機引擎檢測中，感測器會產生上千個特徵。使用 PCA 將特徵降維到數十個主成分（保留 95% 以上變異資訊），能大幅加快下游 SVM 或神經網路模型的訓練速度。</li>
    <li><b>人臉識別 (Eigenfaces)：</b>在早期電腦視覺中，PCA 被用於將人臉影像像素矩陣進行降維，提取出最能表徵人臉結構的主成分特徵向量（特徵臉），以進行流暢的身份比對。</li>
</ul>`
    },
    "Transformer": {
        "title": "Transformer 與自注意力機制",
        "summary": "Transformer 是一種基於自注意力機制的深度學習架構，徹底改變了自然語言處理與序列建模的格局。",
        "content": `<h3>一、 Transformer 的誕生背景</h3>
<p>在 Transformer 出現之前，自然語言處理（NLP）主要依賴循環神經網路（RNN）或長短期記憶網路（LSTM）。然而，RNN 具有兩大致命缺點：1. 必須依序一步步計算，無法進行高效的 GPU <b>並行訓練</b>；2. 面對超長文本時，容易出現梯度消失，難以捕捉<b>長距離依賴關係 (Long-range Dependencies)</b>。2017 年 Google 團隊發表了論文《Attention Is All You Need》，提出了完全摒棄循環結構、僅基於自注意力機制的 <b>Transformer</b> 架構。</p>

<h3>二、 自注意力機制 (Self-Attention) 的運作原理</h3>
<p>自注意力機制是 Transformer 的靈魂，它允許模型在處理序列中的某個詞時，能夠『注意』到序列中所有其他詞，並計算它們之間的語意關聯權重：</p>
<ol>
    <li>對於輸入序列中的每個詞向量，透過三個獨立的線性變換，生成三個向量：
        <ul>
            <li><b>Query (查詢向量, Q)：</b>代表當前詞正在尋找什麼。</li>
            <li><b>Key (鍵向量, K)：</b>代表該詞包含什麼內容，供其他詞查詢。</li>
            <li><b>Value (值向量, V)：</b>代表該詞的實際語意資訊。</li>
        </ul>
    </li>
    <li><b>計算注意力分數：</b>將 Query 與所有詞的 Key 進行點積（Dot Product），以評估相關性。</li>
    <li><b>縮放與 Softmax：</b>點積結果除以 \\(\\sqrt{d_k}\\)（縮放常數）以穩定梯度，再通過 Softmax 函數轉換成相加為 1 的機率權重分佈。</li>
    <li><b>加權求和：</b>將注意力權重乘以對應詞的 Value，並加權求和得到該詞融合了上下文語意的新表徵。</li>
</ol>

<h3>三、 多頭注意力機制 (Multi-Head Attention)</h3>
<p>為了讓模型能同時關注來自不同位置與不同子空間的特徵，Transformer 使用『多頭自注意力機制』。它將 Q, K, V 分割成多個低維空間，並行計算多個自注意力稽陣，最後將所有頭的輸出拼接 (Concatenate) 並線性變換。這允許模型在同一時間，既注意到『誰做了動作』（主謂關係），又注意到『動作發生在哪裡』（狀語關係）。</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>機器翻譯與智慧客服：</b>Google Translate 與 DeepL 等翻譯工具已全面換裝基於 Transformer 的翻譯架構，比舊版 Seq2Seq 架構翻譯精確度提升 30% 以上。</li>
    <li><b>生成式 AI 基礎模型：</b>當今火熱的 ChatGPT (GPT-4)、Claude、Gemini 等大型預訓練語言模型 (LLM)，其骨幹架構皆是基於 Transformer 的 Decoder-Only 變體。</li>
</ul>`
    },
    "BERT": {
        "title": "BERT 雙向語言表徵模型",
        "summary": "BERT 是基於 Transformer Encoder 架構的雙向預訓練語言模型，引領了遷移學習在自然語言處理中的熱潮。",
        "content": `<h3>一、 什麼是 BERT？</h3>
<p>BERT（Bidirectional Encoder Representations from Transformers），是由 Google 於 2018 年提出的預訓練語言模型。在 BERT 出現之前，多數語意模型（如 ELMo、GPT-1）都是單向的，即只能從左到右或從右到左閱讀文本。BERT 採用 Transformer 的 <b>Encoder（編碼器）</b>結構，實作了真正的<b>雙向上下文語意理解</b>，極大地提升了自然語言理解任務的表現。</p>

<h3>二、 兩大核心預訓練任務</h3>
<p>BERT 採用無監督方式，在海量圖書與維基百科語料庫上進行兩項自主學習預訓練任務：</p>
<ol>
    <li><b>遮罩語言模型 (Masked Language Model, MLM)：</b>
        <p>這是 BERT 最關鍵的預訓練策略。在輸入句子中，模型會隨機將 15% 的詞用一個特殊符號 <code>[MASK]</code> 遮蓋。模型的目標是根據被遮蓋詞的<b>左側與右側雙向上下文</b>，來預測該被遮蓋的詞是什麼。這強迫模型深入理解上下文的語意關聯，而非只是死記詞組順序。</p>
    </li>
    <li><b>下一句預測 (Next Sentence Prediction, NSP)：</b>
        <p>為了解釋句子之間的關係，BERT 讀入兩個句子 A 和 B，並預測 B 是否是 A 的下一句。這對於問答系統（QA）和自然語言推理（NLI）等需要理解段落關聯的下游任務至關重要。</p>
    </li>
</ol>

<h3>三、 微調 (Fine-Tuning) 與遷移學習</h3>
<p>預訓練完成後，BERT 已經具備了強大的通用語言理解能力。企業只需要在特定的下游任務數據（如客服信件分類、情感分析）上，加上一個簡單的輸出層進行『微調』訓練，即可在極少標註資料（如 1,000-2,000 筆）下達到卓越的準確度，大幅降底了 AI 的落地的門檻。</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>客服信件自動分類：</b>金融機構利用微調後的 BERT Classifier，讀取顧客投訴、詢問、讚揚郵件，並在毫秒內將其分流給對應的業務部門處理。</li>
    <li><b>搜尋引擎語意理解：</b>Google 搜尋引擎導入 BERT 技術來解析使用者的搜尋字詞，即使字詞語法不規範，也能透過雙向語意理解精準匹配出最符合意圖的網頁結果。</li>
</ul>`
    }
};
