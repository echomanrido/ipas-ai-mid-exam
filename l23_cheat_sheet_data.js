// AI Core Fast Notes Database for Subject 3 (L23): Machine Learning Technology and Applications
// 科目3（L23）：機器學習技術與應用 - 核心考點速記資料庫

const L23_CHEATSHEET_DATA = [
  // ==========================================
  // 【L231】機器學習基礎數學 (Mathematical Foundations & Optimization)
  // ==========================================
  {
    id: "l231_01",
    category: "L231",
    code: "L23101",
    title: "常態分佈 68-95-99.7 經驗法則",
    summary: "<b>對稱單峰鐘形曲線</b>，平均數 = 中位數 = 眾數。標準常態分佈為 \\(Z \\sim N(0, 1)\\)。",
    confusing: [
      "±1 個標準差範圍內涵蓋約 <b>68.27%</b> 資料",
      "±2 個標準差涵蓋約 <b>95.45%</b> 資料（常用 95% 信賴區間對應 <b>1.96σ</b>）",
      "±3 個標準差涵蓋約 <b>99.73%</b> 資料，超出 ±3σ 視為極端離群值"
    ],
    visualHtml: `
      <div style="text-align:center; padding: 0.25rem 0;">
        <div style="font-weight:700; color:var(--primary); margin-bottom: 0.35rem;">🔔 常態分佈 3-Sigma 區間涵蓋率</div>
        <div style="display:flex; justify-content:space-around; font-size:0.8rem; font-weight:600;">
          <span style="background:rgba(37,99,235,0.1); padding:2px 8px; border-radius:4px; color:#2563eb;">μ ± 1σ: 68.3%</span>
          <span style="background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:4px; color:#059669;">μ ± 2σ: 95.4%</span>
          <span style="background:rgba(245,158,11,0.1); padding:2px 8px; border-radius:4px; color:#d97706;">μ ± 3σ: 99.7%</span>
        </div>
      </div>
    `,
    keywords: ["常態分佈", "高斯分佈", "經驗法則", "3-Sigma", "標準差", "Z-Score"],
    examRefs: [{ subj: "114_2_3", qId: 9 }, { subj: "115_1_3", qId: 5 }]
  },
  {
    id: "l231_02",
    category: "L231",
    code: "L23101",
    title: "中心極限定理 (CLT) 核心條件",
    summary: "無論母體本來是何種分佈（偏態、均勻等），只要樣本數足夠大（<b>通常 n ≥ 30</b>），其<b>「樣本平均數」的抽樣分佈</b>都會趨近於常態分佈。",
    confusing: [
      "趨近常態的是<b>「樣本平均數的分佈」</b>，絕對<b>不是</b>原始母體本身變成常態分佈！",
      "母體變異數為 \\(\\sigma^2\\)，則樣本平均數的標準誤為 \\(\\frac{\\sigma}{\\sqrt{n}}\\)（隨樣本數增加而縮小）"
    ],
    keywords: ["中心極限定理", "CLT", "樣本平均數", "大數法則", "標準誤", "抽樣分佈"],
    examRefs: [{ subj: "115_1_3", qId: 1 }]
  },
  {
    id: "l231_03",
    category: "L231",
    code: "L23101",
    title: "假設檢定：型一錯誤 vs 型二錯誤",
    summary: "<b>虛無假設 \\(H_0\\)</b> vs <b>對立假設 \\(H_1\\)</b>。型一錯誤是「抓錯人」，型二錯誤是「放走壞人」。",
    confusing: [
      "<b>型一錯誤 (Type I, α)</b>：\\(H_0\\) 原本是真的，卻被你錯誤地<b>拒絕</b>了（偽陽性，False Positive）",
      "<b>型二錯誤 (Type II, β)</b>：\\(H_0\\) 原本是假的，你卻沒有拒絕它（偽陰性，False Negative）",
      "統計檢定力 (Power) = <b>\\(1 - \\beta\\)</b>，代表能成功偵測出真實效應的機率"
    ],
    visualHtml: `
      <table class="visual-matrix-table">
        <tr><th>真實狀況 \\ 決策</th><th style="color:#059669;">不拒絕 H0 (判無病)</th><th style="color:#ef4444;">拒絕 H0 (判有病)</th></tr>
        <tr><th>H0 為真 (健康)</th><td style="color:#059669; font-weight:700;">正確 (1 - α)</td><td style="background:#fee2e2; color:#b91c1c; font-weight:700;">型一錯誤 α (偽陽性)</td></tr>
        <tr><th>H0 為偽 (生病)</th><td style="background:#fef3c7; color:#b45309; font-weight:700;">型二錯誤 β (偽陰性)</td><td style="color:#059669; font-weight:700;">檢定力 (1 - β)</td></tr>
      </table>
    `,
    keywords: ["假設檢定", "型一錯誤", "型二錯誤", "顯著水準", "虛無假設", "檢定力"],
    examRefs: [{ subj: "114_2_3", qId: 16 }]
  },
  {
    id: "l231_04",
    category: "L231",
    code: "L23101",
    title: "p 值 (p-value) 與顯著水準 α 判準口訣",
    summary: "<b>口訣：p 小於 α 拒絕 H0，結果具有統計顯著性！</b>",
    confusing: [
      "p 值是在「\\(H_0\\) 為真」的前提下，觀察到目前樣本或更極端結果的機率",
      "<b>p < α</b>：拒絕 \\(H_0\\)，支持對立假設 \\(H_1\\)（有顯著差異）",
      "<b>p ≥ α</b>：不拒絕 \\(H_0\\)（缺乏充分證據支持 \\(H_1\\)）",
      "p 值<b>不代表</b>虛無假設為真的機率，也不代表效應量的大小"
    ],
    keywords: ["p值", "顯著水準", "拒絕域", "統計顯著性", "雙尾檢定"],
    examRefs: [{ subj: "115_1_3", qId: 5 }]
  },
  {
    id: "l231_05",
    category: "L231",
    code: "L23101",
    title: "貝氏定理與條件機率公式",
    summary: "透過新觀察到的證據更新先驗信念：\\(P(A|B) = \\frac{P(B|A) P(A)}{P(B)}\\)。",
    confusing: [
      "<b>先驗機率 \\(P(A)\\)</b>：在看到新資料之前的原始機率信念",
      "<b>概似度 \\(P(B|A)\\)</b>：在假設 A 成立時，觀察到特徵 B 的機率",
      "<b>後驗機率 \\(P(A|B)\\)</b>：結合先驗與新證據後的最終修正機率",
      "<b>邊際機率 \\(P(B)\\)</b>：全機率公式標準化因子，確保總機率和為 1"
    ],
    keywords: ["貝氏定理", "條件機率", "先驗機率", "後驗機率", "概似函數"],
    examRefs: [{ subj: "114_2_3", qId: 22 }]
  },
  {
    id: "l231_06",
    category: "L231",
    code: "L23102",
    title: "特徵值與特徵向量 (Eigenvalues & Eigenvectors)",
    summary: "線性變換 \\(A\\) 作用在特徵向量 \\(v\\) 上，<b>只發生長度縮放，方向不改變</b>：\\(A v = \\lambda v\\)。",
    confusing: [
      "\\(\\lambda\\) 為<b>特徵值 (標量)</b>，代表在該方向上的伸展或收縮比例",
      "\\(v\\) 為<b>特徵向量</b>，代表變換後方向保持不變的主軸方向",
      "協方差矩陣的特徵向量即為 <b>PCA 的主成分方向</b>，特徵值大小對應<b>該方向保留的變異數 (資訊量)</b>"
    ],
    keywords: ["特徵值", "特徵向量", "線性代數", "PCA", "矩陣分解", "協方差矩陣"],
    examRefs: [{ subj: "114_2_3", qId: 3 }, { subj: "115_1_3", qId: 6 }]
  },
  {
    id: "l231_07",
    category: "L231",
    code: "L23102",
    title: "SVD 奇異值分解 vs PCA 主成分分析",
    summary: "SVD 將任意矩陣分解為 \\(A = U \\Sigma V^T\\)；PCA 是將資料中心化後對協方差矩陣做特徵分解。",
    confusing: [
      "PCA 執行前<b>務必先將資料進行中心化 (減去平均值)</b>，且各特徵尺度不一時需做標準化",
      "SVD 適用於<b>非方陣</b>，常用於推薦系統隱含特徵分解、潛在語意分析 (LSA) 與圖像壓縮",
      "PCA 投射後的各個主成分彼此<b>互相正交（無線性相關性）</b>"
    ],
    keywords: ["SVD", "奇異值分解", "PCA", "主成分分析", "正交", "矩陣降維"],
    examRefs: [{ subj: "115_1_3", qId: 6 }]
  },
  {
    id: "l231_08",
    category: "L231",
    code: "L23103",
    title: "凸函數 (Convex) 與局部/全域最佳解",
    summary: "凸優化問題具有最優良的性質：<b>任何局部極小值必為「全域最佳解」</b>！",
    confusing: [
      "<b>凸函數</b>：線性迴歸、SVM、邏輯迴歸之損失函數均為凸函數，保證找到全域最優解",
      "<b>非凸函數 (Non-convex)</b>：深度神經網絡 (DNN) 的損失曲面非凸，存在大量<b>局部極小值 (Local Minima)</b> 與<b>鞍點 (Saddle Points)</b>",
      "高維空間中，優化停滯最常見的原因通常是<b>鞍點（各方向梯度均為0但非極值）</b>而非局部極小值"
    ],
    visualHtml: `
      <div style="display:flex; justify-content:space-between; gap:0.5rem; text-align:center; font-size:0.8rem;">
        <div style="flex:1; background:#ecfdf5; padding:6px; border-radius:4px; border:1px solid #a7f3d0;">
          <div style="font-weight:700; color:#065f46;">凹碗型：凸函數</div>
          <div style="color:#047857;">局部最佳 = 全域最佳 (線性/SVM)</div>
        </div>
        <div style="flex:1; background:#fef2f2; padding:6px; border-radius:4px; border:1px solid #fecaca;">
          <div style="font-weight:700; color:#991b1b;">崎嶇山脊：非凸函數</div>
          <div style="color:#b91c1c;">易卡在鞍點/局部解 (深度學習)</div>
        </div>
      </div>
    `,
    keywords: ["凸函數", "全域最佳解", "局部極小值", "鞍點", "凸優化"],
    examRefs: [{ subj: "114_2_3", qId: 3 }]
  },
  {
    id: "l231_09",
    category: "L231",
    code: "L23103",
    title: "梯度下降學習率 (Learning Rate, α) 三種病態",
    summary: "權重更新公式：\\(w \\leftarrow w - \\alpha \\nabla L(w)\\)。學習率是控制步長的關鍵超參數。",
    confusing: [
      "<b>學習率過大 (Too Large)</b>：步子太大直接跨過山谷，導致損失函數<b>震盪發散 (Overshooting / Diverge)</b>",
      "<b>學習率過小 (Too Small)</b>：更新極其緩慢，耗費大量算力，且極易被困在鞍點或局部極小值",
      "<b>適當學習率 (Well-tuned)</b>：初期大步前進快速下降，後期搭配<b>學習率衰減 (LR Decay)</b> 穩健收斂"
    ],
    keywords: ["學習率", "梯度下降", "發散", "震盪", "Learning Rate", "收斂"],
    examRefs: [{ subj: "114_2_3", qId: 13 }, { subj: "115_1_3", qId: 8 }]
  },
  {
    id: "l231_10",
    category: "L231",
    code: "L23103",
    title: "BGD vs SGD vs Mini-batch 梯度下降三劍客",
    summary: "每次更新參數時，計算梯度所使用樣本數量的策略權衡。",
    confusing: [
      "<b>批次 (BGD, 全資料)</b>：方向最準確平滑，但資料量大時記憶體吃不消、運算極慢",
      "<b>隨機 (SGD, 1筆)</b>：每次只用1筆樣本，計算飛快，路徑劇烈晃動，能跳出淺層局部最優，但收斂不穩定",
      "<b>小批次 (Mini-batch, 32~256筆)</b>：業界標準！完美兼顧 GPU 矩陣並行加速與震盪跳脫能力"
    ],
    keywords: ["BGD", "SGD", "Mini-batch", "隨機梯度下降", "批次大小"],
    examRefs: [{ subj: "114_2_3", qId: 13 }]
  },
  {
    id: "l231_11",
    category: "L231",
    code: "L23103",
    title: "優化器進化史：Momentum / RMSprop / Adam",
    summary: "傳統 SGD 容易在峽谷地形走「Z 字形」震盪，因此發展出動量與自適應學習率算法。",
    confusing: [
      "<b>Momentum (動量)</b>：模擬物理滾球慣性，在相同方向加速、交替方向抵消震盪",
      "<b>AdaGrad / RMSprop</b>：根據歷史梯度平方累積調整，為高頻出現的特徵給予較小學習率",
      "<b>Adam (Adaptive Moment Estimation)</b>：結合了 <b>Momentum (一階動量)</b> 與 <b>RMSprop (二階自適應學習率)</b>，當前深度學習最通用的預設優化器"
    ],
    keywords: ["Adam", "Momentum", "RMSprop", "AdaGrad", "優化器", "Optimizer"],
    examRefs: [{ subj: "115_1_3", qId: 9 }]
  },
  {
    id: "l231_12",
    category: "L231",
    code: "L23103",
    title: "損失函數對照：MSE (L2 Loss) vs MAE (L1 Loss)",
    summary: "<b>MSE 放大極端值，MAE 對離群值穩健 (Robust)。</b>",
    confusing: [
      "<b>均方誤差 (MSE, L2 Loss)</b>：誤差取平方 \\(\\sum (y - \\hat{y})^2\\)，處罰大誤差力道劇烈，易被少數離群值牽著走",
      "<b>平均絕對誤差 (MAE, L1 Loss)</b>：誤差取絕對值 \\(\\sum |y - \\hat{y}|\\)，對離群值具穩健性，但在 0 點不可導",
      "當資料中存在極端大單或異常數值時，應優先考慮 <b>MAE 或 Huber Loss</b>"
    ],
    keywords: ["MSE", "MAE", "損失函數", "L1 Loss", "L2 Loss", "Huber Loss", "離群值"],
    examRefs: [{ subj: "115_1_3", qId: 2 }]
  },

  // ==========================================
  // 【L232】機器學習與深度學習核心技術 (ML & DL Algorithms)
  // ==========================================
  {
    id: "l232_01",
    category: "L232",
    code: "L23201",
    title: "機器學習四大範式判斷準則",
    summary: "依據資料中是否存在「答案標籤 (Labels)」以及是否與「環境互動反饋 (Reward)」進行區分。",
    confusing: [
      "<b>監督式學習 (Supervised)</b>：有標籤 \\((X, y)\\)，任務為分類 (離散) 或迴歸 (連續)",
      "<b>非監督式學習 (Unsupervised)</b>：無標籤 \\((X)\\)，任務為分群 (Clustering) 或降維 (PCA)",
      "<b>半監督式學習 (Semi-supervised)</b>：少量有標籤搭配大量無標籤資料（節省標註成本）",
      "<b>強化學習 (Reinforcement)</b>：無固定標籤，透過 Agent 與環境互動，依獎勵 (Reward) 學習策略"
    ],
    keywords: ["監督式學習", "非監督式學習", "強化學習", "半監督學習", "標籤", "獎勵"],
    examRefs: [{ subj: "114_2_3", qId: 4 }]
  },
  {
    id: "l232_02",
    category: "L232",
    code: "L23201",
    title: "偏差-變異數權衡 (Bias-Variance Tradeoff)",
    summary: "模型總誤差 = \\(\\text{Bias}^2 + \\text{Variance} + \\text{不可避免的噪聲}\\)。兩者不可兼得，需取得最佳平衡點。",
    confusing: [
      "<b>高偏差 (High Bias) = 欠擬合 (Underfitting)</b>：模型太笨太簡單，連訓練集都學不好",
      "<b>高變異數 (High Variance) = 過擬合 (Overfitting)</b>：模型太複雜，把雜訊也背起來，換個資料集預測劇烈波動",
      "<b>Bagging (如隨機森林)</b> 主要降 <b>Variance (變異數)</b>；<b>Boosting (如 GBDT)</b> 主要降 <b>Bias (偏差)</b>"
    ],
    visualHtml: `
      <div style="display:flex; justify-content:space-around; text-align:center; font-size:0.8rem;">
        <div style="flex:1; background:#fef3c7; padding:6px; border-radius:4px; border:1px solid #fde68a;">
          <div style="font-weight:700; color:#b45309;">高偏差 (欠擬合)</div>
          <div>訓練集差、測試集差</div>
          <div>👉 加特徵、加模型深度</div>
        </div>
        <div style="flex:1; background:#fee2e2; padding:6px; border-radius:4px; border:1px solid #fecaca; margin-left:6px;">
          <div style="font-weight:700; color:#b91c1c;">高變異 (過擬合)</div>
          <div>訓練集超神、測試集暴死</div>
          <div>👉 正則化、增數據、剪枝</div>
        </div>
      </div>
    `,
    keywords: ["偏差", "變異數", "Bias", "Variance", "過擬合", "欠擬合", "Tradeoff"],
    examRefs: [{ subj: "114_2_3", qId: 2 }, { subj: "114_2_3", qId: 14 }]
  },
  {
    id: "l232_03",
    category: "L232",
    code: "L23202",
    title: "線性迴歸 (Linear Regression) 與殘差假設",
    summary: "模型公式 \\(y = w^T x + b\\)，利用最小平方法 (OLS) 求解使殘差平方和最小化的權重參數。",
    confusing: [
      "<b>殘差四項古典假設</b>：線性性 (Linearity)、獨立性 (Independence)、常態性 (Normality)、<b>等分散性 (Homoscedasticity)</b>",
      "若殘差圖呈現喇叭形或漏斗形，稱為<b>異質變異性 (Heteroscedasticity)</b>，需對目標變數取對數 (Log Transform) 改善"
    ],
    keywords: ["線性迴歸", "OLS", "最小平方法", "殘差分析", "異質變異性"],
    examRefs: [{ subj: "115_1_3", qId: 5 }]
  },
  {
    id: "l232_04",
    category: "L232",
    code: "L23202",
    title: "邏輯迴歸 (Logistic Regression) 與勝算比",
    summary: "<b>雖然名字叫迴歸，本質是「分類模型」！</b> 利用 Sigmoid 函數將線性輸出映射到 \\((0, 1)\\) 機率區間。",
    confusing: [
      "Sigmoid 函數公式：\\(\\sigma(z) = \\frac{1}{1 + e^{-z}}\\)；對數勝算 (Log-Odds) 與特徵呈線性關係",
      "勝算 (Odds) = \\(\\frac{p}{1-p}\\)，特徵權重 \\(w_i\\) 每增加 1 單位，Odds 會放大 \\(e^{w_i}\\) 倍",
      "常用損失函數為<b>二元交叉熵 (Binary Cross-Entropy / Log-Loss)</b>，而非 MSE"
    ],
    keywords: ["邏輯迴歸", "Sigmoid", "分類", "交叉熵", "勝算比", "Odds"],
    examRefs: [{ subj: "114_2_3", qId: 16 }, { subj: "115_1_3", qId: 10 }]
  },
  {
    id: "l232_05",
    category: "L232",
    code: "L23202",
    title: "決策樹三大節點分裂指標 (Entropy / Gini / Variance)",
    summary: "決策樹分裂的目標是讓子節點的<b>不純度 (Impurity) 越低越好、資訊增益越大越好</b>。",
    confusing: [
      "<b>ID3 演算法</b>：使用<b>資訊增益 (Information Gain, 基於 Entropy)</b>，偏好取值類別多的特徵",
      "<b>C4.5 演算法</b>：使用<b>資訊增益率 (Gain Ratio)</b>，克服 ID3 偏好取值過多的缺點",
      "<b>CART 演算法</b>：分類樹使用 <b>基尼係數 (Gini Impurity)</b>，迴歸樹使用 <b>變異數縮減 (Variance Reduction)</b>"
    ],
    keywords: ["決策樹", "資訊增益", "基尼係數", "Entropy", "Gini", "ID3", "CART"],
    examRefs: [{ subj: "114_2_3", qId: 8 }, { subj: "115_1_3", qId: 15 }]
  },
  {
    id: "l232_06",
    category: "L232",
    code: "L23202",
    title: "KNN (K-最近鄰) 演算法四大盲點",
    summary: "<b>懶惰學習器 (Lazy Learner)</b>，訓練時不做任何參數擬合，預測時才計算與全部樣本的距離。",
    confusing: [
      "<b>K 值太小 (如 K=1)</b>：模型過於複雜敏感，易受噪聲干擾造成<b>過擬合 (Overfitting)</b>",
      "<b>K 值太大 (如 K=N)</b>：模型太簡單，永遠預測多數類別造成<b>欠擬合 (Underfitting)</b>",
      "強烈依賴特徵尺度：未經<b>特徵縮放 (Feature Scaling)</b> 會導致大數值欄位主宰距離計算",
      "遭遇<b>維度災難 (Curse of Dimensionality)</b>：維度超高時空間稀疏，距離度量失去辨識力"
    ],
    keywords: ["KNN", "K-最近鄰", "距離度量", "歐氏距離", "特徵縮放", "維度災難"],
    examRefs: [{ subj: "114_2_3", qId: 9 }]
  },
  {
    id: "l232_07",
    category: "L232",
    code: "L23202",
    title: "支援向量機 (SVM) 最大邊界與核技巧",
    summary: "尋找一個超平面 (Hyperplane)，使兩類樣本到超平面的<b>邊界 (Margin) 最大化</b>。",
    confusing: [
      "決定超平面位置的只有最靠近超平面的少數<b>「支援向量 (Support Vectors)」</b>，其他樣本移動不影響分界線",
      "<b>核技巧 (Kernel Trick)</b>：在低維不可分時，不顯式計算高維映射，而用核函數直接計算高維內積（常用 <b>RBF 徑向基核函數</b>）",
      "超參數 <b>C</b>：懲罰係數，C 越小容忍錯誤越多 (欠擬合風險)，C 越大邊界越窄不容錯誤 (過擬合風險)"
    ],
    keywords: ["SVM", "支援向量機", "最大邊界", "核函數", "RBF", "懲罰參數 C"],
    examRefs: [{ subj: "114_2_3", qId: 9 }, { subj: "115_1_3", qId: 18 }]
  },
  {
    id: "l232_08",
    category: "L232",
    code: "L23202",
    title: "單純貝氏 (Naive Bayes) 的「天真」前提",
    summary: "為什麼叫單純 (Naive)？因為它假設<b>「在已知類別條件下，所有特徵彼此獨立」</b>。",
    confusing: [
      "雖然現實中特徵常有相關性（如身高與體重），但單純貝氏在<b>垃圾郵件過濾、文本分類</b>中依然驚人地有效",
      "計算機率時若某單詞未曾出現會出現 \\(P(x|C) = 0\\) 導致連乘歸零，解法是採用<b>拉普拉斯平滑 (Laplace Smoothing)</b>"
    ],
    keywords: ["單純貝氏", "Naive Bayes", "條件獨立", "垃圾郵件過濾", "拉普拉斯平滑"],
    examRefs: [{ subj: "114_2_3", qId: 22 }]
  },
  {
    id: "l232_09",
    category: "L232",
    code: "L23202",
    title: "集成學習兩大宗派：Bagging vs Boosting",
    summary: "<b>Bagging 著重平行降低變異；Boosting 著重序列降低偏差。</b>",
    confusing: [
      "<b>Bagging (自舉匯聚)</b>：各基學習器<b>獨立並行訓練</b>，採放回抽樣 (Bootstrap)，等權投票或平均（代表：<b>隨機森林</b>，主降 Variance）",
      "<b>Boosting (提升法)</b>：基學習器<b>循序串列訓練</b>，後者專注學習前者犯錯的殘差或提升錯題權重（代表：<b>AdaBoost, GBDT, XGBoost</b>，主降 Bias）"
    ],
    visualHtml: `
      <table class="visual-matrix-table">
        <tr><th>比較項目</th><th style="color:#2563eb;">Bagging (裝袋)</th><th style="color:#d97706;">Boosting (提升)</th></tr>
        <tr><th>基模型關係</th><td>彼此獨立、可高度並行</td><td>前後依賴、串列序列化</td></tr>
        <tr><th>樣本權重</th><td>隨機抽樣，權重均等</td><td>根據前輪誤差動態調整</td></tr>
        <tr><th>主要降低目標</th><td><b>變異數 Variance</b> (抗過擬合)</td><td><b>偏差 Bias</b> (提升擬合力)</td></tr>
        <tr><th>典型代表</th><td>Random Forest</td><td>GBDT, XGBoost, LightGBM</td></tr>
      </table>
    `,
    keywords: ["集成學習", "Bagging", "Boosting", "隨機森林", "GBDT", "Ensemble"],
    examRefs: [{ subj: "114_2_3", qId: 11 }]
  },
  {
    id: "l232_10",
    category: "L232",
    code: "L23202",
    title: "隨機森林 (Random Forest) 的「雙重隨機性」",
    summary: "由大量決策樹組成的 Bagging 模型，其卓越泛化能力來自兩個隨機化機制。",
    confusing: [
      "<b>樣本隨機性</b>：每棵樹採用 Bootstrap (有放回抽樣)，約有 <b>36.8% (1/e)</b> 的樣本不會被抽到，稱為<b>袋外資料 (OOB, Out-of-Bag)</b>，可用於自我驗證而不需額外測試集",
      "<b>特徵隨機性</b>：節點分裂時只隨機挑選部分特徵（分類樹預設選 \\(\\sqrt{p}\\) 個），強迫樹之間去除相關性 (De-correlation)"
    ],
    keywords: ["隨機森林", "Random Forest", "OOB", "袋外資料", "雙重隨機", "特徵子集"],
    examRefs: [{ subj: "114_2_3", qId: 11 }, { subj: "115_1_3", qId: 22 }, { subj: "115_1_3", qId: 28 }]
  },
  {
    id: "l232_11",
    category: "L232",
    code: "L23202",
    title: "梯度提升機家族：GBDT vs XGBoost vs LightGBM",
    summary: "當代表格數據競賽三巨頭，核心思想都是一棵一棵擬合<b>「前序模型的預測殘差」</b>。",
    confusing: [
      "<b>GBDT</b>：採用梯度下降方向的一階導數擬合殘差",
      "<b>XGBoost</b>：同時使用<b>一階與二階泰勒展開導數</b>，且在目標函數內建 <b>L1/L2 正則項</b> 防過擬合",
      "<b>LightGBM</b>：採用<b>直方圖算法 (Histogram)</b> 與<b>按葉生長 (Leaf-wise)</b> 策略，訓練速度最快、記憶體消耗最低"
    ],
    keywords: ["GBDT", "XGBoost", "LightGBM", "殘差擬合", "二階泰勒", "直方圖算法"],
    examRefs: [{ subj: "114_2_3", qId: 11 }]
  },
  {
    id: "l232_12",
    category: "L232",
    code: "L23203",
    title: "K-Means 分群流程與手肘法 (Elbow Method)",
    summary: "<b>距離型分群法</b>。隨機挑選 K 個群心 ➔ 依歐氏距離分派 ➔ 重新計算群心平均 ➔ 重複迭代至收斂。",
    confusing: [
      "極度依賴<b>特徵標準化</b>，且容易受到初始點影響（解法：使用 <b>K-Means++</b> 讓初始群心彼此盡量分散）",
      "<b>手肘法 (Elbow Method)</b>：觀察群內誤差平方和 (SSE / Inertia) 隨 K 值增加的下降曲線，拐折處即為最佳 K",
      "缺點：只能發現<b>凸形 (圓球形)</b> 群體，無法處理甜甜圈形狀或長條交錯形狀的資料"
    ],
    keywords: ["K-Means", "分群", "手肘法", "群內誤差平方和", "SSE", "Inertia"],
    examRefs: [{ subj: "114_2_3", qId: 12 }]
  },
  {
    id: "l232_13",
    category: "L232",
    code: "L23203",
    title: "DBSCAN 密度分群四大點型分類",
    summary: "<b>基於密度的分群演算法</b>。無需預先指定 K 值，能自動辨識任意形狀的群體，並將孤立稀疏點標記為雜訊。",
    confusing: [
      "兩大核心參數：鄰域半徑 <b>ε (Epsilon)</b> 與 最少樣本數 <b>MinPts</b>",
      "<b>核心點 (Core Point)</b>：半徑 ε 內點數 ≥ MinPts",
      "<b>邊界點 (Border Point)</b>：半徑 ε 內點數 < MinPts，但落在某核心點的 ε 鄰域內",
      "<b>雜訊點 (Noise)</b>：既非核心點也非邊界點（不屬於任何群組，天然異常檢測）"
    ],
    visualHtml: `
      <div style="background:var(--bg-card); padding:8px; border-radius:4px; font-size:0.78rem;">
        <div>🔵 <b>核心點</b>：周圍 ε 鄰域樣本數 ≥ MinPts (群體中心骨幹)</div>
        <div>🟡 <b>邊界點</b>：周圍點數不足，但在核心點勢力範圍內 (群聚外圍邊緣)</div>
        <div>❌ <b>雜訊點</b>：邊界以外的孤立單點 (自動標記為 -1 離群值)</div>
      </div>
    `,
    keywords: ["DBSCAN", "密度分群", "核心點", "邊界點", "雜訊", "MinPts", "Epsilon"],
    examRefs: [{ subj: "114_2_3", qId: 4 }]
  },
  {
    id: "l232_14",
    category: "L232",
    code: "L23203",
    title: "常用神經網絡激活函數 (Activation Functions)",
    summary: "為神經網絡引入<b>非線性表達能力</b>，若無激活函數，多層神經網絡只等同於一層線性變換。",
    confusing: [
      "<b>Sigmoid</b>：輸出 (0,1)，兩端平坦處梯度趨近 0，極易引發<b>梯度消失</b>",
      "<b>ReLU (Rectified Linear Unit)</b>：\\(\\max(0, x)\\)，計算極快且大於 0 時梯度恆為 1，有效解決梯度消失；但負區梯度為 0 可能引發<b>死神經元 (Dying ReLU)</b>",
      "<b>Leaky ReLU</b>：在負區給予微小斜率 (如 0.01x)，改善神經元壞死問題",
      "<b>Softmax</b>：用於多分類輸出層，將各類別得分轉化為加總為 1 的機率分佈"
    ],
    keywords: ["激活函數", "Sigmoid", "ReLU", "Leaky ReLU", "Softmax", "梯度消失"],
    examRefs: [{ subj: "115_1_3", qId: 10 }]
  },
  {
    id: "l232_15",
    category: "L232",
    code: "L23203",
    title: "梯度消失 (Vanishing) 與梯度爆炸 (Exploding) 解方",
    summary: "反向傳播使用<b>鏈式法則 (Chain Rule)</b> 連乘，層數越深連乘項越多，導致梯度急速歸零或急劇膨脹。",
    confusing: [
      "<b>梯度消失解法</b>：改用 <b>ReLU</b> 激活函數、採用 <b>殘差連接 (ResNet Residual Skip Connection)</b>、加入 <b>Batch Normalization (批次標準化)</b>、適當權重初始化 (He/Xavier)",
      "<b>梯度爆炸解法</b>：採用 <b>梯度裁剪 (Gradient Clipping)</b>、權重正則化"
    ],
    keywords: ["梯度消失", "梯度爆炸", "反向傳播", "鏈式法則", "殘差網絡", "梯度裁剪"],
    examRefs: [{ subj: "115_1_3", qId: 8 }]
  },
  {
    id: "l232_16",
    category: "L232",
    code: "L23203",
    title: "CNN (卷積神經網絡) 兩大核心技術機制",
    summary: "專為網格結構（影像、音頻）設計。核心機制：<b>局部感受野 (Local Receptive Field)</b> 與 <b>權重共享 (Weight Sharing)</b>。",
    confusing: [
      "<b>卷積層 (Conv Layer)</b>：利用濾鏡 (Kernel) 滑動抽取局部特徵（邊緣、紋理），大幅減少參數量",
      "<b>池化層 (Pooling Layer)</b>：如 Max-Pooling，主要目的為<b>特徵降維與空間不變性 (Translation Invariance)</b>，<b>池化層沒有需要學習的權重參數</b>！",
      "全連接層 (FC Layer)：將最後抽取的高階特徵展平並映射至目標類別數量"
    ],
    keywords: ["CNN", "卷積神經網路", "局部感受野", "權重共享", "池化層", "Max-Pooling"],
    examRefs: [{ subj: "114_2_3", qId: 5 }, { subj: "114_2_3", qId: 6 }]
  },
  {
    id: "l232_17",
    category: "L232",
    code: "L23203",
    title: "RNN vs LSTM 門控機制對決",
    summary: "處理序列資料（時間序列、文本音頻）。傳統 RNN 存在嚴重長期依賴遺忘問題，LSTM 引入門控機制徹底解決。",
    confusing: [
      "<b>LSTM (長短期記憶) 三個門</b>：<b>遺忘門 (Forget Gate)</b> 決定丟棄哪些舊資訊、<b>輸入門 (Input Gate)</b> 決定保存哪些新資訊、<b>輸出門 (Output Gate)</b> 決定當前隱藏狀態輸出",
      "<b>GRU (門控循環單元)</b>：將 LSTM 簡化為<b>重置門 (Reset Gate)</b> 與 <b>更新門 (Update Gate)</b> 兩個門，運算速度更快"
    ],
    keywords: ["RNN", "LSTM", "GRU", "遺忘門", "輸入門", "時間序列", "門控機制"],
    examRefs: [{ subj: "114_2_3", qId: 7 }]
  },
  {
    id: "l232_18",
    category: "L232",
    code: "L23203",
    title: "Transformer 與自注意力機制 (Self-Attention)",
    summary: "全面取代 RNN！擺脫序列遞歸計算，實現<b>完全並行化 (Parallelization)</b> 與<b>全局注意力關聯</b>。",
    confusing: [
      "<b>自注意力公式</b>：\\(\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V\\)",
      "除以 \\(\\sqrt{d_k}\\) 的目的是防止向量維度過大時內積值過大，導致 Softmax 進入微小梯度飽和區",
      "因為放棄了 RNN 的時序結構，必須額外加入 <b>位置編碼 (Positional Encoding)</b> 來注入前後順序資訊"
    ],
    keywords: ["Transformer", "Self-Attention", "自注意力機制", "QKV", "位置編碼"],
    examRefs: [{ subj: "115_1_3", qId: 3 }]
  },

  // ==========================================
  // 【L233】機器學習建模與參數調校 (Modeling, Evaluation & Tuning)
  // ==========================================
  {
    id: "l233_01",
    category: "L233",
    code: "L23301",
    title: "特徵縮放：標準化 (StandardScaler) vs 歸一化 (MinMaxScaler)",
    summary: "消除不同特徵因度量單位與數值規模不同帶來的權重失衡。",
    confusing: [
      "<b>Z-Score 標準化</b>：\\(z = \\frac{x - \\mu}{\\sigma}\\)，轉為平均數 0、標準差 1。適用於資料有極端離群值、或多數 ML 演算法 (PCA, SVM, 邏輯迴歸)",
      "<b>Min-Max 歸一化</b>：\\(x' = \\frac{x - x_{min}}{x_{max} - x_{min}}\\)，壓縮至 [0, 1]。對離群值極度敏感，適用於圖像像素處理 (0~255)",
      "<b>重要陷阱：樹狀模型 (決策樹、隨機森林、XGBoost) 不需要做特徵縮放</b>！"
    ],
    keywords: ["標準化", "歸一化", "StandardScaler", "MinMaxScaler", "Z-Score", "特徵縮放"],
    examRefs: [{ subj: "114_2_3", qId: 9 }]
  },
  {
    id: "l233_02",
    category: "L233",
    code: "L23301",
    title: "類別特徵編碼：One-Hot 編碼 vs 序數編碼 (Ordinal)",
    summary: "模型無法直接計算字串類別，需轉換為數值表示。",
    confusing: [
      "<b>名義型 (無順序大小)</b>：如顏色 (紅/藍/綠)、國家 ➔ 必須用 <b>One-Hot Encoding (獨熱編碼)</b>。若錯用數字標註 (1,2,3) 會讓模型誤以為藍 > 紅！",
      "<b>序數型 (有等級順序)</b>：如學歷 (小學/國中/大學)、滿意度 ➔ 適合用 <b>Ordinal Encoding (序數編碼)</b> (1, 2, 3 保留自然先後大小)",
      "高基數 (類別過多如 1000 個郵遞區號) 採用 One-Hot 會引發維度爆炸，應改用 Target Encoding 或 Embedding"
    ],
    keywords: ["One-Hot", "獨熱編碼", "序數編碼", "LabelEncoder", "特徵工程", "類別變數"],
    examRefs: [{ subj: "114_2_3", qId: 9 }]
  },
  {
    id: "l233_03",
    category: "L233",
    code: "L23301",
    title: "缺失值處理三大策略",
    summary: "資料不完整時的應對策略：刪除、統計填補、演算法預測插補。",
    confusing: [
      "<b>直接刪除 (Drop)</b>：只適合缺失比例極低 (< 3%) 或缺失欄位無關緊要的情況，否則損失大量樣本資訊",
      "<b>統計填補 (Imputation)</b>：常態對稱數據用<b>平均數 (Mean)</b>；具偏態或離群值用<b>中位數 (Median)</b>；類別型數據用<b>眾數 (Mode)</b>",
      "<b>嚴禁資料洩漏 (Data Leakage)</b>：填補測試集時，<b>必須使用訓練集計算出的統計值</b>，絕對不能拿整體資料一併算平均！"
    ],
    keywords: ["缺失值", "資料清理", "Mean", "Median", "資料洩漏", "Imputation"],
    examRefs: [{ subj: "115_1_3", qId: 4 }]
  },
  {
    id: "l233_04",
    category: "L233",
    code: "L23301",
    title: "離群值檢測：3-Sigma 法則 vs IQR (四分位距法)",
    summary: "極端異常值的自動化識別門檻準則。",
    confusing: [
      "<b>3-Sigma 法則</b>：\\([\\mu - 3\\sigma, \\mu + 3\\sigma]\\)，<b>僅嚴格適用於「常態分佈」數據</b>！",
      "<b>IQR 四分位距法</b>：\\(IQR = Q_3 - Q_1\\)，界線為 <b>\\([Q_1 - 1.5 \\times IQR, Q_3 + 1.5 \\times IQR]\\)</b>。不依賴常態假設，對偏態分佈極具穩健性（箱型圖標準規範）"
    ],
    visualHtml: `
      <div style="background:var(--bg-card); padding:8px; border-radius:4px; font-size:0.8rem; text-align:center;">
        <span style="color:#d97706; font-weight:700;">下界門檻：Q1 - 1.5 × IQR</span>
        <span style="margin:0 8px; color:var(--text-muted);">|</span>
        <span style="color:#059669; font-weight:700;">正常範圍 [Q1, Q3]</span>
        <span style="margin:0 8px; color:var(--text-muted);">|</span>
        <span style="color:#d97706; font-weight:700;">上界門檻：Q3 + 1.5 × IQR</span>
      </div>
    `,
    keywords: ["離群值", "IQR", "四分位距", "箱型圖", "3-Sigma", "異常檢測"],
    examRefs: [{ subj: "115_1_3", qId: 5 }]
  },
  {
    id: "l233_05",
    category: "L233",
    code: "L23302",
    title: "特徵選擇三大流派：過濾法 / 包裝法 / 嵌入法",
    summary: "篩選有效特徵、剔除冗餘雜訊與降維的核心手段。",
    confusing: [
      "<b>過濾法 (Filter)</b>：獨立於模型之外，以統計指標快速篩選（如相關係數、卡方檢定、互資訊），運算最快但忽略特徵間組合效益",
      "<b>包裝法 (Wrapper)</b>：以目標模型作為黑盒子評分器（如遞迴特徵消除 RFE），效果最好但運算成本極高",
      "<b>嵌入法 (Embedded)</b>：模型訓練與特徵選擇融為一體（如 <b>Lasso L1 正則化、樹狀模型的特徵重要度 Feature Importance</b>）"
    ],
    keywords: ["特徵選擇", "Filter", "Wrapper", "Embedded", "RFE", "L1", "特徵重要度"],
    examRefs: [{ subj: "114_2_3", qId: 2 }, { subj: "115_1_3", qId: 7 }]
  },
  {
    id: "l233_06",
    category: "L233",
    code: "L23304",
    title: "正則化大對決：L1 (Lasso) vs L2 (Ridge)",
    summary: "在損失函數中加入懲罰項，限制權重數值過大，防止模型過擬合。",
    confusing: [
      "<b>L1 正則化 (Lasso)</b>：懲罰項為 \\(\\lambda \\sum |w_i|\\)，具有<b>特徵稀疏性</b>，會直接將不重要特徵權重<b>壓至純 0</b>，具備自動特徵選擇功能！",
      "<b>L2 正則化 (Ridge)</b>：懲罰項為 \\(\\lambda \\sum w_i^2\\)，會將權重<b>縮小逼近 0 但不會等於 0</b>，能有效緩解多重共線性問題",
      "<b>ElasticNet (彈性網絡)</b>：同時兼具 L1 與 L2 的加權混合版本"
    ],
    visualHtml: `
      <table class="visual-matrix-table">
        <tr><th>正則化類型</th><th>懲罰項公式</th><th>權重特徵效應</th><th>典型應用場景</th></tr>
        <tr><td style="color:#2563eb; font-weight:700;">L1 (Lasso)</td><td>λ ∑ |w| (菱形幾何)</td><td>權重歸零 (稀疏解)</td><td>特徵篩選、高維稀疏</td></tr>
        <tr><td style="color:#059669; font-weight:700;">L2 (Ridge)</td><td>λ ∑ w² (圓形幾何)</td><td>權重縮小逼近0 (平滑)</td><td>防止過擬合、多重共線</td></tr>
      </table>
    `,
    keywords: ["L1", "L2", "Lasso", "Ridge", "正則化", "稀疏解", "多重共線性"],
    examRefs: [{ subj: "114_2_3", qId: 2 }, { subj: "115_1_3", qId: 7 }, { subj: "115_1_3", qId: 33 }]
  },
  {
    id: "l233_07",
    category: "L233",
    code: "L23304",
    title: "過擬合 (Overfitting) 五大克星錦囊",
    summary: "當訓練集準確率 99% 但驗證集/測試集只有 65% 時的標準解方清單。",
    confusing: [
      "<b>1. 增加訓練數據量</b> 或進行 <b>資料擴增 (Data Augmentation)</b>",
      "<b>2. 加入正則化 (Regularization)</b>：增加 L1/L2 懲罰項",
      "<b>3. 簡化模型複雜度</b>：決策樹限制深度與<b>剪枝 (Pruning)</b>、神經網絡減少層數",
      "<b>4. 採用 Dropout</b>：訓練時隨機讓部分神經元暫時斷開失能",
      "<b>5. 提前終止 (Early Stopping)</b>：監控驗證集誤差，一旦開始上升立即停止訓練"
    ],
    keywords: ["過擬合", "Overfitting", "Dropout", "早停法", "Early Stopping", "資料擴增", "剪枝"],
    examRefs: [{ subj: "114_2_3", qId: 14 }, { subj: "115_1_3", qId: 4 }]
  },
  {
    id: "l233_08",
    category: "L233",
    code: "L23303",
    title: "K 折交叉驗證 vs 分層交叉驗證 (Stratified K-Fold)",
    summary: "有效評估模型泛化能力、降低單次劃分抽樣偏差的標準評估協議。",
    confusing: [
      "<b>標準 K-Fold</b>：隨機切分成 K 份，每次輪流用 1 份驗證、K-1 份訓練，取 K 次分數平均",
      "<b>分層 K-Fold (Stratified K-Fold)</b>：<b>分類任務強烈推薦！</b> 確保每個摺疊子集中的正負樣本比例與母體嚴格保持一致",
      "若資料為高度不平衡分類，錯用普通 K-Fold 可能導致某個摺疊根本沒有任何正樣本！"
    ],
    keywords: ["交叉驗證", "K-Fold", "Stratified", "分層抽樣", "泛化評估"],
    examRefs: [{ subj: "114_2_3", qId: 1 }, { subj: "115_1_3", qId: 34 }]
  },
  {
    id: "l233_09",
    category: "L233",
    code: "L23303",
    title: "混淆矩陣四象限解碼 (TP, FP, TN, FN)",
    summary: "<b>第一個字母代表「猜得對不對」(T/F)；第二個字母代表「你猜了什麼」(P/N)。</b>",
    confusing: [
      "<b>TP (True Positive)</b>：猜是正類，且猜對了（真陽性）",
      "<b>FP (False Positive)</b>：猜是正類，但猜錯了（偽陽性，型一錯誤）",
      "<b>FN (False Negative)</b>：猜是負類，但猜錯了（偽陰性，型二錯誤，漏報）",
      "<b>TN (True Negative)</b>：猜是負類，且猜對了（真陰性）"
    ],
    visualHtml: `
      <table class="visual-matrix-table">
        <tr><th>真實 \\ 預測</th><th style="color:#2563eb;">預測 Positive (陽性)</th><th style="color:#475569;">預測 Negative (陰性)</th></tr>
        <tr><th>真實 Positive</th><td style="background:#ecfdf5; font-weight:700; color:#047857;">TP (真陽性 - 抓對)</td><td style="background:#fef2f2; font-weight:700; color:#b91c1c;">FN (偽陰性 - 漏抓)</td></tr>
        <tr><th>真實 Negative</th><td style="background:#fee2e2; font-weight:700; color:#b91c1c;">FP (偽陽性 - 誤抓)</td><td style="background:#ecfdf5; font-weight:700; color:#047857;">TN (真陰性 - 放對)</td></tr>
      </table>
    `,
    keywords: ["混淆矩陣", "TP", "FP", "TN", "FN", "偽陽性", "偽陰性"],
    examRefs: [{ subj: "114_2_3", qId: 16 }]
  },
  {
    id: "l233_10",
    category: "L233",
    code: "L23303",
    title: "準確率 (Accuracy) 的「不平衡陷阱」",
    summary: "公式：\\(\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}\\)。在極度不平衡資料下會徹底失效！",
    confusing: [
      "若 99% 的樣本都是健康人、只有 1% 患罕見疾病，模型只要耍賴「全部猜健康」，準確率高達 99%，但病人一個都抓不到！",
      "當類別嚴重不平衡時，<b>絕對不能只看 Accuracy</b>，必須評估 <b>Precision、Recall、F1-Score 或 PR-AUC</b>"
    ],
    keywords: ["準確率", "Accuracy", "類別不平衡", "詐欺偵測", "罕見疾病"],
    examRefs: [{ subj: "114_2_3", qId: 18 }]
  },
  {
    id: "l233_11",
    category: "L233",
    code: "L23303",
    title: "精確率 (Precision) vs 召回率 (Recall) 抉擇情境",
    summary: "<b>Precision 講究「精準不亂抓」；Recall 講究「寧濫勿缺一個都不能漏」。</b>",
    confusing: [
      "<b>精確率 (Precision)</b>：\\(\\frac{TP}{TP + FP}\\)。在所有<b>預測為陽性</b>中，真陽性的比例。適用於<b>「抓錯代價極大」</b>的情境（如垃圾郵件過濾、死刑判決）",
      "<b>召回率 (Recall / Sensitivity)</b>：\\(\\frac{TP}{TP + FN}\\)。在所有<b>真實為陽性</b>中，成功被找出的比例。適用於<b>「漏抓代價極大」</b>的情境（如癌症篩檢、信用卡盜刷預警）"
    ],
    keywords: ["Precision", "Recall", "精確率", "召回率", "敏感度", "查準率", "查全率"],
    examRefs: [{ subj: "114_2_3", qId: 16 }]
  },
  {
    id: "l233_12",
    category: "L233",
    code: "L23303",
    title: "F1-Score 與 ROC-AUC vs PR-AUC 曲線判別準則",
    summary: "綜合評估二分類模型在各種門檻值下的整體辨識能力。",
    confusing: [
      "<b>F1-Score</b>：Precision 與 Recall 的<b>調和平均數 (Harmonic Mean)</b>：\\(F_1 = \\frac{2 \\times P \\times R}{P + R}\\)。調和平均會重懲極低值",
      "<b>ROC 曲線</b>：X 軸為 FPR (\\(\\frac{FP}{N}\\))，Y 軸為 TPR/Recall (\\(\\frac{TP}{P}\\))。AUC = 1 為完美模型，0.5 為瞎猜。<b>對類別平衡改變較不敏感</b>",
      "<b>PR 曲線</b>：在<b>極度不平衡資料 (正樣本極少)</b> 下，PR-AUC 遠比 ROC-AUC 更具真實鑑別度！"
    ],
    keywords: ["F1-Score", "ROC-AUC", "PR-AUC", "調和平均", "FPR", "TPR"],
    examRefs: [{ subj: "114_2_3", qId: 16 }, { subj: "114_2_3", qId: 17 }]
  },
  {
    id: "l233_13",
    category: "L233",
    code: "L23303",
    title: "迴歸評估指標：MSE / RMSE / MAE / R²",
    summary: "衡量連續預測值與真實值之間誤差距離的指標組合。",
    confusing: [
      "<b>MAE</b>：誤差絕對值平均，單位與目標相同，物理意義最直觀",
      "<b>RMSE</b>：MSE 取開根號，單位恢復一致，但保留了對大誤差的高敏感度",
      "<b>決定係數 \\(R^2\\)</b>：解釋變異佔總變異的比例。\\(R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}\\)；\\(R^2 = 1\\) 完美擬合，\\(R^2 = 0\\) 等同用平均數瞎猜，可能小於 0！"
    ],
    keywords: ["MSE", "RMSE", "MAE", "R2", "決定係數", "迴歸評估"],
    examRefs: [{ subj: "114_2_3", qId: 15 }, { subj: "115_1_3", qId: 2 }]
  },
  {
    id: "l233_14",
    category: "L233",
    code: "L23304",
    title: "超參數搜尋：網格搜尋 vs 隨機搜尋 vs 貝氏優化",
    summary: "調整模型架構外部超參數 (Hyperparameters) 的搜尋策略比較。",
    confusing: [
      "<b>網格搜尋 (Grid Search)</b>：暴力窮舉所有指定排列組合，保證找出網格內最優，但維度稍高即面臨算力爆炸",
      "<b>隨機搜尋 (Random Search)</b>：在連續空間隨機採樣，在高維度參數搜尋時效率顯著超越網格搜尋！",
      "<b>貝氏優化 (Bayesian Optimization)</b>：利用過去評估結果構建機率代理模型 (如高斯過程)，聰明引導下一次採樣，算力利用率最高"
    ],
    keywords: ["Grid Search", "Random Search", "超參數搜尋", "網格搜尋", "貝氏優化"],
    examRefs: [{ subj: "114_2_3", qId: 34 }, { subj: "115_1_3", qId: 34 }]
  },

  // ==========================================
  // 【L234】機器學習治理與合規 (Governance, Privacy & Fairness)
  // ==========================================
  {
    id: "l234_01",
    category: "L234",
    code: "L23401",
    title: "數據去識別化四大常用技術",
    summary: "降低資料直接連結到特定個人的隱私保護手法。",
    confusing: [
      "<b>遮蔽 (Masking)</b>：以符號取代部分內容，如身份證「A12******89」、電話「0912-***-456」",
      "<b>假名化/替換 (Pseudonymization)</b>：將真實識別碼替換為亂數金鑰 ID，若金鑰妥善保管可逆",
      "<b>泛化/分桶 (Generalization / Bucketing)</b>：將精確數值轉為區間粗粒度，如年齡 27 歲改為「20~29 歲」",
      "<b>擾動 (Perturbation)</b>：在數值中加入微小統計噪聲，確保整體分佈不變但單一數值被模糊化"
    ],
    keywords: ["去識別化", "遮蔽", "假名化", "泛化", "分桶", "資料隱私"],
    examRefs: [{ subj: "114_2_3", qId: 28 }]
  },
  {
    id: "l234_02",
    category: "L234",
    code: "L23401",
    title: "K-匿名 / L-多樣性 / T-接近性進階隱私防禦",
    summary: "防止透過外部資料庫交叉比對（連結攻擊）進行<b>再識別 (Re-identification)</b> 的隱私模型。",
    confusing: [
      "<b>K-匿名 (K-Anonymity)</b>：確保每筆紀錄在準識別欄位（如年齡+性別+郵遞區號）上，<b>至少有 K 筆完全相同</b>無法單獨區分",
      "<b>L-多樣性 (L-Diversity)</b>：克服同質性攻擊，要求每個等價群組內的<b>敏感屬性（如疾病）至少有 L 種不同值</b>",
      "<b>T-接近性 (T-Closeness)</b>：要求群組內敏感屬性的分佈與整體母體分佈的距離小於門檻 T，防止傾斜攻擊"
    ],
    keywords: ["K-匿名", "L-多樣性", "T-接近性", "再識別攻擊", "隱私增強技術", "PETs"],
    examRefs: [{ subj: "114_2_3", qId: 28 }]
  },
  {
    id: "l234_03",
    category: "L234",
    code: "L23401",
    title: "差分隱私 (Differential Privacy) 的數學承諾",
    summary: "<b>「無論你的個人數據在不在資料庫裡，輸出結果的機率分佈幾乎沒有差別！」</b>",
    confusing: [
      "在查詢結果或梯度中加入<b>受控的隨機噪聲（如拉普拉斯噪聲 Laplace Noise）</b>",
      "參數 <b>ε (隱私預算)</b>：ε 越小，噪聲越大，隱私保護越強，但資料精確度 (Utility) 下降",
      "是目前數學證明最強的防範成員推斷攻擊 (Membership Inference) 的隱私技術"
    ],
    keywords: ["差分隱私", "Differential Privacy", "隱私預算", "拉普拉斯噪聲", "成員推斷"],
    examRefs: [{ subj: "114_2_3", qId: 28 }, { subj: "115_1_3", qId: 45 }]
  },
  {
    id: "l234_04",
    category: "L234",
    code: "L23401",
    title: "聯邦學習 (Federated Learning)：「數據不動，模型動」",
    summary: "分散式協同訓練架構：<b>原始資料不出本地端，只上傳模型梯度/參數更新至中央伺服器進行聚合。</b>",
    confusing: [
      "解決企業間<b>資料孤島 (Data Silos)</b> 與合規隱私問題（如多家醫院聯合訓練腫瘤辨識模型）",
      "<b>橫向聯邦學習</b>：使用者特徵相同、但樣本群體不同（如不同地區的手機用戶）",
      "<b>縱向聯邦學習</b>：使用者樣本相同、但特徵不同（如同一城市的銀行與電商聯合建模）",
      "注意：上傳的梯度若未經差分隱私保護，仍可能遭逆向工程推導原始特徵"
    ],
    keywords: ["聯邦學習", "Federated Learning", "資料孤島", "梯度聚合", "隱私計算"],
    examRefs: [{ subj: "115_1_3", qId: 45 }]
  },
  {
    id: "l234_05",
    category: "L234",
    code: "L23401",
    title: "同態加密 (Homomorphic Encryption)",
    summary: "<b>「密文直接運算，解密後結果完全等同於對明文運算！」</b>",
    confusing: [
      "資料擁有者將資料<b>加密後送給雲端伺服器</b>，伺服器在不知曉明文的前提下直接運行 AI 運算，最後將加密結果傳回",
      "解決雲端委外運算與外洩風險，但<b>運算開銷與記憶體成本極其巨大</b>，目前仍在逐步工程優化落地中"
    ],
    keywords: ["同態加密", "Homomorphic Encryption", "密文運算", "雲端隱私"],
    examRefs: [{ subj: "114_2_3", qId: 28 }, { subj: "115_1_3", qId: 45 }]
  },
  {
    id: "l234_06",
    category: "L234",
    code: "L23402",
    title: "AI 偏見三大成因：來源偏誤 / 內容偏誤 / 製程偏誤",
    summary: "垃圾進，垃圾出 (Garbage in, Garbage out)。模型偏見常源自資料生命週期的各個環節。",
    confusing: [
      "<b>來源偏誤 (Source Bias)</b>：取樣代表性不足，某些族群被嚴重低估或忽略（如人臉辨識只蒐集淺色人種）",
      "<b>內容偏誤 (Content Bias)</b>：歷史資料本身已包含社會歷史歧視與結構性偏見（如歷史薪資、犯罪紀錄）",
      "<b>製程偏誤 (Process Bias)</b>：資料標註人員個人主觀意識、標註規範不明確導致標籤系統性失真"
    ],
    keywords: ["來源偏誤", "內容偏誤", "製程偏誤", "演算法偏見", "公平性", "資料採樣"],
    examRefs: [{ subj: "115_1_3", qId: 48 }]
  },
  {
    id: "l234_07",
    category: "L234",
    code: "L23402",
    title: "演算法公平性三大面向 (Demographic vs Equal Opportunity)",
    summary: "消除性別、種族、年齡等敏感屬性 (Protected Attributes) 的系統性歧視。",
    confusing: [
      "<b>統計人口平等 (Demographic Parity)</b>：無論群體為何，各群體被核准 (Positive) 的比例必須相同（\\(P(\\hat{Y}=1|A=0) = P(\\hat{Y}=1|A=1)\\)）",
      "<b>均等機會 (Equal Opportunity)</b>：在<b>真正合格/有能力者中</b>，各群體被選中的召回率 (TPR) 必須相同（保護優秀弱勢）",
      "公平性指標彼此常存在<b>數學上的內在衝突</b>，無法在所有指標同時達到絕對公平，需依業務法規權衡"
    ],
    keywords: ["演算法公平性", "Demographic Parity", "Equal Opportunity", "差別衝擊", "敏感特徵"],
    examRefs: [{ subj: "115_1_3", qId: 48 }]
  },
  {
    id: "l234_08",
    category: "L234",
    code: "L23402",
    title: "可解釋性 AI (XAI) 兩大神器：SHAP vs LIME",
    summary: "打破黑盒子模型 (Black-box)，為高風險領域 (醫療、信貸) 提供合規決策依據。",
    confusing: [
      "<b>SHAP (Shapley Additive exPlanations)</b>：源自合作賽局理論的 Shapley 值，計算每個特徵對預測貢獻的邊際分配。<b>具有堅實數學公理基礎 (唯一保證局部準確性與一致性)</b>，運算較耗時",
      "<b>LIME (Local Interpretable Model-agnostic Explanations)</b>：在待解釋樣本周圍進行隨機擾動取樣，並用<b>局部簡單線性模型</b>去近似黑盒子在該點的決策邊界，速度快但局部穩定性略遜"
    ],
    visualHtml: `
      <div style="display:flex; justify-content:space-between; gap:0.5rem; text-align:center; font-size:0.8rem;">
        <div style="flex:1; background:#eff6ff; padding:6px; border-radius:4px; border:1px solid #bfdbfe;">
          <div style="font-weight:700; color:#1d4ed8;">SHAP (Shapley 值)</div>
          <div style="color:#2563eb;">嚴謹博弈論公理分配、全域/局部皆宜</div>
        </div>
        <div style="flex:1; background:#f5f3ff; padding:6px; border-radius:4px; border:1px solid #ddd6fe;">
          <div style="font-weight:700; color:#6d28d9;">LIME (局部代理)</div>
          <div style="color:#7c3aed;">擾動採樣擬合局部線性、直觀快速</div>
        </div>
      </div>
    `,
    keywords: ["可解釋性 AI", "XAI", "SHAP", "LIME", "Shapley 值", "黑盒子模型"],
    examRefs: [{ subj: "115_1_3", qId: 40 }]
  },
  {
    "id": "l231_13",
    "category": "L231",
    "code": "L23101",
    "title": "最大似然估計 (MLE) vs 最大後驗估計 (MAP)",
    "summary": "<b>MLE</b> 尋找讓現有觀測樣本發生機率最大化的參數 \\(\\hat{\\theta}_{MLE} = \\arg\\max P(X|\\theta)\\)；<b>MAP</b> 引入貝氏先驗機率 \\(P(\\theta)\\)，\\(\\hat{\\theta}_{MAP} = \\arg\\max P(X|\\theta)P(\\theta)\\)。",
    "confusing": [
      "MLE <b>不考慮先驗知識</b>，當樣本過小時容易發生過擬合（例如擲硬幣 3 次皆正面就判定機率為 1）",
      "MAP 等價於 <b>MLE 加上正則化項</b>：高斯先驗等價於 L2 正則化（Ridge），拉普拉斯先驗等價於 L1 正則化（Lasso）",
      "當樣本量趨近無窮大時，MAP 估計值會收斂至 MLE 估計值（先驗的影響被龐大數據淡化）"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🎯 參數估計雙子星對照</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px;\">\n            <b>MLE (頻率學派)</b><br>\n            \\(\\arg\\max \\log P(X|\\theta)\\)<br>\n            無先驗假設・易過擬合\n          </div>\n          <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px;\">\n            <b>MAP (貝氏學派)</b><br>\n            \\(\\arg\\max [\\log P(X|\\theta) + \\log P(\\theta)]\\)<br>\n            引入先驗 = 自帶正則化\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "最大似然估計",
      "MLE",
      "最大後驗估計",
      "MAP",
      "先驗機率",
      "正規化等價",
      "高斯先驗",
      "拉普拉斯先驗"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 5
      },
      {
        "subj": "115_1_3",
        "qId": 4
      }
    ]
  },
  {
    "id": "l231_14",
    "category": "L231",
    "code": "L23101",
    "title": "資訊熵 (Entropy)、交叉熵 (Cross-Entropy) 與 KL 散度",
    "summary": "<b>資訊熵</b>衡量單一分佈不確定性；<b>交叉熵</b> \\(H(p, q) = H(p) + D_{KL}(p || q)\\) 衡量模型分佈 \\(q\\) 逼近真實分佈 \\(p\\) 的損失；<b>KL 散度</b>衡量兩分佈的距離差異。",
    "confusing": [
      "資訊熵公式：\\(H(p) = -\\sum p(x) \\log_2 p(x)\\)，均勻分佈時熵最大（最混亂不確定）",
      "KL 散度具<b>非對稱性</b>：\\(D_{KL}(p || q) \\neq D_{KL}(q || p)\\)，且值恆大於等於 0（吉布斯不等式）",
      "分類問題中真實標籤 \\(p\\) 為常數，因此<b>最小化交叉熵等價於最小化 KL 散度</b>"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📊 資訊論三核心關係鏈</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; font-size:0.8rem; font-weight:600;\">\n          <span style=\"background:rgba(37,99,235,0.1); padding:2px 6px; border-radius:4px; color:#2563eb;\">真實熵 H(p)</span>\n          <span>+</span>\n          <span style=\"background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px; color:#dc2626;\">KL 散度 D_KL(p||q)</span>\n          <span>=</span>\n          <span style=\"background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; color:#059669;\">交叉熵 H(p,q)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "資訊熵",
      "Entropy",
      "交叉熵",
      "Cross-Entropy",
      "相對熵",
      "KL散度",
      "吉布斯不等式",
      "分類損失"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 10
      },
      {
        "subj": "115_2_3",
        "qId": 8
      }
    ]
  },
  {
    "id": "l231_15",
    "category": "L231",
    "code": "L23102",
    "title": "向量內積 (Dot Product) 與餘弦相似度 (Cosine Similarity)",
    "summary": "<b>內積</b> \\(\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta\\) 同時受長度與角度影響；<b>餘弦相似度</b>消除長度影響，僅關注向量方向夾角，值介於 \\([-1, 1]\\)。",
    "confusing": [
      "當向量經過 L2 歸一化（單位向量 \\(\\|\\mathbf{u}\\|=1\\)）後，<b>向量內積等價於餘弦相似度</b>",
      "歐氏距離受特徵<b>絕對尺度</b>主導（長度長距離大）；餘弦相似度對長度不敏感（廣泛用於 NLP 文本長度不一的情境）",
      "餘弦相似度為 1 代表方向完全一致；0 代表兩向量互相垂直（完全正交、無相關）；-1 代表完全相反"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📐 向量相似度判定決策</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; color:#059669;\">夾角 0°: cos=1 (同向)</span>\n          <span style=\"background:rgba(245,158,11,0.1); padding:2px 6px; border-radius:4px; color:#d97706;\">夾角 90°: cos=0 (正交)</span>\n          <span style=\"background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px; color:#dc2626;\">夾角 180°: cos=-1 (反向)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "向量內積",
      "餘弦相似度",
      "Cosine Similarity",
      "歐氏距離",
      "正交向量",
      "單位向量",
      "嵌入向量檢索"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 11
      },
      {
        "subj": "115_1_3",
        "qId": 6
      }
    ]
  },
  {
    "id": "l231_16",
    "category": "L231",
    "code": "L23102",
    "title": "線性判別分析 (LDA) 投影矩陣與費雪準則 (Fisher Criterion)",
    "summary": "<b>LDA</b> 為監督式降維技術，尋找最佳投影方向，達到<b>「最大化類間散布矩陣 \\(S_B\\)，同時最小化類內散布矩陣 \\(S_W\\)」</b>，最佳化目標為費雪準則 \\(J(w) = \\frac{w^T S_B w}{w^T S_W w}\\)。",
    "confusing": [
      "<b>PCA 是非監督式</b>（尋找方差最大主軸，不看標籤）；<b>LDA 是監督式</b>（尋找類別區分度最大的軸，需標籤）",
      "LDA 降維後的目標維度上限受限於類別數 \\(C\\)，<b>最多只能保留 \\(C - 1\\) 個維度</b>（二分類只能降至 1 維）",
      "LDA 假設各類別資料服從常態分佈，且各類別具有相同的協方差矩陣"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚖️ PCA (非監督) vs LDA (監督) 降維</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px;\">\n            <b>PCA</b>：最大化總體變異數<br>無標籤・保留最多原始資訊\n          </div>\n          <div style=\"background:rgba(168,85,247,0.08); border:1px solid rgba(168,85,247,0.3); border-radius:6px; padding:4px;\">\n            <b>LDA</b>：類間最大化 / 類內最小化<br>有標籤・最大化類別可分性\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "線性判別分析",
      "LDA",
      "費雪準則",
      "類間散布",
      "類內散布",
      "監督式降維",
      "PCA對比"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 12
      },
      {
        "subj": "115_2_3",
        "qId": 10
      }
    ]
  },
  {
    "id": "l231_17",
    "category": "L231",
    "code": "L23103",
    "title": "二階最佳化：牛頓法 (Newton's Method) 與 Hessian 矩陣",
    "summary": "一階最佳化（梯度下降）利用斜率資訊；<b>二階最佳化（牛頓法）</b>利用 <b>Hessian 矩陣 \\(\\mathbf{H}\\)</b>（二階偏導矩陣）的局部曲率進行更新：\\(\\theta_{t+1} = \\theta_t - \\mathbf{H}^{-1} \\nabla f(\\theta_t)\\)。",
    "confusing": [
      "若 Hessian 矩陣為<b>正定 (Positive Definite)</b>，該駐點為局部極小值；若負定為局部極大值；若<b>不定 (Indefinite) 則為鞍點 (Saddle Point)</b>",
      "牛頓法具有<b>二次收斂速度</b>（極快），但每步需計算並求逆 \\(d \\times d\\) 的 Hessian 矩陣，計算複雜度達 \\(O(d^3)\\)",
      "在高維深度學習中，參數量動輒數千萬，因此標準牛頓法不切實際，常用一階自適應法（Adam）或擬牛頓法（L-BFGS）替代"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚡ 一階梯度 vs 二階牛頓法更新比較</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(37,99,235,0.1); padding:2px 8px; border-radius:4px; color:#2563eb;\">一階：θ ← θ - α·g (線性逼近)</span>\n          <span style=\"background:rgba(16,185,129,0.1); padding:2px 8px; border-radius:4px; color:#059669;\">二階：θ ← θ - H⁻¹·g (二次拋物逼近)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "二階優化",
      "牛頓法",
      "Hessian矩陣",
      "曲率",
      "正定矩陣",
      "鞍點判定",
      "二次收斂"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 13
      },
      {
        "subj": "115_1_3",
        "qId": 7
      }
    ]
  },
  {
    "id": "l231_18",
    "category": "L231",
    "code": "L23103",
    "title": "學習率調度策略 (Learning Rate Scheduling: Warmup, Cosine)",
    "summary": "固定學習率難以兼顧前期快速收斂與後期精確逼近。現代深度學習主流調度為 <b>Warmup（線性預熱）+ Cosine Annealing（餘弦退火）</b>衰減策略。",
    "confusing": [
      "<b>Warmup 預熱機制</b>：訓練初期模型權重隨機混亂，先以極小學習率線性漸增至基準值，可<b>防止初期大梯度破壞預訓練權重或發生數值震盪</b>",
      "<b>餘弦退火 (Cosine Decay)</b>：學習率隨餘弦曲線平滑緩慢下降，有助於模型跳出尖銳極小值（Sharp Minima），收斂至平坦極小值（Flat Minima），增強泛化性",
      "常見調度法：階梯式衰減 (Step Decay)、指數衰減 (Exponential Decay)、高原自適應 (ReduceLROnPlateau)"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📈 Warmup + Cosine 學習率軌跡</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:6px; font-size:0.78rem;\">\n          <span style=\"background:rgba(245,158,11,0.1); color:#d97706; padding:2px 6px; border-radius:4px;\">階段 1: 0 ↗ 預熱峰值</span>\n          <span>➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">階段 2: 餘弦曲線平滑 ↘ 最小值</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "學習率調度",
      "LR Scheduler",
      "Warmup",
      "線性預熱",
      "餘弦退火",
      "Cosine Annealing",
      "平坦極小值"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 11
      }
    ]
  },
  {
    "id": "l231_19",
    "category": "L231",
    "code": "L23101",
    "title": "離散機率分佈三劍客：白努力 vs 二項 vs 卜瓦松分佈",
    "summary": "<b>白努力分佈</b>為單次 0/1 試驗；<b>二項分佈</b>為 \\(n\\) 次獨立白努力試驗之成功次數；<b>卜瓦松分佈</b>為固定時間或空間單位內，稀有事件發生次數的分佈。",
    "confusing": [
      "二項分佈當試驗次數 \\(n \\to \\infty\\) 且成功機率 \\(p \\to 0\\) 時，其極限分佈即為<b>卜瓦松分佈</b>（參數 \\(\\lambda = np\\)）",
      "卜瓦松分佈獨特性質：<b>期望值等於變異數</b>（\\(E(X) = Var(X) = \\lambda\\)）",
      "白努力試驗成功機率 \\(p\\) 的變異數為 \\(p(1-p)\\)，當 \\(p=0.5\\) 時變異數最大"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🎲 離散機率分佈速見表</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>白努力</b><br>單次擲硬幣<br>Var=p(1-p)</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>二項分佈</b><br>n 次硬幣<br>E=np, Var=np(1-p)</div>\n          <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>卜瓦松</b><br>稀有事件次數<br>E=Var=λ</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "白努力分佈",
      "二項分佈",
      "卜瓦松分佈",
      "Poisson",
      "期望值",
      "變異數",
      "稀有事件"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 5
      },
      {
        "subj": "114_2_3",
        "qId": 9
      }
    ]
  },
  {
    "id": "l231_20",
    "category": "L231",
    "code": "L23102",
    "title": "矩陣秩 (Rank)、奇異矩陣與法方程式不可逆解方",
    "summary": "方陣可逆的充要條件是<b>行列式 \\(\\det(A) \\neq 0\\)</b> 且<b>滿秩 (Full Rank)</b>；若矩陣奇異（不可逆），線性迴歸最小平方法解法方程式 \\(\\mathbf{X}^T\\mathbf{X}\\) 將無法直接求逆。",
    "confusing": [
      "若特徵維度 \\(p > n\\)（特徵數大於樣本數）或特徵間存在<b>完全多重共線性</b>，則 \\(\\mathbf{X}^T\\mathbf{X}\\) 必然為奇異矩陣不可逆",
      "<b>解法一：嶺迴歸 (Ridge Regression)</b>，在對角線上加上 \\(\\lambda \\mathbf{I}\\)，保證 \\(\\mathbf{X}^T\\mathbf{X} + \\lambda \\mathbf{I}\\) 嚴格正定且必定可逆",
      "<b>解法二：摩爾-彭若斯廣義逆矩陣 (Moore-Penrose Pseudoinverse, \\(\\mathbf{X}^+\\))</b>，透過 SVD 分解求解最小範數解"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛡️ 不可逆矩陣救援之道</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px; color:#dc2626;\">病態：det(XᵀX) = 0</span>\n          <span>➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; color:#059669;\">解法：(XᵀX + λI) 恆可逆！</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "矩陣秩",
      "Rank",
      "奇異矩陣",
      "行列式",
      "多重共線性",
      "嶺迴歸",
      "偽逆矩陣",
      "SVD"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 9
      }
    ]
  },
  {
    "id": "l232_19",
    "category": "L232",
    "code": "L23201",
    "title": "強化學習 (RL) 五大要素與馬可夫決策過程 (MDP)",
    "summary": "強化學習由 <b>Agent（智慧體）與 Environment（環境）</b>互動構成，依賴 <b>S（狀態）、A（動作）、P（狀態轉移機率）、R（即時獎勵）、\\(\\gamma\\)（折扣因子）</b> 五元組建模。",
    "confusing": [
      "<b>馬可夫性質 (Markov Property)</b> 核心假設：下一個狀態只取決於當前狀態與動作，<b>「未來與過去歷史無關，只與現在有關」</b>",
      "<b>折扣因子 \\(\\gamma \\in [0, 1)\\)</b>：\\(\\gamma \\to 0\\) 代表目光短淺只看當下獎勵；\\(\\gamma \\to 1\\) 代表具有遠見重視長期累積回報",
      "探索與利用難題 (Exploration vs Exploitation)：探索新路徑 vs 專注於目前已知最佳路徑（常用 \\(\\epsilon\\)-greedy 平衡）"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🔄 RL 智慧體與環境互動迴路</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; font-size:0.78rem;\">\n          <span style=\"background:rgba(59,130,246,0.1); padding:2px 6px; border-radius:4px; color:#2563eb;\">智慧體 Agent 執行動作 A</span>\n          <span>➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; color:#059669;\">環境 Environment 回饋狀態 S' + 獎勵 R</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "強化學習",
      "RL",
      "MDP",
      "馬可夫決策過程",
      "折扣因子",
      "探索與利用",
      "Q-Learning",
      "獎勵回饋"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 15
      },
      {
        "subj": "115_1_3",
        "qId": 14
      }
    ]
  },
  {
    "id": "l232_20",
    "category": "L232",
    "code": "L23202",
    "title": "決策樹剪枝策略：預剪枝 (Pre-pruning) vs 後剪枝 (Post-pruning)",
    "summary": "剪枝旨在抑制決策樹過擬合。<b>預剪枝</b>在建樹過程中提早終止分裂；<b>後剪枝</b>先讓決策樹完全自由生長，再自底向上評估並剪去非必要子樹節點。",
    "confusing": [
      "<b>預剪枝法</b>（限制最大深度 max_depth、最小樣本分割 min_samples_split）：計算開銷低，但具有「短視 (Greedy)」缺陷，可能過早終止導致欠擬合",
      "<b>後剪枝法</b>（成本複雜度剪枝 Cost-Complexity Pruning, CCP / 驗證集剪枝）：泛化能力通常優於預剪枝，但需耗費算力建完整大樹",
      "決策樹天生對<b>微小資料擾動極度敏感</b>（高變異數 High Variance），隨機森林透過 Bagging 集成徹底消除此脆弱性"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🌲 決策樹剪枝流派對比</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px;\">\n            <b>預剪枝</b>：邊長邊剪<br>速度快・易短視而欠擬合\n          </div>\n          <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px;\">\n            <b>後剪枝</b>：長完自底向上剪<br>效果佳・計算成本較高\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "決策樹",
      "剪枝",
      "預剪枝",
      "後剪枝",
      "成本複雜度剪枝",
      "CCP",
      "過擬合防禦",
      "CART"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 17
      },
      {
        "subj": "115_2_3",
        "qId": 15
      }
    ]
  },
  {
    "id": "l232_21",
    "category": "L232",
    "code": "L23202",
    "title": "SVM 軟間隔懲罰 C 與 RBF 核函數 Gamma 參數調校",
    "summary": "SVM 軟間隔透過<b>懲罰係數 \\(C\\)</b> 與鬆弛變數 \\(\\xi_i\\) 容許少數點跨越邊界；非線性 RBF 高斯核由 <b>\\(\\gamma\\) (Gamma)</b> 掌控樣本在特徵空間的映射寬度。",
    "confusing": [
      "<b>\\(C\\) 很大</b>：強烈懲罰誤分類點，邊界極窄，強行分對所有點 \\(\\to\\) <b>容易過擬合 (High Variance)</b>",
      "<b>\\(C\\) 很小</b>：高度容忍誤分類，邊界極寬，忽略細節 \\(\\to\\) <b>容易欠擬合 (High Bias)</b>",
      "<b>Gamma 很大</b>：高斯曲面鐘形極窄陡峭，只影響近鄰點 \\(\\to\\) <b>容易過擬合</b>；Gamma 很小則邊界過於平滑欠擬合"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🎯 SVM 超參數過擬合天平</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px; color:#dc2626;\">C 大 + γ 大 ➔ 過擬合 (Overfitting)</span>\n          <span style=\"background:rgba(59,130,246,0.1); padding:2px 6px; border-radius:4px; color:#2563eb;\">C 小 + γ 小 ➔ 欠擬合 (Underfitting)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "SVM",
      "軟間隔",
      "懲罰參數C",
      "核技巧",
      "RBF核",
      "Gamma參數",
      "過擬合調校"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 18
      },
      {
        "subj": "115_1_3",
        "qId": 16
      }
    ]
  },
  {
    "id": "l232_22",
    "category": "L232",
    "code": "L23202",
    "title": "集成學習堆疊法 (Stacking & Blending) 與防止外洩",
    "summary": "<b>Stacking</b> 組合多個異質基學習器（Level 0），以基學習器的預測結果作為元特徵（Meta-features），訓練次級元學習器（Level 1 Meta-learner 如 Logistic 迴歸）。",
    "confusing": [
      "<b>防止標籤外洩 (Data Leakage) 鐵律</b>：訓練 Level 0 模型時，必須使用 <b>Out-of-Fold (OOF) 交叉驗證預測</b> 來組裝 Meta-features，絕不能用基模型在全訓練集上的過擬合預測！",
      "<b>Stacking vs Blending</b>：Stacking 嚴格利用 K-Fold OOF 產出特徵；Blending 則簡單切分固定的 Hold-out 驗證集作為元特徵，運算快但浪費驗證資料",
      "基學習器應盡量<b>具備異質性 (Diversity)</b>（如結合樹模型 XGBoost、神經網路 MLP、KNN），互補誤差效果最佳"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🏗️ Stacking 兩層次級架構</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:6px; font-size:0.78rem;\">\n          <span style=\"background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">Level 0: 多個異質模型 (OOF 預測)</span>\n          <span>➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">Level 1: Meta-Model 最終決策</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "Stacking",
      "堆疊法",
      "Blending",
      "元學習器",
      "Meta-learner",
      "OOF",
      "標籤外洩防範",
      "異質集成"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 17
      }
    ]
  },
  {
    "id": "l232_23",
    "category": "L232",
    "code": "L23202",
    "title": "LightGBM 革命性加速：GOSS 採樣與 EFB 互斥特徵綁定",
    "summary": "<b>LightGBM</b> 採用基於直方圖 (Histogram) 分箱生長，並發明 <b>GOSS（單邊梯度採樣）</b> 與 <b>EFB（互斥特徵捆綁）</b> 兩大黑科技，在百萬級數據訓練速度上徹底超越傳統 XGBoost。",
    "confusing": [
      "<b>GOSS (Gradient-based One-Side Sampling)</b>：大梯度樣本對資訊增益貢獻大全部保留；小梯度樣本誤差小，採樣隨機保留部分並賦予加權補償，大幅加速收斂",
      "<b>EFB (Exclusive Feature Bundling)</b>：針對高維稀疏特徵（許多特徵幾乎不會同時非零），捆綁為單一特徵，大幅降低特徵維度",
      "<b>生長策略差異</b>：XGBoost 預設為按層生長 (Level-wise)；LightGBM 預設為按葉子生長 (Leaf-wise)，分裂分裂收益最大的葉節點，精度更高但需限制 max_depth 避開過擬合"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🚀 LightGBM 兩大革命加速機制</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:4px; border-radius:4px;\">\n            <b>GOSS (樣本維度)</b><br>保留大梯度 + 採樣小梯度\n          </div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:4px; border-radius:4px;\">\n            <b>EFB (特徵維度)</b><br>互斥稀疏特徵綁定降維\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "LightGBM",
      "GOSS",
      "EFB",
      "直方圖算法",
      "Leaf-wise",
      "梯度採樣",
      "特徵綁定"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 19
      },
      {
        "subj": "115_1_3",
        "qId": 18
      }
    ]
  },
  {
    "id": "l232_24",
    "category": "L232",
    "code": "L23203",
    "title": "前向傳播 (Forward) 與反向傳播 (Backprop) 鏈式法則",
    "summary": "神經網路訓練循環：<b>前向傳播</b>自輸入層逐層計算激活輸出並產出總損失 \\(L\\)；<b>反向傳播 (BP)</b> 依賴微積分<b>鏈式法則 (Chain Rule)</b>，自輸出層反向計算損失對各權重的偏導 \\(\\frac{\\partial L}{\\partial W}\\)。",
    "confusing": [
      "反向傳播本質是<b>動態規劃 (Dynamic Programming)</b> 在計算圖 (Computational Graph) 上的應用，避免重複計算中間導數",
      "若激活函數在正或負區域導數趨近於 0（如 Sigmoid 在飽和區導數最大僅 0.25），鏈式相乘多層後導數呈指數衰減，引發<b>梯度消失 (Vanishing Gradient)</b>",
      "現代深度學習框架（PyTorch / TensorFlow）皆由<b>自動微分引擎 (Autograd)</b> 追蹤 Tensor 運算歷史建構計算圖"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⛓️ 反向傳播鏈式法則傳導鏈</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:6px; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(37,99,235,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">前向：X ➔ Z ➔ a ➔ Loss</span>\n          <span>|</span>\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">反向：∂L/∂W = (∂L/∂a)·(∂a/∂Z)·(∂Z/∂W)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "反向傳播",
      "Backpropagation",
      "鏈式法則",
      "Chain Rule",
      "計算圖",
      "自動微分",
      "梯度消失原因"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 20
      },
      {
        "subj": "115_2_3",
        "qId": 18
      }
    ]
  },
  {
    "id": "l232_25",
    "category": "L232",
    "code": "L23203",
    "title": "現代深度學習激活函數：GELU vs Swish vs Leaky ReLU",
    "summary": "為克服傳統 ReLU 帶來的<b>神經元死亡問題 (Dying ReLU)</b>，現代大語言模型與視覺 Transformer 廣泛採用更平滑的非線性激活函數 <b>GELU（高斯誤差線性單元）</b> 或 <b>Swish/SiLU</b>。",
    "confusing": [
      "<b>Leaky ReLU</b>：在負半軸設定微小固定斜率 \\(f(x) = \\max(\\alpha x, x)\\)（\\(\\alpha=0.01\\)），確保負值區域仍有微弱梯度流動",
      "<b>GELU (Gaussian Error Linear Unit)</b>：結合了隨機正則化思想，以高斯累積分佈加權輸入，函數處處平滑連續，被 <b>BERT, GPT-2/3, ViT</b> 欽定為預設激活函數",
      "<b>Swish / SiLU (\\(x \\cdot \\sigma(\\beta x)\\))</b>：具備無上界、有下界、平滑、非單調性特點，在深層網路中表現常超越 ReLU"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚡ 激活函數演進光譜</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">ReLU: 負半軸死區</span>\n          <span style=\"background:rgba(245,158,11,0.1); color:#d97706; padding:2px 6px; border-radius:4px;\">Leaky ReLU: 漏電微斜率</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">GELU/Swish: 平滑機率加權</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "激活函數",
      "GELU",
      "Swish",
      "SiLU",
      "Leaky ReLU",
      "Dying ReLU",
      "LLM激活函數",
      "BERT"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 19
      },
      {
        "subj": "114_2_3",
        "qId": 21
      }
    ]
  },
  {
    "id": "l232_26",
    "category": "L232",
    "code": "L23203",
    "title": "CNN 卷積輸出維度計算公式 (Stride, Padding, Kernel)",
    "summary": "卷積層與池化層輸出特徵圖 (Feature Map) 空間維度大小計算黃金公式：\\(O = \\left\\lfloor\\frac{W - K + 2P}{S}\\right\\rfloor + 1\\)（\\(W\\) 輸入邊長、\\(K\\) 卷積核尺寸、\\(P\\) 填充邊數、\\(S\\) 步幅）。",
    "confusing": [
      "<b>Padding='same'（相同填充）</b>：自動填補 0 使得當步幅 \\(S=1\\) 時，輸出空間尺寸與輸入完全一致（\\(P = \\frac{K-1}{2}\\)）",
      "<b>Padding='valid'（無填充）</b>：\\(P=0\\)，輸出尺寸隨卷積逐層縮減",
      "<b>感受野 (Receptive Field)</b>：高層特徵圖的一個像素對應原始輸入影像的區域大小；堆疊兩個 \\(3 \\times 3\\) 卷積核的感受野等同於一個 \\(5 \\times 5\\) 卷積核，但參數量減少且具備更多非線性"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📐 卷積尺寸運算公式速記</div>\n        <div style=\"background:rgba(37,99,235,0.08); border:1px solid rgba(37,99,235,0.3); border-radius:6px; padding:4px; font-size:0.8rem; font-weight:700; color:var(--primary);\">\n          \\(O = \\lfloor(W - K + 2P)/S\\rfloor + 1\\)\n        </div>\n      </div>\n    ",
    "keywords": [
      "CNN",
      "卷積神經網絡",
      "卷積尺寸計算",
      "Stride",
      "Padding",
      "Kernel Size",
      "感受野",
      "Receptive Field"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 22
      },
      {
        "subj": "115_2_3",
        "qId": 20
      }
    ]
  },
  {
    "id": "l232_27",
    "category": "L232",
    "code": "L23203",
    "title": "殘差網路 (ResNet) 跳躍連接 (Skip Connection) 原理",
    "summary": "當神經網路層數過深時會發生<b>網路退化問題 (Degradation)</b>（準確率飽和後反而下降）。ResNet 引入<b>跳躍連接（殘差結構）</b>，讓網路學習擬合殘差映射 \\(\\mathcal{F}(x) = \\mathcal{H}(x) - x\\)。",
    "confusing": [
      "若某層沒有額外有益資訊，殘差塊只需將權重優化為 0，模組便退化為<b>恆等映射 (Identity Mapping) \\(\\mathcal{H}(x) = x\\)</b>，保證深層網路表現不劣於淺層網路",
      "<b>梯度高速公路</b>：反向傳播時，跳躍連接使梯度包含常數項 1（\\(\\frac{\\partial \\mathcal{H}}{\\partial x} = \\frac{\\partial \\mathcal{F}}{\\partial x} + 1\\)），使梯度能無衰減直接回傳至前層，徹底破解梯度消失",
      "ResNet 突破百層深度限制（ResNet-50 / 101 / 152），殘差結構亦成為 Transformer 等當代所有架構的基本構件"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛣️ ResNet 殘差跳躍連接</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; font-size:0.78rem;\">\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">主路徑 F(x) 殘差轉換</span>\n          <span>+</span>\n          <span style=\"background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">捷徑 Shortcut: x 直通</span>\n          <span>➔</span>\n          <b>H(x) = F(x) + x</b>\n        </div>\n      </div>\n    ",
    "keywords": [
      "ResNet",
      "殘差網路",
      "跳躍連接",
      "Skip Connection",
      "恆等映射",
      "網路退化",
      "梯度高速公路"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 21
      },
      {
        "subj": "114_2_3",
        "qId": 23
      }
    ]
  },
  {
    "id": "l232_28",
    "category": "L232",
    "code": "L23203",
    "title": "Transformer 架構三大流派：Encoder vs Decoder vs Seq2Seq",
    "summary": "Transformer 依注意力遮罩 (Attention Masking) 與連接方式衍生三大流派：<b>Encoder-Only</b>（如 BERT）、<b>Decoder-Only</b>（如 GPT 系列）、<b>Encoder-Decoder</b>（如 T5/BART）。",
    "confusing": [
      "<b>Encoder-Only (雙向注意力)</b>：每個 Token 可同時看見前後所有內容，最適合理解型任務（如文本分類、NER、情緒分析、語意檢索）",
      "<b>Decoder-Only (因果遮罩 Causal Mask)</b>：嚴格限制只能看見左側已生成的 Token（自回歸 Autoregressive），適合長文本生成、推理與聊天對話",
      "<b>Encoder-Decoder (序列到序列 Seq2Seq)</b>：Encoder 理解來源序列，Decoder 自回歸產出目標序列，專門用於機器翻譯、文本摘要與語音識別"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🏛️ Transformer 三大流派格局</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>BERT (Encoder)</b><br>雙向關注<br>分類 / 語義抽取</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>GPT (Decoder)</b><br>單向因果遮罩<br>對話 / 程式生成</div>\n          <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>T5 (Seq2Seq)</b><br>跨注意力機制<br>翻譯 / 摘要轉換</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "Transformer",
      "Encoder-Only",
      "Decoder-Only",
      "Seq2Seq",
      "BERT",
      "GPT",
      "自回歸",
      "因果遮罩"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 24
      },
      {
        "subj": "115_2_3",
        "qId": 21
      }
    ]
  },
  {
    "id": "l233_15",
    "category": "L233",
    "code": "L23301",
    "title": "特徵變換：對數轉換 (Log Transform) 與 Box-Cox 變換",
    "summary": "當數值特徵呈現嚴重<b>右偏長尾分佈 (Positive Skewness)</b>（如收入、點擊數、房價）時，透過<b>對數轉換 \\(\\log(1 + x)\\)</b> 或 <b>Box-Cox 冪次變換</b>能將其校正逼近常態分佈。",
    "confusing": [
      "對數轉換僅適用於<b>正數</b>資料，若資料包含 0 必須使用 <b>\\(\\log(1 + x)\\)（即 `np.log1p`）</b> 防止 \\(\\log(0) = -\\infty\\)",
      "許多線性模型（線性迴歸、邏輯迴歸）高度依賴常態分佈與同質變異數假設，對數轉換能顯著降低極值拉偏迴歸線的現象",
      "對基於樹的演算法（決策樹、XGBoost）而言，單調變換對節點分裂點影響不大，對數轉換效果有限"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📉 偏態修正：右偏長尾 ➔ 常態分佈</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; font-size:0.78rem;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">右偏長尾 (少數極大值)</span>\n          <span>➔ 取 log(1+x) ➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">對稱鐘形分佈 (符合模型假設)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "對數轉換",
      "Log Transform",
      "Box-Cox",
      "偏態修正",
      "右偏分佈",
      "長尾分佈",
      "np.log1p"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 27
      },
      {
        "subj": "115_1_3",
        "qId": 24
      }
    ]
  },
  {
    "id": "l233_16",
    "category": "L233",
    "code": "L23301",
    "title": "高基數類別特徵編碼：目標編碼 (Target Encoding) 與外洩防禦",
    "summary": "當類別特徵擁有大量不同值（高基數 High-Cardinality，如數千個城市、郵遞區號）時，One-Hot 編碼會引發維度災難，此時使用<b>目標編碼（用該類別對應目標變數 \\(y\\) 的平均值替換）</b>最為高效。",
    "confusing": [
      "目標編碼極度容易造成<b>標籤洩漏 (Data Leakage) 與過擬合</b>（尤其在樣本數極少的稀有類別上）",
      "<b>防禦鐵律一：引入平滑係數 (Smoothing / Shrinkage)</b>，將小樣本類別的均值向全域均值 (Global Mean) 拉攏",
      "<b>防禦鐵律二：Out-of-Fold (OOF) 交叉驗證編碼</b>，只用其餘摺數的標籤計算該摺的編碼值，絕不能在包含自身的樣本上計算均值"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛡️ 目標編碼平滑防外洩公式</div>\n        <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.78rem;\">\n          \\(S_i = \\lambda \\cdot \\text{CategoryMean} + (1 - \\lambda) \\cdot \\text{GlobalMean}\\)\n        </div>\n      </div>\n    ",
    "keywords": [
      "目標編碼",
      "Target Encoding",
      "Mean Encoding",
      "高基數特徵",
      "平滑係數",
      "標籤外洩防禦",
      "OOF編碼"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 25
      }
    ]
  },
  {
    "id": "l233_17",
    "category": "L233",
    "code": "L23301",
    "title": "高階異常值檢測：孤立森林 (Isolation Forest) vs LOF",
    "summary": "<b>孤立森林 (iForest)</b> 利用隨機切分超平面隔離樣本，異常點因稀疏孤立而<b>路徑長度 (Path Length) 顯著短於正常點</b>；<b>LOF（局部異常因子）</b> 則透過近鄰局部密度比較偵測離群點。",
    "confusing": [
      "孤立森林計算複雜度僅為 \\(O(n \\log n)\\)，<b>速度極快且適合高維巨量資料</b>；LOF 計算近鄰距離複雜度高達 \\(O(n^2)\\)",
      "LOF 的優勢在於能偵測<b>不同密度叢集 (Clusters) 邊緣的局部異常</b>，而全局統計法（3-Sigma 或 IQR）無法處理多密度群聚",
      "異常值不應無腦刪除！必須先探究其產生原因（測量錯誤、感測器損壞 vs 真實罕見詐欺事件）"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🌲 孤立森林路徑長度判別</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">異常點：孤立稀疏 ➔ 刀數少、路徑極短</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">正常點：密集深入 ➔ 刀數多、路徑深長</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "異常值檢測",
      "孤立森林",
      "Isolation Forest",
      "LOF",
      "局部異常因子",
      "路徑長度",
      "非監督檢測"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 28
      },
      {
        "subj": "115_1_3",
        "qId": 26
      }
    ]
  },
  {
    "id": "l233_18",
    "category": "L233",
    "code": "L23303",
    "title": "類別不平衡終極解法：SMOTE vs 類別權重 (Class Weight)",
    "summary": "面對詐欺偵測或罕見疾病等極度不平衡資料（正例 < 1%），傳統模型會全猜多數類。處方包含：<b>SMOTE 插值過採樣</b>、<b>損失函數加權 (Class Weight)</b> 與 <b>Focal Loss</b>。",
    "confusing": [
      "<b>SMOTE 切忌在資料分割前執行！</b> 嚴格鐵律：必須先切分 Train/Test，<b>僅對 Training Set 做 SMOTE</b>，否則測試集資訊滲漏至訓練集導致驗證指標虛高",
      "<b>Class Weight（如 `class_weight='balanced'`）</b>：完全不改變原始資料分佈，僅在計算損失時按反比懲罰少數類誤判，最乾淨高效",
      "<b>Focal Loss (RetinaNet)</b>：在交叉熵前加上調節權重 \\((1 - p_t)^\\gamma\\)，自動降低容易分類的大量負樣本對梯度的貢獻"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚖️ 不平衡資料對策三板斧</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>SMOTE</b><br>特徵近鄰連線插值<br>僅限訓練集</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>Class Weight</b><br>損失函數加權懲罰<br>免改資料最乾淨</div>\n          <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>Focal Loss</b><br>動態抑制簡單樣本<br>專攻高難度目標</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "類別不平衡",
      "SMOTE",
      "過採樣",
      "Class Weight",
      "Focal Loss",
      "資料滲漏防範",
      "少數類樣本"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 29
      },
      {
        "subj": "115_2_3",
        "qId": 26
      }
    ]
  },
  {
    "id": "l233_19",
    "category": "L233",
    "code": "L23303",
    "title": "多類別分類評估指標：Macro-F1 vs Micro-F1 vs Weighted-F1",
    "summary": "多類別問題中 F1 匯總方式決定評估視角：<b>Macro-F1</b>（各類別指標直接算術平均，平等對待所有類別）；<b>Micro-F1</b>（全球合併計算 TP/FP/FN，等價於 Overall Accuracy）；<b>Weighted-F1</b>（依類別樣本比例加權）。",
    "confusing": [
      "若資料類別極度不平衡，<b>Macro-F1 對少數類別的預測失敗極度敏感</b>（少數類考 0 分會直接將 Macro-F1 大幅拉低）",
      "在 Micro-F1 中，因為所有類別共享預測空間，總體 \\(TP + FP = TP + FN = \\text{總樣本數}\\)，因此 <b>Micro-Precision = Micro-Recall = Micro-F1 = Accuracy</b>",
      "商業決策法則：若每個類別重要性同等（如醫療多疾病診斷），選 Macro-F1；若只在乎總體命中率，看 Micro-F1"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📊 多類別 F1-Score 決策維度</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">Macro: 權重平等・凸顯少數類</span>\n          <span style=\"background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">Micro: 全局匯總・受多數類主導</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "多類別評估",
      "Macro-F1",
      "Micro-F1",
      "Weighted-F1",
      "混淆矩陣",
      "類別平衡評估"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 28
      },
      {
        "subj": "114_2_3",
        "qId": 30
      }
    ]
  },
  {
    "id": "l233_20",
    "category": "L233",
    "code": "L23303",
    "title": "評估指標盲區：ROC-AUC vs PR-AUC 在極端不平衡情境的對決",
    "summary": "<b>ROC-AUC</b>（以 FPR 為橫軸、TPR 為縱軸）受真負例 \\(TN\\) 巨大膨脹影響；<b>PR-AUC（精確率-召回率曲線下面積）</b> 不計入 \\(TN\\)，在<b>極端少數類（正例極少）</b>情境下能真實反映模型優劣。",
    "confusing": [
      "當負樣本數佔 99.9% 時，\\(FP\\) 即使增加很多，\\(FPR = \\frac{FP}{FP + TN}\\) 的分母依然極大，導致 FPR 幾乎不變，<b>ROC 曲線顯得過度樂觀虛高（看似達 0.98）</b>",
      "<b>PR 曲線 (Precision-Recall)</b> 的 Precision \\(\\frac{TP}{TP + FP}\\) 直接將 \\(FP\\) 放在分母，虛警增加會導致精確率崩跌，精確暴露模型缺陷",
      "隨機猜測的基準線 (Baseline)：ROC-AUC 的隨機基準線恆為 <b>0.5</b>；而 PR-AUC 的隨機基準線為<b>正樣本比例 \\(P/(P+N)\\)</b>（若正例僅 1%，隨機基準為 0.01）"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚖️ ROC 曲線 vs PR 曲線適用情境</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:4px; border-radius:4px;\">\n            <b>ROC-AUC</b><br>類別相對均衡時<br>基準線恆為 0.5\n          </div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:4px; border-radius:4px;\">\n            <b>PR-AUC</b><br>正例極稀少 (詐欺/罕見病)<br>基準線為正例佔比\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "ROC-AUC",
      "PR-AUC",
      "Precision-Recall曲線",
      "極端不平衡",
      "真負例膨脹",
      "隨機基準線"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 31
      },
      {
        "subj": "115_2_3",
        "qId": 28
      }
    ]
  },
  {
    "id": "l233_21",
    "category": "L233",
    "code": "L23303",
    "title": "時間序列驗證鐵律：TimeSeriesSplit (滾動時間切分)",
    "summary": "時間序列預測具有時間相依性與趨勢。<b>嚴禁使用一般隨機 K-Fold 交叉驗證</b>（會用未來的數據預測過去，造成嚴重的時序外洩 Look-ahead Leakage），必須採用 <b>TimeSeriesSplit（前向滾動鏈切分 Forward Chaining）</b>。",
    "confusing": [
      "隨機切分打亂時間順序，使驗證集分數虛高，但實際上線時因無法預知未來資料而徹底失效",
      "TimeSeriesSplit 原則：<b>訓練集時間點永遠嚴格早於驗證集時間點</b>（第 \\(k\\) 摺只拿前 \\(k\\) 個時間區間當訓練集，第 \\(k+1\\) 區間當測試集）",
      "若資料存在季節週期性，切分時需預留合適的緩衝期間 (Gap / Purging) 以防相鄰時間點的資訊滲透"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⏳ TimeSeriesSplit 前向驗證滾動軌跡</div>\n        <div style=\"display:flex; flex-direction:column; gap:2px; font-size:0.75rem; text-align:left;\">\n          <div>摺 1: [ 訓練 T1 ] ➔ 驗證 T2</div>\n          <div>摺 2: [ 訓練 T1 ~ T2 ] ➔ 驗證 T3</div>\n          <div>摺 3: [ 訓練 T1 ~ T3 ] ➔ 驗證 T4 (永不穿越未來)</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "時間序列驗證",
      "TimeSeriesSplit",
      "時序洩漏",
      "Look-ahead Leakage",
      "滾動驗證",
      "交叉驗證禁忌"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 30
      }
    ]
  },
  {
    "id": "l233_22",
    "category": "L233",
    "code": "L23304",
    "title": "貝氏最佳化 (Bayesian Optimization) 與採樣函數 (Acquisition Function)",
    "summary": "針對評估成本極其高昂的模型超參數搜尋。利用<b>高斯過程 (Gaussian Process)</b> 作為代理模型 (Surrogate Model) 擬合目標函數，並透過<b>採樣函數（如 EI 期望改善值、UCB）</b> 在「探索未採樣區」與「利用已知優點」間取得最佳平衡。",
    "confusing": [
      "網格搜尋 (Grid Search) 是<b>盲目窮舉</b>（維度災難）；隨機搜尋 (Random Search) 不受維度詛咒但<b>缺乏記憶歷史</b>；貝氏優化則<b>根據歷史評估回饋智慧推論下一點</b>",
      "<b>探索 (Exploration)</b>：挑選模型預測不確定性（變異數）最大的區域進行採樣，避免陷入局部最佳解",
      "<b>利用 (Exploitation)</b>：挑選目前代理模型預測表現最好的區域附近進行精細採樣",
      "常見工具庫：Optuna, Hyperopt, Scikit-Optimize"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🧠 超參數搜尋三境界</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(239,68,68,0.08); padding:3px; border-radius:4px;\"><b>網格搜尋</b><br>盲目硬幹<br>維度災難開銷巨</div>\n          <div style=\"background:rgba(245,158,11,0.08); padding:3px; border-radius:4px;\"><b>隨機搜尋</b><br>隨機抽樣<br>無歷史記憶</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>貝氏最佳化</b><br>高斯過程導引<br>探索與利用平衡</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "貝氏最佳化",
      "Bayesian Optimization",
      "高斯過程",
      "採樣函數",
      "Expected Improvement",
      "Optuna",
      "探索與利用"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 32
      },
      {
        "subj": "115_2_3",
        "qId": 31
      }
    ]
  },
  {
    "id": "l233_23",
    "category": "L233",
    "code": "L23304",
    "title": "早停法 (Early Stopping) 與 Patience 參數設定",
    "summary": "訓練神經網路時最實用的正則化技巧。即時監控<b>驗證集損失 (Validation Loss)</b>，當驗證損失在連續 \\(P\\) 個 Epoch（即 <b>Patience 容忍度</b>）內不再改善甚至反彈攀升時，強制中斷訓練並載入歷史最佳權重。",
    "confusing": [
      "訓練集損失 (Train Loss) 會隨著 Epoch 增加持續下降，<b>絕對不能用 Train Loss 作為早停基準</b>，否則必然過擬合",
      "<b>Patience 設定不宜過小（如設為 1）</b>：因為損失曲線常伴隨隨機 Mini-batch 震盪，過小容易被局部小波動誤觸早停，錯失更佳極小值",
      "搭配回呼機制 (ModelCheckpoint)：早停時必須確認恢復的是 <b>驗證損失最低點的模型權重</b>，而非停止當下的權重"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛑 早停法防過擬合最佳切點</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">前期：訓練與驗證損失同步下降</span>\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">轉折：驗證損失開始上升 ➔ 早停觸發！</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "早停法",
      "Early Stopping",
      "Patience",
      "Validation Loss",
      "過擬合防禦",
      "ModelCheckpoint"
    ],
    "examRefs": [
      {
        "subj": "115_1_3",
        "qId": 32
      }
    ]
  },
  {
    "id": "l233_24",
    "category": "L233",
    "code": "L23304",
    "title": "彈性網路 (ElasticNet) 正則化：L1 與 L2 的黃金折衷",
    "summary": "結合 L1 (Lasso) 與 L2 (Ridge) 的雙重正則化項：\\(\\mathcal{L}_{ElasticNet} = \\text{Loss} + r \\alpha \\|w\\|_1 + \\frac{1-r}{2} \\alpha \\|w\\|_2^2\\)，\\(r\\) 為 l1_ratio 混合比例。",
    "confusing": [
      "當存在<b>高度多重共線性的一群特徵</b>時，Lasso 往往隨機選取其中一個特徵，將其餘權重無情降為 0，失去穩定性",
      "ElasticNet 引入 L2 項，使其具備<b>「群組效應 (Grouping Effect)」</b>，能將這群高度相關的特徵一同選入或一同縮減，同時保留特徵稀疏性",
      "當特徵數量遠大於樣本數 \\(p > n\\) 時，Lasso 最多只能選出 \\(n\\) 個特徵，ElasticNet 則無此容量限制"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚖️ 三大線性正則化特點對比</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(239,68,68,0.08); padding:3px; border-radius:4px;\"><b>Lasso (L1)</b><br>特徵稀疏化<br>忽視共線性組</div>\n          <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>Ridge (L2)</b><br>權重向0壓縮<br>保留所有特徵</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>ElasticNet</b><br>L1 稀疏 + L2 群組<br>高共線性首選</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "彈性網路",
      "ElasticNet",
      "L1正則化",
      "L2正則化",
      "多重共線性",
      "群組效應",
      "特徵選擇"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 34
      },
      {
        "subj": "115_2_3",
        "qId": 33
      }
    ]
  },
  {
    "id": "l234_09",
    "category": "L234",
    "code": "L23401",
    "title": "AI 安全威脅：對抗性攻擊 (Adversarial Attack) 與 FGSM",
    "summary": "在原始輸入（如影像）中加入人類肉眼不可察覺的微小微擾 \\(\\eta\\)，誘使深度模型以極高置信度給出完全錯誤的判斷。經典演算法為 <b>FGSM（快速梯度符號法）</b>：\\(x_{adv} = x + \\epsilon \\cdot \\text{sign}(\\nabla_x J(\\theta, x, y))\\)。",
    "confusing": [
      "對抗性樣本的本質是<b>利用高維空間中模型的線性累積效應</b>與非流形脆弱點，並非模型隨機出錯",
      "白箱攻擊（攻擊者掌握完整模型權重與架構，可算梯度）vs 黑箱攻擊（僅能觀察輸入輸出機率 API 查詢）",
      "<b>主流防禦方案：對抗性訓練 (Adversarial Training)</b>，將生成的對抗性樣本混入訓練集一同再訓練，增強決策邊界的魯棒性"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛡️ FGSM 對抗樣本生成公式</div>\n        <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.78rem;\">\n          \\(x_{adv} = x + \\epsilon \\cdot \\text{sign}(\\nabla_x L(\\theta, x, y))\\)（熊貓 + 微小雜訊 ➔ 長臂猿 99%）\n        </div>\n      </div>\n    ",
    "keywords": [
      "對抗性攻擊",
      "Adversarial Attack",
      "FGSM",
      "快速梯度符號法",
      "對抗性訓練",
      "白箱攻擊",
      "模型魯棒性"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 36
      },
      {
        "subj": "115_1_3",
        "qId": 35
      }
    ]
  },
  {
    "id": "l234_10",
    "category": "L234",
    "code": "L23401",
    "title": "訓練階段攻擊：資料投毒 (Poisoning Attack) 與後門植入 (Backdoor)",
    "summary": "<b>資料投毒</b>在訓練集注入惡意污染樣本，導致模型總體效能大幅劣化；<b>後門攻擊</b>使模型在正常輸入時表現完美，但一旦輸入包含特定<b>觸發器 (Trigger，如特定圖標、特定字串)</b>，模型立即輸出攻擊者預設的惡意目標。",
    "confusing": [
      "後門模型在常規驗證集測試中<b>評估指標毫無破綻（Accuracy 極高）</b>，因此難以被傳統監控察覺",
      "投毒攻擊發生在<b>模型訓練前/訓練中</b>；對抗性攻擊發生在<b>模型推論部署階段 (Inference time)</b>",
      "防禦手段：資料清洗檢驗、光譜特徵分析 (Spectral Signature) 檢查神經元激活、神經元修剪 (Fine-Pruning) 消除後門休眠神經元"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🦹 投毒攻擊 vs 對抗性攻擊生命週期</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">資料投毒：訓練階段 (污染資料源)</span>\n          <span style=\"background:rgba(245,158,11,0.1); color:#d97706; padding:2px 6px; border-radius:4px;\">對抗樣本：推論階段 (繞過偵測)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "資料投毒",
      "Poisoning Attack",
      "後門攻擊",
      "Backdoor",
      "Trigger觸發器",
      "供應鏈安全",
      "神經元剪枝"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 36
      }
    ]
  },
  {
    "id": "l234_11",
    "category": "L234",
    "code": "L23401",
    "title": "隱私洩漏威脅：成員推斷攻擊 (Membership Inference Attack)",
    "summary": "攻擊者僅透過查詢目標模型輸出的預測機率分佈，即可推斷出<b>特定個體的紀錄是否存在於該模型的訓練集 (Training Set) 中</b>，對醫療病歷、金融隱私造成巨大威脅。",
    "confusing": [
      "攻擊根源在於<b>模型過擬合 (Overfitting)</b>：模型對見過的訓練樣本預測信心度通常顯著高於未見過的測試樣本（損失極小且預測熵低）",
      "攻擊方法：利用影子模型 (Shadow Models) 模擬目標模型行為，訓練一個二元分類器來識別「是否為訓練成員」",
      "<b>終極防禦：差分隱私 (Differential Privacy, DP-SGD)</b> 限制單一訓練樣本對模型參數的邊際影響，以及輸出機率截斷 / 軟化 (Temperature Smoothing)"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🔍 成員推斷攻擊防禦機制</div>\n        <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; font-size:0.78rem;\">\n          <span style=\"background:rgba(239,68,68,0.1); color:#dc2626; padding:2px 6px; border-radius:4px;\">過擬合 ➔ 訓練集置信度極高 ➔ 易被推斷</span>\n          <span>➔</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">防禦：差分隱私 DP-SGD + 輸出機率模糊化</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "成員推斷攻擊",
      "Membership Inference",
      "影子模型",
      "隱私洩露",
      "模型過擬合",
      "DP-SGD",
      "機率截斷"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 37
      },
      {
        "subj": "115_1_3",
        "qId": 36
      }
    ]
  },
  {
    "id": "l234_12",
    "category": "L234",
    "code": "L23401",
    "title": "個資保護法規實務：PII 定義、假名化 vs 匿名化",
    "summary": "個人資料保護法規（GDPR、台灣個資法）核心要求。<b>PII（個人可識別資訊）</b>涵蓋直接與間接識別資訊；<b>假名化 (Pseudonymization)</b> 技術上可逆，仍屬個資；<b>匿名化 (Anonymization)</b> 永久不可逆，脫離個資法範疇。",
    "confusing": [
      "<b>假名化（如雜湊雜湊值加鹽 Hash+Salt、代碼替換）</b>：若保留金鑰對照表，在法律上<b>「依然是個人資料」</b>，必須遵循個資法安全標準",
      "<b>匿名化（如聚合統計、不可逆噪聲注入）</b>：任何人都無法再直接或間接識別特定當事人，在法律上<b>不再屬於個人資料</b>",
      "個資最小化原則 (Data Minimization)：AI 專案僅能收集「達成特定目的所必要之最小限度資料」，禁止預先無上限蒐集以防萬一"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">📜 假名化 vs 匿名化 法律定性</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:0.78rem;\">\n          <div style=\"background:rgba(245,158,11,0.08); padding:4px; border-radius:4px;\">\n            <b>假名化 (代碼化)</b><br>技術上可逆 (有對照表)<br>⚠️ 仍屬個資，受法律監管\n          </div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:4px; border-radius:4px;\">\n            <b>匿名化 (去識別)</b><br>永久不可逆<br>✅ 非個資，脫離監管\n          </div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "PII",
      "個人可識別資訊",
      "GDPR",
      "台灣個資法",
      "假名化",
      "匿名化",
      "資料最小化原則"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 38
      },
      {
        "subj": "115_2_3",
        "qId": 38
      }
    ]
  },
  {
    "id": "l234_13",
    "category": "L234",
    "code": "L23402",
    "title": "演算法偏見三大介入階段：預處理 vs 處理中 vs 後處理",
    "summary": "消除 AI 偏見的三大工程介入時機：<b>預處理 (Pre-processing)</b> 改變訓練數據分佈；<b>處理中 (In-processing)</b> 改變模型架構或損失函數；<b>後處理 (Post-processing)</b> 改變預測決策閾值。",
    "confusing": [
      "<b>預處理法（重採樣 Re-sampling, 優化重加權 Re-weighting）</b>：最獨立，適用於任何後續模型，但無法消除特徵間隱式交互作用產生的偏見",
      "<b>處理中法（對抗性去偏 Adversarial Debiasing, 公平性懲罰項）</b>：精確度高，但必須重新設計訓練流程並犧牲部分任務準確率",
      "<b>後處理法（群體門檻調整 Threshold Adjustment, 拒絕推斷校準）</b>：<b>無需重新訓練黑盒模型</b>，上線部屬最靈活，但需在推論時取得群體敏感屬性"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🛠️ 偏見治理三階段工具箱</div>\n        <div style=\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:4px; font-size:0.75rem;\">\n          <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>預處理</b><br>重採樣/重加權<br>模型無關</div>\n          <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>處理中</b><br>對抗式去偏<br>需重訓模型</div>\n          <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>後處理</b><br>決策閾值調整<br>免重訓黑盒</div>\n        </div>\n      </div>\n    ",
    "keywords": [
      "偏見治理",
      "預處理",
      "處理中",
      "後處理",
      "對抗式去偏",
      "門檻調整",
      "公平性正則化"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 39
      },
      {
        "subj": "115_1_3",
        "qId": 38
      }
    ]
  },
  {
    "id": "l234_14",
    "category": "L234",
    "code": "L23402",
    "title": "公平性三大數學準則：人口統計均等 vs 均等機會 vs 均等化勝算",
    "summary": "演算法公平性定義互不相容。<b>人口統計均等 (Demographic Parity)</b> 要求各族群獲選率相同；<b>均等機會 (Equal Opportunity)</b> 要求合格群體召回率 (TPR) 相同；<b>均等化勝算 (Equalized Odds)</b> 要求 TPR 與 FPR 皆相同。",
    "confusing": [
      "<b>人口統計均等盲點</b>：若不同族群在客觀底層能力分佈不同，硬性要求獲選率相同可能被迫錄取不合格者（可能犧牲公平實質）",
      "<b>均等機會 (Equal Opportunity) 廣受就業與信貸推崇</b>：只關注「真正能按時還款/能勝任的人」在各個族群間是否享有相等的被選中機會（\\(P(\\hat{Y}=1 | Y=1, A=0) = P(\\hat{Y}=1 | Y=1, A=1)\\)）",
      "數學不可能定理：除非真實正例率相等或模型預測達到 100% 完美，否則這三者<b>在數學上無法同時被滿足</b>"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">⚖️ 公平性指標光譜判準</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">人口統計：P(Ŷ=1|A=0) = P(Ŷ=1|A=1)</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">均等機會：TPR_A = TPR_B (僅看Y=1)</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "演算法公平性",
      "Demographic Parity",
      "Equal Opportunity",
      "Equalized Odds",
      "TPR相同",
      "公平性不可能定理"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 39
      },
      {
        "subj": "114_2_3",
        "qId": 40
      }
    ]
  },
  {
    "id": "l234_15",
    "category": "L234",
    "code": "L23402",
    "title": "SHAP 合作博弈論四大公理與特徵貢獻度解析",
    "summary": "<b>SHAP (Shapley Additive exPlanations)</b> 源於諾貝爾經濟學獎的合作博弈論。將每個特徵視為聯盟球員，以<b>邊際貢獻加權平均</b>分配預測偏差，滿足四大數學公理。",
    "confusing": [
      "四大公理保證唯一性：<b>有效性 (Efficiency)</b>（各特徵貢獻之和等於預測值與基準值之差 \\(f(x) - E[f(x)]\\)）、<b>對稱性</b>、<b>虛擬性 (Dummy)</b>（無貢獻特徵值為 0）、<b>可加性</b>",
      "SHAP 具有<b>全域與局部一致性 (Consistency)</b>：若模型修改後特徵 \\(i\\) 的邊際貢獻增加，其 SHAP 值絕不會下降（傳統樹模型 Feature Importance 缺乏此保證）",
      "TreeSHAP 演算法大幅優化計算複雜度，使在 XGBoost/LightGBM 上的特徵解釋達到毫秒級運算"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🧩 SHAP 加法可解釋性模型分解</div>\n        <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.78rem; font-weight:700; color:#059669;\">\n          \\(f(x) = g(z') = \\phi_0 + \\sum_{i=1}^M \\phi_i\\)（基準均值 + 各特徵正負貢獻）\n        </div>\n      </div>\n    ",
    "keywords": [
      "SHAP",
      "Shapley值",
      "合作博弈論",
      "邊際貢獻",
      "TreeSHAP",
      "模型可解釋性",
      "XAI四大公理"
    ],
    "examRefs": [
      {
        "subj": "114_2_3",
        "qId": 41
      },
      {
        "subj": "115_1_3",
        "qId": 40
      }
    ]
  },
  {
    "id": "l234_16",
    "category": "L234",
    "code": "L23402",
    "title": "局部可解釋模型 LIME：模型無關的局部代理機制",
    "summary": "<b>LIME (Local Interpretable Model-agnostic Explanations)</b> 的核心哲學是<b>「全局複雜非線性，但局部必定近似線性」</b>。在待解釋樣本周圍進行擾動採樣，擬合局部簡單線性模型以解釋黑盒決策。",
    "confusing": [
      "<b>模型無關 (Model-Agnostic)</b>：LIME 完全不在意黑盒模型是神經網路、隨機森林還是 SVM，只需能夠查詢輸入輸出介面即可運作",
      "<b>擾動權重依賴距離</b>：利用指數核函數 \\(\\pi_x(z) = \\exp(-D(x,z)^2 / \\sigma^2)\\) 賦予權重，離待解釋點越近的擾動樣本，權重越大",
      "LIME vs SHAP：LIME 是局部的快速採樣近似（運算較快但具隨機抽樣不穩定性）；SHAP 具備嚴密公理基礎與唯一解（更穩定一致但純核運算較耗時）"
    ],
    "visualHtml": "\n      <div style=\"text-align:center; padding: 0.25rem 0;\">\n        <div style=\"font-weight:700; color:var(--primary); margin-bottom: 0.35rem;\">🔍 LIME 局部線性擬合幾何圖解</div>\n        <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; font-weight:600;\">\n          <span style=\"background:rgba(37,99,235,0.1); color:#2563eb; padding:2px 6px; border-radius:4px;\">1. 在樣本 x 周圍隨機擾動撒點</span>\n          <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 6px; border-radius:4px;\">2. 距離加權 ➔ 擬合局部線性迴歸</span>\n        </div>\n      </div>\n    ",
    "keywords": [
      "LIME",
      "局部可解釋",
      "模型無關",
      "Model-Agnostic",
      "擾動採樣",
      "局部線性代理",
      "XAI"
    ],
    "examRefs": [
      {
        "subj": "115_2_3",
        "qId": 40
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { L23_CHEATSHEET_DATA };
}
