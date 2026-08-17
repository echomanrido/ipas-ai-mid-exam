const EXAM_DATA = {
  "114_2_1": {
    "title": "114 年第二次 - 第一科：人工智慧技術應用與規劃",
    "questions": [
      {
        "id": 1,
        "question": "某電商企業希望利用自然語言處理（NLP）技術，分析顧客在社群平台與商品評論中的文字內容，以即時掌握顧客對產品的滿意度變化。若採用情感分析（Sentiment Analysis）模型，其主要目的為何？",
        "options": {
          "A": "預測顧客使用的語言風格與語氣；",
          "B": "判斷文本中所表達的情感傾向；",
          "C": "將顧客留言自動翻譯成企業內部指定語言；",
          "D": "產生顧客評論的自動化摘要內容"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，情感分析的核心目的即是從文本中自動識別並提取主觀資訊，藉此判斷作者的情感傾向（如正面、負面或中立）。選項 (A) 不正確，風格預測屬文體學範疇，非情感分析重點；選項 (C) 不正確，這是機器翻譯（Machine Translation）的任務；選項 (D) 不正確，這是文本摘要（Text Summarization）的範疇。",
        "ml_method": "Sentiment Analysis",
        "ml_method_explanation": "情感分析（Sentiment Analysis）是自然語言處理中的重要技術，其基本原理是運用機器學習或深度學習模型（如 RNN、Transformer、BERT 等）對輸入文本進行語意特徵擷取，並將其映射到預定義的情感類別中。核心機制包含文本前處理（去除雜訊、斷詞）、詞嵌入轉換（將文字轉為高維向量），以及分類器運算。現今的模型多半基於大型預訓練語言模型進行微調，使其能更精確地捕捉上下文的細微關聯、反諷語氣或多重情感，從而提供準確的情感傾向判斷。",
        "examples": [
          "在金融市場領域，投資機構透過爬蟲技術收集大量財經新聞、社群平台上的股票討論區文章，並利用情感分析來判斷市場對特定公司或產業的看多與看空情緒，進而作為演算法交易策略中的一項量化指標，以預測短期股價波動。",
          "在政治與公共政策管理中，政府單位可藉由情感分析即時監測社群網路上對於新推行政策或重大社會事件的民意反應。透過量化民眾的滿意或不滿意情緒，相關部門能迅速掌握輿情趨勢，及早擬定公關應對策略或調整施政方向。"
        ],
        "comparison": "情感分析（Sentiment Analysis）主要用於識別文本的情緒極性（如正負向），通常應用於社群輿情監測與品牌管理；相較之下，文本摘要（Text Summarization）旨在提取長文本的核心重點，適用於新聞快速閱讀與會議記錄；而意圖辨識（Intent Recognition）則著重於理解使用者當下的具體需求（如購買或投訴），廣泛應用於智能客服與對話機器人系統中。這三者雖同屬 NLP 領域，但在商業價值與落地場景上各有不同的側重點。",
        "keywords": [
          "情感分析 (Sentiment Analysis)",
          "自然語言處理 (Natural Language Processing)",
          "輿情監測 (Public Opinion Monitoring)",
          "情緒極性 (Emotional Polarity)",
          "文本分類 (Text Classification)"
        ],
        "extended_tech": [
          {
            "name": "基於方面的情感分析 (Aspect-Based Sentiment Analysis)",
            "desc": "此技術能針對文本中的特定實體或屬性（如餐廳的服務或餐點）進行更細粒度的情感分析，幫助企業精準定位產品的優缺點，從而進行具體改善。"
          },
          {
            "name": "情緒識別 (Emotion Recognition)",
            "desc": "有別於簡單的正負面情感，情緒識別能進一步分類出喜悅、憤怒、悲傷或恐懼等多種細微情緒，常應用於心理健康監測與高階互動式 AI 客服中。"
          },
          {
            "name": "意圖分類 (Intent Classification)",
            "desc": "在對話系統中，透過意圖分類可以快速判斷使用者發言的目的（如退貨、查詢進度），從而自動觸發對應的業務流程，大幅減少人工客服的負載。"
          }
        ],
        "terminology": [
          "Sentiment Polarity",
          "Aspect Extraction",
          "Opinion Mining",
          "Emotion Detection",
          "Subjectivity Analysis"
        ]
      },
      {
        "id": 2,
        "question": "某跨國金融科技公司導入 Transformer 架構開發多語客服系統，以提升長篇金融文件的自動翻譯品質。下列何者為該模型能顯著改善翻譯準確度的主要原因？",
        "options": {
          "A": "透過自注意力機制（Self-Attention Mechanism）捕捉長距離語境依賴關係；",
          "B": "透過卷積運算（Convolution Operation）加速訓練過程；",
          "C": "透過強化學習（Reinforcement Learning）自動調整語句生成策略；",
          "D": "透過資料增強（Data Augmentation）平衡多語語料比例"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，Transformer 架構之所以能在翻譯及自然語言處理任務上取得突破，主要歸功於自注意力機制，它能同時計算句子中所有詞語彼此之間的關聯度，有效捕捉長距離的語境依賴。選項 (B) 是 CNN 的特徵，非 Transformer 的核心；選項 (C) 雖然生成模型可能會用到 RL，但並非 Transformer 改善翻譯的主因；選項 (D) 屬於資料處理手法，與模型架構無直接關係。",
        "ml_method": "Transformer",
        "ml_method_explanation": "Transformer 是一種基於自注意力機制（Self-Attention）的深度學習架構，最早由 Google 於 2017 年提出。有別於傳統的 RNN 或 LSTM 必須依序處理序列資料，Transformer 能夠平行處理整個序列，大幅提升訓練速度。其核心機制在於自注意力層，該層會計算句子中每個詞彙與其他所有詞彙的關聯權重，從而精準捕捉長距離的依賴關係與上下文語意。此外，Transformer 結合了位置編碼（Positional Encoding）來保留字詞的順序資訊，並運用多頭注意力（Multi-Head Attention）從不同表示子空間中汲取特徵，成為現今 LLM 的基石。",
        "examples": [
          "在醫療影像報告系統中，醫院利用基於 Transformer 的架構將醫生口述的語音或凌亂的病例紀錄自動轉換為結構化的文字報告。模型能夠根據長篇病史上下文，精準辨識出專業醫療術語及病徵，減少人為撰寫錯誤。",
          "在軟體開發領域，許多企業導入基於 Transformer 架構的 AI 程式碼輔助工具（如 GitHub Copilot）。當開發者輸入部分程式碼或註解時，模型能透過捕捉全域程式碼的邏輯關聯，準確預測並自動補全後續的程式碼片段，大幅提升開發效率。"
        ],
        "comparison": "Transformer 架構透過自注意力機制解決了長距離依賴的問題，主要應用於機器翻譯與大型語言模型領域；相較之下，卷積神經網路（CNN）擅長提取局部空間特徵，通常應用於影像辨識與電腦視覺場景；而循環神經網路（RNN/LSTM）雖然也能處理序列資料，但因循序運算的特性容易產生梯度消失，適合處理較短的時間序列預測（如短期股價或語音辨識），在長文本理解上遠不及 Transformer 高效。",
        "keywords": [
          "自注意力機制 (Self-Attention Mechanism)",
          "序列處理 (Sequence Processing)",
          "長距離依賴 (Long-range Dependencies)",
          "機器翻譯 (Machine Translation)",
          "深度學習架構 (Deep Learning Architecture)"
        ],
        "extended_tech": [
          {
            "name": "預訓練語言模型 (Pre-trained Language Models)",
            "desc": "基於 Transformer 的預訓練模型（如 BERT 或 GPT），能在大量無標註文本上學習語言通則，隨後只需微調即可應用於各類 NLP 任務，是目前企業 AI 的主流做法。"
          },
          {
            "name": "視覺變換器 (Vision Transformer, ViT)",
            "desc": "將 Transformer 的注意力機制引入影像處理領域，將圖片切割為多個區塊並視為序列，在許多大型視覺識別任務中展現出超越傳統 CNN 的優異效能。"
          },
          {
            "name": "多模態變換器 (Multimodal Transformer)",
            "desc": "能夠同時處理並融合文字、圖像與聲音等多種模態資料的 Transformer 架構，廣泛應用於影音自動加上字幕或跨模態內容檢索系統中。"
          }
        ],
        "terminology": [
          "Positional Encoding",
          "Multi-Head Attention",
          "Encoder-Decoder",
          "Contextual Embeddings",
          "Sequence-to-Sequence"
        ]
      },
      {
        "id": 3,
        "question": "某企業計畫應用 BERT 模型分析大量顧客意見，以強化客服自動回覆系統。在 BERT 的預訓練過程中， 「遮罩語言模型（Masked Language Model, MLM） 」的主要訓練策略為何？",
        "options": {
          "A": "依序遮罩句尾詞語，讓模型從左到右逐步生成完整句子；",
          "B": "隨機遮罩部分詞語，並讓模型根據雙向上下文（Bidirectional Context）預測被遮罩的詞；",
          "C": "透過對抗訓練（Adversarial Training）生成語意相似的擾動樣本以提升泛化性；",
          "D": "以未遮罩的詞為條件，使用解碼器（Decoder）結構重建整句內容"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，BERT 透過遮罩語言模型（MLM）訓練，會隨機將輸入句子中的部分詞彙（約 15%）替換成 [MASK] 標記，迫使模型必須同時參考該詞的左側與右側上下文（雙向語境）來預測該遮罩詞。選項 (A) 是單向（Autoregressive）語言模型如 GPT 的做法；選項 (C) 屬對抗訓練，非 MLM 策略；選項 (D) 是類似 BART 或 T5 這類編碼器-解碼器架構的訓練方式，而 BERT 僅使用編碼器。",
        "ml_method": "Masked Language Model (MLM)",
        "ml_method_explanation": "遮罩語言模型（Masked Language Model, MLM）是一種自監督學習策略，最著名的應用就是 BERT。其基本原理是在訓練資料準備階段，隨機隱藏（Mask）句子中的部分詞彙，然後要求神經網路根據剩餘的未隱藏詞彙來猜測這些被遮蔽的字詞。這種機制的強大之處在於它打破了傳統單向語言模型只能「由左至右」或「由右至左」預測的限制，使得模型在理解任何一個詞時，都能夠同時融合該詞前後的完整上下文資訊（Bidirectional Context），從而建立起極其豐富深層的語意表徵能力。",
        "examples": [
          "在搜尋引擎優化（SEO）與資訊檢索系統中，工程師可運用基於 MLM 訓練出來的語意向量模型來理解使用者查詢的真實意圖。即使使用者輸入的關鍵字存在錯字或語意不清，模型也能憑藉上下文還原查詢本意，提供更精準的搜尋結果。",
          "在網路資安防禦中，企業利用類似 MLM 的概念來訓練異常日誌偵測系統。系統會學習正常網路行為日誌的序列上下文特徵，當遇到一段被刻意竄改或特徵隱藏的攻擊日誌時，模型能透過雙向關聯性分析指出日誌序列中的不合理之處，從而即時發布資安警報。"
        ],
        "comparison": "遮罩語言模型（MLM，如 BERT）透過雙向上下文來預測缺失字詞，非常適合需要深度理解語意的任務，例如文本分類與實體辨識；相對地，自迴歸語言模型（Autoregressive Model，如 GPT）則是基於前面的字詞來預測下一個字，這種單向生成的特性使其在文本創作、對話生成與文章續寫等任務上表現卓越。兩者雖然都是預訓練技術，但 MLM 重於「理解」，而自迴歸模型重於「生成」，在業務落地時應依據任務本質進行選擇。",
        "keywords": [
          "遮罩語言模型 (Masked Language Model)",
          "雙向上下文 (Bidirectional Context)",
          "預訓練 (Pre-training)",
          "自監督學習 (Self-supervised Learning)",
          "文本理解 (Text Understanding)"
        ],
        "extended_tech": [
          {
            "name": "下一句預測 (Next Sentence Prediction, NSP)",
            "desc": "這是 BERT 預訓練中的另一項關鍵任務，讓模型判斷兩段文本在原文中是否相鄰，有助於模型理解句子與句子之間的邏輯關聯，應用於問答系統尤為有效。"
          },
          {
            "name": "動態遮罩 (Dynamic Masking)",
            "desc": "在訓練過程中，每次將相同文本輸入模型時皆隨機產生不同的遮罩位置，這能迫使模型學習到更豐富的上下文變化，進一步提升語意表徵的泛化能力。"
          },
          {
            "name": "文本相似度比對 (Semantic Textual Similarity)",
            "desc": "利用 MLM 訓練出的深層語意向量，企業可以快速比對兩篇文件的相似程度，廣泛應用於合約比對、重複問題偵測以及內容推薦系統中。"
          }
        ],
        "terminology": [
          "Contextual Representation",
          "Autoencoding",
          "Self-attention",
          "Fine-tuning",
          "Tokenization"
        ]
      },
      {
        "id": 4,
        "question": "在詞向量（Word Embedding）訓練方法中，GloVe（Global Vectors for Word Representation）與 Word2Vec 的主要差異為何？",
        "options": {
          "A": "Word2Vec 以詞頻權重訓練詞向量，而 GloVe 以隨機初始化向量進行學習；",
          "B": "Word2Vec 以全局統計矩陣為基礎，而 GloVe 採用神經網路進行上下文預測；",
          "C": "Word2Vec 為基於預測的模型，而 GloVe 為基於共現統計的模型；",
          "D": "Word2Vec 僅能用於靜態文本語料，而 GloVe 可應用於即時語料更新"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，Word2Vec 是一種基於預測（Predictive）的神經網路模型（如 CBOW 預測目標詞、Skip-gram 預測上下文）；而 GloVe 則是基於語料庫的全局共現矩陣（Global Co-occurrence Matrix）進行統計與矩陣分解的模型。選項 (A) 和 (B) 描述恰好與事實相反或有誤；選項 (D) 兩者皆為靜態詞向量模型，都難以直接對即時語料進行線上熱更新。",
        "ml_method": "Word Embedding (GloVe vs Word2Vec)",
        "ml_method_explanation": "詞向量（Word Embedding）是將文字轉換為實數向量的技術，目的在於捕捉詞彙之間的語意及語法關係。Word2Vec 利用局部上下文窗口，透過神經網路建立預測任務（猜測鄰近詞或中心詞）來迭代優化詞向量；GloVe（Global Vectors）則從宏觀角度出發，先統計整個語料庫中詞彙兩兩共同出現的頻率矩陣，再利用矩陣分解技術將這些共現統計資訊壓縮成低維向量。這使得 GloVe 能夠更有效地利用全局統計特徵，而 Word2Vec 則擅長捕捉局部關聯，兩者皆為 NLP 早期發展的里程碑。",
        "examples": [
          "電子商務平台的商品推薦系統利用詞向量技術，將使用者的瀏覽紀錄、購物清單與商品標籤轉化為高維向量。透過計算不同商品向量之間的餘弦相似度，系統可以向消費者精準推薦與其購物車中商品最具語意關聯性的互補產品。",
          "在人力資源招募系統中，企業運用詞向量將求職者的履歷文字及企業的職缺描述轉換為數值表示。這樣可以自動比對並篩選出技能描述上雖然用詞不同（例如『軟體工程師』與『程式設計師』）但實質能力高度匹配的潛在候選人，大幅減少人工審閱時間。"
        ],
        "comparison": "GloVe 與 Word2Vec 皆屬於靜態詞向量技術，能將詞彙轉換為固定向量以捕捉語意相似度，常應用於早期的文本分類或簡單推薦系統中；相較之下，動態詞向量模型（如 ELMo 或 BERT）則會根據上下文即時賦予同一個詞彙不同的向量表示（解決一詞多義問題），在處理複雜語境與高階問答任務時展現出壓倒性的優勢，現今已成為企業級 NLP 應用的標準配備。",
        "keywords": [
          "詞向量 (Word Embedding)",
          "共現統計 (Co-occurrence Statistics)",
          "全局矩陣 (Global Matrix)",
          "上下文預測 (Context Prediction)",
          "語意表示 (Semantic Representation)"
        ],
        "extended_tech": [
          {
            "name": "FastText",
            "desc": "這是一種改進的詞向量模型，將詞彙拆解為子詞（Subword）的 N-gram 組合，這使其能夠有效處理拼寫錯誤與未登錄詞（OOV），特別適合處理構詞複雜的語言。"
          },
          {
            "name": "餘弦相似度分析 (Cosine Similarity Analysis)",
            "desc": "藉由計算兩個詞向量在空間中的夾角餘弦值，企業可量化文本之間的語意接近程度，常被用於文件分群與檢索增強系統中的初步過濾。"
          },
          {
            "name": "文件嵌入 (Doc2Vec)",
            "desc": "延伸自 Word2Vec，能將整篇文件或段落轉換為單一的高維向量表示，這對於長篇新聞分類、專利文件檢索或社群貼文分析具有極大的應用價值。"
          }
        ],
        "terminology": [
          "Skip-gram",
          "Continuous Bag of Words (CBOW)",
          "Co-occurrence Matrix",
          "Dimensionality Reduction",
          "Out-of-Vocabulary (OOV)"
        ]
      },
      {
        "id": 5,
        "question": "某企業以詞頻–逆文件頻率（Term Frequency–Inverse Document Frequency, TF-IDF）方法分析顧客意見內容，但發現模型在處理篇幅較長的回饋文本時，無法準確反映關鍵詞的重要性。下列何者為造成此現象的主要原因？",
        "options": {
          "A": "長文本中的詞頻偏高，導致常見詞權重被過度放大；",
          "B": "長文本中缺乏明確句子邊界，造成 TF-IDF 無法計算詞頻；",
          "C": "TF-IDF 無法同時處理多份文件；",
          "D": "長文本會改變 IDF（Inverse Document Frequency）的計算，使所有詞權重趨於相近"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，在 TF-IDF 中，詞頻（TF）計算特定詞在該文件中出現的次數。若文件篇幅較長，某些字詞（甚至是不太具代表性的詞）出現次數會隨之增加，若無適當的文件長度正規化（Normalization），會導致這些詞的 TF 值過度放大，進而扭曲特徵權重。選項 (B) 錯誤，斷詞與句子邊界無絕對關聯；選項 (C) 錯誤，TF-IDF 本身即是為了處理多份文件而設計；選項 (D) 錯誤，IDF 取決於包含該詞的文件數量，不受單一長文本內部長度的直接影響。",
        "ml_method": "TF-IDF",
        "ml_method_explanation": "TF-IDF（詞頻-逆文件頻率）是一種用於資訊檢索與文字探勘的統計方法，用以評估一個詞彙對於語料庫中某份文件的重要程度。其原理包含兩部分：TF（詞頻）衡量詞語在單份文件出現的頻率；IDF（逆文件頻率）則衡量該詞在整個語料庫的稀有程度。將兩者相乘，若一個詞在特定文件中頻繁出現，但在其他文件中很少見，它就會獲得較高的權重，代表該詞具有極強的鑑別力。然而其缺點是無法捕捉詞彙間的順序與語意關聯，且對長度差異過大的文本較敏感。",
        "examples": [
          "在數位圖書館的全文檢索系統中，TF-IDF 廣泛應用於對數以萬計的學術論文進行自動關鍵字提取與索引建置。當使用者輸入查詢關鍵字時，系統利用此演算法快速計算各篇論文的相關性得分，將最相關的文獻排列在搜尋結果的最前方。",
          "新聞媒體平台透過 TF-IDF 演算法自動對每日產出的大量新聞稿件進行主題標籤（Tagging）。藉由擷取每篇新聞中權重最高的幾個關鍵字，系統可以自動將新聞分類至特定的版面，並推播給關注這些主題的讀者群體。"
        ],
        "comparison": "TF-IDF 是一種基於字詞統計的特徵提取技術，運算快速且直觀，常應用於早期的搜尋引擎與簡單的文件關鍵字擷取；相較之下，BM25 演算法改良了 TF-IDF 對長文本權重放大的缺陷，成為現代搜尋引擎（如 Elasticsearch）的預設算法；而近年流行的密集檢索（Dense Retrieval）技術則是利用深度神經網路將文本轉為語意向量，能理解字面不同但語意相同的查詢，應用於高階 RAG 系統的知識檢索中。",
        "keywords": [
          "詞頻-逆文件頻率 (TF-IDF)",
          "特徵提取 (Feature Extraction)",
          "資訊檢索 (Information Retrieval)",
          "關鍵字擷取 (Keyword Extraction)",
          "文件正規化 (Document Normalization)"
        ],
        "extended_tech": [
          {
            "name": "BM25 演算法 (Okapi BM25)",
            "desc": "一種基於機率檢索框架的改進算法，引入了文本長度懲罰與詞頻飽和機制，能有效避免長文本或重複字詞導致的分數異常，是業界搜尋引擎的主力配置。"
          },
          {
            "name": "文字雲視覺化 (Word Cloud Visualization)",
            "desc": "企業常將 TF-IDF 計算出的高權重關鍵字，結合視覺化套件生成文字雲圖表，幫助行銷人員一眼看出近期社群討論的核心話題與消費者關注焦點。"
          },
          {
            "name": "停用詞過濾 (Stop Words Removal)",
            "desc": "在進行 TF-IDF 運算前，必須先過濾掉「的、是、在」等毫無區分力的常見助詞或代名詞，這是確保統計權重能精準反映核心語意的重要前處理步驟。"
          }
        ],
        "terminology": [
          "Term Frequency",
          "Inverse Document Frequency",
          "Bag-of-Words",
          "Document Frequency",
          "Vector Space Model"
        ]
      },
      {
        "id": 6,
        "question": "某企業嘗試以 N-gram 語言模型建立客服自動回覆系統，但發現模型生成的句子雖在片段上合理，卻缺乏整體語意連貫性。此問題最可能源自 N-gram 模型的哪一項限制？",
        "options": {
          "A": "N-gram 模型在訓練過程中需要龐大計算量，導致長句無法收斂；",
          "B": "N-gram 模型僅根據固定長度的前序詞建立機率估計，難以捕捉長距離依賴關係（Long-range Dependencies）；",
          "C": "N-gram 模型缺乏語意嵌入（Semantic Embedding）層，因此無法表徵詞語間的語意相似度；",
          "D": "N-gram 模型假設詞與詞之間相互獨立，導致無法建構上下文語意關聯"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，N-gram 模型的核心假設（馬可夫假設）是下一個詞的出現僅與前 N-1 個詞相關。當 N 值較小（如 2 或 3）時，模型無法獲知句子前段的資訊，因而無法維持長句的整體語意連貫性（即無法捕捉長距離依賴）。選項 (A) 錯誤，N-gram 計算量相對較小；選項 (C) 雖然 N-gram 沒有語意嵌入，但生成連貫性差的最直接原因是上下文範圍受限；選項 (D) 描述的是 Bag-of-Words 或 Unigram 模型的極端假設，一般 N-gram 並非完全假設相互獨立，而是條件獨立。",
        "ml_method": "N-gram Language Model",
        "ml_method_explanation": "N-gram 語言模型是一種基於統計機率的傳統自然語言處理技術。它的核心理念在於利用馬可夫假設（Markov Assumption）來簡化語言序列的機率計算，亦即預測下一個詞彙的機率只依賴於其前面的 N-1 個詞彙。舉例來說，在 Trigram（3-gram）模型中，預測某詞只需查看它前面的兩個詞。透過統計龐大語料庫中這些詞組的共現頻率，模型便能生成文本或評估句子的合理性。儘管計算速度快且易於實作，但其嚴重受限於無法理解長距離語境與嚴重的資料稀疏（Data Sparsity）問題。",
        "examples": [
          "在智慧型手機的虛擬鍵盤輸入法中，系統利用 N-gram 語言模型來提供「下一個字詞預測」的功能。當使用者打出「今天天氣很」，模型會根據過去龐大的語料統計，瞬間計算出後接「好」或「熱」的機率最高，進而將其顯示在建議列中供使用者選取。",
          "在早期的拼字檢查與文法糾錯軟體中，N-gram 被用來識別不合理或機率極低的詞彙組合。如果使用者輸入了一個在語料庫中從未出現過的 Bigram（例如不符合常理的字詞搭配），系統便會利用統計機率異常來標記該處可能存在拼寫或文法錯誤。"
        ],
        "comparison": "N-gram 模型透過統計固定長度相鄰詞彙的機率來預測文字，運算負載極低，適合用於早期的拼寫檢查與手機輸入法聯想；相較之下，LSTM 等循環神經網路能透過記憶單元（Memory Cell）記住更早之前的資訊，適用於機器翻譯與語音辨識；而現代的 Transformer 模型則憑藉強大的注意力機制，能全域性地捕捉超長文本中的複雜語意與長距離依賴，成為生成式 AI（如 ChatGPT）對話連貫順暢的核心基礎。",
        "keywords": [
          "N-gram 語言模型 (N-gram Language Model)",
          "馬可夫假設 (Markov Assumption)",
          "長距離依賴 (Long-range Dependencies)",
          "統計機率 (Statistical Probability)",
          "自然語言生成 (Natural Language Generation)"
        ],
        "extended_tech": [
          {
            "name": "平滑化技術 (Smoothing Techniques)",
            "desc": "在統計語言模型中，為了解決語料庫中未曾出現過的詞彙組合（導致機率為零）的問題，會引入拉普拉斯平滑或 Kneser-Ney 平滑技術，將部分機率分配給未知詞組以維持系統強健性。"
          },
          {
            "name": "困惑度評估 (Perplexity Evaluation)",
            "desc": "這是評估語言模型預測能力的核心量化指標。困惑度越低，代表模型對測試句子的預測機率越高、不確定性越小，企業常以此標準來比較不同語言模型的優劣。"
          },
          {
            "name": "隱馬可夫模型 (Hidden Markov Model, HMM)",
            "desc": "結合了狀態轉移機率與觀察機率的統計模型，除了能處理序列資料外，更廣泛應用於早期的詞性標註（POS Tagging）與語音辨識領域的聲學建模中。"
          }
        ],
        "terminology": [
          "Markov Property",
          "Data Sparsity",
          "Trigram",
          "Unigram",
          "Conditional Probability"
        ]
      },
      {
        "id": 7,
        "question": "在企業導入的智慧監控系統中，模型以物件偵測（Object Detection）方式自動辨識影像中的人物與車輛。若評估指標採用平均精確率（Mean Average Precision, mAP），其中 IoU（Intersection over Union）閾值設定較高時，代表下列哪一項意義？",
        "options": {
          "A": "預測邊界框與真實邊界框的重疊程度越高，模型偵測結果越精準；",
          "B": "預測邊界框與真實邊界框的誤差越大，導致 mAP 數值上升；",
          "C": "模型整體精確率（Precision）降低，但召回率（Recall）上升；",
          "D": "預測邊界框的評估結果不受真實框大小影響"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，IoU（Intersection over Union）衡量的是模型預測的邊界框與真實邊界框的交集與聯集之比值。IoU 閾值設定得越高，代表系統要求預測框必須與真實框非常高度重疊才會被判定為「偵測正確（True Positive）」，這意味著對模型空間定位的精準度要求越嚴格。選項 (B) 完全錯誤；選項 (C) 當閾值提高時，通常精確率和召回率都會下降，因為判定正確的難度增加；選項 (D) IoU 計算會受兩者相對大小及位置的影響。",
        "ml_method": "Object Detection (IoU / mAP)",
        "ml_method_explanation": "物件偵測（Object Detection）是電腦視覺中兼具「分類」與「定位」兩大任務的技術，不僅要辨識影像中存在何種物體，還需用邊界框（Bounding Box）標示其位置。IoU（交除聯）是衡量預測框與真實標註框重疊程度的核心指標，數值介於 0 到 1 之間。而在評估整體模型效能時，常使用平均精確率（mAP），它綜合考量了不同 IoU 閾值下的精確率（Precision）與召回率（Recall）表現。透過設定較高的 IoU 閾值，可以強制篩選出定位極為精準的預測結果，從而提升應用場景的安全與可靠性。",
        "examples": [
          "在自動駕駛汽車的感知系統中，物件偵測模型被用來即時辨識前方的行人、車輛與交通號誌。為了確保行車安全，系統對預測邊界框的 IoU 閾值要求極高，因為稍微的位置預測偏差都可能導致自動煞車系統誤判距離而引發交通事故。",
          "在智慧農業的無人機巡檢中，農場利用高解析度空拍影像結合物件偵測技術來定位農田中出現病蟲害的作物區域。透過設定精確的邊界框，系統能夠指導自動噴灑機具只針對受感染的特定植株施加農藥，達到精準農業並減少化學藥劑的浪費。"
        ],
        "comparison": "物件偵測（Object Detection，如 YOLO）主要任務是利用邊界框框出影像中多個目標的位置與類別，常應用於賣場人流計算或自駕車感知；相較之下，影像分類（Image Classification，如 ResNet）僅能判斷整張影像的主題為何，無法定位目標，適用於簡單的良率判定；而語意分割（Semantic Segmentation）則要求像素級別的精準分類，能描繪出物體的精確不規則輪廓，通常應用於高精地圖構建與精細醫學影像分析中。",
        "keywords": [
          "物件偵測 (Object Detection)",
          "交除聯 (Intersection over Union, IoU)",
          "平均精確率 (Mean Average Precision, mAP)",
          "邊界框 (Bounding Box)",
          "電腦視覺 (Computer Vision)"
        ],
        "extended_tech": [
          {
            "name": "YOLO 演算法 (You Only Look Once)",
            "desc": "這是一種將物件偵測轉化為單一迴歸問題的深度學習架構，能夠在保持一定準確率的同時達成極高的即時推論速度，廣泛應用於即時交通監控與智慧安防中。"
          },
          {
            "name": "非極大值抑制 (Non-Maximum Suppression, NMS)",
            "desc": "在物件偵測推論的後處理階段，模型常對同一物體產生多個重疊的預測框。NMS 演算法能依據信心分數與 IoU 篩選掉多餘的框，確保每個物體最終只被標記一次。"
          },
          {
            "name": "實例分割 (Instance Segmentation)",
            "desc": "結合了物件偵測的個體區分能力與語意分割的像素級別精度，不僅能區分影像中有多台車，還能精確描繪出每一台車的獨立輪廓，適用於複雜場景的機器人視覺操作。"
          }
        ],
        "terminology": [
          "True Positive",
          "False Positive",
          "Precision-Recall Curve",
          "Anchor Box",
          "Region Proposal Network"
        ]
      },
      {
        "id": 8,
        "question": "關於 Softmax 與 Max-Pooling，下列敘述何者正確？",
        "options": {
          "A": "Softmax 與 Max-Pooling 都會將特徵張量壓縮為單一最大值；",
          "B": "Max-Pooling 會對輸入進行機率分佈的轉換；",
          "C": "Softmax 會保留所有輸入資訊，但以比例表示；Max-Pooling 只保留區域最大值；",
          "D": "Softmax 主要用於特徵降維，而 Max-Pooling 用於分類輸出"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，Softmax 函數是將一組輸入數值轉換成總和為 1 的機率分佈，因此它保留了所有的輸入維度與資訊（以相對比例呈現）；而 Max-Pooling（最大池化）則是在特徵圖上的局部區域內提取最大值，並丟棄該區域內的其他數值，達到特徵壓縮。選項 (A) 錯誤；選項 (B) 錯誤，機率轉換是 Softmax 的功能；選項 (D) 錯誤，描述剛好相反，Max-Pooling 用於降維與提取主要特徵，Softmax 用於最終分類輸出。",
        "ml_method": "Softmax and Max-Pooling",
        "ml_method_explanation": "在深度神經網路中，Softmax 與 Max-Pooling 是兩種具有截然不同目的之運算操作。Max-Pooling（最大池化）廣泛應用於卷積神經網路（CNN）中，其機制是在特徵圖上以滑動窗口的方式，取每個子區域的最大值，藉此達到降低空間解析度、減少運算參數並獲得平移不變性特徵的效果。相對地，Softmax 函數通常置於分類網路的最後一層，它透過指數函數將原本可能為負數或大於 1 的實數張量，轉換為介於 0 到 1 之間且總和為 1 的機率分佈，使模型輸出能直接對應各類別的預測機率。",
        "examples": [
          "在製造業的產品外觀瑕疵檢測系統中，卷積神經網路大量運用 Max-Pooling 層來提取影像中最顯著的邊緣或刮痕特徵，同時過濾掉無關的背景雜訊，使模型能不受產品在輸送帶上些微位置偏移的影響，穩定地抓取瑕疵特徵。",
          "在醫療病理切片分析中，AI 分類模型在最後一層利用 Softmax 函數，將提取出的各種病灶特徵分數轉換為患者罹患不同類型腫瘤的機率值（如良性 85%、惡性 15%），讓醫生能依據直觀的機率分佈來輔助臨床診斷與決策。"
        ],
        "comparison": "Softmax 通常作為神經網路輸出層的激勵函數，負責將模型計算的特徵分數轉化為標準的機率分佈，主要應用於多類別分類問題（如判斷圖片是貓、狗或鳥）；相較之下，Sigmoid 函數雖然也將數值壓縮至 0 到 1 之間，但其各類別機率總和不為 1，因此更適合應用於多標籤分類任務（例如一張圖片同時具備「戶外」與「晴天」等多個獨立標籤）。",
        "keywords": [
          "Softmax 函數 (Softmax Function)",
          "最大池化 (Max-Pooling)",
          "機率分佈 (Probability Distribution)",
          "特徵壓縮 (Feature Compression)",
          "卷積神經網路 (CNN)"
        ],
        "extended_tech": [
          {
            "name": "全局平均池化 (Global Average Pooling, GAP)",
            "desc": "這是一種更為激進的降維技術，它將整張特徵圖的所有數值取平均後轉換為單一數值，常被用來取代傳統的全連接層，以大幅減少模型參數並降低過擬合風險。"
          },
          {
            "name": "溫度縮放 (Temperature Scaling)",
            "desc": "在應用 Softmax 函數時引入溫度參數，可用來平滑或銳化輸出機率分佈。這項技術廣泛應用於知識蒸餾與生成式 AI 中，用以控制語言模型回答的隨機性與創造力。"
          },
          {
            "name": "批次正規化 (Batch Normalization)",
            "desc": "在神經網路的各個隱藏層之間插入正規化操作，能有效穩定並加速模型的收斂過程，解決內部協變量偏移問題，是訓練深層卷積網路不可或缺的標準組件。"
          }
        ],
        "terminology": [
          "Activation Function",
          "Downsampling",
          "Logits",
          "Translational Invariance",
          "Cross-Entropy Loss"
        ]
      },
      {
        "id": 9,
        "question": "某企業在訓練生成式 AI 模型時，導入資料增強（Data Augmentation）技術以擴充訓練資料，但觀察到模型效能反而下降。下列哪一項最可能的原因與對應改善策略最為正確？",
        "options": {
          "A": "增強樣本未經隨機初始化，導致模型梯度更新不穩定，應重新設計訓練啟動流程；",
          "B": "增強後資料的特徵分佈與原始資料不一致，影響模型的泛化能力，應檢查並調整增強策略以維持語意一致性；",
          "C": "增強樣本的比例過高，造成模型對特定資料產生偏好，應適度提高增強比例並調整學習率；",
          "D": "增強後資料的標註可信度下降，導致訓練訊號偏差，應以半監督學習方式重新校正資料"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。資料增強的目的是提升模型泛化能力，但如果增強策略過於極端（例如在字元辨識中將影像過度翻轉導致 6 變成 9），就會改變資料原本的特徵分佈和語意，使得模型學到錯誤的對應關係而效能下降。此時必須調整策略以確保增強資料的語意與標籤一致。選項 (A) 無邏輯關聯；選項 (C) 建議「提高增強比例」會使情況更糟；選項 (D) 雖有可能發生標籤錯誤，但半監督學習並非校正資料增強錯誤的標準首選方法，根本之道在於修正增強策略本身。",
        "ml_method": "Data Augmentation",
        "ml_method_explanation": "資料增強（Data Augmentation）是在不需額外收集真實資料的前提下，透過人為的轉換手法大幅擴增訓練數據量的一項技術。在電腦視覺中，這包括影像的旋轉、縮放、裁切、色彩偏移或添加雜訊；在自然語言處理中，則包括同義詞替換、隨機插入或反向翻譯。其核心機制是透過引入多樣性的擾動，迫使模型學習到真正具決定性的特徵，而非死記硬背訓練集的特定樣貌，從而減少過擬合（Overfitting）並提升模型面對未見數據的泛化能力。然而，增強過程必須嚴格確保領域知識的合理性，以免破壞資料原始語意。",
        "examples": [
          "在牙科 X 光片分析系統中，為了克服罕見牙齒病變樣本不足的問題，開發者利用資料增強技術對現有病變影像進行輕微的旋轉、對比度調整與彈性形變。這模擬了不同拍攝角度與不同機器的成像差異，使模型在面對各家診所上傳的 X 光片時都能保持高準確率。",
          "語音助理在訓練喚醒詞（Wake Word）辨識模型時，會將原本乾淨的錄音樣本疊加各種背景噪音（如街道車聲、冷氣運轉聲、電視聲），並進行音調與語速的隨機改變。這種音訊資料增強能確保系統在吵雜的真實客廳環境中依然能被精準喚醒。"
        ],
        "comparison": "資料增強（Data Augmentation）透過啟發式的幾何或數值轉換來擴充現有資料集，是一種低成本且高效的防過擬合策略，廣泛應用於深度學習各領域；相較之下，合成資料生成（Synthetic Data Generation，如利用 GAN）則是無中生有地創造出全新的逼真資料，雖能解決隱私限制與極端樣本不足的問題，但運算成本高且容易引入無法預期的模型偏見。企業應視專案的資料敏感度與運算資源來選擇合適的資料擴展手段。",
        "keywords": [
          "資料增強 (Data Augmentation)",
          "泛化能力 (Generalization Ability)",
          "過擬合 (Overfitting)",
          "特徵分佈 (Feature Distribution)",
          "語意一致性 (Semantic Consistency)"
        ],
        "extended_tech": [
          {
            "name": "Mixup 增強技術",
            "desc": "這是一種進階的資料增強方法，透過將兩張完全不同的圖片及其對應的標籤進行線性插值混合，迫使神經網路學習更平滑的決策邊界，顯著提升模型對抗惡意雜訊的強健性。"
          },
          {
            "name": "生成對抗網路 (GAN)",
            "desc": "在真實醫療或金融資料因為極度注重隱私而難以取得時，企業常利用 GAN 生成極度逼真的合成資料集，以作為訓練預測模型或進行系統壓力測試的安全替代方案。"
          },
          {
            "name": "領域適應 (Domain Adaptation)",
            "desc": "這是一種遷移學習技術，當訓練資料（如模擬器生成的影像）與真實應用場景（真實街景）存在分佈差異時，透過領域適應演算法可幫助模型克服水土不服，維持高精度的推論表現。"
          }
        ],
        "terminology": [
          "Image Cropping",
          "Affine Transformation",
          "Noise Injection",
          "Overfitting Prevention",
          "Label Preserving"
        ]
      },
      {
        "id": 10,
        "question": "如果希望同時兼顧「精確率（Precision）」和「召回率（Recall）」，下列哪一個指標可以作為綜合評估的標準？",
        "options": {
          "A": "準確率（Accuracy）；",
          "B": "均方根誤差（RMSE）；",
          "C": "均方誤差（MSE）；",
          "D": "F1 分數（F1 Score）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確，F1 分數（F1 Score）是精確率（Precision）與召回率（Recall）的調和平均數（Harmonic Mean）。當我們需要同時兼顧這兩項指標，特別是在正負樣本分佈極度不平衡的資料集中，F1 分數能提供比單純準確率更客觀的綜合評估標準。選項 (A) 準確率在樣本不平衡時會產生誤導；選項 (B) 和 (C) 都是用於衡量迴歸模型（Regression）預測連續數值的誤差指標，並不適用於分類問題。",
        "ml_method": "F1 Score",
        "ml_method_explanation": "F1 分數（F1 Score）是機器學習分類問題中一項極為關鍵的評估指標。在分類任務中，精確率（Precision）代表「模型預測為正樣本中，有多少是真正的正樣本」，而召回率（Recall）代表「所有真實正樣本中，有多少被模型成功找出來」。在許多實務應用中，精確率與召回率往往呈現拉鋸狀態（Trade-off），提高其中一項常會犧牲另一項。F1 分數透過計算兩者的調和平均數（2 × Precision × Recall / (Precision + Recall)），強制要求兩者都必須維持在高水準才能獲得高分，成為處理不平衡資料集時最可靠的單一評估量度。",
        "examples": [
          "在銀行信用卡的盜刷偵測系統中，正常交易數量遠大於盜刷交易。若僅追求精確率，可能會漏抓許多盜刷；若僅追求召回率，則會頻繁封鎖正常交易引發客訴。透過監控 F1 分數，資料科學家能找到最佳的模型決策閾值，兼顧防堵犯罪與客戶體驗。",
          "在工業產線上的產品瑕疵檢測中，漏檢瑕疵品（低召回率）會導致劣質品流入市場，而誤判良品為瑕疵（低精確率）則會增加無謂的重工成本。工程團隊以 F1 分數作為模型優化的首要目標，確保系統能在不影響產能良率的前提下嚴格把關品質。"
        ],
        "comparison": "F1 分數（F1 Score）是精確率與召回率的調和平均數，適用於需要精確權衡兩者的業務場景（如瑕疵檢測與疾病篩檢）；相較之下，ROC-AUC 指標關注的是模型在不同信心閾值下區分正負樣本的整體排序能力，對於極度不平衡的資料（如百萬分之一的詐欺率）有時會過於樂觀。因此，在資源極端稀缺或樣本極度偏斜的風控系統中，實務上常優先參考 PR-AUC 或 F1 分數而非 ROC-AUC。",
        "keywords": [
          "F1 分數 (F1 Score)",
          "精確率 (Precision)",
          "召回率 (Recall)",
          "調和平均數 (Harmonic Mean)",
          "不平衡資料集 (Imbalanced Dataset)"
        ],
        "extended_tech": [
          {
            "name": "ROC 曲線與 AUC 值 (ROC-AUC)",
            "desc": "這是一種評估二元分類器整體效能的圖表與量化指標，它展示了模型在不同閾值設定下的真陽性率與假陽性率的權衡，廣泛應用於信用評分與風險預測模型的基礎效能比較。"
          },
          {
            "name": "混淆矩陣 (Confusion Matrix)",
            "desc": "透過表格視覺化呈現模型預測結果的真陽性、假陽性、真陰性與假陰性數量，幫助資料科學家直觀分析模型是在哪個特定的類別上發生了系統性的誤判，從而針對性地改善特徵工程。"
          },
          {
            "name": "過取樣與欠取樣 (Oversampling and Undersampling)",
            "desc": "在面對如金融詐欺這類極端不平衡的資料集時，除了關注 F1 分數，資料團隊常搭配 SMOTE 等過取樣技術人工合成少數類樣本，或隨機剔除多數類樣本，以協助模型更平穩地學習決策邊界。"
          }
        ],
        "terminology": [
          "Trade-off",
          "True Positive",
          "False Negative",
          "Thresholding",
          "Macro/Micro Average"
        ]
      },
      {
        "id": 11,
        "question": "企業資料分析團隊使用 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法進行顧客行為分群，並希望模型能自動區分主要群集與雜訊資料。在此演算法中，決定聚類結果的兩個主要超參數為下列何者？",
        "options": {
          "A": "特徵數與學習率；",
          "B": "K 值與距離閾值；",
          "C": "鄰域半徑（Epsilon ε）與最小點數（MinPts）；",
          "D": "交叉熵（Cross Entropy）與權重初始化"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，DBSCAN 是一種基於密度的分群演算法，其運作依賴兩個核心超參數：鄰域半徑（Epsilon, ε）用來定義一個點的搜尋範圍；最小點數（MinPts）用來決定在該半徑範圍內至少需要有多少個點才能構成一個高密度區域（核心點）。選項 (A) 屬深度學習訓練參數；選項 (B) 的 K 值是 K-Means 分群的超參數；選項 (D) 是神經網路的損失函數與初始化參數。",
        "ml_method": "DBSCAN",
        "ml_method_explanation": "DBSCAN（Density-Based Spatial Clustering of Applications with Noise）是一種非監督式的密度分群演算法。相較於傳統的 K-Means 需要預先指定分群數量且假設群體呈現球狀，DBSCAN 的核心機制是基於資料點在空間中的密集程度來進行分群。它透過設定鄰域半徑（Epsilon）與最小點數（MinPts），從任意一個資料點開始擴張，只要該點周圍的點數足夠密集，就會被歸為同一個群體。這種基於連通性的設計使其能發現任意形狀的群集，並且能極度有效地將孤立的離群點自動標記為雜訊（Noise），非常適合處理真實世界中充滿雜訊的資料。",
        "examples": [
          "共享單車業者利用 DBSCAN 演算法分析城市中單車的 GPS 停放座標數據。透過密度分群，系統可以自動識別出城市中未經規劃但民眾高度集中停放的「熱點區域」，同時將偶發性零星停放的單車視為雜訊，據此協助調度員精準規劃車輛投放與回收路線。",
          "電信公司分析手機用戶的基地台連線地理位置軌跡。藉由 DBSCAN 排除移動中的雜訊軌跡，系統能夠自動找出使用者白天最常停留的密集區域（工作地點）與夜間密集區域（居住地），從而提供更個人化的通訊方案與區域性網路優化服務。"
        ],
        "comparison": "DBSCAN 透過密度連通性進行分群，不需要預先指定群數，且能自動識別並排除離群雜訊，特別適合應用於地理座標分析與異常軌跡偵測；相較之下，K-Means 演算法運算速度極快且易於解釋，但必須人為設定聚類數量（K值），並且容易受到極端異常值的拉扯而導致群集中心偏移，通常應用於較為單純且分佈呈現凸形（Convex）的客戶輪廓區隔任務中。",
        "keywords": [
          "DBSCAN 演算法 (DBSCAN Clustering)",
          "密度分群 (Density-Based Clustering)",
          "鄰域半徑 (Epsilon)",
          "最小點數 (MinPts)",
          "雜訊資料 (Noise Data)"
        ],
        "extended_tech": [
          {
            "name": "OPTICS 演算法",
            "desc": "這是 DBSCAN 的改良版本，透過建立資料點的到達距離圖，解決了 DBSCAN 在處理密度分佈極不均勻的資料集時難以選定單一 Epsilon 參數的痛點，特別適合高維度行為日誌分析。"
          },
          {
            "name": "階層式分群 (Hierarchical Clustering)",
            "desc": "一種不需要預設群數的分群演算法，透過計算資料點間的距離逐步將群集進行合併或分裂，最終生成樹狀圖（Dendrogram），企業常利用此圖表直觀決策客戶區隔的最佳層次。"
          },
          {
            "name": "孤立森林 (Isolation Forest)",
            "desc": "專注於異常值偵測的樹狀演算法。有別於 DBSCAN 將異常值視為副產物，孤立森林直接透過隨機切割特徵空間來找出最快被孤立的資料點，是金融詐欺與伺服器日誌監控領域的首選工具。"
          }
        ],
        "terminology": [
          "Unsupervised Learning",
          "Core Point",
          "Border Point",
          "Outlier Detection",
          "Spatial Data Analysis"
        ]
      },
      {
        "id": 12,
        "question": "某金融科技公司建立房價預測模型，使用多項特徵（如建坪、房齡、樓層、總價等）進行線性迴歸分析（Linear Regression Analysis）。資料分析師發現多個特徵之間存在高度相關性，導致模型係數不穩定、預測誤差上升。為解決此問題，下列哪一種方法最適合？",
        "options": {
          "A": "繼續保留所有特徵，不進行任何處理；",
          "B": "使用主成分分析（PCA）將相關特徵轉換為彼此獨立的主成分；",
          "C": "新增更多原始變數以提升模型表現；",
          "D": "改用分類模型進行預測"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。當特徵之間存在高度相關性時，稱為多重共線性（Multicollinearity），這會嚴重干擾線性迴歸模型的穩定性。主成分分析（PCA）可以將這些高維度且彼此相關的特徵，線性轉換為一組彼此正交（相互獨立）的低維度主成分，從而徹底解決共線性問題。選項 (A) 無法解決問題；選項 (C) 增加更多變數可能會加劇維度災難與共線性；選項 (D) 房價預測是預測連續數值的迴歸問題，改用分類模型並不符合任務本質。",
        "ml_method": "Principal Component Analysis (PCA)",
        "ml_method_explanation": "主成分分析（PCA, Principal Component Analysis）是機器學習中最經典的降維與特徵萃取技術。其數學原理是透過計算資料共變異數矩陣的特徵值與特徵向量，尋找能夠最大化資料變異量（Variance）的全新正交座標軸。這些新座標軸被稱為「主成分」。透過保留貢獻度最高的幾個主成分並捨棄其餘部分，PCA 能夠在將高維度資料壓縮至低維度的同時，盡可能保留原始資料的資訊。此過程能有效消除特徵間的多重共線性，過濾資料雜訊，並加速後續機器學習模型的訓練過程。",
        "examples": [
          "基因體學研究中，科學家面對單一病患多達數萬個基因表現量的高維度特徵。透過應用 PCA，研究人員可以將數萬維的基因資料降維到二維或三維空間中進行視覺化，藉此觀察不同疾病亞型的病患在降維空間中是否會自動聚集成不同的群體，加速致病基因的探索。",
          "在信用卡客戶風險評估中，銀行收集了包含年收入、存款餘額、貸款總額、月消費額等數十個高度相關的財務指標。為避免線性模型訓練時發生不穩定現象，資料科學家利用 PCA 將這些指標轉換為三個獨立的綜合風險主成分，再輸入模型進行信用評分預測。"
        ],
        "comparison": "PCA 是一種基於線性代數的降維技術，透過投影尋找資料變異量最大的正交軸，非常適合消除數值型特徵間的多重共線性並加速模型訓練；相較之下，t-SNE 與 UMAP 等非線性降維演算法則專注於保留資料點在局部空間中的相對距離，能在二維或三維圖表中呈現出極為精美的群聚結構，主要應用於高維度資料的探索性視覺化，而非作為預測模型的前處理特徵工程。",
        "keywords": [
          "主成分分析 (Principal Component Analysis, PCA)",
          "降維 (Dimensionality Reduction)",
          "多重共線性 (Multicollinearity)",
          "特徵萃取 (Feature Extraction)",
          "正交轉換 (Orthogonal Transformation)"
        ],
        "extended_tech": [
          {
            "name": "L1 正規化 (Lasso Regression)",
            "desc": "在線性迴歸模型中加入絕對值懲罰項，這會迫使模型在訓練過程中自動將不重要或高度相關特徵的權重縮減為零，不僅能防止過擬合，同時也達到自動特徵篩選的效果。"
          },
          {
            "name": "奇異值分解 (Singular Value Decomposition, SVD)",
            "desc": "一種強大的矩陣分解數學工具，除了是 PCA 底層運算的核心機制外，更被廣泛應用於協同過濾推薦系統中，用來挖掘使用者與商品之間潛在的隱含關聯性。"
          },
          {
            "name": "UMAP 非線性降維",
            "desc": "近年來廣受歡迎的流形學習降維技術。相較於 PCA，UMAP 能更優異地保留複雜非線性資料的局部與全局結構，同時運算速度遠勝 t-SNE，是現代資料視覺化分析的利器。"
          }
        ],
        "terminology": [
          "Variance",
          "Eigenvector",
          "Covariance Matrix",
          "Feature Engineering",
          "Curse of Dimensionality"
        ]
      },
      {
        "id": 13,
        "question": "下列何者為 Kubernetes 在 AI 模型部署與運行中的核心功能？",
        "options": {
          "A": "自動化管理模型的訓練流程與參數調校；",
          "B": "管理與協調模型服務的部署、擴展與運行環境；",
          "C": "提供 AI 模型的資料儲存與版本控管功能；",
          "D": "負責深度學習推論的 GPU 加速運算"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，Kubernetes (K8s) 是一個強大的容器編排平台，在 AI 模型部署（MLOps）中的主要職責是管理容器化的模型推論服務，負責應用的部署、負載平衡、自動彈性擴展（Auto-scaling）與故障重啟。選項 (A) 參數調校通常由如 Ray Tune 或 MLflow 等工具負責；選項 (C) 屬 Model Registry 或 DVC 的功能；選項 (D) 雖然 K8s 可以調度 GPU 資源，但實際執行運算的是底層硬體與 CUDA 驅動，而非 K8s 平台本身的功能。",
        "ml_method": "Kubernetes (K8s) for MLOps",
        "ml_method_explanation": "Kubernetes 是一個開源的容器編排系統，最初由 Google 開發，現已成為現代雲端原生應用的標準基石。在機器學習營運（MLOps）生命週期中，當模型訓練完成並封裝成 Docker 容器後，Kubernetes 負責接管這些容器的生命週期。其核心機制包含宣告式組態與控制器模式，能夠確保運行中的模型推論服務（Inference Service）始終符合期望的狀態。它提供流量負載均衡、基於 CPU/GPU 負載的自動水平擴縮容（HPA），以及服務的無縫滾動更新，確保 AI 服務具備極高的可用性與擴展性。",
        "examples": [
          "熱門的即時語音翻譯應用程式在全球各地都有使用者。工程團隊透過 Kubernetes 部署其語言翻譯模型，當適逢大型國際賽事期間、API 請求量暴增時，K8s 能夠在數秒內自動橫向擴展（Scale-out）翻譯推論容器的數量來消化流量，並在離峰時自動縮減以節省成本。",
          "在大型電商的雙十一購物節中，商品推薦系統必須承受極高的瞬時併發請求。運維團隊利用 Kubernetes 將推薦模型部署為微服務，不僅實現了不同模型版本之間的金絲雀發佈（Canary Release）以測試成效，更確保單一節點故障時能迅速將流量導向健康的節點，維持推薦功能的正常運作。"
        ],
        "comparison": "Kubernetes 主要負責容器化應用的運算資源調度與生命週期管理，是保障大規模 AI 推論服務高可用性與彈性擴展的底層基石；相較之下，MLflow 或 Weights & Biases 專注於實驗追蹤與模型版控，Kubeflow 則是架構在 Kubernetes 之上，提供從資料準備、模型訓練到部署的完整端到端 MLOps 工作流程編排，三者在 AI 基礎設施堆疊中扮演著不同層級的角色。",
        "keywords": [
          "Kubernetes (K8s)",
          "模型部署 (Model Deployment)",
          "容器編排 (Container Orchestration)",
          "自動擴展 (Auto-scaling)",
          "機器學習營運 (MLOps)"
        ],
        "extended_tech": [
          {
            "name": "Kubeflow",
            "desc": "專為 Kubernetes 環境打造的機器學習工具包，它讓資料科學家能以宣告式的方式編排複雜的訓練工作流程（Pipeline），極大簡化了在雲端叢集上進行分散式深度學習訓練的門檻。"
          },
          {
            "name": "KServe (原 KFServing)",
            "desc": "構建於 Kubernetes 與 Knative 之上的標準化模型推論平台，它隱藏了底層基礎設施的複雜度，提供開箱即用的 Serverless 擴展能力，甚至支援將模型縮容至零（Scale to Zero）以節省成本。"
          },
          {
            "name": "Docker 容器技術",
            "desc": "將應用程式及其依賴的函式庫、環境配置完全封裝為標準化的映像檔。這是實現「在開發者筆電上能跑，在生產伺服器上也能跑」一致性的關鍵，也是 K8s 編排運作的基礎單元。"
          }
        ],
        "terminology": [
          "Inference Service",
          "Load Balancing",
          "High Availability",
          "Microservices",
          "Canary Deployment"
        ]
      },
      {
        "id": 14,
        "question": "在調整模型超參數（Hyperparameters）時，若希望避免因過度調整參數而導致過擬合，下列哪一種做法最有效提升模型的泛化能力？",
        "options": {
          "A": "採用交叉驗證（Cross-Validation）於多組參數組合間反覆評估，選擇在驗證資料上表現最穩定的設定；",
          "B": "使用早期停止機制（Early Stopping）監控訓練誤差並在收斂前停止訓練，以防模型學習過度；",
          "C": "對輸入特徵進行標準化以減少特徵值差異帶來的過擬合風險；",
          "D": "提高模型複雜度並使用更多超參數搜尋範圍，以確保模型能充分學習資料特徵"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，交叉驗證（如 K-Fold Cross-Validation）透過將訓練資料切割成多個子集輪流作為驗證集，能客觀且穩健地評估模型在不同資料分佈下的真實效能，是選擇超參數並避免對單一驗證集過擬合的最佳方法。選項 (B) 早期停止是用於決定神經網路的「訓練迭代次數（Epochs）」，而非全盤的超參數調校策略；選項 (C) 特徵標準化是資料前處理步驟，與調參數過擬合無直接關係；選項 (D) 提高模型複雜度反而會急劇增加過擬合的風險。",
        "ml_method": "Cross-Validation",
        "ml_method_explanation": "交叉驗證（Cross-Validation）是機器學習中用於評估模型泛化能力與進行超參數選擇的核心統計方法。其基本機制是將原始訓練資料集劃分為 K 個互斥的子集（即 K-Fold）。在每一次迭代中，模型會保留其中一個子集作為驗證集，並使用剩餘的 K-1 個子集進行訓練。這個過程會重複 K 次，使得每個子集都有機會被當作驗證集。最後，將 K 次的評估結果（如準確率）平均，得到一個穩定且較不具偏差的效能估計。這種方法極大程度上避免了模型因為隨機切分的運氣而對特定驗證集過度擬合。",
        "examples": [
          "在醫學影像分析的研究中，由於罹患特定罕見疾病的病人 X 光片資料極其稀少，研究人員無法奢侈地將大量資料劃分為獨立的測試集。因此，他們採用 5-Fold 交叉驗證來訓練與調校 CNN 模型的超參數，確保模型效能的評估結果客觀可靠，而非僅是對一小批病患資料過度擬合。",
          "行銷數據分析團隊在建立客戶終身價值（CLV）預測模型時，需要從隨機森林的眾多超參數（如樹的深度、特徵選擇比例）中找出最佳組合。為避免模型僅對去年某個特定促銷季的資料表現良好，團隊運用交叉驗證跨越不同時間區段進行測試，以挑選出在未來各種情境下皆能穩健預測的參數配置。"
        ],
        "comparison": "交叉驗證（Cross-Validation）是一種穩健的模型效能評估方法，它能最大化利用有限的訓練數據來挑選出最不易過擬合的超參數組合；相較之下，網格搜尋（Grid Search）與隨機搜尋（Random Search）則是定義「如何探索」超參數空間的演算法策略。在實務的 AutoML 流程中，通常會將貝氏最佳化搜尋（Bayesian Optimization）與交叉驗證結合使用，以最少的運算成本精準鎖定全域最佳的超參數設定。",
        "keywords": [
          "交叉驗證 (Cross-Validation)",
          "超參數調校 (Hyperparameter Tuning)",
          "泛化能力 (Generalization Ability)",
          "過擬合 (Overfitting)",
          "模型評估 (Model Evaluation)"
        ],
        "extended_tech": [
          {
            "name": "貝氏最佳化 (Bayesian Optimization)",
            "desc": "這是一種智慧型的超參數搜尋演算法。它會根據過去評估的結果建立機率代理模型，有策略地預測哪一組未知的參數組合最有可能帶來效能突破，其搜索效率遠高於盲目的網格搜尋。"
          },
          {
            "name": "早期停止機制 (Early Stopping)",
            "desc": "在深度學習訓練過程中，透過監控獨立驗證集的損失值變化。當模型在驗證集上的誤差不再下降甚至開始反彈時，系統便自動終止訓練流程，這能有效防止神經網路發生過擬合。"
          },
          {
            "name": "分層抽樣交叉驗證 (Stratified K-Fold)",
            "desc": "針對類別極度不平衡的資料集進行改良，確保在每一次的資料折疊劃分中，各類別樣本的比例都能與原始資料集保持一致，從而避免模型評估時產生嚴重的統計偏差。"
          }
        ],
        "terminology": [
          "Validation Set",
          "Grid Search",
          "Epochs",
          "Overfitting Trade-off",
          "Out-of-Sample Performance"
        ]
      },
      {
        "id": 15,
        "question": "在企業導入的 MLOps（Machine Learning Operations）流程中，Model Registry 最常用於哪一個階段？",
        "options": {
          "A": "用於設定運算資源與執行環境以確保訓練穩定；",
          "B": "用於建立可重複使用的資料與特徵版本；",
          "C": "用於集中管理模型版本、訓練紀錄與部署狀態；",
          "D": "用於追蹤模型上線後的表現與漂移情況"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，模型註冊表（Model Registry）是 MLOps 架構中的核心組件之一，專門用於集中儲存、版控與管理訓練好的機器學習模型物件。它記錄了模型的版本、關聯的超參數、訓練指標，並管理模型從 Staging（測試）推進到 Production（生產）的生命週期狀態。選項 (A) 屬於運算排程與環境管理；選項 (B) 屬於 Feature Store（特徵平台）的功能；選項 (D) 則屬於模型監控（Model Monitoring）系統的範疇。",
        "ml_method": "Model Registry (MLOps)",
        "ml_method_explanation": "Model Registry 是機器學習營運（MLOps）平台中不可或缺的基礎設施，類似於軟體工程中管理程式碼的 Git 或是管理容器映像檔的 Docker Registry。隨著資料科學團隊反覆實驗，會產生數量龐大的候選模型。Model Registry 提供了一個集中式的儲存庫，有條理地紀錄每一個模型的血緣（Lineage），包含訓練程式碼版本、使用的資料集、效能評估指標以及二進位模型檔。其核心機制還包含了生命週期狀態轉換（如歸檔、測試中、生產中），確保只有經過嚴格審查的特定版本模型才會被打包並推送至線上環境提供服務。",
        "examples": [
          "大型金融機構在開發信用評分模型時，要求極高的合規性與可追溯性。透過導入 MLflow 等 Model Registry 工具，稽核人員可以隨時調閱當前線上運作模型（Version 3.2）的詳細履歷，清楚了解該模型當初是由哪位資料科學家、使用哪一版歷史交易數據與參數所訓練而成。",
          "串流影音平台的推薦系統團隊每週都會利用最新收集到的觀看紀錄自動重新訓練推薦演算法。一旦新模型的離線評估指標勝過舊版，系統會透過 Model Registry 的 API 自動將新版本的狀態標記為「Staging」並發起整合測試，待測試通過後再推進至「Production」自動觸發 K8s 部署更新。"
        ],
        "comparison": "在 MLOps 生態系中，Model Registry 負責集中版控「已經訓練完成的模型產出物」，確保從實驗轉往生產的過程有跡可循；相較之下，Feature Store 則是專注於管理「模型輸入的特徵資料」，確保離線訓練與線上推論時的特徵邏輯絕對一致；而 Git 儲存庫則單純負責版控「訓練模型的原始程式碼」。這三者緊密結合，共同築起了企業級 AI 系統的合規性與可重現性基礎。",
        "keywords": [
          "模型註冊表 (Model Registry)",
          "機器學習營運 (MLOps)",
          "版本控制 (Version Control)",
          "模型生命週期 (Model Lifecycle)",
          "模型部署 (Model Deployment)"
        ],
        "extended_tech": [
          {
            "name": "特徵平台 (Feature Store)",
            "desc": "這是一個用於集中計算、儲存與共享機器學習特徵的資料平台。它徹底解決了訓練與推論階段因為特徵萃取程式碼不一致所引發的預測偏差（Training-Serving Skew）問題。"
          },
          {
            "name": "MLflow 實驗追蹤",
            "desc": "這是一個開源平台，除了包含 Model Registry 功能外，其核心組件 Tracking 能讓資料科學家在撰寫程式碼時，輕鬆記錄下每一次實驗所使用的超參數組合、損失函數曲線與視覺化圖表。"
          },
          {
            "name": "A/B 測試架構 (A/B Testing Infrastructure)",
            "desc": "在線上環境同時運行兩個不同版本的模型（由 Model Registry 管理提供），並透過即時的業務指標（如點擊率或轉換率）來科學化地驗證新演算法是否真的能帶來商業價值的提升。"
          }
        ],
        "terminology": [
          "Data Provenance",
          "Staging Environment",
          "Canary Release",
          "CI/CD Pipeline",
          "Model Artifacts"
        ]
      },
      {
        "id": 16,
        "question": "下列哪一種情境中最適合使用「序列到序列（Seq2Seq）」模型？",
        "options": {
          "A": "預測銷售趨勢曲線，輸出未來數值序列；",
          "B": "辨識文本中出現的人名、地名與組織名稱等實體資訊；",
          "C": "對輸入文本中的關鍵字進行頻率統計與可視化；",
          "D": "將輸入文字轉換成語意等價的另一段文字，如自動翻譯或摘要生成"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確，Seq2Seq（Sequence-to-Sequence）模型的核心架構包含編碼器與解碼器，其專長是接收一段長度不定的序列，並生成另一段長度不定的新序列，最經典的應用就是機器翻譯或自動文本摘要。選項 (A) 屬時間序列預測（Time Series Forecasting），通常使用 RNN 或特定預測模型；選項 (B) 屬命名實體識別（NER），這是一種序列標註（Sequence Labeling）任務，無需解碼生成新文字；選項 (C) 僅是一般的統計與資料視覺化，完全不需要深度神經網路模型。",
        "ml_method": "Seq2Seq Model",
        "ml_method_explanation": "Seq2Seq（Sequence-to-Sequence）是一種深度學習模型架構，專門用來處理輸入與輸出長度皆不固定的序列轉換任務。其基本原理由兩大部分組成：編碼器（Encoder）與解碼器（Decoder）。編碼器負責將輸入的長序列（如一句英文）逐步壓縮、提煉成一個包含全局語意特徵的隱藏狀態向量（Context Vector）；解碼器則接收此語意向量，並結合自回歸（Autoregressive）機制，一步步生成目標序列（如對應的中文翻譯）。現代的 Seq2Seq 模型多半已結合注意力機制或全面升級為 Transformer 架構，以解決長句遺忘的缺點。",
        "examples": [
          "國際新聞通訊社為了加速新聞稿的本地化作業，導入了基於 Seq2Seq 架構的自動翻譯系統。該系統能夠將駐外記者即時回傳的英文新聞草稿，快速且流暢地轉換為語意通順的中文與日文版本，並交由當地編輯進行最後潤飾。",
          "企業客服中心採用 Seq2Seq 技術開發對話摘要生成工具。當客服人員結束長達半小時、充滿來回確認與雜訊的客戶通話後，系統會分析語音轉文字的對話逐字稿，自動提取出問題重點與解決方案，生成簡明扼要的處理摘要存入工單系統。"
        ],
        "comparison": "Seq2Seq 模型架構（Encoder-Decoder）設計用於處理輸入與輸出長度皆不固定的任務，是機器翻譯與文本摘要的標準解法；相較之下，純編碼器架構（如 BERT）擅長從輸入文本中提取深層語意特徵，適用於文本分類與實體辨識；而純解碼器架構（如 GPT 系列）則專注於依據提示詞不斷預測下一個字，在開放式文本生成與對話代理人等應用上展現出最強的創造力。",
        "keywords": [
          "序列到序列 (Seq2Seq Model)",
          "編碼器與解碼器 (Encoder-Decoder)",
          "機器翻譯 (Machine Translation)",
          "文本摘要 (Text Summarization)",
          "自迴歸生成 (Autoregressive Generation)"
        ],
        "extended_tech": [
          {
            "name": "注意力機制 (Attention Mechanism)",
            "desc": "最初是為了解決 Seq2Seq 模型中 Encoder 將長句壓縮成單一向量導致資訊遺失的問題而發明。它讓 Decoder 在生成每個字時，都能動態「回頭關注」輸入原文中最相關的片段，是現代 NLP 的基石。"
          },
          {
            "name": "語音轉文字 (Speech-to-Text, ASR)",
            "desc": "這本質上也是一種 Seq2Seq 任務，系統將連續變動的音頻聲學特徵序列作為輸入，並透過聲學模型與語言模型解碼生成對應的文字序列，廣泛應用於語音助理與會議逐字稿生成。"
          },
          {
            "name": "束搜索演算法 (Beam Search)",
            "desc": "在 Seq2Seq 模型的推論解碼階段，若每次只選擇機率最高的一個字（貪婪搜索），容易導致整體句子不通順。束搜索會同時保留多個候選路徑，綜合評估生成出整體機率最高、最流暢的完整句子。"
          }
        ],
        "terminology": [
          "Context Vector",
          "Recurrent Neural Network",
          "Sequence Labeling",
          "Hidden State",
          "Teacher Forcing"
        ]
      },
      {
        "id": 17,
        "question": "在自然語言處理中，檢索增強生成（Retrieval-Augmented Generation, RAG）是一種結合語言模型與向量搜尋的技術，可有效減少模型知識過時與產生幻覺的問題。若要建立一套高效能的 RAG 系統，下列何者為在「檢索階段」最關鍵的挑戰？",
        "options": {
          "A": "確保檢索到的文件能被完整納入語言模型的上下文視窗（Context Window）中進行生成；",
          "B": "選擇使用 Faiss 或 ScaNN 等近似最近鄰搜尋函式庫；",
          "C": "降低嵌入模型（Embedding Model）在高維空間中的計算成本與記憶體占用；",
          "D": "避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯的情況"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確，RAG 系統的成敗極度依賴檢索出來的段落（Context）品質。在純粹的密集向量檢索（Dense Retrieval）中，經常發生檢索出的文件在向量空間中極為靠近（字面語意相似），但卻無法實質回答使用者問題的情況。因此，如何精準匹配查詢意圖是 RAG 檢索階段最核心的挑戰。選項 (A) 屬於生成階段的 Prompt 組合限制；選項 (B) 僅是工程實作上的工具選擇；選項 (C) 是系統資源優化考量，都不如檢索準確度直接影響最終回答的正確性來得致命。",
        "ml_method": "Retrieval-Augmented Generation (RAG)",
        "ml_method_explanation": "檢索增強生成（RAG）是一種混合式 AI 架構，旨在解決大型語言模型（LLM）容易產生幻覺及缺乏最新私有領域知識的痛點。其運作機制分為檢索與生成兩大階段：首先，系統利用 Embedding 模型將使用者的提問轉換為向量，並在事先建立的私有企業文件向量資料庫中尋找最相關的段落。接著，系統將這些精準檢索到的知識片段（Context）與使用者的原始問題合併成一個完整的提示詞（Prompt），送交給 LLM 進行閱讀理解與推理。這樣生成的回答不僅有明確的知識來源，也能大幅降低憑空捏造的風險。",
        "examples": [
          "跨國法律事務所建置了一套基於 RAG 技術的法律助理系統。律師在處理跨國商業合約糾紛時，可以直接用自然語言詢問系統特定條文的解釋。系統會從內部數十萬份歷史判例及合約條文中精準檢索出相關的法律依據，並交由 LLM 總結出專業的法律見解。",
          "高科技製造業的設備維修部門利用 RAG 架構開發維修指引機器人。當機台發生未知的錯誤代碼時，工程師向機器人提問，系統會立刻在數千頁的機台技術手冊與過往的維修工單紀錄中檢索出與該錯誤代碼高度相關的處置步驟，並生成清晰的排障指南供工程師參考。"
        ],
        "comparison": "RAG 架構透過即時檢索外部知識庫來輔助語言模型回答，具有知識可更新、幻覺率低且實作成本平易近人的優勢，是企業打造專屬知識問答系統的首選；相較之下，微調（Fine-tuning）技術雖然能深刻改變模型的說話風格與特定領域邏輯，但其訓練成本高昂，且模型仍無法完全避免幻覺，也難以即時更新知識庫。實務上，企業常將 RAG 作為主軸，必要時再輔以微調來優化整體服務體驗。",
        "keywords": [
          "檢索增強生成 (RAG)",
          "向量搜尋 (Vector Search)",
          "大型語言模型 (LLM)",
          "AI 幻覺 (AI Hallucination)",
          "意圖匹配 (Intent Matching)"
        ],
        "extended_tech": [
          {
            "name": "混合檢索 (Hybrid Search)",
            "desc": "在 RAG 的檢索階段，同時結合基於關鍵字的稀疏檢索（如 BM25）與基於語意向量的密集檢索。這種雙管齊下的策略能互補彼此盲區，顯著提升文件召回的精準度與相關性。"
          },
          {
            "name": "重排序模型 (Re-ranking Models)",
            "desc": "一種計算成本較高但準確度極佳的模型（如 Cross-Encoder）。在向量檢索快速找出前 50 篇相關文件後，重排序模型會進行二次精細評估與排序，確保餵給 LLM 的是最具價值的資訊。"
          },
          {
            "name": "知識圖譜增強檢索 (GraphRAG)",
            "desc": "結合圖資料庫的關聯知識與向量檢索，讓系統不僅能找回語意相似的文字段落，還能循著實體關係（如人物、組織間的連結）爬梳出深層邏輯脈絡，以回答跨越多份文件的複雜分析問題。"
          }
        ],
        "terminology": [
          "Vector Database",
          "Embedding",
          "Chunking Strategy",
          "Prompt Engineering",
          "Context Window"
        ]
      },
      {
        "id": 18,
        "question": "當 Transformer 模型發生「注意力分布過於平均（Attention Collapse）」的情形時，導致模型無法有效聚焦於關鍵資訊，下列哪一項策略可有效改善此問題？",
        "options": {
          "A": "提高 Query-Key 點積（Dot Product）的縮放常數；",
          "B": "在 Softmax 前加入高斯雜訊（Gaussian Noise）；",
          "C": "使用 ReLU 函數取代 Softmax；",
          "D": "對注意力權重施加稀疏化約束（Sparsity Constraint）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。當注意力分布過於平均（即所有標記分到的權重都很低且相近，類似 Uniform Distribution）時，模型將喪失捕捉關鍵特徵的能力。透過對注意力權重施加稀疏化約束（Sparsity Constraint），例如 Sparse Attention 技巧，可以強迫模型將絕大部分的權重分配給少數真正重要的詞彙，並將不相關的詞彙權重設為零或極小值，藉此恢復聚焦能力。選項 (A) 提高縮放常數會使分布更平緩；選項 (B) 加入雜訊會加劇無法聚焦的問題；選項 (C) ReLU 無法確保機率和為 1，會破壞注意力機制的基礎假設。",
        "ml_method": "Attention Mechanism (Sparsity)",
        "ml_method_explanation": "注意力機制（Attention Mechanism）是賦予神經網路「聚焦能力」的核心技術。在標準 Transformer 中的縮放點積注意力（Scaled Dot-Product Attention）運算裡，模型會計算查詢（Query）與鍵值（Key）的內積，再通過 Softmax 函數轉換為機率分布，以此決定每個字詞對當前任務的貢獻權重。然而，在處理超長文本或模型訓練不當時，Softmax 可能會輸出過於平滑、平均的權重，這被稱為注意力崩潰。為了改善此現象，研究者發展出稀疏注意力（Sparse Attention）等技術，透過強制截斷或特定的約束，要求模型只關注局部鄰近或最具代表性的關鍵標記，既提升了效能也降低了計算複雜度。",
        "examples": [
          "在醫學超長病歷的自動摘要任務中，傳統的注意力機制很容易在數千字節中迷失方向，使得生成的摘要流於平淡。藉由導入稀疏注意力機制的 Transformer，模型能強硬地濾除大量冗言贅字，將運算資源與權重高度集中在含有「診斷結果」、「用藥過敏」等關鍵字眼上。",
          "在分析長篇財務財報以進行自動化投資評級時，文件充斥著大量制式的免責聲明與格式文字。研究團隊利用施加稀疏化約束的語言模型，讓注意力權重精準鎖定在營收數字變動、未來展望指引等少數關鍵段落，從而大幅提升財報情感分析的準確率。"
        ],
        "comparison": "密集注意力機制（Dense Attention）會計算文本中所有字詞兩兩之間的關聯性，運算精準度高但計算量與文本長度的平方成正比，難以處理超長文本；相較之下，稀疏注意力（Sparse Attention）透過局部滑動窗口或隨機取樣機制，強制切斷不相關詞彙的運算路徑，大幅降低了記憶體消耗，使得現代語言模型（如 Longformer）能夠一次吞下數萬字的超長文件而不崩潰。",
        "keywords": [
          "注意力分布平均 (Attention Collapse)",
          "稀疏化約束 (Sparsity Constraint)",
          "注意力機制 (Attention Mechanism)",
          "Softmax 函數 (Softmax Function)",
          "長文本處理 (Long Document Processing)"
        ],
        "extended_tech": [
          {
            "name": "局部注意力 (Local Attention)",
            "desc": "這是一種限制注意力運算範圍的技術，強制模型在計算某個字詞的權重時，只允許它觀察周圍相鄰的幾個字詞，這在處理具有強烈局部關聯性特徵（如語音訊號與視覺邊緣）時極為有效。"
          },
          {
            "name": "多頭注意力機制 (Multi-Head Attention)",
            "desc": "讓模型並行地在不同的線性子空間中執行多次獨立的注意力計算。這使得神經網路能夠同時關注句子中的句法結構（如主謂賓關係）與深層語意關聯，是構成 Transformer 的骨幹設計。"
          },
          {
            "name": "快閃注意力 (FlashAttention)",
            "desc": "一種底層硬體感知的注意力演算法優化技術。透過精巧地安排 GPU 記憶體的讀寫操作，它能在不損失任何數學精確度的前提下，大幅加速大型語言模型的訓練與長序列推論速度。"
          }
        ],
        "terminology": [
          "Query-Key Dot Product",
          "Attention Weights",
          "Uniform Distribution",
          "Transformer Architecture",
          "Self-Attention"
        ]
      },
      {
        "id": 19,
        "question": "某研究團隊正在訓練一個針對低資源語言（如少數民族語言）的語言模型，但該語言僅有約 1 萬筆語料可用。在訓練過程中出現明顯的過擬合現象，若希望在不新增真實語料的前提下提升模型的泛化能力，採用下列哪一種方法最為適合？",
        "options": {
          "A": "將 Transformer 的隱藏層維度擴增至 1024，以提升表徵能力；",
          "B": "採用反向翻譯（Back-Translation）技術，以生成額外目標語句的偽平行語料（Pseudo‑Parallel Corpus）；",
          "C": "對詞嵌入矩陣（Embedding Matrix），施加 L1 正則化以壓縮模型參數；",
          "D": "將多語言 BERT（mBERT）中所有 Transformer 層全部凍結以保留預訓練知識"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。在 NLP 中面對低資源（Low-Resource）且發生過擬合的情境，最有效的擴充資料方式是反向翻譯（Back-Translation）。它是將現有的低資源語言翻譯成強勢語言（如英文），再將這些強勢語言翻譯回目標語言，藉由這過程創造出語法多樣但語意相同的「偽平行語料」，達到資料增強效果。選項 (A) 擴大模型參數會導致更嚴重的過擬合；選項 (C) 雖然 L1 正則化可減緩過擬合，但對極度缺乏資料的情況幫助有限且可能損害效能；選項 (D) 凍結所有層將導致模型無法學習該特定低資源語言的獨有特徵。",
        "ml_method": "Back-Translation (Data Augmentation)",
        "ml_method_explanation": "反向翻譯（Back-Translation）是自然語言處理中處理低資源語言或擴展訓練資料集的強大資料增強技術。其基本原理是利用一個現有的機器翻譯模型，先將目標語言的單語語料翻譯成另一種富資源的來源語言（例如英語），接著再使用第二個模型將這些英文句子翻譯回目標語言。由於翻譯模型在解碼過程中存在多樣性與不確定性，這來回翻譯的過程會產生與原句語意相同，但詞彙選擇、句法結構略有差異的全新句子。這大幅豐富了模型的訓練樣本多樣性，迫使模型學習更深層的語意而非死記字面特徵。",
        "examples": [
          "開發針對台灣閩南語（台語）語音辨識與文字翻譯系統的團隊，面臨台語書面語料極度匱乏的困境。工程師運用反向翻譯技術，將大量標準中文新聞稿機器翻譯為台語文字，再將其作為擴增的偽訓練語料加入模型中，顯著提升了系統對台語特殊語法與句型的泛化能力。",
          "在智慧型客服對話系統中，為因應少見的特定產業專業用語（如冷門的化工材料詢問），團隊利用反向翻譯，將有限的真實對話紀錄在英文與中文之間來回轉換。藉此自動生成了各種不同問法但意圖相同的顧客詢問句，成功增強了意圖辨識模型的強健性。"
        ],
        "comparison": "反向翻譯（Back-Translation）是針對文本資料進行擴增的專門技術，能夠在不改變原始語意的情況下創造出豐富的句法變化，特別適用於神經機器翻譯與對話系統；相較之下，同義詞替換（Synonym Replacement）或隨機字詞插入等傳統 NLP 資料增強方法雖然運算成本極低，但生成的句子往往生硬不自然，甚至可能破壞語言邏輯，在應對需要高度語境理解的高階深度學習模型時，其效果遠不如反向翻譯顯著。",
        "keywords": [
          "低資源語言 (Low-Resource Language)",
          "反向翻譯 (Back-Translation)",
          "偽平行語料 (Pseudo-Parallel Corpus)",
          "資料增強 (Data Augmentation)",
          "過擬合 (Overfitting)"
        ],
        "extended_tech": [
          {
            "name": "遷移學習 (Transfer Learning)",
            "desc": "在 NLP 領域，最典型的做法是先利用如英文等富資源語言的大量數據對模型進行預訓練，使其具備基礎的語言邏輯，隨後再利用有限的低資源語言目標數據進行微調，這是突破資料瓶頸的標準範式。"
          },
          {
            "name": "跨語言知識蒸餾 (Cross-lingual Knowledge Distillation)",
            "desc": "一種將強勢語言模型（如英文 GPT）的強大推理能力，透過特徵映射與對齊技術，轉移給資源匱乏語言模型的高階技巧，使其能在沒有大量翻譯資料的情況下具備跨語種的理解能力。"
          },
          {
            "name": "少樣本學習 (Few-Shot Learning)",
            "desc": "這是一種前瞻性的機器學習典範。透過極度龐大的預訓練語言模型結合精巧的提示詞工程（Prompt Engineering），模型只需參考 2 到 3 個範例，就能直接執行特定任務，完全免除了重新訓練模型的資料需求。"
          }
        ],
        "terminology": [
          "Low-Resource NLP",
          "Generalization",
          "Data Sparsity",
          "Machine Translation",
          "Fine-Tuning"
        ]
      },
      {
        "id": 20,
        "question": "在使用生成對抗網路（GAN）進行人臉影像生成時，若出現「模式崩潰」（Mode Collapse）現象，下列哪一種方法最常被用來有效解決此問題？",
        "options": {
          "A": "在鑑別器中加入梯度懲罰（Gradient Penalty）以穩定訓練過程；",
          "B": "採用 Wasserstein 距離（WGAN 損失）替代原始的 GAN 損失函數；",
          "C": "對生成器輸入的潛在向量加入隨機擾動；",
          "D": "使用多尺度鑑別器架構以提高對多樣性的判別能力"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。模式崩潰（Mode Collapse）是 GAN 訓練中最具破壞性的問題，指的是生成器發現了一種能輕易騙過鑑別器的特定樣本（例如同一張臉），便停止學習，導致生成的影像失去多樣性。原始 GAN 的 JS 散度在兩分佈不重疊時會導致梯度消失。引入 Wasserstein 距離（WGAN）能提供平滑且有意義的距離度量，即使分佈不重疊也能提供穩定梯度，從根本上強迫生成器學習整個資料分佈，極大程度解決了模式崩潰問題。選項 (A) 梯度懲罰是 WGAN-GP 的改良，屬於 WGAN 架構的一環；選項 (C) 幫助有限；選項 (D) 主要是為了解析度，並非解決模式崩潰的核心。",
        "ml_method": "Generative Adversarial Network (GAN) / WGAN",
        "ml_method_explanation": "生成對抗網路（GAN）是由生成器與鑑別器組成的博弈系統，生成器負責將隨機雜訊轉換為逼真數據，鑑別器則負責分辨數據是來自真實集還是生成器。兩者在互相競爭中不斷進化。然而，傳統 GAN 常因損失函數的數學特性導致訓練極度不穩定與模式崩潰（生成的樣本千篇一律）。為此，研究者提出了 Wasserstein GAN（WGAN），它捨棄了傳統的 JS 散度，改用 Earth Mover's Distance（Wasserstein 距離）來衡量兩個機率分布的差異。這項改進為生成器提供了持續且平滑的梯度指引，確保模型能學習到涵蓋多樣性特徵的完整真實數據分佈。",
        "examples": [
          "在虛擬時尚與服裝設計領域，設計師利用基於 WGAN 架構的生成模型來自動探索新的服裝款式。得益於解決了模式崩潰問題，模型能穩定地從潛在空間中生成包含不同剪裁、色彩與布料紋理的豐富設計草圖，激發設計師的靈感，而非只反覆生成單一的暢銷款式。",
          "在醫療影像隱私保護中，研究人員需要建立一個合成病患資料集供外界分析使用。他們使用高度穩定的 GAN 生成了成千上萬張逼定的合成肺部 X 光片。這些合成影像不僅成功保留了各種不同疾病亞型的特徵多樣性（避免模式崩潰），更確保了真實病患的隱私不會被洩漏。"
        ],
        "comparison": "GAN 的核心優勢在於能生成極度銳利、逼真的高解析度影像，曾一度主導 Deepfake 與虛擬人像技術領域，但其訓練極度困難且容易發生模式崩潰；相較之下，擴散模型（Diffusion Models，如 Midjourney 或 Stable Diffusion）雖然生成速度較慢，但其基於逐步去噪的數學過程極其穩定，不僅徹底解決了模式崩潰問題，在文本生成圖像（Text-to-Image）任務上展現出空前的語意控制能力，目前已成為 AI 藝術創作的業界霸主。",
        "keywords": [
          "模式崩潰 (Mode Collapse)",
          "生成對抗網路 (GAN)",
          "Wasserstein 距離 (Wasserstein Distance)",
          "資料分佈 (Data Distribution)",
          "損失函數 (Loss Function)"
        ],
        "extended_tech": [
          {
            "name": "擴散模型 (Diffusion Models)",
            "desc": "新一代的生成技術霸主。其原理是先在真實圖片中逐步加入高斯雜訊直到變為純雜訊，接著訓練神經網路學習逆向的去噪過程，以此從隨機雜訊中穩定地生成出高品質且高度多樣化的影像作品。"
          },
          {
            "name": "變分自編碼器 (Variational Autoencoder, VAE)",
            "desc": "另一種經典生成模型，它強制將資料的潛在表徵對齊標準常態分佈。雖然生成的影像通常比 GAN 模糊，但它具備優異的數學解釋性與穩定的訓練過程，常被用於特徵降維與擴散模型的底層壓縮空間中。"
          },
          {
            "name": "條件 GAN (Conditional GAN, cGAN)",
            "desc": "在 GAN 的生成器與鑑別器中額外輸入條件標籤（如類別或文本描述），這使得開發者能夠隨心所欲地控制生成影像的特定屬性（如指定生成『紅色的車』），大幅擴展了 GAN 在商業設計上的實用性。"
          }
        ],
        "terminology": [
          "Generator",
          "Discriminator",
          "Jensen-Shannon Divergence",
          "Gradient Penalty",
          "Latent Space"
        ]
      },
      {
        "id": 21,
        "question": "在多模態 AI 模型訓練或推論過程中，遇到某一模態資料缺失（例如僅有影像資料但缺少文本說明），下列哪一種策略最有效維持模型效能？",
        "options": {
          "A": "以零向量或固定向量填充缺失模態輸入；",
          "B": "訓練具備模態缺失感知能力的模型，使其適應缺失狀況；",
          "C": "利用生成模型（如 GAN 或自迴歸模型）預測並補全缺失模態資料；",
          "D": "直接捨棄缺少模態的樣本，避免干擾訓練或推論"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。在真實世界中，多模態資料（如圖文並茂的貼文）經常面臨部分模態缺失的問題。最健壯且前瞻的做法是設計具備「缺失模態感知（Missing-Modality Robustness）」的架構，例如透過隨機遮蔽部分模態（Modality Dropout）來訓練模型，使其在只有單一模態時仍能動態調整權重並穩定進行推論。選項 (A) 填零會嚴重破壞特徵分佈並帶來負面雜訊；選項 (C) 生成補全的計算成本極高，且可能引入虛假的幻覺資訊；選項 (D) 捨棄樣本會流失大量寶貴資料，嚴重影響模型泛化能力。",
        "ml_method": "Multimodal AI (Modality Robustness)",
        "ml_method_explanation": "多模態人工智慧（Multimodal AI）是指能夠同時處理並融合兩種或以上不同類型資料（如文字、影像、語音、感測器數據）的深度學習系統。其核心機制是建立一個共享的聯合嵌入空間（Joint Embedding Space），將不同維度和結構的特徵轉換為可互相比較與互補的數學表示。為了對抗實務上經常發生的「模態缺失」挑戰，現代多模態模型常在訓練階段引入 Modality Dropout（隨機丟棄某一模態），迫使神經網路學習跨模態的冗餘資訊與交叉對齊（Cross-Alignment），使其在推理時即使缺少某種感測器數據，也能依賴其餘模態做出準確判斷。",
        "examples": [
          "在社群媒體的自動內容審查系統中，AI 需要同時分析使用者的貼文圖片與文字敘述。當使用者上傳了可能違規的圖片但並未附上任何文字時，具備模態缺失感知能力的多模態模型會自動調整其內部注意力權重，純粹依賴影像特徵進行精準的風險評估與攔截。",
          "在醫療健康監測穿戴式裝置中，系統會同時收集心率感測器與使用者語音紀錄以評估壓力指數。如果使用者在某些時段未用語音輸入導致該模態缺失，系統仍能憑藉強健的融合架構，僅透過分析心率變異度（HRV）生理數據來提供穩定且可靠的健康警示。"
        ],
        "comparison": "多模態融合技術（Multimodal Fusion）致力於在共同空間中整合影像、文字與語音，優勢在於能獲得極度全面的情境理解能力，常應用於高階自駕車與情緒互動機器人；相較之下，單一模態模型雖然在處理特定資料（如純粹的語音轉文字）時開發成本低且速度極快，但在面對充滿雜訊或語意模糊的真實複雜情境時，缺乏跨模態資訊交叉驗證的能力，極易產生致命誤判。",
        "keywords": [
          "多模態 AI (Multimodal AI)",
          "模態缺失 (Missing Modality)",
          "強健性 (Robustness)",
          "隨機遮蔽 (Modality Dropout)",
          "聯合嵌入空間 (Joint Embedding Space)"
        ],
        "extended_tech": [
          {
            "name": "對比語言-圖像預訓練 (CLIP)",
            "desc": "由 OpenAI 提出的一種極具突破性的多模態技術。它透過大規模對比學習，將圖片與描述文字對齊到同一個向量空間中，這使得模型具備了強大的零樣本（Zero-Shot）影像分類與跨模態圖文檢索能力。"
          },
          {
            "name": "跨模態注意力機制 (Cross-Modal Attention)",
            "desc": "在 Transformer 架構中，允許某一個模態的特徵（如文字 Query）去查詢並關注另一個模態（如影像 Key）的最相關區域，廣泛應用於視覺問答（VQA）系統中，能精準回答出「圖片中那隻狗在做什麼」。"
          },
          {
            "name": "早期融合與晚期融合 (Early vs Late Fusion)",
            "desc": "這是處理多模態資料的兩種經典架構策略。早期融合是在特徵提取階段就將不同模態的原始資料拼接在一起；而晚期融合則是讓各模態獨立做出決策後，再透過投票或加權機制統整出最終結果，以換取更高的系統穩定度。"
          }
        ],
        "terminology": [
          "Sensor Fusion",
          "Cross-Alignment",
          "Visual Question Answering",
          "Feature Concatenation",
          "Zero-Shot Learning"
        ]
      },
      {
        "id": 22,
        "question": "某電商平台開發的顧客流失預測模型在上線數月後，預測準確率明顯下降。專案團隊懷疑顧客行為模式改變，導致模型輸入特徵的分佈與原始訓練資料不同，出現典型的資料漂移（Data Drift）問題。為了偵測並確認資料分佈是否發生變化，下列哪一種作法最合適？",
        "options": {
          "A": "定期重新訓練模型以應對外部變化；",
          "B": "提升模型複雜度以捕捉更多資料變異性；",
          "C": "增加測試資料量以提高評估準確度；",
          "D": "計算輸入特徵分佈間的 KL 散度（KL Divergence）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。資料漂移（Data Drift）指的是線上真實環境的資料分佈偏離了模型當初訓練時的分佈。為了主動「偵測」這個現象，資料科學家通常會使用統計量度（如 KL 散度、人口穩定度指數 PSI 或 Kolmogorov-Smirnov 檢定）來量化歷史訓練集與近期即時數據分佈之間的差異程度。選項 (A) 是偵測到漂移後可能採取的補救行動，而非偵測方法；選項 (B) 無助於解決資料漂移帶來的本質問題，反而易導致過擬合；選項 (C) 增加測試資料無法主動監測線上即時資料分佈的變化。",
        "ml_method": "Data Drift Detection (KL Divergence)",
        "ml_method_explanation": "資料漂移（Data Drift）是機器學習系統上線後面臨的重大挑戰，它發生於外在世界改變導致線上數據特徵的統計分佈偏離了原始訓練數據，進而引發模型效能無聲無息地衰退。為了解決此問題，MLOps 領域引入了自動化漂移監控機制。其中，Kullback-Leibler 散度（KL Divergence）是一種衡量兩個機率分佈差異的資訊理論指標。透過定期計算線上特徵分佈與訓練基準分佈之間的 KL 散度，系統可以在兩者差異超越安全閾值時自動觸發警報，通知團隊進行調查或啟動模型的重新訓練（Retraining）流程。",
        "examples": [
          "在全球新冠疫情爆發期間，許多銀行原有的機器學習信用評分模型出現了嚴重失準。因為經濟封鎖導致消費者的收入與支出行為發生劇變，工程團隊透過計算交易特徵分佈的 KL 散度，成功偵測到嚴重的資料漂移，並迅速決定凍結舊模型，引入近期數據重新訓練新模型。",
          "物流公司的配送時間預測系統在進入嚴冬季節後預測誤差大幅增加。MLOps 監控儀表板顯示，氣溫與道路結冰等輸入特徵的當前分佈與夏季訓練集相比，其 PSI 與 KL 散度飆高，系統便自動發出資料漂移警報，提醒資料科學家需要針對冬季數據加入新的季節性特徵並更新模型。"
        ],
        "comparison": "資料漂移（Data Drift）專指輸入系統的「特徵變數分佈」發生了改變（如使用者年齡層突然改變），這可透過 KL 散度等統計檢定提早發覺；相較之下，概念漂移（Concept Drift）則是更深層的挑戰，指的是「特徵與目標標籤之間的關聯邏輯」發生本質上的變異（例如原本視為高風險的特徵，因法規改變而變為低風險），這種情況單靠監控特徵分佈無法察覺，必須依賴持續比對真實業務的 Ground Truth 才能診斷，兩者在 MLOps 監控策略上截然不同。",
        "keywords": [
          "資料漂移 (Data Drift)",
          "KL 散度 (KL Divergence)",
          "機器學習營運 (MLOps)",
          "模型衰退 (Model Decay)",
          "特徵分佈 (Feature Distribution)"
        ],
        "extended_tech": [
          {
            "name": "人口穩定度指數 (Population Stability Index, PSI)",
            "desc": "在金融風控與信用評分領域極為普及的指標。它將特徵數值劃分為多個區間，分別計算訓練基準與線上即時數據在各區間的比例差異，能非常直觀地量化客群屬性是否發生顯著位移。"
          },
          {
            "name": "自動化再訓練管線 (Automated Retraining Pipeline)",
            "desc": "結合漂移偵測的進階 MLOps 實踐。當系統偵測到 KL 散度或 PSI 超標時，不僅會發送警報，還能自動觸發排程工具（如 Airflow），提取最新資料並啟動一連串的模型重新訓練與驗證腳本，實現自癒能力。"
          },
          {
            "name": "影子測試 (Shadow Deployment)",
            "desc": "應對資料漂移的高階部署策略。將剛重新訓練好的新模型部署至線上但不影響真實業務決策（僅紀錄預測結果），工程團隊能藉此無風險地觀察新模型在面對最新線上資料流時，是否真能有效克服漂移帶來的誤差。"
          }
        ],
        "terminology": [
          "Concept Drift",
          "Ground Truth",
          "Kolmogorov-Smirnov Test",
          "Model Degradation",
          "Continuous Monitoring"
        ]
      },
      {
        "id": 23,
        "question": "某大型醫院即將部署一套輔助診斷的 AI 系統，為降低對臨床流程的衝擊，同時確保風險可控與回饋可收斂，應採取何種『漸進式部署』（Phased Rollout）策略最為合適？",
        "options": {
          "A": "從單一專科（如放射科）或特定病房開始啟用，逐步擴展至全院；",
          "B": "先部署於病例量較高的急診單位，加速收集高頻使用回饋；",
          "C": "僅在夜班或離峰時段啟用，避免影響主要臨床工作負載；",
          "D": "在使用者界面啟用提示模式，讓全院同步體驗但不影響診斷流程"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。在極度重視安全與穩定性的醫療環境中導入 AI，最合適的漸進式部署（或稱金絲雀發佈/試驗性部署）是先在控制範圍小、專注於單一領域的科室（如放射科的某個小組）進行試行。這樣能在風險最小化的情況下收集使用者回饋並修正系統，確認穩定後再橫向擴展。選項 (B) 急診單位風險極高、容錯率極低，絕對不適合做為首發測試場域；選項 (C) 夜班人力通常較少且疲勞，出現 AI 系統問題時缺乏足夠的支援與容錯空間；選項 (D) 全院同步啟用即便僅是提示模式，仍可能引發全院性的流程混亂與資訊焦慮，違背風險可控原則。",
        "ml_method": "Phased Rollout / Canary Deployment",
        "ml_method_explanation": "漸進式部署（Phased Rollout）或金絲雀發佈（Canary Deployment）是軟體工程與機器學習營運（MLOps）中控制風險的關鍵部署模式。當新版本的 AI 模型或系統準備上線時，與其一次性全面替換舊系統（Big Bang Deployment），不如先將新模型暴露給極小比例的使用者（例如 5% 的流量）或限定的特定實體區域。在此試驗階段，運維團隊會嚴密監控新模型的效能指標、系統穩定度及使用者滿意度。一旦確認其表現符合預期且無致命缺陷，才會逐步擴大流量比例，直到完全取代舊系統，這是保障關鍵任務系統平穩過渡的最佳實踐。",
        "examples": [
          "知名的叫車服務平台在推出能結合即時天氣與交通路況的新一代 AI 派車演算法時，選擇先在美國某個中型城市進行漸進式部署。團隊花了一週時間觀察司機接單率與乘客等候時間，確認演算法無誤後，才逐步拓展至全國各大都會區。",
          "線上串流影音巨頭在測試全新的首頁個人化推薦模型時，利用流量路由技術，將 1% 的活躍訂閱戶無縫導向新模型。透過 A/B 測試比對這群用戶的觀看時長及點擊率是否優於舊模型，在獲得顯著的數據支持後，才以 10%、50%、100% 的節奏逐步完成全球更新。"
        ],
        "comparison": "金絲雀發佈（Canary Deployment）強調利用正式生產環境的極少數真實流量進行風險可控的試營運，適合用於 AI 模型的穩定性驗證與災難預防；相較之下，A/B 測試（A/B Testing）主要目的是在商業層面比較多個版本模型帶來的轉換率差異，偏向於假設檢定與行銷決策；而藍綠部署（Blue-Green Deployment）則是準備兩套完全相同的基礎設施來進行新舊版本的一鍵切換，具備零停機時間的極大優勢，但無法像金絲雀發佈那樣進行細粒度的流量風險控制。",
        "keywords": [
          "漸進式部署 (Phased Rollout)",
          "金絲雀發佈 (Canary Deployment)",
          "風險控制 (Risk Management)",
          "機器學習營運 (MLOps)",
          "流量路由 (Traffic Routing)"
        ],
        "extended_tech": [
          {
            "name": "藍綠部署 (Blue-Green Deployment)",
            "desc": "這是一種確保服務零中斷的高階部署策略。企業會同時維護『藍』（現行版本）與『綠』（新版本）兩套獨立的生產環境。當新模型在綠色環境徹底測試無誤後，運維人員只需切換負載平衡器的路由設定，瞬間將所有流量導向新版，一旦發生問題也能在秒級內切換回滾。"
          },
          {
            "name": "特徵旗標 (Feature Flags / Toggles)",
            "desc": "將新功能的程式碼部署到生產環境，但預設為隱藏狀態。產品經理可以透過後台系統，在不重新部署程式碼的情況下，隨時針對特定使用者群體動態開啟或關閉 AI 功能，實現極致敏捷的功能釋放控制。"
          },
          {
            "name": "服務網格技術 (Service Mesh)",
            "desc": "如 Istio 等雲端原生技術，它在應用程式外部建立專屬的網路通訊層，賦予運維團隊強大的微服務流量塑形能力。這使得執行複雜的金絲雀發佈或根據特定 HTTP 標頭進行 A/B 測試流量路由變得異常簡單且透明。"
          }
        ],
        "terminology": [
          "Big Bang Deployment",
          "Rollback Plan",
          "Staging Environment",
          "Load Balancer",
          "Fault Tolerance"
        ]
      },
      {
        "id": 24,
        "question": "某金融機構的 AI 風控系統遭受對抗性攻擊，駭客透過對輸入特徵進行微小但惡意的擾動，成功欺騙了模型。為了從根本上解決模型自身對這類攻擊的脆弱性，下列何者並非針對此種攻擊型態的技術手段？",
        "options": {
          "A": "強化資料前處理，用以過濾掉格式不符或數值極端異常的輸入；",
          "B": "在模型訓練階段導入對抗樣本訓練，以提升模型對惡意特徵擾動的辨識與防禦能力；",
          "C": "於推論後階段使用規則引擎，以確保模型的預測結果不違反既有的業務硬性規定；",
          "D": "在模型部署環境中強化網路防火牆，以阻擋來自未授權來源的網路連線"
        },
        "answer": "D",
        "explanation": "選項 (D) 是傳統的資訊安全防護手段（網路安全），旨在阻擋未授權存取，並非針對 AI 模型本體脆弱性（即對抗性攻擊）的演算法層面防禦手段。對抗性攻擊（Adversarial Attacks）的特點在於其輸入在格式與連線上完全合法，但特徵數值經過精心設計以欺騙模型決策邊界。選項 (A) 的前處理平滑化、選項 (B) 的對抗訓練（Adversarial Training），以及選項 (C) 的後端規則兜底，都是業界用來增強機器學習模型本身對抗惡意擾動強健性的有效策略。",
        "ml_method": "Adversarial Attacks and Defenses",
        "ml_method_explanation": "對抗性攻擊（Adversarial Attack）是指攻擊者在機器學習模型的輸入資料中，故意加入人類難以察覺的微小擾動（雜訊），導致原本表現優異的模型做出完全錯誤的預測。這種脆弱性源自於高維度特徵空間中神經網路線性行為的累積效應。為防禦此類攻擊，AI 安全領域發展出「對抗訓練（Adversarial Training）」作為最根本的解法。其機制是在模型訓練階段，主動由系統生成大量帶有惡意擾動的對抗樣本加入訓練集中，強迫模型學習在面對雜訊時依然保持穩定的決策邊界，進而提升系統整體的強健性與抗干擾能力。",
        "examples": [
          "在人臉辨識支付系統中，曾有研究指出攻擊者只需佩戴一副印有特定干擾圖案的特製眼鏡，就能誤導 AI 系統將其辨識為特定名人。為防範此類實體對抗攻擊，開發團隊在訓練辨識網路時，大量加入了佩戴各種干擾配件的對抗樣本，大幅強化了模型對臉部核心特徵提取的穩定度。",
          "在自駕車的交通號誌辨識系統中，若攻擊者在「停止」標誌上貼上幾張精心計算過位置的黑色貼紙，就可能導致模型將其誤認為「速限 80」標誌。車廠透過引入對抗訓練與圖像平滑化技術，確保 AI 感知系統能夠濾除這些局部的惡意擾動，準確辨識出號誌的真實語意以保障行車安全。"
        ],
        "comparison": "對抗性攻擊（Adversarial Attack）是一種針對神經網路內部決策漏洞進行的數學擾動攻擊，其輸入通常在人類眼中毫無異狀，常應用於突破電腦視覺辨識系統；相較之下，資料下毒攻擊（Data Poisoning）則是駭客提早潛伏，在企業收集訓練資料階段就惡意注入錯誤標籤的樣本，導致模型從一開始就學壞，這兩種攻擊分別威脅著 AI 系統的推理階段與訓練階段，需要完全不同的防禦機制。",
        "keywords": [
          "對抗性攻擊 (Adversarial Attack)",
          "對抗訓練 (Adversarial Training)",
          "模型脆弱性 (Model Vulnerability)",
          "特徵擾動 (Feature Perturbation)",
          "AI 資訊安全 (AI Security)"
        ],
        "extended_tech": [
          {
            "name": "特徵擠壓技術 (Feature Squeezing)",
            "desc": "一種針對影像對抗性攻擊的高效防禦手段。透過降低影像色彩深度（如將 8-bit 色彩降為 4-bit）或進行空間平滑化處理，它能有效濾除攻擊者隱藏在像素微小變化中的惡意干擾信號，迫使模型回歸到主要的宏觀特徵上進行判斷。"
          },
          {
            "name": "資料下毒防禦 (Poisoning Defense)",
            "desc": "為了防範駭客在訓練資料中植入後門（Backdoor）導致模型行為異常，企業必須導入自動化的資料溯源追蹤與統計異常值檢測管線，在訓練前將可疑的訓練樣本剔除。"
          },
          {
            "name": "生成式紅隊演練 (Generative Red Teaming)",
            "desc": "為大型語言模型量身打造的安全防護機制。由另一套 AI 扮演攻擊者，利用各種極端的提示詞（Prompt Injection）試圖誘發目標模型輸出有害或洩密的內容，藉此提早發現漏洞並設計防禦機制。"
          }
        ],
        "terminology": [
          "Evasion Attack",
          "Fast Gradient Sign Method (FGSM)",
          "Robustness",
          "Decision Boundary",
          "Model Inversion"
        ]
      },
      {
        "id": 25,
        "question": "某企業部署生成式 AI 系統協助行銷與內容產出，但近期遭質疑部分生成內容可能涉及著作權侵權。為降低企業在法律層面的潛在責任與風險，下列哪一項策略最能有效預防侵權問題產生？",
        "options": {
          "A": "對生成內容進行語意相似度比對，自動標註可能涉及既有著作的輸出結果，以降低侵權風險；",
          "B": "建立訓練資料篩選與授權驗證機制，排除未授權或高風險資料來源；",
          "C": "在訓練與微調過程中採用差分隱私技術，避免模型記憶特定受著作權保護的樣本；",
          "D": "在模型輸出端嵌入浮水印（Watermarking）或數位指紋（Digital Fingerprint）技術，以確保生成內容可追溯"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。在 AI 治理與法律合規的實務中，從源頭解決問題是最根本且最有效的策略。透過建立嚴格的資料篩選與授權驗證機制，確保訓練模型所使用的語料或圖像皆為合法授權或屬於公有領域（Public Domain），能最大程度切斷生成模型學習並重現受版權保護內容的可能。選項 (A) 僅是事後過濾，技術上難以涵蓋所有版權作品且無法免除未經授權訓練的疑慮；選項 (C) 差分隱私主要用於保護個人隱私資料，並非針對版權保護的標準解法；選項 (D) 浮水印是用來標示內容是「AI 生成的」，能防止假消息，但無法阻止模型生成侵權內容本身。",
        "ml_method": "AI Data Governance / Copyright Protection",
        "ml_method_explanation": "隨著生成式 AI（如 GPT、Stable Diffusion）的快速發展，AI 資料治理與著作權保護成為企業導入 AI 技術時面臨的首要法律挑戰。生成模型具有從海量訓練資料中「記憶並重組」特徵的能力，若未經授權抓取了受版權保護的作品進行訓練，其生成的內容極易構成實質相似而引發侵權訴訟。因此，現代 AI 開發強調從源頭把關（Data Provenance），建立嚴謹的資料授權審查管線，過濾具版權爭議的高風險素材。同時，部分企業也開始導入機器學習忘卻技術（Machine Unlearning），讓創作者有權要求模型遺忘其特定作品的特徵。",
        "examples": [
          "全球知名的圖庫公司在推出自家的 AI 圖片生成工具時，為確保企業客戶商業使用的安全性，採取了嚴格的資料治理策略。他們宣佈該生成模型僅使用公司擁有完整版權的圖庫與經授權的作品進行訓練，並為客戶生成的每一張圖片提供法律賠償擔保，徹底免除了使用者的侵權疑慮。",
          "一間大型軟體企業在開發程式碼輔助生成（AI Coding Assistant）模型時，為了避免模型輸出其他公司享有版權的封閉原始碼，他們在訓練階段建立了強大的過濾機制，僅從具備寬鬆開源授權條款（如 MIT 或 Apache License）的公共儲存庫中提取訓練資料，從源頭阻斷了法律風險。"
        ],
        "comparison": "在 AI 治理中，資料授權審查（Data Provenance）是從源頭根絕侵權風險，適用於自建模型的企業以規避法律訴訟；相較之下，浮水印技術（Watermarking）與內容過濾器（Content Filter）則是終端防護機制，前者用於防止深偽假消息擴散，後者用於攔截有害與暴力內容。雖然這三者皆屬於 AI 安全合規的範疇，但只有嚴謹的資料授權審查能真正確保生成模型在商業應用上的合法性。",
        "keywords": [
          "AI 資料治理 (AI Data Governance)",
          "著作權保護 (Copyright Protection)",
          "資料授權 (Data Licensing)",
          "源頭把關 (Data Provenance)",
          "生成式 AI 合規 (Generative AI Compliance)"
        ],
        "extended_tech": [
          {
            "name": "機器學習忘卻 (Machine Unlearning)",
            "desc": "因應隱私法規（如 GDPR 的被遺忘權）而生的新興技術。當創作者要求撤回版權作品授權時，該技術能在不從頭重新訓練龐大模型的前提下，精準抹除神經網路中與特定版權樣本相關的記憶與特徵關聯。"
          },
          {
            "name": "數位隱形浮水印 (Invisible Digital Watermarking)",
            "desc": "在 AI 生成的圖片或文本中，嵌入人類肉眼無法察覺但演算法可輕易讀取的數位簽章。這使得平台方能在海量網路內容中，快速且確鑿地追溯某個爭議作品是否由自家的 AI 模型所生成。"
          },
          {
            "name": "差分隱私訓練 (Differential Privacy Training)",
            "desc": "在神經網路模型訓練過程中刻意加入統計學上的數學雜訊，確保模型只會學習到群體數據的普遍通則，而絕對不會記住任何單一病患或客戶的敏感隱私細節，是醫療 AI 的合規標配。"
          }
        ],
        "terminology": [
          "Public Domain",
          "Fair Use",
          "Data Sanitization",
          "Intellectual Property",
          "Algorithmic Audit"
        ]
      },
      {
        "id": 26,
        "question": "在房價預測任務中，若發現特徵如「房間數」與「坪數」存在高度多重共線性（Multicollinearity），為降低共線性對模型參數估計的負面影響，應優先選擇下列哪種模型？",
        "options": {
          "A": "不受多重共線性影響的決策樹模型；",
          "B": "傳統線性迴歸模型，不含正則化項；",
          "C": "支持向量機搭配線性核函數；",
          "D": "含 L1 正則化的 LASSO 迴歸模型"
        },
        "answer": "D",
        "explanation": "(D)是正確答案。LASSO 迴歸包含 L1 正則化，能夠將高度相關特徵中較不重要的特徵權重壓縮至零，從而有效處理多重共線性問題並達到特徵選擇的效果。(A)決策樹雖不受共線性嚴重影響，但若問題本質適合線性模型，LASSO 是處理共線性的經典首選。(B)傳統線性迴歸會因為共線性導致參數估計變異數過大，極不穩定。(C)支持向量機（線性核）並未內建針對共線性的特徵選擇機制，對於處理高度共線性的效果不如 LASSO。",
        "ml_method": "LASSO 迴歸 (L1 正則化)",
        "ml_method_explanation": "LASSO (Least Absolute Shrinkage and Selection Operator) 是一種線性迴歸的延伸方法，其核心機制是在傳統損失函數（如最小平方法）中加入 L1 正則化懲罰項（即係數絕對值之和）。這個懲罰項會迫使模型在優化過程中，將對預測貢獻較小或與其他特徵高度相關（多重共線性）的特徵係數直接壓縮為零。這不僅能防止模型過擬合，更賦予了 LASSO 內建的「特徵選擇」能力，使其在處理高維度且包含多餘特徵的資料時表現優異。",
        "examples": [
          "在基因表現數據分析中，科學家面臨數萬個基因特徵，但只有少數基因與特定疾病相關。使用 LASSO 迴歸可以自動將無關基因的權重降為零，從而篩選出關鍵的致病基因。",
          "在信用風險評估模型中，銀行會收集客戶的數百項財務指標。由於許多指標（如月收入與年收入）高度相關，LASSO 能幫助銀行篩選出最具代表性的少數特徵，建立精簡且具解釋性的信用評分模型。"
        ],
        "comparison": "LASSO 迴歸與一般線性迴歸相比，最大的優勢在於其能透過 L1 正則化將不重要或高度相關特徵的權重壓縮至零，具備內建特徵選擇功能，特別適用於變數極多且存在多重共線性的財務預測與基因分析領域。相較之下，決策樹雖不受共線性影響，但難以捕捉全局線性關係；傳統線性迴歸會因共線性導致估計極不穩定；而 SVM 若不更動核函數，則無自動特徵篩選能力。",
        "keywords": [
          "LASSO 迴歸 (LASSO Regression)",
          "L1 正則化 (L1 Regularization)",
          "多重共線性 (Multicollinearity)",
          "特徵選擇 (Feature Selection)",
          "線性模型 (Linear Models)"
        ],
        "extended_tech": [
          {
            "name": "Ridge 迴歸 (Ridge Regression)",
            "desc": "使用 L2 正則化，主要用於處理共線性但不會將權重壓縮至零，適用於保留所有特徵的預測場景。"
          },
          {
            "name": "彈性網迴歸 (Elastic Net)",
            "desc": "結合 L1 與 L2 正則化，在特徵高度相關時能整組選擇，常應用於複雜基因交互作用分析。"
          },
          {
            "name": "隨機森林 (Random Forest)",
            "desc": "透過樹狀模型評估特徵對純度的貢獻度，作為非線性資料中的特徵篩選與重要性評估工具。"
          }
        ],
        "terminology": [
          "正則化懲罰 (Regularization Penalty)",
          "過擬合 (Overfitting)",
          "變異數 (Variance)",
          "特徵權重 (Feature Weight)",
          "稀疏矩陣 (Sparse Matrix)"
        ]
      },
      {
        "id": 27,
        "question": "某企業需分析半結構化的系統日誌（JSON 格式），以提取關鍵的時序特徵供故障預測模型使用。考量日誌結構複雜且包含巢狀欄位（Nested Fields），下列哪一種策略最有效且實務可行？",
        "options": {
          "A": "先將 JSON 資料扁平化轉成CSV，再對欄位計算統計量（如均值、次數）作為特徵；",
          "B": "使用遞歸神經網路（RNN）直接輸入原始 JSON 字串進行時序特徵抽取；",
          "C": "設計遞迴函式展開巢狀欄位，並基於時間窗口（Time Window）進行聚合與特徵萃取；",
          "D": "只保留時間戳記欄位，忽略其他巢狀內容以簡化特徵工程"
        },
        "answer": "C",
        "explanation": "(C)為正確答案。針對複雜的巢狀 JSON 系統日誌，最務實且有效的做法是透過遞迴展開所有欄位，並結合時間窗口技術對時序資料進行聚合（例如計算一小時內的錯誤次數），以此萃取具預測力的時序特徵。(A)直接扁平化為 CSV 可能會遺失巢狀結構中的重要關聯資訊，且單純計算全域統計量無法捕捉時序動態。(B)將原始 JSON 字串直接餵給 RNN 效率極低，且模型難以從冗長的標籤與結構字元中學習到有效特徵。(D)忽略其他內容等同於放棄日誌中最重要的系統狀態與錯誤資訊，無法建立有效的預測模型。",
        "ml_method": "時序特徵工程與時間窗口聚合",
        "ml_method_explanation": "在處理時序資料或系統日誌時，時間窗口（Time Window）聚合是特徵工程的核心技術。其基本原理是將連續的時間序列依照固定的時間區間（例如每 5 分鐘或每 1 小時）進行分割。在每個窗口內，針對展開後的結構化資料計算統計指標（如最大值、平均值、特定事件發生次數等）。這種機制能夠將高頻、不規則且帶有雜訊的原始日誌，轉換為具有固定維度且能反映系統短期動態趨勢的特徵向量，供機器學習模型學習時間依賴性。",
        "examples": [
          "在電子商務網站的異常流量偵測中，工程師將使用者的點擊日誌按 10 分鐘的時間窗口進行聚合，計算每個 IP 的請求次數與錯誤率，以此作為特徵來即時預測並阻擋潛在的 DDoS 攻擊。",
          "在智慧工廠中，設備感測器會持續回傳包含多層次狀態的 JSON 數據。系統利用時間窗口技術，每小時計算一次溫度震盪幅度和馬達轉速均值，作為機器壽命預測模型的輸入特徵。"
        ],
        "comparison": "針對複雜且巢狀的 JSON 時序日誌，使用時間窗口聚合（Time Window Aggregation）能有效提取反映短期動態變化的固定維度特徵，非常適合異常偵測與系統監控領域。相較於將資料直接扁平化為 CSV，時間窗口能保留時間序列的關聯性；而直接將 JSON 輸入 RNN 則會因為結構字元與過長序列導致訓練困難且效率極低；若僅保留時間戳記則會丟失關鍵狀態資訊，無法建構有效預測。",
        "keywords": [
          "時序特徵工程 (Temporal Feature Engineering)",
          "時間窗口 (Time Window)",
          "日誌分析 (Log Analysis)",
          "聚合運算 (Aggregation)",
          "資料扁平化 (Data Flattening)"
        ],
        "extended_tech": [
          {
            "name": "滑動窗口 (Sliding Window)",
            "desc": "時間窗口的一種變體，允許窗口之間有重疊，以更平滑地捕捉時序信號的連續變化趨勢。"
          },
          {
            "name": "長短期記憶網路 (LSTM)",
            "desc": "一種特殊的 RNN架構，擅長處理長序列依賴，常與時間窗口特徵結合應用於設備剩餘壽命預測。"
          },
          {
            "name": "Apache Flink",
            "desc": "分散式流處理框架，支援強大的時間窗口聚合功能，廣泛用於即時日誌分析與串流特徵計算。"
          }
        ],
        "terminology": [
          "巢狀結構 (Nested Structure)",
          "時序動態 (Temporal Dynamics)",
          "特徵萃取 (Feature Extraction)",
          "全域統計量 (Global Statistics)",
          "資料降維 (Data Dimensionality Reduction)"
        ]
      },
      {
        "id": 28,
        "question": "在一個同時包含連續型特徵與類別型特徵的資料集中，若希望透過適當的特徵工程流程來提升模型整體表現，下列哪一種作法最為合適？",
        "options": {
          "A": "將類別型特徵使用標籤編碼（Label Encoding）轉換後，與連續特徵直接合併進行模型訓練；",
          "B": "將連續特徵進行離散化（Discretization）或分桶（Binning）轉為類別型特徵，統一以類別方式處理；",
          "C": "對連續特徵做標準化（Standardization），類別特徵採用目標編碼（Target Encoding），並生成交互特徵提升模型表現；",
          "D": "只保留連續特徵，忽略類別型變量以簡化模型"
        },
        "answer": "C",
        "explanation": "(C)為正確做法。標準化連續特徵能加速模型收斂並消除尺度差異，而目標編碼是處理高基數類別特徵的有效方法，加上生成交互特徵，能顯著提升模型捕捉複雜模式的能力。(A)標籤編碼會對無序類別引入人為的數值大小關係，可能誤導線性或神經網路模型。(B)將連續特徵全數離散化會造成嚴重的資訊遺失（喪失數值的連續變化細節），通常不建議全面實施。(D)忽略類別變數會遺失重要資訊，降低模型預測能力。",
        "ml_method": "特徵工程 (標準化與目標編碼)",
        "ml_method_explanation": "特徵工程是將原始資料轉換為更能代表潛在問題結構特徵的過程。對於連續型變數，標準化（Standardization）透過減去平均值並除以標準差，使資料服從標準常態分佈，這對於依賴距離運算或梯度下降的模型至關重要。對於類別型變數，目標編碼（Target Encoding）的核心機制是利用目標變數的統計資訊（如該類別下目標變數的平均值）來取代原本的類別標籤，這不僅能將類別轉為具預測力的數值，還能有效處理種類繁多的高基數特徵。",
        "examples": [
          "在廣告點擊率預測中，用戶所在的「城市」是一個類別繁多的特徵。分析師使用目標編碼，將城市名稱替換為該城市過去的平均點擊率，同時對用戶的「年齡」與「瀏覽時間」進行標準化，大幅提升預測精準度。",
          "在保險理賠金額估算系統裡，保單的「車輛型號」被轉換為歷史平均理賠額（目標編碼），而「車輛行駛里程」則經過標準化處理，並將兩者結合生成交互特徵，幫助模型更精細地評估風險。"
        ],
        "comparison": "在處理混合型特徵時，標準化連續特徵能加速模型收斂，而目標編碼能將高基數類別特徵轉換為具預測力的數值，廣泛應用於廣告點擊率預測與保險精算等領域。相比之下，標籤編碼會引入不合理的大小關係，容易誤導線性模型；將連續變數全數離散化則會導致細微數值的資訊嚴重流失；而直接忽略類別特徵更是會遺漏關鍵資訊，大幅降低模型的泛化與預測精準度。",
        "keywords": [
          "特徵工程 (Feature Engineering)",
          "標準化 (Standardization)",
          "目標編碼 (Target Encoding)",
          "高基數特徵 (High Cardinality Features)",
          "標籤編碼 (Label Encoding)"
        ],
        "extended_tech": [
          {
            "name": "獨熱編碼 (One-Hot Encoding)",
            "desc": "將類別特徵轉換為多個二元特徵，適用於基數較低的類別變數，廣泛用於各類機器學習模型的前處理。"
          },
          {
            "name": "特徵交叉 (Feature Crossing)",
            "desc": "將兩個或多個特徵組合產生新的互動特徵，協助線性模型捕捉非線性關係，常用於推薦系統。"
          },
          {
            "name": "Min-Max 縮放 (Min-Max Scaling)",
            "desc": "將連續數值線性縮放到特定範圍（通常是0到1），適合用於神經網路或對數值範圍敏感的演算法。"
          }
        ],
        "terminology": [
          "收斂速度 (Convergence Speed)",
          "交互特徵 (Interaction Feature)",
          "資訊遺失 (Information Loss)",
          "常態分佈 (Normal Distribution)",
          "梯度下降 (Gradient Descent)"
        ]
      },
      {
        "id": 29,
        "question": "某 AI 開發團隊為提升模型開發效率及品質控制，計畫實施持續整合（Continuous Integration, CI）流程。下列哪一項做法最符合 CI 的核心實踐，且能有效減少整合風險？",
        "options": {
          "A": "在主分支（Main Branch）每日固定時間手動合併並執行完整測試流程；",
          "B": "每次程式碼提交（Commit）後自動觸發建置、單元測試及靜態程式碼分析；",
          "C": "於模型訓練完成後，定期安排開發團隊回顧並合併程式碼；",
          "D": "透過自動化部署腳本，將模型在特定時間點批次釋出到測試環境"
        },
        "answer": "B",
        "explanation": "(B)最符合 CI 的核心精神。持續整合強調頻繁且自動化地驗證程式碼，每次 Commit 後自動觸發建置與測試，能即時發現並修復錯誤，極大化減少整合風險。(A)手動合併與固定時間測試違反了 CI「自動化」與「持續（每次提交）」的原則。(C)訓練完成後才定期合併會導致程式碼分歧過大，增加「整合地獄」的風險。(D)描述的是持續部署（CD）或批次發布，而非 CI 階段涵蓋的快速建置與測試核心實踐。",
        "ml_method": "持續整合 (Continuous Integration, CI)",
        "ml_method_explanation": "持續整合（CI）是軟體工程與 MLOps 中的關鍵實踐。其基本原理是要求開發人員頻繁地將程式碼變更合併至共享的主分支中。核心機制依賴於自動化伺服器（如 Jenkins、GitHub Actions），當偵測到版本控制系統有新的 Commit 時，系統會立即自動執行建置流程、執行單元測試及靜態代碼分析。這樣的機制確保了每一份新增的程式碼都不會破壞現有系統，並提供即時反饋，使得錯誤能在開發早期被迅速定位與修復。",
        "examples": [
          "在自動駕駛軟體開發中，數十位工程師共同維護感知模組。透過 CI 系統，只要有人提交新的影像處理演算法，系統便會立即自動執行數百個邊角案例的測試，確保新演算法不會引發迴歸錯誤。",
          "在金融科技公司的演算法交易團隊，每次量化研究員將新的交易策略腳本推送到代碼庫時，CI 系統會自動檢查程式碼風格規範，並利用歷史回測資料進行快速沙盒測試，驗證邏輯正確性後才允許合併。"
        ],
        "comparison": "持續整合（CI）強調頻繁且自動化的建置與測試，每次代碼提交後即時驗證，能快速抓出錯誤並降低整合風險，廣泛應用於敏捷開發與 MLOps 領域。這與傳統手動合併或定期回顧的作法截然不同，後者容易造成代碼分歧過大並引發「整合地獄」。此外，批次釋出到測試環境屬於持續部署（CD）的範疇，雖然重要，但無法取代 CI 階段快速反饋與單元測試的核心價值。",
        "keywords": [
          "持續整合 (Continuous Integration)",
          "自動化測試 (Automated Testing)",
          "模型開發生命週期 (ML Lifecycle)",
          "版本控制 (Version Control)",
          "靜態分析 (Static Analysis)"
        ],
        "extended_tech": [
          {
            "name": "持續部署 (Continuous Deployment, CD)",
            "desc": "CI的延伸，將通過測試的代碼自動部署至生產環境，實現軟體交付的全自動化。"
          },
          {
            "name": "GitOps",
            "desc": "以 Git 為單一真實來源的基礎設施即代碼實踐，結合 CI/CD 自動化管理雲端基礎架構與應用程式狀態。"
          },
          {
            "name": "模型註冊中心 (Model Registry)",
            "desc": "MLOps 中用於集中管理模型版本、中繼資料與部署狀態的系統，確保模型追溯性與協作效率。"
          }
        ],
        "terminology": [
          "單元測試 (Unit Test)",
          "整合地獄 (Integration Hell)",
          "建置流程 (Build Process)",
          "迴歸錯誤 (Regression Error)",
          "沙盒環境 (Sandbox Environment)"
        ]
      },
      {
        "id": 30,
        "question": "某銀行計劃將 AI 詐欺偵測模組整合至核心交易系統，主管機關要求全流程必須符合金融監管對「不可否認性（Non-repudiation）」的資訊安全規範，以確保日後能進行法務追蹤與稽核。下列哪一項措施最能確保此要求的落實？",
        "options": {
          "A": "為每筆 AI 模型推論記錄其輸入與輸出結果的加密雜湊值（Hash），並簽署數位簽章以確保不可竄改性；",
          "B": "優化模型效能以降低平均推論延遲至 100ms 以下，提升使用者體驗；",
          "C": "增加主機備援數量，以確保系統在故障時持續可用；",
          "D": "將模型推論請求導入負載平衡器，避免單點壅塞導致服務延遲"
        },
        "answer": "A",
        "explanation": "(A)是唯一針對「不可否認性」的措施。不可否認性要求確保資料的來源與完整性，使得交易方或系統無法否認曾進行過該操作。使用加密雜湊值與數位簽章可以證明推論紀錄未被竄改，符合稽核與法務要求。(B)是提升效能的措施，與資安或不可否認性無關。(C)是提升系統可用性（Availability）的高可用設計，不解決不可否認性問題。(D)是負載平衡與效能優化，同樣與不可否認性的資安要求無關。",
        "ml_method": "數位簽章與資料完整性驗證",
        "ml_method_explanation": "雖然數位簽章與雜湊不屬於傳統機器學習演算法，但它們是 AI 系統部署於高監管環境（如金融、醫療）時不可或缺的密碼學機制。其核心機制是利用單向雜湊函數（如 SHA-256）將 AI 模型的輸入特徵與輸出預測結果轉換為固定長度的唯一字串（雜湊值）。接著，使用私鑰對該雜湊值進行加密生成數位簽章。任何人都可使用公鑰驗證簽章，確保資料在生成後未經任何竄改，這為 AI 決策提供了具備法律效力的不可否認性基礎。",
        "examples": [
          "在區塊鏈基礎的智能合約中，當 AI 預言機（Oracle）將外部資產價格匯入鏈上時，必須對價格數據附上數位簽章，確保數據提供者日後無法否認其提供的數據，保障交易公正性。",
          "在遠距醫療系統中，AI 輔助診斷軟體生成的醫療影像分析報告會即時產生雜湊值並由醫院系統簽署數位簽章，確保報告作為醫療糾紛法庭證據時，其內容與生成當下完全一致未被竄改。"
        ],
        "comparison": "在金融等高監管領域，確保 AI 模型決策的不可否認性至關重要。使用加密雜湊值並搭配數位簽章，能透過密碼學原理保證推論紀錄未被竄改，為事後稽核與法庭舉證提供堅實基礎。相較之下，優化推論延遲、增加主機備援或引入負載平衡器等措施，雖然能分別提升系統的效能、可用性與吞吐量，但完全無法解決資料完整性與來源證明的資安法規要求，應用目的完全不同。",
        "keywords": [
          "不可否認性 (Non-repudiation)",
          "數位簽章 (Digital Signature)",
          "雜湊函數 (Hash Function)",
          "資料完整性 (Data Integrity)",
          "法規遵循 (Regulatory Compliance)"
        ],
        "extended_tech": [
          {
            "name": "區塊鏈溯源 (Blockchain Traceability)",
            "desc": "利用分散式帳本的不可竄改特性，記錄 AI 模型的訓練數據與推論歷程，增強信任度。"
          },
          {
            "name": "同態加密 (Homomorphic Encryption)",
            "desc": "允許在密文狀態下進行模型推論運算，確保敏感資料在運算過程中的絕對隱私安全。"
          },
          {
            "name": "零知識證明 (Zero-Knowledge Proof)",
            "desc": "在不揭露實際資料內容的情況下，證明某項 AI 推論結果或資料屬性的正確性與合規性。"
          }
        ],
        "terminology": [
          "公鑰與私鑰 (Public/Private Key)",
          "稽核軌跡 (Audit Trail)",
          "高可用性 (High Availability)",
          "單向加密 (One-way Encryption)",
          "負載平衡 (Load Balancing)"
        ]
      },
      {
        "id": 31,
        "question": "某 AI 服務系統每次推論請求需約 1 秒完成，且必須支撐高達 10,000 次請求每秒（RPS）的流量。為確保系統具備高可用性且能穩定應付流量峰值，下列哪一種架構方案最為合適？",
        "options": {
          "A": "依賴單台超高效能伺服器進行垂直擴展，提升硬體規格；",
          "B": "採用容器化部署並水平擴展服務實例，結合自動彈性伸縮機制（Auto Scaling）；",
          "C": "限制最大併發連線數，以避免系統過載；",
          "D": "增加批次處理大小，一次同時處理上千筆請求"
        },
        "answer": "B",
        "explanation": "(B)是最佳解決方案。面對高達 10,000 RPS 且單次耗時 1 秒的高負載，單一伺服器無法承受。採用容器化（如 Kubernetes）配合自動彈性伸縮，能根據即時流量水平擴展（Scale-out）運算節點，確保系統穩定與高可用性。(A)垂直擴展（Scale-up）有硬體物理極限，無法無限提升，且存在單點故障風險。(C)限制併發連線會導致大量用戶請求被拒絕，降低服務可用性與體驗。(D)雖然批次處理可提高吞吐量，但會嚴重增加單筆請求的回應延遲，不適合需要即時回應的服務系統。",
        "ml_method": "模型部署與彈性伸縮 (Auto Scaling)",
        "ml_method_explanation": "自動彈性伸縮（Auto Scaling）是雲端原生 AI 架構的關鍵技術，旨在動態調整運算資源以應對變動的工作負載。其基本原理是持續監控系統指標（如 CPU 使用率、GPU 記憶體用量或 API 請求佇列長度）。當監控指標超過預設閾值（如流量突增），自動伸縮機制會透過容器編排系統（如 Kubernetes）自動啟動新的模型推論實例（Pod）；反之，當流量低迷時則自動縮減實例，從而在維持系統高可用性與低延遲的同時，最佳化基礎設施的營運成本。",
        "examples": [
          "大型串流影音平台在熱門賽事直播期間，其推薦系統的 API 呼叫量會瞬間飆升數十倍。透過 Kubernetes 的自動彈性伸縮機制，系統會在幾分鐘內自動增開數百個 AI 推論節點來處理流量，賽後再自動縮減。",
          "美食外送平台在中午用餐尖峰時段，其 AI 派單路徑最佳化系統會面臨極高併發。利用 Auto Scaling 結合容器化部署，平台確保派單延遲始終維持在毫秒級，不會因流量暴增而導致系統崩潰。"
        ],
        "comparison": "面對高 RPS 且耗時的模型推論，採用容器化與自動彈性伸縮（Auto Scaling）能根據流量動態增減資源，是現代雲端原生架構確保高可用性的最佳實踐。這比單純依賴垂直擴展（Scale-up）更具彈性且無硬體上限限制；相較於限制併發數，能提供更佳的用戶體驗而不拒絕服務；而單純增加批次處理大小雖然能提高吞吐，卻會大幅增加回應延遲，不適合要求即時回應的系統。",
        "keywords": [
          "自動彈性伸縮 (Auto Scaling)",
          "容器化 (Containerization)",
          "高可用性 (High Availability)",
          "負載平衡 (Load Balancing)",
          "微服務架構 (Microservices Architecture)"
        ],
        "extended_tech": [
          {
            "name": "Kubernetes (K8s)",
            "desc": "業界標準的容器編排平台，提供強大的自動化部署、擴展與應用程式管理能力，支撐大規模 AI 服務。"
          },
          {
            "name": "無伺服器架構 (Serverless Computing)",
            "desc": "開發者無需管理底層伺服器，由雲端平台根據請求量自動且毫秒級地分配資源，適合高度波動負載。"
          },
          {
            "name": "服務網格 (Service Mesh)",
            "desc": "專門處理服務間通訊的基礎架構層，提供負載平衡、服務發現與加密連線，強化微服務穩定性。"
          }
        ],
        "terminology": [
          "吞吐量 (Throughput)",
          "回應延遲 (Response Latency)",
          "水平擴展 (Scale-out)",
          "垂直擴展 (Scale-up)",
          "單點故障 (Single Point of Failure)"
        ]
      },
      {
        "id": 32,
        "question": "某企業已將 AI 模型部署於生產環境，為確保系統持續穩定運作，並能提前偵測模型效能可能衰退，技術團隊希望透過監控指標進行預警。\n下列哪一項監控指標最具預測效力，能提早發現模型效能下滑風險？",
        "options": {
          "A": "系統 CPU 與記憶體使用率波動幅度；",
          "B": "模型推論結果的置信度（Confidence）分佈變化趨勢；",
          "C": "API 平均回應時間與延遲百分位數變化；",
          "D": "輸入特徵與訓練資料分布差異的 PSI（Population Stability Index）指數"
        },
        "answer": "D",
        "explanation": "(D)最具預測效力。PSI (Population Stability Index) 專門用於量化線上實際輸入特徵分佈與模型訓練時特徵分佈之間的差異（即資料漂移）。當 PSI 升高，代表輸入資料特徵已發生偏移，這通常是模型預測效能即將衰退的最早期訊號。(A)和(C)屬於 IT 基礎設施與系統效能監控，與模型預測準確度無直接關聯。(B)置信度變化雖有參考價值，但在某些情況下（如神經網路過度自信），置信度不一定會隨準確率下降而明顯改變，不如直接監控輸入分佈的 PSI 來得可靠與提早。",
        "ml_method": "群體穩定度指標 (Population Stability Index, PSI)",
        "ml_method_explanation": "群體穩定度指標（PSI）是 MLOps 中用來衡量資料漂移（Data Drift）的統計工具。其核心機制是將變數（例如模型的某個輸入特徵或輸出分數）劃分為多個區間（Bins），然後比較「基準資料（如訓練集）」與「當前資料（如線上推論集）」在各區間內樣本比例的差異。PSI 的計算公式類似 KL 散度的對稱化版本。當 PSI 值較大時（通常大於 0.2），表示當前資料分佈已發生顯著偏移，模型原本學習到的模式可能不再適用，需發出預警並考慮重新訓練模型。",
        "examples": [
          "在信用卡風險評分模型中，資料科學家每週計算客戶收入特徵的 PSI。若發現 PSI 異常飆高，可能代表近期湧入大量不同客群的申請者，團隊便能及時介入調查是否需要更新模型。",
          "電商的商品推薦系統會監控用戶點擊行為特徵的 PSI。當行銷部門舉辦大型促銷活動導致用戶行為模式劇變時，PSI 監控系統會立即發出警報，提示工程師暫時切換至規則推薦以避免 AI 模型產生誤判。"
        ],
        "comparison": "在線上模型監控中，PSI（群體穩定度指標）是專門用於量化輸入特徵分佈變化的統計指標，能最早期預警資料漂移導致的模型效能衰退，廣泛用於信用評分與行銷推薦等場景。相較之下，CPU/記憶體或 API 延遲屬於 IT 基礎設施監控，無法反映模型預測準確度；而置信度分佈雖有參考價值，但在深度神經網路過度自信時往往失準，不及 PSI 直接監控輸入分佈來得可靠與提早。",
        "keywords": [
          "群體穩定度指標 (Population Stability Index, PSI)",
          "資料漂移 (Data Drift)",
          "模型監控 (Model Monitoring)",
          "特徵分佈 (Feature Distribution)",
          "機器學習營運 (MLOps)"
        ],
        "extended_tech": [
          {
            "name": "概念漂移監測 (Concept Drift Detection)",
            "desc": "監測特徵與目標變數之間關聯性的改變，常用於適應金融市場規則改變或消費者行為模式轉移。"
          },
          {
            "name": "KL 散度 (Kullback-Leibler Divergence)",
            "desc": "衡量兩個機率分佈之間差異的資訊理論指標，為 PSI 計算背後的核心數學基礎之一。"
          },
          {
            "name": "影子部署 (Shadow Deployment)",
            "desc": "將新版模型與舊版平行運行接收真實流量，但新模型結果不回傳給用戶，專用於安全評估新模型效能。"
          }
        ],
        "terminology": [
          "泛化能力 (Generalization)",
          "過度自信 (Overconfidence)",
          "統計檢定 (Statistical Test)",
          "基準資料 (Baseline Data)",
          "閾值警報 (Threshold Alert)"
        ]
      },
      {
        "id": 33,
        "question": "企業團隊在使用 Word2Vec 模型訓練客服文本語料時，若訓練資料量龐大且希望模型能更有效捕捉罕見詞的語意關聯，下列哪一種訓練策略最為適合？",
        "options": {
          "A": "採用 Skip-gram 模型，但以隨機初始化權重加快高頻詞的訓練收斂；",
          "B": "採用 CBOW 模型（Continuous Bag of Words Model）並結合 TF-IDF 權重以強化低頻詞表示；",
          "C": "採用 Skip-gram 模型，利用中心詞預測周圍詞語，能更有效學習低頻詞關係；",
          "D": "採用 CBOW 模型（Continuous Bag of Words Model），利用周圍詞預測中心詞，能提升罕見詞的語意穩定度"
        },
        "answer": "C",
        "explanation": "(C)為最適合策略。Word2Vec 包含 CBOW 與 Skip-gram 兩種架構。Skip-gram 的設計是用一個中心詞去預測周圍的上下文詞。由於在更新權重時，每次中心詞出現都會產生多組訓練樣本（與周圍每個詞組合），這使得罕見詞（低頻詞）有更多機會獲得權重更新，因此 Skip-gram 在捕捉罕見詞語意上表現優於 CBOW。(B)和(D)提到的 CBOW 是用周圍詞預測中心詞，會對上下文進行平均，這容易抹除罕見詞的特徵，通常對高頻詞較好。(A)隨機初始化並非針對罕見詞的解法。",
        "ml_method": "Word2Vec (Skip-gram 架構)",
        "ml_method_explanation": "Word2Vec 是一種將詞彙轉換為密集向量（Dense Vectors）的詞嵌入技術。其中 Skip-gram 架構的核心機制是「以中心詞預測上下文」。給定一個中心詞，模型會試圖最大化其周圍特定窗口內上下文詞彙出現的機率。這種設計的好處是，即使某個罕見詞出現次數很少，只要它一出現，模型就會用它來預測周圍的多個詞，從而產生多次梯度更新。因此，相較於對上下文進行平均的 CBOW，Skip-gram 能在潛在空間中為罕見詞建立更細緻且準確的語意表徵。",
        "examples": [
          "在醫學文獻檢索系統中，許多專業藥物名稱或罕見疾病是低頻詞。開發者使用 Skip-gram 訓練詞向量，使得系統能夠精準理解這些罕見專業術語之間的複雜關聯，提升搜尋相關性。",
          "在分析社群媒體上的非主流次文化用語時，由於這些網路俚語出現頻率低且語境多變，利用 Skip-gram 模型能夠更靈敏地捕捉這些新造詞的潛在語意，協助行銷團隊掌握最新流行趨勢。"
        ],
        "comparison": "在 Word2Vec 中，Skip-gram 利用中心詞預測周圍詞的機制，能為每次出現的詞彙創造多次參數更新機會，特別適合捕捉低頻詞與罕見詞的精細語意，常應用於醫學術語或社群俚語分析。相較之下，CBOW 利用周圍詞預測中心詞，在聚合上下文時會平滑掉罕見詞特徵，雖訓練較快且對高頻詞表現好，但在處理低頻詞時則不如 Skip-gram。隨機初始化或 TF-IDF 權重均非解決此根本架構差異的有效策略。",
        "keywords": [
          "Word2Vec",
          "Skip-gram",
          "連續詞袋模型 (CBOW)",
          "詞嵌入 (Word Embedding)",
          "低頻詞 (Rare Words)"
        ],
        "extended_tech": [
          {
            "name": "FastText",
            "desc": "Word2Vec 的改良版，將詞彙拆解為字元 n-gram，能有效處理未登錄詞（OOV）與形態變化豐富的語言。"
          },
          {
            "name": "GloVe",
            "desc": "結合全局矩陣分解與局部上下文窗口優勢的詞嵌入模型，在捕捉全域統計特性方面表現優異。"
          },
          {
            "name": "BERT (上下文詞嵌入)",
            "desc": "基於 Transformer 的動態詞嵌入模型，能根據上下文改變同一個詞的向量表示，解決一詞多義問題。"
          }
        ],
        "terminology": [
          "密集向量 (Dense Vector)",
          "梯度更新 (Gradient Update)",
          "上下文窗口 (Context Window)",
          "潛在語意空間 (Latent Semantic Space)",
          "負採樣 (Negative Sampling)"
        ]
      },
      {
        "id": 34,
        "question": "在自駕車影像辨識系統中，開發團隊希望模型能同時辨識每個像素所屬的物件類別（例如道路、建築、行人），又能區分出同類物件的不同個體（例如多位行人）。此時最適合採用下列哪一項電腦視覺技術？",
        "options": {
          "A": "語義分割（Semantic Segmentation）；",
          "B": "物件偵測（Object Detection）；",
          "C": "實例分割（Instance Segmentation）；",
          "D": "全景分割（Panoptic Segmentation）"
        },
        "answer": "D",
        "explanation": "(D)全景分割（Panoptic Segmentation）是最適合的技術。全景分割結合了語義分割與實例分割的優點，它不僅對背景類別（如道路、建築，稱為 Stuff）進行像素級的類別預測，同時也能對可數的個體物件（如行人、車輛，稱為 Things）進行像素級的個體區分。(A)語義分割只能區分類別，無法區分同類別的不同行人個體。(B)物件偵測只提供邊界框（Bounding Box），沒有達到像素級別的辨識。(C)實例分割只針對可數物件（Things）進行像素區分，通常不處理背景（Stuff）。",
        "ml_method": "全景分割 (Panoptic Segmentation)",
        "ml_method_explanation": "全景分割（Panoptic Segmentation）是電腦視覺中一項進階的像素級分析任務。其核心機制是統一了「語義分割」（將每個像素分類為特定類別，如天空、道路等不可數的 Stuff）與「實例分割」（識別並分割出獨立的個體，如每一輛車、每一個人等可數的 Things）。在全景分割模型中，影像中的每一個像素都會被賦予一個標籤：如果該像素屬於背景，則標註類別；如果屬於個體物件，則同時標註類別與該物件的獨一無二 ID。這讓機器能獲得最全面且無重疊的場景理解。",
        "examples": [
          "在農業無人機空拍分析中，全景分割技術不僅能劃分出大面積的土壤、水源與作物區域（背景），還能精準分割並計算出畫面中每一棵獨立果樹的像素面積（個體），幫助精準施肥。",
          "在智慧城市的街景分析系統中，政府利用全景分割模型來處理路口監視器影像，同時分類出人行道、斑馬線等基礎設施，並獨立追蹤每一台腳踏車與行人，以優化交通號誌時相。"
        ],
        "comparison": "全景分割完美結合了語義分割與實例分割的特性，能同時對不可數的背景（Stuff）與可數的個體（Things）進行像素級辨識，是自駕車與智慧城市場景理解的最理想技術。相比之下，語義分割無法區分同類別的不同實體；實例分割通常只處理前景個體而忽略背景結構；而物件偵測僅能提供粗略的邊界框，無法達到自動駕駛所需的像素級環境理解與輪廓精確度。",
        "keywords": [
          "全景分割 (Panoptic Segmentation)",
          "語義分割 (Semantic Segmentation)",
          "實例分割 (Instance Segmentation)",
          "物件偵測 (Object Detection)",
          "像素級分類 (Pixel-level Classification)"
        ],
        "extended_tech": [
          {
            "name": "Mask R-CNN",
            "desc": "經典的實例分割模型，在 Faster R-CNN 基礎上增加掩膜預測分支，廣泛用於精確框選與分割個體物件。"
          },
          {
            "name": "U-Net",
            "desc": "常用於醫學影像的語義分割架構，具備編碼器與解碼器及跳躍連接，能有效還原影像邊緣細節。"
          },
          {
            "name": "單階段物件偵測 (YOLO)",
            "desc": "追求極致推論速度的物件偵測演算法，適用於資源受限且需要即時反應的邊緣運算設備。"
          }
        ],
        "terminology": [
          "邊界框 (Bounding Box)",
          "可數物件 (Things)",
          "不可數背景 (Stuff)",
          "場景理解 (Scene Understanding)",
          "空間拓樸 (Spatial Topology)"
        ]
      },
      {
        "id": 35,
        "question": "某媒體公司計畫導入 CLIP（Contrastive Language–Image Pre-training）模型，以協助大量影像自動標註與搜尋，並希望在無需新增標訓資料的情況下，僅透過文字提示（Text Prompt）即可識別影像內容。請問此應用情境中，CLIP 能夠達成的關鍵技術特性為何？",
        "options": {
          "A": "透過圖文對比式學習（Contrastive Learning）將影像與文字映射至共同嵌入空間（Shared Embedding Space），可直接以語意相似度進行零樣本分類；",
          "B": "透過影像增強與特徵擴散降低標訓資料需求；",
          "C": "以監督式學習結合多層感知器（Multilayer Perceptron, MLP）進行影像特徵分類；",
          "D": "以自迴歸生成模型（Autoregressive Model）逐步生成文字標籤描述影像內容"
        },
        "answer": "A",
        "explanation": "(A)正確描述了 CLIP 的核心特性。CLIP 透過圖文對比式學習，將圖片和與之對應的文字描述轉換並對齊到同一個共同嵌入空間。這使得模型在推論時，只需計算影像向量與任意文字提示向量之間的餘弦相似度，就能在完全沒有針對特定類別微調的情況下，達成零樣本（Zero-shot）分類與跨模態搜尋。(B)並非 CLIP 的核心技術。(C)CLIP 並不依賴特定類別的 MLP 監督式學習進行分類。(D)CLIP 是鑑別式/對齊模型，並非像 GPT 那樣的自迴歸文字生成模型。",
        "ml_method": "對比式語言-影像預訓練 (CLIP & Contrastive Learning)",
        "ml_method_explanation": "CLIP (Contrastive Language-Image Pre-training) 是由 OpenAI 提出的大型多模態基礎模型。其基本原理是利用網路上收集的海量「影像-文本」配對資料進行對比式學習。模型包含一個影像編碼器（如 ResNet 或 ViT）與一個文字編碼器（Transformer）。在訓練過程中，核心機制是最大化配對影像與文字在特徵空間中的餘弦相似度，同時最小化未配對（負樣本）影像與文字的相似度。這使得文字和影像被映射到同一個高度對齊的語意空間，賦予模型強大的零樣本遷移能力。",
        "examples": [
          "電子商務平台利用 CLIP 建立以圖搜圖與以文搜圖的混合搜尋引擎。使用者可以直接輸入「適合海灘度假的紅色連身裙」字串，系統透過比較文字與商品圖片的向量相似度，即時回傳最符合的商品影像。",
          "數位資產管理系統中，設計師匯入數千張未命名的素材圖，利用 CLIP 技術，系統允許設計師直接輸入任意文字描述（如「充滿科技感的霓虹城市夜景」），無需預先建立標籤庫即可找出相符的圖片。"
        ],
        "comparison": "CLIP 模型透過圖文對比式學習將影像與文字映射至共同的嵌入空間，賦予其強大的零樣本（Zero-shot）分類與跨模態搜尋能力，這使其成為無需額外標註資料即可進行圖文匹配的完美選擇。這有別於傳統依賴多層感知器進行特定類別監督式學習的模型，也不同於自迴歸文字生成模型（如 GPT）的逐步生成機制。影像增強技術雖有助訓練，但並非 CLIP 達成零樣本辨識的核心機制。",
        "keywords": [
          "對比學習 (Contrastive Learning)",
          "零樣本分類 (Zero-shot Classification)",
          "共同嵌入空間 (Shared Embedding Space)",
          "跨模態搜尋 (Cross-modal Search)",
          "CLIP 模型 (CLIP)"
        ],
        "extended_tech": [
          {
            "name": "對比預訓練 (SimCLR)",
            "desc": "純影像領域的自監督對比學習框架，透過將同一影像的不同增強版本拉近，學習強健的視覺特徵。"
          },
          {
            "name": "視覺語言預訓練 (ViLBERT)",
            "desc": "早期的多模態模型，透過雙流 Transformer 架構分別處理並融合視覺與語言資訊，用於視覺問答等任務。"
          },
          {
            "name": "擴散模型 (Diffusion Models)",
            "desc": "常利用 CLIP 的文字編碼器作為條件引導，將文字提示精準轉換為高品質生成的影像像素。"
          }
        ],
        "terminology": [
          "特徵空間 (Feature Space)",
          "餘弦相似度 (Cosine Similarity)",
          "正樣本與負樣本 (Positive/Negative Samples)",
          "遷移學習 (Transfer Learning)",
          "鑑別式模型 (Discriminative Model)"
        ]
      },
      {
        "id": 36,
        "question": "某資料科學團隊在開發預測模型時，針對多種模型設定（如學習率、樹深度、正則化係數等）進行系統化測試，希望找出在驗證資料上表現最穩定的組合。此過程最可能採用下列哪一種方法？",
        "options": {
          "A": "使用交叉驗證（Cross Validation）反覆評估模型以降低過擬合風險；",
          "B": "透過網格搜尋（Grid Search）在多組超參數設定中進行系統化搜尋與評估；",
          "C": "以隨機搜尋（Random Search）快速探索部分參數空間以提升搜尋效率；",
          "D": "採用貝葉斯優化（Bayesian Optimization）根據歷次結果動態調整搜尋方向"
        },
        "answer": "B",
        "explanation": "(B)最符合題意。題目強調「針對多種模型設定進行『系統化測試』，希望找出組合」，這正是網格搜尋（Grid Search）的定義：窮舉所有預先定義的超參數組合，進行系統性、全面性的測試與評估。(A)交叉驗證是評估模型的方法，常與超參數搜尋搭配，但本身不是尋找參數組合的方法。(C)隨機搜尋是隨機抽樣參數空間，非系統化窮舉。(D)貝葉斯優化是動態調整搜尋方向的智慧型方法，非單純的系統化窮舉測試。",
        "ml_method": "網格搜尋 (Grid Search)",
        "ml_method_explanation": "網格搜尋（Grid Search）是機器學習中最經典且直觀的超參數調校（Hyperparameter Tuning）方法。其基本原理是要求開發者為每一個超參數設定一個離散的候選數值列表。接著，網格搜尋機制會將這些參數的所有可能排列組合產生一個多維度的「網格」。演算法會系統化地窮舉這個網格中的每一個交點（即每一組超參數組合），訓練模型並在驗證集上評估其效能，最終選出表現最佳的那組超參數。雖然計算成本高，但能保證在設定的範圍內找到最佳解。",
        "examples": [
          "在訓練隨機森林模型來預測客戶流失時，工程師設定決策樹數量為 [50, 100, 200]，最大深度為 [10, 20, 30]。透過網格搜尋，系統自動訓練並測試這 9 種組合，找出能達到最高 F1 分數的設定。",
          "工廠的影像瑕疵檢測系統使用支持向量機 (SVM)。為了找到最佳的決策邊界，開發者運用網格搜尋窮舉測試懲罰係數 C 的 5 種數值與核函數參數 Gamma 的 5 種數值，從 25 種組合中選出泛化能力最強的模型。"
        ],
        "comparison": "網格搜尋（Grid Search）透過窮舉所有預設的超參數組合進行系統化測試，保證在給定範圍內找到最佳解，非常適合參數空間較小且需嚴謹評估的模型調校。相較之下，隨機搜尋雖效率高但不保證系統化涵蓋；貝葉斯優化則根據歷史結果動態學習，屬智慧搜尋而非單純窮舉；而交叉驗證是評估泛化能力的方法，常與這些搜尋策略結合使用，但其本身並非尋找參數組合的搜尋演算法。",
        "keywords": [
          "網格搜尋 (Grid Search)",
          "超參數調校 (Hyperparameter Tuning)",
          "交叉驗證 (Cross Validation)",
          "隨機搜尋 (Random Search)",
          "貝葉斯優化 (Bayesian Optimization)"
        ],
        "extended_tech": [
          {
            "name": "貝葉斯優化 (Bayesian Optimization)",
            "desc": "利用高斯過程建立代理模型，智慧地選擇下一個最可能提升效能的參數組合，適合高計算成本的模型。"
          },
          {
            "name": "Hyperband 演算法",
            "desc": "結合隨機搜尋與提早停止機制，將運算資源優先分配給有潛力的參數組合，大幅加速調校過程。"
          },
          {
            "name": "巢狀交叉驗證 (Nested Cross-Validation)",
            "desc": "內外雙層循環的驗證機制，能無偏差地評估包含超參數調校流程的整體模型泛化能力。"
          }
        ],
        "terminology": [
          "超參數空間 (Hyperparameter Space)",
          "泛化能力 (Generalization)",
          "過擬合 (Overfitting)",
          "驗證集 (Validation Set)",
          "參數組合 (Parameter Grid)"
        ]
      },
      {
        "id": 37,
        "question": "某公司正在訓練一個大型語音合成模型，開發團隊使用多台 GPU 進行訓練，但經常出現 GPU 記憶體不足問題。由於模型架構已固定且無法更換硬體，團隊希望在維持模型效能與收斂品質的前提下，下列哪一種方法最有效降低單張 GPU 的記憶體壓力？",
        "options": {
          "A": "減少訓練資料量以降低記憶體使用；",
          "B": "採用較小的批次大小（Batch Size）並搭配資料分片（Data Sharding）分散訓練負載；",
          "C": "增加學習率（Learning Rate）以加快收斂速度；",
          "D": "改用測試資料集（Test Set）進行部分訓練以節省空間"
        },
        "answer": "B",
        "explanation": "(B)是正確答案。GPU 記憶體主要消耗在模型參數、梯度與訓練資料的批次（Batch）上。在模型架構與硬體固定的情況下，最直接降低記憶體佔用的方法是減少每個 GPU 處理的批次大小（Batch Size）。同時搭配資料平行或分片技術（如 Data Sharding/Parallelism）分散負載，能在多 GPU 環境下維持訓練品質。(A)減少總訓練資料量無助於解決單步運算時的記憶體峰值，且會損害模型效能。(C)增加學習率與記憶體佔用無關。(D)將測試集用於訓練違反機器學習基本原則，會導致嚴重的資料洩漏與過擬合。",
        "ml_method": "批次大小調整 (Batch Size Tuning) 與分散式訓練",
        "ml_method_explanation": "在深度學習訓練中，GPU 記憶體（VRAM）的消耗主要來自模型權重、優化器狀態以及前向傳播過程中儲存的活化值（Activations）。而活化值的記憶體佔用與批次大小（Batch Size）呈正比。當遇到 Out-Of-Memory (OOM) 錯誤時，將批次大小調小是最常見的緩解機制。為了彌補批次變小可能導致梯度估計不穩定及硬體利用率下降的問題，通常會結合梯度累積（Gradient Accumulation）或在多台 GPU 上進行資料分片（Data Parallelism），以維持等效的全局批次大小與收斂品質。",
        "examples": [
          "研究機構在訓練參數量達數十億的開源語言模型時，單張 RTX 3090 無法塞入 Batch Size 為 32 的資料。工程師將 Batch Size 降為 4，並啟用梯度累積技術，順利在有限硬體上完成訓練。",
          "醫療影像團隊處理高解析度 3D MRI 影像時，因影像體積過大導致 GPU 記憶體頻繁崩潰。他們將每批次處理的影像數量減至 1，並利用多台 GPU 分散處理不同的影像資料（Data Sharding），成功穩定了模型訓練過程。"
        ],
        "comparison": "在模型與硬體固定的情況下，減少批次大小（Batch Size）能最直接有效地降低 GPU 活化值的記憶體佔用，搭配資料分片能彌補分散式訓練中的效能問題，是解決 OOM 的標準手段。相較之下，減少訓練資料量不僅無助於降低單步運算的峰值記憶體，還會嚴重損害模型效能；增加學習率與記憶體佔用毫無關聯；而改用測試集進行訓練則是嚴重違反機器學習原則的資料洩漏行為。",
        "keywords": [
          "批次大小 (Batch Size)",
          "資料分片 (Data Sharding)",
          "記憶體不足 (Out-of-Memory, OOM)",
          "分散式訓練 (Distributed Training)",
          "梯度累積 (Gradient Accumulation)"
        ],
        "extended_tech": [
          {
            "name": "梯度累積 (Gradient Accumulation)",
            "desc": "在較小批次上計算梯度並累加多次後才更新權重，藉此在有限記憶體下模擬大批次訓練的穩定性。"
          },
          {
            "name": "混合精度訓練 (Mixed Precision Training)",
            "desc": "交替使用 FP16 與 FP32 數值格式，能在幾乎不損失準度的情況下，將記憶體消耗減半並加速運算。"
          },
          {
            "name": "模型平行化 (Model Parallelism)",
            "desc": "當單一模型大到無法放入單張 GPU 時，將模型網路的不同層或張量拆分至多張 GPU 協同運算。"
          }
        ],
        "terminology": [
          "活化值 (Activations)",
          "優化器狀態 (Optimizer State)",
          "收斂品質 (Convergence Quality)",
          "資料洩漏 (Data Leakage)",
          "資料平行 (Data Parallelism)"
        ]
      },
      {
        "id": 38,
        "question": "某影像設計團隊在使用 Stable Diffusion 生成 4K 級產品圖時，發現影像邊緣與細節存在顆粒化與模糊現象。\n若僅能在生成階段進行調整，希望提升畫面清晰度與紋理層次，同時避免過度平滑，下列哪一項作法最適合？",
        "options": {
          "A": "降低取樣步數，以縮短生成時間；",
          "B": "增加取樣步數並選擇高品質取樣器，以強化細節還原度；",
          "C": "提高 CFG（Classifier-Free Guidance）值，使生成結果更具創意與多樣性；",
          "D": "改用低解析度輸入以降低計算成本"
        },
        "answer": "B",
        "explanation": "(B)為最佳作法。在擴散模型（如 Stable Diffusion）中，生成過程是一個逐步去噪（Denoising）的過程。增加取樣步數（Sampling Steps）能讓模型有更多次數進行細微的噪聲去除，搭配合適的高品質取樣器（Sampler，如 DPM++ 2M Karras），能顯著改善邊緣模糊、顆粒感，強化細節與紋理層次。(A)降低步數會使去噪不完全，導致更嚴重的顆粒感與模糊。(C)提高 CFG 值會強制模型更貼近提示詞，過高的 CFG 反而會導致對比度過高、色彩失真及影像崩壞，不一定改善細節。(D)低解析度與提升清晰度的目標背道而馳。",
        "ml_method": "擴散模型取樣機制 (Diffusion Sampling)",
        "ml_method_explanation": "擴散模型（Diffusion Models）的生成過程是從完全隨機的純雜訊開始，透過神經網路逐步去除雜訊（Denoising），最終還原出清晰影像。這個逐步推論的過程由「取樣器（Sampler）」與「取樣步數（Steps）」控制。核心機制是利用數值微分方程求解器（如 Euler 或 DPM 算法）在每一步估計並減去雜訊。步數越多，模型每次扣除的雜訊量越小、越精確，影像細節就越豐富且不粗糙；而高品質的取樣器演算法則能在有限步數內，更穩定地還原出細膩的紋理與邊緣。",
        "examples": [
          "遊戲美術設計師使用 AI 生成遊戲場景的材質貼圖。為了確保石頭與木紋的表面紋理逼真且不模糊，設計師將取樣步數從預設的 20 提高到 50，並切換至高階的祖先取樣器，成功獲得高清晰度的材質。",
          "室內設計公司利用擴散模型生成裝潢效果圖。當發現生成的沙發布料呈現塊狀模糊時，操作員調整參數，增加去噪步數，讓系統能更細緻地計算光影與布料皺褶，產出達到照片級真實感的渲染圖。"
        ],
        "comparison": "在擴散模型中，增加取樣步數並搭配高品質取樣器能讓模型進行更細緻的去噪過程，顯著提升邊緣清晰度、紋理細節與影像真實感，是解決顆粒化的首選作法。相反地，降低步數會導致去噪不完全與模糊加劇；提高 CFG 值雖能強化提示詞符合度，但過高會造成對比失真與影像崩壞，無助於細節平滑過渡；而改用低解析度輸入則完全與提升 4K 畫質清晰度的目標背道而馳。",
        "keywords": [
          "擴散模型 (Diffusion Models)",
          "取樣步數 (Sampling Steps)",
          "取樣器 (Sampler)",
          "CFG 值 (Classifier-Free Guidance)",
          "去噪過程 (Denoising Process)"
        ],
        "extended_tech": [
          {
            "name": "潛在擴散模型 (Latent Diffusion Models)",
            "desc": "將去噪過程移至低維度潛在空間執行，大幅降低高解析度影像生成的計算資源需求（如 Stable Diffusion）。"
          },
          {
            "name": "ControlNet",
            "desc": "擴散模型的擴充架構，允許輸入邊緣圖或人體骨架等條件，精確控制影像生成的結構與空間配置。"
          },
          {
            "name": "LoRA (Low-Rank Adaptation)",
            "desc": "輕量級微調技術，透過少量參數更新即可讓擴散模型快速學習並生成特定畫風或特定人物特徵。"
          }
        ],
        "terminology": [
          "高斯雜訊 (Gaussian Noise)",
          "微分方程求解器 (ODE Solver)",
          "紋理層次 (Texture Detail)",
          "提示詞引導 (Prompt Guidance)",
          "影像崩壞 (Image Artifacts)"
        ]
      },
      {
        "id": 39,
        "question": "某企業的資料科學團隊利用 ARIMA 模型（AutoRegressive Integrated Moving Average Model）預測每週產品銷售量。模型建立完成後，分析人員發現預測誤差隨時間呈現週期性波動，且自相關函數（ACF）顯示殘差在多個時滯（Lag）上仍顯著不為零。根據上述現象，最合理的模型診斷結論為何？",
        "options": {
          "A": "模型殘差符合白噪音（White Noise）假設，預測表現穩定；",
          "B": "模型殘差雖有輕微異常，但可視為隨機誤差忽略不計；",
          "C": "模型存在配適不足（Underfitting）問題，需重新調整 p 或 q 參數以捕捉時間依賴性；",
          "D": "殘差特性不影響預測結果，無須進一步修正"
        },
        "answer": "C",
        "explanation": "(C)為最合理的診斷。在時間序列分析中，若模型配適良好，其殘差（預測誤差）應該呈現白噪音（White Noise）特徵，即殘差之間無自相關性（ACF 在各時滯均接近零）。題目中「誤差隨時間呈現週期性波動，且 ACF 在多個時滯上顯著不為零」，表示資料中仍有明顯的時間依賴性與週期性未被模型學習到。這屬於配適不足（Underfitting），必須調整自迴歸項(p)或移動平均項(q)，或改用考慮季節性的 SARIMA 模型。(A)(B)(D)皆忽略了殘差具備自相關性代表模型未能萃取所有資訊的嚴重性。",
        "ml_method": "ARIMA 模型與殘差診斷 (Residual Diagnostics)",
        "ml_method_explanation": "ARIMA 是一種經典的時間序列預測模型，由自迴歸(AR, 參數 p)、差分(I, 參數 d)與移動平均(MA, 參數 q)三部分組成。其基本原理是利用歷史觀測值及其過去的預測誤差來預測未來。模型建立後，必須進行「殘差診斷」核心機制：檢驗殘差序列是否為獨立同分配的純隨機波動（白噪音）。如果自相關函數 (ACF) 圖顯示殘差在某些滯後期（Lags）顯著異於零，意味著原始資料中的線性動態模式尚未被模型完全捕捉，模型參數需要重新調整以改善預測力。",
        "examples": [
          "零售業預測衛生紙銷量時，建立的 ARIMA 模型殘差在 Lag=7 時總是出現顯著的相關性。這暗示銷量存在明顯的「每週」週期性波動，分析師據此升級為包含季節性參數的 SARIMA 模型以消除此誤差。",
          "發電廠使用時間序列預測明日用電量。如果發現模型的預測誤差呈現波浪狀起伏（非白噪音），工程師會重新檢視並增加自迴歸項(p)的階數，迫使模型進一步學習氣溫變化對用電量的潛在遞延影響。"
        ],
        "comparison": "在時間序列預測中，ARIMA 模型配適良好的指標是殘差呈現無自相關的白噪音。若殘差顯示週期性波動且 ACF 不為零，代表模型配適不足（Underfitting），未能完全捕捉資料的時間依賴性，應調整自迴歸(p)或移動平均(q)參數，或引入季節性模型（SARIMA）。此時若將殘差視為隨機誤差或白噪音而忽略不計，將導致預測模型失去對趨勢與週期性的敏銳度，嚴重影響商業決策準確性。",
        "keywords": [
          "ARIMA 模型",
          "殘差診斷 (Residual Diagnostics)",
          "自相關函數 (ACF)",
          "白噪音 (White Noise)",
          "配適不足 (Underfitting)"
        ],
        "extended_tech": [
          {
            "name": "SARIMA (季節性 ARIMA)",
            "desc": "在傳統 ARIMA 基礎上加入季節性自迴歸與差分參數，專門處理具備明顯季節性或週期性波動的時間序列資料。"
          },
          {
            "name": "Ljung-Box 檢定",
            "desc": "一種統計檢定方法，用於正式測試時間序列模型的殘差是否整體呈現隨機獨立的白噪音狀態。"
          },
          {
            "name": "Prophet 預測模型",
            "desc": "由 Meta 開發的加法時間序列模型，能靈活處理缺失值、趨勢變化以及複雜的節假日效應。"
          }
        ],
        "terminology": [
          "時滯 (Lag)",
          "移動平均 (Moving Average)",
          "時間依賴性 (Time Dependence)",
          "差分 (Differencing)",
          "平穩性 (Stationarity)"
        ]
      },
      {
        "id": 40,
        "question": "下列哪一項最正確地描述了 VAE（Variational Autoencoder）、GAN（Generative Adversarial Network）與擴散模型（Diffusion Model）在多模態潛在空間對齊（Latent Alignment）與生成策略上的根本差異？",
        "options": {
          "A": "VAE 透過顯式潛在變數建模實現跨模態對齊，適合捕捉整體語意結構但生成解析度有限；GAN 透過對抗損失（Adversarial Loss）在不同模態間學習分佈映射，生成品質高但穩定性差；擴散模型則以條件化噪聲反推（Conditional Denoising）方式實現高保真跨模態生成，兼具穩定性與多樣性；",
          "B": "VAE 與 Diffusion Ｍodel 均屬隱式生成架構，主要依賴對抗式訓練實現跨模態對齊；GAN 則以顯式後驗估計方式提升樣本一致性；",
          "C": "VAE 與 GAN 均使用馬爾可夫鏈（Markov Chain）進行跨模態轉換；Diffusion Model 則透過 KL 散度最小化學習語意對應。；",
          "D": "三者在多模態應用中皆依賴同一潛在表徵空間（Shared Latent Space），僅在解碼器結構不同而已"
        },
        "answer": "A",
        "explanation": "(A)精確總結了三大生成模型的本質差異。VAE 使用編碼器將資料映射到常態分佈的潛在空間（顯式建模），生成結果常偏模糊（解析度有限）。GAN 透過生成器與鑑別器的博弈（對抗損失）直接學習資料分佈映射，生成細節銳利但訓練極不穩定（易模式崩潰）。擴散模型（Diffusion）藉由破壞（加噪）與條件化重建（去噪）過程，展現極高的生成品質、穩定性與多樣性。(B)將 VAE 與 Diffusion 說成依賴對抗訓練是錯誤的。(C)VAE 與 GAN 並不使用馬爾可夫鏈，擴散模型才使用馬爾可夫鏈加噪，KL散度最小化是 VAE 的特徵。(D)三者的潛在空間建構方式與學習機制截然不同，並非僅解碼器不同。",
        "ml_method": "生成式 AI 模型架構 (VAE, GAN, Diffusion)",
        "ml_method_explanation": "生成式 AI 的三大主流架構各有其核心機制：VAE (變分自編碼器) 透過最大化證據下界 (ELBO) 強迫潛在空間服從機率分佈，確保空間連續性但生成結果較平滑。GAN (生成對抗網路) 由生成器與鑑別器組成，鑑別器試圖區分真假，生成器試圖騙過鑑別器，這種無監督對抗學習能產生極度逼真的樣本，但難以收斂。Diffusion (擴散模型) 則採用物理熱力學概念，先將資料逐步加入高斯雜訊變成純雜訊，再訓練神經網路學習逆向去噪過程，以此達成品質與穩定性兼具的頂級生成能力。",
        "examples": [
          "在藥物分子設計中，研究員利用 VAE 將已知化學結構編碼為連續的潛在向量，並在該空間中平滑插值，生成具有潛在新療效且結構合理的候選藥物分子。",
          "影視特效公司使用 GAN 技術將白天拍攝的風景影片自動轉換為逼真的黑夜場景；而當需要根據導演的精確文字指令生成特定風格的科幻概念圖時，則採用擴散模型以獲得最高的細節與可控性。"
        ],
        "comparison": "VAE、GAN 與擴散模型在生成策略上有根本差異。VAE 透過顯式潛在空間建模，生成結果平滑但解析度有限；GAN 依賴對抗學習，生成品質極高但訓練極不穩定且易模式崩潰；擴散模型則透過條件化去噪，完美平衡了高保真品質、訓練穩定性與樣本多樣性。將 VAE 與 Diffusion 誤認為依賴對抗訓練，或認為三者僅解碼器不同，皆是嚴重誤解了這三種當代主流生成架構的底層數學機制。",
        "keywords": [
          "生成對抗網路 (GAN)",
          "變分自編碼器 (VAE)",
          "擴散模型 (Diffusion Models)",
          "潛在空間對齊 (Latent Alignment)",
          "對抗損失 (Adversarial Loss)"
        ],
        "extended_tech": [
          {
            "name": "條件生成對抗網路 (cGAN)",
            "desc": "在 GAN 架構中加入條件標籤，使模型能根據指定類別或屬性生成特定特徵的影像資料。"
          },
          {
            "name": "VQ-VAE",
            "desc": "結合向量量化技術的變分自編碼器，能有效壓縮特徵並生成高解析度、邊緣銳利的影像。"
          },
          {
            "name": "流匹配模型 (Flow Matching)",
            "desc": "新興的生成模型框架，透過連續時間常微分方程直接建立數據與雜訊的傳輸映射，訓練效率優於傳統擴散模型。"
          }
        ],
        "terminology": [
          "模式崩潰 (Mode Collapse)",
          "條件化去噪 (Conditional Denoising)",
          "隱式生成 (Implicit Generative)",
          "馬爾可夫鏈 (Markov Chain)",
          "KL 散度 (KL Divergence)"
        ]
      },
      {
        "id": 41,
        "question": "在進行超參數調校（Hyperparameter Tuning）時，若直接在 K-Fold 交叉驗證（Cross-Validation）的資料上同時調整模型參數並評估效能，最可能導致下列哪一種問題？",
        "options": {
          "A": "模型的交叉驗證結果出現過度樂觀偏差（Over-optimistic Bias），因測試摺資料間接參與參數選擇，造成資料洩漏（Data Leakage）；",
          "B": "模型會在每一摺（Fold）內反覆調整參數，導致訓練不穩與過度正則化；",
          "C": "因交叉驗證資料被重複使用，造成效能方差增大，無法獲得穩定估計；",
          "D": "K-Fold 交叉驗證的假設與超參數搜尋相衝突，導致驗證過程失效"
        },
        "answer": "A",
        "explanation": "(A)是正確的。如果使用同一組交叉驗證的結果來「選擇」最佳的超參數，又用這組結果來「評估」該模型最終的預期效能，那麼該效能評估會產生過度樂觀的偏差。這是因為模型已經隱含地「看過」驗證資料並為其調整了參數，構成了一種間接的資料洩漏（Data Leakage）。正確作法是使用「巢狀交叉驗證（Nested Cross-Validation）」或切分獨立的測試集來進行最終評估。(B)(C)(D)皆非超參數調校與交叉驗證混用時的核心理論缺陷。",
        "ml_method": "交叉驗證與資料洩漏 (Cross-Validation & Data Leakage)",
        "ml_method_explanation": "K-Fold 交叉驗證是一種評估模型泛化能力的重抽樣技術。其機制是將資料分成 K 份，每次拿 1 份當驗證集，其餘 K-1 份當訓練集，重複 K 次並平均結果。然而，如果在超參數調校中，模型不斷根據這 K 次驗證分數的反饋來修改參數直到分數最高，那麼這組參數就已經過度適應了這批特定的驗證資料。這種現象稱為「資訊洩漏」或「選型偏差」。為了得到真實的泛化能力評估，必須有一組完全未參與訓練與參數選擇的獨立測試集來進行最終檢驗。",
        "examples": [
          "參加 Kaggle 機器學習競賽時，參賽者若單純根據 Public Leaderboard (等同於驗證集) 不斷微調超參數以衝高分數，最終在 Private Leaderboard (獨立測試集) 揭曉時往往會遭遇分數暴跌，這就是過度適應驗證集導致的偏差。",
          "醫療團隊開發疾病預測模型時，將所有醫院資料混在一起做 K-Fold 調參數並直接發布準確率。上線後發現對新病患預測極差，原因就是他們沒有預留獨立醫院的資料作為最終盲測，導致對模型效能過度樂觀。"
        ],
        "comparison": "在 K-Fold 交叉驗證中直接依賴驗證摺（Validation Fold）來反覆調整超參數並以此報告最終效能，會導致模型對該驗證集產生過度適應，引發「資料洩漏」與過度樂觀的效能偏差。正確作法是引入完全獨立的測試集或採用巢狀交叉驗證。這與單純的參數訓練不穩、效能方差增大或假設衝突無關，其核心問題在於破壞了模型評估中「測試資料必須未曾參與任何模型決策」的神聖原則。",
        "keywords": [
          "交叉驗證 (Cross-Validation)",
          "超參數調校 (Hyperparameter Tuning)",
          "資料洩漏 (Data Leakage)",
          "過度樂觀偏差 (Over-optimistic Bias)",
          "模型泛化 (Model Generalization)"
        ],
        "extended_tech": [
          {
            "name": "巢狀交叉驗證 (Nested Cross-Validation)",
            "desc": "包含內圈負責超參數調校，外圈負責效能評估的嚴謹架構，有效避免參數選擇導致的資料洩漏。"
          },
          {
            "name": "保留驗證法 (Holdout Validation)",
            "desc": "將資料集單次切分為訓練、驗證與測試三個完全獨立的子集，是最直觀防止資訊洩漏的評估方式。"
          },
          {
            "name": "時間序列交叉驗證 (Time Series Split)",
            "desc": "專為時序資料設計的滾動式驗證方法，嚴格遵守時間先後順序，避免使用未來資訊預測過去。"
          }
        ],
        "terminology": [
          "驗證集 (Validation Fold)",
          "測試集 (Test Set)",
          "過度適應 (Overfitting to Validation)",
          "選型偏差 (Selection Bias)",
          "效能評估 (Performance Evaluation)"
        ]
      },
      {
        "id": 42,
        "question": "若部署一個深度學習模型至金融風控系統，該模型採用鑑別式架構（如 Transformer Classifier）。然而上線後，模型對新樣本的分類錯誤率顯著上升，經檢查發現，輸入資料分佈已與原訓練集明顯不同。針對此情形，下列哪一種應對策略最為適合？",
        "options": {
          "A": "改用生成對抗網路（GAN）生成新樣本並混入訓練集；",
          "B": "改用邏輯迴歸模型（Logistic Regression）以提升穩定性；",
          "C": "增加模型容量（Model Capacity），以學習更多樣本差異；",
          "D": "使用變分自編碼器（VAE）監控潛在空間分佈，偵測輸入資料偏移"
        },
        "answer": "D",
        "explanation": "(D)是最佳應對策略。線上系統遭遇資料分佈改變（資料漂移），盲目重新訓練或改模型架構治標不治本。利用如 VAE 等生成模型或密度估計方法來監控線上輸入資料在潛在空間（Latent Space）的分佈，能有效量化並偵測異常樣本或資料偏移。當偏移超過閾值時，系統可發出警報並自動觸發重訓流程，這才是強健的 MLOps 作法。(A)盲目生成樣本並不能反映真實世界發生改變的新分佈。(B)改用簡單模型並不能解決輸入特徵已改變的根本問題。(C)增加容量在輸入分佈已改變的情況下無濟於事，甚至加劇對舊資料的過擬合。",
        "ml_method": "分佈外偵測 (OOD Detection) 與潛在空間監控",
        "ml_method_explanation": "在機器學習正式上線後，最怕遇到「分佈外 (Out-of-Distribution, OOD) 資料」或「資料漂移」。為了及早發現，工程師常引入無監督學習模型（如 VAE 或 Autoencoder）作為監控器。其核心機制是利用僅在正常訓練集上訓練的自編碼器，將線上新資料壓縮至潛在空間再重建。若新資料與訓練集分佈相近，重建誤差會很小；若新資料特性發生改變（如金融市場規則改變帶來的新交易模式），重建誤差或潛在空間的分佈距離就會急遽增加，系統藉此觸發警報。",
        "examples": [
          "信用卡發卡銀行在原有預測違約的模型旁，平行部署了一個 VAE 監控模型。當經濟大環境改變導致客戶消費行為模式整體偏移時，VAE 偵測到重建誤差異常變大，提醒團隊必須即刻收集最新資料重新訓練鑑別模型。",
          "製造業產線的 AI 瑕疵檢測系統中，工程師使用 Autoencoder 監控攝影機捕捉到的產品影像。當廠房更換照明設備導致影像色溫與陰影改變時，系統能自動辨識出影像分佈偏移，暫停 AI 自動剔除機制並呼叫人工介入。"
        ],
        "comparison": "當線上系統遭遇資料漂移導致錯誤率上升時，利用 VAE 或 Autoencoder 等生成模型監控潛在空間分佈，能有效量化輸入資料的異常與偏移程度，及時預警並觸發重訓。相比之下，盲目使用 GAN 生成樣本無法反映真實世界發生的新分佈；改用簡單的邏輯迴歸或單純增加模型容量，皆無法解決輸入特徵與歷史訓練集已經產生本質差異的核心問題，甚至會加劇對舊資料的過擬合。",
        "keywords": [
          "分佈外偵測 (OOD Detection)",
          "資料漂移 (Data Drift)",
          "潛在空間監控 (Latent Space Monitoring)",
          "變分自編碼器 (VAE)",
          "機器學習營運 (MLOps)"
        ],
        "extended_tech": [
          {
            "name": "孤立森林 (Isolation Forest)",
            "desc": "基於樹狀結構的異常偵測演算法，透過隨機切割特徵空間，能高效識別出與多數樣本分佈迥異的異常點。"
          },
          {
            "name": "單類支持向量機 (One-Class SVM)",
            "desc": "無監督異常偵測技術，試圖在特徵空間中尋找包圍正常資料的最小超球體，落於球外者視為異常分佈。"
          },
          {
            "name": "概念漂移適應 (Concept Drift Adaptation)",
            "desc": "在線上學習系統中，能根據新進資料流動態更新模型權重，使模型自動適應特徵與標籤關係的改變。"
          }
        ],
        "terminology": [
          "鑑別式架構 (Discriminative Architecture)",
          "重構誤差 (Reconstruction Error)",
          "閾值警報 (Threshold Alert)",
          "密度估計 (Density Estimation)",
          "無監督學習 (Unsupervised Learning)"
        ]
      },
      {
        "id": 43,
        "question": "某金融科技公司欲導入 AI 模型協助客服郵件自動分類（投訴、詢問、表揚）。團隊同時考慮兩種模型設計：方案 A（生成式路徑）：採用VAE 建構潛在語意空間，再結合下游分類器進行標籤預測；方案 B（鑑別式路徑）：採用BERT Classifier 直接根據輸入文本進行監督式分類。現有標註資料約 2,000 筆，資料分佈均勻但擴充成本高。若團隊希望公平比較兩種模型的資料利用效率與泛化能力，下列哪一種實驗設計最能突顯兩者的本質差異？",
        "options": {
          "A": "在完整資料集上分別訓練兩者，並比較其分類準確率（Accuracy）與推論時間；",
          "B": "在低資源情境（Low-resource Setting）下，逐步減少標註比例（100%、50%、10%），比較其F1-score；",
          "C": "使用 GAN 自動生成文本樣本補足資料，觀察兩模型在資料增強後的精確率（Precision）差異；",
          "D": "在相同訓練資料上固定輸入維度，僅調整模型參數量，比較其對過擬合的敏感度"
        },
        "answer": "B",
        "explanation": "(B)最能突顯生成式與鑑別式模型本質差異。生成式路徑（如 VAE + 分類器）的一個核心優勢在於能透過無監督學習大量未標註資料建構潛在空間，對標註資料的依賴度較低。鑑別式路徑（如直接監督式 BERT）則高度依賴充足的標註資料來劃分決策邊界。因此，透過逐步減少標註資料比例（模擬低資源情境），觀察兩者效能衰退的幅度，最能公平比較它們在資料利用效率與泛化能力上的根本差異。(A)全量訓練可能無法看出低資源下的差異。(C)引入 GAN 增加了外部變數，並非比較兩種架構本身。(D)調參數量無法反映架構對資料依賴性的本質不同。",
        "ml_method": "生成式與鑑別式模型比較 (Generative vs Discriminative Models)",
        "ml_method_explanation": "在分類任務中，機器學習模型可分為鑑別式與生成式兩大類。鑑別式模型（如 BERT 分類器、SVM）的核心機制是直接學習給定輸入 X 條件下輸出標籤 Y 的機率分佈 P(Y|X)，也就是努力尋找資料間的決策邊界，這通常需要大量標註資料才能學好。生成式模型（如 VAE、樸素貝氏）則是學習特徵與標籤的聯合機率分佈 P(X, Y) 或底層資料生成機制 P(X)，能更深入理解資料的內在結構。因此，生成式架構在標註資料稀缺或需要進行半監督學習時，往往展現出更強的泛化能力與資料效率。",
        "examples": [
          "在醫療影像罕見疾病分類中，由於標註過的病變影像極度缺乏。研究團隊發現直接訓練 CNN (鑑別式) 效果很差；改用先以大量未標註健康影像訓練生成模型建構特徵空間，再用少量標註資料微調分類器，準確率顯著提升。",
          "語音助理在識別不同方言指令時，直接使用端到端的深度神經網路（鑑別式）需要龐大的方言標記語料；若採用生成式架構先無監督學習方言的聲學聲碼特徵，就能以極少量的標記語料快速適應新方言。"
        ],
        "comparison": "生成式模型（如 VAE 架構）擅長捕捉資料整體分佈，能在無監督狀態下利用大量未標註資料建構特徵空間，在標註資料稀缺的低資源情境下展現極佳的資料利用效率與泛化能力。相反地，鑑別式模型（如 BERT Classifier）直接學習決策邊界，高度依賴大量標註資料。因此，透過模擬逐步減少標註比例的實驗，最能精準比較兩者在資料依賴性上的本質差異，這是全量訓練或引入 GAN 擴充資料所無法突顯的。",
        "keywords": [
          "生成式模型 (Generative Models)",
          "鑑別式模型 (Discriminative Models)",
          "低資源情境 (Low-resource Setting)",
          "資料利用效率 (Data Efficiency)",
          "模型泛化能力 (Generalization Capability)"
        ],
        "extended_tech": [
          {
            "name": "半監督學習 (Semi-supervised Learning)",
            "desc": "結合少量標註資料與大量未標註資料進行訓練，最大化利用可用資訊，是生成式架構發揮優勢的重要場景。"
          },
          {
            "name": "主動學習 (Active Learning)",
            "desc": "模型主動挑選最具資訊量或最不確定的未標註樣本交由人工標記，大幅降低標註成本並提升鑑別模型效能。"
          },
          {
            "name": "零樣本學習 (Zero-shot Learning)",
            "desc": "模型無需任何特定任務的標註資料，僅依賴預訓練的廣泛語意知識（如 CLIP）即可對新類別進行預測。"
          }
        ],
        "terminology": [
          "聯合機率分佈 (Joint Probability Distribution)",
          "決策邊界 (Decision Boundary)",
          "特徵空間 (Feature Space)",
          "無監督學習 (Unsupervised Learning)",
          "F1 分數 (F1-score)"
        ]
      },
      {
        "id": 44,
        "question": "某電信公司希望建立一個模型來預測顧客是否即將流失，並進一步模擬不同促銷或服務策略下顧客的行為變化，以生成多樣化的虛擬樣本資料進行 A/B 測試與行銷策略評估。若要同時兼顧預測與資料生成的需求，最適合採用下列哪一種方法？",
        "options": {
          "A": "使用傳統隨機森林（Random Forest）；",
          "B": "使用邏輯迴歸（Logistic Regression）模型；",
          "C": "使用變分自編碼器（Variational Autoencoder, VAE）或生成對抗網路（Generative Adversarial Network, GAN）；",
          "D": "使用強化學習代理（Reinforcement Learning Agent）"
        },
        "answer": "C",
        "explanation": "(C)是唯一滿足「資料生成」需求的選項。VAE 和 GAN 屬於深度生成模型，其核心能力不僅在於捕捉特徵表示以利預測，更強大的是能夠從潛在空間中採樣，生成全新、逼真且多樣化的虛擬樣本資料，這正是題目中「模擬不同策略並生成多樣化虛擬樣本進行測試」所需的技術。(A)隨機森林與(B)邏輯迴歸屬於純鑑別式預測模型，無法無中生有生成具備資料分佈特性的虛擬樣本。(D)強化學習用於序列決策最佳化，並不具備生成高維度虛擬資料樣本的功能。",
        "ml_method": "深度生成模型 (Deep Generative Models, VAE/GAN)",
        "ml_method_explanation": "深度生成模型（如 VAE 和 GAN）的核心機制在於學習並逼近真實世界資料的機率分佈。以 VAE 為例，編碼器將真實數據壓縮到一個連續的機率分佈潛在空間中，解碼器則學會從該空間中還原數據。在訓練完成後，我們只需從這個潛在空間中隨機抽樣，或刻意操控潛在向量的某些維度（例如代表「促銷敏感度」的維度），再交由解碼器處理，就能創造出無數筆在現實中不存在，但統計特徵完全合理的「虛擬資料（Synthetic Data）」，供下游模擬測試使用。",
        "examples": [
          "自駕車公司為了測試演算法在極端氣候下的反應，利用 GAN 生成大量包含暴風雪、濃霧等現實中難以安全收集的虛擬街景影像，以此擴增訓練與測試資料庫，提升系統安全性。",
          "銀行為了符合嚴格的個資隱私法規，不允許資料科學家直接存取真實客戶交易紀錄。團隊利用 VAE 訓練並生成了一批統計特性與真實資料完全一致，但無法回推至任何真人的「虛擬客戶交易資料集」，供外部廠商開發防詐欺演算法。"
        ],
        "comparison": "深度生成模型（VAE/GAN）除了能捕捉特徵表示，更具備從潛在空間中採樣並生成全新、逼真且具備統計特性虛擬樣本的能力，是進行策略模擬與資料擴增的首選。相較之下，傳統隨機森林與邏輯迴歸屬於鑑別式預測模型，只能進行分類或回歸，無法「無中生有」生成合理的分佈資料；而強化學習代理主要用於優化序列決策過程，並不具備生成高維度靜態虛擬資料樣本的機制。",
        "keywords": [
          "深度生成模型 (Deep Generative Models)",
          "變分自編碼器 (VAE)",
          "生成對抗網路 (GAN)",
          "虛擬資料生成 (Synthetic Data Generation)",
          "鑑別式預測 (Discriminative Prediction)"
        ],
        "extended_tech": [
          {
            "name": "合成少數過採樣技術 (SMOTE)",
            "desc": "傳統的資料擴增方法，透過在少數類別樣本之間進行線性插值生成新樣本，以解決資料不平衡問題。"
          },
          {
            "name": "數位孿生 (Digital Twin)",
            "desc": "在虛擬環境中建立實體系統或業務流程的高擬真數位複本，常結合生成式 AI 進行大規模場景壓力測試。"
          },
          {
            "name": "差分隱私生成模型 (DP-GAN)",
            "desc": "結合差分隱私技術的生成網路，確保生成的虛擬資料在保有統計價值的同時，絕對無法回推外洩真實個資。"
          }
        ],
        "terminology": [
          "潛在空間 (Latent Space)",
          "虛擬樣本 (Virtual Samples)",
          "機率分佈 (Probability Distribution)",
          "資料擴增 (Data Augmentation)",
          "A/B 測試 (A/B Testing)"
        ]
      },
      {
        "id": 45,
        "question": "進行影像分類任務時，研究團隊嘗試利用主成分分析（Principal Component Analysis, PCA）將輸入特徵從 1024 維降至 100 維，並將降維後的資料輸入支持向量機（Support Vector Machine, SVM）模型進行訓練。關於此作法，下列哪一項描述最為合理？",
        "options": {
          "A": "PCA 保留的主成分必然能提升 SVM 的分類準確率；",
          "B": "使用原始高維資料通常更能保留資訊，因此 PCA 沒有實際意義；",
          "C": "PCA 可讓 SVM 自動適用於非線性（Nonlinear）資料集；",
          "D": "降維後可降低訓練時間並減少過擬合（Overfitting）風險"
        },
        "answer": "D",
        "explanation": "(D)是最合理的描述。PCA 降維能有效去除高維資料中的冗餘資訊與雜訊（即維度災難），將 1024 維壓縮到 100 維後，SVM 的計算負載大幅減輕，訓練時間縮短。同時，減少特徵數量限制了模型的複雜度，能有效降低過擬合風險。(A)PCA 目的是捕捉變異最大方向，並不保證這些方向最有利於「分類」，因此不一定提升準確率。(B)高維資料包含大量雜訊，PCA 極具減少計算與去噪意義。(C)PCA 是線性降維技術，無法賦予 SVM 處理非線性的能力（非線性應透過 Kernel Trick 解決）。",
        "ml_method": "主成分分析 (Principal Component Analysis, PCA)",
        "ml_method_explanation": "主成分分析（PCA）是機器學習中最廣泛使用的非監督式線性降維演算法。其核心機制是透過計算資料共變異數矩陣的特徵值與特徵向量，尋找一組新的正交座標軸（主成分）。這些軸依照資料變異程度大小排列。PCA 將原始高維數據投影到前 K 個包含最大變異量的主成分上，從而在盡可能保留資料原有結構資訊的前提下，捨棄了代表雜訊或冗餘的微小變異維度。這不僅能大幅節省後續模型的計算資源，還能有效緩解高維度帶來的過擬合問題。",
        "examples": [
          "在基因體學研究中，研究人員需要分析包含數萬個基因表現量的微陣列數據。透過 PCA 降維，他們能將數萬維度壓縮至 2 到 3 維的視覺化散佈圖，直觀地觀察不同癌症細胞株在基因表現上的群聚現象。",
          "人臉辨識系統的早期實作（如 Eigenfaces）中，系統將每張由數萬像素組成的人臉影像，透過 PCA 轉換為數十個「特徵臉」的線性組合權重。這大幅降低了資料儲存空間，並使得後續比對搜尋的速度達到了即時性要求。"
        ],
        "comparison": "PCA 降維能有效捨棄高維資料中的冗餘資訊與雜訊，降低維度災難，進而大幅減輕 SVM 模型的計算負載、縮短訓練時間並降低過擬合風險，在基因體學與影像辨識中極具實務意義。然而，PCA 是非監督式的變異最大化投影，並不保證保留下來的主成分最有利於「分類」準確率提升。此外，保留原始高維資料往往帶來過多雜訊；且 PCA 本身屬線性轉換，無法賦予 SVM 處理非線性資料的能力。",
        "keywords": [
          "主成分分析 (Principal Component Analysis, PCA)",
          "支持向量機 (SVM)",
          "降維 (Dimensionality Reduction)",
          "維度災難 (Curse of Dimensionality)",
          "過擬合 (Overfitting)"
        ],
        "extended_tech": [
          {
            "name": "t-SNE (t-分布隨機鄰居嵌入)",
            "desc": "一種強大的非線性降維技術，特別擅長將高維資料映射到 2D 或 3D 空間進行分群視覺化。"
          },
          {
            "name": "線性鑑別分析 (LDA)",
            "desc": "監督式降維方法，尋找能最大化類別間距離並最小化類別內變異的投影軸，通常比 PCA 更利於後續分類。"
          },
          {
            "name": "核支持向量機 (Kernel SVM)",
            "desc": "透過核技巧（Kernel Trick）將資料隱式映射至更高維空間，使 SVM 能夠有效處理複雜的非線性決策邊界。"
          }
        ],
        "terminology": [
          "特徵向量 (Eigenvector)",
          "共變異數矩陣 (Covariance Matrix)",
          "冗餘資訊 (Redundant Information)",
          "非線性資料 (Nonlinear Data)",
          "計算負載 (Computational Load)"
        ]
      },
      {
        "id": 46,
        "question": "某企業的 AI 模型已部署於線上服務環境中，用於即時預測顧客流失機率。近期團隊注意到模型預測準確率逐漸下降，但系統運作正常且未出現錯誤訊息。經分析發現，近期輸入資料的分布與模型訓練資料相比出現顯著偏移。若要在 MLOps 流程中主動偵測並預警此類問題，最應採用下列哪項措施？",
        "options": {
          "A": "建立即時的資料漂移（Data Drift）與概念漂移（Concept Drift）監測機制；",
          "B": "將模型轉換為量化版本以降低延遲；",
          "C": "增加模型超參數調整次數以強化適應性；",
          "D": "使用固定隨機種子（Random Seed）確保訓練穩定"
        },
        "answer": "A",
        "explanation": "(A)最切中問題核心。題目描述的現象「模型準確率下降，系統無錯誤，輸入資料分佈出現偏移」正是典型的「資料漂移（Data Drift）」問題。在成熟的 MLOps 實踐中，必須建立自動化的監測機制來持續比對線上推論資料與訓練資料的分佈差異。一旦偵測到顯著漂移，系統便發出預警通知工程師介入或自動觸發重訓。(B)模型量化是為了解決延遲與體積問題，無關準確率下降。(C)增加超參數調整是訓練階段的工作，無法主動「偵測」上線後的偏移。(D)隨機種子僅影響訓練重現性，對線上模型衰退毫無幫助。",
        "ml_method": "MLOps 與資料/概念漂移監控 (Data/Concept Drift Monitoring)",
        "ml_method_explanation": "在 MLOps 領域中，模型部署上線並非終點，而是持續營運的開始。現實世界的資料是動態變化的，這會導致兩種衰退：「資料漂移（Data Drift）」，即模型輸入特徵的分佈發生改變（如使用者人口結構改變）；以及「概念漂移（Concept Drift）」，即輸入與目標變數之間的關係改變（如通貨膨脹導致同樣收入的購買力下降）。漂移監控機制會透過統計檢定（如 KS 檢定、PSI 指標）持續比較線上資料流與歷史基準的差異，成為確保 AI 模型生命週期健康的最關鍵防線。",
        "examples": [
          "電子商務平台的商品推薦模型在 COVID-19 疫情爆發初期失效。因為消費者忽然大量搜尋口罩與居家辦公用品，這與訓練模型時的常態消費數據產生嚴重「資料漂移」。具備監控機制的 MLOps 系統第一時間發出警報並自動觸發模型重訓以適應新常態。",
          "銀行信貸審核 AI 模型中，若央行突然大幅調升利率，導致高薪族群也開始出現違約狀況，此時特徵與標籤的關係發生改變（概念漂移）。監控系統發現模型預測的違約率與實際回收數據脫鉤，即時暫停模型自動放款並轉交人工審核。"
        ],
        "comparison": "線上模型預測準確率下降且無系統錯誤，通常是「資料漂移（Data Drift）」所致。建立即時的資料與概念漂移監測機制，能透過統計檢定持續比對線上資料與訓練集的分佈差異，是 MLOps 確保模型健康的最關鍵防線。相較之下，模型量化僅為解決系統延遲；增加超參數調整是開發階段的優化手段；固定隨機種子只影響訓練重現性。這三者皆無法主動偵測並預警線上資料環境的分佈變化。",
        "keywords": [
          "機器學習營運 (MLOps)",
          "資料漂移 (Data Drift)",
          "概念漂移 (Concept Drift)",
          "分佈偏移 (Distribution Shift)",
          "模型監控 (Model Monitoring)"
        ],
        "extended_tech": [
          {
            "name": "自動化重訓管線 (Automated Retraining Pipeline)",
            "desc": "當漂移監控系統觸發警報時，自動收集最新資料、標註並啟動模型重新訓練與驗證的端到端 MLOps 流程。"
          },
          {
            "name": "A/B 測試與金絲雀發布 (Canary Release)",
            "desc": "逐步將流量導向更新後的模型，透過對比舊模型的業務指標，確保新模型適應新資料分佈且無潛在風險。"
          },
          {
            "name": "特徵庫 (Feature Store)",
            "desc": "集中管理、運算與提供特徵資料的基礎設施，確保模型訓練與線上推論時所使用的特徵邏輯與分佈保持高度一致。"
          }
        ],
        "terminology": [
          "統計檢定 (Statistical Test)",
          "預警機制 (Alert Mechanism)",
          "生命週期 (Lifecycle)",
          "量化版本 (Quantized Version)",
          "重現性 (Reproducibility)"
        ]
      },
      {
        "id": 47,
        "question": "某金融科技公司導入多任務學習架構，讓單一 Transformer 模型同時執行 OCR（Optical Character Recognition）後的文檔分類以及命名實體辨識（Named Entity Recognition, NER）任務，以協助自動歸檔與抽取關鍵金融資訊。在部署初期，團隊發現當模型的 NER 準確率（Accuracy）提升時，文檔分類準確率反而下降。若模型架構正確且資料品質良好，下列哪一項最可能是造成此現象的原因？",
        "options": {
          "A": "模型架構無法同時支援文字分類與序列標註任務（Sequence Labeling）；",
          "B": "文檔分類任務不需要語意化表徵（Contextualized Representation）；",
          "C": "損失函數（Loss Function）未進行權重平衡，導致任務間競爭；",
          "D": "所使用的 BERT 模型無法支援多任務輸出頭（Multi-Head Outputs）"
        },
        "answer": "C",
        "explanation": "(C)是多任務學習中極為常見的核心問題。在多任務學習（Multi-Task Learning）中，模型同時優化多個目標。如果不同任務的損失函數大小或梯度量級差異過大，且未給予適當的權重平衡（Loss Weighting），模型在梯度下降時就會被某個主導任務（如 NER）牽著走，導致犧牲另一個任務（分類）的表現，這稱為「負遷移（Negative Transfer）」或「任務競爭」。(A)和(D)是錯誤的，Transformer/BERT 架構非常適合且普遍用於掛載多個輸出頭進行多任務學習。(B)文檔分類絕對需要語意化表徵才能精準判斷文本類型。",
        "ml_method": "多任務學習與損失平衡 (Multi-Task Learning & Loss Balancing)",
        "ml_method_explanation": "多任務學習（MTL）的核心機制是讓一個神經網路模型共享底層特徵萃取層（如 Transformer 的編碼器），但在頂層分出多個不同的任務輸出頭。這種設計能讓模型學習到更具泛化性的共享特徵，並節省推論運算資源。然而，優化 MTL 模型的總損失是各任務損失的加權總和（Total Loss = w1*Loss1 + w2*Loss2...）。如果權重設定不當，梯度較大或學習較快的任務會主導整個網路權重的更新方向，導致其他任務的效能退化。為解決此問題，常引入動態權重調整演算法（如基於不確定性的權重分配）來平衡各任務的學習進度。",
        "examples": [
          "自動駕駛汽車的視覺系統使用單一卷積神經網路同時執行「車輛偵測」與「車道線分割」兩個任務。若未對兩者的損失函數進行平衡，模型可能會因為車輛偵測的損失值較大，而將所有運算能力投入偵測，導致車道線識別變得模糊不清。",
          "社群媒體內容審查 AI 必須同時判斷一則貼文的「仇恨言論程度」與「是否包含暴力」。透過多任務學習與自適應損失權重調整，模型能平衡兩者的學習，確保在精準攔截暴力內容的同時，也不會錯放隱晦的仇恨言論。"
        ],
        "comparison": "在多任務學習中，若各任務的損失函數未進行適當的權重平衡，梯度較大或學習較快的任務（如 NER）會主導整個神經網路的權重更新，導致其他任務（如分類）效能退化，這被稱為負遷移或任務競爭。這是多任務優化的核心難題。相反地，Transformer 或 BERT 架構非常擅長支援多任務輸出頭，且文檔分類絕對需要語意化表徵才能精準運作。將問題歸咎於架構限制或認為分類不需要語意表徵皆屬錯誤觀念。",
        "keywords": [
          "多任務學習 (Multi-Task Learning, MTL)",
          "損失平衡 (Loss Balancing)",
          "負遷移 (Negative Transfer)",
          "任務競爭 (Task Competition)",
          "Transformer 架構"
        ],
        "extended_tech": [
          {
            "name": "不確定性權重分配 (Uncertainty-based Weighting)",
            "desc": "在多任務學習中，根據各任務模型預測的不確定性動態調整損失權重，使模型自動平衡學習進度。"
          },
          {
            "name": "梯度投射 (Gradient Projection)",
            "desc": "當不同任務的梯度方向發生衝突時，將梯度投影到正交方向，避免任務之間互相干擾與抵銷。"
          },
          {
            "name": "遷移學習 (Transfer Learning)",
            "desc": "將在大型資料集上預訓練的模型權重作為起點，微調應用於特定單一下游任務，是 MTL 的重要基礎概念。"
          }
        ],
        "terminology": [
          "語意化表徵 (Contextualized Representation)",
          "輸出頭 (Output Head)",
          "損失函數 (Loss Function)",
          "梯度下降 (Gradient Descent)",
          "聯合優化 (Joint Optimization)"
        ]
      },
      {
        "id": 48,
        "question": "某數據工程師使用 DBSCAN 演算法對一份數百萬筆的高維顧客資料進行聚類分析，但發現程式執行速度極慢，甚至出現記憶體不足的情況。若要在不改變演算法核心邏輯的前提下，最有效提升其運算效率的作法為何？",
        "options": {
          "A": "改用以平均連結（Average Linkage）為基礎的階層式群集法（Hierarchical Clustering）；",
          "B": "採用高效率的距離索引結構（Distance Index Structure），例如 KD-Tree 或 Ball Tree；",
          "C": "將 ε（Epsilon）參數調得極小，以減少鄰近點的數量；",
          "D": "在資料前處理時增加標準化後的特徵維度數"
        },
        "answer": "B",
        "explanation": "(B)是正確答案。DBSCAN 演算法的效能瓶頸在於需要頻繁地計算每個資料點與其他所有點之間的距離，以尋找 ε 半徑內的鄰居，時間複雜度高達 O(n²)。引入 KD-Tree 或 Ball Tree 空間索引結構，能將鄰居搜尋的時間複雜度大幅降至 O(n log n)，是加速 DBSCAN 標準且最有效的實務作法。(A)改變了演算法，違反題目「不改變核心邏輯」的前提，且階層式群集的複雜度通常更高。(C)調小 ε 會嚴重改變分群結果，導致多數點變成雜訊，失去了分析意義。(D)增加維度會加劇「維度災難」，讓距離計算更慢更耗記憶體。",
        "ml_method": "DBSCAN 與空間索引優化 (KD-Tree/Ball Tree)",
        "ml_method_explanation": "DBSCAN 是一種基於密度的分群演算法，其優勢在於能發現任意形狀的群集且自動過濾雜訊，無需預先指定群數 K。其核心機制是針對每一筆資料查詢其半徑 ε 內的鄰居數量。面對海量數據，暴力計算所有點對點距離極為耗時。為突破此瓶頸，演算法底層常整合空間樹狀索引結構（如 KD-Tree 切分歐式空間，或 Ball Tree 應對高維非歐式空間）。這些資料結構透過分層劃分空間，在查詢鄰居時能快速剪枝（排除絕對不可能在半徑內的區域），極大地減少了不必要的距離計算，實現效能飛躍。",
        "examples": [
          "在地圖導航軟體中，系統需要從數百萬個 GPS 座標點中，利用 DBSCAN 快速找出用戶頻繁停留的「興趣熱區」。透過底層建立 Ball Tree 索引，系統將分群運算時間從數小時壓縮到幾分鐘內完成。",
          "天文學家分析射電望遠鏡接收到的海量星系位置數據時，使用配備 KD-Tree 的 DBSCAN 演算法，能高效地在三維空間中聚類出星系團結構，而不會因為資料量達到千萬級而導致超級電腦記憶體溢出。"
        ],
        "comparison": "DBSCAN 演算法面臨海量數據時的效能瓶頸在於頻繁的距離計算。引入 KD-Tree 或 Ball Tree 等空間索引結構，能大幅減少不必要的距離比對，將時間複雜度降至 O(n log n)，是加速的最有效且標準作法，完全不改變核心邏輯。相較之下，改用階層式群集會改變演算法本質且通常更慢；調小半徑 ε 會破壞分群結果的商業意義；而增加特徵維度更會引發維度災難，導致運算與記憶體負擔雪上加霜。",
        "keywords": [
          "DBSCAN",
          "空間索引結構 (Spatial Index Structure)",
          "KD-Tree",
          "Ball Tree",
          "時間複雜度 (Time Complexity)"
        ],
        "extended_tech": [
          {
            "name": "HDBSCAN",
            "desc": "DBSCAN 的進化版，採用階層式密度分群，能自動適應資料中不同密度的群集，無需手動微調半徑參數 ε。"
          },
          {
            "name": "局部敏感雜湊 (Locality-Sensitive Hashing, LSH)",
            "desc": "透過雜湊函數將相似的高維資料點映射到同一個桶中，用於極大規模資料集中的近似最近鄰搜尋加速。"
          },
          {
            "name": "K-Means++",
            "desc": "優化初始群集中心選擇的 K-Means 演算法，加速收斂並避免落入局部最佳解，適用於球狀分群場景。"
          }
        ],
        "terminology": [
          "密度分群 (Density-based Clustering)",
          "維度災難 (Curse of Dimensionality)",
          "最近鄰搜尋 (Nearest Neighbor Search)",
          "剪枝 (Pruning)",
          "歐式空間 (Euclidean Space)"
        ]
      },
      {
        "id": 49,
        "question": "某電商平台導入 AI 情感分析模型，用以自動偵測顧客評論中的負面情緒並觸發客服機制。然而，上線後發現模型在面對不同語言或族群書寫風格的評論時表現不一致，例如部分語氣強烈的正面評論被誤判為負面，而禮貌但含批評意圖的評論卻被判為中性。若從技術與資料治理的角度分析，下列哪一項描述不正確？",
        "options": {
          "A": "模型未啟用詞嵌入正規化（Embedding Normalization）可能造成語意距離不穩定，導致預測誤差；",
          "B": "訓練語料若偏向特定文化或語氣特徵，可能使模型產生內隱偏誤（Implicit Bias）；",
          "C": "模型若訓練資料來源不平衡，容易導致對不同語言或族群風格的情緒判斷不準確；",
          "D": "Transformer 架構能捕捉上下文語意，但若訓練資料偏差仍存在，模型仍可能學習到偏誤判斷"
        },
        "answer": "A",
        "explanation": "(A)是不正確的描述（即本題應選答案）。詞嵌入正規化（Normalization）是將向量長度縮放為 1 的數學操作，主要用於餘弦相似度計算。它雖然能穩定運算，但並非解決模型對不同族群或語氣風格「理解錯誤」或「帶有偏見」的根本原因。題目描述的現象（對強烈正面誤判、對禮貌批評誤判）明顯源自於訓練資料的代表性不足與文化偏誤，即(B)(C)所描述的內隱偏誤與資料來源不平衡。(D)的敘述也完全正確，強大的架構（如 Transformer）無法免疫於有毒或偏頗的訓練資料（Garbage in, garbage out）。",
        "ml_method": "AI 偏誤與資料代表性 (AI Bias and Data Representation)",
        "ml_method_explanation": "機器學習模型是訓練資料的倒影。當模型在特定群體或特定應用情境下表現出系統性的效能低落或不公平判斷時，通常源於「資料偏誤（Data Bias）」。核心機制在於：如果訓練集主要由某特定人口統計特徵（如西方文化、特定性別、溫和語氣）的樣本構成，模型優化損失函數時，會將這些主流特徵視為普適規律。當遇到分佈之外的少數族群特徵（如強烈情感的地區方言）時，模型缺乏足夠資訊去正確映射決策邊界，從而產生內隱偏誤與歧視性的預測結果。",
        "examples": [
          "知名企業曾開發 AI 履歷篩選系統，但因歷史錄取資料多為男性工程師，模型錯誤地學習到「女性相關社團」是扣分特徵。這種因訓練資料偏差導致的嚴重性別歧視，最終迫使該專案被終止。",
          "語音辨識系統在早期常面臨口音偏誤問題。由於訓練語料高度集中於標準美式英語，當帶有濃厚非裔美國人白話英語 (AAVE) 或蘇格蘭口音的用戶使用時，辨識錯誤率急遽飆升，引發公平性爭議。"
        ],
        "comparison": "AI 模型對特定族群或語氣產生誤判，其根本原因通常源於訓練資料的代表性不足或內隱偏誤（如語料偏向主流文化）。即使採用強大的 Transformer 架構，依然會學習到這些資料偏差（Garbage in, garbage out）。相反地，詞嵌入正規化只是穩定餘弦相似度計算的數學操作，無法解決模型對語意文化「理解錯誤」或「帶有偏見」的本質問題。因此，將誤判歸咎於未啟用詞嵌入正規化是完全不正確的技術認知。",
        "keywords": [
          "AI 偏誤 (AI Bias)",
          "資料代表性 (Data Representation)",
          "內隱偏誤 (Implicit Bias)",
          "資料不平衡 (Data Imbalance)",
          "詞嵌入正規化 (Embedding Normalization)"
        ],
        "extended_tech": [
          {
            "name": "公平性感知機器學習 (Fairness-aware Machine Learning)",
            "desc": "在模型訓練過程中引入公平性約束或正則化項，強制演算法降低對性別、種族等敏感屬性的依賴與歧視。"
          },
          {
            "name": "重抽樣與資料擴增 (Resampling and Data Augmentation)",
            "desc": "透過過採樣少數族群資料或生成對抗樣本，主動平衡訓練集的分佈，從資料源頭緩解模型偏誤。"
          },
          {
            "name": "可解釋性 AI (Explainable AI, XAI)",
            "desc": "透過 SHAP 或 LIME 等技術剖析模型預測依據，協助開發者揪出隱藏在黑盒子中的不合理偏見決策邏輯。"
          }
        ],
        "terminology": [
          "資料治理 (Data Governance)",
          "上下文語意 (Contextual Semantics)",
          "餘弦相似度 (Cosine Similarity)",
          "標籤分佈 (Label Distribution)",
          "決策邊界 (Decision Boundary)"
        ]
      },
      {
        "id": 50,
        "question": "某設計師使用公司內部建置的生成式 AI 工具製作行銷素材，並輸入提示語（Prompt）：「請生成一張模特兒手持品牌飲料、背景為海邊夕陽的照片」。系統能正確生成主要主題與場景，但輸出的圖像中，品牌標誌顏色常有誤差，或人物手部姿勢顯得不自然。若從多模態生成模型的技術機制分析，此現象最可能是下列哪一項原因所造成？",
        "options": {
          "A": "擴散式生成模型的去雜訊過程出現隨機梯度漂移，導致影像像素錯誤；",
          "B": "提示語過長造成 Transformer 的位置編碼超出上下文限制，導致生成混亂；",
          "C": "CLIP 模型中的文字編碼器與影像編碼器在語意嵌入空間未充分對齊，導致跨模態理解偏差；",
          "D": "模型未採用對比學習（Contrastive Learning）損失函數，無法建立多模態語意關聯"
        },
        "answer": "C",
        "explanation": "(C)是最可能的原因。目前的文字生圖模型（如 Stable Diffusion）高度依賴 CLIP 等多模態模型將文字 Prompt 編碼為潛在特徵以引導生成。然而，如果 CLIP 在訓練時對細節屬性（如特定的顏色綁定、複雜的人體空間結構如手部關節）的文字與影像特徵沒有在潛在空間中「充分對齊」，生成模型接收到的引導訊號就會模糊或錯誤，導致屬性錯亂（標誌顏色錯）或結構崩壞（手部不自然）。(A)名詞捏造，去雜訊過程不叫隨機梯度漂移。(B)該句 Prompt 很短，不可能超出 Context 限制。(D)當代文生圖模型底層必依賴某種對比學習建立關聯，並非完全沒有採用。",
        "ml_method": "多模態對齊與生成缺陷 (Cross-modal Alignment & Generation Artifacts)",
        "ml_method_explanation": "在「文字到影像 (Text-to-Image)」生成系統中，核心機制是利用多模態對齊模型（如 CLIP）作為橋樑。文字編碼器將用戶的指令轉為特徵向量，透過交叉注意力機制 (Cross-Attention) 注入到影像生成神經網路中，引導像素的生成。然而，這種對齊機制的弱點在於「屬性綁定（Attribute Binding）」與「空間結構組合」。因為文字編碼通常將句子視為一個整體語意，難以精確映射「紅色對應到左邊的杯子，而非右邊的衣服」，同時也缺乏物理世界立體關節（如人類手部）的嚴格拓樸約束，導致經常生成顏色錯位或多指變形的瑕疵影像。",
        "examples": [
          "廣告文案要求生成「一隻戴著藍色帽子並穿著紅色鞋子的貓」。由於模型在跨模態特徵對齊時發生屬性糾纏（Attribute Entanglement），經常生成「紅色帽子與藍色鞋子的貓」，無法正確綁定顏色與物體。",
          "遊戲開發者使用 AI 生成角色揮劍的動作設定圖。由於生成模型缺乏人體骨骼動力學的三維約束機制，且文字編碼難以精準描述手部關節的遮擋與旋轉，生成的角色手腕往往呈現不符合人體工學的扭曲狀態。"
        ],
        "comparison": "當代文字生圖模型（如 Stable Diffusion）高度依賴 CLIP 進行文字與影像的跨模態對齊。若 CLIP 在潛在空間中對細節屬性（如顏色綁定）或複雜空間結構（如人體關節）未充分對齊，生成模型就會接收到模糊的引導訊號，導致屬性錯亂或結構崩壞（如手部變形）。這並非隨機梯度漂移或提示語過長超出上下文限制所致，且這些模型底層必定採用了某種對比學習機制，只是在微觀結構對齊上存在技術瓶頸。",
        "keywords": [
          "跨模態對齊 (Cross-modal Alignment)",
          "屬性綁定 (Attribute Binding)",
          "生成缺陷 (Generation Artifacts)",
          "CLIP 模型",
          "多模態生成模型 (Multimodal Generative Models)"
        ],
        "extended_tech": [
          {
            "name": "ControlNet",
            "desc": "為擴散模型提供強大的空間結構控制能力，透過輸入骨架圖或深度圖，精確解決人物肢體變形與姿態不自然的問題。"
          },
          {
            "name": "GLIGEN",
            "desc": "透過在擴散模型中引入接地（Grounding）指令，允許使用者以邊界框精確指定特定物件（如紅色杯子）的生成位置與屬性。"
          },
          {
            "name": "人類偏好對齊 (RLHF/DPO)",
            "desc": "收集人類對生成影像品質與邏輯合理性的偏好反饋，透過強化學習微調生成模型，減少結構崩壞的發生機率。"
          }
        ],
        "terminology": [
          "潛在空間 (Latent Space)",
          "交叉注意力機制 (Cross-Attention)",
          "屬性糾纏 (Attribute Entanglement)",
          "空間拓樸約束 (Spatial Topological Constraint)",
          "梯度漂移 (Gradient Drift)"
        ]
      }
    ]
  },
  "114_2_3": {
    "title": "114 年第二次 - 第三科：機器學習技術與應用",
    "questions": [
      {
        "id": 1,
        "question": "某零售企業建立一個銷售預測模型，希望評估該模型在不同月份的新資料上，是否仍能維持穩定的預測表現。資料科學團隊計畫利用統計方法檢驗模型對未觀察資料的適應能力與泛化效果。下列哪一種方法最適合用於此目的？",
        "options": {
          "A": "F 檢定（F-test）",
          "B": "交叉驗證（Cross-Validation）",
          "C": "配對樣本 t 檢定（Paired-sample t-test）",
          "D": "卡方檢定（Chi-square Test）"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。交叉驗證（Cross-Validation）是機器學習中評估模型泛化能力的標準方法，能透過資料分割驗證模型在未知資料上的表現。(A)F檢定主要用於比較變異數或多個組別的平均數差異；(C)配對樣本 t 檢定適用於比較同一組樣本在不同條件下的平均值差異；(D)卡方檢定則用於分析類別變數之間的關聯性。三者皆無法直接評估預測模型的適應能力。",
        "ml_method": "交叉驗證 (Cross-Validation)",
        "ml_method_explanation": "交叉驗證是一種用於評估機器學習模型效能與泛化能力的統計方法。其基本原理是將原始資料集隨機切割成數個互不重疊的子集（如 K-Fold 分為 K 份），在訓練過程中，每次輪流保留一個子集作為測試集，其餘子集作為訓練集。這個過程會重複進行 K 次，最後將所有的評估結果平均。此機制能有效降低模型評估結果因資料分割方式而產生的隨機性與偏差，避免過度擬合。",
        "examples": [
          "在開發醫療影像輔助診斷系統時，為了確保模型對於不同醫院、不同機器拍攝的 X 光片都能保持穩定的判讀準確率，工程師會使用 K-Fold 交叉驗證來確保模型不是只記住了特定病患的影像特徵。",
          "金融機構在建立信用卡盜刷偵測系統時，為了驗證模型在未來能否準確抓出新型態的詐騙手法，會透過時間序列交叉驗證，將過去的交易紀錄依時間切分，反覆訓練與測試，確保系統的穩健性。"
        ],
        "comparison": "交叉驗證（Cross-Validation）主要用於評估機器學習模型的泛化能力，確保模型不會過度擬合訓練資料。相比之下，F檢定和t檢定是傳統統計學中用於比較群組平均數或變異數差異的方法，主要應用於實驗設計和假設檢定。卡方檢定則常用於市場調查或流行病學中分析類別變數的關聯性。在機器學習領域，交叉驗證是模型評估與超參數調校的核心標準，確保在多變的業務場景下能保持穩定。",
        "keywords": [
          "交叉驗證 (Cross-Validation)",
          "泛化能力 (Generalization)",
          "過度擬合 (Overfitting)",
          "訓練集 (Training Set)",
          "測試集 (Test Set)"
        ],
        "extended_tech": [
          {
            "name": "K-折交叉驗證 (K-Fold Cross-Validation)",
            "desc": "將資料集平均切分為 K 份，輪流將其中一份作為測試集，其餘作為訓練集，適合資料量中等的機器學習任務，能提供比單次切割更穩定的效能評估。"
          },
          {
            "name": "留一法交叉驗證 (Leave-One-Out Cross-Validation, LOOCV)",
            "desc": "每次只留下一個樣本作為測試集，其餘所有樣本皆為訓練集。此方法計算成本極高，但適合樣本數非常稀少的情境，例如罕見疾病診斷或高階醫療研究。"
          },
          {
            "name": "分層交叉驗證 (Stratified Cross-Validation)",
            "desc": "在切分資料時，確保每個子集中的類別比例與原始資料集一致。這在處理不平衡資料集（如信用卡盜刷、罕見疾病）時非常關鍵，能避免某個子集完全沒有少數類別的樣本。"
          }
        ],
        "terminology": [
          "Validation Set",
          "Generalization Error",
          "Holdout Method",
          "Overfitting",
          "Bias-Variance Tradeoff"
        ]
      },
      {
        "id": 2,
        "question": "在建立迴歸或分類模型時，若希望避免模型過度擬合（Overfitting），可透過加入正則化項以限制模型的複雜度。其中，L1 正則化（Lasso）的主要效果為何？",
        "options": {
          "A": "增加模型參數的數量，以提升表現靈活度",
          "B": "強化梯度穩定性，避免參數更新過度震盪",
          "C": "產生稀疏模型（Sparse Model），使部分參數權重收斂為零",
          "D": "提高學習率（Learning Rate），加速模型收斂速度"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。L1 正則化（Lasso Regression）透過在損失函數中加入權重絕對值之和作為懲罰項，這會迫使模型中較不重要的特徵權重精確地收斂為零，進而達到特徵選擇的效果，產生稀疏模型。(A)正則化是為了減少模型複雜度而非增加參數；(B)強化梯度穩定性通常與優化器或批次正規化有關；(D)提高學習率是優化演算法的超參數設定，與正則化無關。",
        "ml_method": "L1 正則化 (Lasso Regularization)",
        "ml_method_explanation": "L1 正則化是一種在機器學習模型損失函數中加入懲罰項的技術，其懲罰項為所有模型權重絕對值的總和乘上一個常數（懲罰係數）。因為 L1 正則化的函數圖形在原點具有不可微的尖角特性，在進行梯度下降最佳化時，會傾向於將對預測結果影響力較小的特徵權重直接壓縮至零。這種機制不僅能有效防止模型過度擬合，還具備自動進行特徵選擇（Feature Selection）的能力。",
        "examples": [
          "在基因體學研究中，科學家可能擁有數萬個基因特徵，但只有極少數與特定疾病相關。使用 L1 正則化的模型能自動將無關基因的權重歸零，幫助科學家快速鎖定關鍵的致病基因。",
          "房地產估價平台在預測房價時，可能會收集上百種變數（如格局、採光、鄰近設施等）。為了建立一個容易解釋且運算快速的模型，開發團隊會使用 Lasso 迴歸，自動剔除不具影響力的特徵。"
        ],
        "comparison": "L1 正則化 (Lasso) 與 L2 正則化 (Ridge) 同為防止過擬合的技術。L1 的最大特色在於能產生稀疏矩陣，將不重要的特徵權重降為零，因此自帶特徵選擇功能，非常適合特徵維度極高且多數特徵無關的場景（如基因資料分析或文本分類）。相比之下，L2 正則化傾向於均勻地縮小所有權重但不歸零，適合所有特徵都有一定貢獻度的連續預測問題，能穩定模型表現而不會完全剔除特定變數。",
        "keywords": [
          "正則化 (Regularization)",
          "Lasso 迴歸 (Lasso Regression)",
          "稀疏模型 (Sparse Model)",
          "特徵選擇 (Feature Selection)",
          "過度擬合 (Overfitting)"
        ],
        "extended_tech": [
          {
            "name": "彈性網正則化 (Elastic Net Regularization)",
            "desc": "結合了 L1 與 L2 正則化的優點。當特徵之間存在高度相關性時，Lasso 可能會隨機選擇其中一個而捨棄其他，Elastic Net 則能更穩定地選出一組相關特徵，適合高度共線性的財務與醫療資料。"
          },
          {
            "name": "L2 正則化 (Ridge Regression)",
            "desc": "在損失函數中加入權重平方和作為懲罰項。它不會產生稀疏模型，而是將權重均勻縮小，非常適合處理存在多重共線性但每個特徵都具有一定預測價值的商業預測場景。"
          },
          {
            "name": "Dropout (神經網路正則化)",
            "desc": "在深度神經網路訓練過程中，隨機讓部分神經元失去作用。這能迫使網路學習更強健的特徵表示，而不依賴特定的神經元路徑，是現代深度學習最常見的防過擬合技術。"
          }
        ],
        "terminology": [
          "Penalty Term",
          "Sparsity",
          "Overfitting",
          "Cost Function",
          "Feature Weight"
        ]
      },
      {
        "id": 3,
        "question": "在訓練非線性模型時，若目標函數為非凸函數（Non-convex Function），演算法在參數更新過程中可能出現多個極值點，導致最佳化結果不穩定。請問此時最可能發生下列哪一種情況？",
        "options": {
          "A": "梯度消失",
          "B": "資料過少",
          "C": "局部最優解",
          "D": "過擬合"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。當目標函數為非凸函數時，其函數表面會呈現高低起伏的地形，擁有多個波谷。基於梯度的最佳化演算法容易在參數更新時陷入其中一個較淺的波谷，即「局部最優解（Local Optima）」，而無法找到真正的最低點（全局最優解）。(A)梯度消失通常發生在深度神經網路中，因反向傳播的連乘效應導致梯度趨近於零；(B)與(D)則是資料量與模型泛化能力的問題。",
        "ml_method": "局部最優解 (Local Optima)",
        "ml_method_explanation": "在最佳化理論中，局部最優解指的是在目標函數的某個相鄰區域內，該解的表現優於周圍所有可能的解，但並非整個定義域內的最佳解（全局最優解）。在訓練深度神經網路等複雜的非線性模型時，損失函數通常是高度非凸的。當梯度下降法沿著斜率最陡的方向尋找最低點時，若遇到局部最優解，梯度會變為零，導致模型參數停止更新，無法達到最佳的模型效能。",
        "examples": [
          "物流公司在規劃車隊的最佳配送路線時，如果演算法只考慮當下最近的送貨點（貪婪搜尋），可能會陷入局部最優解，導致整體配送時間拉長，而非找到全局最短的總路徑。",
          "在訓練自然語言處理的大型語言模型時，若優化器設計不當，模型參數可能會卡在某個次佳的局部最優解，導致模型雖然能產出通順的語句，但在邏輯推理任務上表現不佳。"
        ],
        "comparison": "在模型優化過程中，「局部最優解」與「梯度消失」是兩種常見但截然不同的困境。局部最優解是因為目標函數的地形起伏（非凸性），使得演算法卡在一個「次佳的低谷」，這在路徑規劃、排程優化等非線性問題中最常見。而梯度消失則是因為深度神經網路層數過多，反向傳播時誤差遞減趨近於零，導致淺層網路無法學習。兩者均會導致模型停止進步，但解決方案完全不同（前者需調整動量或學習率，後者需更換激勵函數或殘差設計）。",
        "keywords": [
          "局部最優解 (Local Optima)",
          "非凸函數 (Non-convex Function)",
          "梯度下降 (Gradient Descent)",
          "全局最優解 (Global Optima)",
          "優化演算法 (Optimization Algorithm)"
        ],
        "extended_tech": [
          {
            "name": "動量法 (Momentum)",
            "desc": "在梯度下降中加入物理學的動量概念，讓參數更新時能累積先前的動能。這有助於優化器「衝過」較淺的局部最優解，進而更有機會探索到全局最佳解，廣泛應用於深度學習訓練中。"
          },
          {
            "name": "模擬退火演算法 (Simulated Annealing)",
            "desc": "一種啟發式搜尋演算法，模擬金屬冶煉的退火過程。在搜尋初期允許接受較差的解以跳脫局部最優解，隨著時間推移降低接受機率，常用於物流排程、電路設計等複雜組合最佳化問題。"
          },
          {
            "name": "遺傳演算法 (Genetic Algorithm, GA)",
            "desc": "模擬生物進化過程（選擇、交配、突變）的全域最佳化方法。透過突變機制，能有效避免群體陷入單一局部最優解，常應用於特徵選擇與自動化機器學習架構搜尋中。"
          }
        ],
        "terminology": [
          "Global Minimum",
          "Saddle Point",
          "Gradient Descent",
          "Convex Optimization",
          "Loss Landscape"
        ]
      },
      {
        "id": 4,
        "question": "在執行 DBSCAN（Density-Based Spatial Clustering of Applications with Noise）群集分析時，若某資料點鄰域內的樣本數不足以形成核心點（Core Point），且該點未被任何核心點的鄰域所包含，也未與其他群集形成密度可達關係（Density Reachability），此資料點最終將被歸類為哪一種類型？",
        "options": {
          "A": "鄰近點（Neighbor Point）",
          "B": "雜訊點（Noise Point）",
          "C": "邊界點（Border Point）",
          "D": "潛在點（Potential Point）"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。在 DBSCAN 演算法中，資料點分為核心點、邊界點與雜訊點。若一個點的鄰域內樣本數不足（非核心點），且不屬於任何核心點的鄰域（非邊界點），就會被演算法判定為雜訊點（Noise Point）或離群值。(A)鄰近點與(D)潛在點並非 DBSCAN 演算法中的標準分類名詞；(C)邊界點是指自身不是核心點，但落在某個核心點鄰域內的資料點。",
        "ml_method": "DBSCAN 群集分析 (Density-Based Clustering)",
        "ml_method_explanation": "DBSCAN 是一種基於密度的非監督式機器學習分群演算法。其核心機制是根據資料點在空間中的密集程度來劃分群體，將高密度的區域連接成一個群集，並將低密度的孤立點標記為雜訊。它不需要事先指定群集的數量，且能夠找出任何形狀的群集。演算法主要依賴兩個參數：半徑 (Eps) 與最小包含點數 (MinPts)，藉此定義核心點、邊界點與雜訊點的關係。",
        "examples": [
          "電信業者透過 DBSCAN 分析基地台接收到的手機 GPS 訊號，能夠自動將人群密集聚集的區域（如演唱會現場或熱門商圈）分群出來，同時排除偶爾路過的孤立訊號（雜訊點）。",
          "在信用卡異常交易偵測中，系統利用 DBSCAN 將正常消費行為根據時間與金額聚類，那些無法被歸入任何正常消費群集的獨立交易，就會被標記為雜訊點，進而觸發防盜刷警報。"
        ],
        "comparison": "DBSCAN 與最常見的 K-Means 都是群集分析（Clustering）的經典演算法。K-Means 是基於距離中心點的劃分法，適用於球形、大小相近的聚類，且必須預先指定分群數量 K，常用於顧客分群或市場區隔。然而，DBSCAN 是基於密度的分群法，能夠找出任意不規則形狀的群集，且不需要指定 K 值，更棒的是它能自動識別出異常值（雜訊點）。這使得 DBSCAN 成為地理空間數據分析和異常行為偵測的首選工具。",
        "keywords": [
          "DBSCAN",
          "密度分群 (Density-Based Clustering)",
          "核心點 (Core Point)",
          "雜訊點 (Noise Point)",
          "異常偵測 (Anomaly Detection)"
        ],
        "extended_tech": [
          {
            "name": "OPTICS 演算法",
            "desc": "DBSCAN 的擴充版本，解決了 DBSCAN 對參數 Eps 極度敏感的缺點。它能處理不同密度級別的群集結構，並產生一個可視化的可達距離圖，廣泛用於複雜的空間資料與生態學物種分佈分析。"
          },
          {
            "name": "孤立森林 (Isolation Forest)",
            "desc": "雖然不是分群演算法，但這是一種專為異常偵測設計的高效樹狀演算法。相較於 DBSCAN 需要計算距離密度，它透過隨機切割空間來快速孤立異常點，特別適合高維度資料庫的安全監控與防詐欺系統。"
          },
          {
            "name": "高斯混合模型 (Gaussian Mixture Model, GMM)",
            "desc": "基於機率分佈的軟分群演算法。不同於 DBSCAN 絕對的邊界劃分，GMM 能給出樣本屬於某個群集的機率值，適合處理聚類邊界模糊的場景，如語音識別中的音素分類。"
          }
        ],
        "terminology": [
          "Epsilon (Eps)",
          "MinPts",
          "Density Reachability",
          "Border Point",
          "Outlier"
        ]
      },
      {
        "id": 5,
        "question": "某智慧製造公司開發一套影像辨識系統，用於自動檢測生產線上的瑕疵產品。系統採用卷積神經網路（Convolutional Neural Network, CNN）作為主要模型架構，其中第一層卷積層（Convolutional Layer）主要負責的功能為下列何者？",
        "options": {
          "A": "自動提取輸入影像中的局部特徵",
          "B": "降低影像維度以加速運算效率",
          "C": "增加神經元與參數數量以提升模型容量",
          "D": "整合所有特徵並輸出最終分類結果"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。在卷積神經網路（CNN）中，卷積層的主要功能是透過滑動的卷積核（濾波器）來提取影像的局部特徵，如邊緣、紋理、線條等。越淺層（如第一層）提取的特徵越基礎，越深層則能提取更抽象的語義特徵。(B)降低影像維度是池化層（Pooling Layer）的主要工作；(C)卷積層透過參數共享反而減少了參數數量；(D)整合特徵並輸出結果是最後的全連接層（Fully Connected Layer）的任務。",
        "ml_method": "卷積神經網路 (CNN) 的卷積層",
        "ml_method_explanation": "卷積層（Convolutional Layer）是卷積神經網路（CNN）的核心元件，專門用於處理網格結構資料（如影像）。其核心機制是使用一組可學習的權重矩陣（稱為卷積核或濾波器），在輸入資料上進行滑動視窗運算（卷積運算）。這能讓網路具備局部感知能力，自動從影像中捕捉邊緣、顏色漸層等特徵。此外，透過參數共享機制，同一個卷積核會在整張影像上重複使用，大幅減少了模型需要學習的參數總數。",
        "examples": [
          "在車牌自動辨識系統中，CNN 的第一層卷積層會掃描攝影機拍下的車輛畫面，自動提取出車牌上的直線邊緣和角點等基礎視覺特徵，為後續的字母與數字辨識做準備。",
          "農產品質檢系統利用 CNN 分析輸送帶上的蘋果影像，淺層卷積層能有效捕捉蘋果表皮的紋理變化或顏色不均的局部特徵，協助判斷是否有撞傷或病斑。"
        ],
        "comparison": "在深度神經網路架構中，CNN的「卷積層」與「池化層（Pooling Layer）」經常搭配使用。卷積層的職責是主動地從影像中提取特徵圖（如尋找輪廓與邊緣），其學習重點在於特徵的「品質」。而池化層則是進行下採樣，藉由保留主要特徵（如Max Pooling）來縮小特徵圖的尺寸，其目的在於降低維度、減少運算量，並賦予模型平移不變性（Translation Invariance）。兩者相輔相成，是所有現代電腦視覺應用（如醫療影像判讀或自駕車視覺）的基石。",
        "keywords": [
          "卷積神經網路 (CNN)",
          "卷積層 (Convolutional Layer)",
          "局部特徵 (Local Features)",
          "卷積核 (Convolutional Kernel)",
          "特徵提取 (Feature Extraction)"
        ],
        "extended_tech": [
          {
            "name": "殘差網路 (Residual Network, ResNet)",
            "desc": "透過引入跳躍連接（Skip Connection）來解決深層網路梯度消失的問題。這使得 CNN 能夠訓練深達上百層的模型，大幅提升了圖像分類與物體偵測的準確率，廣泛應用於醫療診斷。"
          },
          {
            "name": "物件偵測模型 (YOLO - You Only Look Once)",
            "desc": "基於 CNN 架構的即時物件偵測演算法。不同於傳統分階段掃描，YOLO 能在單次網路前向傳播中同時預測出物體類別與邊界框（Bounding Box），是安防監控與自動駕駛的核心技術。"
          },
          {
            "name": "語意分割 (Semantic Segmentation)",
            "desc": "不僅辨識影像中的物體，更將影像中的每一個像素都分類到特定的類別。這在醫學影像（如腫瘤範圍精確標記）與自動駕駛（辨識可行駛路面與行人）中是不可或缺的進階視覺技術。"
          }
        ],
        "terminology": [
          "Filter/Kernel",
          "Stride",
          "Padding",
          "Feature Map",
          "Activation Map"
        ]
      },
      {
        "id": 6,
        "question": "某智慧城市團隊開發一套交通監控系統，用於即時辨識路口監視器影像中的車輛與行人。團隊比較後發現，卷積神經網路（Convolutional Neural Network, CNN）在訓練與推論效率上，明顯優於傳統的全連接神經網路（Fully Connected Neural Network, FCNN）。請問下列何者為主要原因？",
        "options": {
          "A": "CNN 能自動學習影像的旋轉與比例不變性",
          "B": "CNN 可直接跳過人工特徵提取步驟進行分類",
          "C": "CNN 透過區域感知（Local Receptive Field）與參數共享（Parameter Sharing）機制，降低模型參數量與運算複雜度",
          "D": "CNN 捨棄激勵函數（Activation Function），以加快運算速度"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。CNN 在處理影像時，透過「區域感知」只關注影像的局部區域，並透過「參數共享」讓同一個卷積核在整張影像上重複使用，這兩項機制大幅減少了模型參數量，從而提高訓練與推論效率。(A)CNN本身並不具備完全的旋轉與比例不變性，通常需要資料擴增；(B)雖然CNN可跳過人工特徵提取，但這並非其效率優於FCNN的主因；(D)CNN仍需要激勵函數（如ReLU）來引入非線性。",
        "ml_method": "參數共享與區域感知 (Parameter Sharing & Local Receptive Field)",
        "ml_method_explanation": "參數共享與區域感知是卷積神經網路（CNN）有別於全連接網路的兩大核心設計。區域感知指的是每個神經元只與前一層影像的一小塊局部區域相連，這符合視覺影像相鄰像素關聯性高的特性。參數共享則是指在同一個特徵圖中，所有神經元都使用同一組卷積核權重。這表示如果一個特徵（如垂直邊緣）在影像左上角很重要，在右下角也同樣適用，這極大地降低了模型的記憶體需求與計算複雜度。",
        "examples": [
          "在智慧型手機的人臉解鎖功能中，CNN 的參數共享機制確保了無論使用者的臉部出現在畫面的哪個位置，模型都能使用同一組特徵提取器來辨識眼睛和鼻子的輪廓，且運算速度足以達到即時解鎖。",
          "無人機進行森林火災巡檢時，CNN 模型利用區域感知能力，快速掃描廣大林地影像的各個區塊，尋找異常的煙霧特徵，而不會被影像中大量無關的樹冠細節消耗過多運算資源。"
        ],
        "comparison": "相比於傳統的全連接神經網路 (FCNN) 中每個神經元都與前一層所有像素相連導致權重數量爆炸，CNN 的「參數共享」與「區域感知」設計是專為空間結構資料（如影像）所優化的。FCNN 適合處理無空間關聯的結構化特徵數據（如客戶的年齡、收入、職位等獨立變數）。但在處理百萬像素等級的高解析度監控畫面時，FCNN 會面臨記憶體崩潰與極度嚴重的過度擬合問題，而 CNN 卻能高效地捕捉局部特徵並完成即時推論，因此主宰了現代電腦視覺領域。",
        "keywords": [
          "參數共享 (Parameter Sharing)",
          "區域感知 (Local Receptive Field)",
          "卷積神經網路 (CNN)",
          "模型效率 (Model Efficiency)",
          "空間特徵 (Spatial Features)"
        ],
        "extended_tech": [
          {
            "name": "深度可分離卷積 (Depthwise Separable Convolution)",
            "desc": "一種極致優化參數量與運算量的卷積方式，將標準卷積拆分為空間卷積與通道卷積。這項技術是 MobileNet 架構的核心，使得高效能 CNN 模型能夠部署在資源受限的邊緣裝置（如智慧型手機、物聯網感測器）上。"
          },
          {
            "name": "空間金字塔池化 (Spatial Pyramid Pooling, SPP)",
            "desc": "為了打破傳統 CNN 必須輸入固定尺寸影像的限制，SPP 層透過多尺度的池化操作，將任意大小的特徵圖轉換為固定長度的特徵向量。這在處理不同解析度的醫學影像或網路圖片時，能避免影像形變導致的失真。"
          },
          {
            "name": "注意力機制應用於視覺 (Vision Transformer, ViT)",
            "desc": "突破 CNN 區域感知的限制，ViT 將影像切割成多個區塊（Patches）並視為序列，運用 Transformer 的全局注意力機制來捕捉全圖上下文關聯，在超大型資料集上展現出超越傳統 CNN 的潛力。"
          }
        ],
        "terminology": [
          "Fully Connected Layer",
          "Receptive Field",
          "Translation Equivariance",
          "Weight Matrix",
          "Computation Complexity"
        ]
      },
      {
        "id": 7,
        "question": "下列哪一種應用最適合採用長短期記憶網路（Long Short-Term Memory, LSTM）模型？",
        "options": {
          "A": "預測未來七天的電力需求變化趨勢",
          "B": "辨識監視影像中不同類別的物件",
          "C": "將大量顧客資料依相似特徵自動分群",
          "D": "將高維度的感測器資料壓縮成低維表示"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。LSTM 是一種專為處理時間序列或序列資料而設計的遞迴神經網路（RNN）變體，擁有記憶單元能捕捉長期依賴關係，非常適合預測電力需求這種隨時間變化的趨勢。(B)影像辨識最適合卷積神經網路（CNN）；(C)資料分群屬於非監督式學習，適合使用 K-Means 或 DBSCAN；(D)資料降維則適合使用主成分分析（PCA）或自編碼器（Autoencoder）。",
        "ml_method": "長短期記憶網路 (LSTM)",
        "ml_method_explanation": "長短期記憶網路（LSTM）是遞迴神經網路（RNN）的一種進階架構，專門解決傳統 RNN 在處理長序列資料時容易發生的梯度消失或梯度爆炸問題。LSTM 的核心機制是引入了「記憶細胞狀態（Cell State）」以及三個閘門控制機制：遺忘閘、輸入閘與輸出閘。透過這些閘門，模型可以自主學習哪些過去的資訊應該被保留、哪些該被捨棄，從而有效捕捉序列資料中的長期時間相依性。",
        "examples": [
          "影音串流平台利用 LSTM 模型分析使用者過去觀看的影片序列歷史，捕捉其長期的觀影品味變化，進而精準推薦符合使用者當下偏好的影集。",
          "製造業的預測性維護系統收集機台運轉時的震動與溫度時間序列感測資料，輸入至 LSTM 模型中，藉此預測機台未來一週內發生故障的機率，以便提前安排維修。"
        ],
        "comparison": "LSTM 與常見的 ARIMA 模型都是處理時間序列預測的主力工具，但它們的應用領域各有千秋。ARIMA 是一種傳統的統計模型，適合處理具備明確季節性與趨勢、且變數關係簡單的單變量時間序列資料（如單純的銷售量預測），具備極高的可解釋性。相對地，LSTM 屬於深度學習模型，能夠處理含有大量非線性關係、多變量輸入，並能捕捉跨度極長的時間記憶依賴關係，特別適合如電力需求預測、股市高頻交易訊號、或是自然語言處理中的語音識別等複雜任務。",
        "keywords": [
          "長短期記憶網路 (LSTM)",
          "時間序列 (Time Series)",
          "遞迴神經網路 (RNN)",
          "記憶細胞 (Cell State)",
          "閘門機制 (Gating Mechanism)"
        ],
        "extended_tech": [
          {
            "name": "門控循環單元 (Gated Recurrent Unit, GRU)",
            "desc": "LSTM 的簡化變體，將遺忘閘與輸入閘合併為更新閘，減少了模型參數量與運算成本。在許多語音識別與時間序列預測任務中，GRU 能達到與 LSTM 相似的效能，但訓練速度更快，適合中等規模的資料集。"
          },
          {
            "name": "雙向 LSTM (Bidirectional LSTM, BiLSTM)",
            "desc": "在處理序列資料時，同時訓練兩個 LSTM 網路，一個從前往後讀取，一個從後往前讀取。這在自然語言處理（如命名實體識別或機器翻譯）中非常關鍵，因為理解一個詞彙通常需要同時參考其前後文。"
          },
          {
            "name": "序列到序列模型 (Seq2Seq Model)",
            "desc": "由編碼器與解碼器（通常由 LSTM 構成）組成的架構。主要用於輸入與輸出序列長度不一致的任務，如機器翻譯（將英文句子轉譯為長度不同的中文句子）或智慧客服對話系統。"
          }
        ],
        "terminology": [
          "Vanishing Gradient",
          "Forget Gate",
          "Hidden State",
          "Time Steps",
          "Sequential Data"
        ]
      },
      {
        "id": 8,
        "question": "資訊增益（Information Gain）常用於衡量特徵對分類結果的不確定性貢獻程度，並據以進行特徵選擇。此方法主要應用於下列哪一類模型架構中？",
        "options": {
          "A": "使用 L1 正則化進行特徵篩選的線性模型",
          "B": "利用激活函數（Activation Function）進行特徵擷取的深度神經網路",
          "C": "透過核函數（Kernel Function）將特徵映射至高維空間的分類模型",
          "D": "透過遞迴分裂方式建立分類規則的決策樹模型"
        },
        "answer": "D",
        "explanation": "本題正確答案為(D)。資訊增益（Information Gain）是決策樹演算法（如 ID3、C4.5）中用來選擇最佳分裂節點的核心指標，其概念基於資訊熵，用於評估某個特徵能使資料集的不確定性減少多少。(A)L1正則化屬於線性迴歸模型；(B)激活函數屬於神經網路；(C)核函數是支持向量機（SVM）的核心技術。這三者皆不依賴資訊增益來建構模型架構。",
        "ml_method": "決策樹與資訊增益 (Decision Trees & Information Gain)",
        "ml_method_explanation": "資訊增益是基於資訊理論中的「熵（Entropy）」概念發展出來的指標。熵代表資料集合的混亂程度或不確定性。在決策樹模型的建立過程中，演算法會評估每一個候選特徵，計算如果依據該特徵將資料集進行分支，能使整體熵下降多少（即資訊增益量）。模型總是會選擇能帶來最大資訊增益的特徵作為當前節點的分類依據，因為這代表該特徵能最有效地將不同類別的樣本區分開來。",
        "examples": [
          "銀行審核信用貸款時，決策樹系統會計算「年收入」、「職業」與「負債比」等特徵的資訊增益。若發現「負債比」能最大幅度區分違約與正常戶，系統就會將其作為第一層的判斷規則。",
          "電信公司的客服進線分流系統利用決策樹分析客戶語音，系統根據「關鍵字」的資訊增益，決定優先將包含「斷線」字眼的來電轉接給技術支援部門，有效提升處理效率。"
        ],
        "comparison": "決策樹依賴「資訊增益」作為特徵選擇的依據，其建構的樹狀規則極度直觀且具備高度可解釋性，這與支持向量機 (SVM) 依賴「核函數」進行數學空間映射，或是深度神經網路 (DNN) 隱含在隱藏層中的非線性權重黑盒子有著顯著的對比。決策樹非常適合應用在需要合規性審查與業務解釋的領域（如醫療輔助診斷、金融放貸標準），而 SVM 與 DNN 則更偏向追求極致的分類準確率與處理非結構化資料（如影像、語音）。",
        "keywords": [
          "決策樹 (Decision Tree)",
          "資訊增益 (Information Gain)",
          "資訊熵 (Entropy)",
          "特徵選擇 (Feature Selection)",
          "節點分裂 (Node Splitting)"
        ],
        "extended_tech": [
          {
            "name": "吉尼不純度 (Gini Impurity)",
            "desc": "除了資訊增益外，這是另一種（如 CART 演算法）用來評估決策樹節點純度的常見指標。其運算上因為不需要計算對數函數，所以在建立大規模隨機森林模型時，執行速度通常比資訊增益更快。"
          },
          {
            "name": "隨機森林 (Random Forest)",
            "desc": "一種整合學習演算法，透過結合數百棵決策樹的預測結果來進行投票或平均。它解決了單一決策樹容易過度擬合訓練資料的缺點，是金融風控與零售行銷中最穩定且強大的基礎模型之一。"
          },
          {
            "name": "決策樹剪枝 (Tree Pruning)",
            "desc": "為了防止決策樹長得太深而導致過度擬合，剪枝技術會主動移除對整體預測力貢獻極小的葉節點。這不僅能提升模型在未知資料上的泛化能力，也讓最終的商業決策規則更簡潔易懂。"
          }
        ],
        "terminology": [
          "Root Node",
          "Leaf Node",
          "Information Theory",
          "Classification and Regression Trees (CART)",
          "Overfitting"
        ]
      },
      {
        "id": 9,
        "question": "在建構以距離為基礎的機器學習模型（如 KNN、SVM）時，下列哪一項資料前處理方式最為關鍵？",
        "options": {
          "A": "進行特徵縮放（Feature Scaling），使各特徵變數具有相似的數值範圍",
          "B": "將連續型特徵變數轉換為類別型變數",
          "C": "以平均值或中位數進行缺失值補齊",
          "D": "進行隨機抽樣以平衡資料筆數"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。以距離為基礎的模型（如 K近鄰演算法 KNN、支持向量機 SVM）非常依賴特徵間的數值距離（如歐氏距離）來進行運算。如果特徵之間的尺度差異過大（例如一個特徵範圍是 0-1，另一個是 1-10000），尺度大的特徵會完全主導距離計算的結果。因此，進行特徵縮放（標準化或正規化）是不可或缺的步驟。(B)通常不需要將連續轉為類別；(C)和(D)雖為常見前處理，但對距離模型而言，特徵縮放才是最核心關鍵。",
        "ml_method": "特徵縮放 (Feature Scaling)",
        "ml_method_explanation": "特徵縮放是資料預處理中極為重要的一環，旨在將資料集中不同特徵的數值範圍轉換到相近的尺度。最常見的方法有最小最大正規化（將數值縮放至 0 到 1 之間）與 Z-score 標準化（使資料平均值為 0，標準差為 1）。這對於依賴距離計算（如歐式距離）的機器學習演算法至關重要，能避免數值範圍較大的特徵在運算中不成比例地支配了模型的決策過程，並能加速梯度下降演算法的收斂速度。",
        "examples": [
          "在建立房價預測的 KNN 模型時，若不進行特徵縮放，範圍達數千萬的「總價」會完全掩蓋範圍僅在 0~10 的「房數」特徵，導致模型無法正確找出相似的房屋物件。",
          "電子商務平台在分析用戶輪廓時，會將「年齡（18-80）」與「年消費額（1,000-1,000,000）」進行標準化，這樣在進行 SVM 分類或 K-Means 分群時，兩種行為特徵才能享有平等的權重。"
        ],
        "comparison": "在資料前處理階段，「特徵縮放」對於以空間距離為核心的模型（如 KNN 預測、K-Means 分群、SVM 邊界尋找）是生死攸關的步驟，因為未縮放的資料會導致模型產生嚴重偏誤。相對而言，基於樹狀結構的模型（如隨機森林、XGBoost）或貝氏分類器，主要是透過比較特徵值的相對大小來進行條件分支，對資料的絕對數值尺度毫不敏感，因此在這類模型中，特徵縮放並非必要步驟。這突顯了選擇演算法必須搭配適當的前處理策略。",
        "keywords": [
          "特徵縮放 (Feature Scaling)",
          "歐氏距離 (Euclidean Distance)",
          "標準化 (Standardization)",
          "正規化 (Normalization)",
          "K近鄰演算法 (KNN)"
        ],
        "extended_tech": [
          {
            "name": "Z-score 標準化 (Standardization)",
            "desc": "將特徵資料轉換為平均值為 0、標準差為 1 的分佈。這種縮放方法不受極端異常值的嚴重影響，且廣泛應用於需要梯度下降優化的深度學習與邏輯迴歸模型中，以加速模型收斂。"
          },
          {
            "name": "Min-Max 正規化 (Normalization)",
            "desc": "將資料線性縮放至 0 到 1 之間。這種方法能精確保留原始資料中的相對關係，特別適合應用於神經網路的輸入層，或用於處理影像像素值（常為 0-255）的預處理。"
          },
          {
            "name": "強健型縮放 (Robust Scaling)",
            "desc": "使用資料的中位數與四分位距（IQR）進行縮放。當資料庫中存在大量且難以剔除的極端異常值（如金融詐欺交易金額）時，強健型縮放能避免整體資料的分佈被異常值過度扭曲。"
          }
        ],
        "terminology": [
          "Euclidean Distance",
          "Gradient Descent",
          "Outlier",
          "Distance Metric",
          "Preprocessing"
        ]
      },
      {
        "id": 10,
        "question": "下列哪一種應用情境最適合導入 AutoML，以提升模型開發效率？",
        "options": {
          "A": "公司已有完整的 MLOps 平台與資深資料科學團隊，模型更新採固定流程",
          "B": "製造部門的生產良率模型已長期穩定運作，只需定期調整參數",
          "C": "行銷部門希望在短時間內比較多種顧客流失預測模型，缺乏專職工程師與時間進行手動建模",
          "D": "財務部門正在開發高度客製化的信用風險評估模型，需要精細控制特徵工程與演算法細節"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。AutoML（自動化機器學習）的核心價值在於降低建立模型的門檻，自動執行資料前處理、特徵選擇、模型挑選與超參數調校等流程。這非常適合缺乏專業資料科學家、且需要在短時間內快速建立基準模型（Baseline）或比較多種演算法的部門（如行銷部）。(A)與(D)已有專業團隊或需要高度客製化，AutoML 可能不敷使用；(B)模型已穩定，只需微調，不需要重新進行 AutoML。",
        "ml_method": "自動化機器學習 (AutoML)",
        "ml_method_explanation": "自動化機器學習（AutoML）是一項旨在將機器學習應用過程端到端自動化的技術。傳統的機器學習流程需要依賴專家的經驗來進行繁瑣的資料清理、特徵工程、演算法選擇與超參數調優。AutoML 透過演算法搜尋策略，能自動在龐大的模型架構與參數空間中尋找最佳組合，大幅降低了 AI 應用的技術門檻，讓非專業背景的領域專家（如行銷或業務人員）也能快速建立具備實用價值的預測模型。",
        "examples": [
          "一家連鎖零售業的行銷主管，在沒有資料科學家的協助下，直接將過往的會員消費紀錄上傳到 AutoML 雲端平台，平台自動比較了數十種演算法後，產出了一個高準確度的促銷回應預測模型。",
          "傳統製造業希望導入 AI 進行瑕疵檢測，IT 部門可以先利用 AutoML 快速訓練出一個基準的影像分類模型來驗證可行性，節省了初期耗費數週撰寫程式與調校模型架構的時間。"
        ],
        "comparison": "AutoML 與傳統的客製化模型開發（Custom Modeling）代表了 AI 落地策略的兩個極端。客製化開發需要由資深資料科學家手動調優每一個特徵與網路層，耗時數月，適用於對準確率要求極高、業務邏輯極度複雜的場景（如高頻演算法交易或醫療核心診斷）。相比之下，AutoML 將大量試錯過程自動化，雖然產出的模型未必是絕對最佳解，但能在幾小時內提供一個高水準的基準線，極度適合行銷預測、內部流程自動化等強調「快速落地與敏捷迭代」的商業情境。",
        "keywords": [
          "自動化機器學習 (AutoML)",
          "特徵工程 (Feature Engineering)",
          "模型選擇 (Model Selection)",
          "基準模型 (Baseline Model)",
          "快速原型 (Rapid Prototyping)"
        ],
        "extended_tech": [
          {
            "name": "神經架構搜尋 (Neural Architecture Search, NAS)",
            "desc": "AutoML 的進階分支，專注於利用演算法自動設計出最佳的深度神經網路結構。這項技術能發掘出人類難以設計出的複雜網路拓撲，曾被用來設計出效能超越頂尖專家的影像分類模型架構。"
          },
          {
            "name": "自動特徵工程 (Automated Feature Engineering)",
            "desc": "AutoML 工具箱中的關鍵技術。它能自動執行變數轉換、多項式展開、交互作用組合等操作，並過濾掉無用特徵。這解決了傳統機器學習專案中，耗費人工最多時間的瓶頸。"
          },
          {
            "name": "無程式碼/低程式碼 AI 平台 (No-Code/Low-Code AI)",
            "desc": "將 AutoML 結合視覺化拖曳介面，讓完全不懂程式語言的業務專家也能直接匯入資料並產出預測模型，進一步推動了企業內部 AI 普及化（Democratization of AI）。"
          }
        ],
        "terminology": [
          "Hyperparameter Optimization (HPO)",
          "End-to-End Learning",
          "Model Evaluation",
          "Baseline",
          "Algorithm Selection"
        ]
      },
      {
        "id": 11,
        "question": "相較於 Grid Search，Random Search 在超參數調整上具備哪一項主要優勢？",
        "options": {
          "A": "可自動產生模型架構",
          "B": "可使用更大的訓練集",
          "C": "避免模型過擬合",
          "D": "能更有效率搜尋高維參數空間"
        },
        "answer": "D",
        "explanation": "本題正確答案為(D)。在超參數優化中，網格搜尋（Grid Search）會窮舉所有設定的參數組合，當參數維度增加時，計算量會呈指數級爆炸（維度災難）。隨機搜尋（Random Search）則在參數空間中隨機抽樣組合，研究指出在相同運算資源下，隨機搜尋能更有效地探索高維度參數空間，並有更高機率找到優良的參數解。(A)自動產生架構屬 NAS（神經架構搜尋）範疇；(B)與(C)與超參數搜尋方法的選擇無直接關係。",
        "ml_method": "隨機搜尋 (Random Search)",
        "ml_method_explanation": "隨機搜尋是一種用於機器學習模型超參數最佳化的演算法。不同於網格搜尋（Grid Search）會針對每個超參數設定固定的離散值並窮舉所有組合，隨機搜尋會在每個參數定義的統計分佈範圍內，隨機抽取指定次數的參數組合進行訓練與評估。由於實際上模型效能往往只對少數幾個關鍵超參數敏感，隨機搜尋能在有限的運算時間與嘗試次數內，對這些關鍵維度進行更細緻且廣泛的探索，因此在高維度空間中效率極高。",
        "examples": [
          "在訓練複雜的深度學習神經網路時，工程師需要同時調整學習率、批次大小、神經元數量等多達十幾個超參數。使用隨機搜尋可以在限定的一天運算時間內，快速找到一組表現優異的參數設定。",
          "金融機構在最佳化隨機森林模型的樹的深度與數量時，利用 Random Search 代替 Grid Search，大幅節省了模型訓練時間，讓模型能更快上線部署以應對市場變化。"
        ],
        "comparison": "超參數優化中，網格搜尋（Grid Search）與隨機搜尋（Random Search）是最基礎的兩種策略。網格搜尋堅持地毯式搜索，保證不會遺漏任何設定點，適合超參數數量極少（例如 2-3 個）且運算資源充足的小型機器學習專案。相對地，隨機搜尋打破了固定間距的限制，能在極短時間內測試更多獨特的參數值。當處理現代深度學習或 XGBoost 這種動輒超過 10 個超參數的高維度問題時，隨機搜尋是跳脫運算災難、迅速找到可用設定的實戰首選。",
        "keywords": [
          "隨機搜尋 (Random Search)",
          "網格搜尋 (Grid Search)",
          "超參數優化 (Hyperparameter Optimization)",
          "高維參數空間 (High-dimensional Parameter Space)",
          "計算效率 (Computational Efficiency)"
        ],
        "extended_tech": [
          {
            "name": "貝氏最佳化 (Bayesian Optimization)",
            "desc": "比隨機搜尋更聰明的進階策略。它會建立一個代理模型來記錄過去嘗試過的參數組合與效能，並推測出下一次最可能提升效能的參數設定，能用極少的嘗試次數找到全域最佳解，適合每次訓練成本極高的大型神經網路。"
          },
          {
            "name": "Hyperband 演算法",
            "desc": "結合了隨機搜尋與提早停止（Early Stopping）機制。它會快速發起大量隨機的參數組合進行短期訓練，並迅速淘汰表現不佳的組合，將運算資源集中在最有潛力的模型上，大幅縮短了整體調校時間。"
          },
          {
            "name": "遺傳演算法應用於調參 (Evolutionary Tuning)",
            "desc": "借鑑生物演化過程，將優良的超參數組合視為親代進行「交配」與「突變」，產生下一代參數組合。這種方法特別擅長在極度複雜且不連續的模型架構空間中搜尋出意想不到的高效能配置。"
          }
        ],
        "terminology": [
          "Curse of Dimensionality",
          "Hyperparameter Tuning",
          "Parameter Space",
          "Cross-Validation",
          "Objective Function"
        ]
      },
      {
        "id": 12,
        "question": "某智慧製造公司開發一套設備故障預測系統，利用感測器資料訓練深度神經網路（Deep Neural Network, DNN）模型，以提前偵測異常運作跡象。在訓練過程中，團隊發現模型收斂速度不穩定：有時過快導致過擬合，有時又遲遲無法達到最佳準確率。開發團隊可以藉由調整下列哪一項超參數（Hyperparameter）以改善此問題？",
        "options": {
          "A": "每個神經元的輸出結果",
          "B": "損失函數（Loss Function）在訓練過程中的梯度變化值（Gradient）",
          "C": "學習率（Learning Rate），控制模型權重更新的速度",
          "D": "模型在訓練後產生的權重值"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。學習率（Learning Rate）是控制模型在梯度下降過程中，每次參數更新步伐大小的核心超參數。學習率過大會導致步伐太大，在最佳解附近震盪甚至發散；學習率過小則會導致收斂速度極慢，甚至卡在局部最佳解。調整學習率或使用學習率排程（Learning Rate Scheduler）能有效改善收斂不穩定的問題。(A)與(D)是模型訓練過程產生的變數與參數，非超參數；(B)梯度是由資料與損失函數計算而得，無法直接當作超參數調整。",
        "ml_method": "學習率 (Learning Rate)",
        "ml_method_explanation": "學習率是機器學習優化演算法（如梯度下降法）中最重要的超參數之一。它決定了模型在每次迭代更新權重時，朝著損失函數梯度下降方向邁出的「步伐大小」。如果學習率設定過高，模型可能會在最佳解的周圍反覆橫跳，無法穩定收斂；如果設定過低，模型收斂的過程將會非常緩慢，且容易陷入局部最優解。現代深度學習常結合動態學習率策略，讓步伐隨著訓練進度逐漸縮小，以達到更穩定的收斂效果。",
        "examples": [
          "自動駕駛視覺辨識系統在初步訓練階段，工程師設定了較大的學習率讓模型快速掌握道路輪廓，到了訓練後期則調小學習率，讓模型精細微調對行人特徵的判斷。",
          "語音辨識模型在訓練時發生損失值不斷震盪、無法下降的情況，開發人員透過引入學習率衰減（Decay）機制，成功讓模型穩定收斂並達到了目標的準確率。"
        ],
        "comparison": "在神經網路的訓練中，「學習率」與「批次大小（Batch Size）」是決定模型能否穩定收斂的兩把鑰匙。學習率控制的是每一次參數更新的步伐長度；而批次大小控制的是每一次更新方向的準確性。如果學習率過大，模型會像酒醉般在山谷間劇烈震盪；如果批次過小，梯度更新的方向會因為單一雜訊資料而充滿隨機性。實務上，調整這兩個超參數往往需要相輔相成，才能在訓練速度與模型最終泛化能力之間取得最佳平衡點。",
        "keywords": [
          "學習率 (Learning Rate)",
          "收斂速度 (Convergence Speed)",
          "梯度下降 (Gradient Descent)",
          "超參數 (Hyperparameter)",
          "權重更新 (Weight Update)"
        ],
        "extended_tech": [
          {
            "name": "學習率衰減 (Learning Rate Decay)",
            "desc": "在訓練過程的初期使用較大的學習率以加速收斂並跳脫局部最佳解，隨著訓練週期增加，逐步調降學習率，讓模型在靠近全域最佳解時能精確微調，是深度學習標準配備。"
          },
          {
            "name": "預熱機制 (Warmup)",
            "desc": "在訓練剛開始的幾個週期，從極小的學習率逐漸增加到預設的基準值。這種策略能避免神經網路在剛初始化不穩定時，因為過大的步伐而直接破壞了潛在的特徵分佈，廣泛應用於 Transformer 模型的訓練。"
          },
          {
            "name": "餘弦退火排程 (Cosine Annealing Scheduler)",
            "desc": "讓學習率依照餘弦函數的波形，週期性地從高點下降到低點再拉升。這種動態排程能讓模型有機會週期性地逃離次佳的平緩區域，在複雜的損失函數地形中探索出更優質的解。"
          }
        ],
        "terminology": [
          "Gradient Descent",
          "Epoch",
          "Learning Rate Scheduler",
          "Local Minima",
          "Loss Function"
        ]
      },
      {
        "id": 13,
        "question": "標籤偏差(Label Bias)通常是因為什麼原因造成？",
        "options": {
          "A": "訓練資料量過大",
          "B": "標記資料本身帶有主觀偏見",
          "C": "模型結構設計不當",
          "D": "特徵數量設定過多"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。標籤偏差（Label Bias）是指在監督式學習的資料集中，用來訓練模型的目標標籤（Ground Truth）本身並不客觀，而是包含了人為的主觀偏見、歷史歧視或測量誤差。當模型利用這些帶有偏見的標籤進行訓練時，自然會學習並放大這些偏見。(A)與(D)會影響模型複雜度與運算時間，(C)影響模型效能，但都不直接是造成「標籤」本身產生偏差的原因。",
        "ml_method": "標籤偏差 (Label Bias)",
        "ml_method_explanation": "標籤偏差屬於機器學習公平性與資料偏見範疇的核心議題。在建立監督式學習模型時，模型會將訓練資料中的「標籤」視為絕對真理並進行擬合。然而，這些標籤通常來自於人類標註員的判斷、歷史的業務決策結果或有缺陷的量測系統。如果這些來源本身就存在性別、種族歧視或是主觀刻板印象，模型就會完全吸收這些偏差，甚至在未來自動化決策時將偏見系統化並放大其負面影響。",
        "examples": [
          "某企業使用過去十年的履歷篩選結果來訓練 AI 招募系統，由於過去的人資主管在標記「合格候選人」時存在潛在的性別偏好，導致 AI 系統也學會了對特定性別的履歷給予較低評分。",
          "醫院的 AI 皮膚病變診斷模型若其訓練資料集中的標籤，大部分是由習慣診斷特定膚色病患的醫生所標註，模型可能無法正確辨識其他膚色病患身上的病徵，產生嚴重的醫療偏差。"
        ],
        "comparison": "機器學習中的偏見主要可分為「標籤偏差」與「取樣偏差（Sampling Bias）」。標籤偏差問題出在「答案是錯的」，也就是資料本身被錯誤或帶有主觀偏見地標記，這在依賴人工審核的應用（如內容審查、招募決策）中最為致命。相對地，取樣偏差問題出在「資料不具代表性」，例如只收集了城市使用者的數據去推論全國趨勢，導致模型對鄉村群體預測失效。兩者都會嚴重損害 AI 系統的公平性與可靠性，但必須從不同的資料蒐集環節去解決。",
        "keywords": [
          "標籤偏差 (Label Bias)",
          "資料偏見 (Data Bias)",
          "機器學習公平性 (Machine Learning Fairness)",
          "監督式學習 (Supervised Learning)",
          "主觀偏見 (Subjective Bias)"
        ],
        "extended_tech": [
          {
            "name": "主動學習 (Active Learning)",
            "desc": "在資料標註成本高昂的情況下，演算法會主動挑選出預測最不確定或最具資訊量的樣本，交由人類專家進行人工標註。這能有效提高標籤品質並減少標註量，但仍需注意專家本身潛藏的偏差。"
          },
          {
            "name": "公平感知機器學習 (Fairness-aware Machine Learning)",
            "desc": "一組專門對抗模型偏見的技術。透過在模型訓練的損失函數中加入公平性約束條件，強迫模型在做決策時不能依賴受保護的敏感屬性（如種族、性別），以符合倫理與法規要求。"
          },
          {
            "name": "交叉標註與共識機制 (Consensus Labeling)",
            "desc": "為了解決單一人類標註員的主觀偏差，資料準備階段會將同一個樣本派發給多位獨立標註員。最後透過多數決或信賴度加權的方式來決定最終標籤，是建立高品質大型資料集的標準流程。"
          }
        ],
        "terminology": [
          "Ground Truth",
          "Sampling Bias",
          "Algorithmic Fairness",
          "Measurement Error",
          "Supervised Learning"
        ]
      },
      {
        "id": 14,
        "question": "下列哪一種 AI 應用情境中，模型的可解釋性（Explainability）最為關鍵？",
        "options": {
          "A": "電商平台利用深度學習模型預測用戶的下一次購買時間，以優化推播行銷策略",
          "B": "新創公司使用機器學習演算法自動調整廣告出價策略，以提升點擊轉換率",
          "C": "醫院導入 AI 模型分析病患影像並給出腫瘤惡性可能性，作為臨床醫師診斷依據",
          "D": "銀行導入 AI 模型預測客戶流失率，並自動推薦留客優惠方案"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。在醫療診斷領域中，AI 模型的決策直接關乎病患的生命健康與醫療責任歸屬。醫師必須清楚知道 AI 是基於影像的哪些特徵（如腫瘤邊緣不規則）來判斷惡性，才能信任並採納其建議，因此可解釋性（Explainability/XAI）至關重要。(A)、(B)、(D)皆屬於行銷或商業優化情境，雖然可解釋性有助於洞察，但相較於醫療領域，這類情境更看重模型的預測準確率與最終的轉換效益。",
        "ml_method": "可解釋人工智慧 (Explainable AI, XAI)",
        "ml_method_explanation": "可解釋人工智慧（XAI）旨在解決複雜機器學習模型（特別是深度神經網路）如同「黑盒子」般難以理解其內部決策邏輯的問題。XAI 技術（如 LIME、SHAP、或是特徵熱力圖）能夠將模型產出預測結果的過程透明化，量化每個輸入特徵對最終預測結果的貢獻度或影響方向。這不僅能提升使用者對 AI 系統的信任度，也幫助開發人員診斷模型潛在的偏見與錯誤，是受到高度監管產業導入 AI 的必備條件。",
        "examples": [
          "金融業在利用 AI 審核房貸申請時，必須透過 XAI 技術產出拒絕貸款的具體原因（如負債比過高或近期有遲繳紀錄），以符合法規要求並向客戶解釋。",
          "自動駕駛汽車在測試發生誤判時，工程師利用可解釋性工具分析神經網路的注意力熱力圖，發現模型錯誤地將路邊廣告看板上的圖案識別為行人，進而進行針對性的模型修正。"
        ],
        "comparison": "在評估 AI 系統的優先級時，「可解釋性（XAI）」與「模型效能（如準確率）」常常處於拔河的狀態。對於低風險、高頻率的任務（如精準廣告投放、商品推薦），企業會優先採用結構複雜但極度精準的深度學習黑盒子模型；然而，在醫療診斷、刑事司法判決或金融放貸等高風險、強監管領域，即使傳統決策樹或邏輯迴歸的準確率稍遜一籌，企業仍會因為其具備完美的可解釋性而將其作為首選，確保決策的透明與合規。",
        "keywords": [
          "可解釋人工智慧 (Explainable AI, XAI)",
          "黑盒子模型 (Black-box Model)",
          "特徵貢獻度 (Feature Contribution)",
          "醫療診斷 (Medical Diagnosis)",
          "信任度 (Trustworthiness)"
        ],
        "extended_tech": [
          {
            "name": "SHAP 值分析 (SHapley Additive exPlanations)",
            "desc": "基於賽局理論發展出的模型解釋工具。它能為模型預測出的每一個結果，精確計算出各個輸入特徵的邊際貢獻度（是正向推升或負向拉低預測值），被公認為目前最嚴謹的特徵重要性評估方法。"
          },
          {
            "name": "LIME 演算法 (Local Interpretable Model-agnostic Explanations)",
            "desc": "一種與模型架構無關的局部解釋技術。它的運作原理是在某個特定樣本的周圍生成微擾資料，並訓練一個簡單的線性模型來逼近黑盒子模型在該局部的決策邊界，從而解釋單一預測的依據。"
          },
          {
            "name": "類別活化映射 (Class Activation Mapping, CAM)",
            "desc": "專門用於解釋卷積神經網路（CNN）影像分類決策的技術。它能生成類似熱力圖的視覺化結果，明確標示出模型在進行分類判斷時，目光主要聚焦在影像中的哪一個區域（例如貓的耳朵或尾巴）。"
          }
        ],
        "terminology": [
          "Interpretability",
          "Model Transparency",
          "Regulatory Compliance",
          "Local Explanation",
          "Global Explanation"
        ]
      },
      {
        "id": 15,
        "question": "在線性迴歸模型中，若 R²值為 0.85，其意義為何？",
        "options": {
          "A": "模型準確率為 85%",
          "B": "85%的變異可被模型解釋",
          "C": "預測誤差為 15%",
          "D": "模型有 85%的信心水準"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。在統計學與迴歸分析中，決定係數 R² (R-squared) 是用來衡量模型配適度的指標，代表依變數（目標變數）的總變異中，有多大比例（此處為 85%）可以由自變數（特徵）透過線性模型來解釋。(A)準確率(Accuracy)是用於分類模型的指標；(C)預測誤差通常以 MAE 或 RMSE 來衡量，R² 0.85 不代表誤差為 15%；(D)信心水準是統計推論（如信賴區間）的概念，與 R² 的定義不符。",
        "ml_method": "決定係數 (R-squared, R²)",
        "ml_method_explanation": "決定係數（R²）是評估迴歸模型預測能力的重要統計量，其數值介於 0 到 1 之間。R² 的計算公式反映了模型預測值與實際觀察值之間的殘差平方和（未解釋變異）相對於總變異的比例。R² 越接近 1，表示模型所使用的特徵變數能極好地解釋目標變數的波動；反之，若 R² 接近 0，則說明模型未能有效捕捉資料的線性關係。在實務中，這是評斷連續數值預測模型優劣的首要指標。",
        "examples": [
          "在房地產估價模型中，若系統的回報 R² 為 0.90，代表房價高低波動中有 90% 的原因可以被系統納入的坪數、屋齡、捷運距離等特徵所解釋。",
          "冷氣製造商分析氣溫與冷氣銷量的關係，得到的線性迴歸模型 R² 為 0.75，表示冷氣銷量的增減有 75% 的變異是由氣溫變化所決定的，其餘 25% 則可能是受促銷或其他因素影響。"
        ],
        "comparison": "在評估數值預測模型時，R² 決定係數與均方根誤差（RMSE）扮演著互補的角色。R² 提供的是一個「相對」比例概念，它告訴我們模型解釋資料波動的能力有多強，無論目標是百萬級的房價還是個位數的溫度，R² 永遠介於 0 到 1 之間，方便跨模型比較。而 RMSE 提供的是「絕對」誤差數值，直接反映預測值與實際值的物理差距。在商業報告中，通常會同時呈現 R²（衡量模型品質）與 RMSE（衡量實際業務誤差風險）以獲得全面的評估。",
        "keywords": [
          "決定係數 (R-squared, R²)",
          "變異 (Variance)",
          "線性迴歸 (Linear Regression)",
          "模型配適度 (Goodness of Fit)",
          "殘差 (Residual)"
        ],
        "extended_tech": [
          {
            "name": "調整後決定係數 (Adjusted R-squared)",
            "desc": "傳統 R² 的改良版。當模型加入越來越多的無用特徵時，傳統 R² 仍然會呈現虛假的上升；調整後 R² 則會針對引入無效變數進行懲罰，更能真實反映多元迴歸模型的優劣，是特徵選擇的關鍵指標。"
          },
          {
            "name": "平均絕對誤差 (Mean Absolute Error, MAE)",
            "desc": "計算預測值與真實值之間絕對誤差的平均。與 RMSE 相比，MAE 不會放大極端異常值（Outlier）的影響，更能反映模型在一般情況下的典型預測誤差，適合包含許多離群值的商業預測情境。"
          },
          {
            "name": "均方根誤差 (Root Mean Square Error, RMSE)",
            "desc": "先將誤差平方後取平均再開根號。由於平方效應，RMSE 會強烈放大預測偏差極大的極端案例。在金融預測或精密製造中，若偶發的巨大誤差會帶來毀滅性後果，RMSE 便是最優先參考的評估指標。"
          }
        ],
        "terminology": [
          "Goodness of Fit",
          "Total Sum of Squares (SST)",
          "Residual Sum of Squares (SSR)",
          "Explained Variance",
          "Regression Analysis"
        ]
      },
      {
        "id": 16,
        "question": "在二元分類問題中，若精確率（Precision）為 0.8，召回率（Recall）為 0.6，則 F1 分數（F1 Score）為何？",
        "options": {
          "A": "0.686",
          "B": "0.700",
          "C": "0.720",
          "D": "0.750"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。F1 Score 是精確率（Precision）與召回率（Recall）的調和平均數。其計算公式為：2 * (Precision * Recall) / (Precision + Recall)。將數值代入：2 * (0.8 * 0.6) / (0.8 + 0.6) = 2 * 0.48 / 1.4 = 0.96 / 1.4 ≈ 0.6857，四捨五入後約為 0.686。(B)0.7是算術平均數，不符合 F1 的定義；(C)、(D)皆為錯誤的計算結果。",
        "ml_method": "F1 分數 (F1 Score)",
        "ml_method_explanation": "F1 分數是機器學習分類問題中，綜合評估模型效能的單一指標。當資料集的類別分佈極度不平衡時，單純的「準確率（Accuracy）」會產生誤導（例如模型將所有樣本都預測為多數類也能得到高分）。F1 分數透過計算精確率（預測為正樣本中有多少是真的）與召回率（真實的正樣本中有多少被找出來）的調和平均數，強迫模型必須在兩者之間取得平衡，才能獲得高分，是評估不平衡資料集模型的利器。",
        "examples": [
          "在垃圾郵件過濾系統中，我們既不希望漏抓垃圾信（需高召回率），也不希望把重要信件誤判為垃圾信（需高精確率），使用 F1 分數能最客觀地評估過濾器的整體表現。",
          "工廠生產線的瑕疵檢測 AI，若資料中 99% 都是良品，工程師會專注於優化 AI 的 F1 分數，以確保系統能精準挑出瑕疵品，同時減少誤報導致的人工複檢成本。"
        ],
        "comparison": "F1 分數是「精確率（Precision）」與「召回率（Recall）」兩難困境下的折衷解。精確率強調「不要抓錯」，適用於誤報成本極高的場景，例如將正常信件誤判為垃圾信；召回率強調「不要漏抓」，適用於漏報成本極高的場景，例如癌症篩檢或防毒軟體偵測。當業務場景無法偏廢任何一方，且資料極度不平衡時，F1 分數（兩者的調和平均）能避免模型透過極端策略（如全猜正或全猜負）來洗高分數，提供最客觀的綜合評估。",
        "keywords": [
          "F1 分數 (F1 Score)",
          "精確率 (Precision)",
          "召回率 (Recall)",
          "調和平均數 (Harmonic Mean)",
          "不平衡資料集 (Imbalanced Dataset)"
        ],
        "extended_tech": [
          {
            "name": "ROC 曲線與 AUC (Area Under the ROC Curve)",
            "desc": "這是一種評估二元分類器在不同判定門檻下整體效能的圖表與指標。AUC 值越接近 1，代表模型區分正負樣本的能力越強。相較於 F1 分數專注於單一預測門檻，AUC 提供了模型在各種情境下的全域評估視角。"
          },
          {
            "name": "混淆矩陣 (Confusion Matrix)",
            "desc": "將模型的分類結果展開成一個矩陣，詳列出真陽性(TP)、假陽性(FP)、真陰性(TN)與假陰性(FN)的具體數量。這是計算精確率、召回率與 F1 分數的基石，能幫助工程師精確診斷模型到底在哪一種類型上犯錯最多。"
          },
          {
            "name": "F-beta 分數 (F-beta Score)",
            "desc": "F1 分數的泛化版本，允許引入一個權重參數 Beta。當業務場景認為召回率比精確率更重要（如疾病篩檢）時，可設定 Beta 大於 1；反之則設定小於 1，賦予模型評估更高的業務彈性。"
          }
        ],
        "terminology": [
          "True Positive (TP)",
          "False Positive (FP)",
          "False Negative (FN)",
          "Accuracy",
          "Threshold"
        ]
      },
      {
        "id": 17,
        "question": "下列哪一種優化演算法內建動量（Momentum）的設計機制？",
        "options": {
          "A": "SGD+Momentum",
          "B": "Adam",
          "C": "RMSProp",
          "D": "Adagrad"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。Adam (Adaptive Moment Estimation) 演算法結合了 RMSProp 的自適應學習率機制以及 Momentum（動量）機制。它會同時計算梯度的指數移動平均（一階動量）與梯度平方的指數移動平均（二階動量），藉此平滑更新步伐。雖然(A)名稱中包含動量，但它通常被視為基礎 SGD 的擴充寫法；而在選項中，Adam 是作為一個獨立且廣泛使用、本質上融合了動量機制的進階優化演算法。Adagrad(D) 和 RMSProp(C) 則只處理學習率衰減，無一階動量。",
        "ml_method": "Adam 優化器 (Adam Optimizer)",
        "ml_method_explanation": "Adam (Adaptive Moment Estimation) 是一種用於訓練深度學習模型的高階梯度下降優化演算法。其核心設計巧妙地融合了兩種機制的優點：一方面利用「動量（Momentum）」機制（一階動量）來累積過去的梯度方向，幫助模型快速衝過平坦區域並減少震盪；另一方面利用 RMSProp 機制（二階動量）為每個參數自適應地調整獨立的學習率。這使得 Adam 在處理稀疏梯度與複雜損失函數地形時表現極佳，成為現今深度學習的預設首選。",
        "examples": [
          "在訓練複雜的生成對抗網路（GAN）生成高畫質人臉影像時，研究人員通常會選擇 Adam 優化器，因為它能更穩定、更快速地在生成器與判別器的對抗訓練中找到收斂平衡點。",
          "自然語言處理領域在微調擁有數十億參數的 BERT 語言模型時，Adam 憑藉其自適應調整每個權重學習率的特性，能夠在少量的運算週期內迅速將模型調適到新的文本分類任務上。"
        ],
        "comparison": "在神經網路優化器家族中，SGD（隨機梯度下降）是最傳統且單純的方法，每次更新完全依賴當下的梯度，容易在狹長山谷地形中劇烈震盪且收斂緩慢。RMSProp 解決了學習率衰減問題，但缺乏方向的慣性。而 Adam 優化器則被視為集大成者，它同時內建了「動量（保持方向慣性避免震盪）」與「自適應學習率（針對不同參數微調步伐）」雙重機制。這使得 Adam 成為九成以上深度學習與自然語言處理專案預設的開局首選優化器。",
        "keywords": [
          "Adam 優化器 (Adam Optimizer)",
          "動量 (Momentum)",
          "自適應學習率 (Adaptive Learning Rate)",
          "梯度下降 (Gradient Descent)",
          "一階與二階動量 (First and Second Moment)"
        ],
        "extended_tech": [
          {
            "name": "Nadam 優化器 (Nesterov-accelerated Adaptive Moment Estimation)",
            "desc": "Adam 的進階改良版。它將 Nesterov 預見動量機制（在更新前先往前看一步的梯度）融入了 Adam 的一階動量計算中。在訓練某些高度非線性的圖像分類網路時，能提供比標準 Adam 更快且更穩定的收斂曲線。"
          },
          {
            "name": "LBFGS 優化演算法",
            "desc": "一種基於牛頓法（計算二階導數與海森矩陣）的進階優化演算法。相較於 Adam 這種基於一階梯度的演算法，它在處理全批量資料且參數規模較小（如數千個參數）的傳統機器學習問題時，能極度精準地收斂到最佳解。"
          },
          {
            "name": "AdamW (Adam with Weight Decay)",
            "desc": "為了解決標準 Adam 在引入 L2 正則化時數學推導上的瑕疵而誕生。AdamW 將權重衰減（Weight Decay）從梯度計算中解耦，這能顯著提升訓練出的大型 Transformer 模型的泛化能力，避免過度擬合。"
          }
        ],
        "terminology": [
          "Gradient",
          "Exponential Moving Average (EMA)",
          "RMSProp",
          "Stochastic Gradient Descent (SGD)",
          "Hyperparameter"
        ]
      },
      {
        "id": 18,
        "question": "下列何者最能同時反映 XGBoost（eXtreme Gradient Boosting）相較於傳統梯度提升決策樹（Gradient Boosting Decision Tree, GBDT）的主要技術改進？",
        "options": {
          "A": "引入正則化項（Regularization）以抑制過擬合，並支援缺失值自動處理與並行化訓練",
          "B": "改以隨機森林（Random Forest）架構取代樹模型以提升準確率",
          "C": "以類神經網路（Neural Network）取代弱分類器（Weak Learners）",
          "D": "採用批次正規化（Batch Normalization）技術提升模型穩定性"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。XGBoost 是 GBDT 的極致效能改良版，其相對於傳統 GBDT 的核心技術改進包含：在目標函數中加入正則化項（L1/L2）控制樹的複雜度防止過擬合、在演算法層面內建對缺失值的分支處理邏輯，並透過區塊結構（Block structure）實現特徵層級的平行化運算以大幅提升訓練速度。(B)隨機森林基於 Bagging，XGBoost 基於 Boosting；(C)XGBoost 依然以決策樹為弱分類器；(D)批次正規化是深度學習的技術。",
        "ml_method": "XGBoost (eXtreme Gradient Boosting)",
        "ml_method_explanation": "XGBoost 是一種基於梯度提升框架的高效能整合學習演算法。它將多個弱分類器（通常是決策樹）串聯起來，每一棵新樹都在嘗試修正前一棵樹的預測殘差。與傳統的梯度提升演算法不同，XGBoost 在數學推導上使用了二階泰勒展開來逼近損失函數，並在目標函數中加入了懲罰樹葉節點數量與權重的正則化項。此外，它在系統工程上進行了大量優化，支持硬體層級的平行運算與快取感知，使其成為機器學習競賽中的常勝軍。",
        "examples": [
          "銀行利用 XGBoost 模型分析客戶的存款、消費紀錄與貸款歷史來預測違約機率。其內建處理缺失值的能力，讓銀行不需捨棄資料不齊全的新客戶樣本，並能給出高準確度的信用評分。",
          "線上零售商使用 XGBoost 分析海量的用戶點擊日誌與商品特徵，其平行化訓練的優勢讓演算法團隊每天都能快速利用最新資料更新推薦排序模型，提升使用者的購買轉化率。"
        ],
        "comparison": "XGBoost 屬於 Boosting（提升法）的代表，其核心思想是「從錯誤中學習」，後面的樹專門修正前面樹的失誤，因此預測準確率極高，但訓練容易過度擬合且難以完全平行化。相反地，隨機森林屬於 Bagging（裝袋法）的代表，其核心是「眾人智慧」，讓數百棵樹獨立成長並進行投票。隨機森林不容易過擬合且訓練速度快，適合做基準模型；而 XGBoost 透過引入正則化與系統優化，在兼顧防過擬合的同時榨出了極限效能，是表格型數據的王者。",
        "keywords": [
          "XGBoost",
          "梯度提升 (Gradient Boosting)",
          "正則化 (Regularization)",
          "平行化運算 (Parallel Computation)",
          "整合學習 (Ensemble Learning)"
        ],
        "extended_tech": [
          {
            "name": "LightGBM",
            "desc": "由微軟開發的另一款高效能梯度提升樹演算法。它採用了基於直方圖的決策樹算法與單邊梯度抽樣技術，在處理特徵維度極高、樣本數達百萬級別的海量資料時，其訓練速度與記憶體消耗表現甚至優於 XGBoost。"
          },
          {
            "name": "CatBoost",
            "desc": "由 Yandex 開發的梯度提升演算法，專門針對包含大量「類別型特徵（Categorical Features）」的資料集進行了深度優化。開發者不需預先進行繁瑣的 One-Hot 編碼，模型便能自動且高效地處理字串型態的分類特徵，廣泛應用於行銷推薦系統。"
          },
          {
            "name": "Stacking 堆疊法",
            "desc": "一種更高階的整合學習技巧，將 XGBoost、隨機森林、神經網路等多種不同底層邏輯的強模型預測結果，作為一個「超級元模型（Meta-Model）」的輸入特徵來進行最終預測，是 Kaggle 競賽中突破準確率極限的常見殺手鐧。"
          }
        ],
        "terminology": [
          "Weak Learner",
          "Boosting",
          "Taylor Expansion",
          "Loss Function",
          "Missing Value Handling"
        ]
      },
      {
        "id": 19,
        "question": "某醫療機構開發疾病早期偵測模型，正樣本（確診病例）僅佔 3%。在模型訓練與評估過程中，下列哪一種作法最不適合用於提升對少數類病例的預測能力？",
        "options": {
          "A": "使用 SMOTE 過採樣",
          "B": "調整類別權重",
          "C": "使用準確率（Accuracy）作為評估指標",
          "D": "欠採樣多數類(Undersampling the majority class)"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。當資料集面臨極端類別不平衡（如正樣本僅 3%）時，使用「準確率（Accuracy）」作為評估指標是非常危險且不適合的。因為模型只要盲目猜測所有病例皆為「未確診（負樣本）」，就能輕易達到 97% 的高準確率，但卻完全喪失了偵測確診病例的能力。應改用 Precision、Recall、F1-score 或 AUC。選項(A)、(B)、(D)皆是機器學習中常通用於處理類別不平衡、提升少數類預測能力的有效策略。",
        "ml_method": "不平衡資料集處理 (Imbalanced Data Handling)",
        "ml_method_explanation": "在真實世界的機器學習應用中，目標類別的分佈往往是不平衡的，例如罕見疾病、信用卡盜刷等，這會導致模型學習重心嚴重偏向多數類。為了改善此問題，資料科學家通常會從資料層面與演算法層面著手。資料層面包含增加少數類樣本的「過採樣（如 SMOTE 演算法生成合成資料）」或減少多數類樣本的「欠採樣」。演算法層面則包含在損失函數中賦予少數類別更高的權重（Class Weight），迫使模型更重視少數類的預測錯誤。",
        "examples": [
          "製造業在訓練 AI 檢測晶片瑕疵時，由於良品率高達 99.9%，工程師會透過調整模型的類別權重，讓 AI 如果漏抓一顆瑕疵晶片，就會受到比誤判良品大上百倍的懲罰。",
          "防毒軟體公司在偵測新型惡意程式時，利用 SMOTE 技術生成與已知惡意程式特徵相似的人工樣本，豐富了原本稀缺的少數類訓練資料，有效提升了模型對變種病毒的辨識能力。"
        ],
        "comparison": "在面對不平衡資料集時，從「資料面」處理的 SMOTE（過採樣）與從「演算法面」處理的類別權重調整是最常被比較的兩種策略。SMOTE 透過插值法無中生有創造出新的少數類特徵樣本，這賦予模型更豐富的邊界學習資訊，但代價是訓練時間增加與潛在的雜訊干擾。調整類別權重則是直接修改損失函數，讓演算法為錯判少數類付出慘痛代價，這不需更動原始資料結構，執行速度快，是醫療確診或金融防詐場景下最直接暴力的改善方案。",
        "keywords": [
          "不平衡資料集 (Imbalanced Dataset)",
          "過採樣 (Oversampling)",
          "欠採樣 (Undersampling)",
          "SMOTE 演算法",
          "類別權重 (Class Weight)"
        ],
        "extended_tech": [
          {
            "name": "SMOTE 演算法 (Synthetic Minority Over-sampling Technique)",
            "desc": "為了解決少數類樣本稀缺的問題，SMOTE 會找出少數類樣本在特徵空間中的 K 個最近鄰居，並在它們的連線上隨機插值，合成出全新的少數類人工樣本。這比單純複製舊樣本更能有效避免模型發生過度擬合現象。"
          },
          {
            "name": "Focal Loss 損失函數",
            "desc": "一種專為極度不平衡分類任務設計的進階損失函數，最初應用於 RetinaNet 物件偵測模型。它會自動降低容易分類的背景多數樣本的損失權重，強迫深度神經網路將學習焦點完全集中在那些數量稀少、難以區分的關鍵少數目標上。"
          },
          {
            "name": "異常偵測架構 (Anomaly Detection formulation)",
            "desc": "當正樣本數量趨近於零或特徵極不穩定時（如零日攻擊防護），乾脆放棄二元分類架構。改為只使用大量正常的「負樣本」訓練 One-Class SVM 或 Autoencoder，只要新資料的特徵分佈偏離正常模型，即警報為異常。"
          }
        ],
        "terminology": [
          "Class Imbalance",
          "Accuracy Paradox",
          "Resampling",
          "Cost-sensitive Learning",
          "Minority Class"
        ]
      },
      {
        "id": 20,
        "question": "某電子商務公司為開發商品評論情感分析模型，希望模型能捕捉評論中不同特徵之間的關聯影響，例如「商品價格」與「顧客滿意度」的互動效果。下列哪一種特徵工程設計方式最適合用於建立互動特徵（Interaction Features）？",
        "options": {
          "A": "將單一特徵取平方",
          "B": "對所有特徵進行對數轉換",
          "C": "將兩個或多個特徵進行乘積或交互組合",
          "D": "對特徵進行標準化"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。互動特徵（Interaction Features）的目的是讓線性模型或淺層模型能夠捕捉到變數之間的非線性組合效應。實務上最常見的做法是將兩個特徵相乘或進行交互組合（例如：價格 × 滿意度），藉此產生一個全新的特徵提供給模型學習。(A)取平方只能捕捉單一特徵的非線性效應；(B)對數轉換用於處理右偏分佈；(D)標準化是為了統一特徵尺度，三者皆無法表達特徵之間的互動影響。",
        "ml_method": "特徵交互作用 (Feature Interaction)",
        "ml_method_explanation": "特徵交互作用是特徵工程中的一種進階技巧，用於發掘並量化兩個或多個特徵合併在一起時對預測結果產生的綜合影響力。在許多真實情境中，特徵的影響並非獨立存在，例如「體重」與「身高」結合成的「BMI 指數」對健康的預測力遠大於單獨考量兩者。透過人為地建立特徵乘積（數值特徵）或交叉組合（類別特徵），可以賦予簡單的線性機器學習模型捕捉複雜非線性關係的能力，有效提升模型的預測表現。",
        "examples": [
          "影音平台在推薦電影時，會建立使用者年齡段與電影類型的互動特徵（如「20-29歲_科幻片」），幫助模型精準捕捉特定族群對特定類型內容的強烈偏好。",
          "保險公司評估車險費率時，將「駕駛人年齡」與「車輛馬力」相乘建立互動特徵，因為數據顯示年輕駕駛若駕駛大馬力跑車，其肇事風險會呈現乘數效應的飆升。"
        ],
        "comparison": "在特徵工程中，「互動特徵」是針對多個變數之間的非線性組合，例如「年齡」與「性別」的交叉組合，主要用於提升簡單模型（如邏輯迴歸）對複雜關係的捕捉能力。這與「特徵轉換（如取對數或平方）」完全不同，特徵轉換是針對「單一」特徵進行數學變換以符合常態分佈假設或消除右偏尾巴。值得一提的是，現代深度神經網路或梯度提升樹（GBDT）在訓練過程中已內建了自動挖掘特徵交互作用的能力，因此人工設計的必要性已不如以往。",
        "keywords": [
          "特徵交互作用 (Feature Interaction)",
          "特徵工程 (Feature Engineering)",
          "非線性關係 (Non-linear Relationship)",
          "特徵組合 (Feature Crossing)",
          "乘積特徵 (Multiplicative Features)"
        ],
        "extended_tech": [
          {
            "name": "多項式特徵展開 (Polynomial Features)",
            "desc": "在線性模型中，自動將現有的所有特徵進行高次方的乘積組合（如包含 A平方、B平方以及 A乘B）。這是一種快速暴力擴充特徵維度以逼近複雜非線性邊界的方法，常應用於基礎的線性或邏輯迴歸分析中。"
          },
          {
            "name": "因子分解機 (Factorization Machines, FM)",
            "desc": "專為處理極度稀疏資料（如點擊率預測中的用戶ID與商品ID）而設計的演算法。它透過引入隱變量向量，能自動且高效地計算出所有特徵之間的二階交互作用，是現代推薦系統與計算廣告學的基石。"
          },
          {
            "name": "Embedding 嵌入技術",
            "desc": "在深度學習中，將原本高維稀疏的類別型特徵（如上百萬種商品）轉換為低維稠密的實數向量。這種連續的向量空間能自然地隱含特徵之間的語意關聯與相似性互動，是 NLP 詞向量與影音推薦系統的核心。"
          }
        ],
        "terminology": [
          "Feature Engineering",
          "Cross Feature",
          "Non-linearity",
          "Dimensionality Expansion",
          "Main Effect"
        ]
      },
      {
        "id": 21,
        "question": "某語音辨識系統開發團隊採用 Transformer 架構，為了讓模型能同時理解語音片段中的發音特徵、語速變化與語意脈絡等多層次資訊，團隊在設計中導入了多頭注意力（Multi-head Attention）機制。請問下列何者為此機制的主要優點？",
        "options": {
          "A": "減少模型參數量以降低訓練成本",
          "B": "加速整體注意力計算過程",
          "C": "從不同表示子空間（Representation Subspaces）同時捕捉多樣化關聯資訊",
          "D": "避免梯度消失（Gradient Vanishing）問題"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。Transformer 模型中的多頭注意力（Multi-head Attention）機制，是將原始特徵投影到多個不同的子空間中並行計算注意力，最後再將結果拼接。這種設計允許模型在同一個時間點，由不同的「頭（Head）」分別專注於序列中的不同特徵（例如一個頭專注文法結構、另一個頭專注情緒語意），從而捕捉多樣化的關聯資訊。(A)多頭機制並未減少參數；(B)平行計算雖快，但運算量仍大；(D)避免梯度消失主要是殘差連接（Residual Connection）的功勞。",
        "ml_method": "多頭注意力機制 (Multi-head Attention)",
        "ml_method_explanation": "多頭注意力機制是 Transformer 深度學習架構的靈魂元件。傳統的自注意力機制會計算序列中每個元素與其他元素的關聯權重，但如果只有單一注意力焦點，模型很容易只偏向學習某一種強烈特徵。多頭注意力透過將輸入資料進行多次獨立的線性投影，並行地執行多組自注意力計算（即多個 Head）。這賦予了模型同時從多個維度與表徵子空間中擷取上下文資訊的能力，極大化了模型理解複雜上下文脈絡的深度。",
        "examples": [
          "在機器翻譯任務中，Transformer 的多頭注意力機制可以讓其中一個 Head 負責追蹤名詞與代名詞的指代關係，另一個 Head 負責捕捉動詞的時態變化，最終產出精確的翻譯結果。",
          "AI 寫作輔助軟體分析長篇合約文件時，多頭注意力能同時關注重點條款的財務數字關聯性以及免責聲明的法律語氣一致性，有效審查文件中的潛在風險。"
        ],
        "comparison": "在捕捉序列資料關聯性時，「多頭注意力機制」與傳統的「遞迴神經網路(RNN)」有著根本的差異。RNN 必須嚴格按照時間順序一步步讀取資料，難以長時間保留記憶，且無法平行運算。多頭注意力機制則打破了時間順序的限制，能夠「同時」檢視整個句子中所有詞彙之間的雙向關聯，並且透過多個獨立的「Head」分別關注不同的語法或語意特徵。這種全局視野與極致並行化的設計，奠定了 Transformer 在大型語言模型（如 ChatGPT）中的霸主地位。",
        "keywords": [
          "多頭注意力 (Multi-head Attention)",
          "Transformer 模型",
          "自注意力機制 (Self-Attention)",
          "表示子空間 (Representation Subspaces)",
          "上下文關聯 (Contextual Dependencies)"
        ],
        "extended_tech": [
          {
            "name": "自注意力機制 (Self-Attention)",
            "desc": "多頭注意力的基礎單元。其核心運算是透過 Query, Key, Value 三個矩陣的內積，計算出輸入序列中任何兩個元素之間的關聯性權重。這讓模型能精準捕捉到「銀行」一詞在不同語境下到底是金融機構還是河岸的意思。"
          },
          {
            "name": "掩碼注意力機制 (Masked Attention)",
            "desc": "主要應用於 Transformer 的解碼器（Decoder）端。在訓練文字生成模型時，這項機制會強行遮蔽掉未來的詞彙，強迫模型只能依賴「過去的語境」來預測下一個字，確保模型不會因為作弊偷看答案而失去預測能力。"
          },
          {
            "name": "稀疏注意力機制 (Sparse Attention)",
            "desc": "由於標準注意力機制的運算複雜度與序列長度的平方成正比，處理超長文本（如整本書）會消耗驚人記憶體。稀疏注意力透過限制每個 Token 只與局部相鄰或特定跨度的 Token 計算關聯，大幅降低運算成本，是現代超長文本模型的核心技術。"
          }
        ],
        "terminology": [
          "Query, Key, Value",
          "Self-Attention",
          "Transformer Architecture",
          "Representation Subspace",
          "Sequence-to-Sequence"
        ]
      },
      {
        "id": 22,
        "question": "某電商平台希望預測顧客是否會購買特定商品。系統蒐集顧客的瀏覽紀錄、停留時間、商品類別偏好與過去購買行為，並以此推估「在觀察到這些行為特徵的情況下，該顧客會購買的機率」。若模型採用貝氏定理（Bayes’Theorem）進行推論，下列敘述何者最符合其核心運作機制？",
        "options": {
          "A": "根據歷史樣本自動分群，找出行為相似的顧客群",
          "B": "以條件機率方式計算顧客屬於「會購買」或「不會購買」的分類機率",
          "C": "以最小平方誤差（Mean Squared Error）為損失函數，預測顧客的購買金額",
          "D": "依據回饋信號（Feedback Signal）透過強化學習（Reinforcement Learning）動態調整推薦策略"
        },
        "answer": "B",
        "explanation": "本題正確答案為(B)。貝氏定理（Bayes' Theorem）與單純貝氏分類器（Naive Bayes）的核心是基於機率論，透過已知的先驗機率與觀察到的特徵條件機率，來計算出給定特徵下屬於某個類別的後驗機率（如給定瀏覽紀錄下，推估會購買的機率）。(A)為分群演算法（如K-Means）的特徵；(C)為線性迴歸模型預測連續數值的特性；(D)則描述了強化學習機制的互動過程，皆非貝氏定理的運作機制。",
        "ml_method": "貝氏定理與單純貝氏分類 (Bayes' Theorem & Naive Bayes)",
        "ml_method_explanation": "貝氏定理是機率統計領域的重要基石，它描述了在已知部分相關條件的情況下，某個事件發生的機率。單純貝氏分類器便是建構於此定理之上，其假設特徵之間彼此完全獨立（這就是「單純」的由來）。在分類任務中，模型會先從歷史資料學習各類別的先驗機率以及各特徵在不同類別下的條件機率。當有新樣本輸入時，模型便能運用貝氏公式反向推導出該樣本屬於各目標類別的後驗機率，並選擇機率最高者作為預測結果。",
        "examples": [
          "電子郵件服務商利用單純貝氏分類器分析信件內容。模型透過計算信件中同時出現「免費」、「抽獎」與「限時」等關鍵字的條件機率，精準判斷該信件為垃圾郵件的後驗機率。",
          "醫療診斷系統利用貝氏定理，結合某種疾病在當地的流行率（先驗機率），以及病患出現發燒、咳嗽且篩檢呈陽性的條件機率，推估該病患確實染病的最終機率，以協助醫師確診。"
        ],
        "comparison": "單純貝氏分類器 (Naive Bayes) 與邏輯迴歸 (Logistic Regression) 都是處理二元或多元分類的經典演算法。邏輯迴歸屬於判別模型，其目標是直接學習出一條能將類別分開的最佳決策邊界，適合處理特徵之間存在關聯的複雜預測。相反地，單純貝氏屬於生成模型，它是基於純粹的機率統計與特徵互相獨立的強烈假設來運作。雖然在真實世界中特徵很少絕對獨立，但單純貝氏在處理海量特徵（如文本中的萬千詞彙）時展現了驚人的運算速度，是垃圾郵件攔截的經典王者。",
        "keywords": [
          "貝氏定理 (Bayes' Theorem)",
          "單純貝氏分類器 (Naive Bayes)",
          "先驗機率 (Prior Probability)",
          "後驗機率 (Posterior Probability)",
          "條件機率 (Conditional Probability)"
        ],
        "extended_tech": [
          {
            "name": "貝氏網路 (Bayesian Belief Network, BBN)",
            "desc": "放寬了單純貝氏「特徵必須完全獨立」的嚴苛假設。它利用有向無環圖（DAG）來直觀表達多個變數之間的因果與條件依賴關係，非常適合用於醫療症狀推導與工業設備故障的複雜根因分析。"
          },
          {
            "name": "高斯單純貝氏 (Gaussian Naive Bayes)",
            "desc": "標準單純貝氏的變體，專門用來處理連續型數值特徵。它假設這些連續特徵的值在每個類別下都服從常態分佈（高斯分佈），進而計算機率，廣泛應用於含有大量實數感測器資料的預測分類任務。"
          },
          {
            "name": "隱馬可夫模型 (Hidden Markov Model, HMM)",
            "desc": "基於貝氏理論延伸出的時間序列機率模型。它假設系統包含不可見的隱藏狀態，並透過觀察到的序列反推最可能的隱藏狀態路徑。在深度學習崛起前，HMM 是語音辨識與自然語言詞性標註的絕對主流技術。"
          }
        ],
        "terminology": [
          "Prior Probability",
          "Posterior Probability",
          "Conditional Probability",
          "Generative Model",
          "Feature Independence"
        ]
      },
      {
        "id": 23,
        "question": "一家再生能源公司希望預測未來三個月太陽能發電量的波動範圍。由於氣候條件具有高度隨機性，且輸入變數（如日照時數、雲量、溫度）之間存在不確定關係，工程團隊決定以隨機抽樣方式模擬多種可能情境，以估算整體發電量的機率分佈與風險區間。請問此時所採用的技術最符合下列哪一種方法？",
        "options": {
          "A": "蒙地卡羅方法（Monte Carlo Method）",
          "B": "K-means 聚類（K-means Clustering）",
          "C": "支持向量迴歸（Support Vector Regression, SVR）",
          "D": "特徵選取（Feature Selection）"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。蒙地卡羅方法（Monte Carlo Method）是一種透過大量隨機抽樣來近似解決複雜數學或物理問題的計算技術，特別適合處理具有高度不確定性、隨機變數多且難以用解析解求得的問題，如估算機率分佈與風險區間。(B)K-means是用於資料分群；(C)SVR是基於支持向量機的確定性迴歸模型；(D)特徵選取是挑選重要變數的過程。三者皆非基於隨機抽樣模擬風險的演算法。",
        "ml_method": "蒙地卡羅方法 (Monte Carlo Method)",
        "ml_method_explanation": "蒙地卡羅方法是一種以機率統計理論為指導的一類非常重要的數值計算方法。當系統過於複雜，存在許多交互影響的隨機變數，導致無法建立精確的數學模型求解時，蒙地卡羅方法會根據變數的機率分佈，進行成千上萬次的亂數隨機抽樣與情境模擬。根據大數法則，隨著模擬次數的增加，所有隨機情境產生的統計結果平均值將會收斂至系統的真實期望值，為複雜的系統動態與風險評估提供可靠的量化依據。",
        "examples": [
          "投資銀行在進行資產風險控管時，會使用蒙地卡羅模擬法，隨機產生未來股市、匯率與利率的上萬種可能走勢，藉此精準計算投資組合在極端極端市場情況下的最大可能損失（VaR）。",
          "半導體製造廠在評估新製程的良率時，會利用蒙地卡羅方法隨機模擬各道光刻與蝕刻機台的微小參數誤差，預測最終晶片成品的整體良率分佈區間，以提早制定優化對策。"
        ],
        "comparison": "在處理不確定性問題時，「蒙地卡羅方法」與傳統的機器學習「迴歸預測（如 SVR 或線性迴歸）」有著截然不同的切入點。迴歸模型致力於基於歷史資料給出一個「精確的點預測值（如明天發電量為100萬度）」，這在確定性高的場景下非常有用。然而，蒙地卡羅方法的核心在於風險控管，它並不追求單一解答，而是透過成千上萬次的亂數模擬，給出整個事件發生的「機率分佈與區間（如發電量有95%機率落在80至120萬度之間）」，這在金融風險分析或大型工程專案評估中更具實用價值。",
        "keywords": [
          "蒙地卡羅方法 (Monte Carlo Method)",
          "隨機抽樣 (Random Sampling)",
          "風險區間 (Risk Interval)",
          "情境模擬 (Scenario Simulation)",
          "機率分佈 (Probability Distribution)"
        ],
        "extended_tech": [
          {
            "name": "馬可夫鏈蒙地卡羅法 (Markov Chain Monte Carlo, MCMC)",
            "desc": "蒙地卡羅方法的進階技術。當高維度機率分佈極度複雜，無法直接進行簡單隨機抽樣時，MCMC 透過建立馬可夫鏈，讓採樣過程能智慧地朝著高機率密度區域游走。這是現代貝氏統計推論與複雜機器學習模型推估的核心運算骨幹。"
          },
          {
            "name": "蒙地卡羅樹搜尋 (Monte Carlo Tree Search, MCTS)",
            "desc": "結合了樹狀結構搜尋與隨機模擬的決策演算法。在面臨龐大且無法窮舉的決策空間時（如圍棋），它會隨機模擬未來的數百步棋局來評估當下某一步的勝率。這正是驅動 AlphaGo 擊敗人類世界冠軍的關鍵大腦核心。"
          },
          {
            "name": "自助抽樣法 (Bootstrapping)",
            "desc": "一種與蒙地卡羅概念相似的重抽樣統計技術。它從有限的原始資料集中進行「有放回」的隨機抽樣，產生出多組新的模擬資料集。這不僅用於統計推論估算信賴區間，也是隨機森林等 Bagging 整合機器學習演算法的基石。"
          }
        ],
        "terminology": [
          "Law of Large Numbers",
          "Random Variables",
          "Risk Assessment",
          "Stochastic Process",
          "Numerical Integration"
        ]
      },
      {
        "id": 24,
        "question": "某房地產公司利用多元迴歸模型（Multiple Regression Model）預測房價，並繪製殘差圖（Residual Plot）檢查模型品質。結果顯示部分資料點的殘差極大，且在高價區樣本中出現系統性彎曲分佈現象。根據此觀察，下列何者為最可能的正確解釋？",
        "options": {
          "A": "模型過度擬合（Overfitting），導致在訓練資料上表現過好、泛化能力不足",
          "B": "模型特徵數量不足，導致欠擬合（Underfitting）",
          "C": "模型存在異常值（Outlier）或非線性關係，違反迴歸假設",
          "D": "殘差圖呈現隨機分佈，表示模型已完全符合所有假設"
        },
        "answer": "C",
        "explanation": "本題正確答案為(C)。在評估迴歸模型時，殘差圖（預測值與殘差的散佈圖）是極重要的診斷工具。一個理想的線性迴歸模型，其殘差應呈現均勻、無規律的隨機分佈。若殘差圖出現系統性的彎曲分佈現象，強烈暗示資料之間存在「非線性關係」，而模型卻硬用線性方程去擬合。部分極大殘差點則表示資料中存在極端異常值（Outlier）。(A)過度擬合在訓練集的殘差圖會很完美；(D)題目已說明殘差並非隨機分佈。",
        "ml_method": "殘差分析 (Residual Analysis)",
        "ml_method_explanation": "殘差分析是統計與機器學習中檢驗迴歸模型假設是否成立的重要診斷步驟。殘差指的是真實觀察值與模型預測值之間的差距。透過繪製殘差圖（如殘差對預測值的散佈圖），分析師可以直觀地檢查幾個關鍵假設：誤差項的變異數是否具備同質性（不能呈喇叭狀發散）、模型是否遺漏了重要的非線性關係（殘差呈微笑或倒 U 型曲線）、以及資料集中是否潛藏著會嚴重拉偏模型權重的極端異常值。",
        "examples": [
          "行銷分析師利用線性迴歸預測廣告預算對營收的影響，在檢查殘差圖時發現 U 型分佈，這提示分析師廣告效益存在邊際遞減效應（非線性），應將預算取對數後再重新建模。",
          "氣象局利用迴歸模型預測氣溫，發現冬季某幾天的預測殘差極大，經檢視後發現是因為這些日子發生了罕見的寒流（異常值）。將異常值排除或引入新變數後，模型的預測穩定度大幅提升。"
        ],
        "comparison": "在模型評估環節中，「殘差分析」與常見的「效能指標（如 R平方或 RMSE）」提供了不同維度的洞察。R平方或 RMSE 只能給出一個綜合評分，告訴你模型預測得「準不準」，但無法告訴你「為什麼不準」。相對地，殘差分析就像是模型的 X光片，透過檢視殘差分佈圖的形狀（如喇叭狀擴散代表變異數不齊次，U型代表遺漏了非線性特徵），能明確指引資料科學家接下來應該進行特徵轉換、剔除異常值，或是改用更複雜的非線性演算法。",
        "keywords": [
          "殘差分析 (Residual Analysis)",
          "多元迴歸 (Multiple Regression)",
          "非線性關係 (Non-linear Relationship)",
          "異常值 (Outlier)",
          "變異數同質性 (Homoscedasticity)"
        ],
        "extended_tech": [
          {
            "name": "Box-Cox 轉換 (Box-Cox Transformation)",
            "desc": "當殘差分析顯示模型的誤差項不符合常態分佈或變異數不齊次時，這是一套強大的特徵轉換工具。它能自動尋找最佳的次方參數，將非態分佈的資料拉回常態，從而滿足線性迴歸的嚴格統計假設，顯著提升模型穩定度。"
          },
          {
            "name": "廣義線性模型 (Generalized Linear Model, GLM)",
            "desc": "傳統線性迴歸的終極升級版。當預測目標的殘差明顯不符合常態分佈（例如預測網頁點擊次數這種泊松分佈，或預測機率這種二項式分佈）時，GLM 透過引入連結函數（Link Function），成功將線性框架擴展至各種非態分佈的商業場景中。"
          },
          {
            "name": "庫克距離 (Cook's Distance)",
            "desc": "在迴歸分析中專門用來量化並尋找「高影響力異常點（Influential Points）」的進階統計指標。它能計算出如果將某個特定資料點從訓練集中刪除，會對整個迴歸方程式的權重參數造成多麼劇烈的改變，是資料清洗環節的利器。"
          }
        ],
        "terminology": [
          "Residual Plot",
          "Heteroscedasticity",
          "Linearity Assumption",
          "Outlier Detection",
          "Ordinary Least Squares (OLS)"
        ]
      },
      {
        "id": 25,
        "question": "某金融機構正在建立傳統信用評分卡模型，採用邏輯迴歸（Logistic Regression）作為建模方法，並依循監理機關建議的標準化流程進行模型開發。下列哪一項不是傳統信用評分卡模型開發流程中的常見步驟？",
        "options": {
          "A": "使用生成式模型進行特徵學習",
          "B": "進行特徵選擇與多重共線性（Multicollinearity）分析",
          "C": "進行分箱（Binning）與資訊值（Information Value, IV）檢定",
          "D": "使用樣本穩定性指標（Population Stability Index, PSI）檢驗模型穩定性"
        },
        "answer": "A",
        "explanation": "本題正確答案為(A)。傳統的信用評分卡流程極度強調模型的透明度與可解釋性，以滿足金融監理法規的要求，因此通常採用羅吉斯迴歸（Logistic Regression）結合嚴謹的統計流程。特徵學習（Feature Learning）通常是由深度學習或生成式模型自行處理的「黑盒子」特徵萃取方式，這在傳統評分卡開發中是不被允許且不常見的。而(B)共線性分析、(C)特徵分箱與 IV 值計算、(D)PSI 穩定性檢定，皆為標準的評分卡建立與監控步驟。",
        "ml_method": "信用評分卡模型 (Credit Scorecard Modeling)",
        "ml_method_explanation": "信用評分卡模型是金融業歷史最悠久、應用最廣泛的風險評估工具。考量到金融法規對於演算法可解釋性與公平性的嚴格要求，評分卡的核心演算法通常採用透明度極高的邏輯迴歸。其標準開發流程包含：利用分箱（Binning）將連續變數離散化，計算 WOE (Weight of Evidence) 進行變數轉換，利用 IV (Information Value) 篩選預測力強的變數，最後建立計分卡，並透過 PSI 指標監控模型上線後的樣本群體偏移狀況。",
        "examples": [
          "信用卡中心在審核民眾發卡申請時，背後的評分卡模型會根據申請者的年齡段分箱、職業別WOE權重以及聯徵中心的信用歷史，計算出一個綜合信用分數，並依據門檻決定是否核卡。",
          "數位銀行為了符合金管會的稽核要求，不採用最新的黑盒子深度學習演算法，而是利用邏輯迴歸建立信用評分卡，讓客服人員能夠明確告知客戶貸款遭拒是因為「近期負債比分數過低」。"
        ],
        "comparison": "信用評分卡模型與現代機器學習（如 XGBoost 或神經網路）在金融風控領域中各自佔據重要地位。現代機器學習依賴複雜的決策樹交疊或多層神經元來壓榨出最高的預測準確率，非常適合用於防範即時信用卡盜刷這類不需要向客戶解釋原因的場景。相對地，信用評分卡堅守簡單的邏輯迴歸與 WOE 特徵轉換，雖然準確率稍低，但其計分邏輯清晰透明，符合金融法規要求，能向客戶明確解釋拒絕放款的原因，因此在放貸審查等核心業務中無可取代。",
        "keywords": [
          "信用評分卡 (Credit Scorecard)",
          "邏輯迴歸 (Logistic Regression)",
          "資訊值 (Information Value, IV)",
          "證據權重 (Weight of Evidence, WOE)",
          "樣本穩定性指標 (Population Stability Index, PSI)"
        ],
        "extended_tech": [
          {
            "name": "證據權重轉換 (Weight of Evidence, WOE)",
            "desc": "評分卡模型中專屬的特徵轉換技術。它將連續變數分箱後，計算每個箱內好壞客戶比例的對數值。這不僅能處理遺漏值，還能將原本與目標呈非線性關係的特徵，轉換為與對數勝率呈完美線性關係的形式，極大化了邏輯迴歸的預測威力。"
          },
          {
            "name": "樣本穩定性指標 (Population Stability Index, PSI)",
            "desc": "用於監控模型上線後健康度的核心指標。它透過比較模型訓練時的資料分佈與上線營運時的實際資料分佈差異，來判斷客群是否發生了嚴重偏移。當 PSI 數值飆高，即代表外在經濟環境已改變，金融機構必須立刻啟動模型重訓流程。"
          },
          {
            "name": "多重共線性檢測 (VIF Analysis)",
            "desc": "在建立線性或邏輯迴歸模型前必經的統計考驗。若特徵之間高度相關（如年收入與繳稅額），會導致模型權重極度不穩定，失去商業解釋意義。透過計算變異數膨脹因子（VIF），分析師能精準剔除重疊的特徵，確保評分卡規則的穩健性。"
          }
        ],
        "terminology": [
          "Binning",
          "Weight of Evidence (WOE)",
          "Information Value (IV)",
          "Multicollinearity",
          "Logistic Regression"
        ]
      },
      {
        "id": 26,
        "question": "在防止監督式學習模型過擬合（Overfitting）時，下列哪一種策略不屬於降低模型複雜度或限制學習能力的作法？",
        "options": {
          "A": "採用 L1 或 L2 正則化",
          "B": "在訓練過程中使用 Dropout 技術",
          "C": "採取早期停止（Early Stopping）機制",
          "D": "擴增輸入特徵變數以提升模型表達能力"
        },
        "answer": "D",
        "explanation": "擴增輸入特徵變數會增加模型的複雜度與學習能力，進一步提高過擬合的風險，因此不屬於降低模型複雜度的策略。選項A正則化透過懲罰過大的權重來降低複雜度；選項B Dropout在訓練時隨機停用神經元，避免過度依賴特定特徵；選項C早期停止在驗證誤差不再下降時停止訓練。",
        "ml_method": "過擬合防止與正則化 (Overfitting Prevention)",
        "ml_method_explanation": "過擬合是指機器學習模型在訓練資料上表現極佳，但在未見過的測試資料上表現很差的現象。這通常是因為模型過於複雜，記住了訓練資料中的雜訊與特例。為了防止過擬合，我們常使用正則化（如L1、L2）、Dropout、早期停止等技術，這些方法的核心概念都是在「限制模型的學習能力」或「降低模型的複雜度」，強迫模型學習更具泛化能力（Generalization）的特徵，而非死背資料。",
        "examples": [
          "在醫療診斷系統中，模型可能因為過擬合而記住某家醫院特定儀器的浮水印，導致在其他醫院資料上表現不佳。透過加入Dropout或提前停止訓練，能讓模型專注於真實病理特徵。",
          "在自動駕駛的影像辨識中，若模型過度擬合於晴天資料，遇到雨天將無法正確辨識行人。正則化技術有助於提取更普遍強健的特徵，避免對特定環境條件過度依賴。"
        ],
        "comparison": "正則化與Dropout主要應用於深度學習與機器學習模型的訓練階段，透過降低模型複雜度來防止過擬合。與特徵擴增不同，特徵擴增（如多項式特徵）通常用於解決欠擬合問題，常見於需要捕捉複雜模式的數據分析場景中。正則化適用於高維度特徵的醫療預測，而Dropout則廣泛用於影像與自然語言處理。",
        "keywords": [
          "過擬合 (Overfitting)",
          "正則化 (Regularization)",
          "隨機失活 (Dropout)",
          "早期停止 (Early Stopping)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "Data Augmentation (資料擴增)",
            "desc": "在影像或語音處理中，透過旋轉、縮放、加入雜訊等方式人為增加訓練資料的多樣性，以減少過擬合風險。"
          },
          {
            "name": "Ensemble Learning (集成學習)",
            "desc": "將多個不同的基礎模型組合在一起，例如隨機森林或XGBoost，以降低單一模型的方差並提升整體預測穩定性。"
          },
          {
            "name": "Batch Normalization (批次標準化)",
            "desc": "在神經網路中對每一批次的數據進行標準化，不僅加速收斂，同時也具備輕微的正則化效果，降低過擬合。"
          }
        ],
        "terminology": [
          "L1 正則化 (L1 Regularization)",
          "L2 正則化 (L2 Regularization)",
          "泛化誤差 (Generalization Error)",
          "權重衰減 (Weight Decay)"
        ]
      },
      {
        "id": 27,
        "question": "某智慧製造團隊在開發瑕疵影像檢測模型時，發現使用線性激活函數（Activation Function）後，模型的訓練準確率長期停滯，懷疑模型無法學習到足夠複雜的特徵表達。若要改善此問題，下列哪一項調整方案最為合適？",
        "options": {
          "A": "增加卷積層（Convolutional Layer）數量，使網路更深以強化特徵提取",
          "B": "將輸入影像先進行灰階化處理，降低運算量",
          "C": "使用 Sigmoid 激活函數，以將輸出壓縮至[0,1]範圍",
          "D": "改用 ReLU（Rectified Linear Unit）激活函數，以引入非線性並提升模型表達能力"
        },
        "answer": "D",
        "explanation": "線性激活函數無法處理非線性問題，導致無論網路多深都等同於單層線性模型。改用 ReLU 激活函數可以引入非線性，大幅提升模型表達複雜特徵的能力。選項A增加卷積層若仍使用線性激活，依然無濟於事。選項C Sigmoid 容易產生梯度消失問題，在深層網路中不如 ReLU 適合。",
        "ml_method": "激活函數 (Activation Function)",
        "ml_method_explanation": "激活函數是神經網路中至關重要的元件，主要作用是為網路引入非線性特性。若沒有非線性激活函數，無論神經網路疊加多少層，其輸出始終是輸入的線性組合，無法解決複雜的非線性問題。ReLU（Rectified Linear Unit）是目前最常用的激活函數之一，其公式為 f(x) = max(0, x)，計算簡單且能有效緩解梯度消失問題，使深層神經網路更容易訓練並具備強大的特徵表達能力。",
        "examples": [
          "在語音辨識系統中，音訊特徵的變化高度非線性。若僅使用線性函數，系統無法區分相似發音。引入 ReLU 等非線性函數能讓模型學習到更複雜的聲學特徵，提升辨識準確率。",
          "應用於金融詐欺偵測的深度學習模型，異常交易行為間的關聯通常是非線性的。採用適當的非線性激活函數有助於捕捉隱含的詐欺模式，而非單純套用簡單的線性判斷規則。"
        ],
        "comparison": "ReLU 激活函數主要應用於深層神經網路的隱藏層，以引入非線性特徵並解決梯度消失問題。相對於 Sigmoid 函數通常應用於二元分類的輸出層，或是早期淺層網路。線性激活函數則常見於簡單的線性迴歸任務中。在智慧製造或影像辨識等需要提取複雜非線性特徵的場景，ReLU 及其變體是首選。",
        "keywords": [
          "激活函數 (Activation Function)",
          "非線性 (Non-linearity)",
          "梯度消失 (Vanishing Gradient)",
          "特徵表達 (Feature Representation)",
          "卷積神經網路 (CNN)"
        ],
        "extended_tech": [
          {
            "name": "Leaky ReLU (帶洩漏的線性整流)",
            "desc": "為了解決 ReLU 在負值區域梯度為零導致的神經元死亡問題，給予負值一個微小的斜率，維持模型學習能力。"
          },
          {
            "name": "GELU (高斯誤差線性單元)",
            "desc": "結合了 Dropout 的隨機性與 ReLU 的非線性，廣泛應用於 BERT、GPT 等先進的自然語言處理 Transformer 模型中。"
          },
          {
            "name": "Swish (Swish 激活函數)",
            "desc": "由 Google 提出的一種平滑且非單調的激活函數，在許多深層網路架構中表現出優於 ReLU 的預測準確率與收斂性。"
          }
        ],
        "terminology": [
          "梯度消失 (Vanishing Gradient)",
          "死神經元 (Dying ReLU)",
          "非線性映射 (Non-linear Mapping)",
          "前向傳播 (Forward Propagation)"
        ]
      },
      {
        "id": 28,
        "question": "一家零售電商公司希望建立顧客流失預測模型，用以判斷哪些會員可能在三個月內不再消費。團隊以去年會員資料進行訓練，並僅採用「曾經購買三次以上」的活躍顧客紀錄作為樣本。模型上線後，對整體會員進行預測時，發現模型對於新註冊會員與低消費會員的預測準確率明顯偏低。下列何者為造成此現象最可能的原因？",
        "options": {
          "A": "特徵設計未排除與會員忠誠度高度相關的變數，導致特徵偏差（Feature Bias）",
          "B": "標記（Label）由人工標註，導致標籤偏差（Label Bias）",
          "C": "訓練樣本僅涵蓋高活躍顧客，造成取樣偏差（Sampling Bias）",
          "D": "模型未進行超參數調整，導致過擬合（Overfitting）"
        },
        "answer": "C",
        "explanation": "由於模型訓練時僅使用了「曾經購買三次以上」的高活躍顧客資料，這些樣本無法代表整體會員群體。當模型應用於新註冊或低消費會員時，因為沒有學習過這類特徵，導致預測不準，這是典型的取樣偏差。其他選項與題目描述的樣本篩選行為關聯性較低。",
        "ml_method": "取樣偏差 (Sampling Bias)",
        "ml_method_explanation": "取樣偏差發生在收集資料進行訓練時，所選取的樣本無法真實代表母體分佈的狀況。在機器學習中，模型只能學到訓練資料所包含的特徵模式。如果訓練資料過度集中於某一特定群體（例如只有男性、只有高收入戶），模型在面對未曾見過的群體時，泛化能力會大幅下降，產生嚴重誤差。確保訓練資料的多樣性與代表性是建立穩健模型的前提。",
        "examples": [
          "在人力資源的履歷篩選 AI 系統中，如果訓練資料大部分來自某特定名校畢業的員工履歷，系統可能會產生取樣偏差，進而自動過濾掉其他同樣優秀但非名校出身的求職者。",
          "在臉部辨識系統中，若訓練用的影像資料多數為特定種族或膚色的人群，系統在辨識其他種族時準確率會大幅降低，這不僅是技術瑕疵，更可能引發嚴重的公平性問題。"
        ],
        "comparison": "取樣偏差常見於資料收集階段，當訓練數據僅涵蓋特定群體（如高活躍顧客）時發生，導致模型在其他群體預測失準。相較於特徵偏差（特徵工程階段）與標籤偏差（人工標註階段），取樣偏差直接影響模型的泛化邊界。在金融信用評分、零售推薦系統等業務中，確保樣本多樣性與真實母體分佈一致是防止此問題的關鍵。",
        "keywords": [
          "取樣偏差 (Sampling Bias)",
          "泛化能力 (Generalization)",
          "模型預測 (Model Prediction)",
          "特徵偏差 (Feature Bias)",
          "標籤偏差 (Label Bias)"
        ],
        "extended_tech": [
          {
            "name": "Stratified Sampling (分層抽樣)",
            "desc": "在資料收集與切分階段，確保各類別或各特徵群體的比例與母體一致，避免少數群體被忽略，提升模型全面性。"
          },
          {
            "name": "SMOTE (合成少數類過採樣技術)",
            "desc": "針對資料不平衡問題，透過演算法人工合成少數類別的樣本，使模型能更均勻地學習各類別特徵，常用於詐欺偵測。"
          },
          {
            "name": "Active Learning (主動學習)",
            "desc": "在標註資源有限的情況下，由演算法主動挑選對提升模型決策邊界最有幫助的樣本交由人工標註，減少偏差並降低成本。"
          }
        ],
        "terminology": [
          "資料不平衡 (Data Imbalance)",
          "母體分佈 (Population Distribution)",
          "選擇偏差 (Selection Bias)",
          "代表性樣本 (Representative Sample)"
        ]
      },
      {
        "id": 29,
        "question": "在工業設備故障預測專案中，模型訓練與超參數調整均依賴於一段歷史數據作為驗證集。然而，隨著設備運行環境與工況條件的變化，原有驗證集已無法充分反映現況，導致模型在實際部署後的預測準確率逐漸下降。下列哪一種策略最能有效提升模型在長期運行環境中的穩健性與泛化能力？",
        "options": {
          "A": "固定驗證集內容，並透過模型正則化技巧（如 L2 正則化）強化模型泛化",
          "B": "將全部歷史資料納入訓練，不使用驗證集，依靠早期停止（Early Stopping）控制訓練",
          "C": "簡化模型架構，減少模型參數數量以降低過擬合風險",
          "D": "採用時間序列交叉驗證（Time Series Cross Validation）或滑動視窗驗證（Rolling Window Validation）方法，動態更新驗證資料以適應時間演進"
        },
        "answer": "D",
        "explanation": "面對隨時間變化的資料（如設備隨時間老化或工況改變），固定的驗證集會失去代表性。採用時間序列交叉驗證或滑動視窗驗證，可以讓模型不斷利用最新一段時間的資料進行驗證與調整，使其適應資料分佈隨時間推移的現象（Concept Drift）。因此(D)為最佳解。",
        "ml_method": "概念飄移適應與滑動視窗驗證 (Concept Drift & Rolling Window Validation)",
        "ml_method_explanation": "在真實世界的應用中，資料的統計特性經常會隨著時間發生變化，這種現象稱為概念飄移（Concept Drift）。傳統機器學習假設訓練集與測試集來自分佈相同的母體，但在時間序列場景下這常被打破。滑動視窗驗證方法透過不斷使用最近的歷史資料作為訓練與驗證基礎，讓模型能夠動態捕捉最新的資料趨勢，從而保持長期預測的準確度與穩健性。",
        "examples": [
          "在股市預測模型中，金融市場的交易模式與投資人情緒會隨時間改變。若使用十年前的固定資料來驗證模型，將難以適應現今市場。透過滑動視窗動態更新資料，模型能更好地捕捉近期趨勢。",
          "電商平台的推薦系統，使用者的購物偏好會隨季節或流行趨勢迅速改變。利用時間序列交叉驗證，能夠持續評估模型在面對最新消費行為時的表現，適時進行模型再訓練。"
        ],
        "comparison": "滑動視窗驗證與時間序列交叉驗證專門應對具時間依賴性的資料，如感測器監控或金融市場數據。相對於傳統的 K-Fold 交叉驗證（假設數據獨立同分佈，適用於靜態影像或文本），時間序列驗證能有效捕捉概念飄移。在工業設備預測性維護中，隨時間更新驗證集是確保模型適應設備老化與環境變化的唯一可靠方法。",
        "keywords": [
          "概念飄移 (Concept Drift)",
          "滑動視窗驗證 (Rolling Window Validation)",
          "時間序列交叉驗證 (Time Series CV)",
          "泛化能力 (Generalization)",
          "穩健性 (Robustness)"
        ],
        "extended_tech": [
          {
            "name": "Online Learning (線上學習)",
            "desc": "模型在部署後能隨著新資料的流入持續進行小幅度的權重更新，無需重新訓練整個模型，適合高頻交易與即時推薦。"
          },
          {
            "name": "Domain Adaptation (領域自適應)",
            "desc": "將在一個環境（如模擬數據或舊工況）學到的知識，透過特徵對齊等技術遷移到另一個環境（如實際數據或新工況）中。"
          },
          {
            "name": "Continual Learning (持續學習)",
            "desc": "讓人工智慧模型能夠在學習新任務與新資料趨勢的同時，保留對舊有知識的記憶，避免發生災難性遺忘。"
          }
        ],
        "terminology": [
          "時間序列 (Time Series)",
          "概念飄移 (Concept Drift)",
          "資料洩漏 (Data Leakage)",
          "交叉驗證 (Cross-Validation)"
        ]
      },
      {
        "id": 30,
        "question": "某情感分析模型在英文資料集上取得 macro F1-score = 0.91。當該模型部署於西班牙文資料集時，F1-score 驟降至 0.58。下列哪一項解釋最合理，且與 F1-score 變化相關？",
        "options": {
          "A": "macro F1-score 本身波動性高，建議改用 micro-average F1-score 評估",
          "B": "模型在西班牙文語料上過度擬合，導致評估結果偏高",
          "C": "語言轉移造成召回率（Recall）下降，模型無法正確辨識關鍵情緒詞彙",
          "D": "以均方誤差（MSE）取代 F1-score 評估可獲得更準確的結果"
        },
        "answer": "C",
        "explanation": "模型在英文訓練而在西班牙文測試，面臨嚴重的領域跨越（Domain Shift）或語言轉移問題。由於未曾在西班牙文上訓練，模型無法辨識對應情緒詞，會導致漏判（False Negative增加），進而使召回率下降並連帶影響F1-score。這與指標本身無關，故(C)最合理。",
        "ml_method": "領域轉移 / 分佈偏移 (Domain Shift / Distribution Shift)",
        "ml_method_explanation": "領域轉移是指機器學習模型在訓練時所使用的資料分佈（源領域）與實際部署應用時所遇到的資料分佈（目標領域）存在顯著差異的現象。這種差異會導致模型在目標領域的預測效能大幅衰退。為了解決這類問題，通常需要進行領域自適應（Domain Adaptation）、遷移學習（Transfer Learning）或是針對新領域收集足夠的標註資料來重新微調（Fine-tune）模型。",
        "examples": [
          "在自駕車系統中，如果模型僅在加州晴天的影像上進行訓練，當部署到下著大雪的北歐城市時，由於環境影像特徵的巨大差異，辨識車輛與行人的能力會顯著降低。",
          "一個在專業醫學文獻上訓練的自然語言處理模型，當應用於分析一般民眾在社群媒體上的健康討論時，會因為大量口語化與不規範的用詞，導致實體辨識與情感分析的準確率大幅下降。"
        ],
        "comparison": "領域轉移主要發生在模型訓練環境與實際部署環境存在語言、文化或物理差異時。它與模型過擬合（模型在同一領域的測試集表現差）不同。領域轉移在跨國語言分析、自駕車不同城市部署等場景中非常常見，需要透過遷移學習或領域自適應技術解決，而非單純改變評估指標如 F1-score 或 MSE。",
        "keywords": [
          "領域轉移 (Domain Shift)",
          "召回率 (Recall)",
          "跨語言轉移 (Cross-lingual Transfer)",
          "泛化能力 (Generalization)",
          "F1 分數 (F1-score)"
        ],
        "extended_tech": [
          {
            "name": "Transfer Learning (遷移學習)",
            "desc": "利用在大型通用語料庫上訓練好的預訓練模型（如 BERT），針對特定語言或領域進行微調，大幅減少對目標領域資料的需求。"
          },
          {
            "name": "Domain Adaptation (領域自適應)",
            "desc": "透過演算法對齊來源領域（如英文）與目標領域（如西班牙文）的特徵分佈，使模型能跨領域保持穩定的預測能力。"
          },
          {
            "name": "Multilingual Models (多語系模型)",
            "desc": "在訓練初期即納入多種語言資料（如 mBERT 或 XLM-R），使模型具備跨語言的語意理解能力，適用於全球化業務部署。"
          }
        ],
        "terminology": [
          "領域轉移 (Domain Shift)",
          "分佈偏移 (Distribution Shift)",
          "微調 (Fine-tuning)",
          "跨領域評估 (Cross-domain Evaluation)"
        ]
      },
      {
        "id": 31,
        "question": "某能源公司利用歷史氣象與用電資料，開發長期電力需求預測模型，採用深度神經網路架構進行訓練。在訓練過程中，模型在訓練集上的損失值持續下降，但在驗證集上，損失在第 80 輪後開始波動，呈現週期性上升與下降。團隊懷疑模型受到季節性資料波動與隨機噪音影響，導致驗證損失難以穩定收斂。若要在此情境下合理運用早期停止法（Early Stopping）以確保模型具最佳泛化能力，下列哪一項策略最為適當？",
        "options": {
          "A": "直接根據訓練集損失最低點停止訓練，以確保模型充分擬合所有樣本",
          "B": "監控驗證集損失並設定適度的耐心值（Patience），在連續多輪未改善後再停止訓練",
          "C": "改以測試集損失作為早停依據，以提升模型最終評估一致性",
          "D": "將所有資料重新合併後訓練至收斂，避免因資料分割導致評估波動"
        },
        "answer": "B",
        "explanation": "當驗證集損失出現波動時，若耐心值（Patience）設得太小，模型可能會過早停止；若依賴訓練集損失則會過擬合。設定適度的 Patience 可以讓模型在波動期間有機會找到更好的泛化點。選項C將測試集用於決定早停會導致資料洩漏（Data Leakage）。",
        "ml_method": "早期停止 (Early Stopping)",
        "ml_method_explanation": "早期停止是一種簡單且廣泛應用於訓練迭代優化模型（如神經網路、梯度提升樹）的正則化技術。它的核心做法是在訓練過程中同時監控訓練集和獨立驗證集的誤差。當驗證集的誤差在連續若干輪（即耐心值 Patience）內不再下降，甚至開始上升時，系統便主動終止訓練，並保留之前在驗證集上表現最好的模型權重，從而有效防止模型過度擬合於訓練資料。",
        "examples": [
          "在訓練房價預測的神經網路時，隨著訓練輪數增加，雖然訓練誤差持續逼近零，但驗證誤差可能在第50輪後反彈。透過設定耐心值為10的早停機制，系統會自動在第60輪停止並取回第50輪的最佳模型。",
          "企業開發客訴文本分類系統，使用複雜的 Transformer 模型容易快速記住訓練文本。啟動早停機制能夠確保模型在學會捕捉核心情緒特徵後即時停止，避免學習到特定客戶的專有語氣雜訊。"
        ],
        "comparison": "早期停止法透過設定耐心值（Patience）來監控驗證集損失，是深度神經網路中最常見的正則化手段。與基於訓練集損失停止（容易過擬合）或使用測試集停止（導致資料洩漏）不同，它在模型訓練成本與泛化能力間取得平衡。廣泛應用於具有高隨機性與季節波動的能源預測、金融序列分析等容易產生震盪收斂的場景。",
        "keywords": [
          "早期停止 (Early Stopping)",
          "驗證集 (Validation Set)",
          "耐心值 (Patience)",
          "過擬合 (Overfitting)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "Learning Rate Decay (學習率衰減)",
            "desc": "在訓練過程中，當驗證損失不再下降時，自動降低優化器的學習率，幫助模型在最佳解附近進行更精細的收斂。"
          },
          {
            "name": "Model Checkpointing (模型檢查點)",
            "desc": "在訓練過程中，每當驗證集上的效能指標達到歷史新高時，自動儲存該回合的模型權重，確保訓練中斷或過擬合時能回復。"
          },
          {
            "name": "K-Fold Cross Validation (K折交叉驗證)",
            "desc": "搭配早停機制，對多個資料折疊進行驗證，最終採用各折模型的集成結果，進一步提升對時間序列或小數據集的預測穩定性。"
          }
        ],
        "terminology": [
          "耐心值 (Patience)",
          "資料洩漏 (Data Leakage)",
          "損失函數收斂 (Loss Convergence)",
          "模型檢查點 (Model Checkpoint)"
        ]
      },
      {
        "id": 32,
        "question": "某電信公司開發客戶流失預測模型，使用大量顧客行為特徵，例如通話時長、上網頻率、帳單金額、客服聯絡次數等。在訓練過程中，團隊發現部分特徵彼此高度相關，但同時也懷疑有些特徵對流失預測的貢獻度有限。若希望模型在避免過擬合（Overfitting）的同時，能自動篩選出較具代表性的特徵，採用下列哪一種方法最為合適？",
        "options": {
          "A": "使用早期停止法（Early Stopping）控制訓練回合數，避免過擬合（Overfitting）",
          "B": "同時移除多重共線性特徵並採用 L2 正則化（Ridge），以確保模型穩定收斂",
          "C": "僅使用 L2 正則化（Ridge），抑制所有權重幅度但保留全部特徵",
          "D": "採用 L1 正則化（Lasso），透過懲罰項使部分特徵係數縮為0"
        },
        "answer": "D",
        "explanation": "L1 正則化（Lasso）會在損失函數中加入權重絕對值之和的懲罰項，這會促使模型產生稀疏矩陣（Sparse Matrix），即將不重要或高度相關的冗餘特徵權重直接壓縮為零，從而達成自動特徵篩選的效果。相較之下，L2 正則化只會縮小權重，不會將其歸零。",
        "ml_method": "L1 正則化 / Lasso 迴歸 (L1 Regularization)",
        "ml_method_explanation": "L1 正則化是在機器學習模型的損失函數中加入權重係數絕對值的懲罰項。其數學特性會導致最佳化過程中，許多不重要特徵的權重被精確地壓縮至零，產生所謂的稀疏模型（Sparse Model）。這不僅能降低模型複雜度以防止過擬合，同時也具有內建特徵選擇（Feature Selection）的功能，對於處理具有大量冗餘或共線性變數的高維度資料特別有效。",
        "examples": [
          "在基因表現數據分析中，特徵（基因）數量動輒上萬，但真正與某特定疾病相關的基因只有少數幾個。使用 L1 正則化能夠自動將大量無關基因的權重歸零，幫助研究人員找出關鍵致病基因。",
          "銀行開發信用風險評分模型，收集了數百個客戶屬性變數。透過套用 L1 正則化的邏輯迴歸，模型能剔除許多冗餘變數（如高度相關的不同借款餘額），保留最具預測力的少數指標，提升模型可解釋性。"
        ],
        "comparison": "L1 正則化（Lasso）因其能產生稀疏矩陣的特性，特別適合用於特徵選擇與過濾冗餘變數；而 L2 正則化（Ridge）則傾向保留所有特徵但縮小權重，適合處理多重共線性但不想丟棄任何特徵的情境。在電信客戶流失預測、基因數據分析等高維度業務場景中，L1 正則化能有效簡化模型並提升業務可解釋性。",
        "keywords": [
          "L1 正則化 (L1 Regularization)",
          "特徵選擇 (Feature Selection)",
          "稀疏矩陣 (Sparse Matrix)",
          "多重共線性 (Multicollinearity)",
          "過擬合 (Overfitting)"
        ],
        "extended_tech": [
          {
            "name": "Elastic Net (彈性網正則化)",
            "desc": "結合了 L1 與 L2 正則化的優點，既能進行特徵選擇（L1），又能處理高度相關特徵群的群體效應（L2），模型更加穩健。"
          },
          {
            "name": "Tree-based Feature Importance (樹狀模型特徵重要性)",
            "desc": "利用隨機森林或 XGBoost 等決策樹模型，根據特徵在節點分裂時的資訊增益來評估特徵重要性，自動篩選關鍵變數。"
          },
          {
            "name": "Principal Component Analysis, PCA (主成分分析)",
            "desc": "透過線性轉換將高維度的原始特徵壓縮成少數幾個不相關的主成分，適合用來降維及消除共線性，但會喪失部分物理意義。"
          }
        ],
        "terminology": [
          "稀疏矩陣 (Sparse Matrix)",
          "多重共線性 (Multicollinearity)",
          "懲罰項 (Penalty Term)",
          "特徵工程 (Feature Engineering)"
        ]
      },
      {
        "id": 33,
        "question": "某資料科學團隊正在開發一個客戶相似度比對系統，用於計算所有客戶之間的相似度分數。若系統需逐一比對每一位客戶與其他所有客戶的資料組合，此時演算法的時間複雜度最可能為哪一種？其代表意義為何？",
        "options": {
          "A": "O(n) — 執行時間與資料量成線性關係",
          "B": "O(n²) — 執行時間與資料量平方成正比",
          "C": "O(1) — 執行時間固定不變",
          "D": "O(log n) — 執行時間與資料量呈對數成長關係"
        },
        "answer": "B",
        "explanation": "若有 n 位客戶，每一位都要與其他所有客戶進行比對，需要進行 n * (n - 1) / 2 次運算。在 Big O 記號中，這屬於 O(n²) 的時間複雜度，表示執行時間會隨著資料量的平方成正比增長。這類暴力比對在大數據情境下非常耗時。",
        "ml_method": "演算法時間複雜度 (Time Complexity)",
        "ml_method_explanation": "時間複雜度是用來描述演算法執行時間隨輸入資料規模增長而變化的趨勢，通常使用 Big O 符號表示。常見的複雜度由快到慢包括 O(1)常數時間、O(log n)對數時間、O(n)線性時間、O(n log n)以及 O(n²)平方時間等。在設計機器學習系統或資料處理管線時，評估時間複雜度是關鍵，因為 O(n²) 或更高的演算法在大數據集上會遭遇運算瓶頸，需透過近似演算法或空間換時間來優化。",
        "examples": [
          "開發交友軟體的配對推薦系統，若使用巢狀迴圈讓所有用戶兩兩計算興趣相似度，其 O(n²) 的複雜度會讓百萬用戶的運算耗時過長，因此實務上會改用局部敏感雜湊 (LSH) 等降維技術來加速。",
          "物流公司在計算多個配送點之間的最短路徑時，單純比對所有節點的距離矩陣會面臨 O(n²) 問題，當節點數過多時，必須依賴空間索引或啟發式演算法來縮短搜尋時間。"
        ],
        "comparison": "O(n²) 時間複雜度的演算法（如巢狀迴圈兩兩比對）適用於小規模資料集的精確計算；但在大數據場景下，這種暴力法會導致運算時間呈幾何級數增長。相對地，O(n log n) 或 O(n) 的演算法（如 KD-Tree 或局部敏感雜湊）在推薦系統、社交網路關聯分析等需要處理百萬級用戶比對的業務中更為常見，用以突破效能瓶頸。",
        "keywords": [
          "時間複雜度 (Time Complexity)",
          "Big O 記號 (Big O Notation)",
          "O(n²) (二次方時間)",
          "演算法效能 (Algorithm Performance)",
          "客戶相似度 (Customer Similarity)"
        ],
        "extended_tech": [
          {
            "name": "Locality-Sensitive Hashing, LSH (局部敏感雜湊)",
            "desc": "一種降維與快速近鄰搜尋技術，能將相似的資料高機率地雜湊到同一個桶中，將比對複雜度從 O(n²) 大幅降至接近 O(n)。"
          },
          {
            "name": "KD-Tree / Ball Tree (空間劃分樹)",
            "desc": "用於多維空間資料結構的索引技術，能加速最近鄰搜尋（KNN），在低維度特徵空間中比對效率遠優於線性掃描。"
          },
          {
            "name": "Matrix Factorization (矩陣分解)",
            "desc": "在推薦系統中，將龐大的用戶-商品互動矩陣分解為低維度的用戶特徵與商品特徵矩陣，藉由內積快速計算相似度與預測評分。"
          }
        ],
        "terminology": [
          "大O記號 (Big O Notation)",
          "時間複雜度 (Time Complexity)",
          "暴力搜尋 (Brute-force Search)",
          "空間複雜度 (Space Complexity)"
        ]
      },
      {
        "id": 34,
        "question": "某醫療人工智慧團隊正在開發心臟病風險預測模型，資料量僅有 150 筆，其中陽性個案不到 8%。由於樣本數稀少且類別分布極不平衡，團隊希望在有限資料下，仍能準確評估模型在不同資料上的表現穩定性，同時避免訓練資料被過度切分而影響模型效能。若團隊希望在有限樣本下，同時兼顧資料的利用率與各類別在驗證折中的比例一致性，最適合採用下列哪一種交叉驗證方法？",
        "options": {
          "A": "5-Fold 交叉驗證（5-Fold Cross Validation）",
          "B": "留一法交叉驗證（Leave-One-Out Cross Validation）",
          "C": "隨機交叉驗證（Random Cross Validation）",
          "D": "分層留一法交叉驗證（Stratified Leave-One-Out Cross Validation）"
        },
        "answer": "D",
        "explanation": "由於樣本數僅有 150 筆，為了最大化訓練資料利用率，留一法是個好選擇。但因為正樣本不到 8%（不到 12 筆），如果在留一法或一般 k-fold 中未考慮比例，有些折可能完全沒有正樣本。雖然嚴格意義上的分層留一法實務上較難定義（通常指分層 k 折），但選項D強調「分層」確保比例一致，且「留一」最大化資料利用率，是最符合題目敘述的解。",
        "ml_method": "分層交叉驗證 (Stratified Cross-Validation)",
        "ml_method_explanation": "在機器學習的模型評估中，交叉驗證是將資料切分成多個子集進行輪替訓練與測試的技術。當資料存在嚴重的類別不平衡（如患病與未患病比例懸殊）時，一般的隨機切分可能會導致某些測試集中完全缺乏少數類別樣本，使得評估指標失真。分層交叉驗證（Stratified CV）在切分資料時，會強制保持每個資料子集中的類別比例與原始母體一致，確保模型評估的公平性與穩定性。",
        "examples": [
          "在信用卡盜刷偵測系統中，盜刷交易可能只佔總交易量的 0.1%。使用分層交叉驗證可以確保每一折的測試資料中都包含適當比例的盜刷紀錄，避免模型評估時誤判為完美。",
          "製造業的良率預測模型中，嚴重瑕疵品往往是非常稀少的極端案例。透過分層技術確保訓練與驗證集的瑕疵分佈一致，能幫助工程師更準確地評估模型偵測罕見瑕疵的能力。"
        ],
        "comparison": "分層留一法交叉驗證兼具留一法（最大化資料利用率）與分層交叉驗證（維持類別比例）的優勢，特別適合極小樣本且類別嚴重不平衡的醫療診斷或罕見疾病預測場景。相較於一般 K-Fold 可能導致某些折完全缺乏正樣本，或單純留一法無法控制比例，分層留一法能確保模型評估的公平性與結果穩定性。",
        "keywords": [
          "分層交叉驗證 (Stratified CV)",
          "留一法 (Leave-One-Out CV)",
          "類別不平衡 (Class Imbalance)",
          "資料利用率 (Data Utilization)",
          "模型評估 (Model Evaluation)"
        ],
        "extended_tech": [
          {
            "name": "SMOTE (合成少數類過採樣技術)",
            "desc": "在極度不平衡的資料集中，透過內插法合成少數類別的虛擬樣本，增加訓練資料量，使模型更容易學習至少數類的特徵。"
          },
          {
            "name": "Focal Loss (焦點損失函數)",
            "desc": "一種專為類別不平衡設計的損失函數，透過降低易分類樣本的權重，迫使模型在訓練時將焦點集中於難以分類的少數類別樣本。"
          },
          {
            "name": "Bootstrap Resampling (拔靴法重抽樣)",
            "desc": "從有限的原始資料中有放回地隨機抽樣，產生多個不同的訓練集，常搭配集成學習來評估小樣本資料下模型的變異與信心區間。"
          }
        ],
        "terminology": [
          "類別不平衡 (Class Imbalance)",
          "分層抽樣 (Stratified Sampling)",
          "交叉驗證 (Cross-Validation)",
          "模型穩定性 (Model Stability)"
        ]
      },
      {
        "id": 35,
        "question": "某公司針對製程感測器資料進行主成分分析（PCA），經標準化與協方差矩陣分解後，得到三個主成分的特徵值如下：λ1=6.0, λ2=3.0, λ3=1.0。若團隊決定僅保留能解釋至少 80% 總變異量的主成分，以進行後續模型建構，下列哪一項敘述最合理且數據解讀正確？",
        "options": {
          "A": "前兩個主成分合計解釋 90%的總變異量，因此可安全降維至二維，且仍保留大部分資訊",
          "B": "第一主成分解釋 60%的變異量，表示資料結構呈現明顯線性關係，僅保留一維即可避免過擬合",
          "C": "雖然前兩個主成分可解釋超過 80% 變異量，但第二主成分貢獻仍高達30%，不宜捨棄第三主成分",
          "D": "三個特徵值相差不大，顯示各主成分變異均衡，降維可能導致資訊損失"
        },
        "answer": "A",
        "explanation": "總特徵值為 λ1+λ2+λ3 = 6.0+3.0+1.0 = 10.0。第一主成分解釋率為 6.0/10.0 = 60%，第二主成分為 3.0/10.0 = 30%。前兩個主成分合計解釋 90% 的變異量，超過團隊設定的 80% 門檻，因此降維至二維是合理且安全的作法。",
        "ml_method": "主成分分析 (Principal Component Analysis, PCA)",
        "ml_method_explanation": "主成分分析（PCA）是一種廣泛應用於資料降維的無監督學習技術。其核心原理是透過線性轉換，將原始高維度的關聯變數轉換為一組線性獨立的新變數（稱為主成分）。這些主成分依據其能解釋原始資料變異量的大小進行排序。藉由僅保留前幾個擁有最大特徵值（變異量）的主成分，PCA 能夠在大幅減少資料維度的同時，最大程度地保留原始資料中的重要資訊，從而加速後續模型訓練並減少雜訊。",
        "examples": [
          "在影像壓縮應用中，一張高解析度照片可視為數百萬個像素的特徵。透過 PCA 提取出捕捉大部分影像輪廓與色彩漸層的主要成分，即可用極少的數據量重建出人類視覺難以分辨差異的影像。",
          "在客戶消費行為分析中，行銷部門可能收集了幾十種不同的購物指標。利用 PCA 可將這些指標降維成少數兩三個代表整體購買力與偏好的綜合指數，方便在二維圖表上進行客戶分群視覺化。"
        ],
        "comparison": "主成分分析（PCA）是一種無監督的降維技術，透過特徵值分解提取主要特徵，適用於感測器訊號、影像壓縮等高維連續資料。這與特徵選擇（如 Lasso 或決策樹，保留原始變數）不同，PCA 轉換後的新特徵會失去原始的物理意義。在製造業製程監控中，保留解釋 80% 變異量的前幾個主成分，能在降低運算與雜訊的同時維持核心資訊。",
        "keywords": [
          "主成分分析 (PCA)",
          "特徵值 (Eigenvalue)",
          "降維 (Dimensionality Reduction)",
          "總變異量 (Total Variance)",
          "資料特徵提取 (Feature Extraction)"
        ],
        "extended_tech": [
          {
            "name": "t-SNE (t-分佈隨機鄰近嵌入)",
            "desc": "一種非線性的降維與視覺化演算法，特別擅長將高維度的資料映射到二維或三維空間，並保留資料群聚的局部結構特性。"
          },
          {
            "name": "Autoencoder (自編碼器)",
            "desc": "利用類神經網路進行非線性降維，透過編碼器將資料壓縮至潛在空間，再透過解碼器還原，能捕捉比 PCA 更複雜的資料特徵。"
          },
          {
            "name": "Independent Component Analysis, ICA (獨立成分分析)",
            "desc": "不僅尋找不相關的成分，更致力於分離出統計上互相獨立的訊號源，廣泛應用於腦波訊號分離或語音盲源分離任務。"
          }
        ],
        "terminology": [
          "主成分 (Principal Component)",
          "特徵值 (Eigenvalue)",
          "協方差矩陣 (Covariance Matrix)",
          "變異量解釋率 (Variance Explained)"
        ]
      },
      {
        "id": 36,
        "question": "某銀行計畫與多家合作機構共同訓練一個 AI 信用風險預測模型，為避免客戶交易資料在傳輸與運算過程中外洩，技術團隊評估使用同態加密（Homomorphic Encryption）技術。下列何者最能正確描述同態加密在此應用中的關鍵特性？",
        "options": {
          "A": "系統以隨機雜訊（Noise）干擾輸出，確保統計結果不洩漏個資",
          "B": "各參與銀行透過安全通道交換私鑰，確保模型參數一致",
          "C": "將原始資料壓縮並同時加密，以減少加密後資料量與運算時間",
          "D": "資料在加密狀態下仍可進行數值運算，模型訓練可於未解密資料上完成"
        },
        "answer": "D",
        "explanation": "同態加密的獨特之處在於它允許對密文進行特定形式的代數運算，且對密文運算解密後的結果，與對明文進行相同運算的結果一致。因此，各機構可以在不解密的情況下，將加密數據交給中央伺服器進行模型訓練計算，保障資料隱私。選項A描述的是差分隱私。",
        "ml_method": "同態加密 (Homomorphic Encryption)",
        "ml_method_explanation": "同態加密是一種先進的密碼學技術，突破了傳統加密方法「必須先解密才能處理資料」的限制。在同態加密的保護下，使用者可以將資料加密後傳送給第三方雲端或伺服器，伺服器能夠直接對這些「密文」進行加法、乘法等數學運算並返回加密結果。使用者將結果解密後，所得到的數值與直接在未加密「明文」上計算的結果完全相同。這使得在不受信任的環境中進行隱私保護的機器學習成為可能。",
        "examples": [
          "醫療研究機構希望利用雲端強大的算力分析患者基因數據以預測疾病風險。使用同態加密，他們可將基因資料加密上傳，雲端模型在密文上進行推理，將加密的預測結果傳回，確保病患隱私不被雲端供應商獲取。",
          "跨國企業希望統計各地區分公司的財務總額，但各分公司基於合規要求不能互相透露真實數字。透過同態加密，總部能匯總所有加密後的報表算出總和，而無法反推單一分公司的數據。"
        ],
        "comparison": "同態加密允許在密文上直接進行運算，適用於需要將敏感資料交由第三方（如雲端 AI）處理但不能解密的場景，如金融聯合建模或跨院醫療分析。這與差分隱私（透過加入雜訊保護統計結果）或聯邦學習（資料不出地，僅交換模型權重）不同。同態加密能保證數學運算的精確性，但目前仍受限於龐大的運算開銷。",
        "keywords": [
          "同態加密 (Homomorphic Encryption)",
          "隱私保護 (Privacy Protection)",
          "密文運算 (Ciphertext Computation)",
          "資料安全 (Data Security)",
          "機器學習模型 (ML Models)"
        ],
        "extended_tech": [
          {
            "name": "Federated Learning (聯邦學習)",
            "desc": "允許各參與方在本地端利用自有資料訓練模型，僅將加密後的模型權重或梯度上傳至中心伺服器進行聚合，確保原始資料不離開本地。"
          },
          {
            "name": "Secure Multi-Party Computation, SMPC (安全多方計算)",
            "desc": "多個參與方共同計算一個函數，在整個計算過程中，沒有任何一方能獲得其他方的輸入資料，確保分散式計算的絕對隱私。"
          },
          {
            "name": "Differential Privacy (差分隱私)",
            "desc": "在資料查詢或模型訓練過程中加入精心設計的隨機數學雜訊，確保外部攻擊者無法透過輸出結果反推出任何單一個體的隱私資訊。"
          }
        ],
        "terminology": [
          "同態加密 (Homomorphic Encryption)",
          "密文 (Ciphertext)",
          "明文 (Plaintext)",
          "隱私強化計算 (Privacy-Enhancing Technologies)"
        ]
      },
      {
        "id": 37,
        "question": "某跨銀行風控平台希望整合多家銀行的用戶行為資料，用於訓練信用風險預測模型。由於競爭與法規限制，各銀行僅願意提供加密後資料，且資料在任何時間不得被平台解密。同時，平台需建立安全通訊協議以確保資料在傳輸過程未被竄改或重放。下列哪一組技術最能完整對應上述需求？",
        "options": {
          "A": "對稱加密＋ 單向雜湊＋ 非對稱加密＋ 差分隱私",
          "B": "同態加密＋ 非對稱加密＋ 單向雜湊＋ 對稱加密",
          "C": "差分隱私＋ 對稱加密＋ 同態加密＋ 數位簽章",
          "D": "同態加密＋ 安全多方計算＋ 雜湊函數＋ 對稱加密"
        },
        "answer": "B",
        "explanation": "「資料不得解密且可用於訓練」對應同態加密(Homomorphic Encryption)。「通訊協議確保未被竄改」需要雜湊(Hash)與非對稱加密技術來建立數位簽章。對稱加密則用於建立安全通道(如 TLS 中交換的 session key)。選項B合理涵蓋了在密文上運算及通訊安全所需的各層面技術組合。",
        "ml_method": "隱私強化計算技術 (Privacy-Enhancing Technologies, PETs)",
        "ml_method_explanation": "隱私強化計算是一系列技術的總稱，旨在讓資料在被使用與分析的過程中，仍能保障個體或企業的隱私不被外洩。這領域包含了同態加密（直接在密文上運算）、安全多方計算（多方協作計算函數但不暴露各自輸入）、聯邦學習（只交換模型梯度而非原始資料）以及差分隱私（加入隨機雜訊避免回推個體資訊）等。在重視合規與資安的金融或醫療 AI 應用中，這些技術是打破資料孤島的關鍵。",
        "examples": [
          "各家競爭的電商平台希望共同建立一個更強大的詐欺用戶黑名單模型，但拒絕分享客戶資料。利用聯邦學習與安全多方計算，各平台可在本地端訓練模型，僅共享加密後的權重更新至中心伺服器，共同提升風控能力。",
          "政府機構發布人口普查統計資料供學術界訓練模型時，為了避免駭客透過交叉比對反推出特定民眾的詳細背景，會導入差分隱私技術，在統計結果中加入微小的數學雜訊以掩蓋個體特徵。"
        ],
        "comparison": "隱私強化技術組合中，同態加密專注於「密文可用不可見」，適合跨機構聯合訓練；非對稱加密與數位簽章確保通訊雙方身分認證與資料防竄改；對稱加密則保障大流量傳輸效率。這套組合拳有別於單純的資料去識別化（容易被重新識別）。在跨國金融風控、政企數據交換等最高安規場景中，此類綜合加密架構是合規的技術基礎。",
        "keywords": [
          "同態加密 (Homomorphic Encryption)",
          "非對稱加密 (Asymmetric Encryption)",
          "數位簽章 (Digital Signature)",
          "單向雜湊 (Hash Function)",
          "資料安全傳輸 (Secure Data Transmission)"
        ],
        "extended_tech": [
          {
            "name": "Federated Learning (聯邦學習)",
            "desc": "解決資料孤島問題，各銀行在內部訓練模型並僅共享加密後的梯度更新，配合安全多方計算，達成更高效率的隱私保護聯合建模。"
          },
          {
            "name": "Zero-Knowledge Proof (零知識證明)",
            "desc": "允許一方（證明者）向另一方（驗證者）證明某個陳述是真實的，而無需透露任何超出「該陳述為真」以外的具體資訊，常用於身分驗證。"
          },
          {
            "name": "Trusted Execution Environment, TEE (可信賴執行環境)",
            "desc": "在硬體層級隔離出的安全區域（如 Intel SGX），資料在 CPU 內部解密與運算，對作業系統與雲端供應商皆保密，提升運算效能。"
          }
        ],
        "terminology": [
          "安全多方計算 (Secure Multi-Party Computation)",
          "數位簽章 (Digital Signature)",
          "雜湊函數 (Hash Function)",
          "隱私強化技術 (PETs)"
        ]
      },
      {
        "id": 38,
        "question": "附圖程式碼所計算的是哪一類型的評估指標？\ndef metric(y_true, y_pred):\n    return sum((y_true - y_pred) ** 2) / len(y_true)",
        "options": {
          "A": "MAE",
          "B": "MSE",
          "C": "RMSE",
          "D": "R²"
        },
        "answer": "B",
        "explanation": "程式碼中計算了真實值(y_true)與預測值(y_pred)差異的平方和，然後除以樣本數(len(y_true))，這正是均方誤差（Mean Squared Error, MSE）的數學定義。",
        "ml_method": "均方誤差 (Mean Squared Error, MSE)",
        "ml_method_explanation": "均方誤差（MSE）是迴歸問題中最常用的損失函數與評估指標之一。它透過計算每一個預測值與真實值之間差值的平方，然後求取這些平方誤差的平均數來衡量模型表現。由於使用了平方運算，MSE 會對預測誤差較大的離群值給予極高的懲罰，促使模型在訓練時盡量避免出現巨大的偏差。然而，這也意味著 MSE 對異常值非常敏感，可能導致模型在含有大量雜訊的資料集上產生偏誤。",
        "examples": [
          "在預測房價的模型中，若預測值偏離真實房價 100 萬，MSE 會將此誤差放大為 1,000,000 的平方，迫使模型在最佳化過程中優先修正這些極端嚴重的預測失誤。",
          "在供應鏈庫存預測系統中，低估需求可能導致斷貨，嚴重影響信譽。使用類似 MSE 且加重懲罰的模型能確保預測結果不會與真實需求產生巨大的災難性落差，維持庫存穩定。"
        ],
        "comparison": "均方誤差（MSE）是迴歸任務中最基礎的損失函數，因其對極端誤差給予平方懲罰，特別適用於容錯率低、需嚴格控制大偏差的場景（如醫療劑量預測或精密製造）。相對於平均絕對誤差（MAE）對離群值較不敏感，MSE 更容易受雜訊干擾。若業務目標是追求整體平均準確度且資料含大量雜訊，通常會改用 MAE 或 Huber Loss。",
        "keywords": [
          "均方誤差 (MSE)",
          "迴歸問題 (Regression Problem)",
          "損失函數 (Loss Function)",
          "評估指標 (Evaluation Metric)",
          "離群值 (Outliers)"
        ],
        "extended_tech": [
          {
            "name": "Mean Absolute Error, MAE (平均絕對誤差)",
            "desc": "計算預測值與真實值之間絕對誤差的平均。相比於 MSE，MAE 不會放大極端值，因此對於含有較多雜訊或離群值的資料集具有更強的穩健性。"
          },
          {
            "name": "Huber Loss (Huber 損失函數)",
            "desc": "結合了 MSE 與 MAE 的優點：在誤差較小時採用類似 MSE 的平方計算使梯度平滑，在誤差較大時轉換為絕對值計算以降低對離群值的敏感度。"
          },
          {
            "name": "Root Mean Squared Error, RMSE (均方根誤差)",
            "desc": "將 MSE 開根號，使其數值尺度與原始目標變數相同，讓業務單位在解讀模型預測誤差時（如房價誤差幾萬元）更直觀且具備物理意義。"
          }
        ],
        "terminology": [
          "均方誤差 (Mean Squared Error)",
          "損失函數 (Loss Function)",
          "離群值 (Outlier)",
          "梯度下降 (Gradient Descent)"
        ]
      },
      {
        "id": 39,
        "question": "附圖程式碼實現的是哪一種正則化技術？\ndef forward(x, p, training=True):\n    if training:\n        mask = np.random.binomial(1, p, size=x.shape)\n        return x * mask / p\n    else:\n        return x",
        "options": {
          "A": "L1 正則化",
          "B": "L2 正則化",
          "C": "Dropout",
          "D": "Batch Normalization"
        },
        "answer": "C",
        "explanation": "程式碼在訓練階段（training=True）使用二項分配（binomial）隨機生成 0 與 1 的遮罩（mask），將部分特徵歸零（x * mask），並除以保留機率 p 進行縮放（Inverted Dropout 技巧）。測試階段則直接回傳原值。這正是 Dropout 的標準實作。",
        "ml_method": "隨機失活 (Dropout)",
        "ml_method_explanation": "Dropout 是深度學習中一種極具巧思且高效的正則化技術。在模型訓練過程的每一次前向傳播中，Dropout 會依照預設的機率 p，隨機將隱藏層中一部分神經元的輸出設為零，暫時「丟棄」它們。這迫使網路在訓練時不能過度依賴少數特定神經元的組合特徵，而是必須讓更多的神經元學會提取有用的特徵。這不僅有效打破神經元間的共適應性（Co-adaptation），也能被視為一種隱式的大規模模型集成（Ensemble）方法。",
        "examples": [
          "在訓練複雜的影像分類 CNN 時，全連接層參數極多，極易死背訓練集特徵。在全連接層之間加入 Dropout，能促使網路關注影像的不同局部特徵，提升在未知測試照片上的泛化準確率。",
          "處理自然語言的深層 LSTM 或 Transformer 網路中，為避免模型過度專注於訓練文本中的特定詞彙共現，透過對神經元或注意力權重施加 Dropout，可使模型學會更深層的語意結構。"
        ],
        "comparison": "Dropout 是一種在訓練階段隨機丟棄神經元的正則化技術，迫使網路學習更具泛化性的特徵，適用於容易過擬合的深層卷積或全連接網路。這與 Batch Normalization（標準化特徵分佈以加速收斂）或 L1/L2 正則化（透過懲罰權重數值來限制複雜度）在機制上截然不同。Dropout 廣泛應用於影像分類與自然語言處理等複雜模型中。",
        "keywords": [
          "隨機失活 (Dropout)",
          "正則化 (Regularization)",
          "過擬合 (Overfitting)",
          "神經網路 (Neural Networks)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "Batch Normalization (批次標準化)",
            "desc": "在神經網路的每一層輸入前進行正規化處理，能顯著解決內部協變量偏移問題，加速模型收斂，並帶有輕微的正則化與抗過擬合效果。"
          },
          {
            "name": "Spatial Dropout (空間隨機失活)",
            "desc": "針對卷積神經網路的特化 Dropout，它不是隨機丟棄單一神經元，而是直接丟棄整張特徵圖（Channel），有效打破相鄰像素間的高度關聯性。"
          },
          {
            "name": "DropConnect (連接隨機失活)",
            "desc": "Dropout 的變體，它隨機將神經元之間的「連接權重」設為零，而非丟棄神經元本身的輸出，在某些特定模型架構下能提供更強的正則化能力。"
          }
        ],
        "terminology": [
          "隨機失活 (Dropout)",
          "共適應性 (Co-adaptation)",
          "正則化 (Regularization)",
          "前向傳播 (Forward Propagation)"
        ]
      },
      {
        "id": 40,
        "question": "依據附圖程式碼進行資料處理，下列何者正確？\nimport numpy as np\nv1 = np.array([1, 2, 3])\nv2 = np.array([4, 5, 6])\nA = np.array([[1, 2], [3, 4]])",
        "options": {
          "A": "np.linalg.inv(A) 計算矩陣 A 的行列式",
          "B": "v1 * v2 結果為 array([5, 7, 9])",
          "C": "np.dot(v1, v2) 結果為 np.int64(32)",
          "D": "np.linalg.eig(A) 計算矩陣 A 的反矩陣"
        },
        "answer": "C",
        "explanation": "選項C：np.dot(v1, v2) 計算向量內積，結果為 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32，正確。選項A：inv()是計算反矩陣，不是行列式(det)。選項B：v1 * v2 是元素對應相乘，應為 array([4, 10, 18])。選項D：eig()是計算特徵值與特徵向量。",
        "ml_method": "向量內積 (Dot Product)",
        "ml_method_explanation": "向量內積是線性代數與機器學習中最核心的基礎運算之一。對於兩個維度相同的向量，其內積是將對應位置的元素相乘後全部加總，產生一個純量值。在幾何意義上，內積與兩個向量的長度及夾角餘弦值成正比，因此常被用來衡量兩個向量的相似程度。在神經網路中，每一層的神經元計算本質上就是輸入特徵向量與權重矩陣進行大量的內積運算，再通過激活函數。",
        "examples": [
          "在推薦系統中，用戶偏好與商品特徵常被編碼為高維度向量。系統透過計算兩者的向量內積，即可得出該用戶對該商品的預期喜好分數，進而決定推薦排序。",
          "在自然語言處理中，詞彙被轉換為詞向量（Word Embedding）。計算兩個詞向量的內積或餘弦相似度，可用來判斷兩個詞彙在語意上的相似程度，例如「國王」與「皇帝」的內積值會很高。"
        ],
        "comparison": "向量內積（Dot Product）是衡量兩個向量在空間中相似度或投影關係的基礎運算，廣泛應用於神經網路的權重計算與推薦系統的特徵比對。這與單純的矩陣反轉（用於解線性方程）或特徵值分解（用於 PCA 降維）不同。在 NLP 詞向量比對或使用者偏好分析等業務場景，內積與餘弦相似度是計算關聯性的核心數學工具。",
        "keywords": [
          "向量內積 (Dot Product)",
          "Numpy 運算",
          "線性代數 (Linear Algebra)",
          "神經網路運算 (NN Computation)",
          "特徵相似度 (Feature Similarity)"
        ],
        "extended_tech": [
          {
            "name": "Cosine Similarity (餘弦相似度)",
            "desc": "利用兩個向量的內積除以其長度乘積，計算夾角的餘弦值。它消除了向量長度的影響，專注於方向差異，是文本與推薦系統中最常用的相似度指標。"
          },
          {
            "name": "Matrix Multiplication (矩陣相乘)",
            "desc": "內積概念的高維度延伸，是深度學習神經網路中前向傳播與反向傳播的底層運算核心，現代 GPU 架構皆針對此運算進行高度平行化最佳化。"
          },
          {
            "name": "Attention Mechanism (注意力機制)",
            "desc": "在 Transformer 模型中，利用 Query 矩陣與 Key 矩陣的內積（Scaled Dot-Product）來計算不同詞彙間的關聯權重，是現代大型語言模型的靈魂技術。"
          }
        ],
        "terminology": [
          "向量內積 (Dot Product)",
          "線性代數 (Linear Algebra)",
          "特徵向量 (Eigenvector)",
          "純量 (Scalar)"
        ]
      },
      {
        "id": 41,
        "question": "考慮擲出骰子並採用 Monte Carlo 方法估算條件機率，事件 A：擲出偶數，事件 B：擲出大於 3。請問下列何者為條件機率 P(A∣B)的正確值？",
        "options": {
          "A": "A_and_B.sum() / (A.sum() * B.sum())",
          "B": "A_and_B.sum() / (A.sum() + B.sum())",
          "C": "A_and_B.sum() / A.sum()",
          "D": "A_and_B.sum() / B.sum()"
        },
        "answer": "D",
        "explanation": "條件機率 P(A|B) 定義為在事件 B 發生的條件下，事件 A 發生的機率，數學公式為 P(A∩B) / P(B)。轉換為程式碼中的計數，即為同時滿足A與B的次數 (A_and_B.sum()) 除以滿足 B 的次數 (B.sum())。",
        "ml_method": "蒙地卡羅方法 (Monte Carlo Method)",
        "ml_method_explanation": "蒙地卡羅方法是一類依賴重複隨機抽樣來獲得數值結果的演算法。其核心思想是利用大數法則，當無法直接求解某個複雜的數學問題（例如高維度積分或複雜機率分佈）時，透過撰寫程式進行大量隨機模擬實驗，並統計特定事件發生的頻率，以此作為機率或數值解的近似值。在機器學習的強化學習領域，蒙地卡羅方法常被用來估算狀態價值函數，即透過讓代理人隨機走完許多回合來平均最終回報。",
        "examples": [
          "在財務工程領域，由於選擇權的定價模型涉及多種隨機變數（如股價波動、利率變化），分析師常使用蒙地卡羅模擬數萬種未來的股價走勢路徑，並取其平均折現值來為金融衍生性商品定價。",
          "在知名的人工智慧棋盤遊戲（如 AlphaGo）中，蒙地卡羅樹搜尋（MCTS）會隨機模擬數千場對局直到分出勝負，以此來評估當下某一步棋獲勝的機率，進而選出最佳落子位置。"
        ],
        "comparison": "蒙地卡羅方法利用大量隨機抽樣來逼近複雜問題的數值解，特別適合高維度積分或無法建立精確數學模型的強化學習與金融定價場景。它與傳統的決定性演算法（如動態規劃，需遍歷所有狀態）不同。在AlphaGo或選擇權風險評估等業務中，當狀態空間大到無法窮舉時，蒙地卡羅模擬是唯一可行且高效的近似評估手段。",
        "keywords": [
          "蒙地卡羅方法 (Monte Carlo Method)",
          "條件機率 (Conditional Probability)",
          "隨機抽樣 (Random Sampling)",
          "強化學習 (Reinforcement Learning)",
          "近似估算 (Approximate Estimation)"
        ],
        "extended_tech": [
          {
            "name": "Monte Carlo Tree Search, MCTS (蒙地卡羅樹搜尋)",
            "desc": "結合樹狀搜尋與隨機模擬的決策演算法，透過大量隨機走步來評估當下決策的勝率，是 AlphaGo 等頂尖人工智慧棋盤遊戲的核心技術。"
          },
          {
            "name": "Markov Chain Monte Carlo, MCMC (馬可夫鏈蒙地卡羅)",
            "desc": "用於從複雜的高維度機率分佈中進行抽樣的演算法，廣泛應用於貝氏機器學習與統計物理學中，用以估算後驗機率與模型參數分佈。"
          },
          {
            "name": "Temporal Difference Learning (時間差分學習)",
            "desc": "強化學習中的另一大流派，結合了蒙地卡羅方法的抽樣概念與動態規劃的拔靴法，能在回合未結束前即時更新價值函數，效率更高。"
          }
        ],
        "terminology": [
          "蒙地卡羅模擬 (Monte Carlo Simulation)",
          "大數法則 (Law of Large Numbers)",
          "條件機率 (Conditional Probability)",
          "隨機抽樣 (Random Sampling)"
        ]
      },
      {
        "id": 42,
        "question": "在深度神經網路中，不同層的參數量（parameter count）差異極大。有些層雖然數量少但計算量大，有些則相反。請問在 VGG16 中，下列何者的參數量最多？",
        "options": {
          "A": "卷積層(Conv2d)",
          "B": "全連接層(Linear)",
          "C": "ReLU 激活函數",
          "D": "池化層(MaxPool2d, AdaptiveAvgPool2d)"
        },
        "answer": "B",
        "explanation": "根據 VGG16 的網路結構與列印出的摘要資訊，第一個全連接層（Linear-33）的參數量高達約 1.02 億（102,764,544），佔據了整個模型總參數（約 1.38 億）的絕大比例。全連接層需要將前一層展平後的所有特徵節點與下一層所有節點進行一對一連接，導致權重數量暴增。卷積層雖然運算量大但受惠於權重共享，參數較少。",
        "ml_method": "卷積神經網路參數量分析 (CNN Parameter Distribution)",
        "ml_method_explanation": "在經典的卷積神經網路（如 VGG, AlexNet）中，架構通常分為前段的卷積層與後段的全連接層。卷積層利用區域感受野與權重共享機制，不僅能捕捉影像空間特徵，參數量也相對較少；然而，後段的全連接層由於每個輸入節點都必須連接到輸出節點，會產生龐大的權重矩陣，成為模型參數（與記憶體佔用）的主要來源。現代網路（如 ResNet）多以全局平均池化取代厚重的全連接層以大幅瘦身。",
        "examples": [
          "當企業計畫將雲端訓練好的影像檢測模型部署到記憶體受限的邊緣裝置（如智慧手機或無人機）時，首要步驟通常是壓縮或移除佔用最多記憶體的全連接層，改以全卷積架構替代。",
          "研究人員在設計新型神經網路時，為了維持模型輕量化，會避免在高解析度特徵圖後直接接上全連接層，而是先透過池化層將維度縮小，以避免參數量爆炸導致記憶體溢出（OOM）。"
        ],
        "comparison": "在傳統 CNN（如 VGG）中，全連接層因需要將高維特徵與輸出節點一對一映射，佔據了模型 80% 以上的參數，是造成記憶體瓶頸的主因；而卷積層受惠於權重共享，參數極少。在行動裝置或邊緣運算的 AI 部署業務中，捨棄全連接層改用全局平均池化（如 ResNet 架構）是壓縮模型大小、減少記憶體佔用的關鍵設計趨勢。",
        "keywords": [
          "卷積神經網路 (CNN)",
          "參數量 (Parameter Count)",
          "全連接層 (Fully Connected Layer)",
          "模型架構 (Model Architecture)",
          "VGG16"
        ],
        "extended_tech": [
          {
            "name": "Global Average Pooling, GAP (全局平均池化)",
            "desc": "在現代神經網路中用來取代厚重的全連接層。它對每張特徵圖計算空間平均值，將參數量降至零，大幅減小模型體積並有效防止過擬合。"
          },
          {
            "name": "Model Quantization (模型量化)",
            "desc": "將神經網路中佔據大量空間的 32 位元浮點數權重（特別是全連接層），壓縮成 8 位元整數，在幾乎不損害準確率的情況下大幅縮減模型大小與加速推論。"
          },
          {
            "name": "Knowledge Distillation (知識蒸餾)",
            "desc": "讓一個參數量龐大、準確率高的「教師模型」去指導一個輕量化的「學生模型」學習，使小模型能達到接近大模型的效能，適合邊緣裝置部署。"
          }
        ],
        "terminology": [
          "全連接層 (Fully Connected Layer)",
          "參數量 (Parameter Count)",
          "權重共享 (Weight Sharing)",
          "模型壓縮 (Model Compression)"
        ]
      },
      {
        "id": 43,
        "question": "在神經網路中，了解各層的運算量分佈，有助於模型壓縮與硬體加速的策略設計。請問在 VGG16 中，下列何者運算量(FLOPs)最多？",
        "options": {
          "A": "卷積層(Conv2d)",
          "B": "全連接層(Linear)",
          "C": "ReLU 激活函數",
          "D": "池化層(MaxPool2d, AdaptiveAvgPool2d)"
        },
        "answer": "A",
        "explanation": "在 VGG16 等傳統 CNN 中，卷積層雖然參數量遠低於全連接層，但因為卷積核必須在整張大解析度的影像（及眾多通道）上滑動進行密集的乘加運算（Multiply-Accumulate），導致其運算量（FLOPs, 浮點運算次數）佔據了整體網路的絕大部分。這也是為何 CNN 推論時高度依賴 GPU 進行平行加速。",
        "ml_method": "卷積層運算複雜度 (Convolutional FLOPs)",
        "ml_method_explanation": "浮點運算次數（FLOPs）是衡量深度學習模型計算複雜度與耗電量的重要指標。在卷積神經網路中，卷積層的運算量取決於輸入特徵圖的解析度、輸入與輸出通道數以及卷積核的大小。儘管卷積核的參數量不多，但它必須在空間維度上對每一個像素位置進行滑動與矩陣內積，因此消耗了模型 90% 以上的計算資源。優化卷積運算（例如深度可分離卷積）是提升推論速度的關鍵。",
        "examples": [
          "為了讓自駕車上的晶片能以每秒 60 幀的速度即時處理攝影機畫面，工程師無法使用標準的厚重卷積，必須設計如 MobileNet 般的輕量化結構，減少 FLOPs 運算以避免系統延遲。",
          "硬體製造商（如 NVIDIA 或 Google TPU）在設計 AI 加速晶片時，會特別針對卷積層中大量的矩陣乘加運算（MACs）進行硬體架構優化，例如設計龐大的脈動陣列（Systolic Array）來極大化運算吞吐量。"
        ],
        "comparison": "卷積層的運算量（FLOPs）雖然參數量少，但因需要在高解析度影像上進行密集的滑動矩陣相乘，成為消耗 GPU 計算資源的最大宗。這與全連接層（參數極多但僅計算一次內積）形成對比。在自駕車即時影像辨識或手機人臉解鎖等要求低延遲、低功耗的業務場景中，優化卷積運算（如深度可分離卷積）是提升推論速度的核心。",
        "keywords": [
          "運算量 (FLOPs)",
          "卷積層 (Convolutional Layer)",
          "深度學習硬體加速 (Hardware Acceleration)",
          "即時推論 (Real-time Inference)",
          "VGG16"
        ],
        "extended_tech": [
          {
            "name": "Depthwise Separable Convolution (深度可分離卷積)",
            "desc": "將標準卷積拆分為空間通道的獨立卷積與 1x1 的跨通道卷積，大幅減少矩陣乘加運算量（FLOPs），是 MobileNet 等輕量級架構的核心。"
          },
          {
            "name": "Tensor Processing Unit, TPU (張量處理單元)",
            "desc": "Google 專為機器學習設計的 ASIC 晶片，內部具備龐大的脈動陣列，專門針對卷積層中海量的矩陣相乘進行硬體層級的平行加速優化。"
          },
          {
            "name": "Model Pruning (模型剪枝)",
            "desc": "透過演算法找出神經網路中對預測結果影響極小的權重或卷積核，並將其剔除，從而直接減少模型的 FLOPs 需求與推論延遲時間。"
          }
        ],
        "terminology": [
          "浮點運算次數 (FLOPs)",
          "矩陣乘加 (MACs)",
          "感受野 (Receptive Field)",
          "推論延遲 (Inference Latency)"
        ]
      },
      {
        "id": 44,
        "question": "VGG16 層數深且結構規則，由多層卷積、池化及全連接層組成。了解各層的輸入/輸出維度、參數量及記憶體需求，有助於掌握 CNN 模型的組成邏輯與實作技巧。根據 VGG16 的模型架構，下列敘述何者正確？",
        "options": {
          "A": "AdaptiveAvgPool2d 的輸出會被攤平後傳入第一個全連接層；由於前一層池化輸出空間為 4×4，所以第一個線性層的輸入維度是 512×4×4 = 8192",
          "B": "Linear-33（第一個全連接層）報出的 102,764,544 參數只包含權重，偏差（bias）沒有算在內",
          "C": "根據列出的「Estimated Total Size (MB) = 624.98」，表示訓練此模型只需大約 625MB 的 GPU 記憶體",
          "D": "VGG16 包含 13 層卷積層（conv）與 3 層全連接層（FC），總參數數目約為 138,357,544（約 138.36M）"
        },
        "answer": "D",
        "explanation": "選項D正確描述了VGG16的經典結構：13層卷積+3層全連接，總參數約1.38億。選項A錯誤：AdaptiveAvgPool2d將空間維度池化為7x7，因此線性層輸入為 512x7x7 = 25088。選項B錯誤：參數數目通常包含 bias。選項C錯誤：625MB只是前向傳播的基礎估算，訓練時還需保存大量的反向傳播梯度與優化器狀態(如Adam的動量)，實際所需記憶體遠大於此。",
        "ml_method": "VGG 架構與記憶體估算 (VGG Architecture & Memory Footprint)",
        "ml_method_explanation": "VGG 架構由牛津大學提出，其核心哲學是使用連續的小尺寸 (3x3) 卷積核來替代大尺寸卷積，藉由加深網路層數來擴大感受野並增強非線性能力。這種設計十分優雅，但也帶來了龐大的參數與中間激活值特徵圖（Feature Maps）。在估算模型訓練的記憶體需求時，不能只看權重（Parameters）大小，還必須考慮前向傳播產生的激活值、反向傳播的梯度矩陣，以及優化器維護的狀態變數，總和往往是模型大小的數倍以上。",
        "examples": [
          "資料科學家在租用雲端 GPU 訓練大型影像生成模型時，發現即便模型權重只有 1GB，但在設定大批量（Batch Size）訓練時，仍會因為反向傳播需要儲存龐大的特徵圖而導致 16GB 的 GPU 記憶體耗盡（OOM）。",
          "在手機端部署臉部解鎖模型時，工程師不僅要壓縮模型的權重檔案大小，還必須精算推論時每一層產生的中間變數是否會超出手機 RAM 的極限，以避免應用程式崩潰。"
        ],
        "comparison": "VGG16 透過堆疊多層 3x3 小卷積核來增加網路深度與感受野，其典型結構（13層卷積+3層全連接）定義了早期深度學習的標準範式。相比現代的 ResNet（具備殘差連接）或 MobileNet（輕量化設計），VGG16 的參數量（約1.38億）與記憶體耗損極大。在現今的醫學影像特徵提取或工業瑕疵檢測中，VGG 仍常被作為穩定的預訓練基底。",
        "keywords": [
          "VGG16",
          "模型架構 (Model Architecture)",
          "參數量估算 (Parameter Estimation)",
          "記憶體耗損 (Memory Footprint)",
          "深度神經網路 (DNN)"
        ],
        "extended_tech": [
          {
            "name": "Residual Network, ResNet (殘差網路)",
            "desc": "透過引入跳躍連接（Skip Connection）解決了深層網路的梯度消失問題，使得訓練上百層的神經網路成為可能，且參數量遠低於 VGG。"
          },
          {
            "name": "Gradient Accumulation (梯度累積)",
            "desc": "在硬體記憶體受限無法使用大批量（Batch Size）訓練時，透過將多個小批量的梯度累加後再更新權重，以時間換取空間的記憶體優化技巧。"
          },
          {
            "name": "Mixed Precision Training (混合精度訓練)",
            "desc": "在訓練過程中同時使用 16 位元與 32 位元浮點數，這不僅能減少一半以上的 GPU 記憶體佔用，還能利用硬體的 Tensor Core 加速運算。"
          }
        ],
        "terminology": [
          "前向傳播 (Forward Propagation)",
          "反向傳播 (Backpropagation)",
          "特徵圖 (Feature Maps)",
          "優化器狀態 (Optimizer State)"
        ]
      },
      {
        "id": 45,
        "question": "在實務應用中，我們常使用遷移學習(transfer learning)技巧，即載入預訓練模型（如 VGG16），凍結部分層的參數，只針對特定任務重新訓練最後幾層，這種做法可節省訓練時間並提升模型效能。假設你要對 VGG16 進行遷移學習，希望凍結卷積層的參數，只訓練最後全連接層(classifier)。下列哪段程式碼寫法正確？",
        "options": {
          "A": "設定整個模型 requires_grad = False，然後不處理分類層",
          "B": "對 model.features 設定 requires_grad = False，分類層保持可訓練狀態",
          "C": "對 model.classifier 設定 requires_grad = False，凍結分類層",
          "D": "以上皆非"
        },
        "answer": "B",
        "explanation": "在 PyTorch 中實作特徵提取的遷移學習，標準做法是遍歷卷積層部分（在 VGG 中封裝於 model.features）並將其參數的 requires_grad 設為 False 進行凍結，確保反向傳播時不更新這些權重。隨後，替換或保留最後的全連接層（model.classifier），讓其 requires_grad 保持 True，以便在特定任務的數據上重新訓練分類器。",
        "ml_method": "遷移學習與參數凍結 (Transfer Learning & Freezing Layers)",
        "ml_method_explanation": "遷移學習是一種將已經在大規模資料集（如 ImageNet）上訓練好的模型知識，轉移到另一個相關但資料較少的目標任務上的技術。由於模型前段的卷積層通常負責提取邊緣、紋理等通用的低階特徵，我們在微調時常透過設定 requires_grad=False 將這些層「凍結」，不參與梯度更新。這樣做不僅能防止過擬合於稀少的目標資料，還能大幅減少反向傳播的運算量與記憶體消耗，加速模型收斂。",
        "examples": [
          "一間新創公司想開發辨識不同種類鳥類的模型。他們不需要從零開始訓練，而是下載 Google 已經在百萬張影像上訓練好的 ResNet 模型，凍結卷積特徵層，僅用幾千張鳥類照片訓練最後一層，即達到高準確率。",
          "在自然語言處理領域，開發者利用已預訓練好的 BERT 語言模型，將主體權重凍結，僅在頂端加上一層簡單的分類器，並使用少量公司內部的客服對話資料進行訓練，迅速完成客訴情感分類系統。"
        ],
        "comparison": "在遷移學習中，凍結前段卷積層（requires_grad=False）並微調最後的分類層，能快速適應新任務並防止小樣本過擬合。這與從頭訓練（耗時且易過擬合）或微調所有層（需大量資料）的策略不同。在製造業特定零件瑕疵檢測、醫療特定病灶辨識等「資料難以大量取得」的業務場景中，利用預訓練模型進行參數凍結與遷移學習是標準解法。",
        "keywords": [
          "遷移學習 (Transfer Learning)",
          "參數凍結 (Freezing Layers)",
          "微調 (Fine-tuning)",
          "PyTorch 實作",
          "預訓練模型 (Pre-trained Model)"
        ],
        "extended_tech": [
          {
            "name": "Fine-tuning (全面微調)",
            "desc": "當目標任務的資料量夠大時，不完全凍結特徵層，而是給予卷積層極小的學習率，分類層較大的學習率，讓整個模型針對新資料進行精細調整。"
          },
          {
            "name": "Zero-shot Learning (零樣本學習)",
            "desc": "利用如 CLIP 等具備強大多模態語意理解的先進模型，在完全沒有見過目標類別訓練資料的情況下，僅靠文字描述就能直接進行影像分類。"
          },
          {
            "name": "LoRA (低秩適應微調)",
            "desc": "主要應用於大型語言模型，透過在原有權重旁加入極小的低秩矩陣進行訓練，原有權重保持凍結，大幅降低微調百億參數模型所需的算力與記憶體。"
          }
        ],
        "terminology": [
          "遷移學習 (Transfer Learning)",
          "參數凍結 (Freezing Layers)",
          "預訓練模型 (Pre-trained Model)",
          "梯度更新 (Gradient Update)"
        ]
      },
      {
        "id": 46,
        "question": "假設研究人員已將含有雜訊的手寫數字影像存放在變數 noisy 中。他們嘗試使用 PCA 進行降噪，並希望能保留影像的主要特徵，同時去除影像中的雜訊。然而，當程式執行後，觀察到影像仍然含有明顯的雜訊。研究人員懷疑是程式中某個步驟的設定不正確，導致 PCA 沒有發揮降噪的作用。請問哪一段程式碼需要修改，才能讓 PCA 對 noisy 影像有效去噪？",
        "options": {
          "A": "程式碼 A：from sklearn.decomposition import PCA",
          "B": "程式碼 B：pca = PCA()",
          "C": "程式碼 C：pca.fit(noisy)",
          "D": "程式碼 D：components = pca.transform(noisy)"
        },
        "answer": "B",
        "explanation": "程式碼 B `pca = PCA()` 沒有指定保留的主成分數量（n_components）。在預設情況下，PCA 會保留與原始特徵數量相同的維度，也就是根本沒有降維，自然無法過濾掉代表雜訊的次要成分。必須將其修改為例如 `pca = PCA(n_components=0.8)` 或具體整數，強制降維，才能在重建時（inverse_transform）達到去噪效果。",
        "ml_method": "PCA 降噪應用 (PCA for Noise Reduction)",
        "ml_method_explanation": "PCA 不僅可用於降維與視覺化，也是強大的去噪工具。當資料包含訊號與雜訊時，通常主要訊號會導致資料在某些維度上有巨大的變異（即具有大特徵值的主成分），而隨機雜訊則分佈於各個維度且變異較小（對應小特徵值的次要成分）。透過執行 PCA 並捨棄那些次要的成分，再利用剩餘的主要成分逆向重建（Inverse Transform）原始資料，就能有效濾除雜訊，保留核心特徵。",
        "examples": [
          "天文學家在處理望遠鏡拍攝的深空星系影像時，影像常佈滿感光元件的熱雜訊。透過 PCA 降維並重建，可有效分離星系的光學訊號與背景雜訊，使星體輪廓更加清晰。",
          "在腦波圖（EEG）訊號分析中，微弱的腦波容易被眼球運動或肌肉活動的雜訊掩蓋。研究人員利用 PCA 過濾掉變異量較小的干擾成分，還原出較為純淨的腦神經活動訊號。"
        ],
        "comparison": "PCA 除了降維，亦是訊號處理中有效的降噪工具。相較於影像處理領域的中值濾波或高斯模糊（針對空間像素平滑化），PCA 透過捨棄特徵值較小的次要成分來濾除隨機雜訊，並保留主要的結構資訊。在天文影像處理、腦電波（EEG）雜訊濾除或工業感測器高頻雜訊抑制等需要保留核心訊號特徵的業務場景中，強制設定 n_components 是關鍵步驟。",
        "keywords": [
          "主成分分析 (PCA)",
          "降噪 (Noise Reduction)",
          "特徵值 (Eigenvalue)",
          "維度縮減 (Dimensionality Reduction)",
          "訊號處理 (Signal Processing)"
        ],
        "extended_tech": [
          {
            "name": "Autoencoder Denoising (去噪自編碼器)",
            "desc": "在深度學習中，人為在輸入資料加入雜訊，並強制神經網路重建出無雜訊的原始資料，使其學會忽略雜訊並提取最穩健的核心特徵表示。"
          },
          {
            "name": "Singular Value Decomposition, SVD (奇異值分解)",
            "desc": "線性代數中強大的矩陣分解技術，PCA 底層即常依賴 SVD 實作。在推薦系統與影像壓縮中，透過截斷微小的奇異值可達到與 PCA 相同的去噪與壓縮效果。"
          },
          {
            "name": "Wavelet Transform (小波轉換)",
            "desc": "相較於 PCA 或傅立葉轉換，小波轉換能同時提供時間與頻率的局部資訊，在醫療訊號（如心電圖）及高解析度影像去噪任務中表現優異。"
          }
        ],
        "terminology": [
          "降噪 (Noise Reduction)",
          "逆轉換 (Inverse Transform)",
          "主成分 (Principal Component)",
          "變異量 (Variance)"
        ]
      },
      {
        "id": 47,
        "question": "研究人員在對 digits 資料集進行分類時決定使用 KNN 並搭配交叉驗證來評估模型準確率。他們撰寫了四組不同的程式碼來進行 KNN 訓練與交叉驗證，但不確定哪幾組程式碼能正確執行並輸出準確率。請問哪幾組程式碼能正確使用 KNN 搭配交叉驗證，對 digits 資料集進行訓練並輸出準確率？",
        "options": {
          "A": "程式碼 A、程式碼 B、程式碼 C、程式碼 D",
          "B": "程式碼 A、程式碼 C",
          "C": "程式碼 A、程式碼 B",
          "D": "程式碼 C、程式碼 D"
        },
        "answer": "B",
        "explanation": "在 scikit-learn 的 `cross_val_score` 函數中，若不傳入 `cv` 參數（如程式碼 C），預設會執行 5-fold 交叉驗證；若要自訂交叉驗證物件，需正確傳入 `cv=cv_object`（如程式碼 A）。但若傳入 `cv=整數`（如 `cv=5`），也是合法的寫法。題意中可能只有 A (明確建立 StratifiedKFold 並傳入) 與 C (依賴預設的 StratifiedKFold 機制) 完全符合嚴謹或無語法錯誤的使用方式。B 與 D 可能存在參數傳遞語法錯誤（例如試圖給 cv 傳入不合法的關鍵字或未定義變數）。",
        "ml_method": "K-近鄰演算法與交叉驗證 (KNN & Cross-Validation)",
        "ml_method_explanation": "K-近鄰（K-Nearest Neighbors, KNN）是一種基於實例的監督式學習演算法，其分類邏輯是計算未知樣本與訓練集所有樣本的距離，找出最近的 K 個鄰居，並以多數決決定類別。由於 KNN 極易受到 K 值選擇與資料切割的影響，實務上必須搭配交叉驗證（Cross-Validation）來評估效能。交叉驗證將資料多次重新劃分訓練與測試集，不僅能減少隨機性帶來的評估偏差，更是尋找最佳 K 值的標準作業流程。",
        "examples": [
          "房仲業者使用 KNN 預測房屋價格，透過尋找地理位置與坪數最相近的 5 筆歷史成交紀錄來估價。為了驗證這個估價模型的穩定性，他們使用交叉驗證對所有歷史資料進行全面測試，確保模型在不同地區都不會嚴重失準。",
          "線上購物平台開發商品推薦系統，利用 KNN 找出與當前用戶購買紀錄最相似的其他買家。透過交叉驗證，工程師能夠客觀比較不同距離度量方式（如歐式距離或餘弦相似度）的準確率，選擇最佳方案。"
        ],
        "comparison": "KNN 搭配交叉驗證是評估基於距離分類模型效能的嚴謹作法。與單次切分訓練集/測試集（容易受隨機抽樣極端值影響）相比，交叉驗證能提供更穩定的準確率估計。在房地產估價（尋找相似物件）或電商用戶相似度推薦等依賴歷史實例進行決策的業務中，透過交叉驗證尋找最佳的 K 值與距離度量公式，能有效防止模型過擬合或欠擬合。",
        "keywords": [
          "K-近鄰演算法 (KNN)",
          "交叉驗證 (Cross-Validation)",
          "模型評估 (Model Evaluation)",
          "Scikit-learn",
          "準確率 (Accuracy)"
        ],
        "extended_tech": [
          {
            "name": "Grid Search CV (網格搜索交叉驗證)",
            "desc": "將模型的多個超參數（如 KNN 的 K 值、距離權重）組合列出，透過交叉驗證自動暴力測試所有組合，找出能使模型效能最大化的最佳超參數設定。"
          },
          {
            "name": "Distance Metrics Optimization (距離度量最佳化)",
            "desc": "在 KNN 中，除了歐式距離，根據業務資料特性改用曼哈頓距離、馬氏距離或餘弦相似度，往往能大幅提升模型在特定場景（如高維文本）的準確率。"
          },
          {
            "name": "Nearest Centroid Classifier (最近質心分類器)",
            "desc": "KNN 的高效簡化版。在訓練時僅計算每個類別的平均中心點（質心），預測時比對測試樣本與各質心的距離，大幅降低推論時的運算與記憶體開銷。"
          }
        ],
        "terminology": [
          "K-近鄰 (K-Nearest Neighbors)",
          "交叉驗證 (Cross-Validation)",
          "距離度量 (Distance Metric)",
          "超參數調校 (Hyperparameter Tuning)"
        ]
      },
      {
        "id": 48,
        "question": "使用鐵達尼號(Titanic)資料集進行多層感知機分類預測分析。參考下圖程式碼（資料標準化處理：X_train -= X_train.mean(axis=0); X_train /= X_train.std(axis=0)），下列何者正確？ A：調整平均值為0； B：調整標準差為0； C：壓縮到0和1之間； D：防止梯度爆炸或消失； E：屬於特徵選擇； F：程式碼應修正",
        "options": {
          "A": "A、B、C、D",
          "B": "A、E",
          "C": "A、D",
          "D": "A、C、F"
        },
        "answer": "C",
        "explanation": "程式碼執行的動作是 Z-score 標準化（Standardization）。它將資料減去平均值（使平均值變為 0，A正確），並除以標準差（使標準差變為 1，B錯誤）。它不會將資料壓縮到 0 和 1 之間（那是 Min-Max 正規化，C錯誤）。標準化能使各特徵尺度一致，確實有助於神經網路訓練穩定，防止梯度爆炸或消失（D正確）。這屬於特徵縮放而非特徵選擇（E錯誤）。",
        "ml_method": "資料標準化 / 特徵縮放 (Standardization / Feature Scaling)",
        "ml_method_explanation": "特徵縮放是資料預處理的關鍵步驟，其中 Z-score 標準化是最常用的方法之一。它的原理是將特徵數據減去整體的平均值，再除以標準差，使轉換後的資料分佈呈現平均值為 0、標準差為 1 的常態分佈特性。在神經網路或依賴距離計算的模型中，若特徵尺度差異過大（例如票價是幾百，年齡是幾十），數值大的特徵會主導梯度更新，導致訓練緩慢、難以收斂甚至梯度爆炸。標準化能將各特徵拉平在同一起跑線上。",
        "examples": [
          "在訓練房價預測的深度學習模型時，「房屋坪數」可能在數十到數百之間，而「屋齡」在數年到數十年之間。未經標準化，坪數的變化會嚴重干擾權重更新；標準化後，模型能更平穩地綜合考量各項特徵。",
          "使用 K-Means 進行客戶分群時，若客戶「年收入」（數百萬）與「造訪次數」（個位數）未經縮放，距離計算將完全被年收入主導。標準化能確保兩者在距離計算上具備相等的影響力。"
        ],
        "comparison": "Z-score 標準化將特徵轉換為平均值為0、標準差為1的分佈，解決不同特徵尺度差異過大的問題。相較於 Min-Max 正規化（將資料硬性壓縮至 0~1 之間，易受極端值影響），標準化能更好地處理離群值並加速神經網路的梯度收斂。在房價預測（坪數與屋齡尺度不同）、客戶分群等依賴距離計算或梯度下降的最佳化業務場景中，這是不可或缺的預處理步驟。",
        "keywords": [
          "資料標準化 (Standardization)",
          "特徵縮放 (Feature Scaling)",
          "多層感知機 (MLP)",
          "梯度爆炸 (Gradient Exploding)",
          "Z-score"
        ],
        "extended_tech": [
          {
            "name": "Min-Max Normalization (最小-最大正規化)",
            "desc": "將資料線性縮放到固定的範圍（通常是 0 到 1 之間），適用於影像像素處理或不預設資料為常態分佈且邊界明確的神經網路輸入場景。"
          },
          {
            "name": "Robust Scaler (穩健縮放)",
            "desc": "使用中位數與四分位距（IQR）來取代平均值與標準差進行資料縮放。當資料集包含大量極端離群值時，此方法能避免縮放結果被異常值嚴重扭曲。"
          },
          {
            "name": "Batch Normalization (批次標準化)",
            "desc": "不僅在資料輸入前進行，更在神經網路的每一隱藏層中動態對特徵進行標準化，極大地提升了深層網路訓練的穩定性與收斂速度。"
          }
        ],
        "terminology": [
          "特徵縮放 (Feature Scaling)",
          "標準化 (Standardization)",
          "梯度爆炸 (Gradient Exploding)",
          "常態分佈 (Normal Distribution)"
        ]
      },
      {
        "id": 49,
        "question": "參考下圖多層感知機建立程式碼執行結果：model.add(Dense(10, activation='relu')); model.add(Dense(1, activation='sigmoid'))，下列何者正確？",
        "options": {
          "A": "activation=\"relu\"其數學式為",
          "B": "空格 1 值為 110，空格 2 值為 100",
          "C": "空格 1 值為 100，空格 2 值為 110",
          "D": "activation=\"sigmoid\"一般用於多類別分類預測模型"
        },
        "answer": "C",
        "explanation": "假設輸入特徵數為 9（從 Titanic 資料切分得來），第一層 Dense(10) 的參數為 9*10 (權重) + 10 (偏差) = 100。第二層 Dense(1) 的參數為 10*1 + 1 = 11。所以第一層參數 100。選項C指出第一層為100，符合 9*10+10 的計算邏輯。Sigmoid是用於二元分類而非多類別（多類別用Softmax）。",
        "ml_method": "多層感知機參數量計算 (MLP Parameter Calculation)",
        "ml_method_explanation": "多層感知機（MLP）或全連接神經網路的參數量，完全取決於相鄰兩層節點數量的乘積，再加上目標層的偏差值（Bias）。具體公式為：參數數量 = (上一層節點數 × 本層節點數) + 本層節點數。準確計算並理解神經網路的參數量，對於工程師評估模型的複雜度、記憶體佔用以及判斷模型是否容易發生過擬合，是非常基礎且重要的能力。",
        "examples": [
          "工程師在將訓練好的 NLP 模型部署到微控制器（MCU）上時，必須精確計算每一層的 Dense 層參數量，確保整體模型大小不會超過設備僅有數百 KB 的唯讀記憶體限制。",
          "在設計推薦系統的 Embedding 層時，若特徵維度過大，後接的全連接層參數量會呈指數增長。透過參數量計算，團隊決定在中間加入瓶頸層（Bottleneck Layer）來大幅削減權重數量。"
        ],
        "comparison": "多層感知機（MLP）的參數量計算直接反映了模型的記憶體佔用與運算複雜度。相對於卷積神經網路（CNN）依賴卷積核與權重共享機制來減少參數，MLP 每一層的全連接特性會導致參數隨節點數呈幾何增長。在將 NLP 或推薦系統模型部署於邊緣設備（如 MCU 或手機）的業務場景中，精確計算參數量並設計瓶頸層來瘦身，是落實模型上線的關鍵工程能力。",
        "keywords": [
          "多層感知機 (MLP)",
          "參數量計算 (Parameter Calculation)",
          "全連接層 (Dense Layer)",
          "激活函數 (Activation Function)",
          "神經網路架構 (NN Architecture)"
        ],
        "extended_tech": [
          {
            "name": "Bottleneck Layer (瓶頸層)",
            "desc": "在兩個高維度的全連接層之間，插入一個節點數極少的隱藏層，透過先降維再升維的技巧，大幅削減網路整體的權重參數量與運算開銷。"
          },
          {
            "name": "Softmax Activation (Softmax 激活函數)",
            "desc": "與 Sigmoid 用於二元分類不同，Softmax 用於多類別分類的神經網路輸出層，能將多個輸出值轉換為總和為 1 的機率分佈，直觀呈現預測信心度。"
          },
          {
            "name": "Model Pruning (模型剪枝)",
            "desc": "在模型訓練完成後，計算各節點或權重的重要性，將接近零或無影響力的參數強制作廢，達成縮減模型體積與推論加速的目的。"
          }
        ],
        "terminology": [
          "多層感知機 (Multilayer Perceptron)",
          "全連接層 (Fully Connected Layer)",
          "參數量 (Parameter Count)",
          "偏差 (Bias)"
        ]
      },
      {
        "id": 50,
        "question": "參考訓練與驗證損失圖表（Loss Curve），圖中藍線為訓練損失，紅虛線為驗證損失，下列何者正確？",
        "options": {
          "A": "B、C",
          "B": "A、C、D",
          "C": "A、D",
          "D": "C、D、E"
        },
        "answer": "C",
        "explanation": "觀察典型的損失圖表設定，藍色實線通常表示為 `\"b-\"`，紅色虛線表示為 `\"r--\"`。因此 A (空格1為 `\"b-\"`) 與 D (空格2為 `\"r--\"`) 是 Matplotlib 正確的樣式字串寫法。選項E錯誤，因為在圖表中，驗證損失（紅虛線）通常會高於訓練損失，且減少幅度不如訓練損失明顯（甚至後期會反彈）。所以只有 A、D 描述正確，選項C為正解。",
        "ml_method": "學習曲線視覺化與過擬合判斷 (Learning Curve Visualization)",
        "ml_method_explanation": "學習曲線（Learning Curve）是深度學習訓練過程中最關鍵的診斷工具。透過將訓練損失（Training Loss）與驗證損失（Validation Loss）隨訓練輪數（Epochs）的變化繪製在同一張圖表上，研究人員能直觀地判斷模型的學習狀態。如果兩者持續下降，表示模型正在學習；如果訓練損失下降但驗證損失開始上升，即代表發生過擬合；如果兩者居高不下，則是欠擬合。這種視覺化分析是超參數調整的指南針。",
        "examples": [
          "在開發語音辨識系統時，工程師每天早上的第一件事就是查看前一晚模型訓練的學習曲線圖。若發現紅色的驗證損失在第 20 輪就開始飆升，便會立刻停止訓練並加大 Dropout 的比例。",
          "資料科學家向客戶展示新開發的詐欺預測模型時，常會附上兩條線平穩收斂且緊密貼合的學習曲線圖，藉此證明模型不僅學會了特徵，且並未死背資料，具備良好的實戰泛化能力。"
        ],
        "comparison": "學習曲線視覺化是診斷模型欠擬合或過擬合的最直觀方法。相較於僅依賴最終的 Accuracy 或 F1-score 指標（無法反映訓練過程的穩定性），比較訓練損失與驗證損失隨時間的變化，能精準決定何時啟動早停機制。在語音辨識、詐欺預測等需不斷反覆調校超參數的模型開發業務中，學習曲線圖表是資料科學家調整 Dropout 比例或學習率的最重要決策依據。",
        "keywords": [
          "學習曲線 (Learning Curve)",
          "訓練損失 (Training Loss)",
          "驗證損失 (Validation Loss)",
          "過擬合診斷 (Overfitting Diagnosis)",
          "資料視覺化 (Data Visualization)"
        ],
        "extended_tech": [
          {
            "name": "TensorBoard (深度學習視覺化工具)",
            "desc": "Google 開發的強大視覺化套件，能即時監控訓練與驗證的損失變化、權重分佈與運算圖，幫助工程師在漫長的訓練過程中隨時掌握模型健康度。"
          },
          {
            "name": "Learning Rate Scheduler (學習率排程器)",
            "desc": "配合學習曲線的觀察，設定動態調整策略。當驗證損失在平原區停滯不前時，自動調降學習率，促使模型突破瓶頸找到更佳的局部最佳解。"
          },
          {
            "name": "Cross-Validation Learning Curves (交叉驗證學習曲線)",
            "desc": "在不同資料子集上繪製多條學習曲線並取平均，可消除單一資料切分帶來的隨機波動，更客觀且嚴謹地評估模型的真實泛化能力。"
          }
        ],
        "terminology": [
          "學習曲線 (Learning Curve)",
          "訓練損失 (Training Loss)",
          "驗證損失 (Validation Loss)",
          "超參數調校 (Hyperparameter Tuning)"
        ]
      }
    ]
  },
  "115_1_1": {
    "title": "115 年第一次 - 第一科：人工智慧技術應用與規劃",
    "questions": [
      {
        "id": 1,
        "question": "某工程師正在建置一套法律文件解析系統，在進行資訊擷取（Information Extraction）前，需要對文本進行詞性標註（Part-of-Speech Tagging, POS Tagging）。請問此步驟的主要目的為何？",
        "options": {
          "A": "將文本翻譯為其他語言以利跨語言分析",
          "B": "將文本切分為基本詞彙單位，以便後續處理",
          "C": "判斷文本中各詞彙的情感傾向",
          "D": "為每個詞彙標記其語法類別，如名詞、動詞與形容詞"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。詞性標註的主要目的是為每個單詞標記語法類別（名詞、動詞等），以幫助電腦理解句法結構。(A) 是機器翻譯；(B) 是斷詞；(C) 是情感分析。",
        "ml_method": "Part-of-Speech Tagging (POS Tagging)",
        "ml_method_explanation": "詞性標註（POS Tagging）是自然語言處理的基礎任務，旨在根據上下文語境為文本中的每個單詞分配相應的詞性標籤。這能幫助模型理解句子的語法結構，並為命名實體識別或句法分析提供特徵。傳統上使用隱馬可夫模型（HMM），現今多採用深度學習架構如 LSTM 或 Transformer。",
        "examples": [
          "智慧客服機器人利用詞性標註辨識出對話中的動詞與名詞，以精確提取使用者的核心意圖，例如從「我要退貨」中抓取關鍵動作。",
          "搜尋引擎在處理長尾查詢時，透過詞性標註過濾掉不重要的語氣詞或介系詞，將搜尋權重集中於關鍵名詞，提升搜尋結果的相關性。"
        ],
        "comparison": "詞性標註主要為文本中的每個詞彙標記其語法類別，如名詞、動詞等，主要應用於句法分析與資訊擷取系統，幫助理解句型結構。機器翻譯是將文本轉換為另一種語言，應用於跨國溝通；斷詞是將文本切分為基本單位，為所有NLP任務之前置作業；情感分析則專注於判斷文本情緒傾向，常用於社群媒體監控。",
        "keywords": [
          "詞性標註 (Part-of-Speech Tagging)",
          "資訊擷取 (Information Extraction)",
          "機器翻譯 (Machine Translation)",
          "斷詞 (Tokenization)",
          "情感分析 (Sentiment Analysis)"
        ],
        "extended_tech": [
          {
            "name": "命名實體識別 (Named Entity Recognition)",
            "desc": "應用於從文本中提取人名、地名等特定實體，幫助系統快速掌握關鍵資訊，常應用於新聞分類與醫療病歷分析。"
          },
          {
            "name": "句法分析 (Syntactic Parsing)",
            "desc": "應用於分析句子中詞彙間的語法關係，建立語法樹，常應用於高階機器翻譯與問答系統，以深入理解句型。"
          },
          {
            "name": "依存句法分析 (Dependency Parsing)",
            "desc": "應用於揭示詞彙間的依存關係，幫助理解誰對誰做了什麼，在關係抽取與精確資訊檢索中扮演重要角色。"
          }
        ],
        "terminology": [
          "POS Tagging",
          "Information Extraction",
          "Tokenization",
          "Syntax",
          "Hidden Markov Model"
        ]
      },
      {
        "id": 2,
        "question": "一家新創公司希望對 Llama3 70B 模型進行領域微調（Domain Fine-Tuning）以建立企業專用助理，但 GPU 記憶體有限，無法支撐完整模型的反向傳播梯度計算。工程師希望凍結（freeze）原模型權重、僅訓練少量額外參數的前提下，評估採用 LoRA（Low-Rank Adaptation）方案。請問 LoRA 在此場景下的主要優勢為何？",
        "options": {
          "A": "透過知識蒸餾（Knowledge Distillation）將 70B 模型壓縮為較小的學生模型",
          "B": "對原始模型各層權重進行剪枝（Pruning），移除低重要性參數後再進行微調",
          "C": "凍結原始預訓練權重，僅在各層加入低秩分解的可訓練矩陣，大幅降低可訓練參數量與 GPU 記憶體需求",
          "D": "將模型中的注意力機制改為稀疏注意力（Sparse Attention），以降低長序列計算成本"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。LoRA 的核心思想是凍結預訓練模型權重，並在神經網路層中注入低秩矩陣來逼近權重更新，從而大幅減少可訓練參數和顯存需求。(A) 是知識蒸餾；(B) 是模型剪枝；(D) 是稀疏注意力機制。",
        "ml_method": "LoRA (Low-Rank Adaptation)",
        "ml_method_explanation": "LoRA（Low-Rank Adaptation）是一種參數高效微調（PEFT）技術。當微調大型語言模型時，更新所有參數需要極大的運算與記憶體資源。LoRA 藉由凍結原始模型的權重，並在特定層（如注意力機制中的 Q、V 矩陣）旁新增兩個低階（Low-Rank）的可訓練矩陣相乘來代表權重的變化量，大幅降低訓練成本且不損效能。",
        "examples": [
          "醫療機構在不改變基礎模型架構的情況下，使用 LoRA 針對醫療文獻進行微調，快速打造出符合內部資安要求且具備醫學專業知識的問答系統。",
          "遊戲開發商為不同角色設計專屬對話風格時，只需為每個角色訓練一個輕量級的 LoRA 權重，並在推論時動態切換，大幅節省模型儲存空間。"
        ],
        "comparison": "LoRA透過在固定預訓練權重的基礎上加入低秩矩陣來微調模型，能在極低GPU記憶體消耗下達到接近全參數微調的效果，適合企業打造專屬領域模型。知識蒸餾是將大模型能力轉移到小模型，適合終端部署；模型剪枝是移除不重要參數以縮小體積，用於加速推論；稀疏注意力則降低長文本計算複雜度。",
        "keywords": [
          "領域微調 (Domain Fine-Tuning)",
          "參數高效微調 (PEFT)",
          "低秩適應 (Low-Rank Adaptation)",
          "知識蒸餾 (Knowledge Distillation)",
          "模型剪枝 (Model Pruning)"
        ],
        "extended_tech": [
          {
            "name": "提示微調 (Prompt Tuning)",
            "desc": "在輸入端加入可訓練的連續向量來引導模型，無需修改內部權重，應用於多租戶架構下共用模型以節省儲存成本。"
          },
          {
            "name": "適配器微調 (Adapter Tuning)",
            "desc": "在Transformer架構特定層之間插入小型神經網路模組進行訓練，使得一個大模型能快速適應多種不同的下游任務。"
          },
          {
            "name": "權重量化 (Weight Quantization)",
            "desc": "將模型的浮點數權重轉換為低精度格式，大幅降低模型儲存空間與記憶體頻寬需求，適合缺乏資源的邊緣運算場景。"
          }
        ],
        "terminology": [
          "Low-Rank Adaptation",
          "Domain Fine-Tuning",
          "Knowledge Distillation",
          "Model Pruning",
          "Sparse Attention"
        ]
      },
      {
        "id": 3,
        "question": "某工程師在建構搜尋引擎的詞向量模型時，語料庫規模達數十億 token，且包含大量長尾詞彙（Long-tail Terms）。他在 Word2Vec 的 CBOW 與 Skip-gram 兩種訓練策略之間進行選擇，需考量訓練效率與低頻詞表示品質之差異。下列何者最能準確地反映兩者在此情境下的取捨？",
        "options": {
          "A": "CBOW 對長尾詞表現更好，因為它透過多個上下文詞的平均來強化稀疏詞的訓練訊號",
          "B": "CBOW 訓練速度較快、整體語意平滑，但對低頻詞的向量品質較差；Skip-gram 以中心詞預測周圍詞，對長尾詞累積更多訓練樣本，向量品質較優",
          "C": "Skip-gram 訓練速度更快，因為每次只需預測單一目標詞，計算量低於 CBOW",
          "D": "兩者對低頻詞的表現完全相同，差異僅在於訓練時的 Batch 組織方式"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。CBOW 是用上下文預測中心詞，會平滑掉低頻詞的特徵，訓練較快；Skip-gram 是用中心詞預測上下文，讓低頻詞有更多機會被作為輸入來更新權重，因此對長尾詞和低頻詞的表示更好。(A) 錯誤；(C) Skip-gram 訓練較慢；(D) 表現不相同。",
        "ml_method": "Word2Vec (CBOW vs Skip-gram)",
        "ml_method_explanation": "Word2Vec 是一種將詞彙轉換為密集向量的技術，主要包含 CBOW 與 Skip-gram 兩種架構。CBOW 透過周圍上下文詞來預測中心詞，運算速度快但對低頻詞不敏感；Skip-gram 則是透過中心詞預測周圍上下文詞，計算成本較高，但因為低頻詞有更多機會單獨影響周圍詞的預測，因此對罕見詞的語義捕捉效果更好。",
        "examples": [
          "電子商務平台利用 Skip-gram 模型將商品名稱與描述轉換為向量，從而能夠準確捕捉到銷量較少但具備獨特利基市場的長尾商品之間的關聯性。",
          "新聞推薦系統將用戶的閱讀歷史視為詞序列並訓練 Word2Vec 模型，藉此找出用戶興趣的潛在語義空間，以推薦更符合個人口味的冷門深度報導。"
        ],
        "comparison": "Skip-gram架構透過中心詞預測周圍詞，讓出現頻率極低的長尾詞彙也有獨立機會更新周圍詞彙的權重，因此在捕捉冷門詞義上表現優異，常應用於精細推薦系統。CBOW架構則利用周圍詞預測中心詞，會平滑掉低頻詞訊號，訓練速度快且對高頻詞表現良好，較常應用於一般大眾化的文本分類與基本檢索。",
        "keywords": [
          "詞向量 (Word Embedding)",
          "長尾詞彙 (Long-tail Terms)",
          "連續詞袋模型 (CBOW)",
          "跳躍語法模型 (Skip-gram)",
          "分散式表示 (Distributed Representation)"
        ],
        "extended_tech": [
          {
            "name": "GloVe (Global Vectors)",
            "desc": "結合全局詞頻統計與局部上下文窗口的方法，能捕捉語料庫整體的統計特性，常應用於需要全局語意關聯的分群任務。"
          },
          {
            "name": "FastText",
            "desc": "將詞彙拆解為字元級別的n-gram進行訓練，能有效推論未登錄詞的向量表示，廣泛應用於拼寫錯誤容忍度高的搜尋系統。"
          },
          {
            "name": "詞義消歧 (Word Sense Disambiguation)",
            "desc": "根據上下文判斷一個多義詞在特定句子中的確切含義，常見於機器翻譯、智慧客服與深度語意理解系統中，避免語意混淆。"
          }
        ],
        "terminology": [
          "Word2Vec",
          "CBOW",
          "Skip-gram",
          "Long-tail Terms",
          "Word Embedding"
        ]
      },
      {
        "id": 4,
        "question": "某金融科技公司的工程師正在準備內部客服對話與交易紀錄文本，進行 BERT 模型的預訓練，以提升模型對金融語境的理解能力，並採用遮蔽語言建模（Masked Language Model, MLM）作為訓練任務。請問 MLM 的核心訓練目標為何？",
        "options": {
          "A": "讓模型自左至右逐 token 生成句子，學習自迴歸語言模型（Autoregressive LM）能力",
          "B": "透過對抗訓練（Adversarial Training）縮小真實句與生成句之間的語意差異",
          "C": "隨機遮蔽輸入序列中部分 token，訓練模型根據雙向上下文預測被遮蔽的原始內容",
          "D": "透過遮蔽低頻詞來減少詞彙表大小，降低 Embedding 的記憶體使用"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。MLM 的核心是隨機遮蔽輸入中的部分詞彙，然後讓模型利用前後雙向上下文來預測這些被遮蔽的詞彙，這賦予了 BERT 強大的雙向語意理解能力。(A) 是 GPT 等自迴歸模型的目標；(B) 是 GAN；(D) 描述不符。",
        "ml_method": "Masked Language Modeling (MLM)",
        "ml_method_explanation": "遮蔽語言建模（MLM）是 BERT 等自編碼語言模型的核心預訓練任務。在訓練過程中，模型會隨機將輸入序列中一定比例（通常是 15%）的 token 替換為特殊的 [MASK] 標記，然後要求模型根據被遮蔽詞彙的左側與右側上下文，預測出原來的詞彙。這種方法迫使模型學習深層的雙向語義依賴關係，有別於傳統的單向預測模型。",
        "examples": [
          "法律科技公司利用 MLM 在大量的判決書與合約條文上進行預訓練，使模型能夠精確理解複雜法律詞彙在不同法條上下文中的確切含義。",
          "生物資訊學領域將蛋白質序列視為文本，運用 MLM 技術遮蔽部分胺基酸，讓模型學習預測缺失片段，進而掌握蛋白質的結構與功能特性。"
        ],
        "comparison": "遮蔽語言建模（MLM）透過隨機遮蔽部分詞彙，要求模型利用左右雙向的上下文進行預測，讓BERT能深刻理解詞彙間複雜的雙向依賴關係，廣泛應用於情感分析與閱讀理解。自迴歸語言模型則是自左至右逐詞預測，擅長連續文本生成；對抗訓練用於生成高逼真度影像或音訊，並不屬於傳統語言模型的預訓練核心。",
        "keywords": [
          "遮蔽語言建模 (Masked Language Modeling)",
          "自迴歸語言模型 (Autoregressive LM)",
          "雙向上下文 (Bidirectional Context)",
          "對抗訓練 (Adversarial Training)",
          "自然語言理解 (NLU)"
        ],
        "extended_tech": [
          {
            "name": "預測下一個句子 (Next Sentence Prediction)",
            "desc": "判斷兩個句子在原始文本中是否相鄰，幫助模型理解句子間的邏輯與因果關係，廣泛應用於問答系統與自然語言推理任務。"
          },
          {
            "name": "替換詞彙偵測 (Replaced Token Detection)",
            "desc": "透過判別器來判斷輸入序列中的詞彙是否被生成器替換過，提供更高效的訓練訊號，適用於計算資源受限的大規模預訓練。"
          },
          {
            "name": "跨語言預訓練 (Cross-lingual Pre-training)",
            "desc": "將不同語言的文本映射到同一語意空間，使模型具備多語言理解能力，廣泛應用於跨語言的資訊檢索與零樣本遷移學習。"
          }
        ],
        "terminology": [
          "Masked Language Modeling",
          "Autoregressive LM",
          "Bidirectional Context",
          "Adversarial Training",
          "Pre-training"
        ]
      },
      {
        "id": 5,
        "question": "某電商平台的工程師在開發商品評論情感分析系統時，發現使用 One-Hot 編碼無法表達詞語之間的語意關係，且隨著詞彙表擴大，向量維度與記憶體需求快速增加。工程師因此改用 Word2Vec 進行詞語表示。請問 Word2Vec 從根本上解決了上述問題的哪項限制？",
        "options": {
          "A": "建立詞語之間的序列依賴關係，以捕捉長距離上下文語意",
          "B": "根據詞語在語料中的出現頻率調整其重要性，使模型更重視高頻詞",
          "C": "降低詞彙表示的維度，同時保留語意結構，避免高維稀疏表示所帶來的限制",
          "D": "透過監督式學習利用標註語料，提升詞語分類的準確性"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。One-Hot 編碼是高維度且稀疏的，無法捕捉語義相似度；Word2Vec 透過將詞語映射到低維度的密集向量空間（Dense Vector），同時保留了詞語間的語義與句法關係。(A) 是 RNN/Transformer 的功能；(B) 是 TF-IDF；(D) Word2Vec 是非監督式（自監督）。",
        "ml_method": "Word Embedding (Word2Vec)",
        "ml_method_explanation": "詞嵌入（Word Embedding）技術如 Word2Vec，旨在將詞彙表示為低維且連續的實數向量，取代傳統高維且稀疏的 One-Hot 編碼。它基於「分布假說」，即出現在相似上下文中的詞具有相似的語義。透過神經網路訓練，Word2Vec 能夠將詞彙投影到密集空間，使得語義相近的詞在空間中的距離也相近，並能進行詞彙間的代數運算（如國王-男人+女人=女王）。",
        "examples": [
          "人力資源系統將求職者的履歷關鍵字與職缺描述轉換為密集向量，透過計算向量相似度來實現自動化的人才與職缺精準媒合。",
          "網路論壇的自動審核系統利用詞嵌入技術，將各種惡意言論及其變體映射到相近的向量空間，從而更有效地攔截未見過的變形髒話或攻擊性詞彙。"
        ],
        "comparison": "Word2Vec將詞彙映射到低維度、連續的實數向量空間，減少了記憶體消耗，並能有效保留詞彙間的語意相似性與句法結構，廣泛應用於商品語意匹配與相似詞檢索。One-Hot編碼產生高維且極度稀疏的向量，無法表達詞彙關聯且容易導致維度災難，僅適合無語義關係的簡單統計模型；TF-IDF雖考慮詞頻但無法捕捉深層語境。",
        "keywords": [
          "獨熱編碼 (One-Hot Encoding)",
          "詞向量 (Word Embedding)",
          "密集向量 (Dense Vector)",
          "維度災難 (Curse of Dimensionality)",
          "語義相似度 (Semantic Similarity)"
        ],
        "extended_tech": [
          {
            "name": "文本分類 (Text Classification)",
            "desc": "將文章或句子自動分配到預定義的類別中，如垃圾郵件過濾、新聞主題分類等，透過密集向量表示能顯著提升對同義詞的泛化能力。"
          },
          {
            "name": "語意搜尋 (Semantic Search)",
            "desc": "超越傳統關鍵字匹配，透過計算查詢詞與文件向量之間的相似度，找出意義上最相關的結果，廣泛應用於現代搜尋引擎與推薦系統。"
          },
          {
            "name": "文件嵌入 (Document Embedding)",
            "desc": "將整段句子或整篇文章轉換為單一向量（如Doc2Vec），常用於文章相似度比對、自動文摘以及大規模知識庫的相似文件自動分群。"
          }
        ],
        "terminology": [
          "One-Hot Encoding",
          "Dense Vector",
          "TF-IDF",
          "Semantic Similarity",
          "Word Embedding"
        ]
      },
      {
        "id": 6,
        "question": "某自駕車感知系統需要在同一張影像中同時完成道路、建築、行人的逐像素分類，並且能夠區分畫面中兩名相鄰行人（標記為「行人#1」和「行人#2」）。工程師在選擇語義分割（Semantic Segmentation）與實例分割（Instance Segmentation）時，請問兩者的根本差異為何？",
        "options": {
          "A": "實例分割對每個像素進行分類但不產生 Bounding Box；語義分割產生 Bounding Box 但不進行像素級標記",
          "B": "實例分割僅用於影像層級的類別分類，語義分割才進行逐像素標記",
          "C": "語義分割將每個像素分配至預定義類別，但同一類別內的不同個體無法區分；實例分割能對同一類別的不同物件（如兩名行人）分別建立獨立遮罩（Mask）",
          "D": "語義分割與實例分割皆為逐像素分類任務，但兩者在是否需要區分不同物件個體上並無差異"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。語義分割僅將像素分類為特定的類別（例如「行人」），無法區分同類別的多個個體；實例分割不僅進行逐像素分類，還會區分並獨立標記同類別的不同實例（如「行人1」、「行人2」）。",
        "ml_method": "Instance Segmentation vs Semantic Segmentation",
        "ml_method_explanation": "在電腦視覺中，語義分割（Semantic Segmentation）的目標是為影像中的每一個像素指定一個類別標籤，但它不會區分屬於同一類別的不同物件。相對地，實例分割（Instance Segmentation）結合了物件偵測與語義分割，不僅偵測出影像中所有感興趣的物件個體，還為每個獨立個體生成精確的像素級遮罩（Mask），使其能夠區分同類別中的不同實體。",
        "examples": [
          "醫學影像分析中，實例分割被用來精確區分顯微鏡下重疊的細胞株，讓系統能正確計算細胞數量並獨立分析每個細胞的形態特徵。",
          "智慧工廠的機械手臂利用實例分割技術，在裝滿相同規格零件的散亂料盒中，精準辨識出每一個獨立零件的邊界與位置，以便進行精確夾取。"
        ],
        "comparison": "實例分割不僅進行逐像素分類，還會為影像中的每個獨立個體生成專屬的遮罩，能區分同類別的不同實體，常應用於自動駕駛中精確定位多名行人與車輛。語義分割僅將像素分配給預定義類別，無法區分同類別的不同個體，較常用於背景分析如天空、道路的區域識別；影像分類僅判斷整張影像類別，目標檢測則僅給出邊界框。",
        "keywords": [
          "實例分割 (Instance Segmentation)",
          "語義分割 (Semantic Segmentation)",
          "目標檢測 (Object Detection)",
          "邊界框 (Bounding Box)",
          "逐像素分類 (Pixel-level Classification)"
        ],
        "extended_tech": [
          {
            "name": "全景分割 (Panoptic Segmentation)",
            "desc": "結合語義分割與實例分割的優點，不僅對背景物件進行類別標記，同時也對前景物件進行個體區分，為場景提供最全面的像素級理解。"
          },
          {
            "name": "醫學影像分割 (Medical Image Segmentation)",
            "desc": "應用於精確勾勒腫瘤或器官的邊界形狀，幫助醫師進行病灶體積計算與手術路徑規劃，極大地提升了臨床診斷與治療的精準度。"
          },
          {
            "name": "姿態估計 (Pose Estimation)",
            "desc": "偵測人體關鍵點並連接成骨架，常用於運動分析與人機互動，有時會結合實例分割來針對不同人物的個體姿勢進行精確建模與追蹤。"
          }
        ],
        "terminology": [
          "Instance Segmentation",
          "Semantic Segmentation",
          "Bounding Box",
          "Mask",
          "Computer Vision"
        ]
      },
      {
        "id": 7,
        "question": "某大型超市的防損系統需要即時偵測多名顧客各自手持的購物籃、手機與商品，並需對每個物件進行精確區域標記（Pixel-level Mask），同時能區分畫面中不同個體（即使不同顧客拿著相同商品，也需分別標記）。請問下列哪一項技術最適合此場景的需求？",
        "options": {
          "A": "影像分類（Image Classification）",
          "B": "目標檢測（Object Detection）",
          "C": "實例分割（Instance Segmentation）",
          "D": "語義分割（Semantic Segmentation）"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。因為系統需要「精確區域標記（Pixel-level Mask）」且「區分畫面中不同個體」，這完全符合實例分割（Instance Segmentation）的定義。(A) 僅分類；(B) 僅提供 Bounding Box；(D) 無法區分同類不同個體。",
        "ml_method": "Instance Segmentation",
        "ml_method_explanation": "實例分割（Instance Segmentation）是一種進階的電腦視覺任務，旨在同時解決物件偵測和語義分割的問題。它不僅要在影像中定位出各個物件並給定類別，還必須為每一個物件生成精確的像素級遮罩（Mask）。常見的模型架構如 Mask R-CNN，它在 Faster R-CNN 的基礎上增加了一個全卷積網路分支，專門用來預測每個候選區域內的像素遮罩。",
        "examples": [
          "農業無人機利用實例分割技術拍攝果園，精確區分並計算樹上每一顆蘋果的輪廓與大小，以評估果園的整體產量與成熟度分布。",
          "物流倉儲中的自動點貨機器人，透過實例分割準確辨識堆疊在棧板上的每一個獨立紙箱，即使紙箱外觀完全相同，也能精準計算數量並規劃搬運路徑。"
        ],
        "comparison": "實例分割能夠精確地進行逐像素標記，並且能區分畫面中屬於同一類別的不同個體，非常適合需要精細輪廓與數量統計的防損系統或無人機農業檢測。影像分類僅能告知畫面中有無特定物品；目標檢測雖然能框出每個個體，但只能提供粗略的矩形邊界框，無法給出精確形狀；語義分割能給出精確形狀，卻無法區分不同的顧客與商品。",
        "keywords": [
          "實例分割 (Instance Segmentation)",
          "精確區域標記 (Pixel-level Mask)",
          "影像分類 (Image Classification)",
          "目標檢測 (Object Detection)",
          "語義分割 (Semantic Segmentation)"
        ],
        "extended_tech": [
          {
            "name": "Mask R-CNN",
            "desc": "實例分割領域的經典模型，在Faster R-CNN的基礎上新增了預測遮罩的分支，廣泛應用於工業自動化檢測與精細的醫療影像病灶標記。"
          },
          {
            "name": "影片實例分割 (Video Instance Segmentation)",
            "desc": "不僅在單張影像中分割物件，還能在連續影片影格中追蹤該物件的遮罩變化，常應用於安防監控系統以及進階的運動賽事分析轉播。"
          },
          {
            "name": "3D點雲分割 (3D Point Cloud Segmentation)",
            "desc": "將實例分割的概念延伸至三維空間，對光達掃描的點雲資料進行物件分離，為自動駕駛車輛提供高精度的立體環境感知與障礙物識別。"
          }
        ],
        "terminology": [
          "Instance Segmentation",
          "Pixel-level Mask",
          "Mask R-CNN",
          "Object Detection",
          "Semantic Segmentation"
        ]
      },
      {
        "id": 8,
        "question": "某工程師訓練了一個皮膚病變二元分類模型（惡性/良性），在向臨床醫師報告模型效能時，使用 ROC 曲線（Receiver Operating Characteristic Curve）進行呈現。請問 ROC 曲線的橫軸（X 軸）與縱軸（Y 軸）分別代表哪些指標，且在醫療情境中代表哪一種意義？",
        "options": {
          "A": "X 軸為準確率（Accuracy），Y 軸為召回率（Recall），表示模型整體分類正確比例與偵測能力",
          "B": "X 軸為假陽率（False Positive Rate, FPR），Y 軸為真陽率（True Positive Rate, TPR），反映誤診健康個體的風險與正確識別病患的能力",
          "C": "X 軸為精確率（Precision），Y 軸為召回率（Recall），表示預測為陽性樣本的準確性與完整性",
          "D": "X 軸為 IoU 閾值，Y 軸為 mAP，反映物件偵測模型在不同重疊條件下的表現"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。ROC 曲線的 X 軸是 FPR（假陽性率），代表將健康人誤判為有病的比例；Y 軸是 TPR（真陽性率，即召回率），代表真正有病且被正確診斷出的比例。(C) 是 PR 曲線；(D) 是物件偵測指標。",
        "ml_method": "Receiver Operating Characteristic (ROC) Curve",
        "ml_method_explanation": "ROC 曲線（接收者操作特徵曲線）是二元分類模型效能評估的重要工具。它藉由描繪在不同分類閾值下的真陽性率（TPR，即召回率）對上假陽性率（FPR）來呈現模型的診斷能力。曲線越靠近左上角，表示模型能在保持較低誤報率的同時實現較高的捕捉率。其下方的面積（AUC）常用作量化模型排序能力的單一指標。",
        "examples": [
          "銀行在信用卡盜刷偵測系統中利用 ROC 曲線評估模型，權衡阻止真實盜刷的成功率與將正常交易誤判為盜刷而凍結卡片的客戶抱怨風險。",
          "工廠的產線瑕疵檢測系統使用 ROC 曲線來決定最佳的出貨攔截閾值，以在攔截不良品與避免誤殺良品報廢之間取得最佳的經濟平衡。"
        ],
        "comparison": "ROC曲線以假陽性率為X軸，真陽性率為Y軸，用來評估模型在不同閾值下的整體排序與區分能力，特別適合醫療診斷這類需要權衡誤診與漏診風險的情境。相比之下，PR曲線（以召回率為X軸，精確率為Y軸）更適合處理正負樣本極度不平衡的資料集；而IoU與mAP則是專用於評估物件偵測模型框選位置準確性的指標。",
        "keywords": [
          "ROC曲線 (ROC Curve)",
          "假陽性率 (False Positive Rate)",
          "真陽性率 (True Positive Rate)",
          "召回率 (Recall)",
          "曲線下面積 (AUC)"
        ],
        "extended_tech": [
          {
            "name": "精確率-召回率曲線 (PR Curve)",
            "desc": "探討精確率與召回率之間的取捨關係，在負樣本數量壓倒性多於正樣本的情況下，PR曲線能比ROC曲線更真實地反映分類模型的實際效能。"
          },
          {
            "name": "F1分數 (F1-Score)",
            "desc": "精確率與召回率的調和平均數，提供了一個單一的平衡評估指標，廣泛應用於要求精確率與召回率並重的二元分類任務及自然語言處理。"
          },
          {
            "name": "成本敏感學習 (Cost-Sensitive Learning)",
            "desc": "在模型訓練過程中為不同類型的預測錯誤分配不同的懲罰權重，常用於醫療與金融防詐，以最小化誤判帶來的整體業務或健康損失。"
          }
        ],
        "terminology": [
          "ROC Curve",
          "False Positive Rate",
          "True Positive Rate",
          "Recall",
          "Precision"
        ]
      },
      {
        "id": 9,
        "question": "某團隊在監控影像分類模型的線上效能時，透過儀表板呈現混淆矩陣（Confusion Matrix），以觀察模型預測結果與實際標籤的分佈情形。請問下列哪一項無法從混淆矩陣中直接計算？",
        "options": {
          "A": "精確率（Precision）",
          "B": "準確率（Accuracy）",
          "C": "召回率（Recall）",
          "D": "ROC 曲線下面積（AUC）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。混淆矩陣反映的是在「單一給定閾值」下的預測結果（TP、TN、FP、FN），可以計算 Precision、Accuracy 和 Recall。但是 AUC 衡量的是模型在「所有可能閾值」下的表現，無法單純從單一閾值的混淆矩陣直接計算得出。",
        "ml_method": "Confusion Matrix & AUC",
        "ml_method_explanation": "混淆矩陣（Confusion Matrix）是一種將模型分類預測與真實標籤進行交叉比對的矩陣，能直觀呈現真陽性、偽陽性、真陰性與偽陰性的數量，從而計算出精確率、召回率與準確率等指標。然而，AUC（ROC曲線下面積）是評估模型在各種分類閾值下區分正負樣本的整體排序能力，這需要模型輸出的機率值來繪製整條曲線，無法僅從單一閾值產生的混淆矩陣計算。",
        "examples": [
          "行銷團隊利用混淆矩陣來評估顧客流失預測模型，明確得知有多少潛在流失客戶被成功識別，以及有多少忠誠客戶被錯誤地發送了挽留折扣。",
          "垃圾郵件過濾系統的開發者查看混淆矩陣，以了解系統將正常工作郵件誤判為垃圾郵件的具體數量，進而調整過濾規則以降低偽陽性。"
        ],
        "comparison": "混淆矩陣呈現的是模型在「單一特定閾值」下的預測結果與真實標籤分布，適合用來直接計算該閾值下的精確率、召回率與準確率，廣泛應用於業務端評估當前上線版本的實際攔截與誤殺數量。然而，AUC衡量的是模型在「所有可能閾值」下的綜合排序能力，無法單純從一個靜態的混淆矩陣推導出來，需要模型整體的機率輸出。",
        "keywords": [
          "混淆矩陣 (Confusion Matrix)",
          "精確率 (Precision)",
          "準確率 (Accuracy)",
          "召回率 (Recall)",
          "ROC曲線下面積 (AUC)"
        ],
        "extended_tech": [
          {
            "name": "多類別混淆矩陣 (Multi-class Confusion Matrix)",
            "desc": "將二元分類的混淆矩陣擴展至多個類別，幫助開發者精確找出模型最容易將哪兩個特定類別互相混淆，常應用於影像辨識的錯誤分析。"
          },
          {
            "name": "校準曲線 (Calibration Curve)",
            "desc": "用來評估模型輸出的機率值是否真實反映了實際發生的頻率，對於醫療診斷與信用評分等極度依賴準確機率預測的應用場景至關重要。"
          },
          {
            "name": "A/B測試 (A/B Testing)",
            "desc": "在線上環境將流量隨機分配給新舊模型，透過真實用戶行為數據來評估模型的商業價值，是彌補離線混淆矩陣與實際業務表現落差的關鍵。"
          }
        ],
        "terminology": [
          "Confusion Matrix",
          "Precision",
          "Accuracy",
          "Recall",
          "AUC"
        ]
      },
      {
        "id": 10,
        "question": "某工廠導入即時影像瑕疵偵測系統，需在高頻影像流中進行快速推論。工程師在 YOLO 與 Faster R-CNN 兩種物件偵測架構之間進行評估，請問下列哪一個針對兩者在偵測流程設計上的差異最為正確？",
        "options": {
          "A": "YOLO 採用單階段偵測，直接從整張影像預測物件位置與類別；Faster R-CNN 則先產生候選區域再進行分類",
          "B": "YOLO 與 Faster R-CNN 皆採用兩階段流程，但在特徵擷取方式上有所不同",
          "C": "YOLO 採用單階段架構，主要透過增加候選區域數量來提升偵測準確率",
          "D": "Faster R-CNN 採用單階段偵測方式，將物件定位與分類整合於同一模型中"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。YOLO（You Only Look Once）是單階段（One-stage）目標檢測演算法，將檢測視為回歸問題，速度極快；而 Faster R-CNN 是兩階段（Two-stage）演算法，先使用 RPN 生成候選區域（Region Proposals），再對區域進行分類與邊界框微調，準確率較高但速度較慢。",
        "ml_method": "Object Detection (YOLO vs Faster R-CNN)",
        "ml_method_explanation": "目標檢測演算法主要分為兩大流派：兩階段與單階段。Faster R-CNN 代表兩階段演算法，它首先利用區域生成網路（RPN）找出影像中可能存在物件的候選框，然後再對這些框進行特徵擷取與分類，精度較高但推論較慢。YOLO 則是單階段演算法的代表，它將物件定位與分類整合為單一的回歸問題，直接在特徵圖上同時預測邊界框與類別，因此具備極高的即時推論速度。",
        "examples": [
          "智慧城市的交通監控攝影機採用 YOLO 模型，能夠在極短的延遲內即時追蹤並辨識車流與行人，為紅綠燈動態控制提供實時數據。",
          "醫療研究團隊在分析高解析度的病理切片時，選擇使用 Faster R-CNN 來偵測微小的腫瘤細胞，因為此場景對定位精準度的要求遠高於即時推論速度。"
        ],
        "comparison": "YOLO是一種單階段目標檢測演算法，將檢測視為回歸問題，直接在特徵圖上預測邊界框與類別，推論速度極快，非常適合工廠即時瑕疵偵測或自駕車環境感知。相對地，Faster R-CNN屬於兩階段演算法，先透過區域生成網路(RPN)產生候選框，再進行特徵提取與分類，準確率通常較高，但運算較慢，常應用於醫療病理切片分析。",
        "keywords": [
          "目標檢測 (Object Detection)",
          "單階段演算法 (One-stage Algorithm)",
          "兩階段演算法 (Two-stage Algorithm)",
          "YOLO",
          "Faster R-CNN"
        ],
        "extended_tech": [
          {
            "name": "區域生成網路 (Region Proposal Network, RPN)",
            "desc": "Faster R-CNN中的關鍵組件，負責在整張影像中快速篩選出可能包含物件的候選區域，大幅提升了兩階段檢測模型在定位上的精準度。"
          },
          {
            "name": "特徵金字塔網路 (Feature Pyramid Network, FPN)",
            "desc": "整合不同尺度的特徵圖以增強模型對各尺寸物件的偵測能力，特別是針對微小物體的識別，廣泛應用於先進的單階段與兩階段目標檢測模型中。"
          },
          {
            "name": "非極大值抑制 (Non-Maximum Suppression, NMS)",
            "desc": "物件偵測流程的最後步驟，用於過濾掉針對同一物件生成的多個重疊邊界框，僅保留信心分數最高的一個，確保最終輸出結果的清晰與唯一性。"
          }
        ],
        "terminology": [
          "Object Detection",
          "YOLO",
          "Faster R-CNN",
          "One-stage",
          "Two-stage"
        ]
      },
      {
        "id": 11,
        "question": "某工程師在分析 Transformer 架構時，發現自注意力機制（Self-Attention）能夠有效提升模型對序列中長距離依賴關係的建模能力。請問 Self-Attention 的核心功能為何？",
        "options": {
          "A": "透過隱藏狀態的遞迴傳遞，逐步累積序列中的上下文資訊",
          "B": "讓序列中每個 token 能與其他所有 token 建立關聯，並根據重要性分配權重",
          "C": "對輸入序列進行局部運算，以捕捉相鄰詞之間的關係",
          "D": "將整個序列壓縮為固定長度表示，以提供後續任務使用"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。自注意力機制（Self-Attention）允許序列中的每一個 token 直接計算與序列中所有其他 token 的關聯性（權重），從而有效捕捉長距離依賴關係。(A) 是 RNN 的特性；(C) 是 CNN 的特性；(D) 是一般 Encoder 的池化輸出。",
        "ml_method": "Self-Attention Mechanism",
        "ml_method_explanation": "自注意力機制（Self-Attention）是 Transformer 模型的核心創新，它打破了傳統 RNN 必須按順序處理序列的限制。在處理序列時，Self-Attention 允許每個單詞（Token）去檢視句子中的所有其他單詞，並透過點積運算計算出彼此之間的相關性權重。接著，它會根據這些權重對所有單詞的特徵進行加權總和，從而讓每個單詞的表示都能融合全局的上下文資訊，有效解決長距離依賴問題。",
        "examples": [
          "機器翻譯系統利用自注意力機制正確理解代名詞所指代的對象，例如在「那隻狗沒有過馬路因為它太累了」中，模型能將「它」與「狗」建立強烈關聯。",
          "推薦系統將使用者的歷史瀏覽紀錄視為序列，運用自注意力機制找出長期行為中互相關聯的興趣點，藉此提供更具個人化脈絡的商品推薦。"
        ],
        "comparison": "自注意力機制允許序列中的每個token直接計算與所有其他token的關聯權重，從而無縫捕捉長距離的語意依賴關係，是Transformer在機器翻譯與長文本理解上超越過去架構的關鍵。RNN則是透過隱藏狀態逐字遞迴傳遞資訊，容易在長序列中遺忘早期上下文；CNN則依賴局部卷積核，只能捕捉相鄰詞彙間的短距離特徵。",
        "keywords": [
          "自注意力機制 (Self-Attention Mechanism)",
          "長距離依賴 (Long-range Dependency)",
          "Transformer",
          "遞迴神經網路 (RNN)",
          "卷積神經網路 (CNN)"
        ],
        "extended_tech": [
          {
            "name": "多頭注意力機制 (Multi-Head Attention)",
            "desc": "將自注意力機制平行執行多次，允許模型從不同的表示子空間同時捕捉多種語意特徵，進一步增強了模型對複雜句型與深層語意關係的解析能力。"
          },
          {
            "name": "位置編碼 (Positional Encoding)",
            "desc": "由於自注意力機制本身沒有順序概念，必須透過注入位置編碼來提供序列的絕對或相對位置資訊，這是Transformer能夠正確理解語句順序的基礎。"
          },
          {
            "name": "交叉注意力機制 (Cross-Attention Mechanism)",
            "desc": "在編碼器-解碼器架構中，讓解碼器在生成每個詞彙時能夠動態對齊並關注編碼器輸出的相關來源資訊，廣泛應用於機器翻譯與語音辨識系統。"
          }
        ],
        "terminology": [
          "Self-Attention",
          "Long-range Dependency",
          "Transformer",
          "RNN",
          "CNN"
        ]
      },
      {
        "id": 12,
        "question": "某工程師在設計一個二元分類器（Binary Classifier）時，考慮在輸出層使用 Sigmoid 函數。請問 Sigmoid 函數的主要特性與限制為何？",
        "options": {
          "A": "可將輸入轉換為任意實數範圍，適合用於迴歸任務",
          "B": "可將輸入壓縮至(0, 1) 區間，可解釋為機率值，但在輸入值過大或過小時可能產生梯度消失問題",
          "C": "可將輸入轉換為多類別機率分布，常用於多分類任務",
          "D": "可在整個輸入範圍內梯度保持穩定，適合用於深層神經網路"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。Sigmoid 函數將任意實數映射到 (0, 1) 之間，常被解釋為二元分類的正類機率。然而，當輸入的絕對值很大時，Sigmoid 的曲線會變得非常平緩，導致導數趨近於零，從而在反向傳播時引發梯度消失問題。(A) 描述不符；(C) 這是 Softmax 的特性；(D) 這是 ReLU 的特性。",
        "ml_method": "Sigmoid Activation Function",
        "ml_method_explanation": "Sigmoid 是一種非線性啟動函數，數學形式為 1 / (1 + e^-x)，能將任何實數輸入壓縮到 0 到 1 之間。這使得它非常適合用於二元分類模型的輸出層，用以表示預測為正類的機率。然而，Sigmoid 函數在兩端的斜率極小，這意味著當神經網路層數較深且輸入值過大或過小時，反向傳播的梯度會迅速衰減至零，導致著名的梯度消失（Vanishing Gradient）問題，阻礙深層網路的學習。",
        "examples": [
          "銀行的貸款違約預測模型在最終輸出層使用 Sigmoid 函數，將複雜的客戶財務特徵運算結果轉換為 0 到 1 的風險機率，供審核人員參考。",
          "醫療感測器演算法透過 Sigmoid 函數處理從穿戴裝置收集來的心跳波動特徵，輸出使用者目前處於「睡眠」或「清醒」狀態的機率值。"
        ],
        "comparison": "Sigmoid函數能將實數映射到(0,1)之間，適合表示二元分類的正類機率，廣泛應用於貸款違約或疾病預測。但其在輸入值極大或極小時斜率趨近於零，容易在深層網路引發梯度消失問題，使得模型難以訓練。相對地，ReLU函數在正數區間梯度穩定為1，有效解決了梯度消失問題；而Softmax則是將輸入轉換為多類別的機率分布。",
        "keywords": [
          "Sigmoid函數 (Sigmoid Function)",
          "二元分類 (Binary Classification)",
          "梯度消失 (Vanishing Gradient)",
          "ReLU函數 (ReLU Function)",
          "Softmax函數 (Softmax Function)"
        ],
        "extended_tech": [
          {
            "name": "ReLU啟動函數 (Rectified Linear Unit)",
            "desc": "當前深度學習中最廣泛使用的啟動函數，能有效緩解深層網路中的梯度消失問題，顯著加速模型的收斂速度，廣泛應用於各類卷積神經網路中。"
          },
          {
            "name": "批次正規化 (Batch Normalization)",
            "desc": "在每一層神經網路輸入前對數據進行標準化處理，可避免啟動函數落入飽和區，搭配Sigmoid等函數使用能進一步穩定深層模型的訓練過程。"
          },
          {
            "name": "Softmax回歸 (Softmax Regression)",
            "desc": "Sigmoid函數在多類別分類任務上的推廣形式，能將網路輸出轉換為各類別的機率總和為1的分布，是現代影像辨識與語言模型輸出層的標準配置。"
          }
        ],
        "terminology": [
          "Sigmoid",
          "Binary Classification",
          "Vanishing Gradient",
          "ReLU",
          "Softmax"
        ]
      },
      {
        "id": 13,
        "question": "某公司評估兩種方案，將大型語言模型客製化為內部客服助理：方案 A 為提示微調（Prompt Tuning），在輸入端加入可學習的軟提示（Soft Prompt）；方案 B 為傳統微調（Fine-Tuning），以標註問答資料調整模型。兩方案最本質的技術差異為何？",
        "options": {
          "A": "提示微調主要用於降低推論延遲，而傳統微調則用於提升模型容量",
          "B": "兩者技術本質相同，差別僅在於學習率（Learning Rate）設定不同",
          "C": "傳統微調通常需要更新模型參數，而提示微調主要透過調整輸入表示來影響模型行為",
          "D": "提示微調與傳統微調的差異僅在於是否使用預訓練模型"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。傳統微調（Fine-Tuning）會更新預訓練模型內部的權重參數；而提示微調（Prompt Tuning）則保持模型參數凍結，僅在輸入層添加一段可訓練的連續向量（軟提示）來引導模型生成所需結果。",
        "ml_method": "Prompt Tuning vs Fine-Tuning",
        "ml_method_explanation": "在客製化大型語言模型時，傳統微調（Fine-Tuning）會利用特定任務的資料，透過反向傳播更新模型內部龐大的神經網路參數，這需要耗費大量的運算資源。相對地，提示微調（Prompt Tuning）則凍結了語言模型的原始參數，轉而將一組可訓練的虛擬向量（Soft Prompts）拼接到輸入序列前，僅更新這組虛擬向量來引導模型行為，是一種極具資源效率的參數高效微調（PEFT）方法。",
        "examples": [
          "雲端服務供應商為數百家企業客戶提供客製化問答模型時，採用 Prompt Tuning 策略，讓所有客戶共用同一套基礎模型，僅需儲存各自的軟提示向量，大幅節省儲存成本。",
          "新聞機構在針對不同文體（如體育、財經、娛樂）自動生成摘要時，使用 Prompt Tuning 為每種文體訓練專屬的前綴向量，從而在不修改核心模型的前提下快速切換生成風格。"
        ],
        "comparison": "傳統微調會更新模型內部龐大的權重參數，需要耗費大量運算與儲存資源；而提示微調（Prompt Tuning）則保持模型參數完全凍結，僅在輸入層添加可訓練的軟提示向量來引導輸出。這使得提示微調特別適合雲端供應商在多租戶架構下，讓百家企業共用同一套底層模型，各自僅需儲存輕量級的提示向量，大幅降低營運成本。",
        "keywords": [
          "提示微調 (Prompt Tuning)",
          "傳統微調 (Fine-Tuning)",
          "參數高效微調 (PEFT)",
          "軟提示 (Soft Prompt)",
          "大型語言模型 (LLM)"
        ],
        "extended_tech": [
          {
            "name": "前綴微調 (Prefix-Tuning)",
            "desc": "與提示微調類似，但在Transformer的每一層都加入可訓練的前綴向量，提供了更強的表達能力，特別適用於自然語言生成任務如自動摘要與對話系統。"
          },
          {
            "name": "指示微調 (Instruction Tuning)",
            "desc": "使用大量多樣化且帶有明確指令的任務資料對語言模型進行全面微調，使其能更好地理解並遵循人類指令，是打造ChatGPT等通用助理的關鍵技術。"
          },
          {
            "name": "上下文學習 (In-Context Learning)",
            "desc": "完全不更新任何參數，僅透過在提示詞中提供數個任務範例（Few-shot）來引導模型產生預期結果，是利用超大型語言模型進行快速任務原型的首選。"
          }
        ],
        "terminology": [
          "Prompt Tuning",
          "Fine-Tuning",
          "PEFT",
          "Soft Prompt",
          "LLM"
        ]
      },
      {
        "id": 14,
        "question": "某工程師計劃將通用 LLM 在醫療問答語料上進行監督微調（Supervised Fine-Tuning, SFT），但發生了災難性遺忘（Catastrophic Forgetting）問題。在計算資源有限的情況下，工程師希望透過調整微調策略來緩解此問題。下列哪一種訓練設計最能有效率地學習新任務的同時保留原有能力？",
        "options": {
          "A": "凍結大部分預訓練參數，僅對少量新增模組（如 LoRA 層）進行微調，並控制更新範圍以減少對原有知識的干擾",
          "B": "提高學習率（Learning Rate）並縮短訓練步數，使模型快速收斂至新任務，避免長時間訓練造成遺忘",
          "C": "僅使用醫療語料進行多輪訓練，強化模型對新任務的專注程度",
          "D": "增加批次大小（Batch Size）以穩定梯度更新，使模型同時保留舊知識與學習新知識"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。災難性遺忘是指模型在學習新知識時，大幅覆蓋並遺忘了原本預訓練所掌握的知識。使用參數高效微調（PEFT，如 LoRA）透過凍結原參數、僅訓練少量外掛模組，能有效限制更新範圍，保留基礎模型的原有能力。其他選項（提高學習率或僅用醫療語料）反而會加劇遺忘。",
        "ml_method": "Parameter-Efficient Fine-Tuning (PEFT) / LoRA",
        "ml_method_explanation": "災難性遺忘（Catastrophic Forgetting）是神經網路在學習新任務時，因權重劇烈更新而喪失舊有任務能力的現象。為了在資源受限下克服此問題，參數高效微調（PEFT）技術如 LoRA 被廣泛應用。LoRA 透過凍結原始的大型權重矩陣，僅在特定層注入並訓練低維度的旁路矩陣。由於原始權重保持不變，模型原本的廣泛知識得以完好保留，同時又能透過新增的模組適應特定的下游任務。",
        "examples": [
          "法律事務所將通用的基礎語言模型微調為法律契約審查助手，透過 LoRA 技術保留了模型優異的日常對話與語言邏輯能力，同時又精通了艱澀的法律條文分析。",
          "軟體公司開發針對特定程式語言（如 Rust）的代碼生成工具時，使用 PEFT 技術微調模型，確保模型在學習 Rust 語法的同時，不會遺忘原本擅長的 Python 或 C++ 基礎編程知識。"
        ],
        "comparison": "災難性遺忘是模型學習新任務時覆蓋舊有知識的現象。透過PEFT技術（如LoRA）凍結原參數、僅訓練少量外掛模組，能有效保留基礎模型的廣泛能力，同時精通醫療等新領域知識，非常適合資源受限的情境。提高學習率或僅用新語料多輪訓練反而會加劇遺忘；增加批次大小雖穩定梯度，但無法從根本架構上解決遺忘問題。",
        "keywords": [
          "災難性遺忘 (Catastrophic Forgetting)",
          "參數高效微調 (PEFT)",
          "LoRA",
          "監督微調 (Supervised Fine-Tuning)",
          "領域知識 (Domain Knowledge)"
        ],
        "extended_tech": [
          {
            "name": "彈性權重鞏固 (Elastic Weight Consolidation, EWC)",
            "desc": "一種經典的持續學習演算法，透過在損失函數中加入正則化項，限制對舊任務重要參數的更新幅度，從而在學習新知識時有效減緩災難性遺忘。"
          },
          {
            "name": "經驗重播 (Experience Replay)",
            "desc": "在訓練新任務時，隨機混入少量舊任務的訓練資料一起進行訓練，強迫模型在更新參數時兼顧過去的記憶，廣泛應用於持續學習與強化學習場景。"
          },
          {
            "name": "適配器模組 (Adapter Modules)",
            "desc": "在預訓練模型的各層之間插入輕量級的神經網路模組，微調時僅更新這些適配器參數，能以極低的資源成本讓單一模型同時掌握多種不同的下游任務。"
          }
        ],
        "terminology": [
          "Catastrophic Forgetting",
          "PEFT",
          "LoRA",
          "Supervised Fine-Tuning",
          "Continual Learning"
        ]
      },
      {
        "id": 15,
        "question": "某企業建置一套多代理人（Multi-Agent）系統，由一個 Orchestrator Agent 負責任務分配，多個 Worker Agent 分別執行網路搜尋、程式撰寫與結果彙整。若 Orchestrator 發現某 Worker Agent 回傳結果品質不符合預期，從系統容錯與任務可靠性角度，下列哪一項機制最能確保整體任務仍能正確完成？",
        "options": {
          "A": "直接採用該 Worker Agent 的輸出，避免重試機制造成延遲",
          "B": "Orchestrator 具備結果評估能力，對不合格結果觸發重試（Retry）或重新分配給不同 Worker，並記錄失敗原因供後續改善",
          "C": "強制所有 Worker Agent 統一使用相同的 LLM 模型，以減少輸出差異",
          "D": "當任何一個 Worker 失敗時，整個 Multi-Agent 任務直接中止並通知使用者重新啟動"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。在多代理人系統中，設計一個具備評估與重試/重新分配機制的 Orchestrator 是確保系統容錯性（Fault Tolerance）與魯棒性的最佳實踐。(A) 會導致最終結果品質低落；(C) 失去多模型多樣性的優勢；(D) 過於脆弱，缺乏自動恢復能力。",
        "ml_method": "Multi-Agent System (Orchestration & Fault Tolerance)",
        "ml_method_explanation": "多代理人系統（Multi-Agent System）由多個自主運作、各司其職的 AI 代理人協同完成複雜任務。在這樣的架構中，協調者（Orchestrator）扮演著大腦的角色，不僅負責任務分解與派發，更關鍵的是要具備閉環控制能力。當工作節點（Worker Agent）產生幻覺、出錯或輸出不達標時，協調者應能進行品質評估（Evaluation），並啟動重試（Retry）或重新規劃路徑，以此建立強健的容錯機制。",
        "examples": [
          "自動化軟體開發平台中，協調代理人會將程式碼撰寫任務交給編程代理人，隨後將產出交給測試代理人，若測試失敗，協調代理人會將錯誤日誌反饋給編程代理人要求重寫。",
          "企業行銷內容生成系統中，協調者指派撰稿代理人撰寫文章，並由審核代理人檢查品牌語氣與事實，若發現偏誤，協調者會退回稿件並附加具體修改建議，直至達標為止。"
        ],
        "comparison": "在多代理人系統中，設計具備評估與重試機制的 Orchestrator 是確保系統容錯性的最佳實踐。當Worker Agent出錯時，協調者能記錄原因並要求重試，這比直接採用錯誤結果更能保障任務品質。強制使用相同模型會失去異質代理人的多樣性優勢；而一旦Worker失敗就中止任務則系統過於脆弱，缺乏實務上必要的自動恢復能力。",
        "keywords": [
          "多代理人系統 (Multi-Agent System)",
          "協調者 (Orchestrator)",
          "容錯機制 (Fault Tolerance)",
          "重試機制 (Retry Mechanism)",
          "結果評估 (Evaluation)"
        ],
        "extended_tech": [
          {
            "name": "任務分解 (Task Decomposition)",
            "desc": "協調者將龐大複雜的使用者請求拆解為多個可獨立執行的小型子任務，並分派給專業領域的代理人，大幅降低了單一模型處理複雜問題的失敗率。"
          },
          {
            "name": "反思機制 (Self-Reflection)",
            "desc": "賦予AI代理人審視自身輸出結果並主動識別錯誤的能力，透過內部的迭代修改來提升最終生成的程式碼或文本品質，是進階Agent架構的核心組件。"
          },
          {
            "name": "代理人通訊協議 (Agent Communication Protocol)",
            "desc": "規範多個代理人之間交換資訊、協商決策與傳遞狀態的標準格式，確保異質代理人能夠在分散式架構中無縫協作完成跨部門或跨領域的複合任務。"
          }
        ],
        "terminology": [
          "Multi-Agent System",
          "Orchestrator",
          "Fault Tolerance",
          "Retry",
          "Self-Reflection"
        ]
      },
      {
        "id": 16,
        "question": "一位工程師正在實作一個 ReAct 框架的 AI Agent，該 Agent 需要回答「台灣目前最大的電動車充電站營運商是哪間公司，以及其充電樁總數」。Agent 的工具清單包含網頁搜尋、取得網頁內文、計算機與日期。在第一輪執行時，Agent 直接輸出 Thought 表示已知答案，並未呼叫搜尋工具即給出具體數字。請問此 Agent 設計存在哪些問題？應如何改善？",
        "options": {
          "A": "System Prompt 未要求 Agent 在回答前使用工具驗證，導致直接依賴既有知識產生幻覺（Hallucination）；應明確規定即時性問題需先執行 web_search",
          "B": "工具清單提供了 calculator 與 get_current_date，屬於多餘工具，可能增加 Agent 的選擇複雜度",
          "C": "ReAct 框架的核心問題在於 Thought 步驟佔用過多 token，應移除 Thought 欄位，直接讓 Agent 輸出 Action，以提升推理效率",
          "D": "Agent 應在第一輪就呼叫所有可用工具並彙整結果，避免多輪 Loop 造成的延遲"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。大型語言模型在處理需要最新資訊的即時性問題時，若依賴內部參數（即有知識）回答，極易產生幻覺。在 ReAct 框架中，必須透過 System Prompt 強制引導 Agent 在回答事實性問題前，必須先使用外部工具（如網路搜尋）進行查證與 grounding。移出 Thought (C) 會破壞 ReAct (Reasoning and Acting) 框架的核心價值。",
        "ml_method": "ReAct Framework (Reasoning and Acting)",
        "ml_method_explanation": "ReAct 框架是一種將大型語言模型的推理（Reasoning）與行動（Acting）交織結合的 Agent 架構。在傳統方法中，模型往往直接給出最終答案，而 ReAct 要求模型在執行任何動作前，先輸出內部思考過程（Thought），接著根據思考選擇並執行外部工具（Action），然後觀察工具的回傳結果（Observation），再進入下一輪思考。這種明確的思維鏈設計大幅提升了模型解決複雜任務的可靠性與可解釋性。",
        "examples": [
          "個人理財助理 Agent 收到用戶詢問「今天台積電的殖利率是多少」時，不會直接憑記憶回答，而是先思考需要最新股價與配息資訊，接著呼叫財經 API 獲取即時數據後才給出精準解答。",
          "IT 維運自動化 Agent 在收到伺服器異常警報時，會透過 ReAct 框架先推理可能的故障原因，然後逐步呼叫系統日誌查詢工具、Ping 工具進行驗證，最終定位問題並採取修復行動。"
        ],
        "comparison": "ReAct框架的核心是要求模型在行動前先輸出思考過程（Thought），並依賴外部工具獲取資訊。若Agent直接憑內部知識回答即時性問題，極易產生幻覺。System Prompt必須強制規範其先使用搜尋工具驗證。移除Thought會破壞ReAct賦予的推理可解釋性；一次呼叫所有工具則缺乏根據前一步觀察進行邏輯推演的能力。",
        "keywords": [
          "ReAct框架 (ReAct Framework)",
          "幻覺 (Hallucination)",
          "系統提示詞 (System Prompt)",
          "推理與行動 (Reasoning and Acting)",
          "思維鏈 (Chain of Thought)"
        ],
        "extended_tech": [
          {
            "name": "工具增強語言模型 (Tool-Augmented LM)",
            "desc": "賦予語言模型呼叫外部API、資料庫或計算引擎的能力，彌補了模型在即時資訊獲取與精確數學運算上的先天缺陷，大幅擴展了AI助理的應用邊界。"
          },
          {
            "name": "思維鏈提示 (Chain of Thought Prompting)",
            "desc": "透過在提示詞中提供逐步推理的範例，引導模型在給出最終答案前先寫出中間推導過程，顯著提升了大型模型解決複雜邏輯與數學問題的準確率。"
          },
          {
            "name": "檢索增強生成 (Retrieval-Augmented Generation, RAG)",
            "desc": "在生成回答前先從外部知識庫檢索相關文件作為上下文，結合了搜尋的準確性與生成的流暢性，是當前企業建置專屬知識問答系統的主流架構。"
          }
        ],
        "terminology": [
          "ReAct Framework",
          "Hallucination",
          "System Prompt",
          "Chain of Thought",
          "Tool-Augmented"
        ]
      },
      {
        "id": 17,
        "question": "某醫療新創公司正在開發一套「多模態患者風險評估系統」，需同時處理三種異質資料來源：胸腔 X 光影像（影像模態）、臨床診斷筆記（文字模態），以及心率與血氧的時序感測資料（數值時序模態）。工程師在進行各模態的特徵擷取模型選擇時，需為每種模態挑選最適合的模型架構。下列哪一組模型配置最符合三種模態各自的資料特性？",
        "options": {
          "A": "影像模態用 LSTM、文字模態用 CNN、時序模態用 BERT",
          "B": "影像模態用 TF-IDF、文字模態用 ResNet、時序模態用 Word2Vec",
          "C": "三種模態統一使用 BERT，因為 Transformer 架構具備通用性，可處理任意形式的輸入資料",
          "D": "影像模態用 CNN、文字模態用 Transformer、時序模態用 LSTM 或 Temporal CNN"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。CNN（卷積神經網路）最擅長處理具有空間局部關聯性的影像資料；Transformer 擅長處理文本和序列語意；LSTM 或 Temporal CNN 則擅長處理時間序列感測器數據。(A) 模型與資料特性錯置；(C) 雖然 Transformer 可處理多模態，但直接統一使用傳統 BERT 並非最佳實踐，且忽略了各模態專用的強大特徵提取器。",
        "ml_method": "Multi-Modal Architecture Selection",
        "ml_method_explanation": "多模態機器學習（Multi-Modal Machine Learning）致力於融合不同類型的資料（如視覺、聽覺、文本、時序）以建立更強大的預測模型。由於不同模態具有截然不同的數據結構與統計特性，因此特徵擷取階段通常會針對各模態選擇最適合的專用編碼器（Encoder）。例如：影像通常依賴 CNN 擷取空間特徵，文本依賴 Transformer 處理語義依賴，而時序訊號則常運用 RNN/LSTM 捕捉時間動態。",
        "examples": [
          "自動駕駛系統在感知環境時，會同步利用 CNN 處理光學攝影機的影像數據，並運用 LSTM 或 Transformer 處理光達（LiDAR）隨時間變化的點雲序列，最後融合判斷前方障礙物的軌跡。",
          "社群媒體內容審查平台同時部署了 Transformer 來分析貼文的文字語意，以及 CNN 來檢測隨附圖片中是否包含違規內容，透過雙模態特徵融合以提高審查的準確度與覆蓋率。"
        ],
        "comparison": "CNN具備優異的空間局部特徵捕捉能力，最適合處理影像；Transformer擅長處理長距離序列語意，最適合文本；LSTM或Temporal CNN能有效捕捉時間動態，最適合時序感測資料。若全部統一使用傳統BERT或錯置模型架構，將無法充分發揮各模態資料特有的數據結構與統計特性，導致特徵擷取效率與最終預測準確度大幅下降。",
        "keywords": [
          "多模態機器學習 (Multi-Modal Machine Learning)",
          "卷積神經網路 (CNN)",
          "Transformer架構 (Transformer Architecture)",
          "長短期記憶網路 (LSTM)",
          "時序感測資料 (Time-series Data)"
        ],
        "extended_tech": [
          {
            "name": "多模態特徵融合 (Multi-Modal Feature Fusion)",
            "desc": "將來自不同神經網路分支的異質特徵進行拼接、加權或注意力機制對齊，使得最終預測模型能綜合考量視覺、聽覺與文本等多維度資訊做出全面決策。"
          },
          {
            "name": "視覺Transformer (Vision Transformer, ViT)",
            "desc": "將影像切割為區塊並視為序列，直接運用Transformer架構處理視覺任務，在極大規模資料集上展現出超越傳統CNN的潛力，是現代多模態模型的基石。"
          },
          {
            "name": "時序卷積網路 (Temporal Convolutional Network, TCN)",
            "desc": "利用一維因果卷積與膨脹卷積處理時間序列資料，相比傳統LSTM具備更好的平行運算效率與更長的記憶窗口，廣泛應用於高頻金融預測與感測器分析。"
          }
        ],
        "terminology": [
          "Multi-Modal",
          "CNN",
          "Transformer",
          "LSTM",
          "Feature Fusion"
        ]
      },
      {
        "id": 18,
        "question": "某醫院的 AI 研究團隊正在開發一套整合「CT 影像+電子病歷文本+基因序列」三種模態資料的癌症預測模型。請問在此場景中採用「跨模態對齊（Cross-Modal Alignment）」技術主要解決什麼問題？",
        "options": {
          "A": "使模型僅聚焦於 CT 影像資料，避免文本與基因資料引入雜訊",
          "B": "自動生成跨模態配對標註，以減少人工標記需求",
          "C": "降低多模態資料的儲存與計算成本，以提升訓練效率",
          "D": "將不同模態的資料表示對齊至共同語意空間，使模型能建立跨模態之間的語意關聯"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。跨模態對齊（Cross-Modal Alignment）的核心目標是將來自不同模態（如影像矩陣、文本序列）的高維特徵映射到一個共享的語義表示空間中，讓模型能夠理解「這張 CT 影像中的陰影」與「電子病歷中描述的腫瘤」在語義上是等價或相關聯的。",
        "ml_method": "Cross-Modal Alignment",
        "ml_method_explanation": "跨模態對齊（Cross-Modal Alignment）是多模態機器學習中的核心技術。因為不同模態的資料（如影像的像素、文本的字詞、語音的聲波）存在於完全不同的向量空間中，模型難以直接比較它們。跨模態對齊透過對比學習（如 CLIP 模型）或其他投影技術，強制將語義上相關的不同模態特徵拉近至同一個潛在特徵空間（Latent Space），從而實現跨模態的語義理解、檢索與融合。",
        "examples": [
          "影音串流平台利用跨模態對齊技術，將電影的畫面特徵與字幕文本特徵映射到同一空間，讓使用者能夠直接輸入文字描述（如「男主角在雨中奔跑」）來精準搜尋到影片的具體片段。",
          "電子商務平台的以圖搜圖系統，透過對齊商品圖片特徵與文字標籤特徵，不僅能辨識圖片，還能理解該圖片與「復古風皮革沙發」的深層語義關聯，進而提供更精準的推薦。"
        ],
        "comparison": "跨模態對齊技術的核心是將不同模態（如影像、文本、基因序列）的高維特徵映射到共享的語意表示空間中，讓模型理解不同模態間的語意等價性，是開發跨模態檢索與融合系統的基礎。僅聚焦單一模態會失去多模態互補優勢；自動生成配對標註是資料增強技術；而降低運算成本則是模型壓縮與架構優化的目標，皆非對齊的核心目的。",
        "keywords": [
          "跨模態對齊 (Cross-Modal Alignment)",
          "對比學習 (Contrastive Learning)",
          "共享語意空間 (Shared Semantic Space)",
          "多模態融合 (Multi-modal Fusion)",
          "潛在特徵空間 (Latent Space)"
        ],
        "extended_tech": [
          {
            "name": "對比語言-影像預訓練 (CLIP)",
            "desc": "透過對比學習將大量網路圖片與對應的文字描述對齊至同一特徵空間，使得模型具備強大的零樣本影像分類能力，並成為眾多影像生成模型的核心組件。"
          },
          {
            "name": "多模態知識圖譜 (Multi-modal Knowledge Graph)",
            "desc": "在傳統文本知識圖譜中融入視覺與聽覺實體，建立更豐富的實體屬性與關係網絡，大幅提升了智慧搜尋系統與問答機器人在處理圖文並茂問題時的精準度。"
          },
          {
            "name": "跨模態檢索 (Cross-Modal Retrieval)",
            "desc": "允許使用者以一種模態作為查詢條件去檢索另一種模態的結果，例如以文搜圖或以圖搜影片片段，廣泛應用於電子商務商品搜尋與大型影音內容管理系統。"
          }
        ],
        "terminology": [
          "Cross-Modal Alignment",
          "Contrastive Learning",
          "Shared Semantic Space",
          "Multi-modal",
          "Latent Space"
        ]
      },
      {
        "id": 19,
        "question": "一家電商公司已將推薦系統 AI 模型上線三個月，業務主管要求專案團隊評估導入成效。團隊根據下圖數據得出結論：「因為 AUC 高達 0.91，模型表現優異，AI 導入成效良好。」請問此評估結論存在什麼根本問題？\n(註：導入後 AUC:0.91, CTR:3.1%(原3.2%), 平均訂單金額:$1,020(原$850))",
        "options": {
          "A": "僅依賴離線指標 AUC 判斷模型成效，忽略線上業務指標（如 CTR 與營收）的變化，可能導致錯誤結論",
          "B": "AUC 已達 0.91，代表模型排序能力優異，即使 CTR 略為下降，仍可視為推薦品質提升",
          "C": "CTR 從 3.2%降至 3.1%，顯示模型效果變差，應立即還原（Rollback）至舊模型",
          "D": "平均訂單金額提升至$1,020，代表模型已成功優化營收，因此無需考慮其他指標"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。在評估 AI 模型導入的真實價值時，離線評估指標（如 AUC、RMSE）只能反映模型在歷史資料上的預測或排序能力，並不一定與線上真實用戶行為（如點擊率 CTR、轉換率 CVR 或業務營收）完全正相關。團隊不應僅用高 AUC 就武斷得出導入成功的結論，而必須綜合分析線上 A/B 測試的業務指標變化。",
        "ml_method": "Offline vs Online Evaluation Metrics",
        "ml_method_explanation": "在機器學習系統的生命週期中，評估分為離線與線上兩個階段。離線評估（Offline Evaluation）使用靜態歷史數據計算統計指標（如 AUC、F1-Score、MSE），用以快速比較不同模型架構。然而，離線指標無法捕捉用戶對新推薦結果的真實動態反饋。因此，必須透過線上評估（Online Evaluation），如 A/B 測試，直接量測點擊率（CTR）、轉換率與營收等商業指標，才能真正確認模型的業務價值。",
        "examples": [
          "新聞平台的演算法團隊在離線測試中發現新模型的準確率極高，但上線後卻發現用戶停留時間大幅下降，原因是模型過度推薦了點擊誘餌（Clickbait）文章，損害了閱讀體驗。",
          "短影音應用程式透過線上 A/B 測試發現，雖然某個新版推薦模型的離線 AUC 指標略微遜色，但因為推薦的內容更具多樣性與探索性，反而顯著提升了用戶的長期留存率。"
        ],
        "comparison": "在評估模型成效時，離線指標（如AUC）僅反映模型在歷史靜態資料上的排序能力，並不必然等同於線上真實用戶的反饋與業務價值。若僅憑高AUC就忽略線上CTR下降等警訊，可能導致損害用戶體驗的錯誤決策。因此，評估AI系統必須結合A/B測試觀察線上商業指標（營收、點擊率等）的實際變化，而非單一依賴離線評估。",
        "keywords": [
          "離線評估 (Offline Evaluation)",
          "線上評估 (Online Evaluation)",
          "A/B測試 (A/B Testing)",
          "點擊率 (CTR)",
          "曲線下面積 (AUC)"
        ],
        "extended_tech": [
          {
            "name": "多變量測試 (Multivariate Testing)",
            "desc": "比傳統A/B測試更進階，能同時測試推薦演算法、介面排版與按鈕顏色等多個變數的組合效果，幫助行銷與產品團隊找出能夠最大化線上轉換率的最佳配置。"
          },
          {
            "name": "概念漂移監控 (Concept Drift Monitoring)",
            "desc": "持續監控線上生產環境中輸入資料分佈或使用者行為模式的變化，當發現模型預測依據與歷史訓練資料出現顯著偏離時，自動觸發警報並啟動模型再訓練。"
          },
          {
            "name": "線上學習 (Online Learning)",
            "desc": "有別於傳統的批次訓練，模型會根據即時接收到的資料流不斷進行小幅度的權重更新，使其能夠極快地適應市場趨勢變化與突發事件，保持預測的時效性。"
          }
        ],
        "terminology": [
          "Offline Evaluation",
          "Online Evaluation",
          "A/B Testing",
          "CTR",
          "AUC"
        ]
      },
      {
        "id": 20,
        "question": "某電商公司計畫導入即時推薦系統，希望使用者進入網站後能在 100 毫秒內取得推薦結果，且推薦結果需依據最新使用者行為進行調整。系統需支援每日約 50 萬活躍使用者，尖峰時段每秒約 3,000 筆請求（QPS）。目前公司已累積歷史購買紀錄與瀏覽行為資料，並持續接收即時點擊流（Streaming Data）。以下規劃：(1)批次訓練建立協同過濾模型 (2)模型部署為 REST API (3)使用 Kafka 串流處理特徵 (4)資料先寫入資料倉儲再計算特徵 (5)使用 Redis 快取即時特徵。請問哪一項最合理的技術導入規劃組合？",
        "options": {
          "A": "保留(1)(2)(3)，移除(4)，並加入(5)以降低延遲",
          "B": "保留(1)(4)，移除(3)，以確保資料一致性與系統穩定",
          "C": "保留(2)(4)(5)，移除(1)，改用即時線上學習（Online Learning）",
          "D": "全部保留(1)~(5)，可同時兼顧即時性與資料完整性"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。要滿足「100毫秒延遲」與「依據最新行為調整」，系統需要 Kappa 或 Lambda 架構的實時處理。(4) 將即時資料先寫入資料倉儲再批次計算特徵，會引入嚴重的資料延遲，無法滿足即時性需求。因此應移除 (4)，並保留 Kafka (3) 處理串流、Redis (5) 提供低延遲特徵讀取，結合預訓練好的模型 API (2) 進行快速推論。",
        "ml_method": "Real-time Recommendation System Architecture",
        "ml_method_explanation": "即時推薦系統架構需要平衡模型複雜度與極低的推論延遲。業界常見的實踐是將系統分為離線與近線/即時兩部分。離線層利用大數據叢集（如 Spark）進行深度模型的批次訓練與全域特徵計算；即時層則透過訊息佇列（如 Kafka）捕捉用戶當下的行為，並利用低延遲的記憶體資料庫（如 Redis 或 Feature Store）存取即時特徵，最終透過高效能的 API 即時生成個性化推薦結果。",
        "examples": [
          "外送平台透過即時推薦架構，當偵測到用戶在雨天頻繁點擊火鍋類型的餐廳時，系統能在幾秒鐘內將首頁的推薦清單動態切換為熱湯與鍋物相關選項。",
          "線上影音網站在用戶觀看完一部動作片後，立刻透過串流資料流更新該用戶的即時興趣向量，並在用戶返回主頁的瞬間，無延遲地呈現動作電影的推薦清單。"
        ],
        "comparison": "要滿足100毫秒以下的極低延遲與即時動態調整，系統必須採用Kappa或Lambda架構。將資料先寫入倉儲再計算會引入嚴重延遲，無法達標，應予移除。最合理的規劃是利用Kafka處理即時點擊流，Redis提供低延遲特徵讀取，並結合部署為API的預訓練協同過濾模型進行快速推論。完全改用線上學習則技術風險過高且難以維護。",
        "keywords": [
          "即時推薦系統 (Real-time Recommendation System)",
          "串流處理 (Streaming Data)",
          "低延遲推論 (Low Latency Inference)",
          "Kafka",
          "記憶體快取 (In-memory Cache)"
        ],
        "extended_tech": [
          {
            "name": "特徵儲存庫 (Feature Store)",
            "desc": "集中管理機器學習特徵的平台，確保離線訓練與線上推論時取用的特徵邏輯與數據完全一致，大幅減少了模型上線時的整合困難與特徵偏移（Feature Skew）問題。"
          },
          {
            "name": "Lambda架構 (Lambda Architecture)",
            "desc": "大數據處理的經典架構，結合了處理歷史資料的批次層與處理即時資料的串流層，能夠同時確保資料計算的最終一致性與提供低延遲的即時數據視圖。"
          },
          {
            "name": "近似最近鄰搜尋 (Approximate Nearest Neighbor, ANN)",
            "desc": "在推薦系統的召回階段，利用Faiss等向量資料庫技術快速在大規模商品向量庫中找出與使用者最相似的候選集合，是實現毫秒級推薦的關鍵底層技術。"
          }
        ],
        "terminology": [
          "Real-time Recommendation",
          "Streaming Data",
          "Low Latency",
          "Kafka",
          "Redis"
        ]
      },
      {
        "id": 21,
        "question": "一位機器學習工程師正在優化公司內部的 RAG 法律文件問答系統。近期因營運成本壓力，公司要求在不更換模型且不影響回答品質的前提下，將整體 token 成本降低至目前的 60%，且目前成本主要集中於輸入 tokens。目前系統每次查詢會附加上下文區塊、靜態背景 System Prompt 以及完整的長對話歷史。請問下列哪一項優化組合最能有效降低成本？",
        "options": {
          "A": "將輸出 max_tokens 從 1,000 壓縮至 200，強制模型給出更短的回答，以降低輸出費用",
          "B": "將 System Prompt 改為 Prompt Caching 或靜態前綴重用，並對對話歷史實作摘要壓縮，以保留語意而非完整對話",
          "C": "將所有查詢改為 Batch API 模式送出，透過非同步處理降低單次費用",
          "D": "在 Prompt 中明確要求模型「回答時盡量簡短」，透過指令引導模型自行縮減輸出長度"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。題目明確指出「成本主要集中於輸入 tokens（Input Tokens）」。將冗長的且重複的 System Prompt 使用 Prompt Caching 技術可以免去重複計費；同時，將動輒數千 token 的完整對話歷史改為「語意摘要」，能大幅度削減每次請求的輸入 token 數量，有效降低成本且不嚴重損害回答品質。",
        "ml_method": "LLM Prompt Optimization & Caching",
        "ml_method_explanation": "在營運基於大型語言模型的系統（如 RAG）時，API 呼叫的成本與輸入/輸出的 token 數量成正比。針對長上下文與多輪對話的情境，Prompt Optimization 旨在保留關鍵語義的同時精簡 token 消耗。這包括動態裁剪對話歷史、利用較小模型預先進行對話摘要，以及採用供應商提供的 Prompt Caching 技術，將頻繁重複的靜態前綴（如系統設定檔、背景知識）快取在記憶體中，以節省重複計算與計費的開銷。",
        "examples": [
          "心理諮商聊天機器人在面對長期用戶時，會定期將前幾次的冗長對話紀錄交由小型模型生成簡短的心理狀態摘要，從而大幅減少每次發送給主模型運算的輸入上下文長度。",
          "企業內部知識庫助理在服務不同部門員工時，利用 Prompt Caching 技術將長達數千字的公司通用政策與法規快取起來，避免了每次員工提問時重複傳輸這些靜態背景資料的費用。"
        ],
        "comparison": "在RAG系統中，成本與輸入/輸出token數成正比。將冗長且靜態的System Prompt使用Prompt Caching技術，並對長對話歷史進行語意摘要，能從根本上大幅削減每次請求的輸入token數量，在不嚴重影響回答品質下降低成本。強制壓縮輸出長度可能導致回答不完整；Batch API雖降低單價但犧牲了即時互動性。",
        "keywords": [
          "提示詞優化 (Prompt Optimization)",
          "快取技術 (Prompt Caching)",
          "對話摘要 (Dialogue Summarization)",
          "輸入Tokens (Input Tokens)",
          "檢索增強生成 (RAG)"
        ],
        "extended_tech": [
          {
            "name": "語義快取 (Semantic Caching)",
            "desc": "在API閘道層快取先前的問答結果，當新查詢的向量與歷史查詢高度相似時直接返回快取答案，完全省去呼叫大型語言模型的費用並將延遲降至最低。"
          },
          {
            "name": "動態上下文裁剪 (Dynamic Context Truncation)",
            "desc": "根據當前使用者提問的具體意圖，智慧地過濾掉RAG檢索結果中與問題無關的段落，確保輸入給LLM的上下文是最精簡且資訊密度最高的關鍵內容。"
          },
          {
            "name": "小型模型路由 (Model Routing)",
            "desc": "建立一個輕量級的分類器，將簡單明確的問題派發給便宜且快速的小型開源模型處理，僅將需要複雜推理的問題交給昂貴的旗艦模型，從而優化整體系統成本。"
          }
        ],
        "terminology": [
          "Prompt Optimization",
          "Prompt Caching",
          "Input Tokens",
          "RAG",
          "Context Window"
        ]
      },
      {
        "id": 22,
        "question": "某金融科技公司計劃建立完整的 AI 開發到維運流程，希望實現「模型訓練→測試→部署→監控→再訓練」的自動化流程串接，並確保線上模型的版本可追溯。技術主管建議引入 MLOps 框架。MLOps 在此 AI 開發生命週期中的核心角色為何？",
        "options": {
          "A": "專注於訓練資料的標註與品質控管，以提升模型訓練效果",
          "B": "透過自動化模型搜尋與參數調整，降低模型開發門檻",
          "C": "建立機器學習流程的自動化與版本管理機制，支援模型部署、監控與持續更新",
          "D": "確保模型在部署後維持穩定效能，減少後續維運與更新需求"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。MLOps（Machine Learning Operations）的核心在於將軟體工程中的 DevOps 理念引入機器學習領域，強調模型開發、測試、部署與監控全生命週期的自動化、可重複性與版本追溯性。(A) 偏向資料工程；(B) 是 AutoML 的功能；(D) 減少更新需求不符合 MLOps 持續整合與持續訓練（CT）的理念。",
        "ml_method": "Machine Learning Operations (MLOps)",
        "ml_method_explanation": "MLOps（機器學習維運）是一套結合機器學習、軟體工程與維運管理的實踐框架。有別於傳統軟體開發，AI 模型會隨著資料分佈的變化（如 Concept Drift）而衰退。MLOps 旨在建立自動化的管線（Pipeline），涵蓋資料萃取、模型訓練、驗證、部署與線上效能監控。當監控系統發現模型效能下降時，MLOps 平台能自動觸發再訓練流程，並確保程式碼、資料集與模型權重的版本完全可追溯。",
        "examples": [
          "自動駕駛軟體公司利用 MLOps 平台，自動將車隊每天收集到的邊緣案例（Edge Cases）資料匯入資料湖，觸發夜間的模型微調訓練，並在隔天早上通過自動化測試後派發至測試車輛。",
          "零售連鎖企業的預測補貨系統依賴 MLOps 監控日常銷售預測模型的誤差率，一旦發現因突發事件（如颱風）導致誤差飆升，系統便自動啟動警報並重新以最新數據重訓模型。"
        ],
        "comparison": "MLOps的核心在於將DevOps理念引入機器學習，建立涵蓋模型開發、測試、部署與監控全生命週期的自動化管線，確保模型版本的可追溯性與持續更新能力，以應對線上資料分佈的衰退。專注資料標註是資料工程的範疇；自動調參屬於AutoML；而減少更新需求則完全違背了MLOps強調持續整合與持續訓練（CT）的動態演進理念。",
        "keywords": [
          "機器學習維運 (MLOps)",
          "生命週期管理 (Lifecycle Management)",
          "自動化管線 (Automated Pipeline)",
          "持續訓練 (Continuous Training)",
          "版本控制 (Version Control)"
        ],
        "extended_tech": [
          {
            "name": "自動化機器學習 (AutoML)",
            "desc": "自動化執行特徵工程、模型選擇與超參數調優的過程，大幅降低了非AI專業背景人員開發機器的門檻，同時也常被整合進MLOps管線中以加速模型迭代。"
          },
          {
            "name": "模型註冊中心 (Model Registry)",
            "desc": "集中存放與管理所有訓練完成的模型版本的中央儲存庫，詳細記錄了模型的血緣、評估指標與當前部署狀態，是企業實現AI模型標準化治理的核心基礎設施。"
          },
          {
            "name": "資料版本控制 (Data Version Control, DVC)",
            "desc": "專為機器學習專案設計的版本控制工具，能像Git管理程式碼一樣追蹤大規模資料集與模型的變化，確保任何實驗結果都能夠基於特定的資料版本被完美重現。"
          }
        ],
        "terminology": [
          "MLOps",
          "Lifecycle Management",
          "Continuous Training",
          "Pipeline",
          "Version Control"
        ]
      },
      {
        "id": 23,
        "question": "某製造業公司計劃將 AI 導入生產線瑕疵檢測流程，目前瑕疵樣本約 800 張、正常樣本約 15,000 張，現有 IT 基礎設施為地端伺服器且無 GPU，且生產線環境需於地端即時完成推論，檢測需求為每片零件須在 100 毫秒內完成檢測，且預算為中等、無法於短期內大規模採購硬體。工程師正在規劃第一階段的 AI 導入方案，請問下列哪一種規劃最為合適？",
        "options": {
          "A": "從零訓練一個大型 CNN 模型，並採購高階 GPU 伺服器以滿足推論速度需求",
          "B": "採用預訓練模型進行 Transfer Learning，針對瑕疵樣本進行 Fine-tuning，並使用模型量化（Quantization）或蒸餾（Distillation）技術壓縮模型以符合延遲需求，部署於地端",
          "C": "因樣本數不足，建議先暫緩 AI 導入，待蒐集至少 10 萬筆瑕疵樣本後再啟動專案",
          "D": "將所有影像上傳至雲端，使用第三方 AutoML 平台自動訓練並部署，以節省開發時間"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。考量到「瑕疵樣本極少（800張）」、「預算中等/無GPU」以及「地端低延遲推論」，從零訓練（A）會失敗且昂貴；上傳雲端（D）無法保證網路延遲能小於100毫秒；直接暫緩（C）並非解決方案。最合適的是利用遷移學習解決資料不足問題，並利用量化與蒸餾技術壓縮模型，使其能在缺乏 GPU 的邊緣設備上達成即時推論。",
        "ml_method": "Transfer Learning & Model Compression",
        "ml_method_explanation": "在資料量不足且運算資源受限的工業邊緣運算場景中，遷移學習（Transfer Learning）與模型壓縮技術是關鍵解決方案。遷移學習利用在龐大公開資料集（如 ImageNet）上預訓練好的模型權重，僅用少量的領域特定資料進行微調，大幅減少了訓練所需的樣本數與時間。為了將臃腫的深度學習模型部署到缺乏 GPU 的邊緣裝置，工程師會採用模型量化（將浮點數權重轉換為整數）或知識蒸餾（用大模型指導小模型學習）來縮小模型體積並加速推論。",
        "examples": [
          "智慧農場在缺乏高階運算設備的溫室內，使用經過量化壓縮的輕量級神經網路部署在 Raspberry Pi 上，即時辨識農作物的病蟲害狀態，而無需依賴不穩定的網路連線。",
          "無人機巡檢系統利用遷移學習技術，僅透過數百張電塔鏽蝕的照片微調通用視覺模型，再透過知識蒸餾將其縮小，以便能直接在無人機內建的低功耗晶片上流暢運行。"
        ],
        "comparison": "在資料量極少、無GPU且需低延遲推論的嚴苛邊緣環境下，從零訓練模型注定失敗。最合適方案是利用遷移學習在少量瑕疵樣本上微調預訓練模型，再透過量化或蒸餾技術壓縮模型體積，使其能在地端CPU順暢執行。上傳雲端無法保證延遲達標；暫緩導入則錯失優化機會。",
        "keywords": [
          "遷移學習 (Transfer Learning)",
          "模型壓縮 (Model Compression)",
          "邊緣運算 (Edge Computing)",
          "模型量化 (Model Quantization)",
          "知識蒸餾 (Knowledge Distillation)"
        ],
        "extended_tech": [
          {
            "name": "小樣本學習 (Few-shot Learning)",
            "desc": "致力於讓模型僅透過極少量的訓練樣本（通常在十張以內）就能掌握新類別的辨識能力，極大地降低了工業場景中因罕見瑕疵難以蒐集資料所帶來的開發瓶頸。"
          },
          {
            "name": "硬體加速器優化 (Hardware Accelerator Optimization)",
            "desc": "針對特定的邊緣AI晶片（如TPU、NPU）使用專用編譯器進行神經網路圖優化與算子融合，能將壓縮後的模型效能發揮到極致，實現超低延遲與低功耗推論。"
          },
          {
            "name": "聯邦學習 (Federated Learning)",
            "desc": "允許多個邊緣設備在不共享原始敏感資料的前提下，僅將本地訓練的模型權重更新上傳至中央伺服器進行聚合，是兼顧隱私保護與模型整體效能提升的前沿技術。"
          }
        ],
        "terminology": [
          "Transfer Learning",
          "Model Compression",
          "Edge Computing",
          "Quantization",
          "Knowledge Distillation"
        ]
      },
      {
        "id": 24,
        "question": "某即時詐欺偵測系統對模型回應時間有嚴格限制，若推論延遲過高將影響交易核准流程。維運工程師在模型上線前進行延遲測試（Latency Testing）時，主要評估的目標為何？",
        "options": {
          "A": "評估模型推論過程中的記憶體使用量，以確認部署資源是否足夠",
          "B": "驗證模型對異常或攻擊輸入的穩定性與安全性",
          "C": "評估模型在不同使用者族群上的預測結果是否一致",
          "D": "評估模型從接收輸入到產生預測結果所需的回應時間是否符合系統要求"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。延遲測試（Latency Testing）的定義與目標，就是專注於量測系統處理單次請求或批次請求所需花費的端到端時間（即回應時間），確保其滿足線上即時系統的嚴格時間限制（SLA）。(A) 是資源監控；(B) 是安全性或魯棒性測試；(C) 是公平性或偏差測試。",
        "ml_method": "Latency Testing in ML Deployments",
        "ml_method_explanation": "在機器學習系統部署中，延遲測試（Latency Testing）是效能測試的重要環節，專注於量測模型從接收到輸入特徵開始，歷經資料前處理、神經網路前向傳播計算，直到輸出預測結果所需的總體時間。對於高頻率、即時性要求極高的應用（如高頻交易、即時防詐欺、自駕車控制），模型推論延遲的微小增加都可能導致嚴重的業務損失或安全風險，因此必須在正式上線前確保其效能指標（如 P95, P99 延遲）符合嚴格的服務級別協定（SLA）。",
        "examples": [
          "線上廣告競價系統在部署新的點擊率預測模型前，必須必須進行嚴格的延遲測試，確保模型能在 50 毫秒內評估數百個廣告候選者，否則將錯失將廣告展示給使用者的機會。",
          "電玩遊戲中的 AI 語音翻譯功能在發布前，會進行端到端的延遲測試，以保證玩家發言與生成翻譯文字之間的時間差不超過一秒，維持良好的互動遊戲體驗。"
        ],
        "comparison": "延遲測試專注於量測系統從接收輸入到輸出預測結果所需的端到端時間，確保其滿足即時系統的嚴格時間限制（SLA），對於高頻交易或防詐欺等應用至關重要。評估記憶體使用屬於資源監控；驗證抗攻擊穩定性屬於安全性測試；評估不同族群結果一致性則屬於模型公平性與偏差測試，皆非延遲測試的核心目標。",
        "keywords": [
          "延遲測試 (Latency Testing)",
          "回應時間 (Response Time)",
          "服務級別協定 (SLA)",
          "推論延遲 (Inference Latency)",
          "效能測試 (Performance Testing)"
        ],
        "extended_tech": [
          {
            "name": "壓力測試 (Stress Testing)",
            "desc": "不斷增加系統的併發請求量直到其崩潰，藉此找出系統架構的效能瓶頸與最大吞吐量極限，是確保大型AI應用在行銷活動尖峰期間不會服務中斷的必要驗證。"
          },
          {
            "name": "非同步推論 (Asynchronous Inference)",
            "desc": "將模型推論請求放入訊息佇列中排隊處理，客戶端無須阻塞等待結果，適合處理大型文件分析或批次影像處理等對即時延遲要求較低但吞吐量需求極高的場景。"
          },
          {
            "name": "邊緣運算部署 (Edge Deployment)",
            "desc": "將經過壓縮的模型直接部署在靠近資料來源的終端設備上執行推論，徹底消除了資料來回傳輸雲端所產生的網路延遲，是自駕車與工業控制系統的標準架構。"
          }
        ],
        "terminology": [
          "Latency Testing",
          "Response Time",
          "SLA",
          "Inference",
          "Throughput"
        ]
      },
      {
        "id": 25,
        "question": "某企業欲將其 AI 輔助決策系統提交給外部稽核單位審查，並宣稱符合 NIST《AI風險管理框架》（NIST AI RMF）中可驗證性（Verifiability）的要求。為讓第三方稽核人員能獨立重現模型評估結果，下列哪一項技術實踐最直接符合此要求？",
        "options": {
          "A": "將模型測試準確率優化至 99%以上，以達到業界公認的高可靠標準",
          "B": "建立可追溯的測試資料與評估流程，並記錄模型訓練與評估過程中的關鍵設定，以確保結果可被重現",
          "C": "加快模型迭代速度，縮短版本發布週期以盡快累積外部驗證數據",
          "D": "擴充訓練資料量至數百萬筆，以統計方式確保模型的泛化能力達標"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。在 NIST AI RMF 框架中，「可驗證性」（Verifiability）強調的是系統的開發與評估過程必須具備透明度與可重現性。建立詳細的版本控制、參數紀錄以及可追溯的測試資料集，能讓第三方稽核人員完全重現實驗並得到相同結論。(A) 是效能指標；(C) 無助於稽核；(D) 屬於提升泛化能力的方法，無關驗證性。",
        "ml_method": "Verifiability & Reproducibility (AI RMF)",
        "ml_method_explanation": "在人工智慧風險管理框架（如 NIST AI RMF）中，可驗證性（Verifiability）與可重現性（Reproducibility）是確保 AI 系統安全與合規的基石。這要求 AI 開發團隊必須實施嚴格的資料血緣追蹤（Data Lineage）、超參數記錄、亂數種子固定，以及環境依賴的容器化管理（如 Docker）。這確保了當外部稽核機構或監管單位介入時，能夠利用相同的歷史資料與配置，獨立且絲毫不差地重現模型的訓練過程與評估結果，從而建立對 AI 系統的信任。",
        "examples": [
          "醫藥公司在申請 AI 醫療診斷軟體的 FDA 認證時，必須提供完整的 MLOps 執行日誌與唯讀的驗證資料集，讓審查官員能夠在獨立環境中重新運行評估腳本，驗證聲稱的診斷準確率。",
          "金融機構的信用評分模型在面臨公平性審查時，稽核團隊利用系統內建的可追溯機制，還原了一年前模型做出某一爭議拒絕貸款決策時的具體權重與輸入特徵，以釐清責任歸屬。"
        ],
        "comparison": "NIST AI RMF框架中的可驗證性強調開發與評估過程的透明度與可重現性。建立詳細的版本控制、參數紀錄與可追溯的測試資料集，能讓第三方稽核人員在獨立環境中完全重現實驗並得出相同結論，建立對系統的信任。單純提升準確率、加快迭代或擴充資料量，雖有助於效能與泛化，但無法滿足稽核所需的程序透明與可追溯要求。",
        "keywords": [
          "可驗證性 (Verifiability)",
          "可重現性 (Reproducibility)",
          "AI風險管理框架 (AI RMF)",
          "資料血緣 (Data Lineage)",
          "第三方稽核 (Third-party Audit)"
        ],
        "extended_tech": [
          {
            "name": "模型可解釋性 (Explainable AI, XAI)",
            "desc": "提供工具與技術來解析黑盒子模型做出特定決策的內部邏輯與特徵權重，不僅有助於開發者除錯，更是應對金融與醫療等高監管行業合規性審查的關鍵利器。"
          },
          {
            "name": "資料探查與偏見檢測 (Data Profiling and Bias Detection)",
            "desc": "在訓練前對資料集進行系統性的統計分析，主動發掘潛在的族群偏見與資料分佈失衡，是確保AI系統輸出結果具備公平性並符合倫理規範的前置預防措施。"
          },
          {
            "name": "模型卡片 (Model Cards)",
            "desc": "為AI模型建立標準化的透明度報告，詳細記錄其預期用途、效能指標、訓練資料來源以及已知的局限性與潛在風險，是促進產業界負責任AI實踐的重要溝通工具。"
          }
        ],
        "terminology": [
          "Verifiability",
          "Reproducibility",
          "AI RMF",
          "Data Lineage",
          "Explainable AI"
        ]
      },
      {
        "id": 26,
        "question": "某銀行導入一套 AI 授信審核系統，針對貸款申請人進行自動化決策。監理單位要求系統必須符合負責任 AI（Responsible AI） 原則，特別是對被拒絕的申請人提供每筆決策的具體理由說明。從技術與合規的角度，此要求的核心能力需求為何？",
        "options": {
          "A": "系統必須在收到申請後 10 秒內自動刪除申請人個資；",
          "B": "系統應隨機調整部分決策以確保多元性；",
          "C": "系統必須保證所有決策準確率達到 100%；",
          "D": "系統必須具備可解釋性（Explainability）能力，能提供特徵貢獻說明"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。在負責任的AI原則中，為了提供決策的具體理由，系統必須具備「可解釋性」（Explainability），讓使用者與監理單位了解哪些特徵影響了最終決策。選項(A)涉及隱私保護但不符合「提供理由」的要求；選項(B)隨機調整決策會損害系統的公平性與一致性；選項(C)在實務上不可能達到100%的準確率，且無助於解釋決策原因。",
        "ml_method": "可解釋性人工智慧 (Explainable AI, XAI)",
        "ml_method_explanation": "可解釋性人工智慧（Explainable AI, XAI）是一系列技術與方法的總稱，旨在使人工智慧系統的決策過程對人類來說是透明且可理解的。隨著深度學習等黑箱模型廣泛應用，XAI 變得日益重要。其核心機制包括特徵重要性分析（如 SHAP、LIME）、注意力機制視覺化（如 Grad-CAM）以及使用本質上可解釋的模型（如決策樹）。XAI 能夠建立使用者對 AI 系統的信任，確保決策的公平性與合規性，並協助開發者進行模型除錯與優化。",
        "examples": [
          "在醫療診斷領域，醫生使用 AI 輔助判讀 X 光片時，XAI 可以標示出影像中導致 AI 判定為異常的具體區域。這使得醫生能夠驗證 AI 的判斷依據，而不僅是盲目接受預測結果，從而提高醫療決策的安全性與可靠性。",
          "在人力資源的自動化履歷篩選系統中，XAI 技術能列出影響應徵者評分的關鍵經歷或技能特徵。這樣一來，人資主管能確保篩選標準並未隱含性別或種族等不公平的偏見，不僅符合企業的多元化政策，也符合相關勞工法規的要求。"
        ],
        "comparison": "負責任 AI 中的可解釋性技術（如 XAI）與傳統的黑箱模型（如未經解釋的深度神經網路）有著本質區別。黑箱模型通常追求極致的預測準確率，但在金融授信、醫療診斷等受到高度監管的領域，若無法解釋決策原因，將面臨極大的合規風險。相對地，XAI 技術能提供每個決策的特徵貢獻度，適用於需要高透明度、需向用戶或監理機構說明決策理由的業務場景，從而在風險控制與使用者信任之間取得平衡。",
        "keywords": [
          "負責任AI (Responsible AI)",
          "可解釋性 (Explainability)",
          "黑箱模型 (Black-box Model)",
          "特徵貢獻 (Feature Contribution)",
          "合規性 (Compliance)",
          "透明度 (Transparency)"
        ],
        "extended_tech": [
          {
            "name": "LIME (Local Interpretable Model-agnostic Explanations)",
            "desc": "透過局部線性近似來解釋任何黑箱模型的單一預測結果，常應用於文字或影像分類的除錯與模型驗證。"
          },
          {
            "name": "SHAP (SHapley Additive exPlanations)",
            "desc": "基於賽局理論計算各特徵對預測結果的邊際貢獻，廣泛應用於金融信用評分與風險分析領域。"
          },
          {
            "name": "特徵重要性 (Feature Importance)",
            "desc": "評估模型中各特徵對預測結果整體的影響程度，常用於隨機森林等樹狀模型中，協助特徵篩選。"
          }
        ],
        "terminology": [
          "Model Agnostic",
          "Feature Importance",
          "Trustworthy AI",
          "Algorithmic Bias",
          "Interpretability"
        ]
      },
      {
        "id": 27,
        "question": "某醫院計劃導入一套 AI 醫療影像診斷輔助系統，用於輔助放射科醫師判讀CT 影像。院方技術委員會討論在人命攸關且需確保最終臨床決策責任由人類承擔的情境下，從系統設計架構層面，最關鍵的安全機制為何？",
        "options": {
          "A": "採用人機協作（Human-in-the-Loop, HITL）架構，由醫師最終審核決策；",
          "B": "模型信心低於閾值（Threshold）即自動關機；",
          "C": "隨機切換模型並以多數決決策；",
          "D": "對輸入影像加入隨機擾動"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。在醫療等高風險領域，最終責任必須由人類承擔，因此採用人機協作（Human-in-the-Loop）架構是確保安全的關鍵，讓AI作為輔助工具，而醫師負責最終的審核與決策。選項(B)自動關機會中斷醫療服務，不切實際；選項(C)多數決僅是模型集成的技術，並未解決人類承擔責任的問題；選項(D)加入隨機擾動是為了增強模型強健性或對抗性測試，並非系統設計架構層面的安全責任機制。",
        "ml_method": "人機協作 (Human-in-the-Loop, HITL)",
        "ml_method_explanation": "人機協作（Human-in-the-Loop, HITL）是一種將人類的判斷力與機器的運算能力相結合的系統架構模式。在 HITL 系統中，AI 負責處理大量資料並提供初步的分析或預測，而人類專家則介入審核這些預測，特別是在面臨高風險、高不確定性或需要道德判斷的情境中。其核心機制在於建立雙向回饋迴路：機器的輸出輔助人類決策，而人類的修正與反饋則可進一步用於重新訓練和優化機器學習模型，從而實現持續的效能提升與風險控制。",
        "examples": [
          "在自駕車技術發展過程中，遠端遙控駕駛中心採用了 HITL 架構。當自駕車遇到無法處理的複雜路況（如施工封路或交警手勢指揮）時，系統會自動呼叫遠端的人類操作員接管控制權，確保車輛安全通過後再切換回自動駕駛模式。",
          "在社群媒體的內容審查機制中，AI 模型首先會自動過濾掉明顯違反社群守則的色情或暴力影像。然而，對於語意模糊的仇恨言論或具爭議性的政治貼文，系統會將其標記並轉交給人類審查員進行人工判定，以確保言論自由與社群安全的平衡。"
        ],
        "comparison": "人機協作（HITL）有別於完全自動化（Fully Autonomous）系統。完全自動化追求在無人為干預下執行任務，適用於低風險、高頻率的場景（如商品推薦）。然而在醫療診斷、自動駕駛或國防等高風險領域，一旦決策錯誤可能危及生命或產生重大法律責任。HITL 將 AI 定位為輔助角色，保留人類專家在最終決策階段的審核權，不僅確保了安全性與責任歸屬，也能在遇到邊緣案例時透過人工介入持續收集珍貴的訓練資料。",
        "keywords": [
          "人機協作 (Human-in-the-Loop)",
          "最終決策責任 (Final Decision Responsibility)",
          "高風險領域 (High-risk Domain)",
          "系統安全機制 (System Safety Mechanism)",
          "自動化 (Automation)"
        ],
        "extended_tech": [
          {
            "name": "主動學習 (Active Learning)",
            "desc": "系統主動挑選最具不確定性的樣本交由人類專家標註，以最低的人工成本大幅提升模型訓練效能與準確率。"
          },
          {
            "name": "臨床決策支援系統 (Clinical Decision Support System, CDSS)",
            "desc": "結合 AI 預測結果與專家領域知識，輔助醫療人員進行更精確的臨床診斷、治療計畫與病患風險評估。"
          },
          {
            "name": "異常檢測 (Anomaly Detection)",
            "desc": "自動識別偏離正常模式的行為或資料，對於高危險領域的早期預警及人工介入審核至關重要。"
          }
        ],
        "terminology": [
          "Human-in-the-Loop (HITL)",
          "Edge Cases",
          "Accountability",
          "Augmented Intelligence",
          "Fallback Mechanism"
        ]
      },
      {
        "id": 28,
        "question": "一位資料科學家使用 XGBoost 建立信用風險評分模型，並使用 SHAP 解釋模型對某申請人的預測結果。SHAP summary plot顯示該樣本中「月收入」的SHAP 值為-2.3，「負債比率」為+1.8，其中 SHAP 值代表各特徵對模型輸出值的影響程度與方向。關於對 SHAP 值的解讀，下列敘述何者正確？",
        "options": {
          "A": "「月收入」 的SHAP 值-2.3 代表該特徵使此申請人的違約預測機率降低了 2.3%；",
          "B": "「月收入」的 SHAP 值-2.3 代表相對於基準值（base value），此特徵將模型輸出值往負方向推移了 2.3 個單位，表示月收入對該申請人有降低違約風險的貢獻；",
          "C": "SHAP 值為負代表該特徵對模型整體來說是不重要的特徵，應考慮從模型中移除；",
          "D": "「負債比率」SHAP 值+1.8 代表負債比率是整個訓練集中對違約影響最大的特徵"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。SHAP值解釋了單一特徵相對於模型預期輸出（基準值）的貢獻量與方向。-2.3表示該特徵使預測值減少2.3個單位，在風險模型中通常意味著風險降低。選項(A)錯誤，SHAP值通常代表對數勝率（log odds）或其他模型輸出空間的改變，並非直接等同於機率百分比；選項(C)錯誤，SHAP值為負表示反向影響，不代表該特徵不重要；選項(D)錯誤，+1.8僅代表對「該單一樣本」的影響，不能直接推論為整個訓練集中最重要的特徵。",
        "ml_method": "SHAP (SHapley Additive exPlanations)",
        "ml_method_explanation": "SHAP（SHapley Additive exPlanations）是一種基於博弈論的機器學習模型解釋方法，用於評估模型中每個特徵對最終預測結果的貢獻。其核心機制源自沙普利值（Shapley value），將模型的預測過程視為一場合作賽局，各個特徵則是參與賽局的玩家。SHAP 透過計算特徵在各種可能組合下的邊際貢獻平均值，公平地分配模型的預測輸出（相對於基準值）給每一個特徵。這使得 SHAP 既能提供局部解釋（解釋單一預測），也能聚合形成全局解釋（了解整體特徵重要性）。",
        "examples": [
          "在房地產估價系統中，房仲業者利用 SHAP 值來向賣家解釋房屋定價的合理性。系統不僅給出房屋的預估總價，還能具體指出「靠近捷運站」讓房價增加了 150 萬，而「屋齡超過 30 年」則使房價減少了 80 萬，讓定價過程完全透明。",
          "在電子商務的客戶流失預測模型中，行銷團隊利用 SHAP 分析來制定挽回策略。對於被預測有高流失風險的客戶，SHAP 結果顯示「最近三個月無購買紀錄」和「客服客訴未解決」是主要推手，團隊便能針對性地發送優惠券或安排專人回訪。"
        ],
        "comparison": "SHAP 值解釋法與傳統的線性迴歸係數有顯著差異。線性迴歸係數反映的是全局的、固定的特徵影響，而 SHAP 能針對「單一樣本」給出每個特徵的具體貢獻，且適用於複雜的非線性模型（如 XGBoost）。在金融風控或個人化醫療中，我們不僅需要知道整體趨勢，更需要了解為何針對「這位特定客戶」做出特定預測。SHAP 提供了這種微觀層面的高精確度解釋，避免了單純看全局重要性而忽略個體差異的盲點。",
        "keywords": [
          "SHAP (SHapley Additive exPlanations)",
          "特徵貢獻 (Feature Contribution)",
          "局部解釋 (Local Explanation)",
          "全局解釋 (Global Explanation)",
          "基準值 (Base Value)"
        ],
        "extended_tech": [
          {
            "name": "Partial Dependence Plot (PDP)",
            "desc": "用於視覺化一個或兩個特徵對機器學習模型預測結果的邊際效應，幫助理解特徵與目標變數間的非線性關係。"
          },
          {
            "name": "Individual Conditional Expectation (ICE)",
            "desc": "PDP 的延伸，顯示單一觀察值中特徵改變對預測結果的影響，能更細緻地揭示樣本間的異質性。"
          },
          {
            "name": "TreeSHAP",
            "desc": "專為樹狀模型（如 Random Forest, XGBoost）優化的 SHAP 計算方法，大幅降低了計算複雜度與時間成本。"
          }
        ],
        "terminology": [
          "Shapley Value",
          "Log Odds",
          "Marginal Contribution",
          "Game Theory",
          "Local Interpretable"
        ]
      },
      {
        "id": 29,
        "question": "某工程師為一套卷積神經網路（CNN）的醫療影像輔助診斷系統設計模型可解釋性機制。該系統需滿足下列需求：1.能向醫師說明影像被判定為異常的原因 2.支援近即時推論，每次解釋須於 200 毫秒內完成，且不可進行大量重複採樣計算 3.解釋結果須以影像中具代表性的視覺化像素區域呈現在此情境下，下列何種方法最為適合？",
        "options": {
          "A": "使用 LIME，透過超像素擾動取樣分析影像區塊對預測的影響；",
          "B": "使用 SHAP KernelExplainer，計算各像素的 Shapley 值並疊加於原始影像；",
          "C": "使用 Grad-CAM（Class Activation Map），透過梯度反向傳播生成類別關注區域；",
          "D": "使用 SHAP TreeExplainer，計算特徵貢獻並以熱力圖呈現"
        },
        "answer": "C",
        "explanation": "正確答案是(C)。Grad-CAM 透過計算最後一層卷積層對目標類別的梯度，能快速生成熱力圖來標示影像中重要的像素區域，計算效率高，滿足近即時推論的需求。選項(A)的 LIME 需要進行大量擾動取樣，計算時間較長，不符合 200 毫秒的限制；選項(B)的 SHAP KernelExplainer 同樣需要大量採樣與計算，速度緩慢；選項(D)的 SHAP TreeExplainer 是專門針對樹狀模型（如 Random Forest, XGBoost）設計的，並不適用於 CNN 模型。",
        "ml_method": "Grad-CAM (Gradient-weighted Class Activation Mapping)",
        "ml_method_explanation": "Grad-CAM（Gradient-weighted Class Activation Mapping）是一種針對卷積神經網路（CNN）的可視化解釋技術。它的基本原理是利用模型在預測特定類別時的反向傳播梯度資訊，來評估最後一個卷積層中各個特徵圖（Feature Map）對預測結果的重要性。Grad-CAM 將這些梯度進行全局平均池化作為權重，然後對特徵圖進行加權線性組合，最後通過 ReLU 激活函數，生成一張熱力圖（Heatmap）。這張熱力圖疊加在原圖上，可以直觀地顯示模型在做出決策時主要關注了影像的哪些區域。",
        "examples": [
          "在製造業的產品表面瑕疵檢測系統中，Grad-CAM 被用來標示出 AI 認為有缺陷的具體位置。當系統判定某個金屬零件為「不良品」時，熱力圖會精準覆蓋在零件的刮痕或凹陷處，協助品管人員快速定位問題，減少人工複檢的時間。",
          "在野生動物監測的相機陷阱分析中，生態學家使用 Grad-CAM 來驗證物種辨識模型的正確性。如果模型將一張照片分類為「老虎」，熱力圖會顯示模型是否真的關注在老虎的獨特條紋特徵上，而不是錯誤地將背景中的特定樹枝形狀當成了判斷依據。"
        ],
        "comparison": "Grad-CAM 與 LIME 或 SHAP 等解釋方法在機制與應用場景上有很大不同。LIME/SHAP 大多需要透過大量擾動樣本來計算特徵重要性，這在處理高維度影像時運算成本極高，難以達成即時性。Grad-CAM 則是直接利用神經網路本身的反向傳播梯度來產生熱力圖，無需重複推論，因此能達到極低的延遲。在醫療影像輔助（如即時內視鏡分析）或工業即時瑕疵檢測等要求低延遲且需視覺化關注區域的場景中，Grad-CAM 是更務實的選擇。",
        "keywords": [
          "Grad-CAM",
          "熱力圖 (Heatmap)",
          "梯度反向傳播 (Gradient Backpropagation)",
          "卷積神經網路 (CNN)",
          "近即時推論 (Near Real-time Inference)",
          "類別關注區域 (Class Activation Map)"
        ],
        "extended_tech": [
          {
            "name": "Saliency Maps",
            "desc": "一種早期的影像解釋技術，直接計算輸出對輸入像素的梯度，用於標示對分類結果最敏感的像素點。"
          },
          {
            "name": "Integrated Gradients",
            "desc": "透過從基準影像到目標影像的線性插值計算梯度積分，解決了傳統梯度方法中的飽和問題，提供更穩定的解釋。"
          },
          {
            "name": "SmoothGrad",
            "desc": "在輸入影像中加入隨機噪聲並多次計算梯度的平均值，以減少熱力圖的視覺雜訊，使得關注區域更加清晰明確。"
          }
        ],
        "terminology": [
          "Class Activation Mapping (CAM)",
          "Gradient-weighted",
          "Global Average Pooling (GAP)",
          "Feature Map",
          "Backpropagation"
        ]
      },
      {
        "id": 30,
        "question": "某資料科學家正在處理一份包含 200 個感測器特徵的工廠設備監測資料集，為了降低模型複雜度並保留主要變異資訊，他先對資料進行標準化（Standardization），再使用主成分分析（PCA）進行降維。在PCA 過程中，為了找出能最大化資料變異量的主成分方向，演算法主要依賴哪一項數學操作？",
        "options": {
          "A": "透過對目標函數進行梯度下降（Gradient Descent）最佳化，迭代求得主成分方向；",
          "B": "根據特徵與目標變數之間的相關性（Correlation）進行排序，選擇重要特徵；",
          "C": "對資料的協方差矩陣（Covariance Matrix）進行特徵值分解（Eigen Decomposition），取得對應主要變異方向的特徵向量；",
          "D": "對資料矩陣進行卷積運算（Convolution），擷取特徵之間的局部關係"
        },
        "answer": "C",
        "explanation": "正確答案是(C)。主成分分析 (PCA) 的核心數學運算是計算資料的協方差矩陣，並對其進行特徵值分解 (Eigen Decomposition)。特徵向量代表了資料變異的主成分方向，而特徵值的大小則代表了該方向上的變異量。選項(A)錯誤，PCA是解析解，不需要梯度下降；選項(B)錯誤，PCA是一種非監督式學習降維技術，不考慮目標變數(Label)；選項(D)錯誤，卷積運算是CNN在處理網格數據（如影像）時使用的空間特徵提取方法，並非PCA的運算方式。",
        "ml_method": "主成分分析 (Principal Component Analysis, PCA)",
        "ml_method_explanation": "主成分分析（PCA）是一種廣泛使用的非監督式線性降維技術。其基本原理是將原始的高維度資料投射到一個新的正交座標系中，這些新的座標軸被稱為「主成分」。第一個主成分捕捉了資料中最大的變異量（方差），第二個主成分在與第一個正交的條件下捕捉剩餘的最大變異量，以此類推。PCA 的核心機制是透過計算資料協方差矩陣的特徵值與特徵向量來實現。這不僅能大幅減少資料維度、節省儲存與運算成本，還能去除特徵間的多重共線性，並常被用於資料視覺化與去噪。",
        "examples": [
          "在金融領域的投資組合風險管理中，量化分析師使用 PCA 來分析股票市場中數百檔股票的歷史價格走勢。透過降維，他們可以識別出少數幾個推動整個市場波動的「潛在因子」（如市場整體趨勢、產業特定衝擊），從而更有效地構建避險策略。",
          "在基因體學研究中，生物學家需要處理包含數萬個基因表現水平的微陣列數據。利用 PCA，他們可以將這些極高維度的數據降至二維或三維空間進行視覺化，快速發現不同患者樣本之間是否因為疾病亞型或藥物反應而自然形成不同的分群。"
        ],
        "comparison": "主成分分析（PCA）與特徵選擇（Feature Selection）雖然都能減少特徵數量，但原理截然不同。特徵選擇是保留原始特徵中的一部分（如依據相關係數），而 PCA 是透過線性轉換（協方差矩陣特徵分解）將原始特徵投影到全新的正交空間中，產生無法直接對應原物理意義的新特徵。PCA 非常適合用於處理高度相關（多重共線性）的高維數值資料（如感測器數據、金融指標），能最大程度保留資料變異並降噪，但不適用於需要維持特徵原始業務可解釋性的場景。",
        "keywords": [
          "主成分分析 (PCA)",
          "協方差矩陣 (Covariance Matrix)",
          "特徵值分解 (Eigen Decomposition)",
          "降維 (Dimensionality Reduction)",
          "資料變異量 (Data Variance)",
          "特徵向量 (Eigenvector)"
        ],
        "extended_tech": [
          {
            "name": "t-SNE (t-Distributed Stochastic Neighbor Embedding)",
            "desc": "一種強大的非線性降維技術，專門用於高維資料的二維或三維視覺化，能極好地保留局部群聚結構。"
          },
          {
            "name": "UMAP (Uniform Manifold Approximation and Projection)",
            "desc": "比 t-SNE 速度更快、且能更好地保留全域資料結構的降維技術，廣泛應用於單細胞測序等大規模資料分析。"
          },
          {
            "name": "Autoencoder (自編碼器)",
            "desc": "基於神經網路的非線性降維與特徵萃取方法，適用於複雜的非線性資料，且可用於異常檢測與影像降噪。"
          }
        ],
        "terminology": [
          "Eigen Decomposition",
          "Covariance Matrix",
          "Orthogonal Projection",
          "Multicollinearity",
          "Variance Maximization"
        ]
      },
      {
        "id": 31,
        "question": "某資料工程師嘗試對包含 300 個特徵的使用者行為資料集使用 DBSCAN 進行群集分析，但發現幾乎所有資料點都被判定為雜訊點（Noise Points ），難以形成有意義的群集，即使不斷調整ε（Epsilon）與MinPts 參數也無濟於事。請問下列何者為此問題最可能的根本原因？",
        "options": {
          "A": "在高維空間中，維度詛咒（Curse of Dimensionality）使得資料點之間的距離趨於相近，導致 DBSCAN 的密度估計失效；",
          "B": "DBSCAN 演算法僅適用於低維資料，無法處理高維資料；",
          "C": "300 個特徵的資料必然不具備群集結構，因此無法進行有效的分群；",
          "D": "高維空間中核心點的數量會受到數學限制，導致無法形成群集"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。在300維的高維空間中，資料會面臨「維度詛咒」，導致任何兩點之間的歐式距離差異變得極小，空間變得極為稀疏。DBSCAN是基於密度的分群演算法，依賴距離(Epsilon)來判定密度，因此在高維空間中密度估計會失效，導致難以區分叢集與雜訊。選項(B)說法過於絕對，DBSCAN可處理高維資料，但前提是需先降維或使用特定距離度量；選項(C)錯誤，特徵多寡不代表資料是否具備群集結構；選項(D)錯誤，核心點數量沒有絕對的數學限制，問題在於距離計算的失效。",
        "ml_method": "DBSCAN與維度詛咒 (DBSCAN & Curse of Dimensionality)",
        "ml_method_explanation": "DBSCAN（基於密度的噪聲應用空間聚類）是一種無需預先指定群集數量的分群演算法。它透過兩個參數：鄰域半徑（Epsilon）和最少點數（MinPts），將緊密相連的高密度區域劃分為群集，並將稀疏區域的點標記為雜訊。「維度詛咒」則是指當資料特徵（維度）增加時，資料在空間中的體積呈指數級膨脹，導致資料變得極度稀疏。在高維空間中，所有資料點到彼此的距離會趨近於一致，這使得依賴距離來定義「密度」的演算法（如 DBSCAN）完全失去鑑別力。",
        "examples": [
          "在電子商務平台的商品推薦系統中，若直接使用包含數千個維度（如瀏覽紀錄、購買歷史、點擊時間等）的原始特徵向量來尋找相似用戶，會發現所有用戶的相似度得分都很接近。系統必須先使用 Autoencoder 進行降維，才能有效進行分群。",
          "在自然語言處理的文本相似度比對中，若使用傳統的 TF-IDF 將文章轉換為包含數萬個詞彙維度的稀疏向量，使用基於歐式距離的分群方法將無法有效找出主題相似的文章。通常會改用餘弦相似度（Cosine Similarity）或先進行語意降維（如 LSA）來解決。"
        ],
        "comparison": "DBSCAN 等基於密度的分群演算法與 K-Means 等基於質心的演算法在應對高維資料時的弱點有所不同。高維資料會引發「維度詛咒」，使得歐氏距離變得缺乏鑑別力（所有點之間的距離趨於一致）。這對依賴絕對距離閾值（Epsilon）來定義「密度」的 DBSCAN 影響尤為致命，導致所有點被視為雜訊。相比之下，雖然 K-Means 在高維也會效能下降，但不會像 DBSCAN 那樣完全崩潰。處理這類高維業務場景（如文本向量、用戶行為特徵），通常必須先透過 PCA 或 Autoencoder 進行降維，或改用餘弦相似度。",
        "keywords": [
          "維度詛咒 (Curse of Dimensionality)",
          "DBSCAN",
          "密度估計 (Density Estimation)",
          "高維資料 (High-dimensional Data)",
          "群集分析 (Cluster Analysis)",
          "雜訊點 (Noise Points)"
        ],
        "extended_tech": [
          {
            "name": "Autoencoder (自編碼器)",
            "desc": "在進行分群前，先利用神經網路將高維度的使用者行為特徵壓縮成低維度的潛在表示，以克服維度詛咒。"
          },
          {
            "name": "HDBSCAN (Hierarchical DBSCAN)",
            "desc": "DBSCAN 的改良版，能自動適應不同密度的群集，且對參數 Epsilon 的敏感度較低，在複雜資料集表現更穩健。"
          },
          {
            "name": "Cosine Similarity (餘弦相似度)",
            "desc": "在高維度稀疏資料（如文本 TF-IDF 向量）中，用來取代歐氏距離進行相似度計算，能有效減少維度造成的距離扭曲。"
          }
        ],
        "terminology": [
          "Curse of Dimensionality",
          "Density-based Clustering",
          "Epsilon (ε)",
          "MinPts",
          "Euclidean Distance"
        ]
      },
      {
        "id": 32,
        "question": "某工程師正在實作一個 CNN 影像分類模型，在 PyTorch 中定義模型架構時，需要在卷積擷取特徵後接上全連結層（Fully Connected Layer）進行分類。在模型程式碼中，需要在卷積輸出與全連結層之間插入什麼操作？",
        "options": {
          "A": "使用全域平均池化（Global Average Pooling）將特徵圖壓縮後再接全連結層；",
          "B": "使用 Flatten 將特徵圖展平成一維向量；",
          "C": "直接將卷積輸出接到全連結層，系統會自動轉換維度；",
          "D": "先對特徵圖做 Softmax，再輸入全連結層"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。卷積層的輸出通常是多維度的張量（例如：批次大小 x 通道數 x 高 x 寬），而全連結層（Fully Connected Layer）預期的輸入是一維的特徵向量。因此，必須使用 Flatten 操作將多維的特徵圖展平為一維向量，才能輸入到全連結層。選項(A)雖然是現代CNN常見的替代做法（用GAP取代Flatten以減少參數），但題目明確提到要「接上全連結層進行分類」，最基本的常規操作是Flatten；選項(C)錯誤，PyTorch不會自動展平維度；選項(D)錯誤，Softmax通常放在全連結層之後用於輸出機率。",
        "ml_method": "神經網路展平操作 (Flatten in Neural Networks)",
        "ml_method_explanation": "在卷積神經網路（CNN）的架構中，Flatten（展平）是一個關鍵的過渡步驟。CNN 的前端由多個卷積層和池化層組成，負責從輸入影像中萃取出空間特徵，其輸出的資料結構是具有寬度、高度和通道數的三維張量（Tensor）。然而，網路後端用於執行分類或迴歸任務的傳統密集層（Dense Layer / Fully Connected Layer）只能接收一維的向量輸入。Flatten 操作的作用就是將這個三維張量依序排列，拉伸轉換成一個連續的一維向量，從而橋接特徵萃取區與分類決策區。",
        "examples": [
          "在銀行支票的數字自動光學字元辨識（OCR）系統中，CNN 提取出手寫數字的邊緣與曲線特徵後，這些二維的特徵映射必須經過 Flatten 處理，轉換成一維陣列，才能送入後續的神經網路層，最終判斷出該數字是 0 到 9 中的哪一個。",
          "在智慧農場的農作物病蟲害影像識別應用中，無人機拍攝的葉片影像經過多層卷積處理，保留了病斑的局部空間資訊。透過 Flatten 操作將這些空間特徵線性化後，分類器才能綜合評估所有特徵，精準預測植物感染了何種特定疾病。"
        ],
        "comparison": "Flatten 操作與 Global Average Pooling (GAP) 都是將 CNN 的多維卷積特徵圖轉換為一維向量以供全連結層使用的技術，但應用場景有別。Flatten 是將所有特徵粗暴地展平保留所有空間位置資訊，但會導致全連結層參數暴增，容易過擬合。GAP 則是計算每個特徵圖的平均值，大幅減少了參數數量並具有空間平移不變性。在傳統的簡單分類任務中 Flatten 仍常見，但在現代深層網路（如 ResNet）中，為了降低模型大小與過擬合風險，GAP 已成為主流的取代方案。",
        "keywords": [
          "Flatten (展平)",
          "全連結層 (Fully Connected Layer)",
          "卷積神經網路 (CNN)",
          "特徵圖 (Feature Map)",
          "維度轉換 (Dimension Transformation)"
        ],
        "extended_tech": [
          {
            "name": "Global Average Pooling (全域平均池化, GAP)",
            "desc": "計算每個卷積特徵通道的平均值作為輸出，能顯著減少模型參數數量，降低過擬合風險，並增強空間平移不變性。"
          },
          {
            "name": "1x1 Convolution (1x1 卷積)",
            "desc": "用於在不改變空間維度的情況下進行跨通道的特徵整合與降維，是 Inception 架構與現代 CNN 中控制運算量的核心。"
          },
          {
            "name": "Dropout",
            "desc": "在全連結層中隨機停用部分神經元，以防止模型對訓練資料產生過度依賴，是深度學習中極為重要的正則化技術。"
          }
        ],
        "terminology": [
          "Flatten",
          "Fully Connected Layer (Dense Layer)",
          "Tensor",
          "Global Average Pooling (GAP)",
          "Overfitting"
        ]
      },
      {
        "id": 33,
        "question": "某自駕車公司的 AI 訓練團隊面臨標註成本高的問題，無法取得足夠的真實惡劣天氣（大雨、濃霧）駕駛場景資料，工程師提提議使用合成資料（Synthetic Data）來補充訓練集。請問下列何者最能正確敘述合成資料在 AI 訓練中的角色？",
        "options": {
          "A": "合成資料主要用於文字任務的資料擴增，影像任務仍需依賴真實資料；",
          "B": "合成資料可完全取代真實資料，直接用於模型訓練；",
          "C": "合成資料主要用於降低模型推論時的計算成本；",
          "D": "合成資料可在控制條件下產生多樣化場景，用於擴充訓練資料並提升模型的泛化能力"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。合成資料是透過電腦模擬或生成模型（如GAN、擴散模型）所創建的人工資料。它能在可控條件下生成真實世界難以取得的罕見場景（如極端天氣、車禍邊緣情境），藉此擴充訓練集並大幅提升模型的泛化能力。選項(A)錯誤，合成資料在電腦視覺（影像）領域應用非常廣泛，如3D渲染引擎生成；選項(B)錯誤，合成資料會存在「模擬與真實差距(Sim2Real Gap)」，不能完全取代真實資料；選項(C)錯誤，合成資料用於訓練階段，與推論時的計算成本無關。",
        "ml_method": "合成資料 (Synthetic Data)",
        "ml_method_explanation": "合成資料（Synthetic Data）是指非經由真實世界物理測量或觀測取得，而是透過演算法、電腦模擬引擎或生成式 AI 模型（如 GANs、Diffusion Models）人工生成的數據。在機器學習領域，當真實資料面臨隱私法規限制、蒐集成本過高或出現長尾分佈（某些邊緣情境極其罕見）時，合成資料成為了至關重要的解決方案。它允許開發者精確控制資料的特徵分佈與標註細節，提供完美的「Ground Truth」，藉此增強訓練資料的多樣性，幫助模型學習並應對未曾見過的現實情況。",
        "examples": [
          "在金融防詐欺系統的開發中，真實的信用卡盜刷案件資料比例極低，且受限於嚴格的個資隱私法規難以共享。銀行利用生成對抗網路（GAN）生成大量符合真實交易模式特徵，但不包含任何真實客戶個資的合成盜刷紀錄，用以強化防護模型的偵測能力。",
          "在工業機器人手臂的視覺抓取訓練中，工程師使用 3D 渲染引擎（如 Unity 或 Unreal）構建虛擬工廠環境。他們在虛擬環境中合成數以萬計帶有不同光照角度、反光材質和隨機擺放位置的零件影像，讓機器人在虛擬空間中完成初步學習，再將模型轉移到實體機器人上。"
        ],
        "comparison": "合成資料（Synthetic Data）與傳統的資料擴增（Data Augmentation，如旋轉、裁切、加噪）不同。資料擴增只能在現有真實資料的基礎上進行微調，無法創造出從未出現過的全新場景。而合成資料透過 3D 引擎或生成模型（如 GANs），能夠憑空創造出極端邊緣情況（Edge Cases，如大雪中的車禍、罕見疾病的 X 光片）。這特別適用於資料取得成本極高、或涉及嚴重隱私保護法規的業務領域，是提升模型泛化能力與魯棒性的破局技術。",
        "keywords": [
          "合成資料 (Synthetic Data)",
          "泛化能力 (Generalization Ability)",
          "資料擴增 (Data Augmentation)",
          "極端場景 (Edge Cases)",
          "模型訓練 (Model Training)"
        ],
        "extended_tech": [
          {
            "name": "Generative Adversarial Networks (GANs)",
            "desc": "利用生成器與判別器的對抗訓練機制，生成高度逼真的合成影像或數據，廣泛應用於醫療影像擴充與金融防詐欺。"
          },
          {
            "name": "Diffusion Models (擴散模型)",
            "desc": "透過逐步添加噪聲再反向去噪的過程來生成高品質影像，其生成多樣性與真實度目前在許多視覺任務中已超越 GANs。"
          },
          {
            "name": "Domain Randomization (領域隨機化)",
            "desc": "在虛擬模擬環境中隨機改變光照、材質與背景，使模型在轉移至真實世界時對各種環境變化具備極強的適應力。"
          }
        ],
        "terminology": [
          "Synthetic Data",
          "Ground Truth",
          "Generalization",
          "Sim2Real Gap",
          "Edge Cases"
        ]
      },
      {
        "id": 34,
        "question": "某廣告技術公司的點擊率（CTR）預測系統每天新增數百個用戶行為特徵（如新廣告位、新設備類型），特徵空間持續動態擴展。若採用傳統靜態模型每週批次重訓一次，會導致嚴重的模型過期問題。為在特徵空間頻繁變化的情況下維持模型即時準確度，最適合的模型架構方向為何？",
        "options": {
          "A": "採用傳統靜態羅吉斯迴歸（Logistic Regression），縮短批次重訓週期從每週改為每日；",
          "B": "採用支援增量學習（Incremental Learning）的模型，使模型能隨新資料即時更新並適應新增特徵，而不需重新訓練整個模型；",
          "C": "採用固定架構的深度神經網路（DNN），每次有新特徵時重新定義輸入層後全量重訓；",
          "D": "改用預訓練圖神經網路（GNN），透過圖結構建立特徵間的關聯，自動應對新增特徵"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。面對頻繁變化的特徵空間與即時性需求，傳統的批次全量重訓會消耗大量運算資源且無法及時反映最新趨勢。增量學習（Incremental Learning）或線上學習（Online Learning）允許模型在不忘記舊知識的前提下，直接接收新進的資料串流進行微調更新，能以極低的成本快速適應新特徵。選項(A)和(C)依然依賴全量重訓，無法根本解決特徵動態擴展與即時性的問題；選項(D)GNN主要處理拓撲圖結構關聯，並未直接解決模型參數需要即時更新與增量訓練的問題。",
        "ml_method": "增量學習 (Incremental Learning)",
        "ml_method_explanation": "增量學習（Incremental Learning），又稱線上學習（Online Learning）或持續學習，是一種機器學習範式。與傳統需將所有資料收集齊全後進行一次性批次訓練（Offline Training）不同，增量學習的模型能夠在接收到新的數據流時，持續且動態地更新其內部參數。其核心機制在於模型具備在學習新知識的同時，避免「災難性遺忘」（Catastrophic Forgetting）舊知識的能力。這使得模型能夠高度適應環境的動態變化，顯著降低計算資源與儲存成本，是處理串流數據與即時預測系統的理想選擇。",
        "examples": [
          "在串流影音平台的個人化推薦系統中，使用者的喜好可能會隨時間快速改變（例如突然迷上某部剛上檔的韓劇）。透過增量學習，推薦模型可以在使用者每次點擊或觀看影片後，即時微調其興趣向量，在下一秒立刻給出最貼近當下心情的推薦片單。",
          "在物聯網的智慧電網預測中，電力負載會受到突發天氣變化或特殊節日活動的影響。採用增量學習的時間序列預測模型，能夠每分鐘接收最新的感測器讀數進行參數更新，快速捕捉到短期的耗電量波動趨勢，幫助調度中心做出更精準的發電決策。"
        ],
        "comparison": "增量學習（Incremental Learning）與傳統的批次學習（Batch Learning）在應對動態資料流時展現出完全不同的能力。批次學習在特徵擴增或數據分佈改變時，必須耗費巨量時間與資源重新訓練整個模型，這在需要即時反應的廣告競價（RTB）或內容推薦系統中是不可接受的。增量學習允許模型持續吸收新資料、即時微調權重，並能在動態擴展特徵空間的情況下維持最新準確度。它適用於環境變化快速、具備串流數據特性且運算資源有限的即時業務場景。",
        "keywords": [
          "增量學習 (Incremental Learning)",
          "線上學習 (Online Learning)",
          "特徵空間動態擴展 (Dynamic Feature Space Expansion)",
          "即時準確度 (Real-time Accuracy)",
          "模型過期 (Model Staleness)"
        ],
        "extended_tech": [
          {
            "name": "線上學習 (Online Learning)",
            "desc": "資料以串流形式逐筆或小批次進入，模型即時更新參數，適用於股市高頻交易或即時廣告點擊率預測等極端延遲敏感場景。"
          },
          {
            "name": "災難性遺忘對策 (Catastrophic Forgetting Mitigation)",
            "desc": "增量學習中的關鍵技術，如 EWC (Elastic Weight Consolidation)，確保模型在學習新特徵時不會遺忘過去學到的重要知識。"
          },
          {
            "name": "強化學習 (Reinforcement Learning)",
            "desc": "透過與環境持續互動並獲得獎勵回饋來優化決策策略，同樣具備持續學習的特性，常用於自動駕駛與遊戲 AI。"
          }
        ],
        "terminology": [
          "Incremental Learning",
          "Online Learning",
          "Catastrophic Forgetting",
          "Batch Training",
          "Feature Space"
        ]
      },
      {
        "id": 35,
        "question": "某生物醫學研究機構正在建構一個整合「基因序列特徵」與「電子病歷文本特徵」的疾病風險預測模型。由於高維數值特徵和語意文本特徵的性質差異顯著，請問下列哪一種特徵處理與選擇策略最為合適？",
        "options": {
          "A": "將所有特徵合併為單一特徵矩陣後，使用主成分分析 （PCA） 進行降維，作為模型輸入；",
          "B": "採分層策略，先對基因序列特徵進行特徵選擇，再對文本特徵進行語意表示，最後將兩類特徵融合（Feature Fusion）後輸入模型；",
          "C": "將所有特徵合併後，使用隨機森林 （Random Forest） 的特徵重要性進行一次性排序與篩選；",
          "D": "將文本特徵轉換為簡單統計特徵 （如詞頻） 後與基因特徵一併建模，以降低特徵處理複雜度"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。處理異質多模態資料（如高維數值的基因特徵與非結構化的病歷文本）時，最有效的做法是採用「分層處理與特徵融合」策略。這意味著針對不同資料的物理意義與結構特性，使用各自專屬的方法萃取特徵（例如基因用特徵選擇、文本用NLP嵌入表示），然後在潛在空間（Latent Space）進行特徵融合。選項(A)與(C)直接將異質特徵粗暴合併，忽略了資料分佈與尺度的巨大差異；選項(D)將豐富的文本語意退化為簡單詞頻，會嚴重流失重要的病歷上下文資訊。",
        "ml_method": "特徵融合 (Feature Fusion)",
        "ml_method_explanation": "特徵融合（Feature Fusion）是多模態機器學習（Multimodal Machine Learning）中的核心技術。當系統需要同時處理來自不同來源、不同格式或不同感測器的資料（如影像、聲音、文字、感測器數值）時，單一模態往往無法提供完整的資訊。特徵融合的原理是將這些異質特徵映射到一個共通的特徵空間中，藉此捕捉不同模態之間的互補資訊與潛在關聯。常見的策略包含早期融合（在輸入層合併）、晚期融合（結合各模態的預測結果）以及跨層的注意力機制融合，能大幅提升模型的綜合判斷能力。",
        "examples": [
          "在短影音平台的內容審查系統中，AI 必須同時分析影片的畫面（視覺特徵）、背景音樂與語音（聽覺特徵）以及影片的標題與字幕（文本特徵）。透過特徵融合技術，模型能綜合判斷「畫面正常但語音具有威脅性」的違規內容，大幅降低漏判率。",
          "在智慧手錶的睡眠品質監測應用中，裝置會同時收集用戶的心率變化（時序感測數據）和翻身動作（加速度計數據）。特徵融合模型會將這兩種不同維度的生理訊號整合，精準區分出淺眠、深眠與快速動眼期（REM），提供用戶更準確的健康分析報告。"
        ],
        "comparison": "在多模態學習中，特徵融合（Feature Fusion）策略遠優於將所有特徵粗暴拼接的方法。基因數值與文本語意的資料尺度、分佈和內在邏輯差異極大，直接拼接會導致模型難以捕捉兩者各自的深層特徵，甚至被高維文本特徵淹沒。採分層策略，利用各自領域最適用的模型（如基因用特徵選擇、文本用 Transformer）萃取出高階潛在表示（Latent Representations），再於決策前進行特徵融合，能最大化地發揮不同資料模態間的互補性，這是目前醫療 AI、影音審查等複雜業務的標準做法。",
        "keywords": [
          "特徵融合 (Feature Fusion)",
          "多模態模型 (Multimodal Model)",
          "異質特徵 (Heterogeneous Features)",
          "分層策略 (Hierarchical Strategy)",
          "語意表示 (Semantic Representation)",
          "高維數值特徵 (High-dimensional Numerical Features)"
        ],
        "extended_tech": [
          {
            "name": "早期融合 (Early Fusion)",
            "desc": "在輸入階段將多種資料模態拼接，適用於不同模態間存在強烈時間或空間同步關聯性的情境，如影音的唇語辨識。"
          },
          {
            "name": "晚期融合 (Late Fusion)",
            "desc": "各模態獨立運算得出預測機率後，再透過投票或加權平均整合結果，具有高度強健性，能避免單一感測器失效影響全局。"
          },
          {
            "name": "Cross-modal Attention (跨模態注意力機制)",
            "desc": "在深度神經網路中，利用注意力機制讓一個模態的特徵去引導另一個模態的特徵萃取，能更精準捕捉模態間的複雜對應關係。"
          }
        ],
        "terminology": [
          "Feature Fusion",
          "Multimodal Learning",
          "Latent Space",
          "Heterogeneous Data",
          "Representation Learning"
        ]
      },
      {
        "id": 36,
        "question": "某公司希望開發一個工業零件瑕疵辨識分類模型，共有 10 個類別，但每類僅約50 張人工標註影像（總計約 500 張）。由於標註成本高昂，短期內無法擴充資料集。在此情境下，工程師需要在有限標註資料下建構高效能模型。請問下列哪一種策略最為適合？",
        "options": {
          "A": "使用在大型資料集預訓練完成的卷積神經網路 （CNN），並進行遷移學習微調；",
          "B": "從頭訓練大型 Vision Transformer（ViT），完全使用現有500 張影像；",
          "C": "使用 K-means 對影像進行分群，並直接將群集結果作為分類模型輸出；",
          "D": "複製既有的資料以增加標註影像數量，並從頭訓練深度 CNN 模型"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。在標註資料極度稀缺（僅500張影像）的情況下，從頭訓練深度學習模型必定會導致嚴重的過擬合（Overfitting）。遷移學習（Transfer Learning）是最佳策略：利用在ImageNet等大型資料集上預訓練好的模型，提取其已學會的通用視覺特徵（如邊緣、紋理），然後僅針對目標任務的少量資料進行微調（Fine-tuning）。選項(B)ViT對資料量的需求比CNN更大，500張會完全失敗；選項(C)K-means是無監督方法，無法保證分群結果對應10種瑕疵；選項(D)單純複製資料不會增加資訊量，無助於解決過擬合。",
        "ml_method": "遷移學習 (Transfer Learning)",
        "ml_method_explanation": "遷移學習（Transfer Learning）是一種將模型在某個領域或任務（來源任務）上學習到的知識，應用到另一個不同但相關的領域或任務（目標任務）上的技術。其核心原理基於神經網路的層次特徵萃取特性：淺層網路通常學習到通用的基礎特徵（如視覺上的輪廓、顏色），這些特徵具有高度的可遷移性。透過保留預訓練模型的權重，並僅更新最後幾層分類器或進行小幅度的全局微調，模型可以在極少量的目標數據上快速收斂，不僅節省了大量的運算資源，更能有效避免過擬合現象。",
        "examples": [
          "在自然語言處理領域，一家新創公司希望開發專屬的醫療客服機器人。他們不需要從零開始訓練語言模型，而是下載已經吸收了大量網際網路知識的預訓練模型（如 BERT 或 Llama），然後僅使用醫院內部的醫療問答紀錄進行遷移學習，便能打造出專業的醫療助理。",
          "在衛星影像分析中，研究人員需要建立一個辨識特定稀有違章建築的模型。由於該類建築的樣本極少，他們採用了預先在百萬張一般街景圖片上訓練好的影像辨識模型，保留其辨識幾何形狀的能力，再利用少量的衛星空照圖進行微調，成功達到高辨識率。"
        ],
        "comparison": "在資料極度稀缺的情境下，遷移學習（Transfer Learning）與從頭訓練（Train from scratch）是成敗的關鍵差異。深度學習模型（尤其是 ViT 或大型 CNN）需要海量數據來收斂並避免過擬合。只有 500 張標註影像的工業瑕疵檢測若從頭訓練，模型只會死背這 500 張圖片。遷移學習透過借用在千萬張圖片上預訓練模型的「通用視覺知識」（如辨識邊緣、材質），只需微調最後幾層，就能在極少樣本下達到極高的業務精確度，是中小企業與醫療等少樣本場景導入 AI 的唯一實用途徑。",
        "keywords": [
          "遷移學習 (Transfer Learning)",
          "預訓練模型 (Pre-trained Model)",
          "微調 (Fine-tuning)",
          "卷積神經網路 (CNN)",
          "過擬合 (Overfitting)",
          "標註資料稀缺 (Data Scarcity)"
        ],
        "extended_tech": [
          {
            "name": "Few-Shot Learning (少樣本學習)",
            "desc": "旨在讓模型僅透過極少數（通常個位數）的範例樣本就能學會辨識新類別，適用於類別頻繁變更且資料難以收集的場景。"
          },
          {
            "name": "Domain Adaptation (領域適應)",
            "desc": "遷移學習的一種，專注於解決訓練資料（來源域）與實際應用環境（目標域）分佈不同的問題，如從晴天影像遷移到雨天場景。"
          },
          {
            "name": "Self-Supervised Learning (自監督學習)",
            "desc": "利用大量無標註資料，透過設定代理任務（如預測遮蔽區塊）讓模型自主學習強大的特徵表示，再用少量標註資料進行微調。"
          }
        ],
        "terminology": [
          "Transfer Learning",
          "Pre-training",
          "Fine-tuning",
          "Overfitting",
          "Vision Transformer (ViT)"
        ]
      },
      {
        "id": 37,
        "question": "某製造廠開發產線瑕疵檢測模型時，資料集存在嚴重類別不平衡問題，其中良品約占 99%，瑕疵品僅占 1%。若直接使用原始資料進行訓練，模型容易偏向預測多數類別（良品），導致對少數類別（瑕疵品）辨識能力不足。在不調整模型架構與學習演算法的前提下，僅透過資料前處理方式改善此問題，下列何者最適當？",
        "options": {
          "A": "使用 SMOTE 等過採樣方法進行少數類別擴增；",
          "B": "加入 L1／L2 正則化（Regularization）以防止過擬合；",
          "C": "大幅增加深度神經網路的層數，以強化特徵萃取能力；",
          "D": "複製更多良品數據，以進一步提升模型的準確率（Accuracy）"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。處理嚴重的類別不平衡問題，若限制只能在「資料前處理」階段解決，最常使用的方法是重採樣技術。SMOTE (Synthetic Minority Over-sampling Technique) 是一種過採樣方法，透過插值的方式在少數類別樣本之間生成新的合成樣本，有效平衡資料集，避免模型偏向多數類別。選項(B)和(C)屬於模型架構與演算法層面的調整，不符合題目限制；選項(D)複製良品數據會讓不平衡問題變得更嚴重，使模型變成只會無腦猜測良品（準確率高達 99.9% 但完全失去檢測瑕疵的能力）。",
        "ml_method": "SMOTE (合成少數類別過採樣技術)",
        "ml_method_explanation": "SMOTE（Synthetic Minority Over-sampling Technique）是一種用於解決資料集類別不平衡問題的強大資料擴增演算法。與簡單複製少數類別樣本（容易導致模型過度擬合特定點）不同，SMOTE 採用了特徵空間內的插值機制。它會先找出少數類別中的一個資料點，然後計算其 K 個最近鄰居（KNN）。接著，在該資料點與其鄰居的連線上，隨機選擇一點生成全新的合成樣本。這種方式不僅增加了少數類別的樣本數量，更擴充了決策邊界的泛化空間，使分類器能學習到更穩健的分類規則。",
        "examples": [
          "在銀行信用卡盜刷偵測系統中，正常的交易佔了 99.9% 以上，而真正的盜刷案件極少。為了讓 AI 模型學會辨識盜刷特徵，資料科學家利用 SMOTE 技術生成虛擬的異常交易紀錄，讓模型在訓練時能有足夠的反例學習，有效提高實際環境下的盜刷攔截率。",
          "在罕見疾病的基因檢測分析中，確診患者的資料量遠遠不及健康受試者。醫學資訊研究員使用 SMOTE 演算法，在現有病患的基因特徵空間中合成出更多潛在的陽性樣本數據，幫助機器學習模型建立更準確的診斷門檻，減少漏診的風險。"
        ],
        "comparison": "SMOTE 過採樣技術與簡單的資料複製（Random Over-sampling）在處理類別不平衡問題上有著本質差異。簡單複製少數類別（如瑕疵品）雖然平衡了數量，但會導致模型嚴重過度擬合這些重複的樣本點，失去對未知瑕疵的泛化能力。SMOTE 則是透過在少數類別樣本的特徵空間中進行 KNN 插值，合成出「合理但未曾出現」的新樣本。在製造業良率極高（99%）或信用卡盜刷極少等極端不平衡業務中，SMOTE 是前處理階段提升模型少數類別召回率（Recall）的標準且有效的解決方案。",
        "keywords": [
          "SMOTE",
          "類別不平衡 (Class Imbalance)",
          "過採樣 (Over-sampling)",
          "少數類別擴增 (Minority Class Augmentation)",
          "資料前處理 (Data Preprocessing)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "欠採樣 (Under-sampling)",
            "desc": "隨機移除多數類別的樣本以達到資料平衡，雖然會遺失部分資訊，但在多數類別資料量極端龐大導致運算緩慢時非常有用。"
          },
          {
            "name": "Focal Loss",
            "desc": "在演算法層面解決不平衡問題的損失函數，透過動態降低易分類樣本的權重，強迫模型將專注力集中在難以分類的少數類別上。"
          },
          {
            "name": "Cost-sensitive Learning (成本敏感學習)",
            "desc": "在模型訓練中，對少數類別的誤判賦্যু予較高的懲罰權重，促使模型在不改變資料分佈的前提下，更謹慎地對待重要少數案例。"
          }
        ],
        "terminology": [
          "SMOTE",
          "Class Imbalance",
          "Over-sampling",
          "Synthetic Samples",
          "K-Nearest Neighbors (KNN)"
        ]
      },
      {
        "id": 38,
        "question": "某 IoT 平台接收工廠溫度感測器資料，發現在常態分佈（均值 25°C，標準差 2°C）的數萬筆紀錄中，出現數筆「999°C」的極端值，研判為感測器通訊錯誤（網路封包延遲導致數值溢位）所致，且該異常數值在實際情況下不可能發生。在進行模型訓練前的資料清洗階段，針對這類離群值，最適當的處理策略為何？",
        "options": {
          "A": "保留所有原始數值，並使用平均數（Mean）作為特徵輸入模型；",
          "B": "對數據進行 Z-score 標準化，使數值落於約[-3, 3]範圍；",
          "C": "將 999°C 以獨熱編碼（One-Hot Encoding）轉為獨立類別特徵；",
          "D": "刪除異常的 999°C 記錄，或以中位數（Median）進行填補"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。對於明顯因為硬體或通訊錯誤產生的、物理上不可能存在的極端離群值（Outliers），最佳的資料清洗策略是將其刪除，或者使用對離群值較不敏感的統計量（如中位數）進行填補（Imputation）。選項(A)保留極端值會嚴重扭曲模型的訓練梯度；選項(B)Z-score標準化的均值和標準差會被 999°C 這個極端值嚴重拉抬，導致所有正常資料被壓縮到極小的區間而失去鑑別度；選項(C)溫度是連續數值，轉為獨熱編碼沒有意義且會破壞數值的連續性特徵。",
        "ml_method": "離群值處理 (Outlier Handling)",
        "ml_method_explanation": "離群值處理是資料前處理與特徵工程中不可或缺的一環。離群值是指那些在資料集中顯著偏離其他觀察值、呈現異常分佈的資料點。它們的產生可能是由於測量錯誤、系統故障或確實是罕見的極端事件。在機器學習中，多數模型（尤其是基於距離或梯度的演算法如線性迴歸、SVM、神經網路）對離群值極度敏感，這些異常點會牽引決策邊界或扭曲損失函數。處理策略通常包括：刪除（針對明確錯誤）、填補（使用中位數或基於模型的預測值替換）、轉換（如取對數）或使用對異常值強健的模型（如樹狀模型）。",
        "examples": [
          "在電商平台的用戶年齡資料庫中，發現有少數用戶的年齡被填寫為 150 歲或負數。系統在進入用戶畫像分析前，會自動執行離群值處理邏輯，將這些明顯不合常理的資料點剔除，或者統一填補為該用戶群體的年齡中位數，以確保推薦系統的準確性。",
          "在房地產價格預測模型中，如果有一筆房屋交易價格因為小數點誤植而高達市價的百倍，這個極端值會使線性迴歸模型產生嚴重的偏差。資料分析師會使用 IQR（四分位距）法則偵測出這些離群值並將其移除，確保模型能正確學習到真實的房價趨勢。"
        ],
        "comparison": "對於物理上不可能發生的極端離群值（如感測器錯誤產生的 999°C），直接刪除或用中位數填補，優於使用平均數填補或 Z-score 標準化。平均數與常規的標準化極易被單一極端值嚴重扭曲，導致整體特徵分佈失真。在 IoT 設備監控、金融交易等常有髒數據（Dirty Data）的業務場景中，識別並隔離這些因系統錯誤產生的離群值，是確保機器學習模型（特別是線性模型與距離度量模型）不會被錯誤引導決策邊界的關鍵資料清洗步驟。",
        "keywords": [
          "離群值處理 (Outlier Handling)",
          "資料清洗 (Data Cleaning)",
          "極端值 (Extreme Values)",
          "中位數填補 (Median Imputation)",
          "異常記錄 (Abnormal Records)"
        ],
        "extended_tech": [
          {
            "name": "Isolation Forest (孤立森林)",
            "desc": "一種基於樹狀結構的無監督異常檢測演算法，能有效且快速地在高維資料集中將離群值孤立出來，適用於詐欺偵測與設備預警。"
          },
          {
            "name": "Robust Scaler",
            "desc": "使用中位數與四分位距（IQR）進行資料標準化，對離群值具有極高的抵抗力，能避免極端值壓縮了正常資料的分佈空間。"
          },
          {
            "name": "缺失值插補 (Missing Value Imputation)",
            "desc": "處理資料遺失的技術，除了簡單的均值/中位數填補外，還包含使用 KNN 或機器學習模型預測缺失值的進階多重插補法 (MICE)。"
          }
        ],
        "terminology": [
          "Outlier",
          "Imputation",
          "Median",
          "Z-score",
          "Data Cleaning"
        ]
      },
      {
        "id": 39,
        "question": "某 AI 平台工程師正在為多模態模型訓練系統規劃資料儲存架構，需要同時處理原始影像、非結構化文本，以及經過整理的結構化特徵資料。在此情境下，應如何選擇資料湖（Data Lake）與資料倉儲（Data Warehouse）的使用方式？",
        "options": {
          "A": "將原始影像與文本資料儲存在 Data Lake，將整理後的結構化特徵資料儲存在 Data Warehouse；",
          "B": "將所有資料統一儲存在 Data Warehouse，以提升查詢效率；",
          "C": "將所有資料統一儲存在 Data Lake，但犧牲結構化資料的查詢效率；",
          "D": "僅將原始影像資料儲存在 Data Lake，其餘資料統一存入 Data Warehouse"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。這考驗資料儲存架構的特性。資料湖 (Data Lake) 適合儲存大量、未處理的原始資料，包括非結構化（如影像、音訊）和半結構化（如文本、JSON）資料，成本較低且具備高度彈性。資料倉儲 (Data Warehouse) 則針對關聯式、經過清洗與整理的「結構化資料」進行了高度優化，適合快速進行複雜的 SQL 查詢與商業分析。因此，將影像/文本放資料湖，整理好的特徵放資料倉儲是業界標準的現代資料架構（如 Data Lakehouse 的基礎概念）。",
        "ml_method": "資料湖與資料倉儲架構 (Data Lake & Data Warehouse)",
        "ml_method_explanation": "資料湖與資料倉儲是現代大數據架構的兩大支柱。資料湖（Data Lake）採用「讀取時賦予模式（Schema-on-Read）」的概念，允許企業以原始格式（包含結構化、非結構化、日誌、影像）海量傾倒並儲存資料，強調高擴展性與低成本，是資料科學家進行探索性分析和訓練機器學習模型的寶庫。相對地，資料倉儲（Data Warehouse）採用「寫入時賦予模式（Schema-on-Write）」，資料在進入前必須經過嚴格的 ETL 轉換，轉為高度關聯的結構化表格，其核心機制專注於提供極致的查詢效能，服務於商業智慧（BI）與報表分析。",
        "examples": [
          "在自動駕駛汽車的開發中，車輛每天產生數 TB 的感測器原始數據（包含攝影機影像、光達點雲）。這些海量的非結構化數據會直接存入「資料湖」供深度學習模型訓練使用；而經過分析後萃取出的車輛妥善率、每日行駛里程等結構化報表指標，則會同步到「資料倉儲」供管理層查詢。",
          "在大型零售企業的數據中台中，來自各家分店的客戶客訴錄音檔和社群媒體貼文會存放在「資料湖」中，等待 NLP 模型進行情緒分析；而各分店每日打平的營業額、庫存數量等精確數字，則會進入「資料倉儲」，支撐供應鏈系統進行即時的庫存調度與銷售預測。"
        ],
        "comparison": "資料湖（Data Lake）與資料倉儲（Data Warehouse）在架構定位上有明顯分工。資料湖支援「Schema-on-Read」，能以極低成本儲存海量非結構化原始資料（如影像、文本），是 AI 模型訓練與探索性分析的理想場所。資料倉儲則要求「Schema-on-Write」，專注於儲存經過嚴格清洗、關聯性強的結構化特徵，確保了極高的 SQL 查詢與分析效能。現代企業（如零售、生醫）面對多模態 AI 需求時，常採用這種分層架構（或融合兩者的 Data Lakehouse），以兼顧機器學習的彈性與商業分析的效能。",
        "keywords": [
          "資料湖 (Data Lake)",
          "資料倉儲 (Data Warehouse)",
          "非結構化資料 (Unstructured Data)",
          "結構化資料 (Structured Data)",
          "多模態模型 (Multimodal Model)",
          "資料儲存架構 (Data Storage Architecture)"
        ],
        "extended_tech": [
          {
            "name": "Data Lakehouse (資料湖倉)",
            "desc": "結合了資料湖的低成本與非結構化儲存彈性，以及資料倉儲的 ACID 交易保證與高效 SQL 查詢能力的新一代資料架構。"
          },
          {
            "name": "ETL / ELT Pipeline",
            "desc": "負責將資料湖中的原始數據進行萃取、轉換，並載入到資料倉儲中的自動化資料工程管線，確保資料品質與一致性。"
          },
          {
            "name": "Feature Store (特徵庫)",
            "desc": "集中管理、儲存與提供機器學習特徵的平台，確保模型訓練（離線）與模型推論（線上）所使用的特徵定義與數據完全一致。"
          }
        ],
        "terminology": [
          "Data Lake",
          "Data Warehouse",
          "Unstructured Data",
          "Schema-on-Read",
          "Schema-on-Write"
        ]
      },
      {
        "id": 40,
        "question": "某智慧製造公司在產線上部署工業相機進行即時外觀瑕疵檢測，原先將影像傳至雲端進行 AI 推論，但因網路延遲與連線不穩導致系統無法滿足即時需求（需低於 200ms）。工程師因此改為將模型部署於產線端的邊緣裝置後，但仍未達系統需求。在不更換硬體設備的前提下，下列哪一組技術最能有效降低推論延遲，同時維持合理準確率？",
        "options": {
          "A": "減少訓練資料的使用數量，並重新訓練模型以提升推論效率；",
          "B": "使用批次推論（Batch Inference）處理多張影像以提升計算效率；",
          "C": "採用模型集成（Model Ensemble），透過多模型投票提升準確率；",
          "D": "將模型由 FP32 量化為 INT8，並進行推論加速優化"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。在硬體資源受限的邊緣裝置（Edge Devices）上要降低推論延遲，最主流且有效的技術是模型量化（Model Quantization）。將模型參數的精度從 32位元浮點數 (FP32) 降低至 8位元整數 (INT8)，能大幅減少模型的記憶體佔用與頻寬需求，並利用硬體的 INT8 加速指令集顯著提升推論速度，且通常只會造成極微小的準確率下降。選項(A)減少訓練資料只會降低準確率，不影響推論架構速度；選項(B)批次推論會增加單張影像的延遲（需等待湊齊Batch）；選項(C)模型集成會加重運算負擔，使延遲更嚴重。",
        "ml_method": "模型量化 (Model Quantization)",
        "ml_method_explanation": "模型量化（Model Quantization）是一種模型壓縮與加速技術，旨在減少深度神經網路在推論階段的計算負載與記憶體足跡。在神經網路的訓練過程中，權重與激活值通常使用 32 位元浮點數（FP32）來保持計算的極高精度。然而在推論階段，模型對數值精度的依賴度降低。量化技術透過數學映射，將這些高精度的浮點數轉換為較低精度的資料格式，例如 16 位元浮點數（FP16）甚至 8 位元整數（INT8）。這不僅能將模型檔案大小縮減至原來的四分之一，還能利用現代晶片（如 TPU, NPU）針對低精度整數運算的硬體加速電路，實現數倍的效能提升。",
        "examples": [
          "在智慧型手機上運行的語音助理（如 Siri 或 Google Assistant），為了在沒有網路的情況下也能即時辨識使用者的喚醒詞「Hey Siri」，工程師會將雲端訓練好的龐大語音模型進行 INT8 量化，使其能夠塞入手機極小的記憶體中，並在低功耗的情況下保持全天候的即時推論。",
          "在無人機的即時避障系統中，運算硬體受到嚴格的重量和電池容量限制。開發團隊利用模型量化技術壓縮目標偵測演算法，讓無人機機載的微型晶片能夠以每秒 60 幀的速度處理影像畫面，確保在高速飛行時有足夠的反應時間避開樹木與建築物。"
        ],
        "comparison": "模型量化（Model Quantization）與模型集成（Ensemble）在邊緣運算中扮演相反的角色。模型集成透過組合多個模型來提升準確率，但會成倍增加運算時間與記憶體消耗，這在受限的邊緣裝置（如工業相機、無人機）上是致命的。模型量化則是透過將 32 位元浮點數（FP32）壓縮為 8 位元整數（INT8），大幅縮減模型體積並利用硬體指令集加速推論。在追求極致低延遲且硬體資源受限的即時邊緣檢測場景中，量化能在幾乎不犧牲準確率的前提下，滿足苛刻的延遲要求。",
        "keywords": [
          "模型量化 (Model Quantization)",
          "推論加速 (Inference Acceleration)",
          "邊緣裝置 (Edge Device)",
          "低延遲 (Low Latency)",
          "FP32與INT8 (FP32 to INT8)"
        ],
        "extended_tech": [
          {
            "name": "模型剪枝 (Model Pruning)",
            "desc": "移除神經網路中權重接近於零的冗餘神經元或連線，進一步縮小模型體積並加速運算，通常與模型量化搭配使用。"
          },
          {
            "name": "知識蒸餾 (Knowledge Distillation)",
            "desc": "將龐大且複雜的「教師模型」學到的知識，轉移教導給輕量級的「學生模型」，使其在邊緣裝置上能達到接近大型模型的效能。"
          },
          {
            "name": "TensorRT / ONNX Runtime",
            "desc": "專為深度學習推論優化的引擎與執行環境，提供層次融合、動態記憶體配置及底層硬體加速，是模型上線部署的核心套件。"
          }
        ],
        "terminology": [
          "Model Quantization",
          "Edge Inference",
          "INT8",
          "FP32",
          "Model Compression"
        ]
      },
      {
        "id": 41,
        "question": "某 AI 影像辨識平台以單一 GPU 伺服器提供多租戶推論服務，系統長期觀察到 GPU 使用率約維持在 60%左右，且在執行過程中可觀察到 GPU kernel 之間存在明顯閒置間隔，單次推論多以小批次方式執行。然而，在尖峰時段時，請求延遲會出現明顯波動甚至突增。同時，CPU 與記憶體資源使用率均未達瓶頸，且系統團隊已排除硬體、網路與請求併發控制異常。在此情境下，請判斷最可能造成問題的原因為何？",
        "options": {
          "A": "GPU 排程策略與批次大小設定不當，導致 GPU 運算單元未被有效利用；",
          "B": "請求併發控制機制不佳，導致多個請求同時搶占 GPU Context 資源造成延遲；",
          "C": "GPU 硬體效能不足，無法支撐推論負載；",
          "D": "模型未進行量化優化，導致推論計算成本過高"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。GPU具備數千個運算核心，非常適合處理高吞吐量的平行運算。題目描述 GPU Kernel 之間存在閒置間隔、且單次推論多以「小批次 (small batch size)」執行，這表明 GPU 每次啟動運算時，沒有足夠的資料來填滿其龐大的平行運算單元。在尖峰時段，頻繁地啟動小批次任務會產生大量的 Context Switch 和資料傳輸開銷（Overhead），導致延遲飆升。解決方案通常是導入動態批次處理（Dynamic Batching），將多個小請求合併成大批次再送入 GPU 執行。選項(B)(C)已被題目排除（資源未達瓶頸、併發控制無異常）；選項(D)量化可以加速，但並未點出「使用率 60% 卻有閒置間隔與小批次」的核心現象。",
        "ml_method": "動態批次推論與GPU排程 (Dynamic Batching & GPU Scheduling)",
        "ml_method_explanation": "在部署機器學習推論服務時，硬體加速器（如 GPU）的運算特性決定了系統架構的設計。GPU 擁有極高的記憶體頻寬與數以千計的 CUDA 核心，它的優勢在於「高吞吐量」的矩陣平行運算，而非「低延遲」的循序處理。如果系統每次只餵給 GPU 單一筆資料（Batch Size = 1），GPU 的大部分核心將處於閒置狀態，且資料在 CPU 與 GPU 之間的傳輸時間將遠大於實際運算時間。動態批次處理（Dynamic Batching）機制透過在伺服器端設置一個極短的等待時間視窗（例如 10 毫秒），將這段時間內湧入的多個獨立請求合併為一個大型張量（Tensor），一次性交給 GPU 運算，從而在不顯著增加延遲的情況下，徹底壓榨出 GPU 的運算極限。",
        "examples": [
          "在大型語言模型（如 ChatGPT）的線上服務中，全球有上百萬用戶同時輸入 prompt。伺服器不會針對每個使用者的請求單獨啟動一次 GPU 推論，而是透過 Dynamic Batching 排程器，將數十個長度相近的 prompt 打包在一起，一次進行注意力機制的矩陣乘法，大幅降低了每個 token 的生成成本。",
          "在智慧城市的交通監控中心，數千支監視器同時將畫面串流回總部。影像辨識系統的推論伺服器會將不同攝影機傳來的單幅影像暫存於緩衝區，每收集到 64 張影像便組合出一個 Batch 交給 GPU 進行車牌辨識，這種排程策略使一台 GPU 的處理量達到了單張推論的數十倍。"
        ],
        "comparison": "動態批次推論（Dynamic Batching）與提升併發執行緒數在解決 GPU 瓶頸時的原理不同。GPU 的強項在於海量核心的平行運算。如果請求都是單筆（Batch Size=1）送入，GPU 核心會大量閒置，且頻繁的 Context Switch 會造成極大延遲。動態批次處理在伺服器端將幾毫秒內的短暫請求累積成一個大 Batch 一次送入 GPU，完美契合了 GPU 高吞吐量的硬體特性。在大型語言模型（LLM）API 服務或高流量的即時影像辨識雲端平台中，這是最大化硬體利用率、平滑尖峰延遲的關鍵排程技術。",
        "keywords": [
          "動態批次推論 (Dynamic Batching)",
          "GPU排程 (GPU Scheduling)",
          "硬體效能利用率 (Hardware Utilization)",
          "小批次執行 (Small Batch Execution)",
          "推論延遲 (Inference Latency)"
        ],
        "extended_tech": [
          {
            "name": "TensorRT (NVIDIA)",
            "desc": "提供深度學習推論最佳化，透過層融合與核心自動調校，能進一步配合動態批次處理發揮 GPU 運算極限。"
          },
          {
            "name": "Triton Inference Server",
            "desc": "NVIDIA 開源的模型服務伺服器，內建強大的動態批次排程與多模型並發管理功能，是業界部署大規模 AI 服務的標準架構。"
          },
          {
            "name": "Continuous Batching (持續批次處理)",
            "desc": "針對 LLM 生成文本長度不一的問題所設計的進階排程技術，能在單一 token 生成完成後即刻替換請求，大幅提升 LLM 吞吐量。"
          }
        ],
        "terminology": [
          "Dynamic Batching",
          "GPU Kernel",
          "Throughput",
          "Context Switch",
          "Inference Server"
        ]
      },
      {
        "id": 42,
        "question": "某保險公司將理賠金額預測模型正式部署上線，MLOps 團隊設計監控機制。三個月後模型整體均方根誤差（RMSE）無明顯變化，但業務單位反映高額理賠案件的預測誤差明顯增加。經分析，高額理賠案件僅佔約 5%的樣本比例，且未被監控機制及時發現。請問最可能的設計缺陷為何？",
        "options": {
          "A": "監控頻率不足，應由每日批次監控改為即時串流監控；",
          "B": "高額理賠案件屬於長尾分布，難以透過監控指標偵測，因此無法透過監控機制發現問題；",
          "C": "RMSE 無法有效反映高額誤差，應改以平均絕對誤差（MAE）作為主要監控指標；",
          "D": "僅監控整體 RMSE，未針對不同理賠金額區間進行分群監控"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。當模型表現退化集中在資料集中佔比極小的特定子群體（如5%的高額理賠）時，只觀察「整體資料集的平均指標（如整體 RMSE）」會產生嚴重的掩蓋效應。95%正常案件的穩定表現會稀釋掉那5%異常案件的誤差，導致監控儀表板看起來一切正常。這就是缺乏「分群監控 (Subpopulation/Segmented Monitoring)」的典型設計缺陷。選項(A)頻率不是問題主因；選項(B)錯誤，長尾分佈正是需要分群監控的理由；選項(C)相反了，RMSE 對大誤差更敏感（因為平方），若連 RMSE 都沒變化，代表整體平均被嚴重稀釋，改用 MAE 狀況會更糟。",
        "ml_method": "模型分群監控 (Subpopulation Monitoring)",
        "ml_method_explanation": "模型分群監控（Subpopulation Monitoring 或 Segmented Monitoring）是 MLOps 運維中的進階實踐。在現實世界中，模型對不同特徵族群（例如：不同的年齡層、地理區域、交易金額區間或性別）的預測效能往往是不對稱的。如果只依賴單一的全局指標（Global Metric）來評估線上模型的健康狀況，那些佔比較小的邊緣群體（Edge Cases）一旦發生效能崩潰或模型漂移，很容易被龐大的多數群體數據所掩蓋。分群監控透過資料切片（Data Slicing）技術，為關鍵的業務維度或敏感特徵建立獨立的監控指標與警報閾值，確保系統的公平性與各個商業場景的穩定性。",
        "examples": [
          "在銀行的信用卡信用評分系統中，雖然整體的違約預測準確率高達 90%，但風險管理團隊實施了分群監控，分別追蹤「社會新鮮人」與「資深客戶」的指標。結果發現新鮮人族群的預測準確率近期暴跌至 60%，及時促使團隊針對該特定族群重訓模型，避免了潛在的大量呆帳。",
          "在醫療 AI 的皮膚癌辨識應用中，模型整體的 AUC 表現極佳。但透過依照「患者膚色」建立分群監控儀表板，研究人員發現模型對於深色肌膚患者的偽陰性率異常偏高。這項發現促使開發團隊重新收集深色肌膚的訓練樣本，消除了潛在的演算法偏見。"
        ],
        "comparison": "分群監控（Subpopulation Monitoring）與全局監控（Global Monitoring）在 MLOps 中的價值截然不同。全局指標（如整體 RMSE）很容易被多數常規樣本的穩定表現所掩蓋，導致「平均值的迷思」。在金融理賠、信用評分或醫療診斷等業務中，高額案件或少數族裔的邊緣群體（Edge Cases）往往具有不成比例的高風險與高商業影響力。分群監控能針對這些關鍵特徵切片建立獨立警報，確保模型對各個族群的預測都具備公平性與穩定性，防止少數群體的災難被大數據所隱藏。",
        "keywords": [
          "模型分群監控 (Subpopulation Monitoring)",
          "邊緣群體 (Edge Cases)",
          "均方根誤差 (RMSE)",
          "資料切片 (Data Slicing)",
          "模型退化 (Model Degradation)"
        ],
        "extended_tech": [
          {
            "name": "資料漂移監測 (Data Drift Detection)",
            "desc": "追蹤線上生產環境的輸入特徵分佈是否偏離了訓練時的分佈，幫助及早發現因外部環境變化導致的模型失效風險。"
          },
          {
            "name": "演算法公平性評估 (Algorithmic Fairness Assessment)",
            "desc": "確保 AI 模型在不同性別、種族或社經地位的分群中，其預測準確率與錯誤率保持一致，避免產生嚴重的社會倫理偏見。"
          },
          {
            "name": "影子模式 (Shadow Mode Deployment)",
            "desc": "新版模型在後端默默接收真實流量並進行預測，但不影響最終用戶，維運團隊藉此在無風險環境下對比新舊模型的分群表現差異。"
          }
        ],
        "terminology": [
          "Subpopulation Monitoring",
          "Segmented Monitoring",
          "Data Slicing",
          "Global Metric",
          "Edge Cases"
        ]
      },
      {
        "id": 43,
        "question": "某電商平台的演算法工程師開發了一個新版商品推薦模型，在離線 A/B 測試中，新模型的各項評估指標（AUC、NDCG@10）均顯著優於現行線上模型。然而，離線測試無法完全反映真實使用者的互動行為（點擊、購買、停留時間）。在正式全面上線前，若希望在可控制風險下量化真實業務指標，應採用下列何種線上驗證策略？",
        "options": {
          "A": "影子模式（Shadow Mode）：新舊模型同時產生預測，但僅顯示舊模型結果，於後端比較輸出差異；",
          "B": "回測（Backtesting）：使用歷史日誌模擬模型表現作為上線依據；",
          "C": "金絲雀發布（Canary Release）：將1–5%使用者流量導向新模型，量測 CTR、CVR 等指標並逐步擴量；",
          "D": "負載測試（Load Testing）：於測試環境進行高流量壓力測試後直接全面上線"
        },
        "answer": "C",
        "explanation": "正確答案是(C)。為了在「真實環境」中量化使用者的「實際互動業務指標（如CTR、轉換率）」，同時又要「控制風險」，最佳策略是金絲雀發布（Canary Release）或線上 A/B 測試。它將極小部分（1-5%）的真實流量導向新模型，觀察實際業務成效，若一切正常再逐步擴大流量，若發生問題則影響範圍極小。選項(A)影子模式無法獲得使用者的「真實互動回饋」（因為使用者看不到新模型的結果）；選項(B)回測依然屬於離線驗證的範疇；選項(D)負載測試是驗證系統效能（QPS, Latency），無法驗證演算法的業務精準度。",
        "ml_method": "金絲雀發布 (Canary Release / Canary Deployment)",
        "ml_method_explanation": "金絲雀發布（Canary Release）借鑑了早年礦工帶金絲雀下坑道偵測有毒氣體的概念，是一種用於降低軟體或機器學習模型發布風險的漸進式部署策略。在 AI 應用中，即使模型在離線環境下表現完美，一旦上線與真實用戶互動，仍可能引發不可預期的業務衰退或系統崩潰。金絲雀發布會先在生產環境中架設新版模型，並透過負載平衡器將極少比例（例如 1%）的真實用戶流量路由至新模型。維運團隊會密切監控這 1% 流量的系統指標（如延遲、記憶體）與商業指標（如轉換率），若無異常，再逐步將流量放寬至 10%、50% 直到全面取代舊版。",
        "examples": [
          "知名影音串流平台在更換首頁的電影推薦演算法時，會先將全球 2% 的用戶切換為新版演算法。經過一週的數據收集，確認這 2% 用戶的觀看總時數與點擊率確實有所提升，且伺服器負載穩定，才會決定將新版演算法推送給所有訂閱者。",
          "叫車服務 App 在推出新的動態定價 AI 模型時，為了避免新定價策略引發司機罷工或乘客流失，工程師會先在一個中型城市進行金絲雀發布。在確認該城市的供需平衡與營收指標都達到預期後，才逐步將新模型推廣至全國各個大都會區。"
        ],
        "comparison": "金絲雀發布（Canary Release）與影子模式（Shadow Mode）或離線回測的最大差異，在於它能取得「真實業務回饋」。影子模式雖然安全，但使用者的決策（點擊、購買）依然是基於舊模型，無法量化新模型的真實轉換率。金絲雀發布透過將極少比例（如 1-5%）的真實流量導向新模型，讓團隊在嚴格控制風險的範圍內，準確測量 CTR 或 CVR 等商業指標。這是電商推薦、動態定價等高度依賴使用者即時互動的 AI 產品，從研發邁向全面上線前不可或缺的驗證策略。",
        "keywords": [
          "金絲雀發布 (Canary Release)",
          "漸進式部署 (Phased Rollout)",
          "線上驗證 (Online Validation)",
          "業務指標量化 (Business Metrics Quantification)",
          "風險控制 (Risk Control)"
        ],
        "extended_tech": [
          {
            "name": "A/B 測試 (A/B Testing)",
            "desc": "將使用者隨機分為實驗組與對照組，透過嚴格的統計顯著性檢定來證明新版演算法或 UI 是否能帶來真實的業務指標增長。"
          },
          {
            "name": "影子模式 (Shadow Mode)",
            "desc": "新舊模型同時運行，但不將新模型的結果展現給使用者，用於在零風險的情況下檢驗新模型的推論效能、穩定度與預測差異。"
          },
          {
            "name": "藍綠部署 (Blue-Green Deployment)",
            "desc": "準備兩套完全相同的生產環境，透過路由器瞬間切換流量，達到零停機時間發布，並能在發現問題時實現秒級回滾 (Rollback)。"
          }
        ],
        "terminology": [
          "Canary Release",
          "A/B Testing",
          "Shadow Mode",
          "Click-Through Rate (CTR)",
          "Conversion Rate (CVR)"
        ]
      },
      {
        "id": 44,
        "question": "某 MLOps 工程師正在設計 AI 模型的推論服務 API，需要處理使用者上傳的高解析度影像（平均 5MB）進行即時分類。在RESTful API 設計時，選擇 HTTP 請求方法與資料傳輸格式的最佳實踐為何？",
        "options": {
          "A": "使用 HTTP GET 方法，將影像資料 Base64 編碼後附加於 URL Query String 中；",
          "B": "採用 HTTP POST 請求，將影像資料以 multipart/form-data 或 application/octet-stream 傳輸於 Request Body；",
          "C": "使用 HTTP PUT 方法，透過 Content-Type: application/xml 傳遞影像資料；",
          "D": "要求客戶端下載模型於本地推論，僅回傳分類結果"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。在設計 RESTful API 以傳輸大型二進位檔案（如 5MB 的高解析度影像）時，應使用 HTTP POST 方法，並將檔案放置於 Request Body 中，透過 `multipart/form-data` 或 `application/octet-stream` 格式進行傳輸，這能確保資料完整性與傳輸效率。選項(A)絕對錯誤，GET 請求的 URL 長度有限制，將 5MB 的影像轉為 Base64 塞入 URL 必定會造成請求失敗；選項(C) XML 不適合傳輸大型二進位二進位資料，且 PUT 通常用於更新資源而非觸發推論動作；選項(D)邊緣運算雖然是另一種架構，但題目問的是「推論服務 API 的設計實踐」，故不符合題意。",
        "ml_method": "AI 推論 API 設計 (AI Inference API Design)",
        "ml_method_explanation": "在 MLOps 與模型部署領域，AI 推論 API 的設計扮演著連接前端應用與後端模型運算叢集的關鍵角色。RESTful API 是目前最普遍的架構風格，開發者透過 HTTP 協議提供模型的預測服務。對於傳輸文字或結構化資料，通常使用 POST 方法與 JSON 格式；但針對電腦視覺領域的大型二進位資料（如影像、影片串流），則必須使用 `multipart/form-data` 以區塊形式上傳，或直接使用 `application/octet-stream` 傳輸位元組流，以避免 Base64 轉換帶來的 33% 額外頻寬與記憶體開銷。現代高效能 AI 服務也常改用 gRPC 等基於 HTTP/2 的 RPC 框架來進一步降低序列化延遲。",
        "examples": [
          "在一款手機修圖 App 中，使用者選擇了一張高畫質風景照並點擊「AI 去除路人」功能。App 的前端會發送一個帶有 `multipart/form-data` 標頭的 HTTP POST 請求，將原始影像封包送至雲端的影像分割模型伺服器，伺服器處理完畢後再將處理好的圖片位元組流傳回手機。",
          "在醫療機構的自動化病歷系統中，掃描機掃出了一份高解析度的病理切片影像。系統透過 HTTP POST API 將這個高達數十 MB 的二進位檔案直接傳送到後端的癌症篩檢 AI 模型，並在 Payload 中夾帶了病患的匿名 ID 作為中繼資料，確保推論過程高效且符合標準 Web 協定。"
        ],
        "comparison": "在 RESTful API 設計中，使用 HTTP POST 傳輸二進位大檔案（如 multipart/form-data）與使用 GET 或 Base64 編碼有著天壤之別。GET 請求不僅不符合語意，其 URL 長度限制更會導致大檔案傳輸直接失敗。若將影像轉為 Base64 放入 JSON，不僅會膨脹 33% 的資料體積，更會大幅增加伺服器在序列化/反序列化時的 CPU 與記憶體負擔。針對電腦視覺、醫療影像等需要傳輸大型二進位資料的 AI 推論服務，直接在 Request Body 傳輸二進位流是確保高效與系統穩定的最佳實踐。",
        "keywords": [
          "AI推論API設計 (AI Inference API Design)",
          "HTTP POST",
          "二進位傳輸 (Binary Data Transfer)",
          "RESTful API",
          "大檔案處理 (Large File Handling)"
        ],
        "extended_tech": [
          {
            "name": "gRPC",
            "desc": "基於 HTTP/2 的高效能遠端程序呼叫框架，使用 Protobuf 進行二進位序列化，傳輸速度與資源消耗遠優於傳統 RESTful JSON API。"
          },
          {
            "name": "非同步推論 API (Asynchronous Inference API)",
            "desc": "對於極度耗時的模型（如生成式 AI 或巨型影像分析），用戶發送請求後立即獲得 Job ID，後續再透過輪詢或 Webhook 獲取結果，避免連線逾時。"
          },
          {
            "name": "API 閘道器 (API Gateway)",
            "desc": "做為微服務的單一入口，提供流量控制 (Rate Limiting)、身分驗證與負載均衡等功能，是保護 AI 推論後端叢集的重要安全防線。"
          }
        ],
        "terminology": [
          "RESTful API",
          "HTTP POST",
          "multipart/form-data",
          "application/octet-stream",
          "Serialization"
        ]
      },
      {
        "id": 45,
        "question": "某 AI 平台整合多個外部 AI 微服務（語音辨識 API、NLP 分析 API、知識圖譜查詢服務），在高峰期間某外部服務偶發延遲或逾時（Timeout），導致請求鏈路壅塞，最終造成平台級服務中斷（Cascading Failure）。為從架構層面預防此類連鎖故障，最有效的設計模式為何？",
        "options": {
          "A": "將所有外部 API 呼叫改為同步串行處理，並取消逾時限制，確保每個請求皆完成後再繼續；",
          "B": "為外部服務導入斷路器模式（Circuit Breaker），在異常時暫停呼叫並提供替代回應；",
          "C": "擴充各微服務的執行緒池（Thread Pool）上限，以提升併發處理能力；",
          "D": "停用服務健康檢查，減少不必要的額外負載"
        },
        "answer": "B",
        "explanation": "正確答案是(B)。在分散式微服務架構中，如果依賴的外部服務發生嚴重延遲或無回應，調用方會因為等待回應而耗盡執行緒資源，引發雪崩效應（Cascading Failure）。「斷路器模式（Circuit Breaker）」是防禦這種連鎖故障的最佳實踐：當外部服務的錯誤率或延遲超過設定的閾值時，斷路器會「跳脫（Open）」，直接攔截後續的請求並快速回傳預設的替代方案（Fallback），藉此保護主系統不被拖垮，並給予外部服務喘息恢復的時間。選項(A)取消逾時限制會加速系統崩潰；選項(C)盲目擴展執行緒池治標不治本，最終資源仍會耗盡；選項(D)停用健康檢查會讓系統無法感知異常，是極度危險的做法。",
        "ml_method": "斷路器模式 (Circuit Breaker Pattern)",
        "ml_method_explanation": "斷路器模式（Circuit Breaker）借用了電力系統中保險絲的概念，是雲端原生架構中保障服務韌性（Resilience）的核心設計模式。它是一個代理狀態機，包含三個狀態：關閉（Closed，正常轉發請求）、開啟（Open，攔截請求並執行降級策略 Fallback）以及半開（Half-Open，定期放行少量請求以測試依賴服務是否已恢復健康）。在 AI 系統中，當調用極度耗時的大型語言模型（LLM）API 或第三方推論服務時，若遇上對方伺服器過載，斷路器能瞬間切斷連線，防止客戶端的執行緒被無限期掛起，確保核心業務的存活。",
        "examples": [
          "在智慧客服機器人系統中，主要依賴外部強大的 LLM API 來生成對話。若該外部 API 突然遭遇流量攻擊而延遲超過 10 秒，斷路器會立即啟動並攔截請求，系統將自動降級，改為輸出預設文字：「目前服務繁忙，請稍後再試，或留下您的聯絡方式」，避免整個客服網站當機。",
          "在即時新聞推薦聚合平台中，系統需要同時呼叫多個不同的 AI 標籤生成微服務。若其中一個「情緒分析 API」突然無回應，斷路器機制會阻斷對其的呼叫，並使主系統暫時跳過情緒分析環節，先將僅包含「主題標籤」的新聞推送給用戶，確保主要的新聞流功能不會中斷。"
        ],
        "comparison": "斷路器模式（Circuit Breaker）與單純增加執行緒池或取消逾時限制在系統防禦思維上完全不同。當外部 AI 服務發生嚴重延遲時，若只是增加執行緒，系統最終仍會被掛起的請求耗盡資源，導致主服務崩潰（雪崩效應）。斷路器模式則採用「快速失敗（Fail-fast）」與「降級（Fallback）」策略，一旦偵測到錯誤率超標便主動阻斷請求，保護主系統存活。在依賴大量第三方 API（如 LLM、語音辨識）的現代微服務架構中，這是確保系統韌性與維持基本用戶體驗的必備設計。",
        "keywords": [
          "斷路器模式 (Circuit Breaker)",
          "連鎖故障 (Cascading Failure)",
          "微服務架構 (Microservices Architecture)",
          "服務降級 (Service Fallback)",
          "系統韌性 (System Resilience)"
        ],
        "extended_tech": [
          {
            "name": "重試機制與指數退避 (Retry with Exponential Backoff)",
            "desc": "當請求因網路瞬斷失敗時，自動延遲一段時間後重試，且每次重試間隔呈指數增長，避免瞬間龐大流量對剛恢復的服務造成二次打擊。"
          },
          {
            "name": "服務網格 (Service Mesh, 如 Istio)",
            "desc": "在基礎設施層統一管理微服務間的通訊，無須修改程式碼即可全面導入斷路器、流量加密、金絲雀發布與分佈式追蹤等進階功能。"
          },
          {
            "name": "限流模式 (Rate Limiting)",
            "desc": "在 API 入口處限制特定用戶或系統每秒的請求次數，防止惡意攻擊或突發性超大流量擊穿後端 AI 推論伺服器。"
          }
        ],
        "terminology": [
          "Circuit Breaker",
          "Cascading Failure",
          "Fallback",
          "Microservices",
          "Fail-fast"
        ]
      },
      {
        "id": 46,
        "question": "某醫院計劃建立混合雲 AI 平台：使用公有雲 GPU 叢集進行 CT 影像模型訓練，但基於 HIPAA（Health Insurance Portability and Accountability Act）法規要求，患者影像原始資料不得離開醫院院內環境。下列何者最符合「利用公有雲算力訓練模型」與「不傳輸原始患者資料」雙重限制的技術方案？",
        "options": {
          "A": "將患者影像資料以 AES-256 加密後上傳至公有雲，並於雲端解密後進行模型訓練；",
          "B": "在院內部署同態加密（Homomorphic Encryption）模組，對推論請求進行加密處理；",
          "C": "採用聯邦學習（Federated Learning）於院內訓練模型，僅傳送模型更新至雲端聚合，原始資料不外流；",
          "D": "建立專線 VPN 連接醫院與雲端，以網路層安全保護資料傳輸"
        },
        "answer": "C",
        "explanation": "正確答案是(C)。面對嚴格的醫療隱私法規（如 HIPAA），原始病歷資料絕對禁止離開院內網路。聯邦學習（Federated Learning）完美解決了這個困境：它將模型下載到醫院本地（地端），利用本地資料進行訓練計算，然後僅將運算產生的「模型參數更新（梯度的權重）」加密後傳送回公有雲上的中央伺服器進行聚合。這樣既利用了雲端的聚合算力，又保證了原始資料「資料不動模型動」。選項(A)和(D)資料最終還是流向了公有雲，違反了限制；選項(B)同態加密目前計算開銷過大，無法用於訓練大型CNN模型，且題意是「訓練」而非「推論」。",
        "ml_method": "聯邦學習 (Federated Learning)",
        "ml_method_explanation": "聯邦學習（Federated Learning）是一種新興的分散式機器學習架構，旨在解決資料隱私、資料孤島與法規合規性問題。傳統機器學習需要將所有資料集中到單一資料庫或雲端伺服器進行訓練。而聯邦學習打破了這個模式，其核心理念是「資料不動、模型動」。中央伺服器會將初始模型派發給各個參與的邊緣節點（如手機、醫院伺服器），各節點使用本地的私有資料進行獨立訓練，隨後僅將計算出的模型權重更新值（Gradients）傳送回中央伺服器。中央伺服器將所有節點的更新進行安全聚合（如 Federated Averaging）以升級全局模型，過程完全杜絕了原始資料的洩露。",
        "examples": [
          "智慧型手機內建的輸入法鍵盤會使用聯邦學習來優化下一個字的預測能力。使用者的私人聊天紀錄永遠只留在自己的手機上進行在地訓練，手機只會在插著電且連上 Wi-Fi 時，將更新後的模型參數上傳給 Apple 或 Google 的伺服器，結合全球使用者的智慧來強化預測準確率，同時保障隱私。",
          "跨國銀行聯盟希望建立一套強大的跨國洗錢防制 AI 系統，但各國金融法規嚴禁將客戶交易資料匯出境外。透過部署聯邦學習架構，各家銀行在自己的資料中心內訓練辨識模型，並透過安全的加密網路分享模型參數，成功打造出能識別跨國犯罪模式的聯合防禦網。"
        ],
        "comparison": "聯邦學習（Federated Learning）與傳統集中式雲端訓練或簡單資料加密有著革命性的區別。資料加密上雲雖然傳輸安全，但模型在雲端訓練時仍須解密，無法滿足如醫療 HIPAA 或金融法規中「原始資料絕對不得離開地端」的嚴格限制。聯邦學習實踐了「資料不動、模型動」的核心理念，各節點僅在本地訓練，並只上傳加密的「參數梯度更新」至雲端聚合。這不僅完美解決了法規合規與隱私保護問題，更打破了跨國醫院或銀行間的資料孤島，實現共同訓練強大 AI 的目標。",
        "keywords": [
          "聯邦學習 (Federated Learning)",
          "資料隱私 (Data Privacy)",
          "合規性 (Compliance)",
          "模型聚合 (Model Aggregation)",
          "混合雲架構 (Hybrid Cloud Architecture)"
        ],
        "extended_tech": [
          {
            "name": "同態加密 (Homomorphic Encryption)",
            "desc": "允許直接對密文進行數學運算，運算結果解密後與對明文操作的結果相同。雖然計算成本極高，但能提供終極的隱私保護推論服務。"
          },
          {
            "name": "差分隱私 (Differential Privacy)",
            "desc": "在資料集或模型梯度中加入受控的數學雜訊，確保任何單一個體的資料改變都不會顯著影響最終結果，防止駭客逆向還原訓練資料。"
          },
          {
            "name": "機密運算 (Confidential Computing)",
            "desc": "利用硬體層級的受信任執行環境 (TEE，如 Intel SGX) 將運算過程隔離在加密記憶體區塊中，即使是雲端服務商也無法窺探處理中的資料。"
          }
        ],
        "terminology": [
          "Federated Learning",
          "HIPAA",
          "Data Silos",
          "Model Aggregation",
          "Privacy-Preserving Machine Learning"
        ]
      },
      {
        "id": 47,
        "question": "某電商平台將新的推薦模型部署至線上系統，為降低風險，團隊採用漸進式部署策略（Phased Rollout），先將新模型流量從5%逐步提升至 100%。在部署初期，團隊發現轉換率（Conversion Rate）略有提升，但在流量提升至 30%時，系統延遲（Latency）明顯上升，且部分使用者體驗變差。請問在此情境下，最適當的下一步策略為何？",
        "options": {
          "A": "立即將新模型全面部署至 100%，以觀察整體效果並評估系統表現變化；",
          "B": "還原（Rollback）至舊模型並停止新模型測試流程，以確保系統穩定與使用者體驗品質；",
          "C": "維持目前 30%流量並持續觀察，即使延遲問題存在也暫不進行調整；",
          "D": "暫停流量提升，針對延遲問題進行效能分析與優化後再繼續部署"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。在進行漸進式部署（如 Canary Release）的過程中，一旦監控到系統延遲上升或使用者體驗惡化的負面指標，標準的 SRE/MLOps 應對策略是「暫停擴大流量範圍」，並針對問題進行根本原因分析（Root Cause Analysis）與效能優化（如調整快取、最佳化資料庫查詢或擴展運算資源）。待問題解決後，再繼續推動部署流程。選項(A)將有問題的系統強推至100%會導致全面災難；選項(B)立即還原過於極端，因為新模型在業務指標（轉換率）上已有提升潛力，應先嘗試修復延遲問題而非全盤放棄；選項(C)放任延遲問題不管將損害這 30% 使用者的信任。",
        "ml_method": "漸進式部署與效能調優 (Phased Rollout & Performance Tuning)",
        "ml_method_explanation": "漸進式部署（Phased Rollout）是軟體工程與 MLOps 中用來控制發布風險的核心策略。新版本的 AI 模型往往因為複雜度增加或特徵擷取邏輯改變，帶來未知的效能瓶頸。漸進式部署透過負載平衡控制器，以階梯式（如 1% -> 10% -> 30% -> 100%）分配流量。這形成了一個風險緩衝區：當流量達到某個臨界點導致基礎設施不堪負荷（如 GPU 記憶體溢出、資料庫連線數耗盡導致 Latency 飆升）時，維運團隊能立即啟動效能調優（Performance Tuning），例如擴展微服務副本數（Auto-scaling）、優化網路 I/O 或進行模型量化，確保系統在安全閾值內平穩過渡。",
        "examples": [
          "社交媒體平台發布全新的基於圖神經網路（GNN）的好友推薦演算法。工程師將流量放行至 20% 時，發現伺服器 CPU 使用率飆升至 95%。他們隨即暫停發布計畫，利用性能分析工具（Profiler）發現瓶頸在於動態圖特徵的即時運算，於是導入了 Redis 快取機制，解決延遲問題後才將流量推進至 50%。",
          "雲端遊戲服務商上線了利用 AI 進行即時畫質升頻（Upscaling）的新功能。在漸進式發布的初期，僅讓少數玩家測試，發現雖然畫質變好，但影像封包傳輸延遲高達 100 毫秒。團隊凍結了發布範圍，針對網路傳輸協議與影片編解碼器進行底層優化，將延遲壓回 20 毫秒後，才開放給所有訂閱會員使用。"
        ],
        "comparison": "在漸進式部署中，遇到效能瓶頸（如延遲上升）時的處理策略，「暫停部署並分析」遠優於「直接還原」或「強推上線」。新模型在帶來業務指標（如轉換率）提升的同時，往往伴隨著更高的運算複雜度。若直接還原，等於抹殺了業務增長的機會；若盲目強推，則會引發全面的系統災難。暫停流量擴張並啟動效能調優（Performance Tuning），如優化資料庫查詢、增加快取或調整資源配置，是兼顧業務創新與系統穩定性的最佳 SRE 實踐。",
        "keywords": [
          "漸進式部署 (Phased Rollout)",
          "效能調優 (Performance Tuning)",
          "系統延遲 (System Latency)",
          "監控與應對策略 (Monitoring and Response)",
          "轉換率 (Conversion Rate)"
        ],
        "extended_tech": [
          {
            "name": "自動擴展 (Auto-scaling)",
            "desc": "結合 Kubernetes 等容器編排工具，根據系統即時的 CPU 使用率或請求佇列長度，自動增減模型推論微服務的副本數量以應對突發流量。"
          },
          {
            "name": "分散式追蹤 (Distributed Tracing, 如 Jaeger)",
            "desc": "在複雜的微服務架構中，追蹤單一請求穿梭於各個服務間的完整路徑與各節點耗時，是快速定位系統延遲瓶頸的關鍵利器。"
          },
          {
            "name": "特徵快取 (Feature Caching)",
            "desc": "將頻繁查詢且不常變動的使用者特徵存放在 Redis 等記憶體資料庫中，避免每次推論都向底層資料庫發起慢查詢，大幅降低端到端延遲。"
          }
        ],
        "terminology": [
          "Phased Rollout",
          "Latency",
          "Root Cause Analysis (RCA)",
          "Performance Tuning",
          "Rollback"
        ]
      },
      {
        "id": 48,
        "question": "某銀行的信用卡風控模型已穩定上線一年，主要用於偵測盜刷交易提醒。近期在未對模型或特徵工程進行調整的情況下，系統觀察到深夜電商交易的核准率明顯上升，盜刷攔截率下降，但模型 AUC 幾乎維持不變，且交易金額、地區與裝置等特徵分布未出現明顯變化。進一步分析發現，疫情後使用者行為改變，使原本被視為高風險的交易型態逐漸轉為一般消費。下列何者最能敘述此現象的原因？",
        "options": {
          "A": "資料漂移（Data Drift），因輸入特徵分布發生變化；",
          "B": "訓練與服務偏差（Training-Serving Skew），因線上與離線特徵處理不一致；",
          "C": "概念漂移（Concept Drift），因特徵與目標標籤之間的關聯性改變；",
          "D": "決策閾值偏移（Threshold Shift），因分類門檻設定不當導致預測偏差"
        },
        "answer": "C",
        "explanation": "正確答案是(C)。此情境的關鍵在於「特徵分佈未發生明顯變化（排除資料漂移）」，但「外部世界的使用者行為模式改變了」。原本「深夜+大額電商交易」在過去代表高機率盜刷（標籤 Y=1），但疫情後變成了民眾正常的網購習慣（標籤 Y=0）。這種特徵 (X) 與目標標籤 (Y) 之間根本對應關係（映射函數 P(Y|X)）發生改變的現象，在機器學習中稱為「概念漂移」（Concept Drift）。選項(A)資料漂移是 P(X) 發生改變；選項(B)是指程式實作錯誤導致訓練和上線時送入模型的資料長得不一樣；選項(D)不符合題目敘述的情境。",
        "ml_method": "概念漂移 (Concept Drift)",
        "ml_method_explanation": "概念漂移（Concept Drift）是機器學習模型在生產環境中效能退化最常見也最棘手的原因之一。它發生在預測目標（Target Variable, Y）與輸入特徵（Features, X）之間的潛在統計關係 P(Y|X) 隨著時間發生了本質上的改變。這通常是由於外部環境變遷、社會行為模式轉變、宏觀經濟波動或法規政策改變所引起。與資料漂移（Data Drift，僅特徵分佈 P(X) 改變）不同，概念漂移意味著模型過去學習到的「邏輯規則」已經不再適用於現在的世界，唯一有效的解決方法通常是收集最新的標籤資料，對模型進行重新訓練（Retraining）。",
        "examples": [
          "在網路安全領域的垃圾郵件攔截系統中，駭客不斷發明新的釣魚手法和規避關鍵字。原本模型認為包含「免費獲獎」和「點擊連結」的信件 99% 是垃圾郵件，但隨後商家行銷活動也大量採用類似的文案結構，導致原本的分類邊界失效，發生了嚴重的概念漂移，必須不斷更新模型的認知。",
          "在房地產估價模型中，模型過去學習到「靠近市區的微型公寓」因為通勤便利性具有極高的市場價值。然而，在經歷全球遠距工作（WFH）普及的趨勢後，人們更傾向在郊區購買具有書房的寬敞房屋，導致市區小公寓的實際成交價與模型預測出現巨大落差，這正是目標變數背後的邏輯發生了概念漂移。"
        ],
        "comparison": "概念漂移（Concept Drift）與資料漂移（Data Drift）是導致線上模型退化的兩大截然不同的元兇。資料漂移是「輸入的特徵長相變了」（例如：使用者突然都用某款新手機登入），但判斷邏輯不變；而概念漂移是更根本的「遊戲規則變了」，即特徵與標籤之間的映射關係發生變化。例如疫情改變了人們的生活模式，使得「深夜網購」不再是盜刷專屬特徵，而是成為常態。應對概念漂移，單靠調整閾值無濟於事，必須利用標註了最新真實世界結果的資料，對模型進行重新訓練。",
        "keywords": [
          "概念漂移 (Concept Drift)",
          "資料漂移 (Data Drift)",
          "模型退化 (Model Degradation)",
          "特徵與標籤關聯 (Feature-Label Relationship)",
          "使用者行為改變 (User Behavior Change)"
        ],
        "extended_tech": [
          {
            "name": "持續訓練管線 (Continuous Training Pipeline, CT)",
            "desc": "MLOps 的核心自動化流程，當監控系統偵測到漂移警報或模型效能低於閾值時，自動觸發資料抓取、特徵工程與模型重訓的完整流程。"
          },
          {
            "name": "主動學習 (Active Learning)",
            "desc": "面對概念漂移時，為了快速應對新出現的模式，系統會自動挑選模型最不確定或最容易出錯的新樣本，優先交由人工審查與標註。"
          },
          {
            "name": "族群穩定性指數 (PSI, Population Stability Index)",
            "desc": "一種統計指標，用於量化訓練資料集與線上推論資料集在特定特徵上的分佈差異，是偵測資料漂移最常用的預警工具。"
          }
        ],
        "terminology": [
          "Concept Drift",
          "Data Drift",
          "Mapping Function",
          "Retraining",
          "Model Decay"
        ]
      },
      {
        "id": 49,
        "question": "某零售電商平台已建立模型監控儀表板，用於追蹤線上推薦模型的運作狀態與效能表現。維運工程師需判斷哪些指標屬於「線上持續監控（Continuous Monitoring）」的範疇。下列指標中，哪一項最不適合在即時監控系統中追蹤，而應改由離線實驗追蹤系統管理？",
        "options": {
          "A": "訓練實驗中每個 Epoch 的學習率（Learning Rate）變化曲線與超參數（Hyperparameter）設定軌跡；",
          "B": "線上推論 API 的 P50/P95/P99 回應延遲與每日請求量（RPS）趨勢；",
          "C": "輸入特徵分佈的族群穩定性指數（Population Stability Index, PSI），偵測資料漂移；",
          "D": "模型預測結果分佈（如 CTR）與定期回收的人工標註結果之對比"
        },
        "answer": "A",
        "explanation": "正確答案是(A)。學習率曲線與超參數軌跡是在「模型開發與訓練階段」產生的數據，屬於離線實驗追蹤系統（如 MLflow Tracking、Weights & Biases）管理的範疇。一旦模型完成訓練並打包部署上線，這些訓練過程的參數就不會再變動，因此完全不需要在線上營運環境進行「即時持續監控」。選項(B)延遲與流量是系統健康的關鍵線上指標；選項(C)PSI 用於線上即時偵測資料漂移；選項(D)將線上預測結果與 Ground Truth 比較，是評估線上模型效能退化的標準程序，均屬於線上監控的範疇。",
        "ml_method": "機器學習生命週期追蹤與監控 (ML Lifecycle Tracking & Monitoring)",
        "ml_method_explanation": "在 MLOps（機器學習維運）體系中，觀測性（Observability）被嚴格劃分為兩個階段：「實驗追蹤（Experiment Tracking）」與「線上監控（Online Monitoring）」。實驗追蹤發生在離線的開發環境，資料科學家利用工具（如 MLflow, TensorBoard）記錄各種超參數組合、架構變動、訓練與驗證集的 Loss 曲線，目的是重現實驗並挑選最佳模型。線上監控則發生在生產環境，維運團隊監測模型的 API 系統指標（延遲、吞吐量）、資料漂移警報（特徵分佈偏移）、以及業務成效退化（預測準確率與轉換率下降），目的是確保線上服務穩定運行，並適時觸發模型的重新訓練。",
        "examples": [
          "資料科學團隊在開發新的自然語言處理模型時，會在雲端的實驗追蹤平台上，並排比較 50 次不同訓練嘗試的紀錄。他們仔細檢查 Dropout 比例、Batch Size 大小對最終驗證集準確率的影響，這完全是在離線環境下進行的研發工作，與線上用戶無關。",
          "銀行信用卡防詐系統上線後，SRE 團隊盯著控制中心的即時線上監控螢幕。如果螢幕上顯示 API 推論時間從平常的 50 毫秒暴增到 300 毫秒，或是輸入特徵中「跨國交易欄位」的缺失值比例突然飆升，監控系統會立刻發送 PagerDuty 警報到工程師的手機，要求即刻處理生產環境異常。"
        ],
        "comparison": "線上持續監控（Continuous Monitoring）與離線實驗追蹤（Experiment Tracking）管理著機器學習生命週期中完全不同的數據。學習率、超參數與 Epoch 損失曲線是資料科學家在離線開發環境尋找最佳模型時的實驗紀錄。一旦模型封裝上線，這些內部訓練參數便已固定，不具備任何線上維運價值。相反地，線上推論延遲（Latency）、API 吞吐量、資料特徵漂移指數（PSI）以及實際業務轉換率，才是 SRE 團隊與 MLOps 工程師在生產環境中確保系統穩定與效能無虞的關鍵監控標的。",
        "keywords": [
          "生命週期監控 (Lifecycle Monitoring)",
          "線上持續監控 (Continuous Monitoring)",
          "實驗追蹤 (Experiment Tracking)",
          "推論延遲 (Inference Latency)",
          "資料漂移 (Data Drift)"
        ],
        "extended_tech": [
          {
            "name": "模型實驗追蹤平台 (如 MLflow, Weights & Biases)",
            "desc": "提供版本控制、超參數紀錄與模型打包功能，協助資料科學家在複雜的模型開發階段有條理地比較、重現並管理每一次的實驗結果。"
          },
          {
            "name": "Prometheus 與 Grafana",
            "desc": "業界標準的開源監控與視覺化組合，透過擷取 API 的即時日誌與系統 metrics，建立強大的線上儀表板，提供推論延遲與流量的即時警報。"
          },
          {
            "name": "資料品質監控 (Data Quality Monitoring)",
            "desc": "在資料管線 (Data Pipeline) 進入模型推論前，自動檢核缺失值比例、異常型別或格式錯誤，防止「Garbage In, Garbage Out」引發的線上災難。"
          }
        ],
        "terminology": [
          "Continuous Monitoring",
          "Experiment Tracking",
          "Population Stability Index (PSI)",
          "Latency",
          "Observability"
        ]
      },
      {
        "id": 50,
        "question": "某醫療團隊建立肺炎診斷系統，採用晚期融合（Late Fusion）策略，將胸腔 X 光影像與病患問診文字分別進行預測後再整合結果。測試發現，當問診紀錄品質不佳（如描述簡短或資訊缺漏）時，整體模型效能僅小幅下降。關於此現象，下列何者最不可能為其原因？",
        "options": {
          "A": "各模態獨立進行預測，可降低單一模態品質不佳對整體結果的影響",
          "B": "融合階段可調整不同模態的權重，使低品質模態影響降低",
          "C": "各模態使用獨立模型，使錯誤不會在特徵層被放大",
          "D": "晚期融合會在輸入階段整合多模態特徵，因此能避免低品質資料影響"
        },
        "answer": "D",
        "explanation": "正確答案是(D)。這題考驗對多模態學習中「融合策略」的理解。晚期融合（Late Fusion）的定義，是讓各模態（如影像、文字）使用完全獨立的神經網路訓練並得出各自的預測分數（例如機率值），最後在決策層才將這些分數進行投票、加權平均或送入另一個簡單分類器整合。因此選項(A)、(B)、(C)都是晚期融合的優點，它能有效隔離錯誤。選項(D)的敘述「在輸入階段整合多模態特徵」是「早期融合 (Early Fusion)」的特徵，這與晚期融合的定義完全相反，故最不可能為其原因。",
        "ml_method": "晚期融合 (Late Fusion)",
        "ml_method_explanation": "晚期融合（Late Fusion），也稱為決策層次融合（Decision-level Fusion），是多模態機器學習中一種高度模組化的架構策略。與早期融合（在模型輸入端將所有感測器原始資料拼接）不同，晚期融合會為每一個資料模態（如視覺、聽覺、文本）建立專屬的獨立機器學習模型。這些模型各自獨立進行特徵萃取與推論，並輸出獨立的預測結果或信賴機率。最後，系統透過投票機制、加權平均或一個輕量級的元分類器（Meta-classifier）來綜合這些獨立結果。晚期融合的優勢在於其極高的強健性：當某個模態的感測器故障或雜訊過高時，其錯誤不會污染其他模態的特徵提取過程，確保系統整體的穩定輸出。",
        "examples": [
          "在先進駕駛輔助系統（ADAS）中，車輛周遭的環境感知同時依賴攝影機鏡頭與毫米波雷達。採用晚期融合策略，攝影機 AI 與雷達 AI 各自獨立判斷前方是否有障礙物。在濃霧天氣中，攝影機 AI 可能無法得出結論，但雷達 AI 依然能準確偵測並發出煞車訊號，兩個系統的誤差在最後決策層被完美互補。",
          "在社群媒體的假新聞自動查核系統中，模型需要分析貼文的文字內容與附帶的圖片。晚期融合架構讓自然語言模型專注於辨識文字的邏輯謬誤，影像辨識模型專注於偵測圖片是否經過深偽（Deepfake）竄改。最後的決策模組會綜合兩者的危險分數，即使文字寫得極具說服力，只要圖片被判定為偽造，系統仍會將該貼文標記為假訊息。"
        ],
        "comparison": "晚期融合（Late Fusion）與早期融合（Early Fusion）在多模態架構上的選擇，取決於業務對穩定性與特徵關聯性的需求。早期融合在輸入端整合資料，能捕捉跨模態的細微互動，但若其中一個感測器（如麥克風雜音）品質惡化，會直接污染整個神經網路的特徵提取，導致全面崩潰。晚期融合讓各模態獨立運算並給出各自的信心分數，最後再進行整合。這種架構具有極強的容錯性與強健性，即使醫療問診紀錄品質不佳，影像模型依然能獨立發揮作用，確保系統整體的穩定輸出。",
        "keywords": [
          "晚期融合 (Late Fusion)",
          "早期融合 (Early Fusion)",
          "多模態學習 (Multimodal Learning)",
          "系統強健性 (System Robustness)",
          "獨立模型預測 (Independent Model Prediction)"
        ],
        "extended_tech": [
          {
            "name": "集成學習 (Ensemble Learning)",
            "desc": "晚期融合的核心精神來源，透過結合多個弱分類器的預測結果（如隨機森林或 XGBoost），來建立一個泛化能力更強、誤差更低的強大分類系統。"
          },
          {
            "name": "Cross-modal Attention (跨模態注意力機制)",
            "desc": "融合了早期與晚期優點的進階神經網路架構，允許模型在深層特徵運算時，動態地根據影像的重要特徵來聚焦文本中相關的語意描述。"
          },
          {
            "name": "Meta-classifier (元分類器)",
            "desc": "在晚期融合架構中，除了簡單的投票或平均外，經常會訓練一個輕量級的分類器，專門用來學習如何根據各個獨立模型的預測分數給出最佳的最終決策。"
          }
        ],
        "terminology": [
          "Late Fusion",
          "Early Fusion",
          "Decision-level Fusion",
          "Robustness",
          "Modality"
        ]
      }
    ]
  },
  "115_1_3": {
    "title": "115 年第一次 - 第三科：機器學習技術與應用",
    "questions": [
      {
        "id": 1,
        "question": "某量化投資團隊需估算某投資組合未來 30 日的風險值。由於衍生性金融商品的定價模型過於複雜，無法以解析解直接求得，工程師因此採用隨機模擬方式，產生大量市場情境模擬並估計損失分布。此方法屬於下列哪一種技術框架？",
        "options": {
          "A": "馬可夫鏈（Markov Chain）：以狀態轉移機率描述系統演變的隨機過程；",
          "B": "梯度下降最佳化（Gradient Descent）：透過迭代更新參數以最小化損失函數；",
          "C": "蒙地卡羅方法（Monte Carlo Method）：透過大量隨機抽樣近似機率分布或數值結果；",
          "D": "貝氏推論（Bayesian Inference）：結合先驗分布與資料更新後驗機率"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，蒙地卡羅方法利用大量隨機抽樣來模擬複雜情境並估計出結果的機率分布，非常適合用於無法直接求得解析解的金融定價與風險估算問題。選項 (A) 不正確，馬可夫鏈主要用於具狀態轉移特性的分析，不強調大量情境抽樣；選項 (B) 不正確，梯度下降是最佳化演算法，用於機器學習參數更新；選項 (D) 不正確，貝氏推論是利用新資料更新機率分布的方法，並非產生隨機情境估算損失分布的主要技術框架。",
        "ml_method": "蒙地卡羅方法 (Monte Carlo Method)",
        "ml_method_explanation": "蒙地卡羅方法是一種透過大量重複的隨機抽樣來獲得數值近似解的計算演算法。其核心原理是利用隨機變數來模擬那些難以或無法用解析方法直接求解的複雜系統。透過大數法則的保證，當抽樣次數趨近於無限大時，隨機模擬的平均結果會收斂於真實的期望值或機率分布。在金融、物理或工程領域中，當面對具有高度不確定性的系統與多變數環境時，此方法能有效建立風險模型並估算各種極端情境發生的可能性。",
        "examples": [
          "在供應鏈管理中，企業可利用蒙地卡羅方法來模擬各種可能的需求波動和供應延遲情境，藉此評估不同庫存策略的風險，並決定最佳的安全庫存量以避免缺貨並降低營運成本。",
          "在大型基礎建設的專案管理領域，專案經理可透過此方法模擬各項子任務所需時間的不確定性，進而估算整個專案在特定日期前完工的機率，協助制定更穩健的進度排程與資源分配計畫。"
        ],
        "comparison": "蒙地卡羅方法透過隨機抽樣估算無法直接求解的分布，常用於金融風險與複雜系統模擬。相較之下，馬可夫鏈用於描述具狀態轉移的過程，常應用於語音辨識或天氣預測；梯度下降則是最佳化演算法，應用於深度學習模型訓練；貝氏推論用於根據新證據更新機率，常見於醫療診斷與垃圾郵件過濾。這些方法各自解決不同領域的不確定性與優化問題。",
        "keywords": [
          "蒙地卡羅方法 (Monte Carlo Method)",
          "隨機模擬 (Stochastic Simulation)",
          "風險值 (Value at Risk)",
          "機率分布 (Probability Distribution)",
          "數值近似 (Numerical Approximation)"
        ],
        "extended_tech": [
          {
            "name": "拉丁超立方抽樣 (Latin Hypercube Sampling)",
            "desc": "一種進階的分層隨機抽樣技術，能確保樣本在空間中更均勻分佈，有效減少蒙地卡羅模擬所需的計算次數，廣泛應用於高維度工程設計優化。"
          },
          {
            "name": "馬可夫鏈蒙地卡羅法 (MCMC)",
            "desc": "結合馬可夫鏈與蒙地卡羅法，用於從複雜的高維度機率分佈中進行抽樣，是現代貝氏統計分析與推論的核心演算法，常用於流行病學預測。"
          },
          {
            "name": "粒子濾波器 (Particle Filter)",
            "desc": "基於蒙地卡羅方法的遞迴濾波技術，專門處理非線性動態系統的狀態估計問題，在機器人定位、自駕車追蹤與雷達訊號處理中扮演關鍵角色。"
          }
        ],
        "terminology": [
          "解析解",
          "大數法則",
          "衍生性金融商品",
          "期望值",
          "隨機變數"
        ]
      },
      {
        "id": 2,
        "question": "某工程師在建立房價預測模型時，訓練資料中存在少數豪宅（成交價超過一般物件 10 倍以上）。若工程師希望模型對這些極端高價物件的預測誤差更敏感，並在訓練時產生較大的梯度更新影響，應優先選擇下列哪種損失函數？",
        "options": {
          "A": "平均絕對誤差（MAE）：對誤差進行線性懲罰，對離群值較不敏感，梯度近似固定；",
          "B": "Huber 損失（Huber Loss）：小誤差採平方懲罰，大誤差轉為線性懲罰，以降低離群值影響；",
          "C": "均方誤差（MSE）：對誤差進行平方處理，使大誤差產生更大的懲罰與梯度；",
          "D": "交叉熵損失（Cross-Entropy Loss）：用於分類問題的機率分布差異衡量"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，均方誤差 (MSE) 對誤差進行平方處理，當誤差值較大時（如預測豪宅價格出現較大偏差），會產生指數級放大的懲罰，進而給予較大的梯度更新。選項 (A) MAE 對所有誤差均給予線性懲罰，不易放大極端值影響；選項 (B) Huber Loss 刻意將大誤差轉為線性懲罰以降低離群值影響，與需求相反；選項 (D) 交叉熵適用於分類任務，不適合用於連續數值的房價預測（迴歸任務）。",
        "ml_method": "均方誤差 (Mean Squared Error, MSE)",
        "ml_method_explanation": "均方誤差（MSE）是機器學習中迴歸任務最常使用的損失函數之一。它的核心機制是計算模型預測值與真實值之間差異的平方平均數。由於誤差被平方化，MSE 對於較大的預測誤差會施加非線性的、不成比例的巨大懲罰，這使得模型在訓練過程中會更加致力於修正那些偏離真值極遠的預測結果。雖然這種特性讓模型對極端值或離群值非常敏感，但在某些特別需要關注極端狀況的情境下，反而成為其優勢。",
        "examples": [
          "在電力負載預測系統中，預測嚴重偏差可能導致電網崩潰或資源浪費。使用 MSE 作為損失函數，可迫使模型盡可能減少極端預測錯誤，確保在用電尖峰期能有最準確的備載容量規劃。",
          "在智慧工廠的機台壽命預估中，若將即將損壞的機台誤判為正常，會導致生產線無預警停機。使用 MSE 可針對這類嚴重高估壽命的大誤差進行嚴厲懲罰，提高維護預測的安全性。"
        ],
        "comparison": "均方誤差(MSE)對極端誤差施加平方懲罰，適用於必須嚴格控制大誤差的場景如電網負載預測。平均絕對誤差(MAE)則對所有誤差給予線性懲罰，常應用於房價或銷售量等需忽略極端離群值的穩健預測。Huber損失結合兩者優點，常用於對抗雜訊的穩健迴歸分析。交叉熵則專注於分類任務的機率分布，常見於圖像或文本分類。",
        "keywords": [
          "均方誤差 (MSE)",
          "平均絕對誤差 (MAE)",
          "Huber 損失 (Huber Loss)",
          "損失函數 (Loss Function)",
          "迴歸模型 (Regression Model)"
        ],
        "extended_tech": [
          {
            "name": "對數均方誤差 (RMSLE)",
            "desc": "在計算MSE前先對預測值與真實值取對數，能懲罰相對誤差而非絕對誤差，常應用於預測值範圍跨度極大（如商品銷量預測）的業務場景。"
          },
          {
            "name": "分位數迴歸損失 (Quantile Loss)",
            "desc": "能對高估與低估給予不對稱的懲罰權重，適用於需要預測信賴區間的場景，例如預估電商庫存需求時寧可高估也不願低估造成缺貨。"
          },
          {
            "name": "加權均方誤差 (Weighted MSE)",
            "desc": "對不同樣本賦予不同權重再計算MSE，常應用於樣本重要性不均的情境，如金融信用評分中，對高資產客戶的預測誤差給予更高懲罰。"
          }
        ],
        "terminology": [
          "梯度更新",
          "線性懲罰",
          "離群值",
          "連續數值",
          "非線性懲罰"
        ]
      },
      {
        "id": 3,
        "question": "某工程師在撰寫 Transformer 的 Attention 層時，需手動驗證矩陣維度是否相容。輸入矩陣 Q 已攤平成形狀為(1, 10)，Query 投影權重矩陣 WQ 形狀為(10, 64) 。執行 Q x WQ 後輸出的形狀為何？",
        "options": {
          "A": "(1, 64)；",
          "B": "(10, 10)；",
          "C": "(64, 1)；",
          "D": "維度不相容，無法相乘"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，矩陣乘法的基本規則為 (M × N) 乘上 (N × P) 的矩陣，其結果的維度會是 (M × P)。此題中 Q 為 (1, 10)，WQ 為 (10, 64)，相乘後得到的矩陣形狀為 (1, 64)。選項 (B)、(C) 皆不符合矩陣乘法維度變換的結果；選項 (D) 錯誤，因為第一個矩陣的行數 (10) 等於第二個矩陣的列數 (10)，兩者可以合法相乘。",
        "ml_method": "矩陣運算 (Matrix Multiplication)",
        "ml_method_explanation": "矩陣運算是深度學習與神經網路架構中的基礎數學核心。在神經網路中，資料特徵與模型參數都被表示為多維度的張量（矩陣）。當輸入特徵通過神經網路的每一層時，本質上就是進行一連串的矩陣乘法與加法運算。這種運算方式不僅能夠高效地表達大量神經元之間的權重連接關係，同時也能夠完美地被 GPU（圖形處理器）所支援，從而實現大規模的平行計算，這是訓練現代複雜神經網路模型的關鍵基礎。",
        "examples": [
          "在即時電腦視覺應用中，相機捕捉到的高畫質影像會被轉換為包含像素值的巨大矩陣，系統透過專用的硬體加速器進行矩陣乘法來快速套用濾波器，以實現邊緣偵測與物體追蹤。",
          "在推薦系統中，使用者的歷史行為與商品特徵可被表示為龐大的稀疏矩陣。系統利用隱含語意模型（如矩陣分解）來計算使用者對未購買商品的潛在興趣分數，進而實現精準推薦。"
        ],
        "comparison": "矩陣乘法是深度學習的核心基礎運算，能有效利用GPU平行化處理，廣泛應用於神經網路的特徵投影與線性轉換。與純量運算或迴圈運算相比，矩陣化運算在處理海量特徵（如自然語言的詞嵌入或高解析度影像像素）時能展現壓倒性的計算速度優勢。在注意力機制中，矩陣運算負責將Query、Key、Value快速映射至不同維度空間以計算相似度。",
        "keywords": [
          "矩陣乘法 (Matrix Multiplication)",
          "維度相容 (Dimension Compatibility)",
          "張量運算 (Tensor Operation)",
          "注意力層 (Attention Layer)",
          "特徵投影 (Feature Projection)"
        ],
        "extended_tech": [
          {
            "name": "張量核心運算加速 (Tensor Core Acceleration)",
            "desc": "NVIDIA GPU 專屬的硬體單元，專為混合精度矩陣乘加運算（MMA）設計，能以極高吞吐量加速深度學習模型的訓練與推論過程。"
          },
          {
            "name": "稀疏矩陣運算 (Sparse Matrix Operations)",
            "desc": "專門針對包含大量零元素的矩陣進行優化的運算技術，能大幅節省記憶體與計算資源，常應用於大型圖神經網路或推薦系統中。"
          },
          {
            "name": "廣播機制 (Broadcasting)",
            "desc": "一種在進行張量運算時自動擴展較小維度矩陣以匹配較大維度矩陣形狀的機制，避免了不必要的數據複製，廣泛應用於深度學習框架的底層實作。"
          }
        ],
        "terminology": [
          "張量",
          "攤平",
          "投影權重",
          "平行計算",
          "隱含語意"
        ]
      },
      {
        "id": 4,
        "question": "某 AI 團隊同時開發多個影像辨識系統，並在訓練流程中統一加入資料擴增策略（包含隨機水平翻轉）以提升模型泛化能力。實驗後發現，部分任務的測試表現明顯下降。下列哪一項任務最可能因該資料擴增策略引入語意錯誤（Semantic Inconsistency），使同一樣本在翻轉後對應不同類別標籤，進而影響模型學習？",
        "options": {
          "A": "寵物監控中的貓狗分類；",
          "B": "車輛辨識中的車型分類；",
          "C": "手寫數字辨識；",
          "D": "道路場景中的行人偵測"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，在手寫數字辨識中，部分數字在水平翻轉後可能會變成完全不同的字義（例如 '3' 翻轉後變成無效字符，'b' 與 'd' 之間翻轉語意改變等），引入語意錯誤導致模型混淆。選項 (A)、(B)、(D) 的貓狗、車型、行人等在真實世界中，不論朝向左邊或右邊，其類別標籤都不會改變，因此水平翻轉是合理且有益的擴增方式。",
        "ml_method": "資料擴增 (Data Augmentation)",
        "ml_method_explanation": "資料擴增是一種在機器學習與深度學習中廣泛使用的正則化與資料擴充技術。其核心機制是透過對現有的訓練資料進行隨機的、但保持語意不變的轉換（如旋轉、縮放、翻轉、色彩調整等），來生成大量多樣化的虛擬訓練樣本。這樣做的目的是為了讓模型能夠學習到更具不變性與強健性的特徵表示，減少對特定資料分布的依賴，從而有效降低過擬合現象並顯著提升模型在未見過的新資料上的泛化能力。",
        "examples": [
          "在智慧農業的病蟲害影像辨識中，農作物葉片可能從各種隨機角度被拍攝。透過旋轉與縮放等資料擴增技術，可讓模型在不同拍攝距離與視角下依然能穩定識別出病徵。",
          "在語音助理系統開發時，工程師會將原始乾淨的語音資料人為地加入不同種類的背景噪音（如街道聲、風扇聲），透過這種音訊擴增方式使語音辨識模型能在嘈雜環境中保持高準確率。"
        ],
        "comparison": "資料擴增透過空間轉換（如翻轉、縮放）增加樣本多樣性，常用於自然圖像的目標檢測與分類，能增強旋轉或縮放不變性。然而，對於具有方向性語意的領域（如光學字元辨識 OCR、醫學影像中的特定器官定位），不當的翻轉會破壞標籤的正確性。這與生成對抗網路(GAN)直接生成全新樣本的邏輯不同，擴增是基於既有樣本的物理轉換，必須嚴格遵守領域的語意限制。",
        "keywords": [
          "資料擴增 (Data Augmentation)",
          "語意錯誤 (Semantic Inconsistency)",
          "模型泛化 (Model Generalization)",
          "影像辨識 (Image Recognition)",
          "不變性特徵 (Invariant Features)"
        ],
        "extended_tech": [
          {
            "name": "CutMix 擴增技術",
            "desc": "將兩張不同圖片的區塊進行隨機切割與拼接，並根據拼接比例混合真實標籤，能強迫模型學習物體的局部特徵而非過度依賴全局背景，常應用於提升影像分類模型的強健性。"
          },
          {
            "name": "自動擴增搜尋 (AutoAugment)",
            "desc": "利用強化學習演算法自動搜尋針對特定資料集最佳的資料擴增策略組合，避免人工試錯，在大型影像資料集（如ImageNet）訓練中能獲得極致的效能提升。"
          },
          {
            "name": "幾何變換與仿射轉換 (Affine Transformation)",
            "desc": "包含平移、旋轉、錯切等保持平行線關係的數學轉換矩陣操作，是實現空間級別資料擴增的底層核心技術，廣泛應用於醫學影像對齊與前處理。"
          }
        ],
        "terminology": [
          "正則化",
          "過擬合",
          "水平翻轉",
          "泛化能力",
          "特徵表示"
        ]
      },
      {
        "id": 5,
        "question": "某工程師完成多元線性迴歸模型後，繪製殘差圖（Residual Plot），發現殘差隨預測值增大而呈現擴散現象（右側明顯比左側分散）。此現象最可能代表什麼問題？",
        "options": {
          "A": "殘差之間存在關聯；",
          "B": "特徵之間高度相關；",
          "C": "殘差變異數不一致；",
          "D": "殘差不符合常態分布"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，殘差圖呈現喇叭狀擴散，表示預測值較大時誤差波動較大，即殘差變異數並非固定不變，此現象稱為異質變異性（Heteroscedasticity）。選項 (A) 指的是自相關，通常隨時間序列呈現規律波動；選項 (B) 指的是共線性，需透過自變數間相關係數檢查，無法直接從殘差圖看出；選項 (D) 殘差非常態分佈應透過 Q-Q plot 檢驗，漏斗狀擴散最典型的問題是變異數不一致。",
        "ml_method": "異質變異性分析 (Heteroscedasticity Analysis)",
        "ml_method_explanation": "異質變異性是指在迴歸分析中，殘差（即預測誤差）的變異數並非恆定，而是隨著自變數或預測值的改變而呈現擴大或縮小的現象。在標準線性迴歸的假設中，同質變異性（即誤差變異數為常數）是確保估計結果具備最佳線性不偏特性的關鍵。當存在異質變異性時，模型預測在某些區間的可靠度會大幅降低，且會導致顯著性檢定（如 t 檢定或 p 值）產生誤導，通常需透過對數轉換或穩健標準誤來進行修正。",
        "examples": [
          "在企業薪資結構分析中，隨著員工年資或職級的增加，薪資的差異範圍往往會變得越來越大（高階主管薪水落差極大）。這種隨基準值放大的誤差範圍，必須在模型中修正以確保公平性評估準確。",
          "在預測連鎖超市每日營收時，大型旗艦店的每日營收波動幅度遠大於小型便利店。若不處理這種異質變異性，模型對於大型店鋪的風險評估與補貨建議將會失去參考價值。"
        ],
        "comparison": "異質變異性破壞了迴歸模型誤差變異數恆定的基本假設，導致大數值區間的預測極不穩定，常見於金融數據或規模變數分析。相較之下，共線性(Collinearity)是指特徵間高度相關，會使係數估計失真，需透過VIF檢查，多見於包含大量相似特徵的經濟模型；自相關(Autocorrelation)則是殘差在時間上不獨立，常見於時間序列預測。這些問題皆需透過不同的診斷圖與統計檢定來確認。",
        "keywords": [
          "殘差圖 (Residual Plot)",
          "異質變異性 (Heteroscedasticity)",
          "多元線性迴歸 (Multiple Linear Regression)",
          "變異數不一致 (Unequal Variance)",
          "統計診斷 (Statistical Diagnostics)"
        ],
        "extended_tech": [
          {
            "name": "穩健標準誤 (Robust Standard Errors)",
            "desc": "一種在存在異質變異性時，用來修正迴歸係數標準誤估計的統計技術，確保 t 檢定與 p 值的推論依然有效，是計量經濟學中極常使用的補救措施。"
          },
          {
            "name": "加權最小平方法 (WLS)",
            "desc": "針對不同變異數的樣本賦予不同的權重，變異數大的樣本給予較低權重，能有效修正異質變異性帶來的估計效率低下問題，常用於精算與保險定價模型。"
          },
          {
            "name": "Box-Cox 轉換 (Box-Cox Transformation)",
            "desc": "一種廣義的冪轉換方法，能自動尋找最佳的參數 lambda 來對依變數進行非線性轉換，藉此穩定變異數並使殘差更符合常態分佈，是特徵工程的重要工具。"
          }
        ],
        "terminology": [
          "殘差",
          "共線性",
          "自相關",
          "同質變異性",
          "顯著性檢定"
        ]
      },
      {
        "id": 6,
        "question": "某資料科學家欲對 512 維詞嵌入向量（共 10 萬筆）進行視覺化以探索群集結構，同時另一工程師需將 200 個製程特徵降維後作為 XGBoost 的輸入特徵。關於 t-SNE 與 PCA 選型，下列敘述何者最正確？",
        "options": {
          "A": "t-SNE 保留全局線性結構，適合作為 XGBoost 的降維前處理；",
          "B": "t-SNE 保留局部鄰域結構，適合視覺化；但不保留全局結構，不適合作為模型輸入特徵；",
          "C": "PCA 為非線性降維方法，能保留複雜流形結構；",
          "D": "t-SNE 與 PCA 皆可直接對新資料進行線性外推"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，t-SNE 是一種非線性降維方法，極度擅長保留資料的局部鄰域結構並將其投影至 2D/3D 進行視覺化；但它無法保證保留資料的全局距離結構，且難以直接套用於新資料，故不適合作為後續機器學習模型（如 XGBoost）的特徵處理。選項 (A) 錯誤，t-SNE 不保留全局線性結構；選項 (C) 錯誤，PCA 是典型的線性降維方法；選項 (D) 錯誤，t-SNE 屬於非參數映射，無法直接計算映射函數對新樣本進行外推。",
        "ml_method": "t-SNE 與 PCA 降維演算法",
        "ml_method_explanation": "t-SNE (t-分布隨機鄰域嵌入) 與 PCA (主成分分析) 是兩種常見的降維技術。PCA 是一種線性技術，透過尋找資料變異數最大的正交方向來投影資料，能有效降低維度並保留全局結構，非常適合作為特徵工程的一環。相較之下，t-SNE 是非線性技術，透過計算高維與低維空間中資料點之間的機率分布相似度來進行映射。它能極佳地將高維流形資料展開，確保局部群集依然緊密，因此是探索性資料分析中最強大的視覺化工具。",
        "examples": [
          "在醫療基因體學研究中，研究人員會利用 t-SNE 將數萬種基因表現數據降至二維圖表，藉由視覺化觀察不同類型的癌症細胞樣本是否能在圖表上自動聚類成不同的群組。",
          "在信用卡的詐欺偵測系統開發中，工程師會先使用 PCA 將數百項交易特徵降維至較小的維度空間，以濾除雜訊並降低共線性，隨後再將這些主成分輸入至隨機森林模型中進行即時預測。"
        ],
        "comparison": "t-SNE為非線性降維技術，專注於保留高維空間中相鄰點的局部結構，是最強大的資料探索與視覺化工具，常用於NLP詞嵌入或基因數據視覺化。而PCA是線性降維技術，能有效捕捉資料全局變異數並生成確定的轉換矩陣，適合用於模型訓練前的特徵壓縮與去關聯。兩者經常互補使用，如先用PCA降維至50維，再用t-SNE降至2維以加速視覺化計算。",
        "keywords": [
          "降維 (Dimensionality Reduction)",
          "t-SNE",
          "主成分分析 (PCA)",
          "資料視覺化 (Data Visualization)",
          "特徵工程 (Feature Engineering)"
        ],
        "extended_tech": [
          {
            "name": "UMAP (Uniform Manifold Approximation and Projection)",
            "desc": "一種新一代的非線性降維演算法，在保留局部結構的同時，比 t-SNE 更好地保留了全局拓樸結構，且計算速度大幅提升，現已成為資料視覺化的新標準。"
          },
          {
            "name": "自編碼器 (Autoencoder)",
            "desc": "基於神經網路的非監督式學習架構，透過編碼器將高維資料壓縮成低維潛在表示，再由解碼器還原，能學習高度非線性的特徵表示，常應用於異常檢測或圖像降噪。"
          },
          {
            "name": "奇異值分解 (SVD)",
            "desc": "一種強大的線性代數矩陣分解技術，是 PCA 演算法的底層運算核心，廣泛直接應用於推薦系統的協同過濾與自然語言處理的潛在語意分析 (LSA) 中。"
          }
        ],
        "terminology": [
          "流形結構",
          "全局線性",
          "局部鄰域",
          "變異數",
          "非參數映射"
        ]
      },
      {
        "id": 7,
        "question": "某金融團隊建立信貸風險模型，特徵工程後共產生 200 個變數，其中「月收入」、「年收入」、「季收入」三者高度相關。模型上線後業務單位反映：每次重新訓練後，模型輸出的重要特徵清單在這些高度相關特徵間反覆變動，難以向審查單位解釋。請問下列何者為造成此現象最可能的原因？",
        "options": {
          "A": "模型使用 L2 正則化，導致所有特徵係數被壓縮至接近零，重要性難以區分；",
          "B": "模型使用 L1 正則化，面對高度相關特徵時隨機保留其中之一，導致每次訓練保留的特徵不穩定；",
          "C": "模型未使用任何正則化，過擬合導致係數每次收斂至不同極值；",
          "D": "特徵數量過多導致梯度消失，應優先進行 PCA 降維再套用正則化"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，L1 正則化（Lasso）具有特徵選擇的特性，會將部分係數壓縮至 0。當面對一組高度共線性的特徵時，L1 會隨機選擇保留其中一個特徵，將其餘的權重歸零。由於每次訓練初始化或資料微調，保留的特徵可能不同，導致模型解釋性變動。選項 (A) L2 正則化（Ridge）會讓高度相關的特徵平均分攤權重，不會出現單一特徵反覆變動的情況；選項 (C) 未使用正則化的權重會極不穩定但通常不會完全消失；選項 (D) PCA 雖可降維但會完全破壞業務可解釋性。",
        "ml_method": "L1 正則化 (L1 Regularization / Lasso)",
        "ml_method_explanation": "L1 正則化是一種在機器學習模型損失函數中加入權重絕對值總和作為懲罰項的技術。其數學特性會迫使模型在最佳化過程中，將對預測貢獻較小的特徵權重直接壓縮為零，從而產生稀疏解。這種特性使得 L1 正則化天生具備自動特徵選擇的能力，能夠剔除冗餘變數以簡化模型。然而，當特徵庫中存在高度相關的共線性變數時，L1 正則化往往只會隨機保留其中一個代表特徵，這會導致模型的特徵重要性在多次訓練間缺乏穩定性。",
        "examples": [
          "在基因微陣列分析中，研究人員面對數萬個基因表現量但只有數百個病患樣本時，會使用 L1 正則化模型自動挑選出少數真正與某種疾病相關的關鍵基因，以利後續的標靶藥物研發。",
          "在電子商務網站的個人化行銷模型中，面對使用者上千種細碎的瀏覽行為特徵，工程師採用 Lasso 迴歸來過濾掉多餘且無用的特徵，僅保留少數具決定性的行為指標，大幅降低推論延遲。"
        ],
        "comparison": "L1正則化(Lasso)透過產生稀疏權重來進行特徵選擇，在處理大量無用特徵的寬資料型態中極具優勢，但面對共線性時會隨機丟棄特徵導致解釋不穩定。相較之下，L2正則化(Ridge)會將相關特徵的權重平滑分攤，不具備特徵選擇能力但估計較穩定。彈性網(Elastic Net)則結合兩者，在進行特徵選擇的同時，能確保高度相關的特徵被一起保留或一起剔除，是金融風控等重視模型解釋性場景的最佳選擇。",
        "keywords": [
          "L1 正則化 (L1 Regularization)",
          "Lasso 迴歸",
          "特徵選擇 (Feature Selection)",
          "共線性 (Collinearity)",
          "模型解釋性 (Model Interpretability)"
        ],
        "extended_tech": [
          {
            "name": "彈性網迴歸 (Elastic Net)",
            "desc": "同時結合了 L1 與 L2 正則化的懲罰項，既能發揮 L1 剔除無用特徵的稀疏性優勢，又能利用 L2 穩定共線性特徵的權重分配，在醫學與金融模型中廣泛使用。"
          },
          {
            "name": "遞迴特徵消除 (RFE)",
            "desc": "一種透過反覆訓練模型並逐步剔除最不重要特徵的封裝式特徵選擇演算法，能找出對模型預測最具貢獻的特徵子集，常搭配支持向量機或隨機森林使用。"
          },
          {
            "name": "變異數膨脹因子 (VIF)",
            "desc": "一種嚴格的統計檢定指標，用來量化多元線性迴歸模型中各個自變數之間共線性的嚴重程度，是特徵工程階段篩除高相關變數的標準工具。"
          }
        ],
        "terminology": [
          "稀疏解",
          "冗餘變數",
          "權重絕對值",
          "特徵係數",
          "過擬合"
        ]
      },
      {
        "id": 8,
        "question": "某深度學習工程師訓練 ResNet 時，發現模型在前幾個 Epoch 驗證損失快速下降，但從第 15 個 Epoch 起驗證損失開始上升，而訓練損失持續下降。工程師將學習率調高後，訓練損失反而開始明顯震盪。學習率過大最直接導致下列哪種現象？",
        "options": {
          "A": "梯度消失（Gradient Vanishing）：梯度在反向傳播中逐層縮小趨近於零，底層無法學習；",
          "B": "損失函數震盪或發散（Oscillation / Divergence）：每次更新步伐過大，參數在最優點兩側反覆跳越，無法穩定收斂；",
          "C": "過擬合（Overfitting）：模型記憶訓練資料的雜訊，泛化能力下降；",
          "D": "死亡 ReLU（Dying ReLU）：大量神經元輸出永久為零，停止參與梯度更新"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確，學習率決定了每次權重更新的步長。當學習率設定過大時，每次更新步伐跨度過長，導致參數在損失函數空間的最優解谷底兩側來回跳躍，無法真正收斂到最小值，從而造成訓練損失出現明顯的震盪甚至發散。選項 (A) 梯度消失與網路過深或激活函數有關；選項 (C) 題目前半段描述的正是過擬合，但調高學習率直接導致的「訓練損失震盪」不是過擬合；選項 (D) 雖有可能發生，但震盪或發散是學習率過大最典型且直接的現象。",
        "ml_method": "學習率調整與最佳化 (Learning Rate Tuning)",
        "ml_method_explanation": "學習率是深度學習訓練過程中最為核心且敏感的超參數。它控制著模型在每次反向傳播計算出梯度後，更新內部權重的步伐大小。學習率若設定過小，模型學習會極度緩慢且容易陷入局部最佳解；相反地，若學習率設定過大，權重更新步伐會越過真正的最低點，導致損失函數在谷底震盪甚至完全發散。現代深度學習常結合學習率衰減排程（Learning Rate Schedulers）或自適應優化器，以在訓練初期快速下降並在後期穩定收斂。",
        "examples": [
          "在訓練大型影像生成模型時，工程師會採用預熱（Warmup）策略，先以極小的學習率開始訓練以避免初期不穩定的梯度破壞模型結構，幾步之後才逐漸增加到預定的主要學習率。",
          "在工業自動化控制系統中，機器手臂的強化學習訓練過程若學習步長過大，會導致機械手臂在目標物周圍劇烈晃動無法準確夾取；適當降低學習率則能使其動作逐漸平滑並準確定位。"
        ],
        "comparison": "學習率過大會直接導致優化過程在損失谷底反覆震盪甚至發散，無法收斂；而學習率過小則會導致訓練極度緩慢或卡在局部最佳解。這與模型架構造成的梯度消失(深層網路信號微弱)或死亡ReLU(神經元永久失活)本質不同，後者是結構性缺陷，前者是優化策略失誤。至於過擬合則是模型過度記憶訓練資料雜訊，通常需透過正則化而非單純調整學習率來解決。",
        "keywords": [
          "學習率 (Learning Rate)",
          "損失函數震盪 (Loss Oscillation)",
          "超參數調校 (Hyperparameter Tuning)",
          "梯度下降 (Gradient Descent)",
          "收斂 (Convergence)"
        ],
        "extended_tech": [
          {
            "name": "餘弦退火學習率排程 (Cosine Annealing LR)",
            "desc": "一種動態調整學習率的策略，讓學習率隨訓練週期呈現類似餘弦函數的波動下降，能幫助模型跳脫局部最佳解並在訓練後期精細收斂，廣泛用於現代 CNN 訓練。"
          },
          {
            "name": "學習率預熱 (Learning Rate Warmup)",
            "desc": "在模型訓練的最一開始幾個 Epoch，將學習率由零緩慢線性增加至預設值的技巧，能防止隨機初始化的權重在初期被過大的梯度破壞，是訓練 Transformer 的標準配置。"
          },
          {
            "name": "自動學習率探索器 (LR Finder)",
            "desc": "一種透過在短暫訓練過程中指數遞增學習率並記錄損失變化，來幫助工程師快速且視覺化地找出最佳初始學習率範圍的實用工具。"
          }
        ],
        "terminology": [
          "反向傳播",
          "權重更新",
          "局部最佳解",
          "預熱策略",
          "自適應優化器"
        ]
      },
      {
        "id": 9,
        "question": "某工程師訓練深度神經網路時發現損失函數震盪嚴重且收斂速度慢，改用 Adam優化器後訓練變得穩定且收斂更快。下列何者為 Adam 能改善此問題的主要原因？",
        "options": {
          "A": "同時結合一階動量（Momentum）與自適應學習率（Adaptive Learning Rate），為每個參數調整更新步長；",
          "B": "強制所有參數使用相同學習率（Learning Rate），避免梯度差異造成不穩定；",
          "C": "透過批次正規化（Batch Normalization）重新分布輸入資料；",
          "D": "將梯度裁剪為固定範圍以避免梯度爆炸（Gradient Explosion）"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，Adam 優化器（Adaptive Moment Estimation）的核心優勢在於結合了動量（Momentum）的平滑梯度特性，以及 RMSProp 為每個參數自適應調整學習率的特性。這使得它在面對複雜地形或稀疏梯度時，能穩定且快速地收斂。選項 (B) 錯誤，Adam 的特點正是對不同參數使用「不同」的自適應學習率；選項 (C) 這是 Batch Normalization 層的作用，並非優化器；選項 (D) 這是 Gradient Clipping 技術，不屬於 Adam 本身的演算法核心。",
        "ml_method": "Adam 優化器 (Adam Optimizer)",
        "ml_method_explanation": "Adam (Adaptive Moment Estimation) 是一種目前深度學習領域最廣泛使用的進階梯度下降最佳化演算法。其原理是綜合計算過去梯度的指數移動平均（一階動量），讓更新方向保持慣性並減少震盪；同時也計算過去梯度平方的指數移動平均（二階動量），以此動態為每一個模型參數單獨調整適合的學習率。這種雙管齊下的機制使得 Adam 在處理高維度非凸優化問題、稀疏資料以及包含大量雜訊的環境中，皆能展現出優異的收斂速度與穩定性。",
        "examples": [
          "在自然語言處理領域訓練 Transformer 模型時，由於詞彙表極大且許多字詞出現頻率極低（稀疏特徵），使用 Adam 優化器能自動為這些低頻詞分配較大的學習率，顯著加速模型訓練。",
          "在開發自駕車的行為預測模型時，感測器收集到的資料包含大量雜訊且場景複雜，Adam 優化器透過動量機制平滑了隨機抽樣帶來的梯度波動，確保模型在訓練過程中能穩定收斂至安全可靠的決策邊界。"
        ],
        "comparison": "Adam優化器結合了動量的慣性優勢與RMSProp的自適應學習率特性，是目前深度學習最通用的優化器，尤其適合處理稀疏梯度與複雜網路如Transformer。相較之下，傳統SGD（隨機梯度下降）收斂緩慢且容易震盪；而純Momentum雖能加速收斂，但缺乏自適應學習率調整，難以應對不同參數更新頻率差異極大的情境。然而，在某些影像分類任務中，精心調校的SGD+Momentum有時能獲得比Adam更好的最終泛化效能。",
        "keywords": [
          "Adam 優化器 (Adam Optimizer)",
          "自適應學習率 (Adaptive Learning Rate)",
          "一階動量 (Momentum)",
          "梯度下降 (Gradient Descent)",
          "指數移動平均 (Exponential Moving Average)"
        ],
        "extended_tech": [
          {
            "name": "AdamW 優化器",
            "desc": "Adam 優化器的改良版本，將權重衰減 (Weight Decay) 的運算從梯度計算中分離出來直接套用於權重更新，有效解決了 Adam 在使用 L2 正則化時表現不佳的問題，是目前訓練大型語言模型的首選。"
          },
          {
            "name": "RMSProp 優化器",
            "desc": "一種透過計算梯度平方的指數移動平均來為每個參數自適應調整學習率的演算法，能有效處理 RNN 訓練過程中的梯度消失與爆炸問題，是 Adam 的重要前身技術。"
          },
          {
            "name": "Nadam 優化器",
            "desc": "將 Nesterov 加速梯度 (NAG) 的概念融入 Adam 演算法中，透過在計算當前梯度前先進行一次「未來位置」的預測，進一步提升了優化過程對梯度變化的靈敏度與收斂速度。"
          }
        ],
        "terminology": [
          "二階動量",
          "非凸優化問題",
          "稀疏資料",
          "批次正規化",
          "梯度裁剪"
        ]
      },
      {
        "id": 10,
        "question": "某工程師同時開發兩個模型：一個預測使用者「隔日 App 使用時長（分鐘）」，另一個預測使用者「隔日是否流失（是/否）」。關於上述兩個任務，他應分別選擇哪種適當的損失函數？",
        "options": {
          "A": "使用時長預測：均方誤差（MSE）；流失預測：二元交叉熵（Binary Cross - Entropy）；",
          "B": "使用時長預測：交叉熵損失（Cross-Entropy）；流失預測：均方誤差（MSE）；",
          "C": "使用時長預測：Hinge 損失（Hinge Loss）；流失預測：MAE（平均絕對誤差）；",
          "D": "兩個任務均使用交叉熵損失，因為兩者的輸出都有不確定性"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。預測「使用時長（分鐘）」是一個連續數值的迴歸（Regression）任務，應使用衡量數值差距的均方誤差（MSE）或平均絕對誤差（MAE）。預測「是否流失」是一個二元分類（Binary Classification）任務，應使用衡量機率分布差異的二元交叉熵（Binary Cross-Entropy, BCE）。選項 (B)、(C)、(D) 的組合皆錯誤匹配了任務類型與損失函數的使用場景。",
        "ml_method": "損失函數設計 (Loss Function Design)",
        "ml_method_explanation": "損失函數是機器學習演算法中用來評估模型預測結果與真實標籤之間差距的數學準則。不同類型的預測任務必須配對適合的損失函數才能正確引導模型進行優化。對於迴歸任務（預測連續數值），通常採用 MSE 或 MAE 來懲罰預測值偏離實際數值的程度。對於分類任務（預測離散類別），則普遍採用交叉熵損失，它基於資訊理論來衡量模型輸出的機率分布與真實標籤分布之間的差異，從而迫使模型提高正確類別的預測信心。",
        "examples": [
          "在影音串流平台的推薦系統中，系統會使用 MSE 來預測用戶可能對某部電影給出的評分星數，同時在判斷用戶是否會點擊某則廣告時，使用二元交叉熵來進行點擊率預測。",
          "在氣象預報系統中，預測明日降雨量的模型屬於連續迴歸問題，會採用 MSE 以盡可能縮小毫米單位的誤差；而預測明日是否發布颱風警報的模型則是分類問題，會採用交叉熵損失進行最佳化。"
        ],
        "comparison": "均方誤差(MSE)專注於測量連續數值預測值與真實值間的幾何距離，是迴歸任務(如預測時長、金額)的標準配備。二元交叉熵(BCE)則基於資訊熵理論，專門衡量預測機率分布與真實0/1標籤的散度，是二元分類(如流失預測、點擊預測)的核心。若在分類任務中誤用MSE，會導致損失函數成為非凸函數，使得模型極易陷入局部最佳解且梯度更新緩慢。正確的任務類型必須配對正確的損失函數。",
        "keywords": [
          "損失函數 (Loss Function)",
          "均方誤差 (MSE)",
          "二元交叉熵 (Binary Cross-Entropy)",
          "迴歸分析 (Regression Analysis)",
          "分類任務 (Classification Task)"
        ],
        "extended_tech": [
          {
            "name": "Focal Loss",
            "desc": "一種針對極度不平衡分類資料集所設計的損失函數，透過動態降低易分類樣本的權重，強迫模型專注於學習困難樣本，廣泛應用於物件偵測（如 RetinaNet）與醫療影像病灶篩檢。"
          },
          {
            "name": "Triplet Loss",
            "desc": "度量學習（Metric Learning）中常用的損失函數，透過讓同類別樣本在嵌入空間中互相靠近，不同類別樣本互相遠離，是人臉辨識系統與相似度檢索系統的核心優化目標。"
          },
          {
            "name": "平滑L1損失 (Smooth L1 Loss)",
            "desc": "結合了 MSE 與 MAE 的優點，在誤差較大時使用線性懲罰以抵抗離群值，在誤差極小時使用平方懲罰以利於精細收斂，是許多主流物件偵測模型（如 Faster R-CNN）用於預測邊界框座標的標準配置。"
          }
        ],
        "terminology": [
          "連續數值",
          "機率分布",
          "Hinge 損失",
          "非凸函數",
          "局部最佳解"
        ]
      },
      {
        "id": 11,
        "question": "某工程師在 A100 GPU 叢集上訓練大型語言模型，觀察到以下現象：全批次梯度下降時 GPU 利用率達 100%，但每次更新耗時 45 秒；隨機梯度下降（SGD）每次更新僅需 0.01 秒，但梯度極不穩定、訓練曲線震盪劇烈。為兼顧梯度穩定性與 GPU 吞吐量（Throughput），應採用下列哪種策略？",
        "options": {
          "A": "全批次梯度下降（Full-batch GD）：使用完整資料集計算梯度，更新穩定但每次更新耗時長；",
          "B": "隨機梯度下降（SGD）：每次只用一個樣本，速度快但梯度雜訊大，收斂不穩定；",
          "C": "第二階梯度法（Newton's Method）：利用Hessian 矩陣精確估計曲率，大幅減少更新次數；",
          "D": "小批次梯度下降（Mini-batch GD）：以適當批次大小（如256-2048）平衡梯度估計穩定性與 GPU 平行效率，是深度學習的業界標準"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確，小批次梯度下降 (Mini-batch GD) 每次使用一小部分資料來計算梯度，既能利用 GPU 的強大平行運算能力維持高吞吐量，又能獲得足夠穩定的梯度估計，避免極端的訓練震盪，是現今深度學習的標準做法。選項 (A) 全批次耗時過長且記憶體無法負擔；選項 (B) SGD 無法發揮 GPU 平行效能且極不穩定；選項 (C) 二階方法計算 Hessian 矩陣的運算量在深度神經網路中過於龐大，實務上難以套用於大型模型。",
        "ml_method": "小批次梯度下降 (Mini-batch Gradient Descent)",
        "ml_method_explanation": "小批次梯度下降是一種折衷於全批次梯度下降與純隨機梯度下降之間的最佳化策略。在深度學習訓練中，它每次從完整的訓練資料集中隨機抽取固定數量（例如 128、256 或更大的批次）的樣本，計算其平均梯度來更新模型參數。這種方法帶來雙重好處：一方面批次運算完美契合 GPU 等硬體架構的平行矩陣加速，大幅提升計算效率；另一方面，小批次帶來的微小隨機雜訊，有助於模型逃離損失函數的局部最小值並獲得更好的泛化能力。",
        "examples": [
          "在訓練智慧型手機上的人臉解鎖模型時，工程師會設定批次大小為 512，讓訓練伺服器的 GPU 能在每次更新時平行處理多張人臉影像，同時確保更新方向不會被單一錯誤的標籤影像嚴重干擾。",
          "在金融業開發信用卡盜刷即時阻擋模型時，利用小批次梯度下降可確保模型能快速吸收每天新產生的數十萬筆交易資料，並在維持硬體資源滿載運作的情況下，穩定地更新判斷規則。"
        ],
        "comparison": "小批次梯度下降(Mini-batch GD)是深度學習的業界標準，能在穩定梯度與極大化GPU平行吞吐量之間取得完美平衡。全批次梯度下降雖方向最準確，但計算過慢且記憶體極易溢出，只適用於極小資料集。純隨機梯度下降(SGD)每次只用一筆資料，無法發揮GPU矩陣加速效能且充滿雜訊。而牛頓法等二階方法需要計算龐大的Hessian矩陣反矩陣，在參數量動輒數億的現代神經網路中完全不切實際。",
        "keywords": [
          "小批次梯度下降 (Mini-batch GD)",
          "平行運算 (Parallel Computing)",
          "批次大小 (Batch Size)",
          "GPU 吞吐量 (GPU Throughput)",
          "梯度穩定性 (Gradient Stability)"
        ],
        "extended_tech": [
          {
            "name": "梯度累積 (Gradient Accumulation)",
            "desc": "在受限於 GPU 記憶體無法使用大批次大小時，透過在多次前向傳播中累積梯度但不立即更新參數，直到累積相當於大批次數量的梯度後才執行一次更新，是訓練超大型模型的必備技巧。"
          },
          {
            "name": "分散式資料平行 (Distributed Data Parallel, DDP)",
            "desc": "將模型完整複製到多張 GPU 上，每張 GPU 處理不同的小批次資料，最後在反向傳播時透過網路通訊同步與平均所有 GPU 計算出的梯度，是目前叢集訓練的主流加速架構。"
          },
          {
            "name": "學習率縮放法則 (Linear Scaling Rule)",
            "desc": "當為了加速訓練而放大批次大小（如從 256 擴增至 1024）時，必須按比例同步放大初始學習率，以確保模型能維持原有的收斂速度與最終泛化效能的經驗法則。"
          }
        ],
        "terminology": [
          "全批次梯度下降",
          "二階梯度法",
          "Hessian 矩陣",
          "曲率",
          "泛化能力"
        ]
      },
      {
        "id": 12,
        "question": "某醫院導入肺癌篩檢模型，資料集中正常病例佔 99%、肺癌陽性僅佔 1%。模型上線後，系統報告整體準確率（Accuracy）為 99.1%。醫師對此數字感到疑慮，認為不足以評估臨床價值，在漏診風險上可能存在重大問題。請問在此情境下，僅以 Accuracy 作為評估指標最嚴重的缺陷為何？",
        "options": {
          "A": "Accuracy 對類別不平衡不敏感，可能無法反映模型對肺癌陽性的偵測能力；",
          "B": "Accuracy 的計算不包含模型對邊界樣本的分類結果，容易遺漏困難樣本；",
          "C": "Accuracy 無法處理多分類問題，在二元分類下需改用 AUC；",
          "D": "Accuracy 無法揭示模型的收斂速度，因此不適合用來選擇最終模型"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。在極端不平衡資料集（如 99% 為負樣本）中，模型只要無腦預測所有人都沒有患病，就能輕鬆獲得 99% 的準確率 (Accuracy)。這種高準確率具有強烈的誤導性，因為它完全掩蓋了模型可能連一個真實肺癌病患（陽性樣本）都無法找出的嚴重缺陷。選項 (B)、(D) 描述錯誤；選項 (C) Accuracy 亦可用於多分類，但問題核心在於類別不平衡。",
        "ml_method": "不平衡資料評估指標 (Imbalanced Data Metrics)",
        "ml_method_explanation": "當處理罕見事件（如罕見疾病、詐欺偵測、設備故障）時，正樣本比例往往極低，導致資料呈現嚴重不平衡。在這種情況下，傳統的準確率（Accuracy）指標會失效。為了正確評估模型性能，必須改用召回率（Recall，評估找出了多少真實正樣本）、精確度（Precision，評估預測為正的樣本中有多少是真實正樣本），或綜合兩者的 F1-Score。在醫療篩檢這類漏診代價極高的情境中，模型設計通常會特別強調並優化召回率（敏感度）。",
        "examples": [
          "在網路銀行的詐欺交易偵測系統中，超過 99.9% 的交易是合法的。團隊不會看重 Accuracy，而是專注於提升 Recall 來確保異常交易被攔截，並監控 Precision 以避免誤鎖過多正常客戶的帳戶。",
          "在製造業的產品瑕疵檢測流水線上，瑕疵品可能只佔總產量的 0.5%。品管部門會使用 F1-Score 或 PR 曲線來評估光學檢測 AI 的能力，確保即使犧牲部分良率，也不會讓任何不良品流入市面。"
        ],
        "comparison": "在類別極度不平衡的場景下，準確率(Accuracy)是一個極具欺騙性的指標，模型只要全部猜測多數類別就能獲得極高分數。相反地，召回率(Recall/敏感度)專注於評估模型找出所有真實目標的能力，對於醫療篩檢或安全警報等「寧可錯殺不可漏放」的場景至關重要。而精確度(Precision)則評估模型發出警報的準確性，適用於資源有限、誤報代價高昂的情境（如人工審核垃圾郵件）。F1-Score則是這兩者的調和平均數。",
        "keywords": [
          "準確率 (Accuracy)",
          "類別不平衡 (Class Imbalance)",
          "召回率 (Recall)",
          "精確度 (Precision)",
          "漏診風險 (False Negative Risk)"
        ],
        "extended_tech": [
          {
            "name": "合成少數群體過取樣技術 (SMOTE)",
            "desc": "一種在特徵空間中透過內插法人工合成新少數類別樣本的技術，能有效緩解訓練資料極度不平衡的問題，強迫模型學習少數類別的決策邊界特徵。"
          },
          {
            "name": "接收者操作特徵曲線 (ROC Curve) 與 AUC",
            "desc": "透過繪製不同決策閾值下的真陽性率與偽陽性率曲線，並計算其曲線下面積(AUC)，提供一個不受單一閾值與類別比例影響的全局模型評估指標，是二元分類任務的金標準。"
          },
          {
            "name": "精確度-召回率曲線 (PR Curve)",
            "desc": "相比於 ROC 曲線，PR 曲線在面對極端不平衡資料集時（如負樣本數量是正樣本的數千倍），能更敏銳且誠實地反映模型在少數目標類別上的預測表現，是異常檢測領域的首選圖表。"
          }
        ],
        "terminology": [
          "正樣本",
          "負樣本",
          "真陽性率",
          "偽陽性率",
          "決策閾值"
        ]
      },
      {
        "id": 13,
        "question": "某工程師訓練文本情感分類模型，訓練集 F1=0.96、驗證集 F1=0.71，落差明顯，顯示模型出現過擬合。下列哪一種策略能最直接從降低模型複雜度的角度緩解過擬合？",
        "options": {
          "A": "增加訓練 Epoch 數至 200，讓模型充分學習訓練資料的所有細節；",
          "B": "引入更多原始文本特徵（包括原始 URL、HTML 標籤），增加特徵多樣性；",
          "C": "對 Embedding 層與全連結層加入 L2 權重衰減（Weight Decay），懲罰參數值；",
          "D": "移除驗證集並將其併入訓練集，以增加模型可見的訓練樣本數"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，加入 L2 正則化（Weight Decay）能在損失函數中對較大的權重值進行懲罰，強迫模型學習較小且平滑的權重，進而限制模型的有效容量與複雜度，是緩解過擬合的直接手段。選項 (A) 增加 Epoch 會使模型進一步記住雜訊，加劇過擬合；選項 (B) 引入更多非必要特徵會增加模型學習雜訊的機會，同樣可能加劇過擬合；選項 (D) 移除驗證集將導致無法監控模型泛化能力，治標不治本。",
        "ml_method": "L2 正則化 (L2 Regularization / Weight Decay)",
        "ml_method_explanation": "L2 正則化（在神經網路中常稱為權重衰減，Weight Decay）是一種透過修改目標函數來控制模型複雜度的技術。它在原始的損失函數後方加上一個與所有權重平方和成正比的懲罰項。這個機制的背後理念是，過於複雜或發生過擬合的模型往往具有極大的參數權重。透過持續對大權重施加向下拉扯的力道，模型會傾向於讓各個特徵的權重均勻分布且趨近於零，從而打造出決策邊界更為平滑、對雜訊不敏感且泛化能力更強的模型。",
        "examples": [
          "在房地產估價模型中，工程師加入 L2 正則化以防止模型過度依賴某些單一且極端特殊的特徵（如房屋是否有特定顏色的門），從而讓模型更平均地考量坪數、屋齡與地段等核心因素。",
          "在醫學影像病徵識別中，若訓練樣本較少，使用 L2 權重衰減可防止神經網路死記硬背特定幾張 X 光片上的儀器反光斑點，強迫網路去學習真正代表病理組織的一般性紋理特徵。"
        ],
        "comparison": "L2正則化(Weight Decay)透過在損失函數中加入對大權重的懲罰，強制模型保持平滑的決策邊界，是最經典且直接降低模型複雜度以抵抗過擬合的方法。相較之下，Dropout是透過隨機停用神經元來防止節點間過度依賴，提早停止(Early Stopping)則是透過監控驗證集來切斷過度訓練。增加Epoch或盲目引入雜訊特徵反而會讓模型過度記憶訓練資料，導致過擬合更加嚴重。移除驗證集更是危險的做法，會讓工程師徹底失去評估泛化能力的標準。",
        "keywords": [
          "過擬合 (Overfitting)",
          "L2 正則化 (L2 Regularization)",
          "權重衰減 (Weight Decay)",
          "模型複雜度 (Model Complexity)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "丟棄法 (Dropout)",
            "desc": "在神經網路訓練過程中，以一定機率隨機將部分神經元的輸出強制歸零，能有效打破神經元之間不必要的共適應（Co-adaptation），是訓練深層網路防止過擬合的最常用技術。"
          },
          {
            "name": "提早停止 (Early Stopping)",
            "desc": "在模型訓練過程中，持續監控獨立驗證集的損失或準確率指標。當發現驗證指標在連續數個週期內不再改善甚至開始惡化時，即自動終止訓練，防止模型過度記憶訓練集雜訊。"
          },
          {
            "name": "標籤平滑 (Label Smoothing)",
            "desc": "一種針對分類任務的正則化技巧，將絕對的 One-Hot 標籤（如 1.0 與 0.0）軟化為帶有微小不確定性的機率值（如 0.9 與 0.1），能防止模型對其預測過度自信，提升泛化表現。"
          }
        ],
        "terminology": [
          "權重平方和",
          "有效容量",
          "決策邊界",
          "共適應",
          "標籤平滑"
        ]
      },
      {
        "id": 14,
        "question": "某電商平台使用樸素貝氏分類器（Naive Bayes Classifier）建立垃圾郵件過濾模型。訓練集準確率（Accuracy）達 92%，但上線後發現，包含「限時優惠、立即下單享折扣」等關鍵字的正常促銷郵件，常被誤判為垃圾信。經分析發現，這些詞彙在訓練資料中多出現在垃圾郵件中，導致其類別條件機率偏高。請問造成此現象的最主要原因與較適當的改善方式為何？",
        "options": {
          "A": "應禁用 Naive Bayes，改用其他更先進演算法；",
          "B": "模型過擬合於訓練資料，應增加 Epoch 數以提升泛化能力；",
          "C": "類別條件機率受訓練資料分布影響，導致促銷關鍵字被視為垃圾信特徵，應重新平衡資料或調整先驗機率；",
          "D": "模型未進行特徵標準化（Feature Scaling），導致分類邊界偏移，應先進行正規化處理"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確，樸素貝氏分類器高度依賴訓練資料所計算出的特徵條件機率與類別先驗機率。若訓練資料中「限時優惠」幾乎只出現在垃圾郵件樣本中，模型就會將此詞視為強烈垃圾信特徵。改善方式應是收集並加入更多包含這些字眼的「正常促銷郵件」來平衡資料分布。選項 (A) 並非演算法本質錯誤；選項 (B) Naive Bayes 並非透過 Epoch 迭代訓練；選項 (D) Naive Bayes 處理文字計數或離散特徵，不需要進行特徵標準化（Feature Scaling）。",
        "ml_method": "樸素貝氏分類器 (Naive Bayes Classifier)",
        "ml_method_explanation": "樸素貝氏分類器是一種基於貝氏定理的機率型機器學習演算法。其被稱為「樸素（Naive）」，是因為它做出了一個強烈且簡化的假設：給定目標類別後，所有特徵之間都是條件獨立的。儘管在現實世界中這個假設幾乎不成立（例如詞彙間經常具有相關性），但該演算法在實務上依然極度高效且表現優異。它的訓練過程極快，僅需計算各類別與特徵出現的統計頻率，因此特別適合應用於大規模文本分類、垃圾郵件過濾與情感分析等基礎 NLP 任務。",
        "examples": [
          "在新聞網站的後台系統中，編輯團隊可利用樸素貝氏分類器快速掃描每天新湧入的數萬篇文章，根據文章中出現的詞彙機率，自動將其分類為「體育」、「政治」或「娛樂」等頻道板塊。",
          "在客戶服務管理系統中，利用該演算法分析客訴表單的文字內容，快速將抱怨運送延遲、產品質量或退款問題的信件自動分派給對應的處理部門，大幅提升客服中心的首回覆速度。"
        ],
        "comparison": "樸素貝氏分類器透過計算條件機率與先驗機率來進行推論，訓練速度極快，特別適合處理高維度但稀疏的文本資料（如詞袋模型）。相較之下，支持向量機(SVM)透過尋找最大邊界超平面來分類，雖能處理更複雜的非線性邊界但訓練較耗時；而神經網路雖能學習深層語意，但需要龐大運算資源與資料量。樸素貝氏的最大缺點是其「特徵獨立」的強烈假設，在處理特徵高度相關的情境下預測機率容易失真，且極度受訓練資料的特徵分佈影響。",
        "keywords": [
          "樸素貝氏分類器 (Naive Bayes)",
          "條件機率 (Conditional Probability)",
          "先驗機率 (Prior Probability)",
          "特徵獨立假設 (Feature Independence)",
          "文本分類 (Text Classification)"
        ],
        "extended_tech": [
          {
            "name": "拉普拉斯平滑 (Laplace Smoothing)",
            "desc": "在樸素貝氏模型中，為了解決測試資料中出現訓練集中從未見過的詞彙（導致條件機率為零，進而使整個機率連乘積歸零）的問題，而人為在計算頻率時加入的一個微小常數。"
          },
          {
            "name": "TF-IDF 權重技術",
            "desc": "一種詞頻統計技術，能降低「的」、「是」等常見無意義停用詞的權重，並提升罕見關鍵字的影響力，常作為樸素貝氏分類器處理文本前的重要特徵轉換步驟。"
          },
          {
            "name": "隱馬可夫模型 (HMM)",
            "desc": "同樣基於貝氏定理與機率模型的演算法，但不同於樸素貝氏的獨立假設，HMM 專注於模擬序列資料中狀態轉移的機率關聯，廣泛應用於早期的語音辨識與詞性標注系統。"
          }
        ],
        "terminology": [
          "貝氏定理",
          "先驗機率",
          "條件獨立",
          "特徵標準化",
          "詞袋模型"
        ]
      },
      {
        "id": 15,
        "question": "某資料科學家將客戶資料進行分群，使用 K-means（K=5）後發現部分群集呈現半月形（非凸）結構，且資料中存在少數離群值（Outliers）。他同時觀察到每次執行結果略有不同。下列敘述何者最完整且準確地反映 K-means 在此情境中的已知限制？",
        "options": {
          "A": "K-means 無法處理維度超過 10 的資料，在高維空間中距離計算失效；",
          "B": "K-means 假設群集為高斯分佈，無法處理任何非球形群集；",
          "C": "K-means 對 K 值敏感，但初始化不影響最終結果（演算法保證全局最優）；",
          "D": "K-means 需預先指定 K；以歐氏距離為基礎，難以處理非凸群集；對初始化與離群值敏感"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確且最完整。K-means 依賴歐氏距離來最小化各點到群集中心的變異數，這使得它強烈偏好將資料劃分為大小相似的球形（凸形）結構，完全無法應對半月形等複雜拓樸結構；同時，中心點的計算極易被遠處的離群值拉偏，且隨機初始化的中心點常導致收斂至局部最佳解。選項 (A) 維度限制不精確；選項 (B) 未提及離群值與初始化問題；選項 (C) 錯誤，K-means 非常容易受初始化影響且無法保證全局最優。",
        "ml_method": "K-means 分群演算法 (K-means Clustering)",
        "ml_method_explanation": "K-means 是一種經典且廣泛使用的非監督式機器學習演算法。其目標是將給定的資料集劃分為 K 個不重疊的子群集。演算法運作方式為：首先隨機初始化 K 個群集中心，然後交替進行兩個步驟（將每個資料點分配給最近的中心，接著重新計算並更新該群集的中心位置），直到群集不再發生變化為止。儘管計算速度極快且易於理解，但它本質上是一種基於幾何距離的線性分割法，面對密度不均、形狀奇特或存在嚴重雜訊的資料時表現往往不佳。",
        "examples": [
          "在電信業的顧客生命週期管理中，行銷團隊利用 K-means 將數百萬用戶根據月租費、通話分鐘數與網路使用量等指標，快速劃分為高價值、潛力型與易流失等群體，以制定差異化方案。",
          "在影像處理技術中，K-means 常被用來進行影像壓縮與色彩量化。透過將影像中幾百萬個像素的顏色聚類為 16 或 32 個代表色群集，能顯著減小圖片檔案大小而保留大致的視覺效果。"
        ],
        "comparison": "K-means基於歐氏距離進行迭代，偏好劃分大小相似的球形群集，計算速度極快但嚴重受限於離群值與初始化，且無法處理半月形等非凸結構。相較之下，DBSCAN是一種基於密度的分群演算法，能自動發現任意形狀的群集且天生具備過濾離群雜訊的能力，適合處理空間座標資料；而高斯混合模型(GMM)則以機率分佈的角度進行軟分群，能處理橢圓形的群集結構，適用於需要評估歸屬機率的模糊邊界場景。",
        "keywords": [
          "K-means 分群 (K-means Clustering)",
          "非凸結構 (Non-convex Structure)",
          "離群值 (Outliers)",
          "局部最佳解 (Local Optimum)",
          "歐氏距離 (Euclidean Distance)"
        ],
        "extended_tech": [
          {
            "name": "K-means++ 初始化演算法",
            "desc": "一種改良的中心點初始化策略，透過確保初始群集中心彼此之間的距離盡可能遙遠，有效降低了演算法陷入不良局部最佳解的機率，並顯著加速了整體的收斂速度。"
          },
          {
            "name": "DBSCAN 密度分群法",
            "desc": "基於資料點密度的非監督式演算法，不需要預先指定群集數量，能完美辨識出各種奇特形狀（如半月形或環形）的群集，並自動將密度過低的點標記為雜訊，常應用於地理空間資料分析。"
          },
          {
            "name": "輪廓係數 (Silhouette Coefficient)",
            "desc": "一種用來評估分群品質的內部指標，綜合衡量了群集內部的緊密度與不同群集之間的分離度，常被用來協助資料科學家客觀地決定 K-means 中的最佳 K 值。"
          }
        ],
        "terminology": [
          "非凸群集",
          "球形群集",
          "歐氏距離",
          "局部最佳解",
          "高斯混合模型"
        ]
      },
      {
        "id": 16,
        "question": "某資料科學家在信用評分任務中使用 XGBoost 建立模型，發現模型在訓練集表現良好但驗證集出現過擬合跡象。他檢視其模型設計，發現 XGBoost 在目標函數（Objective Function）中引入額外的正則化機制以控制模型複雜度。相較於傳統梯度提升決策樹（GBDT），XGBoost 在其核心目標函數中加入了下列哪一種關鍵設計，使其具備更強的防過擬合能力？",
        "options": {
          "A": "加入樹的複雜度懲罰項（包含深度、葉節點數量與葉節點權重的 L2 正則化）；",
          "B": "加入動態學習率（Dynamic Learning Rate）的強制衰減機制；",
          "C": "加入卷積運算（Convolution）以萃取特徵間的空間關係；",
          "D": "強制所有決策樹深度為 1（Decision Stumps）"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，XGBoost 對傳統 GBDT 的最大改良之一，便是在定義目標函數時直接將樹的複雜度（如葉節點的總數量、葉節點權重的 L2 正則化）作為懲罰項納入優化過程。這迫使模型在降低訓練誤差的同時，必須盡可能保持決策樹結構簡單且權重平滑，大幅降低過擬合風險。選項 (B) 學習率衰減是外部超參數機制，非目標函數設計；選項 (C) 卷積是 CNN 專屬，與樹模型無關；選項 (D) XGBoost 支援深層樹，不僅限於深度 1。",
        "ml_method": "XGBoost (Extreme Gradient Boosting)",
        "ml_method_explanation": "XGBoost（極限梯度提升）是一種基於決策樹組合的強大機器學習演算法，屬於集成學習中的 Boosting 家族。它透過序列化地不斷建立新的決策樹，每一棵新樹都在嘗試修正前所有樹預測加總後的殘差。XGBoost 之所以能在各大資料科學競賽中屢創佳績，在於其對系統與演算法層面的極致優化，包括對缺失值的自動處理、平行化建立樹結構的能力、運用二階泰勒展開進行精確的損失函數逼近，以及將樹結構複雜度納入正則化懲罰中以防止過擬合。",
        "examples": [
          "在 P2P 網路借貸平台中，風險控制部門利用 XGBoost 分析借款人的數百項歷史財務數據與行為特徵，精準預測其違約機率，並在維持極高準確率的同時提供每個特徵的重要程度報告。",
          "在智慧城市的交通流量預測系統中，模型需綜合考量天氣、星期、節慶與歷史車流量等多維度異質資料。XGBoost 憑藉其處理表格型資料的卓越能力，能快速輸出高精度的路況預警資訊。"
        ],
        "comparison": "XGBoost作為提升樹(Boosting)的巔峰之作，透過在目標函數內建樹複雜度懲罰項與二階泰勒展開，極大提升了模型的防過擬合能力與收斂精準度，是處理結構化表格資料的競賽王者。相較之下，隨機森林(Random Forest)屬於Bagging家族，透過平行建立大量深層樹並多數決來降低變異數，不易過擬合但精度通常略遜XGBoost。而神經網路雖能處理更複雜的非結構化資料，但在中小型表格數據上的表現與解釋性往往不及XGBoost。",
        "keywords": [
          "XGBoost",
          "梯度提升決策樹 (GBDT)",
          "正則化 (Regularization)",
          "樹的複雜度 (Tree Complexity)",
          "過擬合 (Overfitting)"
        ],
        "extended_tech": [
          {
            "name": "LightGBM",
            "desc": "微軟開發的另一款極受歡迎的梯度提升框架，採用基於直方圖的演算法與單邊梯度取樣（GOSS）技術，在維持極高準確率的同時，訓練速度與記憶體消耗都遠優於傳統 XGBoost，適合處理海量資料。"
          },
          {
            "name": "CatBoost",
            "desc": "由 Yandex 開發的提升樹演算法，特別針對類別型特徵（Categorical Features）進行了底層演算法級別的優化，使用者無需進行繁瑣的 One-Hot 編碼，且內建對稱樹結構能極大加速推論速度。"
          },
          {
            "name": "SHAP 值分析 (SHAP Values)",
            "desc": "一種基於賽局理論的模型解釋技術，能精確量化 XGBoost 等複雜黑盒模型中，每一個特徵對於單一預測結果的貢獻程度與方向，是金融與醫療等高合規性產業必備的解釋工具。"
          }
        ],
        "terminology": [
          "目標函數",
          "二階泰勒展開",
          "缺失值",
          "決策樹組合",
          "葉節點權重"
        ]
      },
      {
        "id": 17,
        "question": "某醫療新創團隊將原有 3 層 CNN 升級為 16 層架構以提升 CT 影像腫瘤偵測率，但發現訓練損失反而高於 3 層版本且收斂困難。工程師懷疑是網路深度造成的訓練問題，下列診斷與對策何者最正確？",
        "options": {
          "A": "網路層數增加導致參數量過多，應減少每層卷積濾波器（Filters）數量以降低模型複雜度；",
          "B": "深層網路可能出現梯度消失問題，導致淺層權重難以更新；應採用 ResNet 的殘差連接（Skip Connection）以改善梯度傳遞；",
          "C": "16 層模型對 CT 影像而言仍過淺，應進一步增加網路深度以學習更高階特徵；",
          "D": "問題可能來自激活函數（Activation Function），將 ReLU 改為 Sigmoid 可改善梯度傳遞問題"
        },
        "answer": "B",
        "explanation": "選項 (B) 正確。當神經網路深度增加時，梯度在反向傳播的連鎖律計算過程中會不斷相乘，極易發生「梯度消失（Gradient Vanishing）」現象，導致靠近輸入的淺層網路幾乎無法更新學習，使得深層網路表現反而退化。導入 ResNet 的殘差連接（Skip Connection）能讓梯度透過捷徑直接傳遞至淺層，有效解決此問題。選項 (A) 減少濾波器無法解決梯度消失；選項 (C) 更深會讓問題惡化；選項 (D) Sigmoid 比 ReLU 更容易引發嚴重的梯度消失。",
        "ml_method": "殘差網路 (Residual Network, ResNet)",
        "ml_method_explanation": "殘差網路（ResNet）是深度學習架構發展史上的一項重大突破，由何愷明等人提出。在傳統神經網路中，無限制增加層數會引發網路退化問題（梯度消失與梯度爆炸），使得模型難以訓練。ResNet 透過引入「跳躍連接（Skip Connection）」或「捷徑（Shortcut）」的創新設計，允許輸入信號繞過一至多層非線性轉換，直接加到後方的輸出上。這種機制讓網路學習的目標轉變為學習輸入與輸出間的「殘差」，使梯度能夠無損地暢通回傳，成功實現超深層網路的訓練。",
        "examples": [
          "在無人機的即時地面目標辨識系統中，使用具有數百層架構的 ResNet 能讓模型學習到極度抽象且豐富的視覺特徵，精確區分出隱蔽在樹林間的車輛或人員，並維持系統的高度準確性。",
          "在現代智慧型手機的相機 AI 演算法中，殘差網路架構被廣泛應用於影像超解析度重建與夜間模式降噪。深層網路能有效提取細節紋理，而跳躍連接確保了運算過程的高效與穩定。"
        ],
        "comparison": "在訓練超深層神經網路時，梯度消失是最大的效能殺手。ResNet透過殘差連接(Skip Connection)創造梯度高速公路，完美解決了網路退化問題，使其能堆疊數百層以萃取深層特徵，成為現代電腦視覺的骨幹網路。相較之下，早期的VGG架構單純堆疊卷積層，深度超過十幾層後便難以收斂；而Inception架構則是在同一層內平行使用不同尺寸的卷積核來增加寬度，雖然提高了特徵多樣性，但對解決超深層的梯度消失幫助有限。",
        "keywords": [
          "殘差網路 (ResNet)",
          "梯度消失 (Gradient Vanishing)",
          "跳躍連接 (Skip Connection)",
          "網路退化 (Network Degradation)",
          "深度卷積神經網路 (Deep CNN)"
        ],
        "extended_tech": [
          {
            "name": "DenseNet (密集連接網路)",
            "desc": "在 ResNet 概念上的進階發展，網路中的每一層都會直接接收前面所有層的特徵圖作為輸入，這種極端的特徵重複利用機制能進一步減緩梯度消失，且在較少參數下達到優異效能。"
          },
          {
            "name": "批次正規化 (Batch Normalization)",
            "desc": "在卷積層與激活函數之間插入的特殊處理層，透過將每一小批次資料的輸出強制標準化，能有效穩定深層網路的梯度分布，是配合 ResNet 訓練深層模型的必備利器。"
          },
          {
            "name": "神經網路架構搜尋 (NAS)",
            "desc": "利用強化學習或演化演算法，讓 AI 自己探索並設計出針對特定硬體平台與任務最佳化的神經網路架構（如 EfficientNet），逐漸取代了純人工設計網路的傳統方式。"
          }
        ],
        "terminology": [
          "連鎖律",
          "網路退化",
          "殘差",
          "卷積濾波器",
          "激活函數"
        ]
      },
      {
        "id": 18,
        "question": "某工程師設計用於醫療 X 光影像分類的 CNN，發現卷積層後直接接全連結層導致參數量高達 5,000 萬，訓練速度極慢。為降低模型參數量與計算成本，他在卷積層後加入池化層（Pooling Layer）。下列何者為池化層在此設計中最主要解決的問題？",
        "options": {
          "A": "降低特徵圖空間維度，減少參數與計算量；",
          "B": "提供非線性表達能力，以提升模型學習複雜度；",
          "C": "改善梯度消失問題，以強化反向傳播穩定性；",
          "D": "提升模型泛化能力而不影響特徵維度"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確，池化層（如 Max Pooling 或 Average Pooling）的主要作用是對卷積層輸出的特徵圖進行降採樣。透過縮小特徵圖的寬度與高度（空間維度），可以大幅減少後續全連結層所需對接的神經元數量，從而顯著降低模型總參數量與運算成本。選項 (B) 提供非線性是激活函數（如 ReLU）的工作；選項 (C) 改善梯度消失通常依賴殘差連接或 Batch Normalization；選項 (D) 錯誤，池化層一定會改變並縮小特徵維度。",
        "ml_method": "池化層 (Pooling Layer)",
        "ml_method_explanation": "池化層是卷積神經網路（CNN）中不可或缺的結構單元，通常穿插在連續的卷積層之間。其主要功能是對特徵圖進行下採樣（Down-sampling），常見做法有最大池化（Max Pooling）與平均池化（Average Pooling）。池化層在局部區域內提取最具代表性的數值，不僅能大幅縮減資料的空間尺寸以降低後續運算的參數負載，更重要的是它賦予了模型某種程度的「平移不變性」。這意味著即使影像中的關鍵特徵發生了微小的位移，池化後仍能被穩定地捕捉與識別。",
        "examples": [
          "在車牌自動辨識系統中，車輛駛過時攝影機拍下的車牌位置可能略有偏移。池化層能確保即使數字在影像中的像素位置發生了微小的平移，神經網路依然能穩定萃取出相同的數字特徵。",
          "在指紋辨識考勤機中，使用者每次按壓手指的角度與位置都略有不同。CNN 透過池化層的降採樣機制過濾掉微小的空間雜訊，專注於保留指紋的全局紋理特徵，提高身分比對的容錯率。"
        ],
        "comparison": "池化層(Pooling Layer)專職於對特徵圖進行降採樣，強制縮減空間維度以減少運算量，同時賦予模型對微小位移的平移不變性，是CNN的標準降維工具。相較之下，卷積層(Convolutional Layer)負責提取局部視覺特徵，會保留甚至擴展通道維度；全連結層(Fully Connected Layer)則負責整合所有全局特徵以進行最終的分類決策，但會消耗極其龐大的記憶體與參數。現代CNN設計甚至會用全域平均池化(GAP)完全取代後端龐大的全連結層。",
        "keywords": [
          "池化層 (Pooling Layer)",
          "卷積神經網路 (CNN)",
          "降採樣 (Down-sampling)",
          "平移不變性 (Translation Invariance)",
          "空間維度縮減 (Spatial Dimension Reduction)"
        ],
        "extended_tech": [
          {
            "name": "全域平均池化 (Global Average Pooling, GAP)",
            "desc": "在 CNN 架構的最後端，直接對整張特徵圖計算平均值並輸出單一數值，藉此完全取代傳統龐大且容易過擬合的全連結層，廣泛應用於 ResNet 等現代網路設計中。"
          },
          {
            "name": "空洞卷積 (Dilated Convolution)",
            "desc": "一種在卷積核元素之間人為插入空洞的技術，能在不增加參數量與不縮小特徵圖解析度的情況下，大幅擴大神經元的感受野，常應用於對空間解析度要求極高的語意分割任務。"
          },
          {
            "name": "空間金字塔池化 (Spatial Pyramid Pooling, SPP)",
            "desc": "一種進階的池化技術，能接受任意尺寸的輸入影像，並透過多種不同尺度的池化操作產生固定長度的特徵向量，打破了傳統 CNN 必須輸入固定尺寸圖片的限制。"
          }
        ],
        "terminology": [
          "特徵圖",
          "降採樣",
          "全連結層",
          "感受野",
          "非線性表達能力"
        ]
      },
      {
        "id": 19,
        "question": "某團隊開發合約文件審查系統，需比對合約首頁的定義條款與第 20 頁的責任條款是否一致。工程師初版採用雙向長短期記憶（Bidirectional LSTM），但發現長文件的跨段落語義關聯捕捉效果不佳，且訓練時間隨文件長度明顯增加。改用 Transformer 架構後問題獲得改善，下列何者為最主要的原因？",
        "options": {
          "A": "Transformer 參數量比 LSTM 少，因此訓練速度更快、不易過擬合；",
          "B": "Transformer 內建位置編碼，使模型天生理解文件的章節結構與段落順序；",
          "C": "LSTM 無法處理超過 512 個 token 的輸入，Transformer 無此硬性限制；",
          "D": "Transformer 的 Self-Attention 可讓任意 token直接建立關聯，不受距離限制，且運算可平行化"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。LSTM 處理長文本時必須「序列化」地逐步傳遞隱藏狀態，導致跨度極大的資訊容易在傳遞過程中衰減遺失；同時序列依賴特性無法進行高度平行計算。Transformer 的自注意力機制（Self-Attention）允許序列中的任何一個字詞直接計算與其他所有字詞的關聯度，徹底打破了距離的限制，且整個矩陣計算可完美平行化，大幅提升長文本處理能力。選項 (A)、(B)、(C) 描述皆存在事實上的謬誤。",
        "ml_method": "Transformer 架構與自注意力機制",
        "ml_method_explanation": "Transformer 是一種徹底捨棄傳統循環神經網路架構（RNN/LSTM），完全依賴注意力機制的深度學習模型。其核心的「自注意力機制（Self-Attention）」允許模型在處理序列中的每一個元素時，能同時且直接地審視序列中所有其他元素，藉此評估彼此之間的關聯權重並融合資訊。這種設計不僅解決了處理超長序列時的資訊衰減問題，更因為打破了時序依賴，使得計算過程可以透過 GPU 進行大規模平行處理，成為現今所有大型語言模型（LLM）的基石。",
        "examples": [
          "在跨國企業的即時語音與文本翻譯系統中，句子前方的名詞與句尾的動詞常有強烈關聯。Transformer 透過自注意力機制能瞬間精準捕捉這種長距離語法依賴，生成極度自然順暢的譯文。",
          "在生物資訊學的蛋白質折疊預測中（如 AlphaFold），科學家利用類似 Transformer 的架構將胺基酸序列視為文本，藉由注意力機制預測序列中相隔甚遠的胺基酸在三維空間中結合的可能性。"
        ],
        "comparison": "Transformer透過自注意力機制，讓序列中任意兩點直接建立關聯，無懼長距離依賴衰減，且完全平行化的特性使其成為處理超長文本與構建LLM的絕對王者。相較之下，LSTM等循環神經網路(RNN)必須依照時間步逐步傳遞資訊，不僅導致長距離語意容易遺失，且無法運用GPU進行序列方向的平行加速。不過，LSTM在處理極短期的即時感測器時間序列或資源受限的邊緣裝置上，仍保有輕量化的優勢。",
        "keywords": [
          "Transformer 架構",
          "自注意力機制 (Self-Attention)",
          "長距離依賴 (Long-term Dependency)",
          "平行化計算 (Parallel Computation)",
          "自然語言處理 (NLP)"
        ],
        "extended_tech": [
          {
            "name": "位置編碼 (Positional Encoding)",
            "desc": "由於自注意力機制本身缺乏對序列順序的感知能力，Transformer 必須透過引入正弦與餘弦等數學函數產生的位置向量與詞嵌入相加，來賦予模型理解句子中字詞前後順序的能力。"
          },
          {
            "name": "稀疏注意力機制 (Sparse Attention)",
            "desc": "為了解決標準 Transformer 計算複雜度隨序列長度呈平方增長的問題，透過限制注意力矩陣只關注相鄰或特定跨度的 token，使得模型能處理長達數萬字甚至數百萬字的文件（如 Longformer）。"
          },
          {
            "name": "多頭注意力機制 (Multi-Head Attention)",
            "desc": "Transformer 的內部設計，將原本單一的注意力運算拆分為多個平行的「頭」，讓模型能同時從不同的表徵子空間（如同時關注語法結構與語意情感）來捕捉資訊，大幅增強表達能力。"
          }
        ],
        "terminology": [
          "隱藏狀態",
          "序列化",
          "位置編碼",
          "矩陣計算",
          "時序依賴"
        ]
      },
      {
        "id": 20,
        "question": "工程師在 PyTorch 中建構貓、狗、鳥三分類 CNN，並使用交叉熵損失函數（CrossEntropyLoss）作為訓練目標。由於此損失函數在內部已包含 Softmax 計算，輸出層的設計需特別注意。請問輸出層的激活函數（Activation Function）與輸出維度應如何設定？",
        "options": {
          "A": "使用 ReLU 作為激活函數，輸出維度設為 1，直接輸出單一數值作為預測結果；",
          "B": "使用 Sigmoid 作為激活函數，輸出維度設為 3，使每個類別獨立輸出 0 到 1 的機率；",
          "C": "不使用任何激活函數，直接輸出未經正規化的 logits，輸出維度設為 3 對應三個類別；",
          "D": "使用 Softmax 作為激活函數，輸出維度設為 3，輸出為已正規化的機率分布"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。在深度學習框架 PyTorch 中，官方實作的 `nn.CrossEntropyLoss` 為了數值計算的穩定性，已經在底層將 `LogSoftmax` 與負對數似然損失（`NLLLoss`）結合在一起。因此，神經網路的最後一層（輸出層）絕對不應該再套用 Softmax 激活函數，而是必須直接輸出未經正規化的原始數值（即 Logits），且因為是三分類任務，輸出維度應設定為 3。加上 Softmax 反而會導致錯誤的雙重計算。",
        "ml_method": "Softmax 函數與交叉熵 (Cross-Entropy)",
        "ml_method_explanation": "在多類別分類任務中，神經網路最後一層輸出的通常是任意實數（Logits）。Softmax 函數是一種指數正規化函數，能將這些任意實數轉換為總和為 1、且介於 0 與 1 之間的機率分布，方便我們解釋模型對各個類別的預測信心。隨後，交叉熵損失（Cross-Entropy Loss）被用來計算這個預測出來的機率分布與真實標籤（通常是 One-Hot 編碼）之間的差異。在多數現代深度學習框架中，為避免指數運算帶來的溢位問題，常將這兩步合併為單一函數處理。",
        "examples": [
          "在自駕車的交通號誌辨識模組中，模型會將攝影機拍攝到的標誌輸入網路，最後輸出為「紅燈」、「綠燈」、「速限」等多種類別的 logits，再透過 Softmax 轉化為明確的信心機率供系統決策。",
          "在智慧醫療的皮膚病變檢測 APP 中，用戶上傳病徵照片後，系統後端會使用具有 Softmax 輸出的多分類神經網路，同時計算該病變屬於黑色素瘤、良性痣或其他皮膚疾病的機率百分比。"
        ],
        "comparison": "在多分類任務中，Softmax函數能將輸出轉換為總和為1的機率分佈，完美契合交叉熵損失的要求，是影像分類或語意分割的標準輸出設計。相較之下，Sigmoid函數會將每個輸出獨立壓縮至0到1，總和不為1，適用於「多標籤分類」任務（如一張圖片同時包含狗與車）。而ReLU則用作隱藏層的非線性激活，若置於輸出層會導致負數預測值被直接歸零，完全破壞機率推論的數學基礎。",
        "keywords": [
          "交叉熵損失 (CrossEntropyLoss)",
          "Softmax 函數",
          "Logits",
          "多類別分類 (Multi-class Classification)",
          "深度學習框架實作"
        ],
        "extended_tech": [
          {
            "name": "溫度縮放 (Temperature Scaling)",
            "desc": "在計算 Softmax 前將 logits 除以一個被稱為溫度的超參數。調高溫度會使輸出的機率分布變得更平滑均勻，常應用於知識蒸餾中以提取教師模型的軟標籤（Soft Targets），或用於 LLM 的多樣性生成。"
          },
          {
            "name": "多標籤分類損失 (BCEWithLogitsLoss)",
            "desc": "當面對一張圖片可能同時具有多個標籤（如同時有「山」與「水」）的任務時，不應使用具備互斥性的 Softmax，而是對每個類別獨立使用 Sigmoid 轉換並計算二元交叉熵損失。"
          },
          {
            "name": "對比損失 (Contrastive Loss)",
            "desc": "一種不依賴 Softmax 機率輸出的損失函數，專注於優化樣本間在潛在空間的距離（讓同類靠近、異類遠離），廣泛應用於 Siamese Network 與現代的自監督式表徵學習（如 SimCLR）中。"
          }
        ],
        "terminology": [
          "正規化",
          "負對數似然損失",
          "指數正規化函數",
          "溢位問題",
          "One-Hot 編碼"
        ]
      },
      {
        "id": 21,
        "question": "某工程師將一個大型預訓練模型部署至資源受限的行動裝置，發現模型體積過大且推論效率不足。為降低模型大小並提升推論速度，他將原本 32-bit 浮點數權重轉換為 8-bit 整數。在不重新訓練模型的前提下，請問此過程稱為何？",
        "options": {
          "A": "知識蒸餾（Knowledge Distillation）；",
          "B": "權重剪枝（Pruning）；",
          "C": "張量分解（Tensor Decomposition）；",
          "D": "模型量化（Quantization）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確，將模型參數的資料型態從高精度的 32-bit 浮點數（FP32）壓縮轉換為低精度的 8-bit 整數（INT8）的技術，稱為模型量化（Quantization）。此方法能顯著縮減模型檔案大小與記憶體佔用，並利用硬體的整數運算單元加速推論。選項 (A) 知識蒸餾是用大模型教導小模型，涉及訓練過程；選項 (B) 權重剪枝是直接移除影響力較小的權重連接；選項 (C) 張量分解是利用數學矩陣分解減少參數數量。",
        "ml_method": "模型量化 (Model Quantization)",
        "ml_method_explanation": "模型量化是深度學習模型壓縮與邊緣部署（Edge AI）領域中最關鍵的技術之一。傳統的神經網路在訓練時為了確保微小梯度的精確傳遞，通常使用 32 位元浮點數（FP32）來儲存權重與激活值。然而在推論階段，模型往往不需要如此高的精度。量化技術透過巧妙的映射與縮放演算法，將這些連續的浮點數轉換為 16 位元甚至 8 位元的低精度整數（INT8）。這不僅能讓模型體積縮減數倍，更大幅降低了記憶體頻寬需求，實現高速且低功耗的推論。",
        "examples": [
          "在智慧型手機的即時語音轉文字功能中，廠商會將雲端訓練好的龐大語音模型進行 8-bit 量化，使其能夠完全載入手機本地記憶體，讓用戶即使在無網路連接的情況下也能順暢使用。",
          "在智慧家庭的保全攝影機中，由於設備運算資源極其匱乏，工程師必須將人臉辨識模型深度量化，使其能直接運行於低功耗的微控制器晶片上，實現全天候即時的異常闖入警報偵測。"
        ],
        "comparison": "模型量化透過降低權重數值精度(如FP32轉INT8)來縮減模型體積並加速邊緣推論，是硬體部署最直接的手段。相較之下，知識蒸餾(Knowledge Distillation)是讓小模型學習大模型的軟標籤，屬於訓練層面的知識轉移；權重剪枝(Pruning)則是直接歸零並移除微小的權重連線以創造稀疏矩陣；張量分解則是透過數學矩陣拆解降低維度。這四者經常在工業界混合使用，以打造極致輕量化的邊緣AI應用。",
        "keywords": [
          "模型量化 (Model Quantization)",
          "邊緣運算 (Edge AI)",
          "推論加速 (Inference Acceleration)",
          "浮點數精度 (Floating-point Precision)",
          "模型壓縮 (Model Compression)"
        ],
        "extended_tech": [
          {
            "name": "量化感知訓練 (Quantization-Aware Training, QAT)",
            "desc": "在模型訓練階段就人為引入量化誤差的雜訊，讓模型在更新權重時提前適應低精度環境，這能讓最終量化後的模型幾乎不損失任何準確率，遠勝過訓練後才進行的後量化（PTQ）。"
          },
          {
            "name": "知識蒸餾 (Knowledge Distillation)",
            "desc": "一種訓練策略，將龐大且準確的「教師模型」輸出的軟標籤（Soft Targets）作為目標，用來訓練一個輕量級的「學生模型」，讓小模型能繼承大模型的泛化能力。"
          },
          {
            "name": "權重剪枝 (Weight Pruning)",
            "desc": "透過演算法找出神經網路中對最終輸出影響力極小（如接近零）的權重連線並將其刪除，藉此將稠密神經網路轉化為稀疏網路，以減少運算量與儲存空間。"
          }
        ],
        "terminology": [
          "微小梯度",
          "浮點數",
          "推論階段",
          "邊緣部署",
          "記憶體頻寬"
        ]
      },
      {
        "id": 22,
        "question": "某工程師建置企業內部知識問答的 RAG 系統，上線後發現部分問題檢索結果與查詢語意不符。分析後確認問題出在向量搜尋的語意匹配不準確。於檢索階段，採取下列哪種方法最能直接改善此問題？",
        "options": {
          "A": "將切片大小（Chunk Size）由512tokens 縮小至 128tokens，以提升檢索精細度；",
          "B": "調整向量相似度閾值（Similarity Threshold），以過濾低相關檢索結果；",
          "C": "採用混合搜尋（Hybrid Search）：結合語意向量搜尋與關鍵字搜尋（BM25），並以 RRF（Reciprocal Rank Fusion）融合排序；",
          "D": "將檢索結果隨機洗牌（Shuffle）後回傳給LLM，避免位置偏誤（Position Bias）"
        },
        "answer": "C",
        "explanation": "選項 (C) 正確。純向量搜尋（Semantic Search）雖然擅長捕捉抽象語意，但在面對特定專有名詞、產品型號或精確縮寫時往往表現不佳。混合搜尋（Hybrid Search）結合了傳統基於詞彙精確比對的 BM25 演算法與向量搜尋，再透過 RRF 等排序融合技術截長補短，是目前 RAG 架構中提升檢索準確率最有效的實務手段。選項 (A) 切片過小可能破壞完整語意；選項 (B) 調整閾值無法救回原本就搜錯的內容；選項 (D) 洗牌無助於提升檢索階段的準確度。",
        "ml_method": "混合搜尋與檢索增強生成 (Hybrid Search in RAG)",
        "ml_method_explanation": "檢索增強生成（RAG）系統依賴強大的資料庫檢索來提供大型語言模型正確的外部知識。在檢索階段，傳統的「關鍵字搜尋（如 BM25）」極其擅長捕捉完全吻合的特定詞彙與短語，但缺乏對同義詞與上下文的理解；相反地，「向量語義搜尋」能完美理解語意關聯，卻容易忽視專有名詞的精確細節。混合搜尋策略將這兩種截然不同的檢索方式平行執行，並利用倒數排名融合（RRF）等演算法綜合評分，能最大化地兼顧檢索的廣度與精準度。",
        "examples": [
          "在大型跨國電商平台的客服 AI 助手中，混合搜尋能確保用戶詢問「有沒有適合慢跑的鞋子」時找到語意相近的運動鞋，同時在用戶查詢「Air Max 97 黑色」時能精確比對到特定商品型號。",
          "在法律科技公司的判決書查詢系統裡，律師常輸入高度專業的法條編號與模糊的案情描述。混合搜尋能利用 BM25 精準鎖定特定法條，並透過向量搜尋找出與案情語意相似的過往判例。"
        ],
        "comparison": "在RAG架構中，混合搜尋(Hybrid Search)結合了向量搜尋的語意理解優勢與BM25關鍵字搜尋對專有名詞的精確比對能力，是最強大的檢索策略。相較之下，單純縮小切片大小(Chunking)雖能增加檢索粒度，但極易破壞長文本的連貫語意；調整相似度閾值僅能減少低品質結果的干擾，無法無中生有找出漏掉的精確文件。RRF排序融合則是扮演將兩套不同檢索系統的結果公平合併的關鍵演算法。",
        "keywords": [
          "混合搜尋 (Hybrid Search)",
          "檢索增強生成 (RAG)",
          "向量搜尋 (Vector Search)",
          "BM25 關鍵字搜尋",
          "倒數排名融合 (RRF)"
        ],
        "extended_tech": [
          {
            "name": "重新排序模型 (Re-ranker)",
            "desc": "在初步檢索出數十篇候選文件後，使用一個專門訓練的交叉編碼器（Cross-encoder）神經網路對查詢句與每篇文件進行深度的語意比對打分並重新排序，能大幅提升最終提交給 LLM 的文件關聯度。"
          },
          {
            "name": "查詢擴展與改寫 (Query Expansion / Rewriting)",
            "desc": "在使用者輸入查詢後，先利用一個輕量級的 LLM 對原始查詢進行同義詞擴展或邏輯拆解改寫，再將改寫後的豐富查詢送入資料庫檢索，以提高找到相關冷門資料的機率。"
          },
          {
            "name": "圖資料庫與知識圖譜 (Knowledge Graph RAG)",
            "desc": "將傳統非結構化文件的 RAG 架構結合具有實體與關係鏈接的知識圖譜。在面對需要多重邏輯推理與關聯追蹤的問題時，圖資料庫能提供比向量搜尋更精確且具備解釋性的檢索結果。"
          }
        ],
        "terminology": [
          "切片大小",
          "專有名詞",
          "語意匹配",
          "位置偏誤",
          "倒數排名融合"
        ]
      },
      {
        "id": 23,
        "question": "某團隊開發法律文件生成系統，需根據合約前半段內容自動生成後半段條款。工程師分別使用 BERT 與 GPT-2 進行微調，但發現 BERT 的生成效果明顯較差，且即使增加訓練資料也無法改善。下列何者為最主要原因？",
        "options": {
          "A": "BERT 缺乏法律領域知識，因此生成能力較差；",
          "B": "BERT 的分詞方式影響語意理解，導致生成效果不佳；",
          "C": "BERT 模型規模較小，因此生成能力不足；",
          "D": "BERT 無法根據前文逐步生成後續文字，較不適合此類任務"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。BERT 是一種基於 Transformer「編碼器（Encoder）」架構的模型，訓練目標是填補句子中被挖空的詞彙（Masked Language Modeling），極度擅長雙向理解與特徵提取，適合用於分類或問答任務。然而，它不具備「自迴歸（Autoregressive）」的特性，無法像 GPT 系列（基於解碼器 Decoder）那樣根據上文逐字預測並生成下文，因此本質上就不適合用於連續文本生成任務。選項 (A)、(B)、(C) 皆不是根本的架構限制原因。",
        "ml_method": "自迴歸語言模型 (Autoregressive Language Modeling)",
        "ml_method_explanation": "自迴歸語言模型（如 GPT 系列）是目前生成式 AI 最核心的模型架構。其運作原理是基於條件機率，根據已經出現過的上下文序列（歷史詞彙），預測下一個最有可能出現的單一詞彙。生成文字時，模型會將剛預測出的新詞彙重新加入到輸入序列的末端，做為下一步預測的新上下文，如此不斷循環往復，形成「自迴歸」的生成過程。這種由左至右、單向推演的設計，使其在撰寫文章、編寫程式碼與進行連續對話等生成式任務中表現極為優異。",
        "examples": [
          "在軟體工程領域廣受歡迎的 AI 程式碼助手（如 GitHub Copilot），底層即依賴自迴歸語言模型。當開發者寫下函式名稱與註解時，模型能根據前文邏輯，一行一行地自動補齊後續的程式碼。",
          "在創意行銷產業中，文案生成工具利用此技術協助社群小編。只要輸入簡短的活動主題與關鍵字，系統便能自動流暢地續寫出具有吸引力的宣傳短文或部落格文章草稿。"
        ],
        "comparison": "GPT系列基於Transformer解碼器(Decoder)，採用自迴歸機制由左至右逐字預測，是文本生成任務(如寫文章、寫程式)的霸主。相較之下，BERT基於編碼器(Encoder)，採用遮蔽語言模型(MLM)進行雙向語意理解，雖無法流暢生成連續文本，但在文本分類、情緒分析與實體辨識任務上擁有卓越的特徵萃取能力。兩者架構設計的出發點完全不同，必須依據業務場景(生成vs理解)選擇適合的預訓練模型。",
        "keywords": [
          "自迴歸模型 (Autoregressive Model)",
          "文字生成 (Text Generation)",
          "Transformer 解碼器 (Decoder)",
          "BERT 架構",
          "遮蔽語言模型 (Masked Language Modeling)"
        ],
        "extended_tech": [
          {
            "name": "T5 (Text-to-Text Transfer Transformer)",
            "desc": "Google 提出的完整 Transformer（編碼器+解碼器）架構模型，將所有自然語言處理任務（無論是翻譯、分類還是摘要）統一視為「文本輸入轉文本輸出」的生成任務，極大統一了 NLP 的訓練框架。"
          },
          {
            "name": "指令微調 (Instruction Tuning)",
            "desc": "在預訓練好的自迴歸語言模型之上，使用大量人工撰寫的「指令-回答」對話資料進行二次訓練，讓模型學會理解人類意圖並遵循指示作答，是 ChatGPT 等現代對話 AI 的關鍵技術。"
          },
          {
            "name": "束搜索 (Beam Search)",
            "desc": "一種在自迴歸模型生成文本時採用的進階解碼演算法。有別於每次只挑選機率最高的單一詞彙，束搜索會同時保留多個高機率的候選句子路徑進行推演，以產出整體語意最通順的最終結果。"
          }
        ],
        "terminology": [
          "編碼器",
          "雙向理解",
          "條件機率",
          "上下文序列",
          "單向推演"
        ]
      },
      {
        "id": 24,
        "question": "某推薦系統工程師處理商品類別特徵，該特徵包含約 3,000 個不同商品項目，每一種商品或其規格皆視為一個獨立類別。請問在高基數（High Cardinality）的情境下，下列哪一種編碼方式最容易造成維度爆炸問題？",
        "options": {
          "A": "目標編碼（Target Encoding）；",
          "B": "標籤編碼（Label Encoding）；",
          "C": "Embedding 層（Categorical Embedding）；",
          "D": "One-Hot 編碼（One-Hot Encoding）"
        },
        "answer": "D",
        "explanation": "選項 (D) 正確。One-Hot 編碼會為類別特徵中的每一個獨立類別建立一個新的二元特徵（0 或 1）。在面對擁有 3,000 個不同商品項目的高基數（High Cardinality）特徵時，One-Hot 編碼會直接將原本的 1 個維度擴張成 3,000 個稀疏維度。這不僅會造成嚴重的「維度爆炸」，導致記憶體消耗劇增，還會讓機器學習模型面臨稀疏矩陣運算與過擬合的危機。選項 (A)、(B)、(C) 皆能將類別轉換為低維度的數值或稠密向量，不會引發維度爆炸。",
        "ml_method": "獨熱編碼 (One-Hot Encoding)",
        "ml_method_explanation": "獨熱編碼（One-Hot Encoding）是處理離散類別型資料最基礎的轉換技術。由於機器學習模型只能處理數值資料，無法直接理解如「紅色」、「綠色」、「藍色」等類別標籤。獨熱編碼透過建立多個二進位特徵欄位來解決此問題。每個類別對應一個獨立的欄位，若該樣本屬於該類別，對應欄位設為 1，其餘欄位設為 0。這種方法能確保不同類別之間保持獨立，不會產生錯誤的數值大小與順序關係，但在類別數量過多時極易導致資料極度稀疏與維度災難。",
        "examples": [
          "在建立信用卡詐欺偵測模型時，對於客戶的「性別」、「婚姻狀況」或「消費國家（少數幾個主要國家）」等低基數類別特徵，工程師會安全地使用獨熱編碼將其轉換為模型可處理的特徵矩陣。",
          "在傳統的決策樹分類器中，若要將病患的「血型」（A、B、O、AB 型）輸入模型，利用獨熱編碼將其轉換為四個獨立的二元特徵，能避免模型誤將血型編碼的數字大小解讀為具備數學連續意義。"
        ],
        "comparison": "獨熱編碼(One-Hot)能徹底消除類別間的數學連續性，適用於少量類別（低基數）的特徵轉換；但面對高基數特徵（如數千種商品型號）會引發嚴重的維度爆炸與稀疏矩陣問題。相較之下，目標編碼(Target Encoding)根據目標變數的統計平均值替換類別，能將高基數轉換為單一數值特徵，但易引發資料洩漏；而Embedding層則是深度學習的專屬解法，透過訓練將高基數類別映射至低維稠密向量空間，能完美捕捉類別間的潛在關聯。",
        "keywords": [
          "獨熱編碼 (One-Hot Encoding)",
          "高基數 (High Cardinality)",
          "維度爆炸 (Dimensionality Explosion)",
          "類別特徵 (Categorical Features)",
          "稀疏矩陣 (Sparse Matrix)"
        ],
        "extended_tech": [
          {
            "name": "目標編碼 (Target Encoding)",
            "desc": "將離散的類別標籤直接替換為該類別在目標變數（如轉換率、平均價格）上的歷史統計平均值，是一種在各大 Kaggle 競賽中處理高基數表格資料極為有效的降維編碼技巧。"
          },
          {
            "name": "特徵雜湊 (Feature Hashing / Hashing Trick)",
            "desc": "利用雜湊函數將無數個類別標籤強制映射到一個固定且較小的維度空間中。這是一種極度節省記憶體的編碼方式，特別適合處理串流資料或類別數量會隨時間不斷增長的推薦系統。"
          },
          {
            "name": "實體嵌入 (Entity Embedding)",
            "desc": "源自深度學習的概念，透過一個可訓練的 Embedding 層將每個類別映射為一個低維度且稠密的浮點數向量，這種向量能學習並保留類別之間潛在的語義或業務關聯，是現代深度推薦系統的核心。"
          }
        ],
        "terminology": [
          "標籤編碼",
          "二元特徵",
          "稀疏矩陣",
          "連續意義",
          "決策樹分類器"
        ]
      },
      {
        "id": 25,
        "question": "某工程師建立房價預測模型，輸入特徵包含屋齡與距捷運站距離（公尺）。他發現距捷運站距離分布嚴重右偏，經對數（Log）轉換後模型表現明顯改善；但將同樣轉換套用於屋齡後，模型表現反而下降。下列何者為最可能的原因？",
        "options": {
          "A": "屋齡與房價若呈線性關係，Log 轉換反而破壞此結構；",
          "B": "Log 轉換會壓縮所有特徵的變異數，導致模型失去鑑別能力；",
          "C": "Log 轉換不適用於有單位的連續變數，應改用 Box-Cox；",
          "D": "兩特徵須套用相同轉換，否則尺度不一致導致梯度不穩定"
        },
        "answer": "A",
        "explanation": "選項 (A) 正確。特徵工程中進行對數轉換（Log Transformation）的主要目的是將嚴重右偏（長尾）的分布拉伸為更接近常態分布，或處理非線性的指數關係。如果「屋齡」本來就與「房價」本來就呈現穩定的線性關係（例如每增加一年，房價固定減少 10 萬），強行套用非線性的對數轉換反而會扭曲並破壞這種單純的線性結構，導致線性或特定機器學習模型無法正確捕捉規律，進而使表現下降。其他選項的描述皆不符合統計與機器學習原理。",
        "ml_method": "對數轉換 (Log Transformation)",
        "ml_method_explanation": "對數轉換是資料前處理與特徵工程中極為常見的數學轉換技術。它主要被用來處理高度偏態（尤其是嚴重右偏）的資料分布。在現實世界中，許多變數如財富、人口、網站流量等往往呈現指數增長，導致極少數樣本擁有極端大的數值（長尾效應）。對數轉換能透過非線性地大幅壓縮巨大數值，並相對拉伸微小數值，強制將原本的分布修正得更趨近於對稱的常態分布，這對於依賴常態假設的線性模型或對極端值敏感的演算法來說至關重要。",
        "examples": [
          "在銀行業的客戶財富管理分析中，客戶存款餘額通常呈現極端右偏分布（少數富豪擁有極高存款）。資料科學家會對存款餘額進行對數轉換，使模型能更均勻地學習大眾階層的行為模式。",
          "在電子商務網站的流量分析中，熱門商品的點擊次數可能是冷門商品的數萬倍。套用對數轉換後，工程師能將點擊量的數量級差距平滑化，避免推薦系統因極端數值而陷入富者越富的偏見迴圈。"
        ],
        "comparison": "對數轉換(Log Transform)專精於處理具長尾效應的右偏分佈(如金額、距離、點擊量)，能將極端大值平滑化，對抗雜訊並協助模型捕捉潛在模式。相較之下，標準化(StandardScaler)或正規化(MinMaxScaler)僅進行線性的尺度縮放，不改變資料分佈的偏態形狀，目的在於統一特徵尺度以加速梯度下降。若特徵與目標變數已具備良好的線性關聯，強行套用非線性的對數轉換反而會弄巧成拙，破壞原有的預測結構。",
        "keywords": [
          "對數轉換 (Log Transformation)",
          "偏態分布 (Skewed Distribution)",
          "特徵工程 (Feature Engineering)",
          "長尾效應 (Long Tail Effect)",
          "線性關係 (Linear Relationship)"
        ],
        "extended_tech": [
          {
            "name": "分箱離散化 (Binning / Discretization)",
            "desc": "將連續型的數值變數（如年齡、收入）根據特定區間劃分為多個離散的類別區塊。這種轉換能賦予線性模型處理非線性關係的能力，同時極大地增強模型對極端離群值的抵抗力。"
          },
          {
            "name": "Box-Cox 轉換",
            "desc": "一種廣義的冪次轉換家族，透過最佳化演算法自動尋找一個參數 lambda，能將各種不同偏態程度的連續資料轉換為最接近標準常態分布的形狀，是對數轉換的終極進階版。"
          },
          {
            "name": "分位數轉換 (Quantile Transformer)",
            "desc": "一種強大的非線性轉換技術，透過將特徵的累積分配函數映射到均勻分布或常態分布上，能徹底消除任何形狀的偏態與極端離群值影響，在處理高度異常的感測器資料時十分有效。"
          }
        ],
        "terminology": [
          "右偏",
          "常態分布",
          "尺度縮放",
          "指數增長",
          "極端值"
        ]
      },
      {
        "id": 26,
        "question": "在時間序列資料的特徵工程中，工程師常使用滑動窗口（Sliding Window）方法，將過去多個時間點的觀測值組合為模型輸入。下列何者為此方法的主要目的？",
        "options": {
          "A": "資料增強；",
          "B": "去除資料雜訊；",
          "C": "降低特徵維度；",
          "D": "建立滯後特徵"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。滑動窗口方法在時間序列分析中，是將過去一系列時間點的資料切片作為特徵（滯後特徵 Lag Features），用以預測未來值。選項 (A) 資料增強通常是指對圖片或文本進行擴充；(B) 去除雜訊通常靠平滑濾波（如移動平均）；(C) 滑動窗口會將多個時間點展開為特徵，反而會增加特徵維度，故皆不正確。",
        "ml_method": "Sliding Window / Lag Features",
        "ml_method_explanation": "滑動窗口（Sliding Window）是一種將時序資料轉換為機器學習模型所需表格資料（Tabular Data）的核心特徵工程技術。其原理是設定一個固定長度的「窗口」，將窗口內的歷史觀測值截取出來作為輸入特徵（即滯後特徵），並將窗口後方的一個或多個時間點的值作為預測目標（Label）。隨後將窗口隨時間軸向右滑動一格，產生下一筆訓練樣本。這種機制讓原本無固定特徵數量的時間序列，轉變為可用於隨機森林、XGBoost、神經網路等監督式學習模型的標準格式，讓模型能學習歷史趨勢與未來狀態之間的映射關係。",
        "examples": [
          "智慧電網的負載預測：電力公司收集每 15 分鐘的用電量數據，透過過去 24 小時（96 個時間點）的滑動窗口產生滯後特徵，訓練模型預測未來 1 小時的用電尖峰，以預先調度發電機組。",
          "線上遊戲伺服器流量監控：運維團隊利用滑動窗口技術，收集過去 30 分鐘內每分鐘的玩家登入數與頻寬消耗，建立機器學習模型預測下 5 分鐘的流量變化，提前進行伺服器自動擴容，確保遊戲連線順暢。"
        ],
        "comparison": "滑動窗口（Sliding Window）主要用於將具有時間相依性的連續資料轉換為監督式學習所需的滯後特徵，讓傳統機器學習模型能處理時序資料；相比之下，資料增強（Data Augmentation）多用於影像或自然語言處理中，透過旋轉、翻轉或同義詞替換來擴充訓練樣本，不改變資料特徵維度；而移動平均（Moving Average）雖也使用窗口概念，但其目的是平滑化時序資料以消除短期波動雜訊，並非建立新特徵。滑動窗口常用於金融預測、庫存管理等需依賴歷史數據預測未來的業務場景。",
        "keywords": [
          "滑動窗口 (Sliding Window)",
          "滯後特徵 (Lag Features)",
          "時間序列 (Time Series)",
          "特徵工程 (Feature Engineering)",
          "監督式學習 (Supervised Learning)",
          "表格資料 (Tabular Data)"
        ],
        "extended_tech": [
          {
            "name": "長短期記憶網路 (Long Short-Term Memory, LSTM)",
            "desc": "一種擅長處理時間序列與長距離依賴的遞迴神經網路架構，廣泛應用於股價預測、自然語言翻譯及語音辨識等需要記憶歷史資訊的複雜業務場景中。"
          },
          {
            "name": "自迴歸積分滑動平均模型 (ARIMA)",
            "desc": "經典的時間序列預測統計模型，透過結合自迴歸、差分與移動平均來捕捉資料的線性趨勢與週期性，常用於銷售量預測與總體經濟指標分析。"
          },
          {
            "name": "時間卷積網路 (Temporal Convolutional Network, TCN)",
            "desc": "利用因果卷積與擴張卷積處理時序資料的神經網路架構，具有平行運算優勢與更長的記憶長度，適用於高頻交易數據分析及感測器訊號處理。"
          }
        ],
        "terminology": [
          "Lag Features",
          "Time Series Analysis",
          "Feature Engineering",
          "Tabular Data",
          "Moving Average"
        ]
      },
      {
        "id": 27,
        "question": "某工程師建立零售商品銷量預測模型，初期以第 1 至 52 週資料作為訓練集、第 53 週作為測試集（固定時間切分）。半年後重新評估，發現模型對最新資料（如第 80 週）的預測明顯衰退，推測為時間演進導致行為模式改變。若重新設計驗證策略，應採用下列哪種方法，使每次訓練皆基於最新時間區間資料？",
        "options": {
          "A": "K-fold 交叉驗證（K-fold Cross-Validation）；",
          "B": "分層 K-fold（Stratified K-fold）；",
          "C": "滾動窗口驗證（Rolling Window Validation / Time Series Split）；",
          "D": "留一驗證法（Leave-One-Out Cross-Validation）"
        },
        "answer": "C",
        "explanation": "正確答案為 (C)。對於具有時間相依性且可能隨時間發生概念漂移（Concept Drift）的資料，應使用滾動窗口驗證（Time Series Split）。此法確保模型總是用過去的資料預測未來的資料，並隨著時間推進不斷納入新資料進行重新訓練與驗證。(A)、(B)、(D) 會打亂時間順序或導致用未來的資料預測過去，發生資料洩漏（Data Leakage），不適合時間序列場景。",
        "ml_method": "Rolling Window Validation (Time Series Split)",
        "ml_method_explanation": "滾動窗口驗證（Rolling Window Validation）或稱時間序列交叉驗證，是專為時間序列資料設計的模型評估與訓練策略。傳統的交叉驗證會隨機打亂資料，但在時序資料中，隨機打亂會造成「使用未來數據預測過去」的資料洩漏問題。滾動窗口驗證強制維持時間的先後順序，將資料按時間切割為多個區塊。在第一折中，使用最舊的一段時間作為訓練集，緊接其後的一小段時間作為驗證集；在第二折中，訓練集會向後擴展或滑動，納入新的資料，再用更新後的下一個時間段進行驗證。這種做法完美模擬了模型在真實世界中定期收集新資料並重新訓練上線的過程，能準確評估模型應對時間演進與資料漂移的能力。",
        "examples": [
          "電子商務平台的商品推薦系統：隨著季節與流行趨勢改變，使用者的購買偏好也會改變。系統每天都會利用滾動窗口驗證策略，以過去 30 天的點擊與購買紀錄重新訓練模型，並在當天的新訪客上進行測試，確保推薦結果始終符合最新潮流。",
          "共享單車需求預測系統：車輛調度團隊建立預測模型來分配單車。因為天氣和假日的影響，需求模式會隨季節轉變。開發團隊採用滾動窗口驗證，每週以過去三個月的騎乘數據重新訓練模型，並驗證未來一週的預測準確率，以決定最佳的調度策略。"
        ],
        "comparison": "滾動窗口驗證（Rolling Window Validation）嚴格保持時間序列的先後順序，適用於金融預測、銷量預測等具備時間相依性及容易產生概念漂移的場景，以避免資料洩漏；相對於傳統的 K-fold 交叉驗證（K-fold Cross-Validation）和分層 K-fold（Stratified K-fold），這兩者在切分資料時會隨機打亂樣本順序，適合用於截面資料（Cross-sectional Data）如影像分類或無時序關聯的客戶流失預測，若誤用於時序資料則會導致模型利用未來資訊預測過去，產生不實的極高準確率。",
        "keywords": [
          "滾動窗口驗證 (Rolling Window Validation)",
          "時間序列交叉驗證 (Time Series Split)",
          "概念漂移 (Concept Drift)",
          "資料洩漏 (Data Leakage)",
          "驗證策略 (Validation Strategy)",
          "交叉驗證 (Cross-Validation)"
        ],
        "extended_tech": [
          {
            "name": "概念漂移檢測 (Concept Drift Detection)",
            "desc": "持續監控線上資料分佈與模型預測表現的技術，當發現資料特徵或目標關係隨時間發生顯著變化時，自動觸發模型重新訓練機制，廣泛應用於詐欺偵測與推薦系統。"
          },
          {
            "name": "增量學習 (Incremental Learning)",
            "desc": "一種讓機器學習模型能夠持續從新進資料中學習並更新權重，而不需要使用完整歷史資料重新訓練的技術，適合用於串流數據處理及資源受限的邊緣運算設備。"
          },
          {
            "name": "回溯測試 (Backtesting)",
            "desc": "在量化金融交易中廣泛使用的評估方法，利用歷史數據重構過去的市場環境，測試交易策略或預測模型在過去一段時間內的實際獲利能力與風險承受度。"
          }
        ],
        "terminology": [
          "Concept Drift",
          "Data Leakage",
          "K-fold Cross-Validation",
          "Stratified K-fold",
          "Time Series Split"
        ]
      },
      {
        "id": 28,
        "question": "某房仲平台要預測物件成交價，資料集含 50 個特徵，其中部分特徵與房價呈非線性關係，且業務單位要求模型須能提供整體特徵重要性以供稽核。下列哪一種模型選擇策略最符合需求？",
        "options": {
          "A": "使用羅吉斯迴歸（Logistic Regression），透過線性係數解釋特徵影響，但無法有效建模非線性關係；",
          "B": "使用隨機森林迴歸（Random Forest Regression），可處理非線性關係，並提供整體特徵重要性（Feature Importance）作為解釋依據；",
          "C": "用 K-means 分群（K-means Clustering）後分別建立迴歸模型，以提升預測準確度並間接提升可解釋性；",
          "D": "使用支持向量迴歸（Support Vector Regression, SVR），透過核函數（Kernel Function）捕捉非線性關係，並以支持向量解釋模型決策"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。隨機森林基於樹狀結構，能自然捕捉特徵與目標間的非線性關係及特徵交互作用，同時內建計算整體特徵重要性（如 Gini Importance 或 Permutation Importance）的功能，非常適合需要全局解釋性的業務需求。(A) 是線性模型且為分類用模型（迴歸應為 Linear Regression）；(C) 分群後建迴歸會使整體解釋變得破碎複雜；(D) SVR 雖然能處理非線性，但其核函數映射到高維空間後，極難直接提取出直觀的全域特徵重要性。",
        "ml_method": "Random Forest Regression",
        "ml_method_explanation": "隨機森林迴歸（Random Forest Regression）是一種基於集成學習（Ensemble Learning）中裝袋法（Bagging）的強大演算法。它由許多棵獨立的決策樹組成，每棵樹在訓練時都會隨機抽取部分訓練樣本（Bootstrap Sampling）以及部分特徵（Feature Subsampling）。在進行預測時，模型會將所有決策樹的預測結果進行平均，得出最終數值。隨機森林的優勢在於它不需要對資料分布做嚴格假設，能自動捕捉非線性關係，對異常值和共線性具有良好的容忍度。更重要的是，它能透過計算每個特徵在所有樹中用於節點分裂時所帶來的純度提升（或不純度下降）的平均值，提供直觀的「特徵重要性（Feature Importance）」，幫助業務人員理解哪些變數對預測最具影響力。",
        "examples": [
          "製造業的良率預測系統：工廠在晶片生產過程中收集了數百個機台參數（溫度、壓力、氣體流量等）。工程師使用隨機森林迴歸模型預測最終產品的良率，並透過輸出的特徵重要性報表，向產線主管指出哪三個關鍵溫度參數對良率波動影響最大，以便優先進行設備校正。",
          "物流公司的配送時間預測：物流系統需要預測包裹從集散中心送達客戶手中的時間。系統考量了距離、司機年資、天氣狀況、即時路況等多種特徵。透過隨機森林迴歸模型，不僅能給出精準的預計到達時間，營運團隊還能透過特徵重要性得知，在下雨天時「即時路況」特徵的權重會大幅提升，進而調整派車策略。"
        ],
        "comparison": "隨機森林迴歸（Random Forest Regression）憑藉其基於多棵決策樹的集成學習機制，非常擅長處理非線性特徵並天然提供直觀的全局特徵重要性，因此廣泛應用於房價預測、風險評分等需高度業務解釋性的場景；相反地，支持向量迴歸（SVR）雖透過核函數強大地捕捉非線性特徵，但由於其將資料映射至難以直觀理解的高維空間，難以萃取直接的特徵重要性；而羅吉斯迴歸（Logistic Regression）雖解釋性極佳，但僅能處理線性關係且為分類模型，面對複雜非線性業務需求時常顯得力有未逮。",
        "keywords": [
          "隨機森林迴歸 (Random Forest Regression)",
          "非線性關係 (Non-linear Relationship)",
          "特徵重要性 (Feature Importance)",
          "集成學習 (Ensemble Learning)",
          "裝袋法 (Bagging)",
          "模型可解釋性 (Model Interpretability)"
        ],
        "extended_tech": [
          {
            "name": "極端梯度提升 (XGBoost)",
            "desc": "基於提升法（Boosting）的樹狀集成演算法，相較於隨機森林能更精細地逐步修正前一棵樹的預測誤差，在許多 Kaggle 數據科學競賽的表格資料任務中表現極為優異。"
          },
          {
            "name": "排列特徵重要性 (Permutation Feature Importance)",
            "desc": "一種模型無關的可解釋性技術，透過隨機打亂單一特徵的資料順序並觀察模型預測準確率的下降幅度，來客觀評估該特徵對整體預測效能的真實貢獻度。"
          },
          {
            "name": "部分依賴圖 (Partial Dependence Plot, PDP)",
            "desc": "一種視覺化技術，用於展示單一或兩個特徵在邊際上對機器學習模型預測結果的具體影響趨勢，幫助業務人員了解變數間的非線性關係與交互作用。"
          }
        ],
        "terminology": [
          "Feature Importance",
          "Random Forest",
          "Logistic Regression",
          "Support Vector Regression (SVR)",
          "Kernel Function"
        ]
      },
      {
        "id": 29,
        "question": "某工廠設備監測系統需偵測馬達軸承的異常振動，但過去僅記錄了大量正常運作的振動時序資料，缺乏任何已確認故障的標註樣本。請問下列何種任務範疇最符合此情境下的異常偵測需求？",
        "options": {
          "A": "監督式二元分類（Supervised Binary Classification）；",
          "B": "非監督或半監督異常偵測（Unsupervised / Semi-supervised Anomaly Detection）；",
          "C": "強化學習（Reinforcement Learning）；",
          "D": "自監督學習（Self-supervised Learning）"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。由於資料集中缺乏故障（異常）樣本的標籤，無法進行監督式學習（A）。此時只能利用大量正常樣本來建立「正常狀態」的基線模型（如 One-Class SVM、Autoencoder），當新資料偏離此基線過大時即判斷為異常，這屬於非監督或半監督異常偵測（Semi-supervised Anomaly Detection，通常指僅用正常樣本訓練）的範疇。(C) 用於決策與控制；(D) 用於從無標籤資料中學習表徵，與直接做異常偵測的任務定位較不直接相關。",
        "ml_method": "Semi-supervised Anomaly Detection",
        "ml_method_explanation": "非監督/半監督異常偵測（Unsupervised/Semi-supervised Anomaly Detection）主要應對標籤極度稀缺或完全沒有異常標籤的情境。在此方法中，模型（如 One-Class SVM、Isolation Forest 或基於重建誤差的 Autoencoder）僅透過學習大量正常（Normal）樣本的分布特徵、邊界或結構。模型訓練完成後，當輸入一筆新的資料時，模型會評估這筆資料與已知「正常模式」的相似度或距離。若新資料落在正常邊界之外，或在 Autoencoder 中產生了極大的重建誤差（Reconstruction Error），系統就會將其標記為「異常」。這種方法非常適合工業界中「設備多數時候皆正常運作，且故障種類未知或難以收集」的真實情況。",
        "examples": [
          "銀行信用卡的盜刷防範系統：由於新的盜刷手法層出不窮，銀行難以收集到所有種類的盜刷樣本。系統改為對每位客戶長期的「正常消費行為」（如消費金額、地點、頻率）建立半監督異常偵測模型，一旦某筆交易的特徵嚴重偏離該客戶的正常基線（例如突然在海外大額消費），系統便會立刻觸發警報並凍結交易。",
          "IT 基礎設施的網路入侵偵測：企業內網每天有海量的正常連線流量，而駭客攻擊的特徵往往是未知的。資安團隊使用 Autoencoder 模型學習正常辦公時段的網路封包特徵，當遇到未知的零日攻擊（Zero-day attack）導致網路行為模式改變時，模型會因為無法順利重建封包特徵而產生高誤差，進而向管理員發出遭受攻擊的警告。"
        ],
        "comparison": "半監督異常偵測（Semi-supervised Anomaly Detection）專門處理只有大量正常資料而極度缺乏異常標籤的場景，透過學習正常狀態的邊界來識別未知偏差，常應用於工業機台預測性維護、罕見網路攻擊偵測等領域；相對而言，監督式二元分類（Supervised Binary Classification）則需要包含正常與異常兩類大量且均衡的明確標籤資料才能訓練，這在真實工業環境中往往難以達成；自監督學習（Self-supervised Learning）雖也不需人工標籤，但其主要目的是利用資料本身的結構學習通用的特徵表徵以輔助下游任務，而非直接用於判斷資料是否為異常點。",
        "keywords": [
          "半監督異常偵測 (Semi-supervised Anomaly Detection)",
          "非監督學習 (Unsupervised Learning)",
          "基線模型 (Baseline Model)",
          "重建誤差 (Reconstruction Error)",
          "資料不平衡 (Data Imbalance)",
          "設備監測 (Equipment Monitoring)"
        ],
        "extended_tech": [
          {
            "name": "單類支持向量機 (One-Class SVM)",
            "desc": "一種經典的半監督異常偵測演算法，利用核函數將正常資料映射到高維特徵空間，並尋找一個能將所有正常樣本包絡在內的最小超球面邊界，邊界外即視為異常。"
          },
          {
            "name": "孤立森林 (Isolation Forest)",
            "desc": "基於樹狀結構的集成演算法，透過隨機選擇特徵與切分點來孤立樣本。因為異常樣本數量少且特徵獨特，它們會在決策樹的較淺層被快速孤立出來，從而實現高效的異常偵測。"
          },
          {
            "name": "自編碼器 (Autoencoder)",
            "desc": "一種無監督的神經網路架構，透過先將輸入資料壓縮降維再嘗試重建還原。當模型只用正常資料訓練後，遇到異常資料時會因為難以壓縮而產生極高的重建誤差，藉此判定異常。"
          }
        ],
        "terminology": [
          "Supervised Binary Classification",
          "Unsupervised Anomaly Detection",
          "Self-supervised Learning",
          "Reconstruction Error",
          "One-Class SVM"
        ]
      },
      {
        "id": 30,
        "question": "某信用風險模型：訓練AUC=0.97、驗證 AUC=0.72、少數違約樣本預測波動極大及不同 K-fold 切分結果差異明顯。下列何者為最可能的問題？",
        "options": {
          "A": "高偏差；",
          "B": "高變異；",
          "C": "過擬合；",
          "D": "資料漂移"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。訓練 AUC 極高而驗證 AUC 偏低是典型的過擬合（Overfitting）特徵，過擬合在統計學習理論中對應的即是模型具有「高變異（High Variance）」，這會導致模型對訓練資料中的微小雜訊過於敏感，使不同資料切分下的表現極不穩定。(A) 高偏差代表訓練和驗證表現都很差；(C) 選項 B 的「高變異」更直接地描述了題幹中「波動極大」與「不同切分差異明顯」的統計現象，且在選項中為更精確的根本原因；(D) 資料漂移發生在時間維度上的部署階段，而非交叉驗證階段。",
        "ml_method": "Bias-Variance Tradeoff (High Variance)",
        "ml_method_explanation": "偏差-變異權衡（Bias-Variance Tradeoff）是機器學習模型評估的核心理論。其中，「高變異（High Variance）」指的是模型過度複雜，學習能力過強，導致它把訓練資料中的隨機雜訊或特例（Outliers）也當作了一般規律來學習。這會造成模型在訓練集上表現極佳（如訓練誤差極低、AUC極高），但面對未曾見過的測試資料時，表現會大幅滑落。此外，高變異的模型非常不穩定，只要訓練資料稍微改變（例如在 K-fold 交叉驗證中使用了不同的資料子集），模型學習到的參數和最終的預測結果就會產生劇烈波動。解決高變異的常見方法包含：增加訓練資料、使用正則化（Regularization）技術、減少模型特徵，或改用集成學習演算法。",
        "examples": [
          "醫學影像的罕見疾病診斷：一個深度極深的卷積神經網路被用來辨識罕見的視網膜病變。因為病變樣本極少，模型在訓練集達到了 99% 的準確率，但醫生發現只要稍微改變圖片的亮暗或旋轉角度，模型就會給出完全不同的診斷結果，顯示模型具有極高的變異，缺乏臨床實用性。",
          "房地產市場的精準定價系統：一位房仲使用了一棵沒有限制深度的決策樹來預測房價，特徵包含房屋的經緯度精確到小數點後六位。模型在訓練資料上的預測誤差幾乎為零，但將模型部署到新開發的社區時，預測價格忽高忽低極度不合理。團隊後來發現，模型過度記住了舊社區每棟房子的確切位置（高變異），而沒有學到影響房價的通用特徵。"
        ],
        "comparison": "高變異（High Variance）代表模型過度複雜，極端捕捉了訓練集內的特例雜訊，導致預測極度不穩定，對新資料泛化能力差，常見於過擬合的深層決策樹或參數過多的神經網路，需藉由正則化技術來修補；相對地，高偏差（High Bias）代表模型過於簡單（如用線性迴歸預測複雜非線性現象），根本無法有效學習資料中的特徵規律，導致訓練與驗證表現都極差，此時需要增加特徵或選擇更強大的演算法。資料漂移（Data Drift）則是指隨著時間推移，真實世界資料分佈發生改變而導致模型效能衰退，與交叉驗證期間的高變異現象在本質上有顯著差異。",
        "keywords": [
          "高變異 (High Variance)",
          "過度擬合 (Overfitting)",
          "偏差-變異權衡 (Bias-Variance Tradeoff)",
          "交叉驗證 (Cross-Validation)",
          "模型穩定度 (Model Stability)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "正則化技術 (Regularization Techniques)",
            "desc": "在模型的損失函數中加入對權重大小的懲罰項（如 L1 Lasso 或 L2 Ridge），以抑制模型過度依賴特定特徵，強迫模型學習更平滑、抗雜訊的規律，是降低高變異的有效手段。"
          },
          {
            "name": "裝袋法集成學習 (Bagging Ensemble)",
            "desc": "如隨機森林演算法，透過結合多個獨立且在隨機子集上訓練的基底模型預測結果進行平均，能有效抵消單一模型的高變異波動，大幅提升預測的穩定性與泛化能力。"
          },
          {
            "name": "學習曲線分析 (Learning Curve Analysis)",
            "desc": "透過視覺化繪製模型在不同資料量下訓練誤差與驗證誤差的變化趨勢圖，幫助資料科學家直觀診斷當前模型是處於高變異（兩曲線差距大）還是高偏差（兩曲線收斂但誤差皆高）的狀態。"
          }
        ],
        "terminology": [
          "High Variance",
          "High Bias",
          "Overfitting",
          "Data Drift",
          "Bias-Variance Tradeoff"
        ]
      },
      {
        "id": 31,
        "question": "某倉儲自動化公司以強化學習（Reinforcement Learning, RL）訓練機器手臂進行揀貨，獎勵函數設計為「每成功抓取一個貨品得+1 分」。部署後發現機器手臂學會反覆放開再抓取同一物品，以累積分數，但實際完成任務的效率極低。請問此現象的核心問題為何？應如何修正獎勵設計？",
        "options": {
          "A": "獎勵塑形（Reward Shaping）：將獎勵改為「成功完成一次揀貨任務」而非單次抓取行為；",
          "B": "策略退化（Policy Degradation）：降低學習率以穩定訓練；",
          "C": "信用分配問題（Credit Assignment Problem）：引入優勢函數（Advantage Function）；",
          "D": "災難性遺忘（Catastrophic Forgetting）：加入經驗回放（Replay Buffer）"
        },
        "answer": "A",
        "explanation": "正確答案為 (A)。機器手臂學會「反覆放開再抓取以刷分數」的行為，在強化學習中被稱為「獎勵作弊（Reward Hacking）」，這源於獎勵函數設計不良，導致 AI 找到了符合獎勵規則但違背人類期望的捷徑。解決這個問題的核心方法是「獎勵塑形（Reward Shaping）」，必須重新定義獎勵目標，將獎勵綁定在最終期望的結果上（例如：將物品成功放入指定籃子），或者加入時間懲罰，才能引導模型學習真正有效率的完成任務。",
        "ml_method": "Reward Shaping (Reinforcement Learning)",
        "ml_method_explanation": "獎勵塑形（Reward Shaping）是強化學習（Reinforcement Learning）領域中設計環境反饋機制的關鍵技術。在強化學習中，智能體（Agent）唯一的目標就是最大化其累積的獎勵值。如果給予的獎勵太過稀疏（Sparse Reward，例如只有走到終點才給分），智能體可能永遠學不會；但如果給予密集的子任務獎勵，智能體又極度容易找到漏洞來「作弊（Reward Hacking）」，做出非預期行為。獎勵塑形的藝術在於設計出既能提供足夠指引幫助智能體學習，又嚴格對齊人類最終目標（Alignment）的獎勵函數。常見的手法包含將獎勵與最終任務完成度掛鉤、加入時間衰減懲罰（鼓勵快速完成），或是引入位能函數（Potential-based Reward Shaping）以在數學上保證最優策略不被改變的情況下加速收斂。",
        "examples": [
          "自動駕駛汽車的行為訓練：如果設計師僅設定「前進一公尺得 1 分」的獎勵，AI 汽車可能會學會在安全的路段無限繞圈子以獲取無限分數。工程師必須進行獎勵塑形，將獎勵改為「安全抵達目的地」給予大獎勵，並對「行駛時間」與「違規行為」給予扣分懲罰，引導其安全直達目標。",
          "遊戲 NPC 的戰鬥 AI 開發：在射擊遊戲中，若給予 NPC 「每次擊中玩家得 10 分」的獎勵，NPC 為了最大化分數，可能會故意不擊殺玩家，而是使用低傷害武器不斷射擊玩家的手腳來反覆刷分。開發團隊必須修改獎勵塑形，改為「成功擊敗玩家」才給予高分，從而訓練出具有真實戰術思維的敵人。"
        ],
        "comparison": "獎勵塑形（Reward Shaping）專注於透過重新設計環境的回饋機制來避免 AI 產生「獎勵作弊（Reward Hacking）」，促使智能體達成人類期望的最終目標，是強化學習在機器人控制與遊戲 AI 中不可或缺的技術；相對而言，信用分配問題（Credit Assignment Problem）探討的是在長期的決策過程中，如何正確評估哪一個早期行動對最終的勝利或失敗有決定性影響；而災難性遺忘（Catastrophic Forgetting）則是指神經網路在學習新任務時，瞬間忘記舊任務知識的問題，通常需依賴經驗回放等架構層面技術解決，與獎勵機制的設計不當截然不同。",
        "keywords": [
          "獎勵塑形 (Reward Shaping)",
          "強化學習 (Reinforcement Learning)",
          "獎勵作弊 (Reward Hacking)",
          "價值對齊 (Value Alignment)",
          "稀疏獎勵 (Sparse Reward)",
          "智能體 (Agent)"
        ],
        "extended_tech": [
          {
            "name": "基於位能的獎勵塑形 (Potential-based Reward Shaping)",
            "desc": "一種在數學上被證明能保證不改變最優策略（Optimal Policy）的獎勵調整技術，透過為每個狀態定義一個潛在價值位能，引導 AI 快速探索有效路徑而不會學到作弊行為。"
          },
          {
            "name": "逆向強化學習 (Inverse Reinforcement Learning, IRL)",
            "desc": "當設計完美的獎勵函數極度困難時，直接讓 AI 觀察人類專家的行為示範，並從這些示範數據中反向推導出潛在的獎勵函數，廣泛應用於複雜的自動駕駛軌跡學習。"
          },
          {
            "name": "人類回饋強化學習 (RLHF)",
            "desc": "大型語言模型（如 ChatGPT）對齊人類價值觀的核心技術，先利用人類標註員對模型輸出的回答進行品質排序，訓練出一個獎勵模型，再利用此模型指導 LLM 的微調訓練。"
          }
        ],
        "terminology": [
          "Reward Shaping",
          "Reward Hacking",
          "Credit Assignment Problem",
          "Catastrophic Forgetting",
          "Reinforcement Learning"
        ]
      },
      {
        "id": 32,
        "question": "某詐欺偵測模型需同時具備高精確率（Precision），以避免誤凍結正常帳號，並維持高召回率（Recall）表現，以確保不放過任何詐欺行為。然而工程師發現兩者之間存在取捨關係（Precision-Recall Tradeoff）。在此情境下，F1-score 最能反映何種特性？",
        "options": {
          "A": "F1-score = (Precision + Recall) / 2，為算術平均；",
          "B": "F1-score 為 Precision 的加權平均；",
          "C": "F1-score 僅適用於類別平衡資料；",
          "D": "F1-score = 2 × (Precision×Recall)/(Precision+Recall)，為調和平均，對較小值敏感"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。F1-score 的定義是 Precision 與 Recall 的調和平均數（Harmonic Mean）。算術平均數容易受到極端大值的影響，而調和平均數的數學特性是對「較小的值」特別敏感。也就是說，只有當 Precision 和 Recall 都很高時，F1-score 才會高；如果其中一個指標非常低（例如 Precision = 1.0，但 Recall = 0.01），F1-score 就會被拉低。這使其成為在 Precision-Recall 兩難取捨中，評估模型綜合表現的極佳指標。",
        "ml_method": "F1-score / Harmonic Mean",
        "ml_method_explanation": "F1-score 是機器學習分類任務中，特別是面對不平衡資料集時，最常被用來評估模型綜合效能的指標。它由精確率（Precision：預測為正樣本中，真正為正樣本的比例）和召回率（Recall：所有真實正樣本中，被模型正確找出來的比例）構成。在實務上，若放寬判定標準，召回率會上升但精確率會下降，反之亦然。F1-score 巧妙地採用了這兩個指標的「調和平均（Harmonic Mean）」：2 × (Precision × Recall) / (Precision + Recall)。調和平均的數學特性是「強烈懲罰極端低值」，這意味著模型不能靠犧牲其中一項來換取另一項的高分，必須讓 Precision 和 Recall 兩者都保持在一定水準，才能獲得較高的 F1-score，從而確保模型具備均衡的實用價值。",
        "examples": [
          "工廠生產線的瑕疵品檢測：若只追求高 Recall，會把許多正常品誤判為瑕疵，增加人工複檢成本；若只追求高 Precision，則會漏放真正的瑕疵品出廠，引發客訴。工程師使用 F1-score 作為核心指標來微調模型的決策門檻，找出攔截瑕疵與降低誤判之間最具成本效益的平衡點。",
          "垃圾郵件過濾系統：如果系統為了保證完全不漏掉任何垃圾信（高 Recall），可能會把大量重要工作郵件也丟進垃圾桶，這對使用者的傷害遠大於漏信。開發團隊會利用 F1-score 或更偏重 Precision 的 F-beta score 來評估系統效能，確保在有效攔截垃圾郵件的同時，極力避免正常信件被誤殺的情況。"
        ],
        "comparison": "F1-score 透過調和平均（Harmonic Mean）同時兼顧精確率（Precision）與召回率（Recall），強烈懲罰偏科極端的預測結果，是評估信用卡盜刷、醫療罕病偵測等高度不平衡資料（Imbalanced Data）的黃金指標；相比之下，傳統的準確率（Accuracy）在不平衡資料中會被多數類別的預測結果嚴重誤導，例如一個全猜「無病」的模型在罕病資料中仍有 99% 的準確率，但毫無醫療價值；而 ROC AUC 雖也能評估不平衡資料，但 F1-score 更直接關注在少數的「正樣本」上的綜合決策品質，適合當正樣本極具商業價值時作為優化目標。",
        "keywords": [
          "F1-score",
          "精確率 (Precision)",
          "召回率 (Recall)",
          "調和平均 (Harmonic Mean)",
          "資料不平衡 (Imbalanced Data)",
          "權衡 (Trade-off)"
        ],
        "extended_tech": [
          {
            "name": "F-beta 分數 (F-beta Score)",
            "desc": "F1-score 的廣義變體，允許使用者透過調整 beta 值來給予 Precision 或 Recall 不同的權重。例如在癌症篩檢中，漏診代價極高，便可設定 beta > 1 以賦予 Recall 更大的權重評估模型效能。"
          },
          {
            "name": "精確-召回曲線 (Precision-Recall Curve, PR Curve)",
            "desc": "在不同的分類閾值下繪製 Precision 與 Recall 關係變化的圖表，在面對極度不平衡的資料集時，分析 PR 曲線下的面積（AUC-PR）比傳統 ROC 曲線更能真實反映模型的優劣。"
          },
          {
            "name": "最佳決策閾值搜尋 (Threshold Optimization)",
            "desc": "在模型給出預測機率後，根據業務場景的具體成本（如誤報成本與漏報損失），利用 F1-score 或自定義成本函數，動態尋找最符合商業利益的分類判定門檻（Threshold）。"
          }
        ],
        "terminology": [
          "F1-score",
          "Precision",
          "Recall",
          "Harmonic Mean",
          "Precision-Recall Tradeoff"
        ]
      },
      {
        "id": 33,
        "question": "某工程師的多元線性迴歸模型包含 150 個特徵，其中許多特徵高度相關（如「建坪」與「總面積」）。他同時希望控制過擬合且保留所有特徵的解釋能力，不讓任何特徵係數歸零，下列哪一項正則化方案最適當？",
        "options": {
          "A": "Lasso 迴歸（L1 正則化）：透過絕對值懲罰使部分係數歸零，具有特徵選擇效果；",
          "B": "Ridge 迴歸（L2 正則化）：透過平方懲罰縮小所有係數，在共線性下穩定估計且不歸零；",
          "C": "Elastic Net（L1+L2）：結合稀疏性與穩定性，但部分係數仍可能被壓為0；",
          "D": "無正則化的 OLS 迴歸：不控制過擬合，在共線性下係數估計不穩定"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。Ridge 迴歸（L2 正則化）會在損失函數中加入係數平方和的懲罰項。這個懲罰項會將所有特徵的係數壓縮變小，但不會強制壓縮到絕對的 0。這非常適合處理高度相關（多重共線性）的特徵，它會讓高度相關特徵的係數平均分攤，從而穩定模型估計，並且符合題目「保留所有特徵解釋能力，不讓特徵歸零」的需求。(A) Lasso 和 (C) Elastic Net 都包含 L1 懲罰，會產生稀疏解導致部分係數歸零。",
        "ml_method": "Ridge Regression (L2 Regularization)",
        "ml_method_explanation": "Ridge 迴歸（嶺迴歸）是改良傳統線性迴歸的一種正規化（Regularization）技術。當資料中存在多重共線性（即特徵之間高度相關）或特徵數量接近甚至多於樣本數時，傳統最小平方法（OLS）計算出的權重係數會變得極不穩定且數值巨大，導致嚴重的過擬合。Ridge 迴歸透過在目標損失函數中加上一個懲罰項——所有權重係數的平方和（L2 範數）乘以一個常數 alpha。這個機制會迫使演算法在優化過程中，將係數值壓縮（Shrinkage）到接近零的平滑狀態。與 Lasso（L1 正規化）不同的是，L2 懲罰是平滑連續的，它會將重要性均攤給高度相關的特徵群，而不會將任何係數完全壓縮為 0，因此能完整保留所有變數參與預測，提升模型面對新資料時的穩定性。",
        "examples": [
          "宏觀經濟預測模型：經濟學家建立模型預測明年 GDP 成長率，輸入了「失業率」、「消費者物價指數(CPI)」、「核心通膨率」等數十個總體經濟指標。這些指標之間具有強烈的連動與高度相關性（共線性）。使用 Ridge 迴歸可以穩定模型參數，避免某個單一指標權重暴增，並保留所有指標在經濟報告中的解釋力。",
          "行銷通路成效歸因分析：一家零售商在 Facebook、Instagram、Google Search、聯播網等多個渠道投放廣告，由於廣告往往是同步啟動，各渠道的曝光量高度相關。資料科學家使用 Ridge 迴歸來評估各渠道對最終銷售額的貢獻度，不僅能防止模型因為共線性而給出極端的負貢獻，還能確保每個有花費的渠道都能獲得合理的投資報酬率（ROI）權重估計。"
        ],
        "comparison": "Ridge 迴歸（L2 正則化）透過平方懲罰縮小模型權重，專注於解決特徵間的多重共線性問題，且保留所有特徵以供後續業務解釋，非常適合變數間高度相關的經濟學與行銷分析；與之相對的 Lasso 迴歸（L1 正則化）則透過絕對值懲罰產生「稀疏解」，會強迫將不重要或高度相關特徵群中的某些係數直接歸零，內建了自動化特徵選擇的功能，適用於生物基因數據中找出關鍵少數因子的場景；而 Elastic Net 則是兩者的折衷方案，同時保留了特徵選擇與共線性穩定處理的優點，但依然會讓部分係數歸零，不符合保留所有特徵的需求。",
        "keywords": [
          "Ridge迴歸 (Ridge Regression)",
          "L2正則化 (L2 Regularization)",
          "多重共線性 (Multicollinearity)",
          "過度擬合 (Overfitting)",
          "權重衰減 (Weight Decay)",
          "線性迴歸 (Linear Regression)"
        ],
        "extended_tech": [
          {
            "name": "套索迴歸 (Lasso Regression / L1 Regularization)",
            "desc": "在損失函數中加入權重絕對值和的懲罰項，促使模型演算法在訓練過程中將許多不重要特徵的係數壓縮至完全為零，是一種極度強大且內建的特徵選擇技術。"
          },
          {
            "name": "彈性網迴歸 (Elastic Net)",
            "desc": "巧妙結合 L1 與 L2 正則化懲罰項的演算法，既能像 Lasso 一樣過濾掉無用特徵產生稀疏矩陣，又具備 Ridge 處理高度相關特徵群時的穩定性，實務應用彈性極高。"
          },
          {
            "name": "變異數膨脹因子檢定 (Variance Inflation Factor, VIF)",
            "desc": "在建立迴歸模型前的關鍵統計前處理步驟，用來量化檢測各個自變數之間是否存在嚴重多重共線性。當特定變數的 VIF 值過高時，分析師可決定將其剔除或改用 Ridge 迴歸處理。"
          }
        ],
        "terminology": [
          "Lasso Regression",
          "Ridge Regression",
          "Elastic Net",
          "L1 Regularization",
          "L2 Regularization"
        ]
      },
      {
        "id": 34,
        "question": "某工程師使用 XGBoost 模型進行調參，需對以下超參數進行網格搜尋（Grid Search）：learning_rate（3 個候選值）、max_depth（4 個）、n_estimators（5 個）、subsample（3 個）、colsample_bytree（3 個）。每組參數組合皆需完整進行5-Fold交叉驗證。請問總共需要訓練幾個模型？",
        "options": {
          "A": "3 + 4 + 5 + 3 + 3 = 18 個；",
          "B": "5 × 5 = 25 個；",
          "C": "max(3,4,5,3,3) × 5 = 25 個；",
          "D": "3 × 4 × 5 × 3 × 3 × 5 = 2,700 個"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。網格搜尋（Grid Search）會窮舉所有指定的超參數組合。此例中超參數的組合總數為 3 × 4 × 5 × 3 × 3 = 540 種。因為每一種組合都必須進行 5-Fold 交叉驗證，這意味著每個組合要訓練 5 次模型。因此總訓練次數為 540 × 5 = 2,700 個模型。這凸顯了網格搜尋在超參數空間廣泛時會產生巨大的運算成本。",
        "ml_method": "Grid Search Cross-Validation",
        "ml_method_explanation": "網格搜尋（Grid Search）是一種極為經典且直觀的機器學習超參數最佳化（Hyperparameter Optimization）技術。在模型訓練前，開發者需事先定義好各個超參數（如決策樹深度、學習率等）的可能候選值列表。網格搜尋會像在多維空間中畫網格一樣，透過笛卡爾積（Cartesian Product）列舉出所有可能的參數組合。為了客觀評估每一組參數的效果，通常會搭配 K-Fold 交叉驗證，將訓練資料切分為 K 份，重複訓練與驗證 K 次求取平均表現。網格搜尋的優點是能夠保證找出定義空間內的全局最佳解，但缺點是其時間複雜度呈指數級成長（維度詛咒），當特徵或候選值過多時，計算成本極端高昂，此時實務上常改用隨機搜尋（Random Search）或貝氏最佳化（Bayesian Optimization）來取代。",
        "examples": [
          "基因體數據的癌症亞型分類：生物資訊研究員使用支持向量機（SVM）分類不同癌症亞型。為了達到最高準確率，他們利用網格搜尋窮舉測試不同的核函數（Kernel）、正則化參數（C）與核係數（Gamma），並透過交叉驗證確保模型在稀有的基因特徵上不會過擬合，最終找到最穩定的診斷參數。",
          "演算法交易策略回測：量化交易員在開發均線交叉策略時，需要決定「短期均線天數」和「長期均線天數」的最佳設定。他們透過網格搜尋，將短均線設為 5 到 20 天，長均線設為 60 到 120 天，對過去十年的歷史股價進行窮舉回測，找出在歷史資料中夏普值（Sharpe Ratio）最高的參數組合上線交易。"
        ],
        "comparison": "網格搜尋（Grid Search）是透過窮舉所有參數組合來尋找全局最佳超參數的策略，優勢是保證不遺漏定義空間內的任何可能性，但當參數空間維度增加時會面臨指數級的運算災難；與之相對，隨機搜尋（Random Search）在巨大參數空間中隨機挑選有限組合作測試，在實務上往往能以極小的計算成本找到足夠優秀甚至接近最佳解的配置，適用於高維度深度學習調參；而更先進的貝氏最佳化（Bayesian Optimization）則是利用歷史評估結果建立代理模型，智慧地推測下一個最值得測試的參數點，大幅降低了昂貴的模型訓練次數。",
        "keywords": [
          "網格搜尋 (Grid Search)",
          "超參數最佳化 (Hyperparameter Optimization)",
          "交叉驗證 (Cross-Validation)",
          "窮舉法 (Exhaustive Search)",
          "運算成本 (Computational Cost)",
          "維度詛咒 (Curse of Dimensionality)"
        ],
        "extended_tech": [
          {
            "name": "隨機搜尋最佳化 (Random Search Optimization)",
            "desc": "在預先定義的超參數分佈空間中，隨機抽取指定次數的參數組合進行訓練與評估，已被證實當部分超參數對模型影響微弱時，能比網格搜尋更有效率地探索關鍵超參數空間。"
          },
          {
            "name": "貝氏最佳化 (Bayesian Optimization)",
            "desc": "一種基於機率模型的智慧調參技術，利用高斯過程（Gaussian Process）分析過去參數組合的表現，計算出期望改善度（Expected Improvement），有策略地挑選下一次訓練參數，大幅節省算力。"
          },
          {
            "name": "Hyperband 自動調參演算法",
            "desc": "結合隨機搜尋與提早停止（Early Stopping）機制的高階資源分配演算法。它會同時訓練大量隨機參數配置，但在極短的迭代後淘汰表現最差的一半，將算力集中於最有潛力的模型參數上。"
          }
        ],
        "terminology": [
          "Grid Search",
          "Random Search",
          "Bayesian Optimization",
          "Hyperparameter Tuning",
          "K-Fold Cross-Validation"
        ]
      },
      {
        "id": 35,
        "question": "某團隊使用 LoRA 微調大型語言模型進行法律摘要任務，發現模型在複雜條款的摘要上常出現內容遺漏，但 GPU 顯存已接近上限。下列哪種調整方式最能在不明顯增加記憶體使用的前提下改善模型表現？",
        "options": {
          "A": "提高 LoRA rank 以增強模型表達能力；",
          "B": "改用完整微調（Full Fine-tuning）以學習更多細節；",
          "C": "降低 LoRA rank 以釋放記憶體並增加 Batch Size；",
          "D": "降低 LoRA rank 但套用到更多層，保持 trainable 總參數不變"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。LoRA 透過注入低秩矩陣（Low-Rank Adaptation）來微調模型。當發現模型在複雜任務表現不佳時，通常是因為可訓練參數或覆蓋範圍不足。(A) 提高 rank 會直接增加參數與顯存消耗；(B) 完整微調會耗盡 GPU 顯存；(C) 雖然釋放了記憶體，但降低 rank 會削弱模型的表達能力，無助於解決內容遺漏。選項 (D) 策略性地降低每個層的 rank（減少單層參數），並將省下的參數額度配置到更多不同的 Transformer 層（如同時微調 Attention 的 Q, K, V, O 矩陣或 MLP 層），這能在不增加總體顯存消耗的情況下，讓模型在更廣泛的語意特徵空間進行適應，有效提升複雜任務表現。",
        "ml_method": "LoRA (Low-Rank Adaptation)",
        "ml_method_explanation": "LoRA（Low-Rank Adaptation）是目前大型語言模型（LLM）最主流的參數高效微調（PEFT）技術之一。在微調百億或千億參數的 LLM 時，傳統完整微調（Full Fine-tuning）需要更新所有權重，這會消耗極其龐大的 GPU 顯存來儲存優化器狀態與梯度。LoRA 的核心思想基於「模型的內部權重變化具有低秩（Low-Rank）特性」。它在微調時凍結原始預訓練模型的權重，並在神經網路旁並聯注入兩個小型的低秩矩陣（通常為降維矩陣 A 與升維矩陣 B）。訓練時只更新這兩個小矩陣，推論時再將其相乘後的結果疊加回原權重矩陣。這種方法能將可訓練參數減少上萬倍，大幅降低顯存需求，使得在單張消費級顯卡上微調 GPT-3 級別的模型成為可能，且效能幾乎與完整微調相當。",
        "examples": [
          "企業專屬客服機器人開發：一家中小企業希望將開源的 Llama 模型改造成具備其公司產品知識的客服助理。由於缺乏昂貴的 GPU 叢集，工程師採用 LoRA 技術，僅微調模型中約 1% 的參數，就在單張 RTX 4090 顯示卡上成功讓模型學會了公司產品規格與客氣的回覆語氣。",
          "醫療病歷輔助生成系統：醫院希望開發能自動將醫生口述轉換為標準結構化病歷的 AI。考量到病患隱私，資料無法送上雲端，只能在醫院內部的邊緣伺服器運算。技術團隊使用 LoRA 技術在有限的硬體資源下，針對醫學專有名詞與特定格式對開源模型進行微調，快速部署了符合法規的內部輔助系統。"
        ],
        "comparison": "LoRA 是一種參數高效微調技術，透過凍結主模型權重並附加低秩矩陣進行訓練，在維持原有模型知識的同時，極大化地減少了微調 LLM 所需的 GPU 記憶體，非常適合資源受限的企業部署特定領域任務；相反地，完整微調（Full Fine-tuning）需更新所有龐大參數，動輒需要高階資料中心叢集，雖學習細節最為透徹但成本驚人且容易發生災難性遺忘。另有 P-Tuning 或 Prompt Tuning，是在輸入層加入可訓練的連續提示詞向量，這類方法記憶體耗用更低，但在處理極度複雜的邏輯推演（如長篇法律摘要）時，其表現上限與泛化能力往往不如 LoRA 的架構層次調整。",
        "keywords": [
          "低秩適應 (LoRA)",
          "參數高效微調 (PEFT)",
          "大型語言模型 (LLM)",
          "GPU顯存 (VRAM)",
          "矩陣分解 (Matrix Factorization)",
          "微調 (Fine-tuning)"
        ],
        "extended_tech": [
          {
            "name": "QLoRA (Quantized LoRA)",
            "desc": "將 LoRA 技術與極限的 4-bit 模型量化技術相結合，進一步將預訓練模型的記憶體佔用壓縮至極致，讓開發者甚至能在筆記型電腦上微調高達百億參數的開源大語言模型。"
          },
          {
            "name": "前綴微調 (Prefix-Tuning)",
            "desc": "另一種輕量級的 PEFT 技術，不修改模型的內部權重，而是在 Transformer 的每一層注意力機制前面注入一小段可訓練的虛擬 Token 向量，引導模型產出特定風格的回答。"
          },
          {
            "name": "檢索增強生成 (Retrieval-Augmented Generation, RAG)",
            "desc": "不更動模型內部權重，而是在推論階段即時從外部企業知識庫檢索相關文件，並將這些資訊作為上下文提示提供給大語言模型，以解決模型幻覺與知識無法更新的問題。"
          }
        ],
        "terminology": [
          "LoRA (Low-Rank Adaptation)",
          "PEFT (Parameter-Efficient Fine-Tuning)",
          "Full Fine-tuning",
          "Rank (Matrix Rank)",
          "Transformer"
        ]
      },
      {
        "id": 36,
        "question": "某金融機構的 AI 信用評分模型需上傳至第三方雲端服務商進行推論。法務部門要求：在不解密資料的前提下，由單一雲端服務商直接對加密資料進行模型運算。下列哪種隱私保護技術最符合此需求？",
        "options": {
          "A": "聯邦學習（Federated Learning）；",
          "B": "同態加密（Homomorphic Encryption）；",
          "C": "差分隱私（Differential Privacy）；",
          "D": "安全多方計算（Secure Multi-Party Computation, MPC）"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。同態加密（Homomorphic Encryption, HE）是一種允許直接在密文上進行數學運算（如加法、乘法）的加密技術。運算結果解密後，會與直接在明文上運算的結果完全一致，完美符合「由單一雲端服務商直接對加密資料進行運算且不需解密」的需求。(A)聯邦學習是用於分散式訓練而非單一雲端推論；(C)差分隱私是加入雜訊保護個資，仍需解密資料運算；(D)安全多方計算通常需要多個互不信任的伺服器共同協作運算，不符合「單一雲端服務商」的情境。",
        "ml_method": "Homomorphic Encryption",
        "ml_method_explanation": "同態加密（Homomorphic Encryption, HE）被譽為密碼學的「聖杯」，是一種革命性的資料保護技術。傳統加密技術在處理資料前，必須先透過密鑰將密文還原成明文，這個解密過程會讓資料暴露在記憶體中，產生嚴重的安全漏洞。而同態加密具備特殊的數學代數結構，它允許系統直接對「加密狀態下的密文」進行各種數學運算。當運算完成後將加密的結果傳回給資料擁有者，擁有者使用私鑰解密後，得到的答案會與直接操作明文的結果完全一樣。雖然目前的完全同態加密（FHE）運算成本與時間負擔極高，但它徹底解決了「資料使用中（Data in Use）」的隱私問題，讓雲端運算可以在達到零信任（Zero Trust）的情況下提供 AI 預測服務。",
        "examples": [
          "基因序列分析與疾病預測：個人基因資料極度敏感，若外洩將造成嚴重隱私問題。醫療機構可以將病患的基因定序資料以同態加密處理後，傳送給國外的頂尖 AI 醫療生技公司。生技公司的 AI 模型直接對密文進行運算，找出潛在的遺傳疾病風險並回傳密文結果。過程中生技公司完全無法得知病患真實的基因序列。",
          "跨國企業的薪資防護雲端計算：一家跨國集團使用第三方的雲端人資系統來計算每月員工的獎金與稅務。為了防止雲端供應商窺探高階主管的薪水，企業使用同態加密將薪資數據加密上傳。雲端系統的演算法直接在密文上執行複雜的稅率計算與分紅加總，確保了企業核心財務數據的絕對機密。"
        ],
        "comparison": "同態加密（Homomorphic Encryption）允許直接對密文進行運算，解決了單一雲端環境下「資料使用中」的絕對隱私問題，適用於高機密的金融評分或基因分析；聯邦學習（Federated Learning）則側重於不共享原始資料的情況下，讓多個終端設備（如手機）在本地獨立訓練模型並匯總梯度，解決的是「分散式訓練」的數據孤島困境；差分隱私（Differential Privacy）透過在資料庫或模型輸出中注入數學干擾雜訊，確保外部攻擊者無法反推個別資料是否存在，但這無法避免雲端服務商看到明文；安全多方計算（MPC）則需要多個節點共同參與秘密分享與運算，架構與「交給單一雲端運算」的需求不符。",
        "keywords": [
          "同態加密 (Homomorphic Encryption)",
          "隱私保護計算 (Privacy-Preserving Computation)",
          "密文運算 (Ciphertext Computation)",
          "零信任 (Zero Trust)",
          "資料安全 (Data Security)",
          "雲端推論 (Cloud Inference)"
        ],
        "extended_tech": [
          {
            "name": "機密運算硬體環境 (Trusted Execution Environment, TEE)",
            "desc": "基於 CPU 晶片硬體級別的安全隔離區（如 Intel SGX），確保即使是雲端作業系統管理員也無法窺探或竄改隔離區內正在執行中（Data in Use）的 AI 模型運算記憶體與資料。"
          },
          {
            "name": "差分隱私 (Differential Privacy)",
            "desc": "在數據集或神經網路梯度中嚴格注入數學界定的隨機雜訊，確保統計結果極具參考價值的同時，任何外部攻擊者都無法透過分析結果反向推斷出特定個人資料是否存在於資料集中。"
          },
          {
            "name": "聯邦學習 (Federated Learning)",
            "desc": "一種去中心化的 AI 訓練架構。各家醫院或金融機構不需將機密數據上傳雲端，而是各自在本地端訓練模型，僅將更新的「權重梯度」上傳至中央伺服器進行聚合，達成群智學習。"
          }
        ],
        "terminology": [
          "Homomorphic Encryption",
          "Federated Learning",
          "Differential Privacy",
          "Secure Multi-Party Computation",
          "Ciphertext"
        ]
      },
      {
        "id": 37,
        "question": "某銀行導入 AI 貸款審核系統，監管要求每筆被拒絕的申請須提供可理解的拒絕原因。技術主管評估以下方案，哪一種最能實現個別預測的局部可解釋性（Local Explainability）？",
        "options": {
          "A": "SHAP（SHapley Additive exPlanations）值：計算每個特徵對單筆預測的貢獻；",
          "B": "全域特徵重要性（Global Feature Importance）：說明整體特徵影響，無法解釋單一個案；",
          "C": "Grad-CAM（Gradient-weighted Class Activation Mapping）：以熱力圖解釋影像模型；",
          "D": "混淆矩陣（Confusion Matrix）：呈現整體分類表現"
        },
        "answer": "A",
        "explanation": "正確答案為 (A)。SHAP 是基於博弈論（Game Theory）的可解釋性演算法，能夠計算出每一個特徵對於「單一個別預測結果（Local Explainability）」的具體貢獻值（推動機率上升或下降）。這完美滿足了監管單位要求解釋「特定一筆貸款為何被拒絕」的需求。(B) 全域重要性只能說明模型整體偏好，不能解釋單一個案；(C) Grad-CAM 是專門用於電腦視覺（影像）的解釋技術，不適用於貸款審核這類表格型資料；(D) 混淆矩陣是整體效能評估指標，與可解釋性無關。",
        "ml_method": "SHAP (SHapley Additive exPlanations)",
        "ml_method_explanation": "SHAP（SHapley Additive exPlanations）是目前機器學習領域最權威且具備嚴格數學基礎的模型解釋技術。它源自於合作博弈論（Cooperative Game Theory）中的 Shapley Value 概念。在機器學習的脈絡下，SHAP 將模型的預測過程視為一場「遊戲」，而每一個輸入的特徵就是參與遊戲的「玩家」，最終預測的值則是玩家們合作獲得的「總獎金」。SHAP 的核心演算法會系統性地考量各個特徵在不同組合下的貢獻，公平地將預測結果（相較於平均基準線的偏差）分配給每一個特徵。這使得 SHAP 既能提供全域的特徵重要性分析，也能針對任何單一一筆預測，精確指出是哪些變數推高了結果、哪些變數拉低了結果，打破了複雜模型（如 XGBoost、深度學習）的黑盒子限制。",
        "examples": [
          "精準醫療的藥物反應預測：AI 模型預測某位癌症病患對特定化療藥物的反應極差。醫師透過 SHAP 分析圖表，清楚看到是因為該病患的「某特定基因突變」與「肝功能指數偏高」這兩個特徵，產生了巨大的負向貢獻值。這份局部解釋幫助醫師說服病患與家屬更改治療方案。",
          "客戶流失預測與挽留策略：電信公司的模型標記一位 VIP 客戶下個月有 85% 的機率會退租。行銷人員點開該客戶的 SHAP 分析圖，發現推高流失機率的主要因素是「上個月客服通話時間極長」以及「合約即將到期」。行銷人員據此設計了高度客製化的挽留話術，成功留住該客戶。"
        ],
        "comparison": "SHAP 提供了嚴謹的「局部可解釋性（Local Explainability）」，能針對每一筆單獨的預測精確量化各個特徵的貢獻度，特別適合信貸審核、醫療診斷等要求合規與個別案例解釋的高風險領域；相比之下，決策樹自帶的「全域特徵重要性（Global Feature Importance）」只能描述模型在所有樣本上的平均偏好，對於向單一被拒貸客戶解釋原因時毫無用處；而 LIME（局部可解釋模型無關解釋）雖然也是局部解釋技術，但其藉由在單一樣本附近建立簡單線性模型來逼近複雜模型的做法，在穩定性與數學嚴謹度上不如基於博弈論的 SHAP 值；至於 Grad-CAM 則是專門用來產生影像辨識「熱力圖」的視覺化解釋工具，完全無法處理表格數據。",
        "keywords": [
          "局部可解釋性 (Local Explainability)",
          "SHAP值 (SHapley Additive exPlanations)",
          "博弈論 (Game Theory)",
          "特徵貢獻度 (Feature Contribution)",
          "黑盒子模型 (Black Box Model)",
          "模型透明度 (Model Transparency)"
        ],
        "extended_tech": [
          {
            "name": "局部可解釋模型無關解釋 (LIME)",
            "desc": "一種靈活的模型解釋技術，當針對某筆特定預測進行解釋時，LIME 會在該資料點的鄰近區域產生隨機擾動樣本，並用一個簡單好懂的線性模型去擬合原本黑盒子的局部邊界，藉此找出關鍵影響特徵。"
          },
          {
            "name": "類別活化映射熱力圖 (Grad-CAM)",
            "desc": "專門用於卷積神經網路（CNN）的視覺化解釋技術。它利用目標類別在最後一層卷積層上的梯度反向傳播，繪製出影像中哪些區域的像素強烈影響了模型的判斷，廣泛用於醫療影像輔助判讀。"
          },
          {
            "name": "反事實解釋 (Counterfactual Explanations)",
            "desc": "一種極具行動指導意義的解釋方法。與其告訴客戶為何被拒貸，不如回答「客戶需要改變什麼特徵（如將月收入增加五千或降低負債比 10%），模型才會將拒絕轉為核准預測」。"
          }
        ],
        "terminology": [
          "SHAP",
          "Local Explainability",
          "Global Feature Importance",
          "Grad-CAM",
          "Game Theory"
        ]
      },
      {
        "id": 38,
        "question": "某公司導入 AI 履歷篩選系統，用於自動決定是否進入面試。模型對男性應徵者的面試通過率為 55%，對女性應徵者為 30%。在其他條件不變的情況下，工程師需評估模型是否符合統計均等（Statistical Parity）的公平性定義。下列何者最正確？",
        "options": {
          "A": "符合統計均等，因為模型未使用性別作為輸入特徵；",
          "B": "符合統計均等，因為兩個族群皆有部分應徵者被錄取；",
          "C": "不符合統計均等，因為不同群體的正向決策比例（通過率）存在明顯差異；",
          "D": "不符合統計均等，因為女性族群的預測準確率較低"
        },
        "answer": "C",
        "explanation": "正確答案為 (C)。在 AI 公平性指標中，「統計均等（Statistical Parity）」（亦稱 Demographic Parity）的定義是：無論個體屬於哪一個敏感特徵群體（如性別、種族），模型給出正向決策（如獲得面試機會）的比例必須完全相同（或差距極小）。此情境中男性通過率 55% 與女性 30% 有顯著差異，因此違反了統計均等原則。(A) 即使拿掉性別特徵，模型仍可能透過其他代理變數（Proxy variables，如就讀學校、兵役等）產生偏見；(D) 統計均等只關注「預測結果的比例」，而不考慮該預測是否「準確」或基於實際能力差異。",
        "ml_method": "Algorithmic Fairness (Statistical Parity)",
        "ml_method_explanation": "統計均等（Statistical Parity / Demographic Parity）是演算法公平性（Algorithmic Fairness）領域中最基礎也最嚴格的指標之一。它的核心理念基於一種社會正義視角：在一個理想公平的世界中，任何敏感屬性（如性別、膚色、年齡、宗教）都不應該影響個人獲得資源或有利決策的機會。在數學上，統計均等要求機器學習模型對不同弱勢/優勢群體輸出「正向預測（Positive Outcome）」的機率必須相等。然而，實務上這個指標常引發爭議，因為如果兩個群體在真實世界中的「基本盤（Base Rate）」確實有差異，強制達到統計均等會迫使模型選擇較差的候選人而犧牲整體的預測準確度。因此，工程師在應用時常需在「機會均等」與「模型效能」間取得平衡。",
        "examples": [
          "銀行信用卡額度核發系統：銀行的 AI 模型被發現給予少數族裔申請者的平均核卡額度遠低於白人申請者。為了符合政府反歧視法規，AI 團隊對演算法施加了統計均等的約束條件，確保不同種族背景的客戶在收入相近的情況下，獲得高額度信用卡的機率必須保持一致，避免系統性的金融歧視。",
          "大學入學 AI 評估系統：某理工大學開發 AI 系統自動篩選入學申請。由於歷史資料中理工科系的男性錄取者佔多數，模型自動學會了偏好男性。為促進校園多元化，校方要求模型必須滿足統計均等指標，強迫系統調整預測權重，使得男女申請者被推薦錄取的比例必須達到 50:50 才能上線使用。"
        ],
        "comparison": "統計均等（Statistical Parity）強制要求所有群體獲得正向預測的總體比例必須相等，不論其背景能力差異，此指標最適合用於徹底糾正長期系統性歧視或配合多元招聘政策的場景；相反地，均等賠率（Equalized Odds）則是要求模型在「真實合格」的人群中，各群體被模型挑中的機率（真陽性率）相等，在「真實不合格」的人群中被誤判的機率（假陽性率）也相等，此指標更兼顧了個人的實際表現與模型準確度，是金融核貸與司法風險評估中較為平衡的公平性標準。",
        "keywords": [
          "統計均等 (Statistical Parity)",
          "演算法公平性 (Algorithmic Fairness)",
          "敏感特徵 (Sensitive Attribute)",
          "代理變數 (Proxy Variable)",
          "人口統計均等 (Demographic Parity)",
          "偏見緩解 (Bias Mitigation)"
        ],
        "extended_tech": [
          {
            "name": "均等賠率公平指標 (Equalized Odds)",
            "desc": "一種更為細緻的公平性指標。它不強求總體錄取率相等，而是要求對於那些「真正有能力償還貸款」的人而言，不論其種族或性別，模型將其預測為核貸（真陽性）的機率必須完全一致。"
          },
          {
            "name": "代理變數檢測 (Proxy Variable Detection)",
            "desc": "在移除如「種族」等敏感特徵後，模型仍可能透過居住郵遞區號、就讀學校等看似中立的「代理變數」學到歧視性規律。工程師需透過相關性分析與因果推論找出並處理這些隱性偏見根源。"
          },
          {
            "name": "對抗性去偏網路 (Adversarial Debiasing)",
            "desc": "一種基於對抗式生成架構（GAN）思想的深度學習訓練方法。模型在預測目標任務的同時，被迫無法讓另一個附屬的神經網路猜出樣本的性別或種族，從而在特徵層面徹底抹除歧視性資訊。"
          }
        ],
        "terminology": [
          "Statistical Parity",
          "Demographic Parity",
          "Algorithmic Fairness",
          "Proxy Variable",
          "Equalized Odds"
        ]
      },
      {
        "id": 39,
        "question": "某銀行信貸模型上線後稽核發現，女性申請者中「實際具有還款能力卻被模型拒絕」的比例顯著高於男性，但法務限制不允許在推論階段使用性別欄位調整輸出。下列去偏策略何者在此限制下仍可執行？",
        "options": {
          "A": "訓練中（In-processing）：在損失函數加入公平性懲罰項，降低不同群體的錯誤拒絕比例差異；",
          "B": "前處理（Pre-processing）：僅於訓練資料進行重新採樣，無法直接修正既有模型在推論階段的偏誤；",
          "C": "後處理（Post-processing）：依性別分組調整決策門檻，使不同群體的錯誤拒絕比例一致；",
          "D": "改用人口統計均等指標（Demographic Parity），錯誤拒絕比例差異將自動消失"
        },
        "answer": "A",
        "explanation": "正確答案為 (A)。去偏策略分為三個階段。題目限制「推論階段不允許使用性別」，這直接排除了 (C) 後處理方法，因為後處理需要在預測時知道個體的性別來套用不同的門檻。(B) 前處理雖然也可行，但選項敘述錯誤地聲稱它「無法修正推論偏誤」（實際上優化訓練資料就能改善模型）。(A) 訓練中介入（In-processing）是最理想的方法，模型在訓練階段利用性別資訊，透過公平性懲罰項學習出不依賴性別的公平權重，在推論階段就不再需要輸入性別特徵，完美符合法務限制。 (D) 改變評估指標並不能解決現有模型的偏誤。",
        "ml_method": "In-processing Fairness / Adversarial Debiasing",
        "ml_method_explanation": "訓練中去偏（In-processing Fairness Mitigation）是在模型優化過程中直接介入以消除演算法偏見的技術。相較於只修改資料（前處理）或人為調整預測結果（後處理），訓練中去偏通常是在模型的損失函數（Loss Function）中加入與公平性相關的正則化懲罰項，或者採用對抗性學習（Adversarial Debiasing）架構。在對抗性網路中，預測模型試圖準確完成任務，而另一個附屬的「對抗網路」則試圖從預測特徵中猜出敏感屬性（如性別或種族）。預測模型為了騙過對抗網路，會被迫捨棄所有與敏感屬性相關的隱含關聯特徵。最終訓練出的模型，能在不直接輸入敏感特徵的情況下，確保其預測結果達到高度的公平性與去關聯化。",
        "examples": [
          "人資招募 AI 薪資核定系統：企業開發 AI 根據員工的經歷與技能建議起薪。為了避免模型承襲歷史資料中男女性別薪資不平等的現象，團隊在訓練神經網路時加入了對抗性分支。這確保了模型提取的技能特徵中不帶有性別暗示，使得最終上線的模型在推論時不需輸入性別，也能給出男女同工同酬的建議。",
          "警政系統的犯罪風險預測：警方使用 AI 預測各地區的犯罪風險。為了避免模型對特定低收入少數族裔社區產生系統性偏見，開發者在演算法訓練過程中引入公平性懲罰函數。模型在優化預測準確率的同時，被強制要求各個社區的「假陽性率（誤報率）」必須保持一致，從而避免過度派遣警力導致對特定族群的過度執法。"
        ],
        "comparison": "訓練中去偏（In-processing Fairness Mitigation）是在算法內部透過損失函數懲罰來拔除歧視特徵，訓練出的模型在推論時完全不需輸入敏感特徵即可保持中立，非常適合法規禁止推論時使用個資的信貸或徵才場景；相對地，後處理去偏（Post-processing）是事後對不同族群設定不同的決策門檻以達到統計均衡，這代表在實務部署時系統必須即時取得使用者的性別或種族數據，常引發法律與隱私爭議；而前處理去偏（Pre-processing）雖然也符合法規限制，但僅靠對歷史資料的重抽樣或清洗，有時無法根除深度神經網路在複雜高維特徵中自行學習到的隱性代理歧視變數。",
        "keywords": [
          "訓練中去偏 (In-processing Debiasing)",
          "對抗性去偏 (Adversarial Debiasing)",
          "公平性懲罰項 (Fairness Penalty)",
          "前處理去偏 (Pre-processing)",
          "後處理去偏 (Post-processing)",
          "代理變數 (Proxy Variables)"
        ],
        "extended_tech": [
          {
            "name": "重抽樣前處理去偏 (Resampling Pre-processing)",
            "desc": "在訓練模型之前，透過對訓練資料集中的弱勢群體進行過採樣（Oversampling）或對優勢群體進行欠採樣（Undersampling），人為創造一個無偏見的理想數據集來訓練模型。"
          },
          {
            "name": "公平性後處理門檻調整 (Post-processing Thresholding)",
            "desc": "不更動已訓練好的黑盒子模型，而是根據不同群體（如不同性別）在驗證集上的誤差分佈，設定不同的分類閾值。例如對弱勢群體稍微放寬預測門檻，以事後強制達成均等賠率。"
          },
          {
            "name": "多任務對抗學習 (Multi-task Adversarial Learning)",
            "desc": "深度神經網路架構設計，主網路致力於最小化主任務（如預測信用風險）的誤差，而對抗子網路則致力於從隱藏層特徵中預測敏感屬性，透過梯度反轉層（GRL）迫使主網路遺忘歧視資訊。"
          }
        ],
        "terminology": [
          "In-processing Fairness",
          "Adversarial Debiasing",
          "Pre-processing",
          "Post-processing",
          "False Negative Rate"
        ]
      },
      {
        "id": 40,
        "question": "分析師準備建立一個能將手寫數字圖片（28x28 像素展平為 784 維度）分為0~9 共 10 個類別的多層感知機（MLP），且標籤已轉為 One-Hot 編碼（One-Hot Encoding）。為符合 10 個類別的單標籤分類需求，下圖中的程式碼中(A)與(B)的函數應填入何者？",
        "options": {
          "A": "sigmoid，mean_squared_error；",
          "B": "softmax，categorical_crossentropy；",
          "C": "relu，binary_crossentropy；",
          "D": "tanh，sparse_categorical_crossentropy"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。在深度學習的多類別（單標籤）分類任務中，神經網路輸出層的激活函數必須使用 Softmax，它能將多個輸出神經元的值轉換為總和為 1 的機率分佈。而對應的損失函數則取決於標籤的編碼方式：因為題目明確指出標籤「已轉為 One-Hot 編碼」，因此必須搭配 `categorical_crossentropy`。(C) Binary 用於二元分類；(A) MSE 用於迴歸；(D) 如果標籤是整數（0~9）未經 One-Hot 編碼，才能使用 `sparse_categorical_crossentropy`。",
        "ml_method": "Softmax Activation and Categorical Crossentropy",
        "ml_method_explanation": "在多類別分類的神經網路架構中，Softmax 激活函數與分類交叉熵損失函數（Categorical Crossentropy Loss）是不可分割的黃金組合。Softmax 函數放置在神經網路的最後一層，它透過指數函數（Exponential）放大類別間的差異，並將所有輸出值正規化，使其成為介於 0 到 1 之間且總和為 1 的機率分佈，直觀代表模型預測每個類別的信心水準。而 Categorical Crossentropy 則是基於資訊理論（Information Theory）來衡量「模型預測的機率分佈」與「真實標籤的機率分佈（通常是 One-Hot Vector）」之間的差異。兩者在數學運算上能完美抵消掉 Softmax 複雜的導數計算，確保梯度下降在反向傳播時極其穩定與高效。",
        "examples": [
          "醫療病理切片分類系統：AI 系統需要將癌症切片影像分類為「正常」、「良性腫瘤」、「第一期」、「第二期」、「第三期」共五種互斥的類別。網路最後一層使用 5 個神經元搭配 Softmax 激活，輸出各期別的機率，並透過 Categorical Crossentropy 優化權重，幫助醫生快速判斷最可能的病理分期。",
          "新聞文章自動標籤系統：新聞媒體網站每天產出大量文章，工程師開發了一個 NLP 模型將新聞分類到「政治」、「體育」、「財經」、「娛樂」等專屬版面（一篇文章只屬一版）。模型架構結尾使用 Softmax 確保每個版面獲得適當的機率值，讓自動分發系統能精確的將文章派送到機率最高的首頁區塊。"
        ],
        "comparison": "在神經網路多類別且樣本互斥的單標籤分類任務中，Softmax 結合 Categorical Crossentropy 能強制所有類別機率總和為 1，產生清晰的單一最佳預測，適用於影像數字辨識或單一專欄的文章分類；相反地，若任務是「多標籤分類（Multi-label Classification）」（如一張照片同時有狗與貓），則必須在輸出層改用獨立運作的 Sigmoid 激活函數搭配 Binary Crossentropy 損失，允許各類別機率獨立介於 0 到 1 之間；而均方誤差（MSE）則僅適用於輸出連續數值的迴歸問題（如預測房價），不適合用於機率分類。",
        "keywords": [
          "Softmax激活函數 (Softmax Activation)",
          "分類交叉熵 (Categorical Crossentropy)",
          "獨熱編碼 (One-Hot Encoding)",
          "多層感知機 (MLP)",
          "多類別分類 (Multi-class Classification)",
          "損失函數 (Loss Function)"
        ],
        "extended_tech": [
          {
            "name": "稀疏分類交叉熵 (Sparse Categorical Crossentropy)",
            "desc": "在處理擁有成千上萬個類別（如詞彙表分類）的任務時，不需要先將標籤轉換為極度消耗記憶體的 One-Hot 編碼，可直接輸入整數類別標籤並計算損失的優化技術。"
          },
          {
            "name": "標籤平滑正則化 (Label Smoothing Regularization)",
            "desc": "為了解決 Softmax 容易產生過度自信導致過度擬合的問題，將 One-Hot 編碼的絕對 1 替換成 0.9，剩餘的 0.1 平均分配給其他類別，迫使模型保留不確定性，提升泛化能力。"
          },
          {
            "name": "焦點損失函數 (Focal Loss)",
            "desc": "為了解決交叉熵在極度不平衡資料中容易被大量「易分類負樣本」主導的問題，Focal Loss 動態降低高信心樣本的權重，讓神經網路專注於學習難以區分的關鍵特徵邊界。"
          }
        ],
        "terminology": [
          "Softmax",
          "Categorical Crossentropy",
          "One-Hot Encoding",
          "Sigmoid",
          "Sparse Categorical Crossentropy"
        ]
      },
      {
        "id": 41,
        "question": "工程師使用 PyTorch 建立 OCR 訓練 pipeline，並對手寫字母資料集套用下圖程式進行資料增強（Transform）。模型在訓練過程中顯示驗證損失（Validation Loss）持續下降，但實際部署後，系統在辨識「b/d/p/q」類字母錯誤率異常偏高。下列何者為最可能的根本原因？",
        "options": {
          "A": "RandomRotation(15)角度過大導致特徵變形，應降至 5 度以內；",
          "B": "RandomHorizontalFlip 破壞字母方向語義，使模型以 50%機率學到鏡像錯誤標籤；",
          "C": "ColorJitter 改變筆畫灰階，導致邊緣偵測特徵失真；",
          "D": "ToTensor( )應放在所有幾何變換之前才能保持座標對應正確"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。在資料增強（Data Augmentation）中，必須謹慎確保增強操作不會破壞原始資料的「語義」。在字元辨識（OCR）任務中，英文字母具有強烈的方向依賴性。當我們對小寫字母 'b' 進行水平翻轉（RandomHorizontalFlip）時，視覺上它會變成 'd'，但它的標籤依然還是 'b'。這會導致模型感到極度困惑，學到錯誤的對應關係。因此，在光學字元辨識中，通常嚴格禁止使用水平或垂直翻轉。(A) 15度旋轉對於手寫字是合理的模擬；(C) 顏色擾動有助於適應不同光源；(D) ToTensor 通常放在增強流程的最後。",
        "ml_method": "Data Augmentation / Semantic Consistency",
        "ml_method_explanation": "資料增強（Data Augmentation）是深度學習中極為強大且普遍應用的正則化與防過擬合技術。由於深度神經網路（特別是 CNN）需要海量的資料來學習穩定的特徵，當資料不足時，工程師會對現有資料進行旋轉、縮放、平移、翻轉、加噪聲或顏色變換等操作，人為創造出更多樣的訓練樣本，這能大幅提升模型的泛化能力（Generalization）。然而，資料增強的核心原則是必須保持「語義一致性（Semantic Consistency）」。如果轉換操作改變了影像的根本含義或顛覆了目標任務的本質特徵（例如在交通號誌辨識中翻轉了左右轉箭頭，或在醫學影像中改變了腫瘤形狀的關鍵結構），就會造成錯誤標籤（Noisy Labels），嚴重破壞模型的學習效果。",
        "examples": [
          "自動駕駛系統的交通號誌辨識：工程師為了增加資料量，對收集到的交通號誌圖片使用了水平翻轉增強。結果導致模型在實際上路時，將「向左急轉彎」的號誌錯誤辨識為「向右急轉彎」，引發嚴重的安全隱患。團隊事後緊急修復，在交通號誌辨識任務中移除了翻轉增強策略。",
          "工廠自動化金屬件表面瑕疵檢測：金屬零件在輸送帶上可能以任何角度出現。為了讓 AI 適應這種情況，工程師使用了 360 度隨機旋轉（RandomRotation）與隨機裁切（RandomCrop）作為資料增強策略。因為「刮痕」或「凹洞」的瑕疵定義不會因為零件的旋轉角度而改變，這項增強成功地讓模型在極少瑕疵樣本的情況下達到了 99% 的檢出率。"
        ],
        "comparison": "資料增強必須嚴格遵守「語義一致性（Semantic Consistency）」。水平翻轉（RandomHorizontalFlip）非常適合用於不具備方向依賴性的任務，例如貓狗分類或風景圖片辨識，能以零成本有效加倍訓練資料並抵抗過擬合；但若應用在 OCR 字元辨識、交通左右轉號誌辨識、或是依賴不對稱病理特徵的醫學影像診斷時，翻轉會徹底摧毀標籤的正確性，導致模型崩潰。針對這類具備方向特徵的任務，應改用顏色擾動（ColorJitter）、微小高斯噪聲注入或小角度旋轉等不影響幾何語義的增強策略。",
        "keywords": [
          "資料增強 (Data Augmentation)",
          "語義一致性 (Semantic Consistency)",
          "光學字元辨識 (OCR)",
          "水平翻轉 (RandomHorizontalFlip)",
          "錯誤標籤 (Noisy Labels)",
          "過擬合防制 (Overfitting Prevention)"
        ],
        "extended_tech": [
          {
            "name": "混合圖片資料增強 (Mixup / CutMix)",
            "desc": "進階的深度學習影像增強技術。透過將兩張完全不同的圖片（及其 One-Hot 標籤）以線性比例混合疊加或拼貼，強迫模型學習更為平滑的決策邊界，極大提升模型的抗干擾與泛化能力。"
          },
          {
            "name": "生成對抗網路資料擴充 (GAN-based Augmentation)",
            "desc": "在罕見疾病影像或極度缺乏正樣本的瑕疵檢測任務中，傳統的旋轉翻轉無法憑空創造新特徵。此時可利用 GAN 網路無中生有地生成高度逼真的全新假樣本，大幅擴充訓練集規模。"
          },
          {
            "name": "文字資料隨機替換與回譯 (Text Augmentation & Back Translation)",
            "desc": "自然語言處理中的增強技術。透過隨機遮蔽詞彙、同義詞替換，或是將文本先翻譯成外語再翻譯回原語言，能在不改變原文核心語義的前提下，為 NLP 模型製造豐富的句型變化。"
          }
        ],
        "terminology": [
          "Data Augmentation",
          "Semantic Consistency",
          "RandomHorizontalFlip",
          "Validation Loss",
          "Noisy Labels"
        ]
      },
      {
        "id": 42,
        "question": "觀察程式中行(A)將所有既有權重的梯度計算關閉，這在遷移學習中屬於哪一種標準策略？",
        "options": {
          "A": "全面微調（Full Fine-Tuning）；",
          "B": "零樣本學習（Zero-shot Learning）；",
          "C": "特徵萃取（Feature Extraction）；",
          "D": "知識蒸餾（Knowledge Distillation）"
        },
        "answer": "C",
        "explanation": "正確答案為 (C)。程式中 `requires_grad = False` 將預訓練模型（如 ResNet）的主體權重凍結，使其在反向傳播時不更新參數，這代表模型的主體被單純當作一個「特徵萃取器（Feature Extractor）」。只有最後新接上的全連結層（fc）允許梯度更新。這種遷移學習策略被稱為特徵萃取。(A) 全面微調是解凍所有層一起訓練；(B) 零樣本是不經任何訓練直接推論；(D) 知識蒸餾是用大模型指導小模型學習。",
        "ml_method": "Transfer Learning: Feature Extraction",
        "ml_method_explanation": "遷移學習（Transfer Learning）中的特徵萃取（Feature Extraction）策略，是站在巨人肩膀上進行機器學習的高效方法。深度卷積神經網路（如 ResNet, VGG）在 ImageNet 等超大型資料集上預訓練後，其底層網路已經學會了辨識邊緣、紋理、顏色漸層等通用視覺特徵，而高層網路則學會了複雜的語義形狀。在特徵萃取中，工程師會將這些預訓練好、強大且通用的網路層完全「凍結（Freeze，即停止參數更新）」，只把資料通過這些層提取出高維特徵向量，然後僅在網路的最末端接上並訓練一個輕量級的分類器（如全連結層或 SVM）來處理手邊的小型資料集任務。這不僅能大幅節省運算資源與訓練時間，還能極有效避免小資料集帶來的過擬合問題。",
        "examples": [
          "野生動物保育影像分類：研究團隊只有數百張罕見台灣黑熊與石虎的照片。他們下載了 Google 在千萬張圖片上預訓練好的 EfficientNet 模型，將其主體凍結作為特徵萃取器，只重新訓練最後一層。在不到 10 分鐘的訓練後，就得到了一個極高準確率的保育動物辨識模型。",
          "生產線小批量產品瑕疵檢測：工廠剛推出一款新產品，產線上的瑕疵圖片不到 50 張，根本無法從頭訓練深度學習模型。AI 工程師利用在通用物件上預訓練好的 ResNet-50 進行特徵萃取，成功將新產品的微小刮痕與撞傷特徵分離出來，快速部署了第一版自動光學檢測（AOI）系統。"
        ],
        "comparison": "特徵萃取（Feature Extraction）藉由凍結預訓練模型龐大的主體網路，僅訓練最後的分類層，非常適合下游任務數據量極小且與來源領域特徵相似的情境，能用極少算力防範過擬合；而全面微調（Full Fine-tuning）則是解凍所有層級的權重讓其一起更新，適用於下游任務擁有龐大數據量且業務場景與原始預訓練資料差異較大時，雖然效果更為極致但計算成本與過擬合風險也大幅上升；至於零樣本學習（Zero-shot Learning）完全不需更新權重，依賴超大模型（如 CLIP 或 GPT-4）原生的強大泛化能力直接進行預測，在無標籤場景極具優勢，但準確度通常不如有監督的微調。",
        "keywords": [
          "遷移學習 (Transfer Learning)",
          "特徵萃取 (Feature Extraction)",
          "權重凍結 (Weight Freezing)",
          "預訓練模型 (Pre-trained Model)",
          "全面微調 (Full Fine-Tuning)",
          "反向傳播 (Backpropagation)"
        ],
        "extended_tech": [
          {
            "name": "全面微調 (Full Fine-tuning)",
            "desc": "在遷移學習中，不僅替換最後一層分類器，更使用極小的學習率解凍並更新預訓練模型中所有的神經網路層參數，使得模型特徵表示能夠深度適應全新的領域資料。"
          },
          {
            "name": "零樣本學習 (Zero-shot Learning)",
            "desc": "利用在海量多模態資料上預訓練的基礎模型（Foundation Model，如 OpenAI 的 CLIP），在完全不經過任何特定任務數據微調的情況下，直接透過提示詞完成新類別的影像辨識或文本分類任務。"
          },
          {
            "name": "知識蒸餾 (Knowledge Distillation)",
            "desc": "一種模型壓縮技術。先訓練一個龐大精確的「教師模型」，再利用教師模型的輸出機率分佈（Soft Labels）去教導一個結構簡單、運算極快的「學生模型」，使其在輕量級硬體上發揮強大效能。"
          }
        ],
        "terminology": [
          "Transfer Learning",
          "Feature Extraction",
          "Zero-shot Learning",
          "Knowledge Distillation",
          "Requires_grad"
        ]
      },
      {
        "id": 43,
        "question": "在進行遷移學習微調（Fine-Tuning）時，通常會將優化器的學習率（Learning Rate）設得非常小（如 1e-4），下列何者為主要的原因？",
        "options": {
          "A": "為了避免記憶體耗盡（OOM）；",
          "B": "為了加速模型整體的收斂時間；",
          "C": "為了讓損失函數強制歸零；",
          "D": "為了避免更新步伐過大，破壞預訓練模型原本已學好的良好特徵表示"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。在全面微調（Full Fine-tuning）階段，預訓練模型內部已經包含了在龐大資料集上學到的、極具價值的權重分佈與特徵表示。如果此時使用過大的學習率（Learning Rate），第一批次資料帶來的巨大梯度更新就會像一場災難，瞬間破壞掉那些已經調適得非常完美的權重（稱為災難性遺忘），導致模型崩潰且難以重新收斂。因此，必須使用極小的學習率進行微調，讓模型慢慢適應新任務的領域特徵。(A)、(B)、(C) 皆與設定極小學習率的目的無關。",
        "ml_method": "Transfer Learning: Fine-Tuning / Learning Rate Scheduling",
        "ml_method_explanation": "微調（Fine-Tuning）是遷移學習中更進階的一種應用策略。不同於將網路凍結的特徵萃取法，微調會「解凍（Unfreeze）」預訓練模型的部分或全部卷積層，讓這些層次的參數能夠隨著新資料集的特性一起更新。因為預訓練權重已經處於損失函數地貌（Loss Landscape）中一個非常優良的局部低谷，微調的目的是在此低谷附近做細微的探索與修正，以更精確地對齊新任務的數據分佈（Domain Adaptation）。為此，必須嚴格控制優化器的更新步伐，通常會採用極小的學習率（例如 1e-4 或 1e-5），有時還會搭配分層學習率（Discriminative Learning Rates，底層學習率極小，越靠近輸出層學習率越大），以確保知識轉移的平滑過渡，避免摧毀前人辛苦訓練出來的表徵能力。",
        "examples": [
          "醫學 X 光肺炎診斷模型：工程師取得了一個在自然風景與人物照片上預訓練的 CNN 模型。為了讓它適應黑白且紋理極為相似的 X 光片，工程師解凍了所有神經網路層，並設定了 1e-5 的極小學習率進行微調。這讓模型在保留辨識輪廓能力的同時，緩慢適應了肺部浸潤病灶的微小特徵。",
          "專業法學領域的 LLM 開發：一間律師事務所利用開源的大型語言模型（如 Llama 3）作為基底，餵入大量的法庭判決書與合約進行微調。為了確保模型在學習專業法律術語與嚴謹邏輯的同時，不會喪失原本流暢對話與常識推理的能力，開發團隊採用了極微小的學習率與嚴格的預熱排程（Warmup Scheduler）進行訓練。"
        ],
        "comparison": "在遷移學習中設置極小的學習率（Learning Rate）是為了保護預訓練模型中已確立的高階語義特徵不被新資料的巨大梯度瞬間摧毀，這對於適應領域差異極大或資料量稀缺的任務至關重要；相反地，如果是從零開始隨機初始化訓練一個新模型（Training from Scratch），工程師初期會採用較大（如 1e-2）或甚至使用學習率預熱（Warmup）策略，以幫助模型快速跳出初始的平坦區並跨越局部的次佳解。因此，優化器的學習率設定必須完全配合模型目前的狀態（預訓練低谷 vs 隨機初始化山峰）而調整。",
        "keywords": [
          "微調 (Fine-Tuning)",
          "學習率 (Learning Rate)",
          "遷移學習 (Transfer Learning)",
          "災難性遺忘 (Catastrophic Forgetting)",
          "特徵表示 (Feature Representation)",
          "梯度更新 (Gradient Update)"
        ],
        "extended_tech": [
          {
            "name": "分層學習率設定 (Discriminative Learning Rates)",
            "desc": "在神經網路微調時的一種精細策略。由於底層網路負責萃取邊緣等通用特徵，會給予極小的學習率；而高層網路負責複雜語義，需要適應新任務，則給予相對較大的學習率。"
          },
          {
            "name": "餘弦退火學習率排程 (Cosine Annealing LR Scheduler)",
            "desc": "一種訓練優化技巧，在訓練過程中讓學習率依循餘弦函數的曲線緩慢下降。這能幫助模型在初期快速收斂，並在訓練末期以極小的步伐精確滑入損失函數地形的最優最低點。"
          },
          {
            "name": "逐步解凍訓練法 (Gradual Unfreezing)",
            "desc": "在微調超大型預訓練模型時，先凍結大部分網路層僅訓練分類頭，隨後由上往下，逐層解凍並搭配極小學習率進行微調，能最大程度避免預訓練知識被破壞並防止過度擬合。"
          }
        ],
        "terminology": [
          "Fine-Tuning",
          "Learning Rate",
          "Catastrophic Forgetting",
          "Loss Landscape",
          "Discriminative Learning Rates"
        ]
      },
      {
        "id": 44,
        "question": "研究人員撰寫的程式中（下圖），先用整體資料進行 LDA（Linear Discriminant Analysis）降維，接著再用 KNN（K-Nearest Neighbors）進行分類，並用交叉驗證來評估準確率。請問下列敘述何者正確？",
        "options": {
          "A": "此寫法完全正確，因為先以整體資料進行 LDA 降維，再以交叉驗證測試 KNN，是標準流程；",
          "B": "此寫法存在資料洩漏（Data Leakage）問題，應將 LDA 納入交叉驗證流程中一併進行；",
          "C": "雖然流程不夠嚴謹，但結果仍然能夠代表模型真實的泛化能力；",
          "D": "如果只想驗證 KNN 的分類效果，可以直接跳過 LDA 步驟，以簡化流程"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。這是一個經典的機器學習錯誤。如果在交叉驗證切分資料「之前」，就使用整個資料集（包含未來的驗證集）進行 LDA 降維或特徵標準化，這意味著降維矩陣的計算已經「看過」了驗證集的資訊（包含特徵與標籤的分佈），這導致了嚴重的「資料洩漏（Data Leakage）」。這會使交叉驗證的準確率被嚴重高估。正確的做法是使用 Pipeline，確保在每一折交叉驗證時，只有訓練集參與 LDA 降維矩陣的學習，再將此轉換應用到驗證集上。",
        "ml_method": "Data Leakage / Cross-Validation Pipelines",
        "ml_method_explanation": "資料洩漏（Data Leakage）是機器學習實務中最容易犯、也最具毀滅性的錯誤之一。它指的是模型在訓練階段，不經意間獲取了原本不應該知道的測試集資訊。當發生資料洩漏時，模型會產生「過度樂觀」的效能評估，在實驗室裡準確率高達 99%，但一部署到真實環境中就徹底失敗。最常見的洩漏形式發生在特徵工程與交叉驗證的銜接處：如果將整份資料集（包含測試資料）先進行標準化（Standardization）、降維（PCA/LDA）、或填補缺失值（Imputation），測試集的統計特徵（如平均數、變異數）就會混入訓練過程中。為防止此事，現代機器學習框架（如 Scikit-Learn）極力推薦使用 Pipeline 架構，確保所有資料轉換操作都嚴格限制在每一次交叉驗證切分後的「訓練集子集」內獨立運作。",
        "examples": [
          "信用卡違約預測的特徵標準化：一位新手資料科學家在切分資料前，對所有客戶的「年收入」特徵進行了 Z-score 標準化。結果在驗證集中，模型其實已經隱性地利用了全局的收入平均值。系統上線後，遇到整體經濟環境改變帶來的新收入分佈，模型的違約預測準確率大幅崩跌。",
          "基因微陣列的特徵選擇洩漏：在預測癌症存活率的任務中，由於基因特徵多達幾萬個，研究員先用整個資料集的標籤（包含測試病患的存活結果）篩選出最相關的 50 個基因，然後才進行交叉驗證。這導致模型表現出完美的預測能力，但在實際臨床盲測中卻完全無效，浪費了大量的研發時間與成本。"
        ],
        "comparison": "使用 Pipeline 進行交叉驗證與特徵工程，是為了徹底杜絕資料洩漏（Data Leakage）。如果在切分訓練集與測試集之前就對全域資料執行 LDA 降維或 Z-score 標準化，演算法會偷窺到未來測試集的統計分佈與標籤特徵，導致實驗室測出的準確率虛高；相對地，正確的 Pipeline 架構強迫系統在交叉驗證的每一折（Fold）中，都必須先將資料切分，然後僅利用「訓練子集」計算轉換矩陣與平均值，再套用到未知的「驗證子集」上，這樣才能真實模擬系統上線後面對全新未知資料的嚴苛考驗。",
        "keywords": [
          "資料洩漏 (Data Leakage)",
          "交叉驗證 (Cross-Validation)",
          "線性判別分析 (LDA)",
          "特徵降維 (Dimensionality Reduction)",
          "Pipeline管線架構 (Pipeline Architecture)",
          "泛化能力 (Generalization)"
        ],
        "extended_tech": [
          {
            "name": "Scikit-Learn Pipeline 工具",
            "desc": "Python 機器學習庫中用來串接資料前處理、特徵降維與最終預測模型的標準化封裝工具，確保交叉驗證與網格搜尋中每個步驟嚴格遵守訓練集與測試集的數據隔離邊界。"
          },
          {
            "name": "主成分分析降維 (Principal Component Analysis, PCA)",
            "desc": "最廣泛使用的非監督式特徵降維技術，透過正交變換將可能相關的高維變數轉換為少數線性無關的主成分，大幅去除資料雜訊，通常作為模型訓練前的資料前處理步驟。"
          },
          {
            "name": "特徵選擇洩漏預防 (Feature Selection without Leakage)",
            "desc": "在處理高維度資料（如基因或文本）時，特徵篩選（如 SelectKBest）必須在交叉驗證的每一個訓練 Fold 內部獨立執行，絕對不能在全域資料上看過測試標籤後才挑選變數。"
          }
        ],
        "terminology": [
          "Data Leakage",
          "Cross-Validation",
          "LDA",
          "Scikit-Learn Pipeline",
          "Over-optimistic Performance"
        ]
      },
      {
        "id": 45,
        "question": "研究人員在程式（下圖）中使用 cross_val_score 進行交叉驗證，但目前尚未設定 cv 參數。他們希望確保在每次資料分割時，訓練集與測試集的類別比例與原始資料一致，以免影響模型的準確率估計。目前有以下幾段候選程式碼可供選擇。請問為了確保在交叉驗證時每個分割中的類別比例與原始資料一致，上面哪幾段程式碼插入在原始程式中[#填入程式碼]的部分比較合適？",
        "options": {
          "A": "程式碼 B、程式碼 C、程式碼 D；",
          "B": "程式碼 A、程式碼 C；",
          "C": "程式碼 A、程式碼 B、程式碼 D；",
          "D": "程式碼 C、程式碼 D"
        },
        "answer": "A",
        "explanation": "正確答案為 (A)。在分類問題中，為確保交叉驗證每一次切分的訓練集與驗證集，其各類別的比例與原始資料（母體）保持一致，必須使用「分層抽樣（Stratified Sampling）」。在 Scikit-Learn 中，`StratifiedKFold` 以及 `RepeatedStratifiedKFold` 就是為此設計的。或者在 `cross_val_score` 中，只要目標變數 `y` 是分類標籤，且設定 `cv=整數`（例如 `cv=5`，即程式碼 C），Scikit-Learn 預設就會自動採用 StratifiedKFold。而一般的 `KFold`（程式碼 A）則不具備維持類別比例的功能，可能導致某個 fold 中缺乏特定類別的樣本。",
        "ml_method": "Stratified K-Fold Cross-Validation",
        "ml_method_explanation": "分層 K 折交叉驗證（Stratified K-Fold Cross-Validation）是模型驗證機制的進階改良版，專門用於處理分類任務，特別是面對「類別不平衡（Imbalanced Classes）」的資料集。傳統的 K 折交叉驗證是將資料隨機打散並平均切分為 K 等份。如果資料中某個稀有類別只佔 1%，純隨機切分極有可能導致某些折（Fold）的驗證集裡完全沒有該稀有類別的樣本，造成模型無法學習或評估指標失去意義。分層交叉驗證引入了統計學中的分層抽樣概念，它在切分資料時，會嚴格保證每一折子集裡，各個類別樣本的比例都與原始完整資料集完全一致。這確保了模型在每一次迭代訓練與驗證時，都能面對相同難度與結構的數據分佈，從而得出最客觀、穩定的效能評估結果。",
        "examples": [
          "電子郵件釣魚攻擊偵測：在百萬封企業郵件中，真正的釣魚信件僅佔 0.5%。資安工程師使用 Stratified K-Fold 來評估過濾模型的表現，確保在交叉驗證的 10 個循環中，每一次的訓練集和測試集都精確保留了這 0.5% 的極端不平衡比例，精準反映模型在真實環境攔截釣魚信的能力。",
          "製造業的多種類瑕疵分類：AOI 系統需要辨識晶圓上的「刮傷」、「微塵」與「裂痕」三種瑕疵。其中「裂痕」非常罕見，僅有數十張照片。透過分層交叉驗證，演算法能確保每一折驗證集中都平均包含了少數幾張「裂痕」照片，避免在某次驗證中因為完全沒遇到裂痕瑕疵，而產生模型準確率異常偏高的假象。"
        ],
        "comparison": "分層 K 折交叉驗證（Stratified K-Fold）利用統計分層抽樣，強迫每一折的資料集在類別比例上與原始母體完全一致，這在處理詐欺偵測、罕病篩檢等「類別極度不平衡」的分類任務中，是維持模型訓練與驗證穩定性的必備手段；相對而言，標準的 K-Fold 交叉驗證僅進行純隨機切分，雖適用於資料量巨大且分佈均勻的迴歸問題（如預測房價），但在罕見分類問題上會因為隨機性導致某些 Fold 缺乏關鍵的少數樣本，使得模型評估產生劇烈震盪與偏差。因此，在任何分類競賽與實務應用中，Stratified K-Fold 幾乎是不可取代的黃金標準。",
        "keywords": [
          "分層抽樣 (Stratified Sampling)",
          "交叉驗證 (Cross-Validation)",
          "類別不平衡 (Imbalanced Classes)",
          "Stratified K-Fold",
          "模型驗證 (Model Validation)",
          "資料切分 (Data Splitting)"
        ],
        "extended_tech": [
          {
            "name": "SMOTE 過度採樣技術 (Synthetic Minority Over-sampling Technique)",
            "desc": "面對極度不平衡的資料集時，除了使用分層驗證外，可在訓練資料中使用 SMOTE 演算法，透過在少數類別的相鄰資料點之間插值來生成合成新樣本，幫助模型學習清晰邊界。"
          },
          {
            "name": "分層打亂分割 (Stratified Shuffle Split)",
            "desc": "結合了隨機重抽樣與分層抽樣特性的驗證切分技術，允許開發者自定義訓練與測試集的精確比例，並可進行任意次數的隨機抽樣評估，非常適合資料集規模較小的不平衡分類任務。"
          },
          {
            "name": "類別權重調整 (Class Weight Adjustment)",
            "desc": "在無法取得更多少數樣本時，直接在演算法的損失函數中給予少數類別（如詐欺案例）數倍於多數類別的懲罰權重，強迫模型在訓練時必須高度重視罕見但關鍵的樣本判斷。"
          }
        ],
        "terminology": [
          "Stratified K-Fold",
          "Cross-Validation",
          "Imbalanced Classes",
          "KFold",
          "cross_val_score"
        ]
      },
      {
        "id": 46,
        "question": "參考下圖資料處理，下列哪一項描述組合正確？",
        "options": {
          "A": "描述 A、描述 C、描述 F；",
          "B": "描述 B、描述 D、描述 E、描述 F；",
          "C": "描述 B、描述 C、描述 E、描述 F；",
          "D": "描述 A、描述 B、描述 D、描述 E、描述 F"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。\n描述 A 錯誤，除以 255.0 是為了將像素值從 [0, 255] 縮放至 [0, 1] (Min-Max Scaling)，不是縮小到 0~31。\n描述 B 正確，進行數值縮放（如除以 255）能穩定梯度下降，加速收斂，亦能幫助增加泛化能力。\n描述 C 錯誤，除以 255.0 不等於 z-score 標準化（z-score 需減平均除標準差）。\n描述 D 正確，神經網路輸入過大的數值易導致梯度爆炸或梯度消失，除以 255 可避免此問題。\n描述 E 正確，`to_categorical` 函數的作用是將整數標籤轉換為 One-hot 編碼。\n描述 F 正確，將標籤轉為 One-hot 編碼後，神經網路輸出層必須搭配 softmax 函數來輸出各類別機率。",
        "ml_method": "Data Preprocessing (Min-Max Scaling / One-Hot Encoding)",
        "ml_method_explanation": "資料前處理（Data Preprocessing）是深度學習成功訓練的基石。在此題中涉及兩個核心操作：第一是特徵縮放（Feature Scaling）。影像資料的像素值範圍通常是 0 到 255。如果直接將這麼大的整數輸入神經網路，會導致權重更新的梯度極大，引發梯度爆炸或在激活函數（如 Sigmoid）中陷入飽和區導致梯度消失。透過簡單除以 255（即 Min-Max Scaling），將所有輸入特徵強制壓縮至 0 到 1 之間，能大幅穩定訓練過程並加速收斂。第二個核心是獨熱編碼（One-Hot Encoding）。分類任務的標籤通常是整數（如 0, 1, 2），但這會讓模型誤以為類別之間有大小與連續的數值關係。獨熱編碼將其轉換為正交的二進位向量，搭配網路末端的 Softmax 激活函數，讓模型能以乾淨獨立的機率空間輸出每個類別的可能性。",
        "examples": [
          "語音識別的音頻特徵處理：在處理語音訊號的梅爾頻率倒譜係數（MFCC）時，不同頻段的能量值差異巨大。工程師必須先進行特徵縮放，將所有特徵拉到同一尺度，否則神經網路的學習會完全被能量值最大的低頻訊號主導，而忽略了包含關鍵語音資訊的高頻細節。",
          "自然語言處理的文字分類模型：在分析電商評論的感情極性時，工程師將評論分為「極好」、「普通」、「極差」三類。為了避免模型將「普通」當作「極好」與「極差」的數學平均值，工程師使用 One-Hot Encoding 將這三種類別轉換為獨立的向量表示，幫助模型清晰區分不同語義群體。"
        ],
        "comparison": "在深度學習的特徵縮放中，最大最小化縮放（Min-Max Scaling，如影像除以 255）能快速將數值強制壓縮至 [0, 1] 區間，對維持圖片像素邊界或處理已知上下限的感測器資料非常直觀有效，且不會破壞資料的原始稀疏性；相比之下，Z-score 標準化（Standardization）則減去平均值並除以標準差，將資料轉化為符合常態分佈且均值為 0 的狀態，這種方法對極端異常值（Outliers）的抵抗力更強，通常應用於金融財務特徵或數值分佈極度不規則的表格型資料前處理中。",
        "keywords": [
          "資料前處理 (Data Preprocessing)",
          "特徵縮放 (Feature Scaling)",
          "最大最小縮放 (Min-Max Scaling)",
          "獨熱編碼 (One-Hot Encoding)",
          "梯度下降 (Gradient Descent)",
          "梯度爆炸 (Exploding Gradients)"
        ],
        "extended_tech": [
          {
            "name": "Z-Score 標準化 (Standardization)",
            "desc": "將特徵數據減去群體平均值後除以標準差，把資料轉換為平均數為 0、標準差為 1 的分佈型態。對於受極端異常值影響較大或符合常態分佈假設的表格資料，此方法比簡單的 Min-Max 縮放更為穩健。"
          },
          {
            "name": "標籤編碼 (Label Encoding)",
            "desc": "將類別型資料（如紅、綠、藍）直接轉換為連續的整數數值（0, 1, 2）。雖然對於神經網路可能造成數值大小的誤導，但對於基於樹狀結構的演算法（如隨機森林、XGBoost），這是一種高效且節省記憶體的編碼選擇。"
          },
          {
            "name": "穩健縮放器 (Robust Scaler)",
            "desc": "專門應對含有大量離群值（Outliers）的資料集設計的縮放技術。它利用資料的中位數與四分位距（IQR）來進行縮放，避免了平均數與標準差被少數極端值嚴重扭曲的問題。"
          }
        ],
        "terminology": [
          "Min-Max Scaling",
          "One-Hot Encoding",
          "Gradient Explosion",
          "Softmax",
          "Z-score Standardization"
        ]
      },
      {
        "id": 47,
        "question": "參考下圖建立模型結果，下列哪一項描述組合正確？",
        "options": {
          "A": "描述 A、描述 C；",
          "B": "描述 C、描述 E、描述 F；",
          "C": "描述 A、描述 D、描述 E；",
          "D": "描述 D、描述 E、描述 F"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。\n描述 A 錯誤：`Input(shape=(32, 32, 3))` 目的僅是定義輸入張量的維度結構，並不執行資料標準化運算。\n描述 B 錯誤：第一層卷積 `Conv2D(32, (3,3), padding='same')` 由於使用了 `padding='same'`，特徵圖的空間維度會保持不變，因此輸出形狀依然是 (32, 32, 32)，而非 (32, 32, 3)（後面的 32 是過濾器數量）。\n描述 C 正確：BatchNormalization 能夠重新對齊特徵分佈，放置在 Conv2D 之後能有效緩解內部協變量偏移（Internal Covariate Shift），從而減少深層網路中的梯度消失或爆炸問題。\n描述 D 錯誤：`Dropout(0.25)` 的意義是隨機將 25% 的神經元輸出「設為 0」（即暫時關閉），而不是設定為 1。\n描述 E 正確：Dropout 是一種強大的正則化技術，透過隨機丟棄神經元，強迫網路學習更強健的特徵，有效減少過度擬合（Overfitting）。\n描述 F 正確：Flatten 層的作用是將卷積層輸出的 3D 張量（特徵圖，長x寬x通道數）展平攤開成一維的 1D 向量，才能夠無縫接入後方的 Dense（全連結）層進行分類計算。",
        "ml_method": "Convolutional Neural Networks (Batch Normalization & Dropout)",
        "ml_method_explanation": "在建構現代卷積神經網路（CNN）時，Batch Normalization（批次正規化）與 Dropout 是兩個不可或缺的穩定與正則化機制。當資料在深層神經網路的各層之間傳遞時，其分佈會不斷發生改變，這被稱為「內部協變量偏移（Internal Covariate Shift）」，導致模型收斂極慢且容易陷入梯度消失。Batch Normalization 透過在每一層運算後強制將數據的平均值拉回 0、變異數拉回 1，確保了神經網路中資訊流動的穩定性，並允許使用更大的學習率。另一方面，深層網路因為參數過多，極容易對訓練資料死背（過度擬合）。Dropout 技術在每一次訓練迭代中，隨機「關閉」一定比例的神經元，這迫使網路不能過度依賴任何單一路徑或特定特徵，彷彿讓模型在殘缺的條件下進行訓練，大幅增強了模型面對未見過資料時的泛化與抗干擾能力。",
        "examples": [
          "自動駕駛汽車的光學雷達（LiDAR）點雲分析：工程師使用 3D CNN 分析雷達數據以辨識周圍的行人與車輛。為了加速複雜 3D 卷積的收斂時間並穩定訓練動態，他們在每一個卷積層後都加入了 Batch Normalization，將模型訓練時間從一週縮短至三天。",
          "無人機農田病蟲害空拍辨識：由於能收集到的病蟲害農田照片數量有限，CNN 模型極易出現過度擬合，在測試集上準確率很低。AI 團隊在網路的全連結層與高階卷積層中加入了高比例（例如 0.5）的 Dropout 機制。這成功迫使模型放棄死背特定的泥土背景，轉而專注於學習葉片上真實的病斑紋理。"
        ],
        "comparison": "Batch Normalization 與 Dropout 都是深層神經網路中極具代表性的優化元件，但目的截然不同。Batch Normalization 旨在解決「內部協變量偏移」，透過標準化隱藏層的數值分佈來加速收斂、穩定梯度並允許更大的學習率，猶如為深度學習的引擎加上潤滑油；而 Dropout 則是一種強烈的正則化（Regularization）手段，透過隨機癱瘓神經元迫使模型在不完整的資訊下學習冗餘與強健的特徵，專門用來對抗過擬合（Overfitting），猶如在訓練士兵時隨機遮蔽視線以鍛鍊直覺。兩者在現代 CNN 架構中常被交替或組合使用以發揮最大綜效。",
        "keywords": [
          "批次正規化 (Batch Normalization)",
          "丟棄法 (Dropout)",
          "內部協變量偏移 (Internal Covariate Shift)",
          "卷積神經網路 (CNN)",
          "正則化 (Regularization)",
          "過擬合防制 (Overfitting Prevention)"
        ],
        "extended_tech": [
          {
            "name": "層正規化 (Layer Normalization)",
            "desc": "在 RNN 或 Transformer 模型中取代 Batch Normalization 的核心技術。它不依賴批次（Batch）大小，而是對單一訓練樣本內的所有隱藏層特徵進行標準化計算，非常適合處理變長度的自然語言序列。"
          },
          {
            "name": "空間丟棄法 (Spatial Dropout)",
            "desc": "專為卷積神經網路（CNN）改良的 Dropout 版本。因為相鄰像素具有高度相關性，隨機丟棄單個像素效果不彰，Spatial Dropout 會一次性丟棄整個 2D 特徵圖（Feature Map），逼迫網路依賴其他通道的特徵學習。"
          },
          {
            "name": "權重衰減正則化 (Weight Decay / L2 Regularization)",
            "desc": "在深度學習的優化器（如 AdamW、SGD）層級中，對網路中所有的權重參數施加一個持續縮小的懲罰力道，防止網路為擬合雜訊而生成極端巨大的參數值，與 Dropout 相輔相成。"
          }
        ],
        "terminology": [
          "Batch Normalization",
          "Dropout",
          "Flatten",
          "Internal Covariate Shift",
          "Dense Layer"
        ]
      },
      {
        "id": 48,
        "question": "參考下圖繪圖結果，當Epochs=6時，訓練曲線值(0.81)明顯大於驗證曲線值(0.72)，下列何者為最可能的原因？",
        "options": {
          "A": "學習率（Learning Rate）太低；",
          "B": "批次大小（Batch Size）設定太大；",
          "C": "模型低度擬合（Underfitting）；",
          "D": "模型過擬合（Overfitting）"
        },
        "answer": "D",
        "explanation": "正確答案為 (D)。從圖表中可見，隨著 Epoch 增加，訓練集準確率（Train Accuracy，藍線）持續穩定上升並突破 0.8，但驗證集準確率（Validation Accuracy，紅線）在 Epoch 4 之後卻開始劇烈震盪甚至停滯下降（落在 0.7 左右）。這種「訓練表現極佳，但驗證表現明顯落後」是機器學習中最典型的「過度擬合（Overfitting）」現象。這表示模型已經開始死背訓練資料中的特定雜訊與細節，喪失了對未知測試資料的泛化能力。(A) 與 (B) 主要是影響收斂速度與穩定性；(C) 低度擬合則是訓練和驗證表現都非常差，與圖表不符。",
        "ml_method": "Overfitting / Learning Curves Analysis",
        "ml_method_explanation": "過度擬合（Overfitting）是機器學習訓練市最常面臨的挑戰。當模型的複雜度（如深度學習的層數與參數）遠大於任務所需，或是訓練資料量嚴重不足時，模型不但會學習到資料背後的通用規律，還會將訓練集特有的雜訊、誤差甚至是個案特徵一併「死背」下來。在訓練曲線（Learning Curves）的視覺化分析中，過度擬合有一個非常明確的特徵：訓練損失（Train Loss）會持續下降、訓練準確率持續飆升，但驗證損失（Validation Loss）卻在達到一個最佳點（Sweet Spot）後開始反彈上升，驗證準確率也隨之停滯或下降。解決過度擬合的有效策略包含：提早停止訓練（Early Stopping）、增加正則化懲罰（如 L1/L2、Dropout）、減少模型參數，或是引入大量且多樣化的資料增強（Data Augmentation）來豐富訓練集。",
        "examples": [
          "股市預測模型的開發：量化交易員使用一個包含數十萬個參數的 LSTM 神經網路來預測特定股票的明日漲跌。模型在過去五年的歷史資料（訓練集）上達到了 95% 的驚人勝率，但一用在今年初的新資料（驗證集）上，勝率卻暴跌至 40%。這代表模型發生了嚴重的過度擬合，死背了過去五年的歷史波段，而無法應對市場的新變化。",
          "智慧音箱的語音喚醒功能：初版語音模型在實驗室的安靜環境下（訓練集）收集的指令錄音中，辨識率高達 99%。但放入真實家庭環境測試時（驗證集），因為背景充滿了電視聲與冷氣運轉聲，喚醒成功率大幅下降。開發團隊察覺到過度擬合現象後，隨即在訓練資料中混入各種環境噪音進行資料增強，成功提升了模型的泛化抗干擾能力。"
        ],
        "comparison": "在分析學習曲線時，過擬合（Overfitting）表現為訓練準確率持續上升但驗證準確率停滯甚至下降的「兩線開口喇叭狀」，代表模型記憶力過剩而泛化失敗，需依賴正則化、提早停止或資料增強來踩剎車；相反地，低度擬合（Underfitting）則是訓練與驗證準確率雙雙低迷且難以提升，代表模型能力太弱根本無法捕捉資料規律，此時必須增加神經網路層數、改用更複雜演算法或降低正則化懲罰。若學習率太低，學習曲線則會呈現極度緩慢且平滑的龜速上升，不會出現兩線巨大差距的反差現象。",
        "keywords": [
          "過擬合 (Overfitting)",
          "學習曲線 (Learning Curves)",
          "泛化能力 (Generalization Ability)",
          "訓練準確率 (Train Accuracy)",
          "驗證準確率 (Validation Accuracy)",
          "提早停止 (Early Stopping)"
        ],
        "extended_tech": [
          {
            "name": "提早停止訓練 (Early Stopping)",
            "desc": "深度學習中對抗過擬合最實用且直觀的技巧。在訓練迴圈中持續監控驗證集損失（Validation Loss），當發現驗證損失連續 N 個 Epoch 不降反升時，系統自動中斷訓練並倒退回損失最低的最佳模型權重點。"
          },
          {
            "name": "交叉驗證整合 (Ensemble with Cross-Validation)",
            "desc": "為了進一步確保模型不受特定資料切分產生的過擬合干擾，將 K-Fold 訓練出的 K 個模型，在推論階段進行軟投票（Soft Voting）平均，透過集體智慧進一步提升對未知的泛化穩定度。"
          },
          {
            "name": "主動學習資料擴充 (Active Learning)",
            "desc": "當模型發生過度擬合且標註成本極高時，利用 AI 模型主動挑選出其預測「最沒信心」或「不確定性最高」的無標籤邊緣樣本交由人類標註，以最少的標籤成本快速填補模型的知識盲區。"
          }
        ],
        "terminology": [
          "Overfitting",
          "Underfitting",
          "Learning Curve",
          "Validation Loss",
          "Generalization"
        ]
      },
      {
        "id": 49,
        "question": "若團隊需要建立一個超過 50 層的深層神經網路，以捕捉晶圓表面細微的劃傷特徵，但又擔心傳統深層網路常見的梯度消失（Vanishing Gradient）問題，則下列哪一種經典架構最適合優先考慮？",
        "options": {
          "A": "VGG（Visual Geometry Group）：透過重複堆疊3×3 卷積層與池化層來維持梯度穩定；",
          "B": "GoogLeNet：透過 Inception 模塊並行使用不同大小的卷積核，以避免深層網路的梯度問題；",
          "C": "ResNet（Residual Network）：透過殘差連接（Residual Connection / Skip Connection），使梯度能跨層傳遞並降低深層訓練困難；",
          "D": "Vision Transformer（ViT）：完全捨棄卷積，因此不會出現任何深層模型的訓練問題"
        },
        "answer": "C",
        "explanation": "正確答案為 (C)。當神經網路層數極深（如 50 層、100 層以上）時，在反向傳播計算梯度會產生嚴重的梯度消失現象，導致底層權重無法更新。ResNet（殘差網路）透過引入跨層的「殘差連接（Skip Connection）」，在網路中建立了一條讓梯度和資訊可以直接暢通無阻傳遞的「捷徑（Shortcut）」。這從根本上解決了深層網路極難訓練的問題，使得建構數百層的超深網路成為可能。(A) VGG 網路過深時仍會遭遇梯度消失；(B) GoogLeNet 主要優勢在多尺度特徵，雖有輔助分類器但深層訓練穩定度不如 ResNet；(D) ViT 沒有捨棄訓練困難，極深 Transformer 同樣面臨優化挑戰。",
        "ml_method": "ResNet (Residual Networks) / Skip Connections",
        "ml_method_explanation": "ResNet（殘差網路）是深度學習發展史上的一座巨大里程碑，由何愷明等人於 2015 年提出。在 ResNet 誕生前，傳統卷積網路只要層數堆疊超過 20 幾層，就會面臨「退化問題（Degradation Problem）」——網路越深，訓練誤差反而越高，這主要是由於梯度消失所引起。ResNet 巧妙地引入了「殘差連接（Residual Connection 或 Skip Connection）」的概念。它在網路模塊中加入了一條繞過卷積層的快速通道，將前一層的輸入直接與後一層的輸出相加（即 H(x) = F(x) + x）。這意味著網路不再需要從頭學習完整的映射，而是只需學習微小的「殘差（差異）」。在反向傳播時，梯度可以透過這條加法捷徑，無損地直接傳導回淺層網路。這項技術徹底解放了神經網路的深度限制，成為現代所有頂尖 AI 模型（包括 Transformer 與 ChatGPT）不可或缺的核心基礎架構。",
        "examples": [
          "衛星雲圖的極端氣候預測：氣象局的超級電腦利用上百層的深層神經網路來捕捉大氣流體力學的微小變化特徵，以預測颱風路徑。因為網路極深，工程師採用了 ResNet 架構，利用其殘差連接確保最底層處理原始雲圖像素的神經元，能夠順利收到來自頂層預測誤差的更新梯度，精準調整學習方向。",
          "高階醫學核磁共振（MRI）影像重建：為了從低解析度的掃描訊號中重建出高清晰度的器官 3D 模型，系統需要極度複雜深邃的非線性轉換。研究團隊運用帶有殘差連接結構的 3D-ResNet 網路，不僅讓 150 層深的模型順利收斂，殘差捷徑還保護了原始 MRI 影像的粗略輪廓資訊不會在深層傳遞中丟失。"
        ],
        "comparison": "ResNet 透過革命性的殘差連接（Skip Connection）完美解決了超過 50 層甚至上百層超深網路的「梯度消失」痛點，成為現代複雜影像特徵捕捉的工業標準架構；相較之下，早期的 VGG 架構僅依賴暴力堆疊 3x3 卷積，一旦超過 20 層便難以收斂且計算成本過於臃腫；GoogLeNet 則透過 Inception 多尺度模組專注於拓寬神經網路的寬度與特徵捕捉廣度，雖有輔助分類器協助，但其在追求極端深度的擴展性上仍不如 ResNet 簡潔優雅；而 Vision Transformer (ViT) 雖捨棄卷積改用自注意力機制捕捉全局依賴，但在極深架構下同樣依賴殘差連接才能穩定訓練。",
        "keywords": [
          "殘差網路 (ResNet)",
          "殘差連接 (Residual Connection / Skip Connection)",
          "梯度消失 (Vanishing Gradient)",
          "深度卷積神經網路 (Deep CNN)",
          "反向傳播 (Backpropagation)",
          "退化問題 (Degradation Problem)"
        ],
        "extended_tech": [
          {
            "name": "高效率卷積網路 (EfficientNet)",
            "desc": "Google 提出的網路縮放架構。它透過神經架構搜尋（NAS）技術，在網路的深度、寬度以及影像解析度三個維度間找到最佳的平衡點，能在參數極少的情況下超越傳統 ResNet 的效能。"
          },
          {
            "name": "密集連接卷積網路 (DenseNet)",
            "desc": "殘差網路的極致進階版。它不是單純將前後層相加，而是讓每一層都直接接收前面「所有層」的輸出作為輸入。這種高密度的特徵重用（Feature Reuse）進一步強化了梯度流動並節省了參數量。"
          },
          {
            "name": "視覺變換器 (Vision Transformer, ViT)",
            "desc": "近年來挑戰 CNN 霸主地位的革命性架構。將圖片切割成一個個區塊（Patches）並視為文字序列，利用 Transformer 的全局自注意力機制處理，在擁有海量訓練資料時展現出無與倫比的效能。"
          }
        ],
        "terminology": [
          "ResNet",
          "Residual Connection",
          "Vanishing Gradient",
          "VGG",
          "GoogLeNet",
          "Skip Connection"
        ]
      },
      {
        "id": 50,
        "question": "為了修復訓練過程中 Loss 突然變成 NaN 的問題，工程師考慮在 PyTorch 訓練迴圈中加入梯度裁剪（Gradient Clipping）機制，例如 torch.nn.utils.clip_grad_norm_。若要正確加入梯度裁剪，最適合插入於哪個位置？其主要作用為何？",
        "options": {
          "A": "插入於位置 3 與位置 4 之間；用以限制 Loss 數值大小，避免梯度消失；",
          "B": "插入於位置 4 與位置 5 之間；用以限制梯度範數過大，避免更新步幅失控導致數值不穩；",
          "C": "插入於位置 5 之後；用以將更新後的權重強制壓縮回正常範圍；",
          "D": "插入於位置 1 與位置 2 之間；用以對輸入影像進行批次標準化"
        },
        "answer": "B",
        "explanation": "正確答案為 (B)。在 PyTorch 的標準訓練迴圈中，順序依序為：(1) 清空梯度 `optimizer.zero_grad()`，(2) 前向傳播計算輸出 `model(images)`，(3) 計算損失 `criterion()`，(4) 反向傳播計算梯度 `loss.backward()`，最後 (5) 更新權重 `optimizer.step()`。梯度裁剪（Gradient Clipping）的作用是限制「計算出來的梯度大小」，防止梯度爆炸導致權重更新過大產生 NaN（Not a Number）。因此，它必須在梯度計算完成（backward 之後）且權重更新（step 之前）的階段進行，也就是位置 4 與 5 之間。",
        "ml_method": "Gradient Clipping",
        "ml_method_explanation": "梯度裁剪（Gradient Clipping）是深度學習訓練中，應對「梯度爆炸（Exploding Gradients）」問題的一項極為實用且暴力的保護技術。在訓練深層網路或是循環神經網路（RNN, LSTM）時，由於誤差梯度在反向傳播過程中會經歷連續多次的矩陣相乘，如果權重矩陣的最大特徵值大於 1，梯度會呈指數級別膨脹。當膨脹的梯度龐大到超出電腦硬體（如 float32）能表示的數值極限時，系統就會產生無限大（Inf）或非數值（NaN），導致訓練瞬間崩潰。梯度裁剪的運作原理是在執行 `loss.backward()` 之後，系統會檢查網路上所有參數梯度的總範數（Norm）是否超過了開發者設定的閾值。如果超過了，系統會等比例將所有梯度縮小回安全的範圍內。這樣既保留了梯度的方向（確保模型依然往正確的方向學習），又強制限制了更新的步伐，讓模型能夠安然度過訓練地貌中極度陡峭的懸崖區域。",
        "examples": [
          "即時股市高頻交易演算法訓練：量化團隊使用 LSTM 模型分析長達數萬步的 tick 級別逐筆交易資料。因為時間序列過長，模型在反向傳播時極易發生梯度爆炸導致訓練崩潰當機。工程師在訓練迴圈中加入了梯度裁剪機制，強迫把異常巨大的梯度向量削平，終於讓模型穩定的收斂並學習到規律。",
          "多模態大型語言模型的微調：一家 AI 公司在同時輸入高解析度圖片與超長文本來微調多模態大模型時，發現偶爾會遇到髒資料（如損壞的圖片），導致該批次計算出極度巨大的損失誤差與梯度，直接將原本優良的權重破壞成 NaN。工程師引入梯度裁剪作為安全閥，成功防止了個別劣質資料毀滅整個訓練進程。"
        ],
        "comparison": "梯度裁剪（Gradient Clipping）針對的是深層或時間序列網路中因為連續矩陣相乘引發的「梯度爆炸（Exploding Gradients）」，透過強行削平異常巨大的梯度向量來避免更新步幅失控與數值 NaN，是 RNN 與 Transformer 訓練的必備安全閥；相比之下，Batch Normalization 旨在處理「內部協變量偏移」，透過層與層之間的資料分佈標準化來穩定資訊流動；而 L2 正則化（Weight Decay）雖然也限制了數值膨脹，但它作用在權重本身而非動態的梯度上，主要用於防止模型記憶雜訊造成過擬合。三者雖都能提升訓練穩定性，但解決的痛點維度完全不同。",
        "keywords": [
          "梯度裁剪 (Gradient Clipping)",
          "梯度爆炸 (Exploding Gradients)",
          "反向傳播 (Backpropagation)",
          "訓練穩定性 (Training Stability)",
          "非數值崩潰 (NaN Loss)",
          "PyTorch訓練迴圈 (Training Loop)"
        ],
        "extended_tech": [
          {
            "name": "混合精度訓練 (Mixed Precision Training)",
            "desc": "在神經網路訓練中同時使用 FP16 與 FP32 數值格式的技術。能大幅減少記憶體佔用並加速運算，但因為 FP16 的數值範圍極小，非常容易產生梯度下溢或爆炸，必須搭配梯度縮放（Gradient Scaling）與裁剪共同使用。"
          },
          {
            "name": "梯度累積 (Gradient Accumulation)",
            "desc": "當受限於 GPU 顯存無法使用大 Batch Size 時，在多個小批次的前向與反向傳播中持續累加（但不更新）梯度，直到達到目標累積步數後才執行一次 optimizer.step()，以此模擬大 Batch Size 的平滑訓練效果。"
          },
          {
            "name": "學習率預熱與衰減 (Warmup and Decay)",
            "desc": "優化器策略。在訓練初期極易發生梯度爆炸不穩定的階段，使用極小的學習率進行熱身（Warmup），待模型權重適應分佈後再拉高學習率，隨後緩慢衰減以收斂至最低點，常與梯度裁剪搭配穩定 Transformer 模型。"
          }
        ],
        "terminology": [
          "Gradient Clipping",
          "Exploding Gradients",
          "NaN (Not a Number)",
          "loss.backward()",
          "optimizer.step()"
        ]
      }
    ]
  }
};