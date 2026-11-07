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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = L22_CHEATSHEET_DATA;
}
