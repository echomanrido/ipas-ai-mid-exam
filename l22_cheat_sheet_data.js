// AI 核心考點速記資料庫 - 科目2（L22 大數據處理分析與應用）
const L22_CHEATSHEET_DATA = [
  // ==========================================
  // L221: 機率統計基礎 (集中離散、分佈模型、假設檢定)
  // ==========================================
  {
    id: "l22_01",
    category: "L221",
    code: "L22101",
    title: "集中趨勢三指標：平均數 vs 中位數 vs 眾數",
    summary: "平均數（Mean）：所有數值總和除以樣本數，對極端值（Outliers）極度敏感；中位數（Median）：排序後正中間的值，抗極端值穩健（Robust）；眾數（Mode）：出現頻率最高的值，適用於類別資料。",
    confusing: [
      "若資料存在嚴重偏態（如薪資、財富分佈存在少數超高收入者），平均數會被嚴重拉高，此時「中位數」遠比平均數更能代表大眾真實水準！"
    ],
    keywords: ["集中趨勢", "平均數", "中位數", "眾數", "偏態", "抗極端值"],
    examRefs: [
      { subj: "115_1_1", qId: 38, note: "常態分佈平均值與標準差" }
    ]
  },
  {
    id: "l22_02",
    category: "L221",
    code: "L22101",
    title: "離散趨勢指標：標準差 vs 四分位距 (IQR)",
    summary: "全距（Range: 最大減最小）；變異數與標準差（Variance & SD: 衡量與平均數的離散程度）；四分位距（IQR = $Q_3 - Q_1$）：衡量中間 50% 資料的分散幅度。",
    confusing: [
      "標準差與變異數同樣會受到極端值的劇烈拉扯；當資料非對稱或有極端值時，應優先採用四分位距（IQR）作為離散度指標。"
    ],
    keywords: ["離散趨勢", "標準差", "變異數", "IQR", "四分位距"],
    examRefs: [
      { subj: "115_1_1", qId: 38, note: "感測器資料分佈與極端值判斷" }
    ]
  },
  {
    id: "l22_03",
    category: "L221",
    code: "L22101",
    title: "偏態（Skewness）與峰態（Kurtosis）判別口訣",
    summary: "正偏態（右偏, Right-skewed）：尾巴拖在右邊長端，平均數 > 中位數 > 眾數；負偏態（左偏, Left-skewed）：尾巴拖在左邊長端，眾數 > 中位數 > 平均數。",
    confusing: [
      "口訣：看「尾巴往哪拖」就叫什麼偏！尾巴在右（高數值端）就是右偏/正偏；峰態 > 3 為高狹峰（尖銳厚尾），峰態 < 3 為低闊峰（平坦薄尾）。"
    ],
    keywords: ["偏態", "正偏態", "負偏態", "峰態", "右偏", "左偏"],
    examRefs: [
      { subj: "114_2_1", qId: 26, note: "迴歸模型特徵偏態與特徵轉換" }
    ]
  },
  {
    id: "l22_04",
    category: "L221",
    code: "L22102",
    title: "常態分佈（高斯分佈）與 68-95-99.7 法則",
    summary: "對稱鐘形曲線，均值 $\\mu$ 與標準差 $\\sigma$ 決定形狀：約 68.3% 資料落於 $\\mu \\pm 1\\sigma$、95.4% 落於 $\\mu \\pm 2\\sigma$、99.7% 落於 $\\mu \\pm 3\\sigma$（3-Sigma 法則）。",
    confusing: [
      "標準常態分佈（Z分佈）：均值 $\\mu = 0$、標準差 $\\sigma = 1$。Z-score 公式：$Z = \\frac{X - \\mu}{\\sigma}$，絕對值大於 3 視為離群異常值。"
    ],
    keywords: ["常態分佈", "高斯分佈", "3-Sigma", "68-95-99.7", "Z-Score"],
    examRefs: [
      { subj: "115_1_1", qId: 38, note: "工廠溫度感測器以 3 個標準差判定異常" }
    ]
  },
  {
    id: "l22_05",
    category: "L221",
    code: "L22102",
    title: "中央極限定理（Central Limit Theorem, CLT）",
    summary: "不論母體原本為何種分佈（即使是均勻、偏態或未知分佈），只要每次抽樣的樣本數 $N$ 足夠大（通常 $N \\ge 30$），樣本平均數的抽樣分佈必趨近於常態分佈！",
    confusing: [
      "中央極限定理保證的是「樣本平均數的抽樣分佈」趨近常態，而不是「母體本身」或「個別單一抽樣數據」會變成常態！"
    ],
    keywords: ["中央極限定理", "CLT", "抽樣分佈", "大樣本", "N>=30"],
    examRefs: [
      { subj: "114_2_3", qId: 1, note: "抽樣分佈與常態收斂特性" }
    ]
  },
  {
    id: "l22_06",
    category: "L221",
    code: "L22102",
    title: "常用機率分佈適用情境對照",
    summary: "① 二項分佈（Binomial）：獨立重複 $n$ 次伯努利試驗（只有成/敗兩種結果）；② 泊松分佈（Poisson）：固定時間/空間內稀有事件發生次數（如每小時客服進線數）；③ t 分佈：小樣本且母體標準差未知。",
    confusing: [
      "當二項分佈試驗次數 $n$ 極大、成功機率 $p$ 極小時，二項分佈可近似為泊松分佈；當 t 分佈自由度 $df \\to \\infty$ 時，t 分佈等同於標準常態分佈。"
    ],
    keywords: ["二項分佈", "泊松分佈", "t分佈", "卡方分佈", "自由度"],
    examRefs: [
      { subj: "114_2_1", qId: 39, note: "時間序列稀有事件泊松到達" }
    ]
  },
  {
    id: "l22_07",
    category: "L221",
    code: "L22103",
    title: "假設檢定核心架構：$H_0$ vs $H_1$",
    summary: "虛無假設 $H_0$（現狀、無效應、無差異、模型無改進）；對立假設 $H_1$（研究者希望證明的假設、有效應、有顯著差異）。",
    confusing: [
      "統計檢定是「無罪推定原則」：先預設 $H_0$ 為真，只有當取得的證據極為極端（小於顯著水準 $\\alpha$）時，才拒絕 $H_0$ 並接受 $H_1$！"
    ],
    keywords: ["假設檢定", "虛無假設", "對立假設", "H0", "H1", "無罪推定"],
    examRefs: [
      { subj: "115_1_1", qId: 43, note: "A/B 測試新舊演算法顯著性檢驗" }
    ]
  },
  {
    id: "l22_08",
    category: "L221",
    code: "L22103",
    title: "型一錯誤（$\\alpha$）vs 型二錯誤（$\\beta$）",
    summary: "① 型一錯誤（Type I Error, $\\alpha$ / 偽陽性）：$H_0$ 為真卻錯誤拒絕（冤枉好人）；② 型二錯誤（Type II Error, $\\beta$ / 偽陰性）：$H_0$ 為偽卻未拒絕（放過壞人）。",
    confusing: [
      "檢定力（Statistical Power）= $1 - \\beta$，代表當對立假設確實為真時，正確拒絕虛無假設的機率。樣本數 $N$ 增加可同時降低 $\\alpha$ 與 $\\beta$。"
    ],
    visualHtml: `
      <div style="overflow-x:auto; margin:0.5rem 0;">
        <table style="width:100%; font-size:0.75rem; border-collapse:collapse; text-align:center;">
          <tr style="background:var(--bg-main);">
            <th style="padding:0.35rem; border:1px solid var(--border-color);">真實情況</th>
            <th style="padding:0.35rem; border:1px solid var(--border-color);">接受 $H_0$ (判定無效)</th>
            <th style="padding:0.35rem; border:1px solid var(--border-color); color:var(--primary);">拒絕 $H_0$ (判定有效)</th>
          </tr>
          <tr>
            <td style="padding:0.35rem; border:1px solid var(--border-color); font-weight:600;">$H_0$ 為真 (無效)</td>
            <td style="padding:0.35rem; border:1px solid var(--border-color); background:#ecfdf5; color:#059669;">正確決策 ($1-\\alpha$)</td>
            <td style="padding:0.35rem; border:1px solid var(--border-color); background:#fef2f2; color:#dc2626; font-weight:700;">型一錯誤 $\\alpha$ (偽陽性)</td>
          </tr>
          <tr>
            <td style="padding:0.35rem; border:1px solid var(--border-color); font-weight:600;">$H_1$ 為真 (有效)</td>
            <td style="padding:0.35rem; border:1px solid var(--border-color); background:#fffbeb; color:#b45309; font-weight:700;">型二錯誤 $\\beta$ (偽陰性)</td>
            <td style="padding:0.35rem; border:1px solid var(--border-color); background:#ecfdf5; color:#059669;">檢定力 ($1-\\beta$)</td>
          </tr>
        </table>
      </div>
    `,
    keywords: ["型一錯誤", "型二錯誤", "偽陽性", "偽陰性", "檢定力", "Power"],
    examRefs: [
      { subj: "114_2_1", qId: 10, note: "Precision 針對偽陽性、Recall 針對偽陰性" }
    ]
  },
  {
    id: "l22_09",
    category: "L221",
    code: "L22103",
    title: "p-value 決策口訣",
    summary: "p-value 是指在 $H_0$ 為真的假設下，觀察到目前樣本結果或更極端結果的機率。若 $p \\le \\alpha$（通常取 0.05 或 0.01），拒絕 $H_0$，代表結果達到統計顯著差異！",
    confusing: [
      "口訣：「p 值小於 $\\alpha$ 拒絕虛無，p 值大於 $\\alpha$ 無可奈何」。切記：p-value 不是 $H_0$ 為真的機率，也不能直接衡量效應量的大小！"
    ],
    keywords: ["p-value", "顯著水準", "拒絕虛無假設", "統計顯著性"],
    examRefs: [
      { subj: "115_1_1", qId: 43, note: "A/B 測試 p-value 判定顯著性" }
    ]
  },
  {
    id: "l22_10",
    category: "L221",
    code: "L22103",
    title: "常見假設檢定方法抉擇",
    summary: "① 獨立雙樣本 t 檢定：比較兩組連續變數平均數差異；② 配對 t 檢定：比較同一群體前後測差異；③ ANOVA 變異數分析：比較三組以上平均數差異；④ 卡方檢定（Chi-Square）：比較類別變數的獨立性或擬合度。",
    confusing: [
      "若比較三組以上平均數，嚴禁兩兩做多次 t 檢定，否則會導致累積型一錯誤機率劇烈膨脹；必須先做 ANOVA，顯著後再做事後多重比較（Post-hoc test）。"
    ],
    keywords: ["t檢定", "配對t檢定", "ANOVA", "卡方檢定", "獨立性檢定"],
    examRefs: [
      { subj: "114_2_1", qId: 10, note: "不同分組指標檢驗" }
    ]
  },

  // ==========================================
  // L222: 大數據處理技術 (5V、ETL vs ELT、Lakehouse、Spark、NoSQL)
  // ==========================================
  {
    id: "l22_11",
    category: "L222",
    code: "L22201",
    title: "大數據 5V 特性",
    summary: "① Volume（資料量海量）：TB、PB 級以上；② Velocity（產生處理高速）：即時串流；③ Variety（模態多樣性）：結構化、半結構化與非結構化；④ Veracity（真實性/準確度）：含有雜訊與不確定性；⑤ Value（商業價值密度低）：沙裡淘金。",
    confusing: [
      "大數據的核心挑戰不僅是「資料量大（Volume）」，更在於「處理延遲要求高（Velocity）」與「非結構化資料佔比超過 80%（Variety）」。"
    ],
    keywords: ["大數據5V", "Volume", "Velocity", "Variety", "Veracity", "Value"],
    examRefs: [
      { subj: "114_2_1", qId: 27, note: "半結構化 JSON 日誌處理與特徵萃取" }
    ]
  },
  {
    id: "l22_12",
    category: "L222",
    code: "L22201",
    title: "ETL vs ELT 現代架構典範轉移",
    summary: "① 傳統 ETL（Extract ➔ Transform ➔ Load）：資料先在專屬 ETL 伺服器清理轉換後，才載入資料倉儲，算力受限於 ETL 引擎；② 現代 ELT（Extract ➔ Load ➔ Transform）：資料先原樣載入強大雲端湖倉（BigQuery/Snowflake），再依需用 SQL 轉換。",
    confusing: [
      "現代大數據專案首選 ELT：完整保留原始 Raw Data 以供未來重新探索，並利用雲端分散式運算彈性大幅降低前置處理等待時間。"
    ],
    keywords: ["ETL", "ELT", "資料轉換", "BigQuery", "Snowflake", "資料倉儲"],
    examRefs: [
      { subj: "114_2_1", qId: 28, note: "特徵工程流程與自動化資料管線" }
    ]
  },
  {
    id: "l22_13",
    category: "L222",
    code: "L22201",
    title: "批次處理 (Batch) vs 串流處理 (Streaming)",
    summary: "批次處理：收集一定週期（每日/每小時）的海量靜態數據統一計算，高吞吐量、高延遲（如 Hadoop/Spark Batch）；串流處理：資料逐筆以毫秒級事件抵達即時處理，低延遲（如 Kafka/Flink/Spark Streaming）。",
    confusing: [
      "即時詐欺偵測、高頻交易、自駕車路況感測 ➔ 必須串流處理；財務月結報表、大規模模型重訓 ➔ 批次處理。"
    ],
    keywords: ["批次處理", "串流處理", "Batch", "Streaming", "吞吐量", "即時性"],
    examRefs: [
      { subj: "114_2_1", qId: 31, note: "每秒上萬次請求即時推論與批次分流" },
      { subj: "115_1_1", qId: 20, note: "100ms 內即時推薦串流架構" }
    ]
  },
  {
    id: "l22_14",
    category: "L222",
    code: "L22203",
    title: "大數據架構演進：Lambda vs Kappa",
    summary: "Lambda 架構：雙軌制，批次層（確保全面正確性）+ 速度層（確保即時性）+ 服務層；Kappa 架構：移除批次層，將所有資料視為不可變的串流事件，單一流式引擎統一處理。",
    confusing: [
      "Lambda 架構最大痛點在於「同一套業務邏輯要用兩種語言寫兩次（如 Spark 批次 + Flink 串流）」導致維護成本高；Kappa 架構使用單一串流管線簡化維護。"
    ],
    keywords: ["Lambda架構", "Kappa架構", "速度層", "批次層", "Flink", "Kafka"],
    examRefs: [
      { subj: "115_1_1", qId: 24, note: "即時詐欺串流低延遲架構" }
    ]
  },
  {
    id: "l22_15",
    category: "L222",
    code: "L22202",
    title: "NoSQL 資料庫四大類型與選型對照",
    summary: "① 鍵值（Key-Value, 如 Redis）：極致讀寫速度、快取與 Session；② 文件型（Document, 如 MongoDB）：巢狀 JSON、彈性 Schema；③ 欄位式（Column-family, 如 Cassandra/HBase）：海量寬表、時序感測資料；④ 圖形資料庫（Graph, 如 Neo4j）：多跳關聯、社交網絡、反洗錢金流追蹤。",
    confusing: [
      "查詢「朋友的朋友」等高階遞迴關係網絡時，關聯式資料庫需要無數次 JOIN 導致效能崩潰，此時「圖形資料庫」可快千倍以上！"
    ],
    keywords: ["NoSQL", "Redis", "MongoDB", "Cassandra", "Neo4j", "圖形資料庫"],
    examRefs: [
      { subj: "114_2_1", qId: 27, note: "半結構化 JSON 資料儲存與檢索" }
    ]
  },
  {
    id: "l22_16",
    category: "L222",
    code: "L22202",
    title: "分散式儲存定理：CAP 定理",
    summary: "分散式系統中不可兼得的三要素（只能三選二）：Consistency（強一致性, 所有節點同時看到相同資料）、Availability（高可用性, 每個請求皆獲回應）、Partition Tolerance（分區容忍性, 節點網路斷線仍能運作）。",
    confusing: [
      "由於分散式網路必定會遭遇延遲或斷線（P 是必選項），因此架構實際上是在 CP（一致性優先，如 HBase/ZooKeeper）與 AP（可用性優先，最終一致性，如 Cassandra/DynamoDB）之間取捨！"
    ],
    keywords: ["CAP定理", "Consistency", "Availability", "Partition Tolerance", "最終一致性"],
    examRefs: [
      { subj: "114_2_1", qId: 13, note: "分散式容器架構高可用性" }
    ]
  },
  {
    id: "l22_17",
    category: "L222",
    code: "L22202",
    title: "資料倉儲 vs 資料湖 vs 資料湖倉 (Lakehouse)",
    summary: "① 資料倉儲（Data Warehouse）：結構化資料、Schema-on-Write、高效能 BI 報表；② 資料湖（Data Lake）：原始多模態資料（文字/影像/音訊）、Schema-on-Read、成本低；③ 資料湖倉（Lakehouse）：結合兩者，在廉價物件儲存上實現 ACID 交易與治理（如 Delta Lake, Iceberg）。",
    confusing: [
      "資料湖若缺乏有效治理容易淪為「資料沼澤（Data Swamp）」；Lakehouse 帶來中繼資料管理層，讓 AI 模型訓練與 BI 報表可共用同一份單一真實數據來源（Single Source of Truth）。"
    ],
    keywords: ["Data Warehouse", "Data Lake", "Lakehouse", "Delta Lake", "Iceberg", "資料沼澤"],
    examRefs: [
      { subj: "115_1_1", qId: 39, note: "多模態訓練系統原始影像與文本資料儲存架構" }
    ]
  },
  {
    id: "l22_18",
    category: "L222",
    code: "L22203",
    title: "分散式計算核心：Hadoop vs Apache Spark",
    summary: "Hadoop MapReduce 每次 Map 與 Reduce 之間必須將中間結果寫入磁碟 HDFS，受到大量磁碟 I/O 拖累；Spark 採用記憶體彈性分散式資料集（RDD），支援記憶體快取與 DAG 執行圖，速度比 Hadoop 快 10~100 倍！",
    confusing: [
      "Spark 的「惰性求值（Lazy Evaluation）」：Transformation 算子（如 map, filter）只建立計算邏輯 DAG，只有當遇到 Action 算子（如 count, collect, save）時才會真正觸發分散式計算！"
    ],
    keywords: ["Spark", "Hadoop", "MapReduce", "RDD", "記憶體運算", "惰性求值"],
    examRefs: [
      { subj: "114_2_1", qId: 13, note: "分散式運算節點資源排程" }
    ]
  },
  {
    id: "l22_19",
    category: "L222",
    code: "L22203",
    title: "即時事件串流核心：Apache Kafka",
    summary: "分散式發布/訂閱訊息系統：具有極高吞吐量、水平擴展、資料持久化在磁碟並支援重播機制。核心概念：Producer（生產者）、Topic（主題）、Partition（分區）、Consumer Group（消費者組）。",
    confusing: [
      "Kafka 靠「Partition（分區）」實現水平平行處理與負載均衡；同一個 Consumer Group 內，每個 Partition 只會被組內的一個 Consumer 消費！"
    ],
    keywords: ["Kafka", "即時串流", "Partition", "Topic", "訊息佇列", "高吞吐量"],
    examRefs: [
      { subj: "115_1_1", qId: 44, note: "高併發長耗時推論採用佇列非同步解耦" }
    ]
  },

  // ==========================================
  // L223: 大數據分析方法與工具 (關聯分析、統計陷阱、分群、降維、視覺化)
  // ==========================================
  {
    id: "l22_20",
    category: "L223",
    code: "L22301",
    title: "大數據統計陷阱：大樣本偏差與多重檢定",
    summary: "① 大樣本效應：當樣本數達數百萬時，極微小且毫無實務商業意義的差異都會達到 $p < 0.05$ 顯著；② 多重檢定（Multiple Testing）：同時檢定 $m$ 個假設時，至少一個偽陽性的機率 $(1 - (1-\\alpha)^m)$ 會飆升接近 100%！",
    confusing: [
      "多重檢定必須採用校正方法：Bonferroni 校正（將顯著水準設為 $\\alpha / m$，極為嚴格）或控制錯誤發現率（FDR, Benjamini-Hochberg 程序）。"
    ],
    keywords: ["大樣本偏差", "多重檢定", "Bonferroni校正", "FDR", "偽陽性膨脹"],
    examRefs: [
      { subj: "115_1_1", qId: 43, note: "A/B 測試多重組別檢驗校正" }
    ]
  },
  {
    id: "l22_21",
    category: "L223",
    code: "L22301",
    title: "相關性不等於因果性與辛普森悖論",
    summary: "① 相關性不代表因果關係（如冰淇淋銷量與溺水人數高度正相關，背後共同干擾因子是夏天氣溫）；② 辛普森悖論（Simpson's Paradox）：在每個細分組別中均呈現正向趨勢，但合併整體資料時卻出現反轉逆向趨勢！",
    confusing: [
      "辛普森悖論發生的根本原因在於「未被觀測到的潛在混淆變數（Confounder）」且各組樣本權重嚴重失衡。唯有隨機對照試驗（A/B 測試 RCT）才能確立場景因果性！"
    ],
    keywords: ["辛普森悖論", "因果推論", "相關不等於因果", "混淆變數", "A/B測試"],
    examRefs: [
      { subj: "114_2_1", qId: 44, note: "策略模擬因果評估" }
    ]
  },
  {
    id: "l22_22",
    category: "L223",
    code: "L22302",
    title: "關聯規則探勘三大指標：Support / Confidence / Lift",
    summary: "以購物籃分析「買 A 是否會買 B」為例：① 支援度 Support = $P(A \\cap B)$；② 信賴度 Confidence = $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$；③ 提升度 Lift = $\\frac{P(B|A)}{P(B)}$。",
    confusing: [
      "若 $\\text{Lift} = 1$，表示買 A 與買 B 完全獨立，規則無效；若 $\\text{Lift} > 1$，才表示 A 對 B 具有「正向促進關聯」；若 $\\text{Lift} < 1$，表示兩者為互斥替代品！"
    ],
    keywords: ["關聯規則", "Support", "Confidence", "Lift", "購物籃分析", "Apriori"],
    examRefs: [
      { subj: "115_1_1", qId: 19, note: "推薦系統商品共現關聯分析" }
    ]
  },
  {
    id: "l22_23",
    category: "L223",
    code: "L22302",
    title: "關聯演算法：Apriori vs FP-Growth",
    summary: "Apriori：基於先驗性質「頻繁項集的所有非空子集必定也是頻繁的」，缺點是需反覆全表掃描資料庫且產生龐大候選集；FP-Growth：使用 FP-Tree 樹狀結構壓縮資料，僅需掃描資料庫兩次，速度比 Apriori 快數個數量級！",
    confusing: [
      "大數據高基數情境下，Apriori 容易因候選集過大導致記憶體爆炸（OOM），海量交易日誌首選 FP-Growth。"
    ],
    keywords: ["Apriori", "FP-Growth", "FP-Tree", "頻繁項集", "先驗性質"],
    examRefs: [
      { subj: "115_1_1", qId: 19, note: "海量交易日誌頻繁模式探勘" }
    ]
  },
  {
    id: "l22_24",
    category: "L223",
    code: "L22302",
    title: "非監督分群對照：K-Means vs DBSCAN",
    summary: "K-Means：基於距離將資料劃分至最近的 $K$ 個群心，適合凸狀/球狀簇，需預先指定 $K$，易受極端值干擾；DBSCAN：基於密度相連（$\\epsilon$ 鄰域半徑與 MinPts 最小點數），能發掘任意形狀簇並自動標記離群雜訊！",
    confusing: [
      "環形、月牙形或夾雜大量雜訊點的地理軌跡資料 ➔ 選 DBSCAN；資料維度高且分佈均勻 ➔ K-Means；DBSCAN 在超高維度（如 300 維）時受維度災難影響密度計算會失效。"
    ],
    keywords: ["K-Means", "DBSCAN", "分群", "密度相連", "任意形狀", "離群點檢測"],
    examRefs: [
      { subj: "114_2_1", qId: 11, note: "DBSCAN 密度分群自動過濾離群雜訊" },
      { subj: "115_1_1", qId: 31, note: "300 維高維特徵 DBSCAN 密度計算失效困境" }
    ]
  },
  {
    id: "l22_25",
    category: "L223",
    code: "L22302",
    title: "主成分分析（PCA）降維核心原理",
    summary: "無監督線性降維技術：尋找使投影後資料變異數最大的正交方向（主成分）。第一主成分 $PC_1$ 保留最大資訊量，各主成分之間完全相互正交（協方差為 0，徹底消除多重共線性）。",
    confusing: [
      "做 PCA 之前「必須先做標準化（Standardization）」！若特徵尺度不一，數值較大的特徵會錯誤主導整個主成分方向。PCA 只能捕獲線性關係，非線性關係可考慮 t-SNE 或 Autoencoder。"
    ],
    keywords: ["PCA", "主成分分析", "降維", "正交", "特徵縮放", "消除共線性"],
    examRefs: [
      { subj: "114_2_1", qId: 45, note: "PCA 影像特徵降維與消除多重共線性" },
      { subj: "115_1_1", qId: 30, note: "工廠感測器 200 維特徵 PCA 降維" }
    ]
  },
  {
    id: "l22_26",
    category: "L223",
    code: "L22302",
    title: "時間序列分析（Time Series）四大成分與 ARIMA",
    summary: "時間序列可分解為：趨勢（Trend）+ 季節性（Seasonality）+ 週期性（Cyclical）+ 隨機項（Residual）。ARIMA 模型三參數：AR(p) 自回歸、I(d) 差分（使序列定態）、MA(q) 移動平均。",
    confusing: [
      "ARIMA 建模的前提是序列必須「定態（Stationary）」（均值與變異數不隨時間改變）；非定態序列必須透過「差分（Differencing）」轉化為定態後才能建模！"
    ],
    keywords: ["時間序列", "ARIMA", "定態性", "差分", "季節性", "自回歸"],
    examRefs: [
      { subj: "114_2_1", qId: 39, note: "ARIMA 時間序列預測分析" }
    ]
  },
  {
    id: "l22_27",
    category: "L223",
    code: "L22303",
    title: "資料視覺化圖表選型心法",
    summary: "① 散佈圖（Scatter Plot）：觀察兩連續變數相關性；② 長條圖（Bar Chart）：離散類別數量大小比較；③ 直方圖（Histogram）：單一連續變數的分佈形狀；④ 箱形圖（Boxplot）：展示五數摘要與異常離群值；⑤ 熱力圖（Heatmap）：矩陣關聯或注意力強度。",
    confusing: [
      "長條圖與直方圖不可混淆！長條圖的柱子之間有間隙（離散類別，柱子順序可任意調換）；直方圖的柱子緊密相連（連續數值區間，順序絕對不可調換）。"
    ],
    keywords: ["長條圖", "直方圖", "散佈圖", "熱力圖", "視覺化圖表選型"],
    examRefs: [
      { subj: "115_1_1", qId: 9, note: "線上監控混淆矩陣熱力圖呈現" }
    ]
  },
  {
    id: "l22_28",
    category: "L223",
    code: "L22303",
    title: "箱形圖（Boxplot）五數綜合法與離群值判斷",
    summary: "箱形圖由五個關鍵統計量構成：下邊緣 Min、第一四分位數 $Q_1$、中位數 $Q_2$、第三四分位數 $Q_3$、上邊緣 Max。箱體長度即為 $\\text{IQR} = Q_3 - Q_1$。",
    confusing: [
      "離群值判定界限：低於 $Q_1 - 1.5 \\times \\text{IQR}$ 或高於 $Q_3 + 1.5 \\times \\text{IQR}$ 的點將被單獨繪製為小圓點（極端離群值）。此法則不依賴常態假設，抗偏態能力極強！"
    ],
    visualHtml: `
      <div style="display:flex; justify-content:center; margin:0.5rem 0;">
        <svg viewBox="0 0 280 80" style="width:100%; max-width:280px; height:auto;">
          <!-- Left Whisker -->
          <line x1="30" y1="40" x2="80" y2="40" stroke="var(--text-secondary)" stroke-width="2"/>
          <line x1="30" y1="25" x2="30" y2="55" stroke="var(--text-secondary)" stroke-width="2"/>
          <text x="30" y="70" font-size="9" text-anchor="middle" fill="var(--text-muted)">下界</text>
          <!-- Box (Q1 to Q3) -->
          <rect x="80" y="20" width="120" height="40" fill="var(--badge-blue-bg)" stroke="var(--primary)" stroke-width="2" rx="3"/>
          <!-- Median Line -->
          <line x1="130" y1="20" x2="130" y2="60" stroke="#ef4444" stroke-width="2.5"/>
          <text x="80" y="70" font-size="9" text-anchor="middle" fill="var(--text-muted)">Q1</text>
          <text x="130" y="15" font-size="9" text-anchor="middle" fill="#ef4444" font-weight="bold">中位數</text>
          <text x="200" y="70" font-size="9" text-anchor="middle" fill="var(--text-muted)">Q3</text>
          <!-- Right Whisker -->
          <line x1="200" y1="40" x2="250" y2="40" stroke="var(--text-secondary)" stroke-width="2"/>
          <line x1="250" y1="25" x2="250" y2="55" stroke="var(--text-secondary)" stroke-width="2"/>
          <text x="250" y="70" font-size="9" text-anchor="middle" fill="var(--text-muted)">上界</text>
          <!-- Outlier -->
          <circle cx="270" cy="40" r="3.5" fill="#ef4444"/>
          <text x="270" y="30" font-size="8" text-anchor="middle" fill="#ef4444">異常</text>
        </svg>
      </div>
    `,
    keywords: ["箱形圖", "Boxplot", "IQR", "五數摘要", "四分位距", "離群值檢測"],
    examRefs: [
      { subj: "115_1_1", qId: 38, note: "連續數值感測資料異常檢測" }
    ]
  },

  // ==========================================
  // L224: 大數據在人工智慧之應用 (特徵工程、推薦系統、隱私合規、差分隱私)
  // ==========================================
  {
    id: "l22_29",
    category: "L224",
    code: "L22401",
    title: "特徵縮放：標準化 (Standardization) vs 歸一化 (Normalization)",
    summary: "① 標準化（Z-Score: $X' = \\frac{X - \\mu}{\\sigma}$）：轉為均值 0、標準差 1，適合大多數演算法且抗極端值；② 歸一化（Min-Max: $X' = \\frac{X - X_{\\min}}{X_{\\max} - X_{\\min}}$）：縮放到 $[0, 1]$ 區間，對極端值極敏感。",
    confusing: [
      "以距離為基準的演算法（KNN、K-Means、SVM）以及基於梯度下降的神經網路，必須做特徵縮放！基於樹狀結構的演算法（決策樹、隨機森林、XGBoost）不需要特徵縮放！"
    ],
    keywords: ["標準化", "歸一化", "Min-Max", "Z-Score", "特徵縮放", "樹模型不受影響"],
    examRefs: [
      { subj: "114_2_1", qId: 28, note: "數值與類別特徵工程混合管線" },
      { subj: "115_1_1", qId: 31, note: "距離演算法特徵尺度均一化必要性" }
    ]
  },
  {
    id: "l22_30",
    category: "L224",
    code: "L22401",
    title: "類別特徵編碼：Label vs One-Hot vs Target Encoding",
    summary: "① 標籤編碼（Label Encoding）：將類別轉為整數序號（如高中=1, 大學=2），適用於「有序類別（Ordinal）」；② 獨熱編碼（One-Hot Encoding）：轉為二元稀疏向量，適用於無序且基數小（類別數少）；③ 目標編碼（Target Encoding）：用目標標籤的均值替代類別，適用於超高基數（如 10 萬個郵遞區號）。",
    confusing: [
      "若對無序類別（如顏色：紅、綠、藍）直接使用 Label Encoding 轉成 1, 2, 3，線性模型會錯誤學到「藍比紅大」的虛假大小順序關係！"
    ],
    keywords: ["類別編碼", "One-Hot", "Label Encoding", "Target Encoding", "有序類別"],
    examRefs: [
      { subj: "114_2_1", qId: 28, note: "連續特徵與類別特徵適當編碼" },
      { subj: "115_1_1", qId: 5, note: "One-Hot 編碼維度膨脹與語意缺失缺點" }
    ]
  },
  {
    id: "l22_31",
    category: "L224",
    code: "L22401",
    title: "高維度災難（Curse of Dimensionality）",
    summary: "當特徵維度 $D$ 急遽增加時，特徵空間的體積以指數級膨脹，導致資料在空間中變得極度稀疏，所有點與點之間的歐氏距離趨於相等，使基於距離的演算法（KNN、DBSCAN、K-Means）徹底失效！",
    confusing: [
      "維度越多不代表資訊越多！高維度還會大幅增加參數量與計算時間，並引發嚴重過擬合。標準處置：特徵選擇（L1 正則化）或特徵降維（PCA）。"
    ],
    keywords: ["維度災難", "Curse of Dimensionality", "空間稀疏", "距離失效", "過擬合"],
    examRefs: [
      { subj: "115_1_1", qId: 30, note: "200 感測器降維以抗高維度災難" },
      { subj: "115_1_1", qId: 31, note: "300 維特徵 DBSCAN 密度計算失效" }
    ]
  },
  {
    id: "l22_32",
    category: "L224",
    code: "L22402",
    title: "推薦系統協同過濾：User-based vs Item-based",
    summary: "① 基於使用者（User-based CF）：「跟我喜好相似的人也喜歡什麼」；② 基於物品（Item-based CF）：「買過這個商品的人通常也買什麼」。",
    confusing: [
      "在大型電商系統中，通常「物品數量遠少於使用者數量且商品相似度較穩定」，因此 Item-based CF 在計算效率、推薦解釋性與可預先離線快取上明顯優於 User-based CF。"
    ],
    keywords: ["推薦系統", "協同過濾", "User-based", "Item-based", "冷啟動"],
    examRefs: [
      { subj: "115_1_1", qId: 19, note: "推薦系統評估導入成效" },
      { subj: "115_1_1", qId: 43, note: "商品推薦模型 A/B 測試" }
    ]
  },
  {
    id: "l22_33",
    category: "L224",
    code: "L22402",
    title: "推薦系統冷啟動問題（Cold Start Problem）",
    summary: "當新使用者或新商品剛加入系統時，缺乏歷史互動或評分記錄，協同過濾演算法無法計算相似度矩陣。四大解法：① 基於內容的推薦（利用商品屬性標籤）；② 熱門度排行榜保底推薦；③ 新用戶引導頁勾選偏好標籤；④ 混合推薦架構。",
    confusing: [
      "純協同過濾（CF）完全依賴行為資料，無法克服冷啟動；實務上推薦系統必為混合推薦（Hybrid），前期靠內容特徵，後期轉為行為特徵。"
    ],
    keywords: ["冷啟動", "Cold Start", "新用戶推薦", "混合推薦", "熱門保底"],
    examRefs: [
      { subj: "115_1_1", qId: 20, note: "新使用者即時推薦冷啟動" }
    ]
  },
  {
    id: "l22_34",
    category: "L224",
    code: "L22402",
    title: "特徵儲存庫（Feature Store）核心價值",
    summary: "集中管理機器學習特徵的平台（如 Feast, Hopsworks）：實現特徵重用、解決線上推論（低延遲點查）與離線訓練（高吞吐批次讀取）之間的「特徵計算不一致（Training-Serving Skew）」。",
    confusing: [
      "特徵儲存庫內建「時間旅行（Time Travel / Point-in-time Correctness）」功能，嚴防在生成歷史訓練資料集時引入未來的特徵資料（防止 Data Leakage）！"
    ],
    keywords: ["Feature Store", "特徵儲存庫", "Training-Serving Skew", "時間旅行"],
    examRefs: [
      { subj: "114_2_1", qId: 15, note: "MLOps 自動化特徵與模型管線" },
      { subj: "115_1_1", qId: 34, note: "每天新增數百用戶特徵的管理架構" }
    ]
  },
  {
    id: "l22_35",
    category: "L224",
    code: "L22403",
    title: "大數據在生成式 AI 預訓練的關鍵處理流程",
    summary: "海量非結構化文本資料（TB~PB 級）預訓練前必須經過：① 文本提取與格式標準化 ➔ ② 語系過濾（FastText）➔ ③ 啟發式規則清洗（去除過長過短雜訊）➔ ④ 模糊去重（MinHash LSH 移除重複網頁）➔ ⑤ 毒性過濾與個人隱私去識別化（PII Removal）。",
    confusing: [
      "去重（Deduplication）極其關鍵！若訓練集中充斥重複文本，大語言模型會產生嚴重記憶 memorization 現象並大幅降低其多樣性與泛化推理能力。"
    ],
    keywords: ["預訓練資料處理", "MinHash", "LSH", "文本去重", "PII Removal", "Deduplication"],
    examRefs: [
      { subj: "115_1_1", qId: 4, note: "BERT 預訓練內部文本資料準備與過濾" }
    ]
  },
  {
    id: "l22_36",
    category: "L224",
    code: "L22404",
    title: "資料去識別化三層次：遮蔽 vs 假名化 vs 匿名化",
    summary: "① 遮蔽（Masking）：部分隱藏（如身分證 A12***789）；② 假名化（Pseudonymization）：以隨機代碼取代識別符，保留對應金鑰（可逆，受 GDPR 管轄）；③ 匿名化（Anonymization）：永久且不可逆消除所有識別特徵，不再受個人資料保護法管轄！",
    confusing: [
      "只要持有特定對照表或金鑰還能還原出個人身分的（即假名化），在法律上「依然屬於個人資料」！只有達到技術上無法再識別的「真正匿名化」，才能免除個資法適用。"
    ],
    keywords: ["去識別化", "假名化", "匿名化", "GDPR", "個人資料保護法"],
    examRefs: [
      { subj: "114_2_1", qId: 30, note: "金融交易系統資料加密與審計合規" },
      { subj: "115_1_1", qId: 46, note: "醫療雲端資料去識別化與隱私安全" }
    ]
  },
  {
    id: "l22_37",
    category: "L224",
    code: "L22404",
    title: "差分隱私（Differential Privacy, DP）",
    summary: "數學上最強的隱私保護標準：透過在查詢輸出或梯度中加入精心設計的拉普拉斯或高斯隨機噪聲，使得「資料集中多一筆或少一筆某人的資料，查詢輸出的機率分佈幾乎沒有差異」。",
    confusing: [
      "隱私預算 $\\epsilon$（Epsilon）：$\\epsilon$ 越小，加入的噪聲越大，隱私保護越強，但資料精確度（效用 Utility）越低；$\\epsilon$ 越大，資料越準但隱私洩漏風險增加。"
    ],
    keywords: ["差分隱私", "Differential Privacy", "拉普拉斯噪聲", "隱私預算", "Epsilon"],
    examRefs: [
      { subj: "114_2_1", qId: 30, note: "敏感資料查詢隱私保護技術" }
    ]
  },
  {
    id: "l22_38",
    category: "L224",
    code: "L22404",
    title: "聯邦學習（Federated Learning）：數據不動模型動",
    summary: "分散式機器學習隱私架構：多個參與方（如各家醫院、終端手機）在本地使用私有數據訓練模型，僅將「模型梯度或更新權重」上傳至中央伺服器進行聚合（Federated Averaging），原始資料永不出庫！",
    confusing: [
      "橫向聯邦學習（特徵重疊度高、用戶群不同，如跨國同類銀行）；縱向聯邦學習（用戶重疊度高、特徵模態互補，如同一地區的電商與銀行跨業聯合建模）。"
    ],
    keywords: ["聯邦學習", "Federated Learning", "數據不動模型動", "橫向聯邦", "縱向聯邦"],
    examRefs: [
      { subj: "115_1_1", qId: 46, note: "跨醫療機構敏感 CT 數據聯合模型訓練架構" }
    ]
  },
  {
    id: "l22_39",
    category: "L221",
    code: "L22103",
    title: "卡方檢定（Chi-Square Test）兩大應用",
    summary: "① 適合度檢定（Goodness of Fit）：檢驗單一類別變數的實際觀察次數與理論分佈是否相符（如擲骰子是否均勻）；② 獨立性檢定（Test of Independence）：檢驗兩個類別變數之間是否相互獨立（如性別與購買偏好）。",
    confusing: [
      "卡方檢定計算公式：$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$（$O$ 為觀察頻率，$E$ 為期望頻率）。適用於計數資料（次數），不可直接將百分比或連續測量值代入！"
    ],
    keywords: ["卡方檢定", "獨立性檢定", "適合度檢定", "類別資料", "期望次數"],
    examRefs: [
      { subj: "115_1_1", qId: 9, note: "混淆矩陣類別分配卡方檢驗" }
    ]
  },
  {
    id: "l22_40",
    category: "L222",
    code: "L22201",
    title: "資料清理缺失值（Missing Values）四大處置策略",
    summary: "① 刪除法（Listwise Deletion）：缺失比例極低（< 3%）且隨機發生時；② 統計值插補（Mean/Median/Mode）：數值型用中位數（抗極端值）、類別型用眾數；③ 模型預測插補（KNN Imputer, 隨機森林）；④ 新增缺失指示特徵（Missing Indicator）。",
    confusing: [
      "缺失機制分為三種：MCAR（完全隨機缺失）、MAR（隨機缺失）、MNAR（非隨機缺失，如高收入者故意不填收入）。若為 MNAR，直接刪除或用平均數填補會引入嚴重估計偏誤！"
    ],
    keywords: ["缺失值處理", "插補法", "KNN Imputer", "MCAR", "MAR", "MNAR"],
    examRefs: [
      { subj: "114_2_1", qId: 21, note: "多模態特徵缺失時的補齊與處理策略" }
    ]
  },
  {
    "id": "l22_41",
    "category": "L221",
    "code": "L22101",
    "title": "變異係數（CV）：消除量綱影響的跨尺度離散度比較",
    "summary": "標準差除以平均數 $CV = \\sigma / \\mu$。用百分比表示相對離散程度，用於不同單位或均值差距懸殊的資料集比較。",
    "confusing": [
      "不能直接用標準差比較不同尺度的資料！例如：比較大象體重（均值 5000kg，標準差 200kg）與老鼠體重（均值 20g，標準差 5g），老鼠的 CV (25%) 遠高於大象 (4%)，說明老鼠體型相對變異更大。",
      "變異係數僅適用於比例尺度（Ratio Scale，具有絕對零點）且平均數大於零的數據，不適用於攝氏溫度或負數數據。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        公式：$CV = \\frac{\\sigma}{\\mu} \\times 100\\%$\n        <strong>判斷法則：</strong>CV 越大，代表資料相對於均值的波動越劇烈；CV 越小，越集中穩定。\n      </div>\n    ",
    "keywords": [
      "變異係數",
      "CV",
      "離散程度",
      "相對波動",
      "量綱消除",
      "特徵穩定性"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 1,
        "note": "比較不同幣別投資組合波動風險時變異係數之應用"
      }
    ]
  },
  {
    "id": "l22_42",
    "category": "L221",
    "code": "L22102",
    "title": "二項分佈 vs 卜瓦松分佈（Poisson）：稀有事件逼近定理",
    "summary": "二項分佈描繪固定 $n$ 次試驗之成功次數；卜瓦松分佈描繪固定時空區間內稀有事件發生次數，是二項分佈在 $n \\to \\infty, p \\to 0$ 下的極限。",
    "confusing": [
      "二項分佈參數為 $(n, p)$，平均數 $\\mu = np$，變異數 $\\sigma^2 = np(1-p)$（變異數必定小於平均數）。",
      "卜瓦松分佈唯一參數為強度 $\\lambda$，最大特徵為：<strong>平均數等於變異數（$\\mu = \\sigma^2 = \\lambda$）</strong>！",
      "若試驗次數極大（$n > 100$）且單次發生率極低（$p < 0.01$），計算二項分佈極為繁瑣，可直接以 $\\lambda = np$ 之卜瓦松分佈精確近似。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>二項分佈 $B(n, p)$</strong><br>• 固定試驗次數 $n$<br>• 每次結果獨立 (投籃/擲幣)<br>• 變異數 < 平均數\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>卜瓦松分佈 $P(\\lambda)$</strong><br>• 固定單位時間/空間<br>• 稀有事件 (伺服器當機/來電)<br>• <strong>平均數 = 變異數 = $\\lambda$</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "二項分佈",
      "卜瓦松分佈",
      "Poisson",
      "稀有事件",
      "平均數等於變異數",
      "極限定理"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 3,
        "note": "客服中心每小時進線通數之機率分佈模型判定"
      }
    ]
  },
  {
    "id": "l22_43",
    "category": "L221",
    "code": "L22102",
    "title": "指數分佈（Exponential Distribution）與無記憶性（Memoryless）",
    "summary": "描述卜瓦松過程中連續兩次事件發生的等待時間間隔。最大數學特性為無記憶性：過去等待的時間不影響未來發生機率。",
    "confusing": [
      "無記憶性公式：$P(X > s + t \\mid X > s) = P(X > t)$。例如燈泡壽命若服從指數分佈，用了 100 小時沒壞，接下來再用 50 小時不壞的機率，跟全新燈泡用 50 小時不壞完全一樣（實務上機械零件通常有老化磨損，更適合威布爾分佈 Weibull）。",
      "若事件發生次數服從強度 $\\lambda$ 的卜瓦松分佈，則事件間的等待時間必服從參數 $\\lambda$ 的指數分佈，平均等待時間為 $1 / \\lambda$。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        <strong>對照關係：</strong><br>\n        單位時間發生次數 ➔ <strong>卜瓦松分佈 (離散)</strong><br>\n        兩次事件相隔時間 ➔ <strong>指數分佈 (連續，右偏長尾，無記憶性)</strong>\n      </div>\n    ",
    "keywords": [
      "指數分佈",
      "無記憶性",
      "等待時間",
      "卜瓦松過程",
      "可靠度工程",
      "威布爾分佈"
    ],
    "examRefs": [
      {
        "subj": "115_1_2",
        "qId": 2,
        "note": "網站伺服器請求到達間隔時間之機率分佈模型"
      }
    ]
  },
  {
    "id": "l22_44",
    "category": "L221",
    "code": "L22102",
    "title": "對數常態分佈（Log-Normal）：長尾偏態現象標準模型",
    "summary": "若隨機變數 $X$ 取自然對數後 $\\ln(X)$ 服從常態分佈，則 $X$ 服從對數常態分佈。典型右偏長尾，廣泛用於財富收入與系統延遲。",
    "confusing": [
      "常態分佈源於大量微小獨立效應的『加法（Additive）』累積（依據中央極限定理）。",
      "對數常態分佈源於大量微小獨立效應的『乘法（Multiplicative）』累積！因為相乘取對數變相加，故對數呈常態。",
      "大數據實務應用：個人所得、股票價格、網站 API 請求延遲（P90, P99）、檔案大小分佈多呈現顯著的 Log-Normal 特性。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <strong>關係轉換：</strong>$X \\sim \\text{Log-Normal} \\iff \\ln(X) \\sim \\text{Normal}(\\mu, \\sigma^2)$<br>\n        • 資料取 $\\ln$ 後即可利用常態分佈標準演算法（如 Z-score）檢測異常！\n      </div>\n    ",
    "keywords": [
      "對數常態分佈",
      "Log-Normal",
      "乘法累積",
      "長尾分佈",
      "右偏態",
      "延遲建模"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 4,
        "note": "網路封包延遲時間分佈型態與對數轉換預處理"
      }
    ]
  },
  {
    "id": "l22_45",
    "category": "L221",
    "code": "L22103",
    "title": "單尾檢定 vs 雙尾檢定：研究假設方向性與顯著拒絕域",
    "summary": "研究問題有方向性（大於/小於）使用單尾檢定；無方向性（僅檢驗是否有差異）使用雙尾檢定。單尾更容易達到統計顯著。",
    "confusing": [
      "若顯著水準 $\\alpha = 0.05$：雙尾檢定將 $5\\%$ 分散在左右兩端各 $2.5\\%$（臨界值 $Z = \\pm 1.96$）；單尾檢定將 $5\\%$ 全部分配在單一側（臨界值 $Z = 1.645$）。",
      "單尾檢定不能事後隨意更改！必須在實驗前依據理論推導確立方向性假設，否則屬於作弊竄改統計假設（HARKing）。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>雙尾檢定 ($H_1: \\mu \\neq \\mu_0$)</strong><br>兩端各 $\\alpha/2$<br>臨界值 $\\pm 1.96$ (嚴格)\n        </div>\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>單尾檢定 ($H_1: \\mu > \\mu_0$)</strong><br>單側集中 $\\alpha$<br>臨界值 $+1.645$ (較易顯著)\n        </div>\n      </div>\n    ",
    "keywords": [
      "假設檢定",
      "單尾檢定",
      "雙尾檢定",
      "拒絕域",
      "臨界值",
      "顯著水準"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 6,
        "note": "A/B 測試新演算法是否顯著提升點擊率之檢定方向判定"
      }
    ]
  },
  {
    "id": "l22_46",
    "category": "L221",
    "code": "L22103",
    "title": "變異數分析（ANOVA）與 F 檢定：多組平均數比較的正確解法",
    "summary": "檢定 3 組以上平均數是否全相等。比較組間變異（Between-group）與組內變異（Within-group），避免多次 t 檢定造成型一錯誤膨脹。",
    "confusing": [
      "若有 4 組樣本兩兩比較，需進行 $C_2^4 = 6$ 次 t 檢定，累積錯誤率飆升至 $1 - (1 - 0.05)^6 = 26.5\\%$！ANOVA 一次完成全局檢驗。",
      "統計量公式：$F = \\frac{MS_{\\text{between}}}{MS_{\\text{within}}} = \\frac{\\text{組間均方 (處理效應 + 隨機誤差)}}{\\text{組內均方 (僅隨機誤差)}}$",
      "若 $F$ 檢定拒絕 $H_0$，僅代表『至少有兩組平均數不相等』，必須進行事後檢定（Post-Hoc，如 Tukey HSD）才能找出究竟哪兩組有差異。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>$F \\approx 1$</strong>：處理效應不存在，組間差異全來自隨機抽樣誤差<br>\n        • <strong>$F \\gg 1$ ($p < 0.05$)</strong>：組間差異顯著大於隨機誤差，拒絕 $H_0$！\n      </div>\n    ",
    "keywords": [
      "ANOVA",
      "變異數分析",
      "F檢定",
      "型一錯誤膨脹",
      "事後檢定",
      "Tukey"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 7,
        "note": "測試三種不同推薦演算法之用戶滿意度平均值差異方法選擇"
      },
      {
        "subj": "115_1_2",
        "qId": 5,
        "note": "多組樣本比較為何不可連續執行多次兩獨立樣本 t 檢定"
      }
    ]
  },
  {
    "id": "l22_47",
    "category": "L221",
    "code": "L22103",
    "title": "統計檢定力（Power）與 A/B 測試前置樣本數估算",
    "summary": "檢定力 $\\text{Power} = 1 - \\beta$（對立假設為真時正確拒絕虛無假設的機率）。業界標準要求至少 $80\\%$，受顯著水準、效應量與樣本數連動。",
    "confusing": [
      "四個連動元素：樣本數 $n$、顯著水準 $\\alpha$ (通常 0.05)、檢定力 $1 - \\beta$ (通常 0.8)、最小可檢測效應量 MDE（Minimum Detectable Effect）。",
      "樣本數太少會導致檢定力不足，即使新功能真的大幅提升業績，也因噪聲過大測不出來（犯型二錯誤 $\\beta$）；樣本數過大又會徒增實驗成本與業務風險。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>樣本量 $n \\uparrow$</span>\n        <span>效應量 MDE $\\uparrow$</span>\n        <span style=\"font-weight:700; color:var(--primary);\">➔ 檢定力 Power ($1-\\beta$) $\\uparrow$</span>\n      </div>\n    ",
    "keywords": [
      "統計檢定力",
      "Power",
      "型二錯誤",
      "MDE",
      "A/B測試",
      "樣本數估算"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 8,
        "note": "A/B 測試上線前樣本量計算與檢定力 80% 標準"
      }
    ]
  },
  {
    "id": "l22_48",
    "category": "L221",
    "code": "L22103",
    "title": "皮爾森相關（Pearson）vs 斯皮爾曼等級相關（Spearman）：相關分析選型",
    "summary": "Pearson 衡量連續變數的線性關係，要求常態且易受極值影響；Spearman 衡量單調關係，依據數值排名次序計算，穩健抗離群值。",
    "confusing": [
      "Pearson 相關係數為 0，只代表沒有『線性相關』，不代表獨立！兩者可能存在極強的非線性關係（如 $Y = X^2$ 在對稱區間內 Pearson 相關係數為 0）。",
      "若資料呈現曲線單調上升（如指數增長）、或資料具有極端異常值、或資料屬於順序尺度（Likert 滿意度 1~5 分），必須優先採用 Spearman 等級相關。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>皮爾森 (Pearson $r$)</strong><br>• 連續型 / 常態分佈<br>• 純線性關係<br>• <strong>極易受離群值扭曲</strong>\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>斯皮爾曼 (Spearman $\\rho$)</strong><br>• 排序次序 (Rank)<br>• 單調非線性關係<br>• <strong>抗極值、無母數穩健</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "皮爾森相關",
      "斯皮爾曼相關",
      "Pearson",
      "Spearman",
      "線性相關",
      "單調關係",
      "離群值影響"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 9,
        "note": "含有顯著偏態與極端值數據之相關性分析指標選用"
      },
      {
        "subj": "115_1_2",
        "qId": 8,
        "note": "非線性單調遞增關係下皮爾森與斯皮爾曼係數之差異"
      }
    ]
  },
  {
    "id": "l22_49",
    "category": "L221",
    "code": "L22103",
    "title": "多元迴歸共線性診斷：變異數膨脹因子（VIF）與特徵消除",
    "summary": "自變數之間高度相互關聯引發共線性，導致迴歸係數正負顛倒、標準誤膨脹。使用 VIF 衡量膨脹倍數，VIF > 5 或 10 需剔除或降維。",
    "confusing": [
      "公式：$\\text{VIF}_i = \\frac{1}{1 - R_i^2}$，其中 $R_i^2$ 是將第 $i$ 個自變數對其他所有自變數進行迴歸所得到的判定係數。",
      "若 $R_i^2 = 0.9$，則 $\\text{VIF} = 1 / (1 - 0.9) = 10$，代表該自變數的估計變異數膨脹了 10 倍！解決方案：移除高 VIF 特徵、改用嶺迴歸（Ridge L2 正則化）或 PCA 提煉主成分。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>$\\text{VIF} < 5$</strong>：無嚴重共線性，安全<br>\n        • <strong>$5 \\le \\text{VIF} < 10$</strong>：存在中度共線性，需留意<br>\n        • <strong>$\\text{VIF} \\ge 10$</strong>：<strong>嚴重多元共線性！必須剔除特徵或降維</strong>\n      </div>\n    ",
    "keywords": [
      "多元共線性",
      "VIF",
      "變異數膨脹因子",
      "嶺迴歸",
      "特徵相關性",
      "迴歸係數不穩定"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 10,
        "note": "多元線性迴歸模型中診斷特徵多重共線性之統計指標"
      }
    ]
  },
  {
    "id": "l22_50",
    "category": "L221",
    "code": "L22103",
    "title": "多重比較校正：Bonferroni 校正 vs 錯誤發現率（FDR / BH 法）",
    "summary": "大數據多重假說檢定必備防護。檢定數量過多會導致隨機偽陽性充斥。Bonferroni 嚴格控制 FWER；Benjamini-Hochberg 控制 FDR。",
    "confusing": [
      "在大數據探勘中若同時檢定 10,000 個特徵，在 $\\alpha = 0.05$ 下，即使完全沒規律，純靠隨機運氣也會出現 $10000 \\times 0.05 = 500$ 個顯著結果（偽陽性災難）！",
      "Bonferroni 校正將顯著門檻粗暴降為 $\\alpha / m$（過度嚴格保守，常殺死真實微弱訊號）；FDR（False Discovery Rate）控制在『所有被判為顯著的結果中，偽陽性佔比不超過 $q$』，是基因體學與大數據主流。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>Bonferroni (FWER)</strong><br>$\\alpha' = \\alpha / m$<br>極度嚴苛、易漏報真實信號\n        </div>\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>FDR (BH 法)</strong><br>控制發現結果中偽陽性比例<br>兼顧靈敏度與大數據實務\n        </div>\n      </div>\n    ",
    "keywords": [
      "多重檢定",
      "Bonferroni",
      "FDR",
      "偽陽性控制",
      "大數據統計陷阱",
      "BH程序"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 11,
        "note": "巨量特徵篩選中控制假陽性發現率之校正演算法"
      }
    ]
  },
  {
    "id": "l22_51",
    "category": "L222",
    "code": "L22201",
    "title": "大數據異常值（Outliers）四種進階檢測演算法對比",
    "summary": "單變數與多變數異常檢測。3-Sigma（常態）、IQR（箱形圖非母數）、孤立森林（高維度隨機樹切分）、LOF（局部密度）。",
    "confusing": [
      "3-Sigma 法則與 Z-score 強烈依賴常態分佈假設，若資料本身右偏長尾，會誤將大量正常高價值數據當作異常值剔除！",
      "孤立森林（Isolation Forest）：利用異常點『少而不同』的本質，在隨機特徵切割中能最快被單獨孤立至淺層葉節點，時間複雜度線性 $O(n)$，是大數據高維異常檢測首選。",
      "LOF（Local Outlier Factor）：基於局部密度，能辨識出雖然絕對數值不高、但明顯偏離自身周圍群落的局部異常點。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>3-Sigma / Z-Score</strong>: 限單變數常態數據<br>\n        • <strong>IQR 箱形圖</strong>: 單變數、非母數、穩健抗偏態<br>\n        • <strong>孤立森林 (iForest)</strong>: 多變數、高維大數據首選、線性高效<br>\n        • <strong>LOF</strong>: 多變數、局部密度、適合形狀複雜群聚\n      </div>\n    ",
    "keywords": [
      "異常值檢測",
      "3-Sigma",
      "IQR",
      "孤立森林",
      "LOF",
      "局部離群因子",
      "高維異常"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 13,
        "note": "信用卡即時交易詐欺高維特徵異常檢測演算法選型"
      }
    ]
  },
  {
    "id": "l22_52",
    "category": "L222",
    "code": "L22201",
    "title": "資料遺失插補進階技法：KNN 插補 vs 多重插補（MICE）",
    "summary": "超越單純均值填補。KNN 尋找最近鄰平均；MICE 建立鏈式迴歸模型多次抽樣生成多個數據集合併，完美保留變異性。",
    "confusing": [
      "均值/中位數填補會人為壓縮資料的方差（Variance），並人為削弱特徵之間的真實相關性，嚴重干擾後續迴歸與機器學習建模。",
      "KNN 插補：依據其他完整特徵計算距離，填入最相似 $k$ 個樣本的均值，適合中小型資料集。",
      "MICE（Multivariate Imputation by Chained Equations）：針對隨機缺失（MAR），迭代用其他變數預測缺失欄位，產生 $m$ 個插補集分別分析後綜合匯聚，統計嚴謹度最高。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <span style=\"flex:1; background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>均值插補 (粗暴)</strong><br>扭曲變異數、拉平分佈\n        </span>\n        <span style=\"flex:1; background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>KNN 插補 (相似度)</strong><br>保留局部特徵關聯\n        </span>\n        <span style=\"flex:1; background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>MICE (鏈式迴歸)</strong><br>保留不確定性與變異度\n        </span>\n      </div>\n    ",
    "keywords": [
      "遺失值處理",
      "KNN插補",
      "MICE",
      "多重插補",
      "隨機缺失",
      "資料質量"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 14,
        "note": "臨床醫學資料庫高比率隨機缺失值之高級統計插補技術"
      }
    ]
  },
  {
    "id": "l22_53",
    "category": "L222",
    "code": "L22202",
    "title": "列式存儲（Row-oriented）vs 欄式存儲（Columnar：Parquet / ORC）",
    "summary": "OLTP vs OLAP 底層架構分水嶺。列式適合頻繁整列增刪改；欄式只讀取查詢欄位、同型別極致壓縮，大數據分析必備。",
    "confusing": [
      "列式存儲（如 CSV、MySQL、PostgreSQL）：整行數據連續存儲在硬碟上，適合『根據主鍵讀取單個用戶所有欄位』的交易型系統（OLTP）。",
      "欄式存儲（如 Apache Parquet、ORC、BigQuery 內部架構）：同一欄位的資料連續存儲，進行『計算千萬用戶的年齡平均值』時，硬碟 I/O 只讀取年齡那一欄（I/O 降低 90% 以上），且同型態欄位具備極高的 Snappy/Gzip 壓縮率（節省 75% 空間）。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>列式存儲 (OLTP)</strong><br><code>[ID1, Name, Age], [ID2, Name, Age]</code><br>適合整行寫入、單筆查詢\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>欄式存儲 (OLAP)</strong><br><code>Age: [25, 30, 42], Name: [A, B, C]</code><br><strong>分析查詢只讀取所需欄位，I/O極低</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "欄式存儲",
      "列式存儲",
      "Parquet",
      "ORC",
      "OLAP",
      "OLTP",
      "I/O優化"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 15,
        "note": "大數據資料湖存儲格式選用 Parquet 提升查詢效率之原理"
      },
      {
        "subj": "115_1_2",
        "qId": 12,
        "note": "OLAP 聚合查詢下欄式存儲壓縮比與 I/O 吞吐優勢"
      }
    ]
  },
  {
    "id": "l22_54",
    "category": "L222",
    "code": "L22202",
    "title": "Hadoop HDFS 分散式檔案系統：主從架構與三副本容錯機制",
    "summary": "海量存儲基石。NameNode 管理目錄樹與元數據；DataNode 分散式存儲數據塊（預設 128MB），三副本跨機架備份保證高可靠。",
    "confusing": [
      "NameNode 是系統單點瓶頸：所有文件目錄與塊映射均駐留於 NameNode 記憶體中，因此 HDFS 極度不適合存儲大量『微小檔案（Small Files）』，會耗盡 NameNode 記憶體。",
      "三副本放置策略（Rack Awareness 機架感知）：第 1 副本放在客戶端本地節點；第 2 副本放在同一機架的另一個節點；第 3 副本放在不同機架的節點，兼顧網絡寫入吞吐與機架斷電容錯。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        • <strong>NameNode (大腦)</strong>: 儲存元數據 (Metadata)，不可崩潰<br>\n        • <strong>DataNode (苦力)</strong>: 儲存 128MB 數據塊，三副本容錯<br>\n        • <strong>小檔案陷阱</strong>: 1 億個小檔案會拖垮 NameNode 記憶體！\n      </div>\n    ",
    "keywords": [
      "Hadoop",
      "HDFS",
      "NameNode",
      "DataNode",
      "三副本機制",
      "機架感知",
      "小檔案問題"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 16,
        "note": "HDFS 分散式檔案系統三副本策略與機架容錯機制"
      }
    ]
  },
  {
    "id": "l22_55",
    "category": "L222",
    "code": "L22203",
    "title": "Apache Spark 核心架構：RDD 彈性分散式資料集與記憶體計算",
    "summary": "取代 MapReduce 的大數據引擎。RDD 具備不可變性與血統（Lineage）容錯；DataFrame 透過 Catalyst 查詢優化器自動執行計算法則。",
    "confusing": [
      "MapReduce 每個步驟都必須將中間結果寫入硬碟（Disk I/O 成為巨大瓶頸，特別是迭代型機器學習）；Spark 採用 RAM 記憶體中間存儲，運算速度提升 10~100 倍。",
      "RDD 容錯機制不是靠硬碟備份，而是靠『血統圖（Lineage DAG）』！當某個節點計算出錯時，Spark 只需要依據 DAG 重跑出錯的分區轉換，而無須重頭全量重跑。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>RDD</strong>: 核心抽象，不可變、分區、基於血統圖容錯<br>\n        • <strong>DataFrame</strong>: 結構化 API (表格帶 Schema)，由 Catalyst 最佳化<br>\n        • <strong>記憶體計算</strong>: 迭代演算法 (K-Means/PageRank) 速度輾壓 MapReduce\n      </div>\n    ",
    "keywords": [
      "Apache Spark",
      "RDD",
      "Lineage",
      "血統圖",
      "Catalyst最佳化器",
      "記憶體計算"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 17,
        "note": "Spark 相較於傳統 MapReduce 在迭代演算法中提速之根本原因"
      }
    ]
  },
  {
    "id": "l22_56",
    "category": "L222",
    "code": "L22203",
    "title": "Spark 運算靈魂：Transformation（轉換）vs Action（動作）與惰性求值",
    "summary": "惰性求值（Lazy Evaluation）精髓。Transformation 僅建立 DAG 計算圖不執行；Action 真正觸發計算、分配 Task 至各節點。",
    "confusing": [
      "Transformation 算子（如 map, filter, flatMap, groupByKey, join）：回傳新的 RDD，只是在記帳本畫圖，不產生任何計算！",
      "Action 算子（如 count, collect, take, saveAsTextFile）：回傳數值或寫入硬碟，會立即觸發 Spark Job 提交並執行！",
      "為什麼要惰性求值？因為只有等到 Action 出現時，Catalyst 才能看到完整的計算流程，從而進行算子融合與謂詞下推（Predicate Pushdown，提早過濾無用資料）。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span><strong>Transformation</strong><br>map / filter<br>(惰性畫 DAG 圖)</span>\n        <span>➔ 全局優化 ➔</span>\n        <span style=\"font-weight:700; color:var(--primary);\"><strong>Action 觸發</strong><br>count / collect<br>(啟動叢集計算)</span>\n      </div>\n    ",
    "keywords": [
      "Spark算子",
      "Transformation",
      "Action",
      "惰性求值",
      "Lazy Evaluation",
      "DAG圖"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 18,
        "note": "辨別 Spark 中 map、filter 與 count、collect 算子之執行時機"
      }
    ]
  },
  {
    "id": "l22_57",
    "category": "L222",
    "code": "L22203",
    "title": "串流計算雙雄對決：Spark Streaming（微批次）vs Apache Flink（真串流）",
    "summary": "即時處理本質差異。Spark Streaming 將串流切成 0.5~1 秒微小批次；Flink 是真正的原生事件驅動（逐筆處理，亞秒級超低延遲）。",
    "confusing": [
      "Spark Streaming（Micro-batch）：本質還是批次處理，延遲通常在數百毫秒至 1 秒左右，吞吐量極高，適合與離線批次程式碼共用邏輯。",
      "Apache Flink（Native Streaming）：來一筆處理一筆，延遲可壓至毫秒級，具備原生的事件時間（Event Time）與水位線（Watermark）處理亂序資料能力，以及完美的 Exactly-Once 狀態保證。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>Spark Streaming</strong><br>• 微批次 (Micro-batch)<br>• 延遲: 0.5s ~ 2s<br>• 高吞吐、生態成熟\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>Apache Flink</strong><br>• 原生事件驅動 (Event-driven)<br>• 延遲: 毫秒級<br>• <strong>真串流、狀態計算之王</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "Flink",
      "Spark Streaming",
      "微批次",
      "事件驅動",
      "Watermark",
      "Exactly-Once"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 19,
        "note": "金融即時風控低延遲要求下 Flink 與 Spark Streaming 技術選型"
      },
      {
        "subj": "115_1_2",
        "qId": 15,
        "note": "原生事件驅動串流處理與微批次架構之延遲性本質差異"
      }
    ]
  },
  {
    "id": "l22_58",
    "category": "L222",
    "code": "L22203",
    "title": "Apache Kafka 高併發三基石：分區（Partition）、偏移量與消費者群組",
    "summary": "分散式消息發布/訂閱系統。Topic 切割多個 Partition 實現水平擴展；Consumer Group 實現負載平衡與單一分區順序保證。",
    "confusing": [
      "順序性判準：Kafka 只能保證『單一 Partition 內部有序』，不能保證跨 Partition 的全局有序！若需嚴格有序（如同一用戶的訂單狀態變更），必須指定相同的 Message Key 將其雜湊分配至同一 Partition。",
      "消費者平行度上限：一個 Consumer Group 內的消費者數量，最多只能等於該 Topic 的 Partition 數量！超過的消費者會處於閒置（Idle）狀態。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        • <strong>Partition (分區)</strong>: 水平擴展單元，決定寫入並發度<br>\n        • <strong>Offset (偏移量)</strong>: 記錄消費進度，支援重播歷史訊息<br>\n        • <strong>順序性法則</strong>: 唯有同分區才能保證嚴格 FIFO 順序！\n      </div>\n    ",
    "keywords": [
      "Kafka",
      "分區",
      "Partition",
      "消費者群組",
      "Offset",
      "順序性保證",
      "訊息佇列"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 20,
        "note": "Kafka 訊息佇列單一分區順序性與跨分區並發消費機制"
      }
    ]
  },
  {
    "id": "l22_59",
    "category": "L222",
    "code": "L22203",
    "title": "變更資料擷取（CDC）：資料庫到資料湖的即時無侵入串流同步",
    "summary": "透過直接讀取資料庫 Transaction Log（如 MySQL binlog），捕獲資料庫的 INSERT/UPDATE/DELETE 事件，近即時串流同步至下游資料庫或湖倉。",
    "confusing": [
      "傳統定時輪詢（Polling，如 `SELECT * WHERE updated_at > ?`）會對生產資料庫造成龐大查詢壓力，且無法捕獲『已硬刪除（DELETE）』的資料！",
      "CDC（如 Debezium + Kafka）是事件驅動的日誌解析，零侵入生產業務系統，完整捕獲所有增刪改歷程，是構建現代實時資料倉儲的標準手段。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>OLTP 資料庫<br>(MySQL Binlog)</span>\n        <span>➔ <strong>CDC 工具</strong><br>(Debezium)</span>\n        <span>➔ <strong>Kafka</strong><br>(即時事件流)</span>\n        <span>➔ <strong>湖倉入庫</strong><br>(Flink/Iceberg)</span>\n      </div>\n    ",
    "keywords": [
      "CDC",
      "變更資料擷取",
      "Binlog",
      "Debezium",
      "即時同步",
      "無侵入擷取"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 21,
        "note": "以 CDC 監聽資料庫日誌實現業務系統資料即時入湖"
      }
    ]
  },
  {
    "id": "l22_60",
    "category": "L222",
    "code": "L22202",
    "title": "湖倉一體（Lakehouse）三大開放格式：Delta Lake、Iceberg 與 Hudi",
    "summary": "在平價物件存儲（S3/GCS）之上賦予資料庫級 ACID 事務能力。支援時間旅行（Time Travel）、並發寫入隔離與 Schema Evolution。",
    "confusing": [
      "傳統資料湖（純 S3 + Parquet）痛點：無法支援並發寫入（易產生髒讀髒寫）、無法支援個別資料修改/刪除（需重寫整個分區，違背 GDPR 隱私要求）。",
      "開放表格式（Table Formats）核心機制：在底層 Parquet 檔案之外維護一份元數據交易日誌（Metadata Log），透過快照（Snapshot）機制實現 ACID 事務與歷史版本回滾（Time Travel）。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>Delta Lake</strong>: Databricks 深度整合，Spark 生態王者<br>\n        • <strong>Apache Iceberg</strong>: 跨引擎相容性最強 (Trino/Spark/Flink/Snowflake)<br>\n        • <strong>Apache Hudi</strong>: 支援近即時增量寫入與快速 Upsert/Delete\n      </div>\n    ",
    "keywords": [
      "湖倉一體",
      "Lakehouse",
      "Delta Lake",
      "Iceberg",
      "Hudi",
      "ACID",
      "時間旅行"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 22,
        "note": "企業構建湖倉一體架構開放表格式 (Table Format) 選型評估"
      }
    ]
  },
  {
    "id": "l22_61",
    "category": "L223",
    "code": "L22302",
    "title": "非監督分群評估雙指標：肘部法（Elbow）vs 輪廓係數（Silhouette）",
    "summary": "決定最佳群數 $K$。肘部法看 SSE（誤差平方和）折點；輪廓係數衡量組內緊湊度與組間分離度，數值越接近 1 分群效果越佳。",
    "confusing": [
      "肘部法（Elbow Method）：計算各 $K$ 值的 SSE。隨著 $K$ 增加，SSE 必定單調下降，最佳 $K$ 位於下降趨勢明顯變平緩的『手肘轉折點』；但實務中轉折點常不明顯。",
      "輪廓係數（Silhouette Coefficient）：$s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$，其中 $a(i)$ 為樣本到同群其他點的平均距離（組內聚），$b(i)$ 為到最近外群點的平均距離（組間離）。範圍 $[-1, 1]$，大於 0.5 視為良好分群。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        • <strong>$s(i) \\approx 1$</strong>：樣本非常適合歸入當前群，且遠離其他群<br>\n        • <strong>$s(i) \\approx 0$</strong>：樣本處在兩個群的交界重疊邊緣<br>\n        • <strong>$s(i) < 0$</strong>：樣本被分錯群了，應該歸入相鄰鄰群！\n      </div>\n    ",
    "keywords": [
      "分群評估",
      "肘部法",
      "輪廓係數",
      "Silhouette",
      "K-Means",
      "SSE",
      "最佳群數"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 23,
        "note": "使用 K-Means 進行客戶分群時決定群數 K 之評估指標"
      }
    ]
  },
  {
    "id": "l22_62",
    "category": "L223",
    "code": "L22302",
    "title": "密度聚類神技：DBSCAN 核心點、邊界點與噪聲點之判決法則",
    "summary": "基於密度的分群演算法（參數 $\\epsilon$ 與 MinPts）。能發現任意幾何形狀聚類，自動過濾離群噪聲點，無需預先指定分群數。",
    "confusing": [
      "核心點（Core Point）：在 $\\epsilon$ 半徑鄰域內的樣本點數量 $\\ge \\text{MinPts}$。",
      "邊界點（Border Point）：在某個核心點的 $\\epsilon$ 半徑內，但自身鄰域樣本點數量 $< \\text{MinPts}$。",
      "噪聲點（Noise Point）：既不是核心點也不是邊界點（被直接標記為異常離群值 -1）。",
      "K-Means 只能劃分凸形球狀群落且對離群值極敏感；DBSCAN 能發現環形、條狀等任意複雜形狀，但對高維稀疏資料效果不佳。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.35rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <span style=\"background:#dbeafe; color:#1e40af; padding:0.3rem; border-radius:4px;\">\n          <strong>核心點</strong><br>鄰域點數 $\\ge$ MinPts\n        </span>\n        <span style=\"background:#fef3c7; color:#b45309; padding:0.3rem; border-radius:4px;\">\n          <strong>邊界點</strong><br>在核心點鄰域內\n        </span>\n        <span style=\"background:#fee2e2; color:#991b1b; padding:0.3rem; border-radius:4px;\">\n          <strong>噪聲點</strong><br>孤立離群值\n        </span>\n      </div>\n    ",
    "keywords": [
      "DBSCAN",
      "密度聚類",
      "核心點",
      "邊界點",
      "噪聲點",
      "任意形狀分群"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 24,
        "note": "地理空間經緯度座標聚類分析與離群噪聲點剔除演算法"
      }
    ]
  },
  {
    "id": "l22_63",
    "category": "L223",
    "code": "L22302",
    "title": "非線性視覺化降維先鋒：t-SNE vs UMAP 演算法對照",
    "summary": "將數十維至數百維特徵壓縮到 2D/3D 平面視覺化。t-SNE 專注保留局部細微結構；UMAP 運算更快且兼顧全局拓撲結構。",
    "confusing": [
      "主成分分析（PCA）是線性投影，面對複雜高維非線性分佈（如手寫數字、基因表達）往往重疊成一團團雜訊。",
      "t-SNE（t-分佈隨機鄰域嵌入）：將距離轉換為高斯機率分佈，在低維採用 t 分佈避免擁擠問題；缺點是計算極慢（$O(n^2)$），且低維空間的跨群聚距離沒有物理意義（不能用於特徵工程輸入）。",
      "UMAP（均勻流形近似與投影）：基於黎曼幾何，運算速度比 t-SNE 快數倍至數十倍，在大規模巨量數據視覺化中已全面普及。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>PCA</strong>: 線性投影，全局最大變異，可用於下游特徵工程<br>\n        • <strong>t-SNE</strong>: 非線性，局部微觀結構極優，僅供可視化 (不可用於下游模型)<br>\n        • <strong>UMAP</strong>: 非線性，兼顧局部與全局拓撲，超大數據集高效率\n      </div>\n    ",
    "keywords": [
      "降維",
      "t-SNE",
      "UMAP",
      "PCA",
      "高維數據視覺化",
      "非線性流形"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 25,
        "note": "高維大數據探索性資料分析 (EDA) 降維視覺化工具選擇"
      }
    ]
  },
  {
    "id": "l22_64",
    "category": "L223",
    "code": "L22302",
    "title": "時間序列平穩性（Stationarity）與單根檢定（ADF Test）",
    "summary": "時間序列均值與變異數不隨時間改變為弱平穩（Weakly Stationary）。ADF 檢定單位根，p < 0.05 拒絕非平穩，平穩是 ARIMA 建模前提。",
    "confusing": [
      "為什麼一定要平穩？若時間序列非平穩（如具備向上趨勢或季節震盪），計算出的統計量無代表性，會導致『偽迴歸（Spurious Regression）』！",
      "ADF 檢定（Augmented Dickey-Fuller）：$H_0$ 為序列存在單位根（非平穩），$H_1$ 為序列平穩。若 $p\\text{-value} < 0.05$，拒絕 $H_0$，證明序列平穩。",
      "非平穩序列的標準解法：進行『一階差分（First-order Differencing）』或『季節差分』消除趨勢與週期。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>非平穩序列<br>(均值有趨勢)</span>\n        <span>➔ <strong>差分運算 $Y_t - Y_{t-1}$</strong><br>(消除趨勢)</span>\n        <span style=\"color:#166534; font-weight:700;\">平穩序列<br>(均值變異數恆定)</span>\n      </div>\n    ",
    "keywords": [
      "時間序列",
      "平穩性",
      "ADF檢定",
      "單位根",
      "差分",
      "ARIMA",
      "偽迴歸"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 26,
        "note": "時間序列資料建立 ARIMA 模型前平穩性檢驗與差分處理"
      }
    ]
  },
  {
    "id": "l22_65",
    "category": "L223",
    "code": "L22302",
    "title": "時間序列古典分解法：加法模型（Additive）vs 乘法模型（Multiplicative）",
    "summary": "拆解時序三大成分：趨勢（Trend）+ 季節（Seasonal）+ 殘差（Residual）。季節震盪振幅固定用加法，隨趨勢成比例放大用乘法。",
    "confusing": [
      "加法模型公式：$Y_t = T_t + S_t + R_t$。判斷特徵：隨著時間推移、整體趨勢上升，每年淡旺季的『上下波動絕對金額』大致保持不變。",
      "乘法模型公式：$Y_t = T_t \\times S_t \\times R_t$。判斷特徵：隨著業績整體爆發成長，旺季與淡季之間的『震盪差距成比例急遽放大』（可透過取 $\\ln(Y_t)$ 轉為加法模型分析）。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>加法模型 (Additive)</strong><br>$Y = T + S + R$<br>季節波動幅度固定恆定\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>乘法模型 (Multiplicative)</strong><br>$Y = T \\times S \\times R$<br>季節波動幅度隨趨勢放大\n        </div>\n      </div>\n    ",
    "keywords": [
      "時間序列分解",
      "加法模型",
      "乘法模型",
      "趨勢項",
      "季節項",
      "殘差項"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 27,
        "note": "電商雙十一營收隨整體規模擴大之時間序列分解模型選擇"
      }
    ]
  },
  {
    "id": "l22_66",
    "category": "L223",
    "code": "L22303",
    "title": "資料視覺化六大視覺通道（Visual Encodings）人眼感知階梯",
    "summary": "Cleveland-McGill 認知心理學研究。人眼對空間位置的解讀精準度最高；長度次之；角度與面積較差；顏色適合做類別區分。",
    "confusing": [
      "精確度排序（由高至低）：① 相同基準線上的位置（散布圖、折線圖） > ② 長度（長條圖） > ③ 角度/斜率（圓餅圖不易察覺細微差異） > ④ 面積/體積（氣泡圖常產生視覺放大錯覺） > ⑤ 顏色明度/飽和度（熱力圖僅供看趨勢）。",
      "口訣：如果要精確比對數值大小，優先用<strong>長條圖（Bar Chart）</strong>；千萬避免使用多分類的<strong>圓餅圖（Pie Chart）</strong>或 3D 圖形。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        <strong>視覺通道認知精確度排行：</strong><br>\n        [位置 (最高)] ➔ [長度] ➔ [角度] ➔ [面積] ➔ [顏色飽和度] ➔ [顏色色調 (僅供分類)]\n      </div>\n    ",
    "keywords": [
      "視覺通道",
      "資料視覺化",
      "長條圖",
      "圓餅圖",
      "認知負荷",
      "圖表選型"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 28,
        "note": "商務簡報中精確傳達多部門業績對比之最佳視覺通道選用"
      }
    ]
  },
  {
    "id": "l22_67",
    "category": "L223",
    "code": "L22303",
    "title": "進階分佈視覺化對決：箱形圖（Boxplot）vs 小提琴圖（Violin Plot）",
    "summary": "揭露資料分佈真貌。箱形圖總括五數與離群點，但對雙峰分佈視而不見；小提琴圖結合核密度估計（KDE），完整描繪多峰密集細節。",
    "confusing": [
      "箱形圖（Boxplot）盲區：若一組資料有兩個密集波峰（雙峰分佈 Bimodal），箱形圖的中位數與四分位距看起來可能跟單峰常態分佈一模一樣！",
      "小提琴圖（Violin Plot）：在外側繪製了鏡像對稱的核密度曲線（KDE），寬度代表該數值區間的樣本密度，能一眼揪出雙峰、多峰與極端分佈型態。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>箱形圖 (Boxplot)</strong><br>• 快速定位五數摘要<br>• 明確標出離群點 (1.5 IQR)<br>• <strong>無法識別雙峰/多峰</strong>\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>小提琴圖 (Violin Plot)</strong><br>• 結合箱形圖 + KDE 密度<br>• 輪廓胖瘦反映密集度<br>• <strong>完美揭露多峰分佈細節</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "箱形圖",
      "小提琴圖",
      "KDE",
      "核密度估計",
      "雙峰分佈",
      "分佈視覺化"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 29,
        "note": "分析具備雙峰分佈特性之用戶年齡數據圖表選擇"
      }
    ]
  },
  {
    "id": "l22_68",
    "category": "L223",
    "code": "L22301",
    "title": "迴歸模型四大核心評價指標：MAE vs MSE vs RMSE vs R²",
    "summary": "連續值預測評估。MAE 對離群值穩健；MSE/RMSE 懲罰大誤差；$R^2$ 判定係數表示自變數解釋應變數變異量的百分比。",
    "confusing": [
      "MAE（平均絕對誤差）：$\\text{MAE} = \\frac{1}{n} \\sum |y - \\hat{y}|$，直觀且對極端值不敏感。",
      "MSE / RMSE（均方誤差 / 根號均方誤差）：平方放大了大誤差的懲罰力度。若某個預測失誤的代價極為慘重，優先選用 RMSE 進行最佳化。",
      "$R^2$ 判定係數：$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$。取值通常在 $[0, 1]$；若預測效果比直接盲猜平均值還差，$R^2$ 可能為負數！"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>MAE</strong>: 穩健抗極端值，誤差量綱一致<br>\n        • <strong>RMSE</strong>: 懲罰特大失誤，與目標單位一致<br>\n        • <strong>$R^2$ 判定係數</strong>: 解釋力佔比 (0.8 代表模型解釋了 80% 變異)\n      </div>\n    ",
    "keywords": [
      "迴歸評估",
      "MAE",
      "MSE",
      "RMSE",
      "R2判定係數",
      "殘差平方和"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 30,
        "note": "房價預測迴歸模型針對極端豪宅誤差懲罰指標選用"
      }
    ]
  },
  {
    "id": "l22_69",
    "category": "L223",
    "code": "L22301",
    "title": "母體抽樣兩大範式：簡單隨機抽樣 vs 分層抽樣（Stratified Sampling）",
    "summary": "在大數據與不平衡母體中抽樣。隨機抽樣易丟失稀有類別；分層抽樣嚴格依照母體次群體比例抽樣，確保代表性。",
    "confusing": [
      "簡單隨機抽樣（SRS）：每個樣本抽中機率均等。但在類別不平衡資料中（如詐欺樣本僅佔 0.1%），小規模抽樣極可能完全抽不到詐欺樣本！",
      "分層抽樣（Stratified Sampling）：先將母體按敏感維度（如年齡層、違約狀態）分成互斥子群體，再從各子群體按比例隨機抽樣，保證訓練集、驗證集與母體的類別比例完全一致。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>隨機抽樣 (SRS)</strong><br>機率完全均等<br>稀有少數類別易遺漏\n        </div>\n        <div style=\"flex:1; background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>分層抽樣 (Stratified)</strong><br>按子群體比例分配<br><strong>類別不平衡必選</strong>\n        </div>\n      </div>\n    ",
    "keywords": [
      "抽樣技術",
      "簡單隨機抽樣",
      "分層抽樣",
      "類別不平衡",
      "母體代表性"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 31,
        "note": "信用卡盜刷偵測模型劃分訓練與測試集時分層抽樣之必要性"
      }
    ]
  },
  {
    "id": "l22_70",
    "category": "L223",
    "code": "L22303",
    "title": "商業智慧（BI）多維資料分析核心：OLAP 立方體四大操作",
    "summary": "多維度資料探勘基石：切片（Slice）、切塊（Dice）、鑽取（Drill-down / Roll-up）與旋轉（Pivot）。",
    "confusing": [
      "切片（Slicing）：固定單一維度（如選定『2025年』），觀察其餘維度的二維平面。",
      "切塊（Dicing）：在多個維度上同時設定範圍（如『2025年 Q1~Q2』且『台北、新北』且『3C產品』），取出一個子立方體。",
      "下鑽（Drill-down）：由粗粒度匯總拆解為細粒度（由『年』下鑽至『季』、『月』）；上捲（Roll-up）反向聚合（由門市匯總至全國）。",
      "旋轉（Pivot）：旋轉座標軸視角（將橫軸與縱軸維度互換）。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>切片 (Slice)</strong>: 固定 1 個維度 (看 2025 年)<br>\n        • <strong>切塊 (Dice)</strong>: 限定多個維度範圍 (2025年 + 北部 + 3C)<br>\n        • <strong>下鑽 (Drill-down)</strong>: 細化顆粒度 (年 ➔ 月 ➔ 日)<br>\n        • <strong>上捲 (Roll-up)</strong>: 粗化聚合 (門市 ➔ 城市 ➔ 全國)\n      </div>\n    ",
    "keywords": [
      "OLAP",
      "多維立方體",
      "切片",
      "切塊",
      "下鑽",
      "上捲",
      "商業智慧BI"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 32,
        "note": "BI 儀表板從全國營收細化檢視個別門市銷量之 OLAP 操作名詞"
      }
    ]
  },
  {
    "id": "l22_71",
    "category": "L224",
    "code": "L22401",
    "title": "特徵選擇（Feature Selection）三大範式：過濾法 vs 包裝法 vs 嵌入法",
    "summary": "剔除冗餘雜訊特徵。過濾法（統計相關指標，極速）；包裝法（RFE 遞歸消除，精度高算力重）；嵌入法（Lasso L1 / 樹模型，自動挑選）。",
    "confusing": [
      "過濾法（Filter Method）：獨立於模型，計算特徵與目標的 Pearson 相關、卡方、互資訊（Mutual Information），速度最快但忽略特徵間的組合效應。",
      "包裝法（Wrapper Method，如 RFE 遞歸特徵消除）：將特定模型作為黑箱評估器，反覆訓練評估特徵子集，效果最好但算力代價極為巨大。",
      "嵌入法（Embedded Method）：特徵選擇與模型訓練融為一體。如 Lasso 迴歸的 L1 正則化自動將無用特徵權重壓縮為 0，或隨機森林依據 Gini 不純度計算特徵重要性。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.3rem; font-size:0.72rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>過濾法 (Filter)</strong><br>獨立於模型 / 快速<br>卡方、互資訊\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>包裝法 (Wrapper)</strong><br>反覆迭代 / 算力重<br>RFE 遞歸消除\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>嵌入法 (Embedded)</strong><br>訓練中自動挑選<br>Lasso (L1), 決策樹\n        </div>\n      </div>\n    ",
    "keywords": [
      "特徵選擇",
      "過濾法",
      "包裝法",
      "嵌入法",
      "RFE",
      "Lasso",
      "互資訊"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 33,
        "note": "數萬個基因特徵挑選時過濾法與包裝法之計算效能取捨"
      }
    ]
  },
  {
    "id": "l22_72",
    "category": "L224",
    "code": "L22401",
    "title": "資料偏態轉換神技：Box-Cox 轉換 vs Yeo-Johnson 轉換",
    "summary": "將高度右偏或非正態特徵轉換為近似常態分佈，改善線性模型收斂性。Box-Cox 僅限嚴格正數；Yeo-Johnson 支援零與負數。",
    "confusing": [
      "許多演算法（線性迴歸、LDA、PCA）假設特徵符合常態分佈，右偏長尾資料會嚴重拉偏權重係數。",
      "Box-Cox 轉換：依據參數 $\\lambda$ 進行冪次轉換，但致命弱點是<strong>資料必須嚴格大於零（$y > 0$）</strong>！",
      "Yeo-Johnson 轉換：Box-Cox 的通用改良版，引入分段函數，即使資料包含 0 或負數數值也能完美處理。"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>偏態資料 ➔ 冪轉換 ➔ 常態高斯分佈</strong><br>\n        • $y > 0$ 正數資料: <strong>Box-Cox 轉換</strong><br>\n        • 包含 0 或負數: <strong>Yeo-Johnson 轉換</strong>\n      </div>\n    ",
    "keywords": [
      "偏態轉換",
      "Box-Cox",
      "Yeo-Johnson",
      "常態化",
      "冪轉換",
      "特徵工程"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 34,
        "note": "收入等高度右偏資料進行特徵工程時 Box-Cox 轉換條件"
      }
    ]
  },
  {
    "id": "l22_73",
    "category": "L224",
    "code": "L22402",
    "title": "推薦系統經典演算法：矩陣分解（Matrix Factorization）與隱含特徵",
    "summary": "克服協同過濾高維稀疏性。將評分矩陣 $R_{m \\times n}$ 分解為用戶隱向量 $U_{m \\times k}$ 與物品隱向量 $V_{n \\times k}$ 乘積。",
    "confusing": [
      "傳統協同過濾（CF）：直接比對兩兩用戶或物品的重疊評分，當物品多達數千萬時，矩陣稀疏度達 99.9% 以上，幾乎找不到共同評分。",
      "矩陣分解（SVD / Funk SVD / ALS）：將極度稀疏的巨大矩陣，投影壓縮至低維空間（如 $k = 64$ 維），自動學習出用戶對『電影動作場面、浪漫指數』的隱性偏好數值，預測未評分項目的分數。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>稀疏評分矩陣<br>$R (M \\times N)$</span>\n        <span>$\\approx$</span>\n        <span>用戶隱向量<br>$U (M \\times K)$</span>\n        <span>$\\times$</span>\n        <span>物品隱向量<br>$V^T (K \\times N)$</span>\n      </div>\n    ",
    "keywords": [
      "推薦系統",
      "矩陣分解",
      "SVD",
      "ALS",
      "隱含特徵",
      "矩陣稀疏性"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 35,
        "note": "串流影音推薦系統採用矩陣分解技術降維求解評分"
      }
    ]
  },
  {
    "id": "l22_74",
    "category": "L224",
    "code": "L22403",
    "title": "海量非結構化語料清洗：去重神技 MinHash 與 LSH（局部敏感雜湊）",
    "summary": "LLM 預訓練前置關鍵。萬億級網頁語料兩兩比對耗費 $O(n^2)$ 算力無法承受；MinHash 壓縮指紋，LSH 亞線性時間完成模糊去重。",
    "confusing": [
      "若預訓練語料存在大量重複文本，會導致大模型記憶退化、過擬合、生成時陷入無限死循環吐詞（Repetition Degeneration）。",
      "MinHash 演算法將長文本的 Jaccard 相似度等價轉化為雜湊簽名的碰撞機率；LSH（Locality-Sensitive Hashing）將相似簽名映射至相同桶位，比對複雜度降至近乎線性時間。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-between; align-items:center; background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        <span>海量文本語料<br>(數百 TB)</span>\n        <span>➔ <strong>MinHash</strong><br>(生成定長指紋)</span>\n        <span>➔ <strong>LSH 分桶</strong><br>(僅比對同桶高相似)</span>\n        <span style=\"color:#166534; font-weight:700;\">純淨無重複語料<br>(高效預訓練)</span>\n      </div>\n    ",
    "keywords": [
      "MinHash",
      "LSH",
      "局部敏感雜湊",
      "LLM預訓練語料",
      "文本去重",
      "Jaccard相似度"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 36,
        "note": "大語言模型訓練前期海量網頁爬蟲資料清洗與高速去重技術"
      }
    ]
  },
  {
    "id": "l22_75",
    "category": "L224",
    "code": "L22403",
    "title": "向量資料庫檢索索引演算法：Flat vs IVF-Flat vs HNSW 對決",
    "summary": "RAG 與向量檢索核心。Flat 暴力全檢（精準但極慢）；IVF-Flat 聚類倒排（快但略損精度）；HNSW 分層小世界圖（毫秒級主流王牌）。",
    "confusing": [
      "Flat 索引：計算目標向量與資料庫中『每一個』向量的精確距離（Brute-force 窮舉），召回率 100%，但在百萬向量以上延遲高達數秒，無法線上使用。",
      "IVF-Flat（倒排文件）：先用 K-Means 將向量空間分成 $N$ 個簇，檢索時只在最近的幾個簇中比對，大幅縮小搜尋範圍。",
      "HNSW（分層可導航小世界圖 Hierarchical Navigable Small World）：建立多層跳躍圖，上層大步跳躍粗定位，下層細緻搜尋，在數千萬向量下仍能保持毫秒級查詢，是 Pinecone / Milvus / Chroma 的黃金標配。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.3rem; font-size:0.72rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>Flat (暴力檢索)</strong><br>100% 準確率<br>速度極慢 $O(n)$\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>IVF-Flat (倒排聚類)</strong><br>速度快<br>需預先聚類訓練\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>HNSW (多層圖)</strong><br><strong>毫秒級響應</strong><br>現代 RAG 標準索引\n        </div>\n      </div>\n    ",
    "keywords": [
      "向量資料庫",
      "HNSW",
      "IVF-Flat",
      "ANN",
      "向量檢索",
      "RAG索引"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 37,
        "note": "RAG 企業知識庫系統向量檢索索引結構之選擇"
      },
      {
        "subj": "115_1_2",
        "qId": 24,
        "note": "HNSW 圖索引在大規模嵌入向量近似最近鄰檢索之優勢"
      }
    ]
  },
  {
    "id": "l22_76",
    "category": "L224",
    "code": "L22403",
    "title": "向量相似度三大度量：餘弦相似度 vs 歐氏距離 vs 內積（Dot Product）",
    "summary": "嵌入向量比對數學基石。餘弦看夾角（長度不敏感）；歐氏距離看絕對空間距離；經 L2 歸一化後，內積等價於餘弦且運算最快。",
    "confusing": [
      "餘弦相似度（Cosine）：$\\cos(\\theta) = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}$。只關心向量的方向維度，與文本長度（向量長度模長）無關，取值 $[-1, 1]$，是語義搜尋最常用的度量。",
      "歐氏距離（Euclidean Distance）：$\\sqrt{\\sum (A_i - B_i)^2}$。關心物理絕對位置，取值 $[0, +\\infty)$，對向量絕對長度極度敏感。",
      "工程效能密技：只要在入庫前對所有向量進行 L2 歸一化（使模長 $\\|A\\| = 1$），則餘弦相似度直接簡化為向量點積（內積 $A \\cdot B$），CPU/GPU 矩陣乘法運算速度提升數倍！"
    ],
    "visualHtml": "\n      <div style=\"font-size:0.75rem; background:var(--bg-main); padding:0.4rem; border-radius:4px; margin:0.4rem 0;\">\n        • <strong>餘弦相似度 (Cosine)</strong>: 只看夾角方向，不看長度 (NLP 語意比對首選)<br>\n        • <strong>歐氏距離 (L2)</strong>: 衡量空間絕對幾何直線距離<br>\n        • <strong>點積 (Dot Product)</strong>: <strong>若先做 L2 歸一化，點積等於餘弦相似度且算力最省！</strong>\n      </div>\n    ",
    "keywords": [
      "向量相似度",
      "餘弦相似度",
      "歐氏距離",
      "內積",
      "點積",
      "L2歸一化",
      "Embedding比對"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 38,
        "note": "自然語言嵌入向量相似度計算指標選用與歸一化優化"
      }
    ]
  },
  {
    "id": "l22_77",
    "category": "L224",
    "code": "L22404",
    "title": "隱私保護經典三部曲：K-匿名 ➔ L-多樣性 ➔ T-貼近度",
    "summary": "匿名化資料防護演進。K-匿名防個體識別；L-多樣性防同質性推斷；T-貼近度防止敏感屬性全局分佈傾斜洩漏。",
    "confusing": [
      "K-Anonymity（K-匿名）：準標識符（Quasi-Identifiers，如年齡、性別、郵遞區號）組合在資料庫中至少有 $K$ 筆相同記錄。缺點：若該 $K$ 個人的敏感屬性全都是『胃癌』，攻擊者依然能 100% 確定目標生病（同質性攻擊 Homogeneity Attack）！",
      "L-Diversity（L-多樣性）：要求每個等價類中的敏感屬性至少有 $L$ 種不同數值。缺點：若全體母體只有 1% 患愛滋病，某組內有 50% 患愛滋病，依然洩漏極高風險（傾斜性攻擊 Skewness Attack）。",
      "T-Closeness（T-貼近度）：要求每個群組內敏感屬性的機率分佈，與整個母體的全局分佈距離（EMD 距離）不大於 $T$。"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; gap:0.35rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <span style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>K-匿名</strong><br>相同準標識符 $\\ge K$ 筆<br>(防個體連結)\n        </span>\n        <span style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>L-多樣性</strong><br>敏感屬性至少 $L$ 種<br>(防同質性鎖定)\n        </span>\n        <span style=\"background:var(--bg-card); padding:0.3rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>T-貼近度</strong><br>敏感分佈貼近全局<br>(防分佈傾斜洩漏)\n        </span>\n      </div>\n    ",
    "keywords": [
      "K-匿名",
      "L-多樣性",
      "T-貼近度",
      "去識別化",
      "準識別符",
      "隱私保護模型"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 39,
        "note": "醫療臨床研究數據開放釋出之去識別化標準架構比較"
      },
      {
        "subj": "115_1_2",
        "qId": 28,
        "note": "K-Anonymity 遭遇同質性攻擊之缺陷與 L-Diversity 補強機制"
      }
    ]
  },
  {
    "id": "l22_78",
    "category": "L224",
    "code": "L22404",
    "title": "差分隱私（Differential Privacy）：嚴謹數學保證的雜訊注入",
    "summary": "現代密碼學隱私金標。注入拉普拉斯或高斯雜訊，確保任何單一資料記錄的存在與否，均不會顯著改變統計查詢結果。",
    "confusing": [
      "數學定義：若相鄰資料集 $D$ 與 $D'$ 僅相差一筆記錄，則對任何輸出結果 $S$ 滿足：$P[M(D) \\in S] \\le e^\\epsilon P[M(D') \\in S]$",
      "隱私預算（$\\epsilon$）：控制隱私保護強度。$\\epsilon$ 越小，注入的雜訊越多，隱私保護越強，但資料精確度與可用性越差；$\\epsilon$ 越大，數據越精確但隱私風險增加。",
      "拉普拉斯機制（Laplace Mechanism）適用於數值型查詢的 L1 敏感度；高斯機制適用於高維向量的 L2 敏感度（如 DP-SGD 差分隱私深度學習訓練）。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        • <strong>隱私預算 $\\epsilon \\downarrow$</strong>：雜訊大，隱私極高，但資料精度變差<br>\n        • <strong>隱私預算 $\\epsilon \\uparrow$</strong>：雜訊小，資料精準，但洩漏風險略增<br>\n        • <strong>核心保證</strong>：即使擁有所有背景情報，攻擊者也無法確知某人是否在資料庫中！\n      </div>\n    ",
    "keywords": [
      "差分隱私",
      "Differential Privacy",
      "隱私預算",
      "Epsilon",
      "拉普拉斯機制",
      "DP-SGD"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 40,
        "note": "大數據統計發布中平衡隱私保護與查詢精確度之差分隱私機制"
      }
    ]
  },
  {
    "id": "l22_79",
    "category": "L224",
    "code": "L22404",
    "title": "聯邦學習（Federated Learning）三大架構：橫向 vs 縱向 vs 聯邦遷移",
    "summary": "打破數據孤島的隱私運算。原始數據保留在本地節點，僅交換加密的模型梯度或權重。橫向（同特徵異用戶）、縱向（同用戶異特徵）。",
    "confusing": [
      "橫向聯邦學習（Horizontal FL）：各參與方的特徵空間相同，但用戶樣本重疊少。典型應用：智慧型手機端 Gboard 鍵盤輸入法模型訓練（百萬手機共用相同詞彙特徵）。",
      "縱向聯邦學習（Vertical FL）：各參與方的用戶群高度重疊，但各自掌握不同的業務特徵。典型應用：同一城市的『銀行』（掌握信用財務數據）與『電商』（掌握購物消費偏好）聯合訓練反欺詐模型，透過 PSI 樣本對齊後訓練，雙方皆不出庫原始數據！",
      "聯邦遷移學習（Federated Transfer）：用戶與特徵皆只有少量重疊時的跨領域遷移。"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; font-size:0.75rem; margin:0.4rem 0;\">\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>橫向聯邦 (樣本聯邦)</strong><br>• 特徵重疊大 (同業)<br>• 用戶群不同 (各家銀行)<br>• 多終端手機聯合學習\n        </div>\n        <div style=\"background:var(--bg-card); padding:0.35rem; border:1px solid var(--border-color); border-radius:4px;\">\n          <strong>縱向聯邦 (特徵聯邦)</strong><br>• 用戶群相同 (同批市民)<br>• 特徵互補 (銀行+電商)<br>• 跨業融合聯合風控\n        </div>\n      </div>\n    ",
    "keywords": [
      "聯邦學習",
      "Federated Learning",
      "橫向聯邦",
      "縱向聯邦",
      "數據不動模型動",
      "隱私計算"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 41,
        "note": "金融機構與電商平台跨業聯合建模之縱向聯邦學習應用"
      },
      {
        "subj": "115_1_2",
        "qId": 30,
        "note": "橫向聯邦學習在終端設備協同訓練之模型聚合流程"
      }
    ]
  },
  {
    "id": "l22_80",
    "category": "L224",
    "code": "L22404",
    "title": "歐盟 GDPR 被遺忘權與機器忘記（Machine Unlearning）前沿技術",
    "summary": "個資法法規合規挑戰。用戶行使刪除權時，單純在資料庫刪除數據不符合法規要求，模型必須徹底抹除特定樣本之權重影響。",
    "confusing": [
      "GDPR 被遺忘權（Right to be Forgotten）法規挑戰：如果一個 AI 模型使用了某使用者的個人隱私資料訓練完成，單純從資料庫裡刪掉該記錄，模型神經網路權重裡依然殘留該用戶的隱私資訊（可透過成員推斷攻擊被反向重構）！",
      "全量重訓（Retraining from scratch）耗費數百萬算力極其不切實際；機器忘記（Machine Unlearning，如 SISA 切片隔離重訓、精準影響力函數抹除）能在極小算力下精確消除特定數據對模型權重的貢獻。"
    ],
    "visualHtml": "\n      <div style=\"background:var(--bg-main); padding:0.4rem; border-radius:4px; font-size:0.75rem; margin:0.4rem 0;\">\n        • <strong>法規要求</strong>: GDPR 第 17 條賦予個人有權要求刪除其個人資料<br>\n        • <strong>工程難題</strong>: 模型參數已『記住』該資料，重訓成本過高<br>\n        • <strong>解法</strong>: <strong>機器忘記 (Machine Unlearning)</strong> 實現精準特徵消除\n      </div>\n    ",
    "keywords": [
      "被遺忘權",
      "GDPR",
      "機器忘記",
      "Machine Unlearning",
      "成員推斷攻擊",
      "資料刪除合規"
    ],
    "examRefs": [
      {
        "subj": "114_2_2",
        "qId": 42,
        "note": "遵守歐盟 GDPR 被遺忘權對已訓練完成之 AI 模型治理挑戰"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L22_CHEATSHEET_DATA;
}
