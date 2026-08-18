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
        "summary": "收錄 AI 應用規劃師初級與中級各科評鑑主題、章節大綱與學習重點指引。",
        "content": `<h3>一、 🎓 【初級】AI 應用規劃師考綱與重點</h3>
<h4>科目一：人工智慧基礎概論</h4>
<ul>
    <li><b>四大評鑑主題：</b> 「人工智慧概念」、「資料處理與分析概念」、「機器學習概念」與「鑑別式 AI與生成式 AI概念」。</li>
    <li><b>章節大綱與學習重點：</b>
        <ul>
            <li><b>人工智慧概念 (3.1)：</b> 學習模擬人類智慧技術（如推理、學習、解決問題等），了解分析型 AI 與生成型 AI 等不同功能分類，掌握大數據與軟硬體算力精進如何推動近十年的 AI 突飛猛進。</li>
            <li><b>資料處理與分析概念 (3.2)：</b> 掌握資料科學的基本概念，作為後續 AI 應用規劃與大數據處理的底蘊基礎。</li>
            <li><b>機器學習概念 (3.3)：</b> 深入理解機器學習的三個核心要素（數據、模型、損失函數）；熟悉監督式學習的特徵（數據集包含標記訊息）與線性迴歸等基本預測模型的應用情境；學習如何減少模型過擬合風險（如交叉驗證之目的、避免模型過度學習雜訊），以及如何利用梯度下降演算法優化模型參數以最小化損失函數。</li>
            <li><b>鑑別式 AI與生成式 AI概念 (3.4)：</b> 理解此二大範式的差異與應用，並學習未來的關鍵整合方向（如提升生成與分類模型的協同能力、開發整合框架）。</li>
        </ul>
    </li>
</ul>

<h4>科目二：生成式 AI應用與規劃</h4>
<ul>
    <li><b>三大評鑑主題：</b> 「No code / Low code 概念」、「生成式 AI應用領域與工具使用」與「生成式 AI導入評估規劃」。</li>
    <li><b>章節大綱與學習重點：</b>
        <ul>
            <li><b>No code / Low code 概念 (3.1)：</b> 理解無程式碼/低程式碼平台如何簡化開發流程、推動<b>「AI 民主化（AI Democratization）」</b>，使其成為企業數位轉型與個人創意釋放的基石。</li>
            <li><b>生成式 AI應用領域與工具使用 (3.2)：</b> 熟悉生成式 AI 在不同實務領域的應用情境，並掌握實際的生成式 AI 工具善用方法與操作。</li>
            <li><b>生成式 AI導入評估規劃 (3.3)：</b> 學習如何評估組織是否適合導入生成式 AI，並涵蓋<b>「生成式 AI導入評估」、「生成式 AI導入規劃」以及「生成式 AI風險管理」</b>等核心步驟，全面充實導入規劃能力。</li>
        </ul>
    </li>
</ul>

<h3>二、 ⚙️ 【中級】AI 應用規劃師考綱與重點</h3>
<h4>科目一：人工智慧技術應用與規劃</h4>
<ul>
    <li><b>三大評鑑主題：</b> 「AI 相關技術應用」、「AI 導入評估規劃」與「AI 技術應用與系統部署」。</li>
    <li><b>章節大綱與學習重點：</b>
        <ul>
            <li><b>AI相關技術應用 (第三章)：</b> 理解核心技術的特點、應用範疇與業務需求的對應。</li>
            <li><b>自然語言處理技術與應用 (3.1)：</b> 包括文本分類（如商品評論自動分類為正面/負面/中立以利推薦排序）、情感分析、命名實體辨識（NER，能自動辨識品牌、人名、地點等實體資訊）、機器翻譯等。</li>
            <li><b>電腦視覺技術與應用 (3.2)：</b> 掌握圖像與視覺資訊的理解、解析與情境實務。</li>
            <li><b>生成式 AI 技術與應用 (3.3)：</b> 探索其在藝術創作、內容生成、虛擬角色創建、電子商務個人化推薦等範疇之巨大潛力。</li>
            <li><b>多模態人工智慧應用 (3.4)：</b> 多種感知模態（如文字、影像、語音）的整合與協作。</li>
            <li><b>AI導入評估規劃 (第四章)：</b> <b>AI導入評估 (4.1) 與導入規劃 (4.2)：</b> 建立組織評估引進 AI 的需求對應、成熟度判斷與實施藍圖。<b>AI風險管理 (4.3)：</b> 評估並控管導入過程中的各種不確定性與潛在風險。</li>
            <li><b>AI技術應用與系統部署 (第五章)：</b> <b>數據準備與模型選擇 (5.1)：</b> 學習建立資料、標註、轉換並進行合適模型挑選的完整流程。<b>AI技術系統集成與部署 (5.2)：</b> 掌握 AI 技術與系統環境的串接、整合與正式上線部署。</li>
        </ul>
    </li>
</ul>

<h4>科目二：大數據處理分析與應用</h4>
<ul>
    <li><b>四大評鑑主題：</b> 「機率統計基礎」、「大數據處理技術」、「大數據分析方法與工具」與「大數據在人工智慧之應用」。</li>
    <li><b>章節大綱與學習重點：</b>
        <ul>
            <li><b>機率統計基礎 (第三章)：</b> 奠定資料分析或 AI 建模前必備之機率與統計核心概念。</li>
            <li><b>敘述性統計與資料摘要技術 (3.1)：</b> 包含對中位數等集中趨勢指標（中位數對極端值不敏感，較能代表偏態分佈的集中趨勢）的掌握。<b>機率分佈與資料分佈模型 (3.2)、假設檢定與統計推論 (3.3)：</b> 建立大數據分析必備的數理基礎。</li>
            <li><b>大數據處理技術 (第四章)：</b> <b>數據收集與清理 (4.1)：</b> 包含資料來源蒐集、前處理與欄位解析，並進行缺失值補全與一致性偵測，把關資料品質。<b>數據儲存與管理 (4.2)：</b> 評估與選擇合適架構（如關聯式資料庫、NoSQL、資料湖），並進行權限管理、版本控管、元資料設計等資料治理。<b>數據處理技術與工具 (4.3)：</b> 學習使用 <b>MapReduce（分散式運算模型）、Spark（記憶體運算平台）</b>及大數據批次與即時處理方法。</li>
            <li><b>大數據分析方法與工具 (第五章)：</b> <b>統計學在大數據中的應用 (5.1) 與常見大數據分析方法 (5.2)：</b> 如關聯分析等常見挖掘手段（例：牛奶與麵包購買關聯性）。<b>數據可視化工具 (5.3)：</b> 掌握資料可視化技巧，如使用箱型圖透過特殊符號（點、星號）單獨標記出異常資料點，便於使用者快速識別。</li>
            <li><b>大數據在人工智慧之應用 (第六章)：</b> 理解資料作為模型學習一部分的定位，掌握資料規模與品質對建模效能之制約。<b>大數據與機器學習 / 鑑別式 AI / 生成式 AI 的結合 (6.1-6.3)</b>。<b>大數據隱私保護、安全與合規 (6.4)：</b> 重視隱私與合規，確保當事人對個人資料之蒐集與利用具備充分知情權與自主決定權，並符合<b>《個人資料保護法》（PDPA，如履行事前告知義務及保護責任）</b>。</li>
        </ul>
    </li>
</ul>

<h4>科目三：機器學習技術與應用</h4>
<ul>
    <li><b>四大評鑑主題：</b> 「機器學習基礎數學」、「機器學習與深度學習」、「機器學習建模與參數調校」與「機器學習治理」。</li>
    <li><b>章節大綱與學習重點：</b>
        <ul>
            <li><b>機器學習基礎數學 (第三章)：</b> 機率/統計之機器學習基礎應用 (3.1) 與線性代數基礎應用 (3.2)。</li>
            <li><b>數值優化技術與方法 (3.3)：</b> 掌握模型優化手段，如非負矩陣分解（NMF）技術，將非負矩陣分解為表示潛在特徵的「基底矩陣」與「組合係數矩陣」之乘積。</li>
            <li><b>機器學習與深度學習 (第四章)：</b> 建構從經典演算法到現代神經網路的完整技術地圖。<b>機器學習原理與技術 (4.1)：</b> 學習監督式學習（分類、迴歸）、非監督式學習（聚類、降維）及強化式學習（序列決策）之核心機制。<b>常見機器學習演算法 (4.2)：</b> 熟悉各經典演算法特點與實務情境。<b>深度學習原理與框架 (4.3)：</b> 掌握神經網路自動提取高維特徵的能力，熟悉 CNN、RNN、Transformer 等現代主流架構與訓練優化。</li>
            <li><b>機器學習建模與參數調校 (第五章)：</b> <b>數據準備與特徵工程 (5.1)、模型選擇與架構設計 (5.2)：</b> 奠定模型建立初期之關鍵工程思維。<b>模型訓練、評估與驗證 (5.3) 以及模型調整與優化 (5.4)：</b> 靈活調整超參數，檢驗模型泛化能力與表現。</li>
            <li><b>機器學習治理 (第六章)：</b> <b>數據隱私、安全與合規：</b> 確保建模過程中之隱私防護，符合法規要求。<b>演算法偏見與公平性：</b> 辨識與降低模型偏見，維護演算法產出之公平與安全性。</li>
        </ul>
    </li>
</ul>`
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
<div style="margin-top: 0.75rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.25rem;">🔗 相關考古題跳轉連結：</p>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem;">
<a href="#" onclick="jumpToQuestion('114_2_1', 1); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某電商企業希望利用自然語言處理（NLP）技術，分析顧客在社群平台與商品評論中的文字內容，以即時掌握顧客對產品的滿意度變化。若採用情感分析（Sentiment Analysis）模型，其主要目的為何？">✏️ 114年第二次中級第一科 第 1 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 7); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在企業導入的智慧監控系統中，模型以物件偵測（Object Detection）方式自動辨識影像中的人物與車輛。若評估指標採用平均精確率（Mean Average Precision, mAP），其中 IoU（Intersection over Union）閾值設定較高時，代表下列哪一項意義？">✏️ 114年第二次中級第一科 第 7 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 9); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某企業在訓練生成式 AI 模型時，導入資料增強（Data Augmentation）技術以擴充訓練資料，但觀察到模型效能反而下降。下列哪一項最可能的原因與對應改善策略最為正確？">✏️ 114年第二次中級第一科 第 9 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 10); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="如果希望同時兼顧「精確率（Precision）」和「召回率（Recall）」，下列哪一個指標可以作為綜合評估的標準？">✏️ 114年第二次中級第一科 第 10 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 26); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在房價預測任務中，若發現特徵如「房間數」與「坪數」存在高度多重共線性（Multicollinearity），為降低共線性對模型參數估計的負面影響，應優先選擇下列哪種模型？">✏️ 114年第二次中級第一科 第 26 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 33); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="企業團隊在使用 Word2Vec 模型訓練客服文本語料時，若訓練資料量龐大且希望模型能更有效捕捉罕見詞的語意關聯，下列哪一種訓練策略最為適合？">✏️ 114年第二次中級第一科 第 33 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 34); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在自駕車影像辨識系統中，開發團隊希望模型能同時辨識每個像素所屬的物件類別（例如道路、建築、行人），又能區分出同類物件的不同個體（例如多位行人）。此時最適合採用下列哪一項電腦視覺技術？">✏️ 114年第二次中級第一科 第 34 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 36); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某資料科學團隊在開發預測模型時，針對多種模型設定（如學習率、樹深度、正則化係數等）進行系統化測試，希望找出在驗證資料上表現最穩定的組合。此過程最可能採用下列哪一種方法？">✏️ 114年第二次中級第一科 第 36 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 39); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某企業的資料科學團隊利用 ARIMA 模型（AutoRegressive Integrated Moving Average Model）預測每週產品銷售量。模型建立完成後，分析人員發現預測誤差隨時間呈現週期性波動，且自相關函數（ACF）顯示殘差在多個時滯（Lag）上仍顯著不為零。根據上述現象，最合理的模型診斷結論為何？">✏️ 114年第二次中級第一科 第 39 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 1); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某零售企業建立一個銷售預測模型，希望評估該模型在不同月份的新資料上，是否仍能維持穩定的預測表現。資料科學團隊計畫利用統計方法檢驗模型對未觀察資料的適應能力與泛化效果。下列哪一種方法最適合用於此目的？">✏️ 114年第二次中級第三科 第 1 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 9); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在建構以距離為基礎的機器學習模型（如 KNN、SVM）時，下列哪一項資料前處理方式最為關鍵？">✏️ 114年第二次中級第三科 第 9 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 13); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="標籤偏差(Label Bias)通常是因為什麼原因造成？">✏️ 114年第二次中級第三科 第 13 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 14); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="下列哪一種 AI 應用情境中，模型的可解釋性（Explainability）最為關鍵？">✏️ 114年第二次中級第三科 第 14 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 15); return false;" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在線性迴歸模型中，若 R²值為 0.85，其意義為何？">✏️ 114年第二次中級第三科 第 15 題</a>
</div>
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
<div style="margin-top: 0.75rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.25rem;">🔗 相關考古題跳轉連結：</p>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem;">
<a href="#" onclick="jumpToQuestion('114_2_1', 8); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="關於 Softmax 與 Max-Pooling，下列敘述何者正確？">✏️ 114年第二次中級第一科 第 8 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 12); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某金融科技公司建立房價預測模型，使用多項特徵（如建坪、房齡、樓層、總價等）進行線性迴歸分析（Linear Regression Analysis）。資料分析師發現多個特徵之間存在高度相關性，導致模型係數不穩定、預測誤差上升。為解決此問題，下列哪一種方法最適合？">✏️ 114年第二次中級第一科 第 12 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 45); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="進行影像分類任務時，研究團隊嘗試利用主成分分析（Principal Component Analysis, PCA）將輸入特徵從 1024 維降至 100 維，並將降維後的資料輸入支持向量機（Support Vector Machine, SVM）模型進行訓練。關於此作法，下列哪一項描述最為合理？">✏️ 114年第二次中級第一科 第 45 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 48); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某數據工程師使用 DBSCAN 演算法對一份數百萬筆的高維顧客資料進行聚類分析，但發現程式執行速度極慢，甚至出現記憶體不足的情況。若要在不改變演算法核心邏輯的前提下，最有效提升其運算效率的作法為何？">✏️ 114年第二次中級第一科 第 48 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 4); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在執行 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）群集分析時，若某資料點鄰域內的樣本數不足以形成核心點（Core Point），且該點未被任何核心點的鄰域所包含，也未與其他群集形成密度可達關係（Density Reachability），此資料點最終將被歸類為哪一種類型？">✏️ 114年第二次中級第三科 第 4 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 23); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="一家再生能源公司希望預測未來三個月太陽能發電量的波動範圍。由於氣候條件具有高度隨機性，且輸入變數（如日照時數、雲量、溫度）之間存在不確定關係，工程團隊決定以隨機抽樣方式模擬多種可能情境，以估算整體發電量的機率分佈與風險區間。請問此時所採用的技術最符合下列哪一種方法？">✏️ 114年第二次中級第三科 第 23 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 35); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某公司針對製程感測器資料進行主成分分析（PCA），經標準化與協方差矩陣分解後，得到三個主成分的特徵值如下：λ1=6.0, λ2=3.0, λ3=1.0。若團隊決定僅保留能解釋至少 80% 總變異量的主成分，以進行後續模型建構，下列哪一項敘述最合理且數據解讀正確？">✏️ 114年第二次中級第三科 第 35 題</a>
<a href="#" onclick="jumpToQuestion('114_2_3', 46); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="假設研究人員已將含有雜訊的手寫數字影像存放在變數 noisy 中。他們嘗試使用 PCA 進行降噪，並希望能保留影像的主要特徵，同時去除影像中的雜訊。然而，當程式執行後，觀察到影像仍然含有明顯的雜訊。研究人員懷疑是程式中某個步驟的設定不正確，導致 PCA 沒有發揮降噪的作用。請問哪一段程式碼需要修改，才能讓 PCA 對 noisy 影像有效去噪？">✏️ 114年第二次中級第三科 第 46 題</a>
<a href="#" onclick="jumpToQuestion('115_1_1', 31); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某資料工程師嘗試對包含 300 個特徵的使用者行為資料集使用 DBSCAN 進行群集分析，但發現幾乎所有資料點都被判定為雜訊點（Noise Points ），難以形成有意義的群集，即使不斷調整ε（Epsilon）與MinPts 參數也無濟於事。請問下列何者為此問題最可能的根本原因？">✏️ 115年第一次中級第一科 第 31 題</a>
<a href="#" onclick="jumpToQuestion('115_1_1', 42); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某保險公司將理賠金額預測模型正式部署上線，MLOps 團隊設計監控機制。三個月後模型整體均方根誤差（RMSE）無明顯變化，但業務單位反映高額理賠案件的預測誤差明顯增加。經分析，高額理賠案件僅佔約 5%的樣本比例，且未被監控機制及時發現。請問最可能的設計缺陷為何？">✏️ 115年第一次中級第一科 第 42 題</a>
<a href="#" onclick="jumpToQuestion('115_1_3', 6); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某資料科學家欲對 512 維詞嵌入向量（共 10 萬筆）進行視覺化以探索群集結構，同時另一工程師需將 200 個製程特徵降維後作為 XGBoost 的輸入特徵。關於 t-SNE 與 PCA 選型，下列敘述何者最正確？">✏️ 115年第一次中級第三科 第 6 題</a>
<a href="#" onclick="jumpToQuestion('115_1_3', 7); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某金融團隊建立信貸風險模型，特徵工程後共產生 200 個變數，其中「月收入」、「年收入」、「季收入」三者高度相關。模型上線後業務單位反映：每次重新訓練後，模型輸出的重要特徵清單在這些高度相關特徵間反覆變動，難以向審查單位解釋。請問下列何者為造成此現象最可能的原因？">✏️ 115年第一次中級第三科 第 7 題</a>
<a href="#" onclick="jumpToQuestion('115_1_3', 15); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某資料科學家將客戶資料進行分群，使用 K-means（K=5）後發現部分群集呈現半月形（非凸）結構，且資料中存在少數離群值（Outliers）。他同時觀察到每次執行結果略有不同。下列敘述何者最完整且準確地反映 K-means 在此情境中的已知限制？">✏️ 115年第一次中級第三科 第 15 題</a>
<a href="#" onclick="jumpToQuestion('115_1_3', 28); return false;" style="font-size: 0.8rem; color: var(--accent); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某房仲平台要預測物件成交價，資料集含 50 個特徵，其中部分特徵與房價呈非線性關係，且業務單位要求模型須能提供整體特徵重要性以供稽核。下列哪一種模型選擇策略最符合需求？">✏️ 115年第一次中級第三科 第 28 題</a>
</div>
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
        <li style="color: var(--success); margin-bottom: 0.25rem;"><span style="color: var(--text-primary);"><b>探索與利用 (Exploration vs Exploitation)：</b> 貪婪策略 (\(\epsilon\)-Greedy) 平衡即時與長期最優解。</span></li>
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
<div style="margin-top: 0.75rem; border-top: 1px dashed rgba(0,0,0,0.08); padding-top: 0.75rem;">
<p style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.25rem;">🔗 相關考古題跳轉連結：</p>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem;">
<a href="#" onclick="jumpToQuestion('114_2_1', 2); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某跨國金融科技公司導入 Transformer 架構開發多語客服系統，以提升長篇金融文件的自動翻譯品質。下列何者為該模型能顯著改善翻譯準確度的主要原因？">✏️ 114年第二次中級第一科 第 2 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 3); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某企業計畫應用 BERT 模型分析大量顧客意見，以強化客服自動回覆系統。在 BERT 的預訓練過程中， 「遮罩語言模型（Masked Language Model, MLM） 」的主要訓練策略為何？">✏️ 114年第二次中級第一科 第 3 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 4); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在詞向量（Word Embedding）訓練方法中，GloVe（Global Vectors for Word Representation）與 Word2Vec 的主要差異為何？">✏️ 114年第二次中級第一科 第 4 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 11); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="企業資料分析團隊使用 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法進行顧客行為分群，並希望模型能自動區分主要群集與雜訊資料。在此演算法中，決定聚類結果的兩個主要超參數為下列何者？">✏️ 114年第二次中級第一科 第 11 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 14); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在調整模型超參數（Hyperparameters）時，若希望避免因過度調整參數而導致過擬合，下列哪一種做法最有效提升模型的泛化能力？">✏️ 114年第二次中級第一科 第 14 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 16); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="下列哪一種情境中最適合使用「序列到序列（Seq2Seq）」模型？">✏️ 114年第二次中級第一科 第 16 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 18); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="當 Transformer 模型發生「注意力分布過於平均（Attention Collapse）」的情形時，導致模型無法有效聚焦於關鍵資訊，下列哪一項策略可有效改善此問題？">✏️ 114年第二次中級第一科 第 18 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 27); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某企業需分析半結構化的系統日誌（JSON 格式），以提取關鍵的時序特徵供故障預測模型使用。考量日誌結構複雜且包含巢狀欄位（Nested Fields），下列哪一種策略最有效且實務可行？">✏️ 114年第二次中級第一科 第 27 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 28); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="在一個同時包含連續型特徵與類別型特徵的資料集中，若希望透過適當的特徵工程流程來提升模型整體表現，下列哪一種作法最為合適？">✏️ 114年第二次中級第一科 第 28 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 35); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某媒體公司計畫導入 CLIP（Contrastive Language–Image Pre-training）模型，以協助大量影像自動標註與搜尋，並希望在無需新增標訓資料的情況下，僅透過文字提示（Text Prompt）即可識別影像內容。請問此應用情境中，CLIP 能夠達成的關鍵技術特性為何？">✏️ 114年第二次中級第一科 第 35 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 38); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某影像設計團隊在使用 Stable Diffusion 生成 4K 級產品圖時，發現影像邊緣與細節存在顆粒化與模糊現象。
若僅能在生成階段進行調整，希望提升畫面清晰度與紋理層次，同時避免過度平滑，下列哪一項作法最適合？">✏️ 114年第二次中級第一科 第 38 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 40); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="下列哪一項最正確地描述了 VAE（Variational Autoencoder）、GAN（Generative Adversarial Network）與擴散模型（Diffusion Model）在多模態潛在空間對齊（Latent Alignment）與生成策略上的根本差異？">✏️ 114年第二次中級第一科 第 40 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 42); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="若部署一個深度學習模型至金融風控系統，該模型採用鑑別式架構（如 Transformer Classifier）。然而上線後，模型對新樣本的分類錯誤率顯著上升，經檢查發現，輸入資料分佈已與原訓練集明顯不同。針對此情形，下列哪一種應對策略最為適合？">✏️ 114年第二次中級第一科 第 42 題</a>
<a href="#" onclick="jumpToQuestion('114_2_1', 43); return false;" style="font-size: 0.8rem; color: #8e44ad; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.25rem; border: 1px solid rgba(0,0,0,0.05); background-color: rgba(0,0,0,0.01); padding: 0.3rem 0.5rem; border-radius: 6px; transition: all 0.2s;" title="某金融科技公司欲導入 AI 模型協助客服郵件自動分類（投訴、詢問、表揚）。團隊同時考慮兩種模型設計：方案 A（生成式路徑）：採用VAE 建構潛在語意空間，再結合下游分類器進行標籤預測；方案 B（鑑別式路徑）：採用BERT Classifier 直接根據輸入文本進行監督式分類。現有標註資料約 2,000 筆，資料分佈均勻但擴充成本高。若團隊希望公平比較兩種模型的資料利用效率與泛化能力，下列哪一種實驗設計最能突顯兩者的本質差異？">✏️ 114年第二次中級第一科 第 43 題</a>
</div>
</div>
</div>`
    }
};
