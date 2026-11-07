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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { L23_CHEATSHEET_DATA };
}
