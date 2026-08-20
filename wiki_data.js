// Technology Wiki Database (Algorithm Encyclopedia)
const WIKI_DATA = {
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
    <li>將此比例乘以 4，即可求出 \\(\\pi\\) 的估算值。</li>
</ol>
<p>試驗次數與精確度的關係：
<ul>
    <li>當僅撒點 100 次時，估算出的 \\(\\pi\\) 誤差可能很大（如 2.8 或 3.4）。</li>
    <li>當撒點增加至 10,000 次，\\(\\pi\\) 的估算值會非常接近 3.14。</li>
    <li>當次數達 100,000 次以上，即可精準收斂至 3.1415...，這展現了隨機抽樣在大數據下的強大收斂性。</li>
</ul>
</p>

<h3>四、 金融理財與商業預測的實務應用</h3>
<p>在現實生活與商業決策中，特別是在<b>財務規劃與退休金估算</b>中，蒙地卡羅法扮演著關鍵角色：</p>
<ul>
    <li><b>打破「固定報酬率」的迷思：</b>傳統的理財計算機常假設每年固定有 5% 的報酬率，但現實市場有漲有跌（波動性）。如果退休初期遇到市場大崩盤（順序風險），即使平均報酬率相同，資金也可能提早耗盡。</li>
    <li><b>模擬上萬種市場走勢：</b>蒙地卡羅模擬會根據歷史數據設定資產配置的預期報酬率、標準差（風險）與相關係數，隨機生成 10,000 種未來不同的市場發展路徑（包括大牛市、溫和成長、極度蕭條等）。</li>
    <li><b>評估退休成功機率 (Probability of Success)：</b>藉由這上萬次的模擬，統計出有多少條路徑在退休期間資金不會歸零。若有 8,500 條路徑順利通關，代表該退休理財規劃的「成功機率」為 85%。這能協助投資人進行動態資產配置與提領策略的調整。</li>
</ul>`
    },
    "DBSCAN": {
        "title": "DBSCAN 密度分群法",
        "summary": "DBSCAN 是一種基於資料空間密度的無監督聚類演算法，能發現任意形狀的群集並有效識別雜訊點。",
        "content": `<h3>一、 什麼是 DBSCAN 聚類？</h3>
<p>DBSCAN（Density-Based Spatial Clustering of Applications with Noise）是一種著名的基於密度的分群演算法。與經典的 K-Means 不同，DBSCAN 不需要預先指定要分出多少個群集（K值），而是透過尋找被低密度區域分割的高密度區域，來自動識別出不同形狀、大小的群集。</p>

<h3>二、 核心運作機制與超參數</h3>
<p>DBSCAN 的聚類結果主要由兩個關鍵的超參數決定：</p>
<ul>
    <li><b>鄰域半徑（Epsilon, \\(\\epsilon\\)）：</b>定義了一個點周圍的『鄰近距離』半徑。</li>
    <li><b>最小點數（MinPts）：</b>定義了在 \\(\\epsilon\\) 半徑內，必須包含的最少資料點數量（包含自身），才能構成一個密度核心。</li>
</ul>

<p>根據這兩個參數，資料點會被分類為三種角色：</p>
<ol>
    <li><b>核心點 (Core Point)：</b>在以自己為中心、\\(\\epsilon\\) 為半徑的圓內，包含的資料點數 \\(\\ge \\text{MinPts}\\)。</li>
    <li><b>邊界點 (Border Point)：</b>點數小於 \\(\\text{MinPts}\\)，但在某個核心點的 \\(\\epsilon\\) 半徑內。</li>
    <li><b>雜訊點/離群點 (Noise Point)：</b>既不是核心點，也不是邊界點。DBSCAN 會自動將這些點過濾，不分配給任何群集。</li>
</ol>

<h3>三、 演算法步驟</h3>
<p>DBSCAN 遍歷資料庫的步驟如下：
<ol>
    <li>隨機選擇一個尚未被處理的資料點。</li>
    <li>計算該點在 \\(\\epsilon\\) 半徑內的點數。如果點數 \\(\\ge \\text{MinPts}\\)，以此點為核心建立新群集，並將半徑內所有點加入群中。</li>
    <li>對於群集內的新點，如果它們也是核心點，則遞迴地將它們的鄰域點也合併到同一個群集中（密度直達與密度相連）。</li>
    <li>如果該點點數少於 \\(\\text{MinPts}\\)，暫時將其標記為雜訊點。</li>
    <li>重複上述步驟，直到所有資料點皆被分類或標記為雜訊。</li>
</ol>
</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>信用卡盜刷與金融詐欺偵測：</b>使用 DBSCAN 將用戶的正常消費習慣（如地理位置、金額區間、時間點）凝聚成數個高密度群。個別不符合規律的異常交易點，將會被 DBSCAN 自動識別為雜訊點進行風控警報。</li>
    <li><b>地理圖資與熱點分析：</b>分析城市中的 GPS 載客點，自動圈出高密度的搭車熱區（如商圈、捷運站出口），並過濾掉隨機零星的雜訊點，協助車隊進行最佳化調度。</li>
</ul>`
    },
    "PCA": {
        "title": "主成分分析 (Principal Component Analysis)",
        "summary": "PCA 是一種無監督的線性降維技術，透過投影將相關特徵轉化為彼此正交的主成分，保留資料最大變異量。",
        "content": `<h3>一、 什麼是主成分分析？</h3>
<p>主成分分析（Principal Component Analysis, PCA）是機器學習中最廣泛使用的線性降維技術。當資料集特徵維度過高（例如上千個特徵）時，容易引發「維度災難」或「多重共線性」問題，導致模型過擬合或參數不穩定。PCA 的目的在於在<b>儘可能保留原始資料變異量（Variance）</b>的前提下，將高維資料投影到低維的正交空間中。</p>

<h3>二、 核心數學原理與步驟</h3>
<p>PCA 的核心概念是尋找資料投影後變異量最大的方向。其運作步驟如下：</p>
<ol>
    <li><b>特徵去中心化 (Mean Centering)：</b>將每個特徵的數值減去該特徵的平均值，使資料中心點移至原點。</li>
    <li><b>計算協方差矩陣 (Covariance Matrix)：</b>計算特徵與特徵之間的協方差，以表示特徵間的線性相關程度。</li>
    <li><b>特徵值分解 (Eigenvalue Decomposition)：</b>對協方差矩陣進行特徵值分解，求出特徵向量（Eigenvectors）與對應的特徵值（Eigenvalues）。</li>
    <li><b>排序與投影：</b>特徵值代表該方向保留的變異量大小。將特徵值由大到小排序，前幾個特徵向量即為<b>主成分 (Principal Components)</b>。</li>
    <li>將原始特徵矩陣乘上選定的主成分矩陣，投影得到降維後的新特徵。</li>
</ol>

<h3>三、 消除「多重共線性」的利器</h3>
<p>在線性回歸分析中，若特徵之間高度相關（如房價預測中的『建坪』與『房間數』），會導致模型矩陣不可逆或迴歸係數方差極大（極不穩定）。由於 PCA 投影出的主成分（PC1, PC2...）在數學上是<b>彼此正交（線性獨立，相關係數為 0）</b>的，因此將主成分作為特徵輸入模型，能徹底根除多重共線性問題，穩定模型係數。</p>

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
    <li><b>加權求和：</b>將注意力權重乘以對應詞的 Value，並加權求和得到該詞最終融合了上下文語意的新表徵。</li>
</ol>

<h3>三、 多頭注意力機制 (Multi-Head Attention)</h3>
<p>為了解決單一注意力機制可能聚焦過於單一的問題，Transformer 採用了『多頭注意力機制』。它將 Q、K、V 投影到多個不同的子空間中平行計算自注意力，最後將各個『頭』的輸出拼接起來。這好比多個人從不同的語意維度（例如語法關係、修飾關係、指代關係）去解讀同一個句子，大幅增強了特徵表徵能力。</p>

<h3>四、 實務應用場景</h3>
<ul>
    <li><b>大規模預訓練語言模型 (LLMs)：</b>當今席捲全球的 GPT-4、Gemini、Llama 等大語言模型，其底層骨幹網絡 100% 都是基於 Transformer 的解碼器（Decoder）架構。</li>
    <li><b>多語機器翻譯：</b>跨國企業利用 Transformer 的編碼器-解碼器結構，能精準捕捉長篇金融或法律文件的前後文關聯，顯著提升長難句的翻譯品質。</li>
</ul>`
    },
    "BERT": {
        "title": "BERT 雙向語意表徵模型",
        "summary": "BERT 是一種基於 Transformer 編碼器的預訓練語言模型，透過雙向上下文理解奠定了 NLP 遷移學習的基礎。",
        "content": `<h3>一、 什麼是 BERT？</h3>
<p>BERT（Bidirectional Encoder Representations from Transformers）是由 Google 於 2018 年提出的一款里程碑式 NLP 模型。在此之前的模型（如 GPT-1 或 ELMo）在閱讀句子時，大多是單向的（從左到右或從右到左）。然而，人類理解語言是雙向結合的。BERT 利用了 Transformer 的編碼器（Encoder）架構，實現了真正意義上的<b>雙向上下文（Bidirectional Context）</b>理解。</p>

<h3>二、 兩大核心預訓練任務</h3>
<p>BERT 不需要人工標註數據，而是直接在數十億字無標註的維基百科等語料上，透過以下兩個自我監督學習任務進行預訓練：</p>
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
    },
    "ExamSyllabus": {
        "title": "能力鑑定考綱重點",
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
</div>
`
    },
"MLMethodology": {
        "title": "機器學習方法論 (ML Methodology)",
        "summary": "介紹監督式學習、非監督式學習與強化學習三大機器學習核心方法論之原理、常見演算法與實務應用，並結合 400 題官方考古題進行考點分析。",
        "content": `<h3>一、 監督式學習 (Supervised Learning) 🦾 📦</h3>
<p><b>定義：</b> 監督式學習是一種基於已知輸入和對應輸出標籤來訓練模型的學習方法，旨在學習出最佳的映射函數。</p>
<ul>
    <li><b>特徵：</b> 使用帶有標籤的訓練數據集，例如 \((x_i, y_i)\) 的配對，用以擬合模型。</li>
    <li><b>常用算法：</b> 例如線性迴歸 (Linear Regression)、決策樹 (Decision Trees)、支持向量機 (SVM) 等經典演算法。</li>
    <li><b>應用場景：</b> 適用於表格數據分析、圖像分類、情感分析、金融風控等業務場景。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--primary); font-size: 1rem; font-weight: bold;">💡 監督式學習 - 考古題典型考點分析</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>L1 與 L2 正規化 (Lasso vs Ridge)：</b> 差異、選擇時機、權重稀疏性。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>過度擬合 (Overfitting)：</b> 成因（複雜度、雜訊）、解決方案（正規化、交叉驗證、增加數據）。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>決策樹與隨機森林：</b> 原理、優缺點、參數調優（樹深、葉節點）。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>支持向量機 (SVM)：</b> 核函數 (Kernel Trick)、邊際最大化、參數 C 的影響。</span></li>
        <li style="color: var(--primary); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>神經網絡基礎：</b> 激活函數 (ReLU, Sigmoid)、損失函數 (MSE, Cross-Entropy)。</span></li>
    </ul>
<div style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.9rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem;">🔗 相關考古題連結（點擊可直接跳轉）：</p>
<ul style="list-style-type: disc !important; padding-left: 1.2rem !important; margin-bottom: 0 !important;">
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 1 題 (Sentiment Analysis)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 7); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 7 題 (Object Detection (IoU / mAP))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 9); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 9 題 (Data Augmentation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 10); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 10 題 (F1 Score)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 26); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 26 題 (LASSO 迴歸 (L1 正則化))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 33); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 33 題 (Word2Vec (Skip-gram 架構))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 34); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 34 題 (全景分割 (Panoptic Segmentation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 36); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 36 題 (網格搜尋 (Grid Search))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_1', 39); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第一科 - 第 39 題 (ARIMA 模型與殘差診斷 (Residual Diagnost...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">114年第二次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 1 題 (交叉驗證 (Cross-Validation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 9); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 9 題 (特徵縮放 (Feature Scaling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 13); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 13 題 (標籤偏差 (Label Bias))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 14); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 14 題 (可解釋人工智慧 (Explainable AI, XAI))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 15); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 15 題 (決定係數 (R-squared, R²))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 16); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 16 題 (F1 分數 (F1 Score))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 19); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 19 題 (不平衡資料集處理 (Imbalanced Data Handling))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 24); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 24 題 (殘差分析 (Residual Analysis))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 28); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 28 題 (取樣偏差 (Sampling Bias))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 34); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 34 題 (分層交叉驗證 (Stratified Cross-Validat...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 36); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 36 題 (同態加密 (Homomorphic Encryption))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 37); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 37 題 (隱私強化計算技術 (Privacy-Enhancing Tech...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 38); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 38 題 (均方誤差 (Mean Squared Error, MSE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 47); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 47 題 (K-近鄰演算法與交叉驗證 (KNN & Cross-Valida...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('114_2_3', 49); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 114年第二次中級第三科 - 第 49 題 (多層感知機參數量計算 (MLP Parameter Calcul...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 1 題 (Part-of-Speech Tagging (POS Tagg...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 3); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 3 題 (Word2Vec (CBOW vs Skip-gram))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 6); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 6 題 (Instance Segmentation vs Semanti...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 7); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 7 題 (Instance Segmentation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 8); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 8 題 (Receiver Operating Characteristi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 9); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 9 題 (Confusion Matrix & AUC)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 12); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 12 題 (Sigmoid Activation Function)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 13); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 13 題 (Prompt Tuning vs Fine-Tuning)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 14); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 14 題 (Parameter-Efficient Fine-Tuning ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 18); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 18 題 (Cross-Modal Alignment)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 19); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 19 題 (Offline vs Online Evaluation Met...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 28); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 28 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 34); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 34 題 (增量學習 (Incremental Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 35); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 35 題 (特徵融合 (Feature Fusion))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 37); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 37 題 (SMOTE (合成少數類別過採樣技術))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_1', 44); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第一科 - 第 44 題 (AI 推論 API 設計 (AI Inference API D...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次中級第三科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 5); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 5 題 (異質變異性分析 (Heteroscedasticity Anal...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 10); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 10 題 (損失函數設計 (Loss Function Design))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 12); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 12 題 (不平衡資料評估指標 (Imbalanced Data Metrics))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 14); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 14 題 (樸素貝氏分類器 (Naive Bayes Classifier))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 25); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 25 題 (對數轉換 (Log Transformation))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 26); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 26 題 (Sliding Window / Lag Features)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 27); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 27 題 (Rolling Window Validation (Time ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 30); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 30 題 (Bias-Variance Tradeoff (High Var...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 34); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 34 題 (Grid Search Cross-Validation)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 37); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 37 題 (SHAP (SHapley Additive exPlanati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 38); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 38 題 (Algorithmic Fairness (Statistica...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('115_1_3', 45); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次中級第三科 - 第 45 題 (Stratified K-Fold Cross-Validation)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 4); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 4 題 (Outlier Handling / Data Preproce...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 5); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 5 題 (SMOTE (Synthetic Minority Over-s...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 6); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 6 題 (Feature Scaling (Standardization...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 10); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 10 題 (Variational Autoencoder (VAE))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 14); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 14 題 (預測性維護 / 異常偵測 (Predictive Mainten...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 20); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 20 題 (資料擴增 (Data Augmentation) / 解決過擬合...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 26); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 26 題 (局部可解釋模型無關解釋（Local Interpretable ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 27); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 27 題 (沙普利加性解釋（SHapley Additive exPlana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 28); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 28 題 (反事實解釋（Counterfactual Explanation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 32); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 32 題 (影像分割（Image Segmentation）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 36); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 36 題 (弱人工智慧（Weak AI / Narrow AI）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 40); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 40 題 (類別不平衡評估指標 F1-score（F1-score for ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 47); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 47 題 (結構化預測（Structured Prediction）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 49); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 49 題 (遷移學習（Transfer Learning）)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_1', 50); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第一科 - 第 50 題 (分類評估指標召回率（Recall / Sensitivity）)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第一次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 1 題 (資料偏差緩解與樣本代表性分析 (Data Bias Mitiga...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 3); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 3 題 (低程式碼平台的即時資料整合 (Real-time Data In...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 9); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 9 題 (少量樣本提示與上下文學習限制 (Few-shot Prompti...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 11); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 11 題 (無程式碼應用開發與自動化機器學習工具選型 (No-Code Ap...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 19); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 19 題 (AI 生成程式碼安全生命週期管理 (Lifecycle Mana...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 23); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 23 題 (鑑別式機器學習與生成式人工智慧 (Discriminative ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 28); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 28 題 (代幣經濟學與推理成本優化 (Token Economics & ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 30); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 30 題 (少樣本學習 (Few-shot Learning))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 41); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 41 題 (偏見檢測與公平性評估 (Bias Detection & Fai...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_1_2', 48); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第一次初級第二科 - 第 48 題 (資料漂移與概念漂移 (Data Drift & Concept ...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第一科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 1 題 (情感分析與關鍵詞提取 (Sentiment Analysis a...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 11); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 11 題 (敏感特徵控制與偏誤防範 (Sensitive Feature C...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 12); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 12 題 (企業多模態資料型態分類 (Enterprise Multimod...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 13); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 13 題 (分類特徵標籤編碼局限性 (Limitations of Labe...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 15); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 15 題 (特徵尺度不敏感性與樹狀模型分裂機制 (Feature Scale...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 19); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 19 題 (分類指標選擇與召回率極大化 (Classification Me...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 23); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 23 題 (迴歸模型評估與均方誤差 (Regression Model Ev...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 31); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 31 題 (部分依賴圖 (Partial Dependence Plot, ...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 34); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 34 題 (多模態對比學習與無監督圖像特徵學習 (Multimodal Co...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_1', 43); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第一科 - 第 43 題 (SHAP (SHapley Additive exPlanati...)</a></li>
    </ul>
  </li>
  <li style="margin-bottom: 0.5rem !important; font-weight: bold !important; color: var(--text-primary) !important;">115年第二次初級第二科：
    <ul style="list-style-type: circle !important; padding-left: 1.2rem !important; margin-top: 0.25rem !important;">
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 1); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 1 題 (檢檢索增強生成 (Retrieval-Augmented Gen...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 17); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 17 題 (法律文本生成與語意分析 (Legal Text Generati...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 19); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 19 題 (檢索增強生成架構與生成式 AI 的範疇 (RAG Archite...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 27); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 27 題 (編碼器-解碼器架構 (Encoder-Decoder Archi...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 28); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 28 題 (提示詞注入防護 (Prompt Injection Defense))</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 43); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 43 題 (AI 專案投資效益與總擁有成本評估 (AI Project RO...)</a></li>
      <li style="margin-bottom: 0.25rem !important;"><a href="#" onclick="jumpToQuestion('primary_115_2_2', 47); return false;" style="color: var(--primary) !important; text-decoration: none !important; font-weight: 500 !important;">🔗 115年第二次初級第二科 - 第 47 題 (總擁有成本與效益分析法 (Total Cost of Owner...)</a></li>
    </ul>
  </li>
</ul>
</div>
</div>

<h3>二、 非監督式學習 (Unsupervised Learning) 🔍 🌐</h3>
<p><b>定義：</b> 在沒有明確標籤的數據下，模型自主探索並發現數據潛在結構的學習方法。</p>
<ul>
    <li><b>特徵：</b> 使用無標籤數據，側重於數據內部的相似性、關聯度或分佈規律。</li>
    <li><b>常用算法：</b> K-means 聚類、DBSCAN 密度分群、主成分分析 (PCA) 降維。</li>
    <li><b>應用場景：</b> 客戶分群與市場區隔、社群偵測、圖像壓縮、異常行為偵測。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--accent); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--accent); font-size: 1rem; font-weight: bold;">💡 非監督式學習 - 考古題典型考點分析</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>主成分分析 (PCA) 降維：</b> 協方差矩陣、正交投影、變異量保留與多重共線性消除。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>DBSCAN 與分群特性：</b> Epsilon 鄰域半徑、MinPts 最小點數定義、核心點/邊界點/雜訊點識別。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>大數據查詢優化：</b> KD-Tree / Ball Tree 距離索引結構，加速空間鄰近點搜索。</span></li>
        <li style="color: var(--accent); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>關聯規則 (Association Rules)：</b> 支持度 (Support)、信賴度 (Confidence)、提升度 (Lift) 及購物籃應用。</span></li>
    </ul>
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
</div>

<h3>三、 強化式學習 (Reinforcement Learning, RL) 🕹️ 🎯</h3>
<p><b>定義：</b> 是一種基於「試誤學習 (Trial-and-Error)」與環境互動回饋的決策學習方法，旨在最大化長期累積回報。</p>
<ul>
    <li><b>特徵：</b> 代理人與環境互動，執行動作並觀察狀態改變，無即時標籤但有延遲的獎勵或懲罰。</li>
    <li><b>常用算法：</b> Q-learning、深度 Q 網路 (DQN)、策略梯度 (Policy Gradient)。</li>
    <li><b>應用場景：</b> 遊戲 AI (如 AlphaGo)、自駕車路徑規劃、自動化生產、金融投資策略。</li>
</ul>
<div style="background-color: var(--card-bg); border-left: 4px solid var(--success); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; color: var(--success); font-size: 1rem; font-weight: bold;">💡 強化式學習 - 考古題典型考點分析</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>核心組成要素：</b> 代理人 (Agent)、環境 (Environment)、狀態 (State)、動作 (Action)、報酬 (Reward)、策略 (Policy)。</span></li>
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>DQN 深度 Q 網路：</b> Q-Table 的侷限、利用深度學習擬合估計 Q 函數以克服維度災難。</span></li>
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>探索與利用 (Exploration vs Exploitation)：</b> 探索度 (\(\epsilon\)-Greedy) 平衡即時與長期最優解。</span></li>
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
    <h4 style="margin-top: 0; color: #8e44ad; font-size: 1rem; font-weight: bold;">💡 深度學習 - 考古題典型考點分析</h4>
    <ul style="margin-bottom: 0; padding-left: 1.2rem; font-size: 0.9rem; list-style-type: disc;">
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>Transformer 自注意力機制：</b> Self-Attention 計算（Query, Key, Value）、縮放點積、並行訓練優勢。</span></li>
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>BERT 雙向預訓練：</b> 遮罩語言模型 (MLM)、下一句預測 (NSP)、雙向上下文 (Bidirectional Context) 理解。</span></li>
        <li style="color: #8e44ad; margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>卷積神經網路 (CNN)：</b> 卷積核 (Kernel) 特徵提取、池化層 (Pooling) 降維、影像特徵工程自動化。</span></li>
    </ul>
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
</div>
</div>`
    }
};
