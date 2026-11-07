// AI Core Coding Cheat Sheet Database (NumPy, pandas, scikit-learn, PyTorch, Keras, Matplotlib)
// 機器學習與 AI 核心程式庫重點整理速記資料庫

const CODING_CHEATSHEET_DATA = [
  {
    "id": "code_np_01",
    "category": "numpy",
    "code": "NUMPY-01",
    "title": "陣列建立與核心屬性 (shape, ndim, dtype)",
    "summary": "NumPy 核心為 <code>ndarray</code>。透過 <code>np.array()</code>、<code>np.zeros()</code>、<code>np.arange()</code>、<code>np.linspace()</code> 建立，核心屬性為形狀、維度與數據型態。",
    "snippet": "import numpy as np\n\n# 建立常見陣列\na = np.zeros((2, 3), dtype=np.float32)       # 2x3 全 0 矩陣\nb = np.arange(0, 10, 2)                      # [0, 2, 4, 6, 8] 左閉右開步長 2\nc = np.linspace(0, 1, 5)                     # [0.0, 0.25, 0.5, 0.75, 1.0] 等分 5 點\n\nprint(a.shape)  # (2, 3) 形狀\nprint(a.ndim)   # 2 維度 (rank)\nprint(a.dtype)  # float32 元素型態",
    "confusing": [
      "<code>np.arange(start, stop, step)</code> 是<b>左閉右開</b>（不包含 stop，且 step 可為浮點數但易有精度誤差）",
      "<code>np.linspace(start, stop, num)</code> 預設是<b>包含 stop 終點</b>的，產生指定數量的等間距點",
      "Python List 各元素型態可不同；NumPy 陣列內所有元素<b>必須同型態 (Homogeneous)</b>，若混雜會自動向上轉型 (Upcasting，如整數被轉為浮點或字串)"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center;\">\n        <span style=\"background:rgba(37,99,235,0.1); color:#2563eb; padding:2px 8px; border-radius:4px; font-weight:700;\">shape: (2, 3)</span>\n        <span style=\"background:rgba(16,185,129,0.1); color:#059669; padding:2px 8px; border-radius:4px; font-weight:700;\">ndim: 2</span>\n        <span style=\"background:rgba(245,158,11,0.1); color:#d97706; padding:2px 8px; border-radius:4px; font-weight:700;\">dtype: float32</span>\n      </div>\n    ",
    "keywords": [
      "numpy",
      "ndarray",
      "shape",
      "ndim",
      "dtype",
      "arange",
      "linspace",
      "zeros"
    ]
  },
  {
    "id": "code_np_02",
    "category": "numpy",
    "code": "NUMPY-02",
    "title": "形狀重塑：reshape(-1) 自動推斷與 View vs Copy 陷阱",
    "summary": "<code>arr.reshape()</code> 改變維度形狀，參數 <code>-1</code> 代表由系統自動根據總元素數推斷該維長度。<code>ravel()</code> 回傳 View，<code>flatten()</code> 恆回傳深拷貝 Copy。",
    "snippet": "x = np.arange(12)  # 0~11 共 12 個元素\n\n# 自動計算列數：指定欄數為 3，-1 會自動推斷為 4\nmatrix = x.reshape(-1, 3)  # shape: (4, 3)\n\n# 展平為一維\nflat_view = matrix.ravel()    # 回傳視圖 (View)，修改會連動原陣列！\nflat_copy = matrix.flatten()  # 回傳拷貝 (Copy)，修改獨立安全",
    "confusing": [
      "<code>reshape(-1, 1)</code> 是機器學習極高頻語法！將一維特徵向量 <code>(N,)</code> 轉換為二維矩陣 <code>(N, 1)</code>，符合 scikit-learn 的輸入要求",
      "一個 reshape 指令中<b>只能有一個維度設定為 -1</b>，否則系統無法計算唯一解",
      "<b>View vs Copy 記憶陷阱</b>：<code>ravel()</code> 盡可能回傳視圖，若修改其元素，原陣列會被同步更改；<code>flatten()</code> 必定重新分配記憶體深拷貝"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>ravel()</b> ➔ 視圖 (View)<br>改動連帶影響原資料</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>flatten()</b> ➔ 拷貝 (Copy)<br>獨立記憶體最安全</div>\n      </div>\n    ",
    "keywords": [
      "reshape",
      "ravel",
      "flatten",
      "view",
      "copy",
      "自動推斷",
      "維度轉換"
    ]
  },
  {
    "id": "code_np_03",
    "category": "numpy",
    "code": "NUMPY-03",
    "title": "維度軸向 (axis) 的奧祕與 keepdims 保持維度",
    "summary": "NumPy 聚合統計（sum, mean, max）中的 <code>axis</code> 代表<b>「沿著該軸向進行壓縮/崩塌」</b>。<code>keepdims=True</code> 能保留該軸長度為 1，避免維度退化。",
    "snippet": "arr = np.array([[1, 2, 3],\n                [4, 5, 6]])  # shape: (2, 3)\n\n# axis=0: 沿著縱向壓縮（第0軸消失），計算每一欄 (Column) 的總和\ncol_sum = arr.sum(axis=0)  # [5, 7, 9], shape: (3,)\n\n# axis=1: 沿著橫向壓縮（第1軸消失），計算每一列 (Row) 的總和\nrow_sum = arr.sum(axis=1, keepdims=True)  # [[6], [15]], shape: (2, 1)",
    "confusing": [
      "<b>軸向心法口訣</b>：指定哪個 axis，<b>該維度就會在運算後被消滅（壓扁）</b>！二維中 <code>axis=0</code> 算每欄，<code>axis=1</code> 算每列",
      "在 Softmax 或標準化減均值時，若未加上 <code>keepdims=True</code>，形狀會從 <code>(N, 1)</code> 退化為 <code>(N,)</code>，在與原矩陣運算時可能引發廣播維度錯誤！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">⬇️ axis=0：沿列壓扁（求各欄）</span>\n        <span style=\"color:#059669;\">➡️ axis=1：沿欄壓扁（求各列）</span>\n      </div>\n    ",
    "keywords": [
      "axis",
      "軸向",
      "keepdims",
      "sum",
      "mean",
      "廣播對齊",
      "降維壓縮"
    ]
  },
  {
    "id": "code_np_04",
    "category": "numpy",
    "code": "NUMPY-04",
    "title": "廣播機制 (Broadcasting) 兩大黃金對齊法則",
    "summary": "當兩個不同形狀的陣列進行四則運算時，NumPy 會自動在虛擬層面擴展較小陣列。<b>規則：從最後一個維度向前比對，各維度必須滿足：(1) 維度長度相等，或 (2) 其中之一為 1</b>。",
    "snippet": "A = np.ones((4, 3))   # 4 列 3 欄\nB = np.array([1, 2, 3]) # 1 維向量，長度 3 (形狀視為 1, 3)\n\n# B 會自動在第 0 維複製 4 份，變成 (4, 3) 與 A 逐元素相加\nC = A + B  # 合法！C 的形狀為 (4, 3)\n\nX = np.ones((4, 1))  # (4, 1)\nY = np.ones((1, 3))  # (1, 3)\nZ = X + Y            # 合法！Z 形狀為 (4, 3) (雙向廣播)",
    "confusing": [
      "形狀 <code>(4, 3)</code> 與 <code>(4,)</code> <b>不能直接相加</b>！因為 <code>(4,)</code> 從後方對齊是 3 vs 4，兩者不相等且非 1，會噴 <code>ValueError: operands could not be broadcast together</code>",
      "解法：使用 <code>b[:, np.newaxis]</code> 或 <code>b.reshape(-1, 1)</code> 將其明確轉為 <code>(4, 1)</code> 即可合法廣播！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>廣播判定法則</b>：(4, 3) vs (1, 3) ➔ 尾部 3=3，前部 4與1可擴展 ➔ 成功！\n      </div>\n    ",
    "keywords": [
      "廣播機制",
      "Broadcasting",
      "維度對齊",
      "np.newaxis",
      "形狀不符",
      "ValueError"
    ]
  },
  {
    "id": "code_np_05",
    "category": "numpy",
    "code": "NUMPY-05",
    "title": "陣列拼接：concatenate vs stack vs vstack vs hstack",
    "summary": "<code>np.concatenate</code> 在<b>現有維度</b>上拼接；<code>np.stack</code> 會<b>新增一個維度</b>堆疊；<code>np.vstack</code> 垂直堆疊（列增加）；<code>np.hstack</code> 水平堆疊（欄增加）。",
    "snippet": "a = np.array([1, 2, 3])  # shape: (3,)\nb = np.array([4, 5, 6])  # shape: (3,)\n\n# 1. concatenate (在原維度上拼，結果仍是 1D)\nc1 = np.concatenate([a, b], axis=0)  # [1, 2, 3, 4, 5, 6], shape: (6,)\n\n# 2. stack (創造新軸，結果變成 2D)\nc2 = np.stack([a, b], axis=0)        # [[1,2,3], [4,5,6]], shape: (2, 3)\n\n# 3. vstack (垂直拼成 2 列)\nc3 = np.vstack([a, b])               # shape: (2, 3)\n# 4. hstack (水平拼成 1 行 6 欄)\nc4 = np.hstack([a, b])               # shape: (6,)",
    "confusing": [
      "<b>核心辨別</b>：想要將多張圖片 <code>(H, W, C)</code> 堆成一個 Batch <code>(B, H, W, C)</code> 時，必須使用 <code>np.stack(imgs, axis=0)</code>；若用 concatenate 會把圖片高度上下接起來 <code>(B*H, W, C)</code>！"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>concatenate</b><br>現有軸延伸・維度不變</div>\n        <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>stack</b><br>創造全新軸・維度 +1</div>\n      </div>\n    ",
    "keywords": [
      "concatenate",
      "stack",
      "vstack",
      "hstack",
      "維度堆疊",
      "Batch拼接"
    ]
  },
  {
    "id": "code_np_06",
    "category": "numpy",
    "code": "NUMPY-06",
    "title": "矩陣乘法三大運算子區分 (* vs @ vs dot)",
    "summary": "<code>*</code> 是<b>元素對元素乘法 (Hadamard product)</b>；<code>@</code> 與 <code>np.dot()</code> 是<b>矩陣乘積 (Matrix Multiplication)</b>。高維張量推薦使用 <code>@</code> 或 <code>np.matmul()</code>。",
    "snippet": "A = np.array([[1, 2], [3, 4]])\nB = np.array([[2, 0], [1, 2]])\n\n# 1. 元素相乘 (Hadamard): 1*2, 2*0, 3*1, 4*2\nelem_mult = A * B       # [[2, 0], [3, 8]]\n\n# 2. 矩陣乘法 (Dot Product): (2x2) @ (2x2)\nmatmul_res = A @ B      # [[4, 4], [10, 8]]\n# 等價於 np.dot(A, B) 或 np.matmul(A, B)\n\n# 轉置運算\nA_T = A.T               # [[1, 3], [2, 4]]",
    "confusing": [
      "極高頻 Bug：想算線性迴歸 \\(XW\\) 時寫成 <code>X * W</code>，這會觸發廣播元素乘法，而不是矩陣內積！請務必使用 <code>X @ W</code>",
      "對於大於 2 維的張量（如 Batch 資料），<code>@</code> / <code>matmul</code> 會對最後兩維進行矩陣乘法並保留 Batch 維度，而 <code>np.dot</code> 的高維行為較不直觀"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#dc2626;\">A * B：元素相乘 (逐項乘)</span>\n        <span style=\"color:#059669;\">A @ B：線性代數矩陣乘法</span>\n      </div>\n    ",
    "keywords": [
      "矩陣乘法",
      "dot",
      "matmul",
      "@",
      "Hadamard",
      "轉置",
      "元素相乘"
    ]
  },
  {
    "id": "code_np_07",
    "category": "numpy",
    "code": "NUMPY-07",
    "title": "布林遮罩 (Boolean Mask) 與 np.where 三元運算",
    "summary": "透過條件運算式產出布林陣列，作為遮罩篩選資料。<code>np.where(condition, x, y)</code> 則是向量化三元運算子（滿足條件選 x，否則選 y）。",
    "snippet": "arr = np.array([12, -5, 0, 8, -2, 15])\n\n# 1. 布林遮罩篩選 (只挑出大於 0 的正數)\nmask = arr > 0          # [True, False, False, True, False, True]\npositives = arr[mask]   # [12, 8, 15]\n\n# 2. np.where 條件替換 (負數全部截斷為 0，類似 ReLU)\nrelu_arr = np.where(arr > 0, arr, 0)  # [12, 0, 0, 8, 0, 15]\n\n# 3. np.where 若只有 condition 參數，回傳符合條件的索引 tuple\nidx = np.where(arr > 10)  # (array([0, 5]),) 代表第 0 與第 5 項",
    "confusing": [
      "在 NumPy 中多個布林條件進行邏輯結合時，<b>必須使用位元運算子 <code>&</code> (AND) 與 <code>|</code> (OR)</b>，且每個條件<b>必須用小括號 <code>()</code> 包覆</b>，嚴禁使用 Python 原生 <code>and</code> / <code>or</code>！",
      "錯誤示範：<code>arr[arr > 0 and arr < 10]</code> ➔ 噴 <code>ValueError: The truth value of an array with more than one element is ambiguous</code>"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>布林條件規範</b>：<code>(arr > 0) & (arr < 10)</code>（括號與 & 不可少！）\n      </div>\n    ",
    "keywords": [
      "布林遮罩",
      "np.where",
      "條件篩選",
      "ReLU",
      "位元運算子",
      "ValueError"
    ]
  },
  {
    "id": "code_np_08",
    "category": "numpy",
    "code": "NUMPY-08",
    "title": "切片索引與花式索引 (Fancy Indexing) 記憶體行為",
    "summary": "傳統切片 <code>arr[1:3]</code> 回傳 View；使用整數陣列或布林遮罩進行的<b>花式索引 (Fancy Indexing) 恆回傳深拷貝 Copy</b>。",
    "snippet": "arr = np.arange(10) * 10  # [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]\n\n# 傳統切片 (Slice ➔ View)\nsub_view = arr[2:5]\nsub_view[0] = 999\nprint(arr[2])  # 999！原陣列被改動了\n\n# 花式索引 (Fancy Indexing ➔ Copy)\nindices = [1, 3, 5]\nsub_copy = arr[indices]  # 選取索引 1, 3, 5\nsub_copy[0] = -1\nprint(arr[1])  # 10！原陣列不受影響",
    "confusing": [
      "切片語法 <code>arr[start:stop:step]</code> 回傳的是同一個記憶體區塊的 View，運行極快且省記憶體；但若不希望影響原數據，請顯式呼叫 <code>.copy()</code>",
      "二維陣列多維切片格式為 <code>arr[row_slice, col_slice]</code>，例如 <code>arr[:, :2]</code> 代表取所有列的前 2 欄"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>arr[2:5]</b> 切片 ➔ View 視圖</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>arr[[1,3,5]]</b> 花式 ➔ Copy 拷貝</div>\n      </div>\n    ",
    "keywords": [
      "切片",
      "Slice",
      "Fancy Indexing",
      "花式索引",
      "View",
      "Copy",
      "記憶體共享"
    ]
  },
  {
    "id": "code_np_09",
    "category": "numpy",
    "code": "NUMPY-09",
    "title": "隨機模組 np.random 與重現性種子 (seed)",
    "summary": "機器學習實作中，設定 <code>seed</code> 保證實驗可重現性。<code>rand()</code> 產生 [0, 1) 均勻分佈；<code>randn()</code> 產生標準常態分佈 \\(N(0, 1)\\)；<code>randint()</code> 產生隨機整數。",
    "snippet": "np.random.seed(42)  # 固定亂數種子，確保每次執行結果完全相同\n\n# 1. 均勻分佈 [0, 1)\nu = np.random.rand(2, 3)\n\n# 2. 標準常態分佈 (均值 0, 標準差 1)\nn = np.random.randn(2, 3)\n\n# 3. 隨機整數 (例如抽樣 0~99 之間 5 個整數)\nints = np.random.randint(0, 100, size=5)\n\n# 4. 隨機打亂 (Shuffle, 原地打亂)\ndata = np.arange(10)\nnp.random.shuffle(data)",
    "confusing": [
      "<b>randn 與 rand 差異</b>：<code>rand</code> 尾巴沒有 n，是<b>均勻分佈 (Uniform)</b>；<code>randn</code> 有一個 n（代表 Normal），是<b>常態分佈 (Gaussian)</b>！",
      "<code>np.random.shuffle()</code> 會<b>原地修改 (In-place)</b> 原陣列；而 <code>np.random.permutation()</code> 則會回傳打亂後的新陣列拷貝"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">rand(): [0, 1) 均勻分佈</span>\n        <span style=\"color:#059669;\">randn(): N(0, 1) 高斯常態分佈</span>\n      </div>\n    ",
    "keywords": [
      "np.random",
      "seed",
      "rand",
      "randn",
      "randint",
      "shuffle",
      "可重現性"
    ]
  },
  {
    "id": "code_np_10",
    "category": "numpy",
    "code": "NUMPY-10",
    "title": "線性代數模組 np.linalg (inv, eig, svd, norm)",
    "summary": "<code>np.linalg</code> 提供矩陣求逆 <code>inv()</code>、特徵值分解 <code>eig()</code>、奇異值分解 <code>svd()</code> 與範數計算 <code>norm()</code>，為機器學習演算法底層核心工具。",
    "snippet": "import numpy as np\n\nA = np.array([[4, 2], [1, 3]])\n\n# 1. 行列式與逆矩陣\ndet_A = np.linalg.det(A)      # 10.0 (非零可逆)\nA_inv = np.linalg.inv(A)      # 逆矩陣\n\n# 2. 特徵值與特徵向量 (Eigenvalues & Eigenvectors)\neigenvals, eigenvecs = np.linalg.eig(A)\n# eigenvals: array([5., 2.])，eigenvecs 的每一欄 (Column) 是對應的特徵向量\n\n# 3. 向量與矩陣範數 (預設為 L2 範數)\nv = np.array([3, 4])\nl2_norm = np.linalg.norm(v)   # 5.0",
    "confusing": [
      "若矩陣奇異（行列式為 0 或非方陣），呼叫 <code>np.linalg.inv()</code> 會噴 <code>LinAlgError: Singular matrix</code>；此時應使用廣義偽逆矩陣 <code>np.linalg.pinv()</code>",
      "<code>np.linalg.eig</code> 回傳的特徵向量矩陣，<b>每一「欄 (Column)」才是一個特徵向量</b>，而不是列！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>np.linalg 必備函數</b>：<code>inv()</code> 逆矩陣 | <code>eig()</code> 特徵值 | <code>pinv()</code> 偽逆矩陣\n      </div>\n    ",
    "keywords": [
      "np.linalg",
      "inv",
      "pinv",
      "eig",
      "svd",
      "norm",
      "特徵值",
      "奇異矩陣"
    ]
  },
  {
    "id": "code_np_11",
    "category": "numpy",
    "code": "NUMPY-11",
    "title": "極值索引與排序：argmax vs argsort",
    "summary": "分類模型預測機率時，常需挑出最大機率的類別索引。<code>np.argmax()</code> 回傳最大值的索引位置；<code>np.argsort()</code> 回傳由小到大排序後的索引順序。",
    "snippet": "probs = np.array([[0.1, 0.7, 0.2],   # 樣本 1: 預測類別 1 機率最高\n                    [0.8, 0.05, 0.15]]) # 樣本 2: 預測類別 0 機率最高\n\n# 沿著 axis=1（每列）找出最大機率的類別 ID\npreds = np.argmax(probs, axis=1)  # array([1, 0])\n\n# argsort 找出由小到大的索引排序\nscores = np.array([50, 90, 70, 80])\nsorted_indices = np.argsort(scores)       # [0, 2, 3, 1]\ntop2_indices = np.argsort(scores)[-2:]    # 取前 2 高分索引",
    "confusing": [
      "<code>np.argmax(probs, axis=1)</code> 是分類模型（Softmax 輸出）獲取預測標籤的最標準寫法！",
      "若只想找前 K 個最大值而不需完整排序，使用 <code>np.argpartition()</code> 效率更高，複雜度為 \\(O(N)\\) 而非 \\(O(N \\log N)\\)"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">argmax: 找最大值所在索引</span>\n        <span style=\"color:#059669;\">argsort: 產生排序後的索引陣列</span>\n      </div>\n    ",
    "keywords": [
      "argmax",
      "argsort",
      "argpartition",
      "Softmax標籤",
      "排序索引",
      "TopK"
    ]
  },
  {
    "id": "code_pd_01",
    "category": "pandas",
    "code": "PANDAS-01",
    "title": "DataFrame 基礎架構與探勘三板斧 (info, describe, shape)",
    "summary": "pandas 核心為 2 維表格 <code>DataFrame</code> 與 1 維序列 <code>Series</code>。載入資料後必備探勘三步：<code>.shape</code> 查維度、<code>.info()</code> 查缺失與型態、<code>.describe()</code> 查統計分佈。",
    "snippet": "import pandas as pd\n\n# 從字典建立 DataFrame\ndata = {'name': ['Alice', 'Bob', 'Charlie'],\n        'age': [25, 30, 35],\n        'salary': [50000, 65000, 80000]}\ndf = pd.DataFrame(data)\n\nprint(df.shape)       # (3, 3) 列數與欄數\ndf.info()             # 欄位型態、非空值計數 (Non-Null Count)、記憶體用量\nprint(df.describe())  # mean, std, min, 25%, 50%, 75%, max 五數綜合摘要",
    "confusing": [
      "<code>df.describe()</code> 預設<b>只統計數值型 (Numeric) 欄位</b>；若想包含字串或類別欄位，必須加上參數 <code>df.describe(include='all')</code>",
      "<code>df.info()</code> 能快速一眼看出哪個欄位有缺失值（比較 Non-Null Count 與總列數）"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>shape</b><br>(rows, cols)</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>info()</b><br>Dtype & Null</div>\n        <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>describe()</b><br>統計分佈</div>\n      </div>\n    ",
    "keywords": [
      "pandas",
      "DataFrame",
      "Series",
      "info",
      "describe",
      "shape",
      "資料探勘"
    ]
  },
  {
    "id": "code_pd_02",
    "category": "pandas",
    "code": "PANDAS-02",
    "title": "索引切片雙雄：loc (標籤) vs iloc (整數位置) 終極對決",
    "summary": "<code>loc</code> 基於<b>列/欄的名稱標籤 (Label)</b>，切片範圍<b>包含尾端終點</b>；<code>iloc</code> 基於<b>純整數位置索引 (Integer Position)</b>，切片範圍<b>左閉右開（不含尾端）</b>。",
    "snippet": "df = pd.DataFrame({'score': [85, 92, 78]}, index=['a', 'b', 'c'])\n\n# 1. loc: 用標籤名稱索引 (包含 'b'！)\nprint(df.loc['a':'b', 'score'])  # 包含 'a' 與 'b' 兩列\n\n# 2. iloc: 用 0-based 整數位置索引 (不含 2！)\nprint(df.iloc[0:2, 0])           # 取第 0, 1 列與第 0 欄\n\n# 條件遮罩推薦用 loc\ndf.loc[df['score'] >= 90, 'level'] = 'A'",
    "confusing": [
      "<b>最高頻考點地雷</b>：<code>loc[0:2]</code> vs <code>iloc[0:2]</code>！當 index 本身恰好是整數 0, 1, 2 時，<code>loc[0:2]</code> 會選取標籤 0, 1, 2 共 <b>3 列（包含 2）</b>；而 <code>iloc[0:2]</code> 只選取前 <b>2 列（0 和 1）</b>！",
      "賦值修改特徵時，務必使用 <code>df.loc[mask, 'col'] = val</code>，避免產生 SettingWithCopyWarning"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">loc['a':'b']：標籤包含尾端 'b'</span>\n        <span style=\"color:#059669;\">iloc[0:2]：整數位置左閉右開 (0, 1)</span>\n      </div>\n    ",
    "keywords": [
      "loc",
      "iloc",
      "標籤索引",
      "整數位置",
      "包含尾端",
      "左閉右開",
      "切片陷阱"
    ]
  },
  {
    "id": "code_pd_03",
    "category": "pandas",
    "code": "PANDAS-03",
    "title": "多條件布林過濾與 isin() 篩選",
    "summary": "透過條件運算式過濾 DataFrame 行列。多條件結合必須使用位元運算子 <code>&</code>、<code>|</code>、<code>~</code>（反向），且每個條件必須以小括號包裹。多值比對使用 <code>isin()</code>。",
    "snippet": "df = pd.DataFrame({\n    'city': ['Taipei', 'Tokyo', 'Taipei', 'NY'],\n    'age': [25, 40, 35, 18],\n    'vip': [True, False, True, False]\n})\n\n# 1. 多條件過濾 (必須加括號！)\nfiltered = df[(df['city'] == 'Taipei') & (df['age'] >= 30)]\n\n# 2. isin 列表篩選\ncities = ['Taipei', 'Tokyo']\ndf_sub = df[df['city'].isin(cities)]\n\n# 3. 反向篩選 (非 VIP 用 ~)\nnon_vip = df[~df['vip']]",
    "confusing": [
      "<b>必避坑</b>：寫成 <code>df[df['age'] > 20 and df['city'] == 'Taipei']</code> 會引發致命錯誤！Python 的 <code>and</code> 無法直接對向量做逐項邏輯判斷，請牢記：<b>位元運算子 + 小括號</b>",
      "反向條件使用波浪符號 <code>~</code>，等同於 NOT 運算"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>多條件鐵律</b>：<code>df[(條件A) & (條件B)]</code>，反向用 <code>~df[條件]</code>\n      </div>\n    ",
    "keywords": [
      "布林過濾",
      "isin",
      "多條件",
      "位元運算子",
      "反向篩選",
      "資料過濾"
    ]
  },
  {
    "id": "code_pd_04",
    "category": "pandas",
    "code": "PANDAS-04",
    "title": "缺失值四部曲 (isna, dropna, fillna, ffill/bfill)",
    "summary": "缺失值以 <code>NaN</code>（或 None）表示。<code>isna().sum()</code> 盤點缺失、<code>dropna()</code> 丟棄、<code>fillna()</code> 填補數值、<code>ffill()</code> / <code>bfill()</code> 用前/後向數值填補。",
    "snippet": "df = pd.DataFrame({'A': [1, np.nan, 3, np.nan], 'B': [5, 6, np.nan, 8]})\n\n# 1. 檢查各欄缺失值個數\nprint(df.isna().sum())\n\n# 2. 刪除包含缺失值的列 (how='any' 有空就刪, how='all' 全空才刪)\ndf_clean = df.dropna(subset=['A'])\n\n# 3. 數值填補 (以該欄中位數填補)\ndf['A'] = df['A'].fillna(df['A'].median())\n\n# 4. 前向填補 (常用於時間序列，用前一筆有效數據覆蓋)\ndf['B'] = df['B'].ffill()",
    "confusing": [
      "<code>fillna()</code> 在新版 pandas 中推薦顯式賦值 <code>df['A'] = df['A'].fillna(0)</code>，官方正逐步廢棄 <code>inplace=True</code> 參數",
      "時間序列或感測器資料缺失時，<code>ffill()</code>（Forward Fill）最合理；若是機器學習特徵工程，應填補中位數或用 IterativeImputer 模型補值"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>ffill()</b>: 前值往後補 (時序)</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>fillna(median)</b>: 中位數填補</div>\n      </div>\n    ",
    "keywords": [
      "缺失值",
      "NaN",
      "isna",
      "dropna",
      "fillna",
      "ffill",
      "bfill",
      "資料清洗"
    ]
  },
  {
    "id": "code_pd_05",
    "category": "pandas",
    "code": "PANDAS-05",
    "title": "分組聚合 (groupby) 與 transform 的維度差異",
    "summary": "<code>groupby()</code> 實現 Split-Apply-Combine。搭配 <code>agg()</code> 聚合會<b>縮減行數</b>；搭配 <code>transform()</code> 運算則會<b>保持原表格行數完全不變</b>。",
    "snippet": "df = pd.DataFrame({\n    'dept': ['IT', 'IT', 'HR', 'HR', 'HR'],\n    'salary': [70000, 80000, 50000, 55000, 60000]\n})\n\n# 1. agg 聚合：每個部門產出一行統計 (縮減行數)\ndept_summary = df.groupby('dept')['salary'].agg(['mean', 'max', 'count'])\n\n# 2. transform：計算該部門均值，並廣播回每一列 (行數不變！)\ndf['dept_avg'] = df.groupby('dept')['salary'].transform('mean')\n# 方便計算個人薪水與部門平均的差異\ndf['diff_from_avg'] = df['salary'] - df['dept_avg']",
    "confusing": [
      "<b>transform 神器特點</b>：當需要為原資料建立「組內基準特徵」（如每個使用者與其歷史平均消費的差額）時，<code>transform()</code> 是最優雅解法，無需手動 merge！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">agg()：分組壓縮 ➔ 行數減少</span>\n        <span style=\"color:#059669;\">transform()：組內廣播 ➔ 保留原行數</span>\n      </div>\n    ",
    "keywords": [
      "groupby",
      "agg",
      "transform",
      "Split-Apply-Combine",
      "特徵工程",
      "組內聚合"
    ]
  },
  {
    "id": "code_pd_06",
    "category": "pandas",
    "code": "PANDAS-06",
    "title": "表格合併：merge (關聯鍵) vs concat (軸向堆疊)",
    "summary": "<code>pd.merge()</code> 類似 SQL JOIN，依據共同欄位（鍵值）合併；<code>pd.concat()</code> 是實體直接沿著列 <code>axis=0</code> 或欄 <code>axis=1</code> 進行純拼接。",
    "snippet": "df1 = pd.DataFrame({'id': [1, 2], 'name': ['Alice', 'Bob']})\ndf2 = pd.DataFrame({'id': [1, 2], 'score': [90, 80]})\n\n# 1. pd.merge (如同 SQL inner/left join)\nmerged = pd.merge(df1, df2, on='id', how='left')\n\n# 2. pd.concat 垂直拼接多個月份資料 (axis=0)\njan = pd.DataFrame({'sales': [100, 200]})\nfeb = pd.DataFrame({'sales': [150, 250]})\ntotal_sales = pd.concat([jan, feb], ignore_index=True)  # 重置索引 0~3",
    "confusing": [
      "<code>concat</code> 垂直拼接時，建議加上 <code>ignore_index=True</code>，否則會保留原本各子表 0, 1, 2 重複的索引，後續容易踩坑",
      "<code>merge</code> 預設為 <code>how='inner'</code>（交集）；若希望保留左表所有資料，請顯式指定 <code>how='left'</code>"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>merge()</b>: SQL 關聯鍵<br>橫向關聯欄位</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>concat()</b>: 實體拼接<br>垂直疊加行 (axis=0)</div>\n      </div>\n    ",
    "keywords": [
      "merge",
      "concat",
      "JOIN",
      "inner",
      "left",
      "ignore_index",
      "資料合併"
    ]
  },
  {
    "id": "code_pd_07",
    "category": "pandas",
    "code": "PANDAS-07",
    "title": "長寬表格轉換：pivot_table (透視) vs melt (融化)",
    "summary": "<b>長表 (Long)</b> 適合機器學習與資料庫儲存；<b>寬表 (Wide)</b> 適合人類閱讀報表。<code>pivot_table()</code> 長表轉寬表；<code>melt()</code> 寬表壓平為長表。",
    "snippet": "df_long = pd.DataFrame({\n    'date': ['2026-01', '2026-01', '2026-02', '2026-02'],\n    'product': ['A', 'B', 'A', 'B'],\n    'sales': [100, 150, 120, 180]\n})\n\n# 1. 透視表 (長表 ➔ 寬表)\nwide = df_long.pivot_table(index='date', columns='product', values='sales', aggfunc='sum')\n# 欄位會變成 product 的 A 與 B\n\n# 2. 融化 (寬表 ➔ 長表)\nmelted = wide.reset_index().melt(id_vars='date', var_name='product', value_name='sales')",
    "confusing": [
      "<code>pivot_table</code> 支援 <code>aggfunc</code>（預設為 <code>mean</code>），能處理重複鍵值的聚合；而 <code>pivot()</code> 若遇到重複 index/column 組合會直接拋出異常！",
      "特徵工程中，處理多期指標時常用 <code>melt</code> 快速整合欄位"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">pivot_table: 長表 ➔ 寬表 (彙總透視)</span>\n        <span style=\"color:#059669;\">melt: 寬表 ➔ 長表 (特徵重塑)</span>\n      </div>\n    ",
    "keywords": [
      "pivot_table",
      "melt",
      "長寬表轉換",
      "透視表",
      "資料重塑",
      "aggfunc"
    ]
  },
  {
    "id": "code_pd_08",
    "category": "pandas",
    "code": "PANDAS-08",
    "title": "向量化字串 (.str) 與日期時間 (.dt) 存取器",
    "summary": "pandas 提供專屬的 <code>.str</code> 與 <code>.dt</code> 存取器，能對整欄字串或日期進行高效向量化操作，無需撰寫 Python for 迴圈。",
    "snippet": "df = pd.DataFrame({\n    'email': [' Alice@gmail.com ', 'BOB@yahoo.com'],\n    'reg_time': ['2026-03-15 09:30', '2026-07-20 14:10']\n})\n\n# 1. .str 字串處理\ndf['clean_email'] = df['email'].str.strip().str.lower()\ndf['is_gmail'] = df['clean_email'].str.endswith('@gmail.com')\n\n# 2. .dt 日期時間提取 (需先轉為 datetime)\ndf['reg_time'] = pd.to_datetime(df['reg_time'])\ndf['reg_year'] = df['reg_time'].dt.year\ndf['weekday']  = df['reg_time'].dt.dayofweek  # 0代表週一，6代表週日",
    "confusing": [
      "忘記呼叫 <code>.str</code> 直接寫 <code>df['col'].lower()</code> 會報錯 <code>AttributeError: 'Series' object has no attribute 'lower'</code>！",
      "日期字串必須先透過 <code>pd.to_datetime()</code> 解析為時間型態，才能使用 <code>.dt</code> 存取器"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>專屬向量存取器</b>：<code>Series.str.*</code>（文字處理） | <code>Series.dt.*</code>（時序特徵）\n      </div>\n    ",
    "keywords": [
      ".str",
      ".dt",
      "to_datetime",
      "向量化操作",
      "字串處理",
      "時間特徵提取"
    ]
  },
  {
    "id": "code_pd_09",
    "category": "pandas",
    "code": "PANDAS-09",
    "title": "函數應用：map (對照字典) vs apply (逐行自訂)",
    "summary": "<code>Series.map()</code> 適合單一欄位的字典對照或簡單函數替換；<code>df.apply()</code> 適合跨欄位的複雜邏輯運算（<code>axis=1</code> 逐列處理）。",
    "snippet": "df = pd.DataFrame({\n    'gender': ['M', 'F', 'M'],\n    'height': [175, 160, 180],\n    'weight': [70, 50, 85]\n})\n\n# 1. map: 字典對照編碼 (效率極高)\ndf['gender_code'] = df['gender'].map({'M': 1, 'F': 0})\n\n# 2. apply: 跨欄計算 BMI (axis=1 傳入每一列 row)\ndef calc_bmi(row):\n    h_m = row['height'] / 100\n    return row['weight'] / (h_m ** 2)\n\ndf['BMI'] = df.apply(calc_bmi, axis=1)",
    "confusing": [
      "<b>效能避坑指南</b>：若能用向量化運算（如 <code>df['weight'] / (df['height']/100)**2</code>），<b>絕對不要用 apply</b>！向量化底層為 C 語言運算，比 <code>apply(axis=1)</code> 快 50~100 倍！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">map: 單欄字典映射 (超快)</span>\n        <span style=\"color:#059669;\">apply(axis=1): 跨欄複雜運算</span>\n      </div>\n    ",
    "keywords": [
      "map",
      "apply",
      "向量化",
      "效能優化",
      "字典對照",
      "逐列運算"
    ]
  },
  {
    "id": "code_pd_10",
    "category": "pandas",
    "code": "PANDAS-10",
    "title": "SettingWithCopyWarning 警告與顯式 .copy()",
    "summary": "當在 DataFrame 的切片篩選子集上進行欄位修改時，pandas 會跳出 <code>SettingWithCopyWarning</code>。根本原因在於<b>不確定修改的是 View 還是 Copy</b>。解法：使用 <code>.copy()</code> 顯式複製。",
    "snippet": "# ⚠️ 容易觸發警告的寫法 (鏈式賦值 Chained Assignment)\nsub_df = df[df['age'] > 30]\nsub_df['label'] = 1  # 跳出 SettingWithCopyWarning！\n\n# ✅ 正確標準解法一：顯式深拷貝 (.copy())\nsub_df = df[df['age'] > 30].copy()\nsub_df['label'] = 1  # 安全無警告！\n\n# ✅ 正確標準解法二：直接在原表使用 loc 修改\ndf.loc[df['age'] > 30, 'label'] = 1",
    "confusing": [
      "雖然程式碼可能看似成功修改了，但鏈式索引可能導致修改並未寫回原表，或後續造成不可預期的 Bug；請務必養成篩選後加上 <code>.copy()</code> 的好習慣！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>避開警告口訣</b>：子集篩選必加 <code>.copy()</code>，原地修改必用 <code>.loc[mask, col]</code>\n      </div>\n    ",
    "keywords": [
      "SettingWithCopyWarning",
      "copy",
      "鏈式賦值",
      "Chained Assignment",
      "loc"
    ]
  },
  {
    "id": "code_pd_11",
    "category": "pandas",
    "code": "PANDAS-11",
    "title": "資料排序與分箱離散化 (sort_values, cut, qcut)",
    "summary": "<code>sort_values()</code> 依數值排序；<code>pd.cut()</code> 依<b>等間距數值區間</b>分箱（如年齡分群 0-18, 18-35）；<code>pd.qcut()</code> 依<b>等樣本分位數</b>分箱（各箱樣本數相同）。",
    "snippet": "df = pd.DataFrame({'age': [15, 22, 28, 35, 45, 60, 75]})\n\n# 1. 排序 (ascending=False 由大到小降冪)\ndf_sorted = df.sort_values(by='age', ascending=False)\n\n# 2. cut: 指定邊界等間距分箱\ndf['age_group'] = pd.cut(df['age'], bins=[0, 18, 40, 100], labels=['青年', '壯年', '老年'])\n\n# 3. qcut: 等頻分位數分箱 (分成 4 等份四分位數)\ndf['age_quartile'] = pd.qcut(df['age'], q=4)",
    "confusing": [
      "<b>cut vs qcut 辨析</b>：<code>cut</code> 產出的區間寬度均勻，但各箱內的樣本數可能極不均勻；<code>qcut</code> 確保每一箱裝入相同數量的樣本（對付長尾右偏分佈更佳）"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">cut(): 依數值範圍等寬分箱</span>\n        <span style=\"color:#059669;\">qcut(): 依樣本數量等頻分箱</span>\n      </div>\n    ",
    "keywords": [
      "sort_values",
      "cut",
      "qcut",
      "分箱",
      "離散化",
      "分位數",
      "特徵工程"
    ]
  },
  {
    "id": "code_skl_01",
    "category": "sklearn",
    "code": "SKLEARN-01",
    "title": "API 統一介面設計：fit, transform 與 predict 慣例",
    "summary": "scikit-learn 嚴格遵循物件導向設計：<code>Estimator.fit(X, y)</code> 學習參數；<code>Transformer.transform(X)</code> 轉換特徵；<code>Predictor.predict(X)</code> 產出預測類別或數值。",
    "snippet": "from sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\n# 1. Transformer (特徵轉換器)\nscaler = StandardScaler()\nscaler.fit(X_train)                  # 學習均值與標準差\nX_train_scaled = scaler.transform(X_train)  # 轉換數據\n\n# 2. Predictor (預測模型)\nmodel = LogisticRegression()\nmodel.fit(X_train_scaled, y_train)   # 訓練權重參數\npreds = model.predict(X_test_scaled) # 預測離散標籤\nprobs = model.predict_proba(X_test_scaled) # 預測機率分佈",
    "confusing": [
      "分類模型中，<code>predict()</code> 直接給出 0 或 1 類別；若後續要計算 <b>ROC-AUC</b>，必須使用 <code>predict_proba(X_test)[:, 1]</code> 獲取正例預測機率！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">fit(): 學習特徵參數 (μ, σ, W)</span>\n        <span style=\"color:#059669;\">transform(): 數值轉換</span>\n        <span style=\"color:#d97706;\">predict(): 輸出目標預測</span>\n      </div>\n    ",
    "keywords": [
      "scikit-learn",
      "fit",
      "transform",
      "predict",
      "predict_proba",
      "Estimator",
      "Transformer"
    ]
  },
  {
    "id": "code_skl_02",
    "category": "sklearn",
    "code": "SKLEARN-02",
    "title": "fit_transform 的神聖鐵律：測試集絕對嚴禁 fit！",
    "summary": "特徵工程鐵律：只能在訓練集呼叫 <code>fit_transform(X_train)</code>；對測試集<b>只能呼叫 <code>transform(X_test)</code></b>，否則會發生嚴重的資料洩漏 (Data Leakage)。",
    "snippet": "from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\n\n# ✅ 正確標準寫法\nX_train_scaled = scaler.fit_transform(X_train) # 學習訓練集均值 μ_train 並縮放\nX_test_scaled  = scaler.transform(X_test)      # 嚴格套用 μ_train 縮放測試集！\n\n# ❌ 致命錯誤寫法 (資料洩漏 Data Leakage)\n# X_test_scaled = scaler.fit_transform(X_test) # 慘劇！偷看了測試集的均值，破壞評估真實性",
    "confusing": [
      "若在測試集上執行 <code>fit_transform</code>，模型會偷偷學到測試集的均值與標準差，使上線前的線下評估分數虛高，上線後實測慘跌！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>神聖鐵律</b>：訓練集 <code>fit_transform()</code>，測試集<b>只能 <code>transform()</code></b>\n      </div>\n    ",
    "keywords": [
      "fit_transform",
      "transform",
      "資料洩漏",
      "Data Leakage",
      "StandardScaler",
      "測試集防護"
    ]
  },
  {
    "id": "code_skl_03",
    "category": "sklearn",
    "code": "SKLEARN-03",
    "title": "特徵縮放三劍客：StandardScaler vs MinMaxScaler vs RobustScaler",
    "summary": "<b>StandardScaler</b> 轉為均值 0 標準差 1（適用線性模型、SVM、PCA）；<b>MinMaxScaler</b> 縮放至 [0, 1]（適用影像像素）；<b>RobustScaler</b> 利用中位數與 IQR，抗極端異常值干擾能力最強。",
    "snippet": "from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler\n\n# 1. 標準化 (Z-score): (x - mean) / std\nscaler_std = StandardScaler()\n\n# 2. 最小最大歸一化: (x - min) / (max - min)\nscaler_minmax = MinMaxScaler(feature_range=(0, 1))\n\n# 3. 穩健縮放 (抗離群值): (x - median) / IQR\nscaler_robust = RobustScaler()",
    "confusing": [
      "當特徵中包含<b>極端離群值 (Outliers)</b> 時，<code>MinMaxScaler</code> 會被極大值壓縮導致大部分正常值擠在 0 附近；<code>StandardScaler</code> 也會被離群值拉偏均值；此時<b>唯一推薦首選 <code>RobustScaler</code></b>！",
      "以決策樹為基底的演算法（Random Forest, XGBoost）對單調縮放不敏感，<b>無需特徵縮放</b>"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>Standard</b><br>Z-score (μ=0, σ=1)</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>MinMax</b><br>區間壓至 0~1</div>\n        <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>Robust</b><br>中位數+IQR (抗異常)</div>\n      </div>\n    ",
    "keywords": [
      "StandardScaler",
      "MinMaxScaler",
      "RobustScaler",
      "特徵縮放",
      "Z-Score",
      "離群值抗性"
    ]
  },
  {
    "id": "code_skl_04",
    "category": "sklearn",
    "code": "SKLEARN-04",
    "title": "類別編碼：OneHotEncoder (handle_unknown='ignore') 避坑",
    "summary": "<code>OneHotEncoder</code> 適用無順序類別特徵；必須設置 <code>handle_unknown='ignore'</code>，確保<b>測試集出現訓練集沒見過的新類別時，不會直接噴 Exception 崩潰</b>。",
    "snippet": "from sklearn.preprocessing import OneHotEncoder\nimport pandas as pd\n\nX_train = pd.DataFrame({'color': ['red', 'blue', 'green']})\nX_test  = pd.DataFrame({'color': ['red', 'yellow']})  # yellow 為全新未見類別！\n\n# handle_unknown='ignore': 遇到未見類別時全部編碼為 0，sparse_output=False 輸出 numpy array\nohe = OneHotEncoder(handle_unknown='ignore', sparse_output=False)\nohe.fit(X_train)\n\nprint(ohe.transform(X_test))  # yellow 自動編為 [0, 0, 0]，不會報錯！",
    "confusing": [
      "pandas 的 <code>pd.get_dummies()</code> 在推論時如果測試集類別不同，欄位數量會不一致，導致模型維度爆炸崩潰；因此工程化上線<b>強烈推薦使用 scikit-learn 的 <code>OneHotEncoder</code></b>！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>必備參數</b>：<code>OneHotEncoder(handle_unknown='ignore')</code> 防測試集未知類別崩潰\n      </div>\n    ",
    "keywords": [
      "OneHotEncoder",
      "handle_unknown",
      "pd.get_dummies",
      "類別特徵",
      "一熱編碼",
      "例外處理"
    ]
  },
  {
    "id": "code_skl_05",
    "category": "sklearn",
    "code": "SKLEARN-05",
    "title": "數據集分割：train_test_split 與 stratify 分層抽樣",
    "summary": "<code>train_test_split</code> 切分訓練與測試集。在分類問題中，<b>必須設定 <code>stratify=y</code></b>，確保訓練集與測試集的各類別正負樣本比例完全一致。",
    "snippet": "from sklearn.model_selection import train_test_split\n\n# stratify=y 保證分割後的類別分佈與原始資料相同\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, \n    test_size=0.2,       # 20% 當測試集\n    random_state=42,     # 固定隨機種子，確保結果可重現\n    stratify=y           # 分層抽樣！防止少數類全被分到某一邊\n)",
    "confusing": [
      "若資料極度不平衡（如欺詐交易僅佔 1%），沒設 <code>stratify=y</code> 可能導致測試集<b>連一個正例樣本都沒有</b>，導致評估徹底失真！",
      "對於時間序列資料，絕對不能用 <code>train_test_split(shuffle=True)</code>，請改用前向切分或 <code>TimeSeriesSplit</code>"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">test_size=0.2：八二法則分割</span>\n        <span style=\"color:#dc2626;\">stratify=y：各類別比例完美對齊</span>\n      </div>\n    ",
    "keywords": [
      "train_test_split",
      "stratify",
      "random_state",
      "分層抽樣",
      "不平衡數據",
      "可重現性"
    ]
  },
  {
    "id": "code_skl_06",
    "category": "sklearn",
    "code": "SKLEARN-06",
    "title": "機器學習管道 Pipeline 與 ColumnTransformer 整合",
    "summary": "<code>Pipeline</code> 將特徵預處理、特徵選擇與模型封裝為單一物件。配合 <code>ColumnTransformer</code> 可針對數值與類別欄位分別執行不同轉換，<b>徹底杜絕交叉驗證資料外洩</b>。",
    "snippet": "from sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.ensemble import RandomForestClassifier\n\n# 1. 欄位分類轉換器\npreprocessor = ColumnTransformer(\n    transformers=[\n        ('num', StandardScaler(), ['age', 'fare']),\n        ('cat', OneHotEncoder(handle_unknown='ignore'), ['embarked', 'sex'])\n    ])\n\n# 2. 封裝完整 Pipeline\npipeline = Pipeline(steps=[\n    ('preprocessor', preprocessor),\n    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))\n])\n\n# 一行完成訓練與評估！\npipeline.fit(X_train, y_train)\nscore = pipeline.score(X_test, y_test)",
    "confusing": [
      "<b>最高級工程規範</b>：如果先對全數據做 StandardScaler 再做 K-Fold，每一摺的驗證集資訊都已洩漏給標準化均值！包入 <code>Pipeline</code> 才能確保交叉驗證每一摺都獨立 fit！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>Pipeline 封裝鏈</b>：數值縮放 + 類別編碼 ➔ 模型預測 (防洩漏標準架構)\n      </div>\n    ",
    "keywords": [
      "Pipeline",
      "ColumnTransformer",
      "交叉驗證洩漏",
      "預處理封裝",
      "工程化最佳實踐"
    ]
  },
  {
    "id": "code_skl_07",
    "category": "sklearn",
    "code": "SKLEARN-07",
    "title": "模型評估四寶：混淆矩陣與 classification_report",
    "summary": "分類評估指標集合。<code>classification_report()</code> 一鍵列印各類別之 Precision, Recall, F1-score 及 Macro/Weighted 平均；<code>confusion_matrix</code> 產出混淆矩陣。",
    "snippet": "from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score\n\ny_pred = model.predict(X_test)\ny_prob = model.predict_proba(X_test)[:, 1]\n\n# 1. 混淆矩陣 (TN, FP / FN, TP)\ncm = confusion_matrix(y_test, y_pred)\n\n# 2. 綜合評估報表 (Precision, Recall, F1)\nprint(classification_report(y_test, y_pred))\n\n# 3. ROC-AUC (需傳入預測機率而非標籤！)\nauc = roc_auc_score(y_test, y_prob)",
    "confusing": [
      "<b>高頻考題常錯點</b>：<code>roc_auc_score(y_test, y_prob)</code> 第二個參數必須是<b>預測機率 (0~1 浮點數)</b>，絕不能傳入 0/1 的離散類別 <code>y_pred</code>，否則 ROC 曲線會退化成兩段折線！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">confusion_matrix: 誤差分佈</span>\n        <span style=\"color:#059669;\">classification_report: 精度綜合報表</span>\n      </div>\n    ",
    "keywords": [
      "classification_report",
      "confusion_matrix",
      "roc_auc_score",
      "Precision",
      "Recall",
      "F1"
    ]
  },
  {
    "id": "code_skl_08",
    "category": "sklearn",
    "code": "SKLEARN-08",
    "title": "超參數搜尋調校：GridSearchCV vs RandomizedSearchCV",
    "summary": "<code>GridSearchCV</code> 窮舉所有參數網格；<code>RandomizedSearchCV</code> 在指定分佈中隨機抽樣 <code>n_iter</code> 組測試（效率高）。支援多核心 <code>n_jobs=-1</code> 並內建交叉驗證。",
    "snippet": "from sklearn.model_selection import GridSearchCV, RandomizedSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\nparam_grid = {\n    'n_estimators': [50, 100, 200],\n    'max_depth': [5, 10, None],\n    'min_samples_split': [2, 5]\n}\n\n# n_jobs=-1 使用全部 CPU 核心並行加速\ngrid = GridSearchCV(\n    estimator=RandomForestClassifier(random_state=42),\n    param_grid=param_grid,\n    cv=5,                 # 5 折交叉驗證\n    scoring='f1_macro',   # 指定優化指標\n    n_jobs=-1\n)\n\ngrid.fit(X_train, y_train)\nprint(\"最佳參數:\", grid.best_params_)\nprint(\"最佳分數:\", grid.best_score_)\nbest_model = grid.best_estimator_",
    "confusing": [
      "若超參數維度過多（如 5 個參數各有 4 種值，共 \\(4^5=1024\\) 種組合），網格搜尋會運行數天；此時應改用 <code>RandomizedSearchCV(n_iter=30)</code> 快速收斂"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>GridSearch</b><br>全空間窮舉 (耗時)</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>RandomSearch</b><br>隨機採樣 (快速有效)</div>\n      </div>\n    ",
    "keywords": [
      "GridSearchCV",
      "RandomizedSearchCV",
      "超參數調校",
      "best_params_",
      "cv",
      "n_jobs"
    ]
  },
  {
    "id": "code_skl_09",
    "category": "sklearn",
    "code": "SKLEARN-09",
    "title": "特徵選擇三大流派實作 (SelectKBest, RFE, SelectFromModel)",
    "summary": "過濾法：<code>SelectKBest</code>（依統計檢定 ANOVA/卡方挑選）；包裝法：<code>RFE</code>（遞迴特徵消除）；嵌入法：<code>SelectFromModel</code>（依 L1 正則或樹特徵重要度閾值挑選）。",
    "snippet": "from sklearn.feature_selection import SelectKBest, f_classif, RFE, SelectFromModel\nfrom sklearn.linear_model import LogisticRegression, Lasso\n\n# 1. 過濾法 (Filter): 挑選 F 統計值前 10 名特徵\nsel_filter = SelectKBest(score_func=f_classif, k=10)\nX_kbest = sel_filter.fit_transform(X_train, y_train)\n\n# 2. 包裝法 (Wrapper): 遞迴剔除權重最小特徵\nsel_rfe = RFE(estimator=LogisticRegression(), n_features_to_select=10)\nsel_rfe.fit(X_train, y_train)\n\n# 3. 嵌入法 (Embedded): 依 Lasso L1 係數稀疏性自動挑特徵\nsel_embed = SelectFromModel(estimator=Lasso(alpha=0.1))\nsel_embed.fit(X_train, y_train)",
    "confusing": [
      "過濾法只看單一特徵與標籤的相關性，<b>忽略特徵之間的交互共線性</b>；包裝法與嵌入法考慮了特徵組合，但運算時間較長"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; gap:4px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>Filter</b><br>SelectKBest</div>\n        <div style=\"background:rgba(168,85,247,0.08); padding:3px; border-radius:4px;\"><b>Wrapper</b><br>RFE 遞迴淘汰</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>Embedded</b><br>SelectFromModel</div>\n      </div>\n    ",
    "keywords": [
      "特徵選擇",
      "SelectKBest",
      "RFE",
      "SelectFromModel",
      "Filter",
      "Wrapper",
      "Embedded"
    ]
  },
  {
    "id": "code_skl_10",
    "category": "sklearn",
    "code": "SKLEARN-10",
    "title": "類別不平衡救星：class_weight='balanced' 參數",
    "summary": "在 <code>LogisticRegression</code>, <code>RandomForestClassifier</code>, <code>SVC</code> 中設置 <code>class_weight='balanced'</code>，演算法會自動依樣本數反比加權損失函數，無需手動過採樣。",
    "snippet": "from sklearn.ensemble import RandomForestClassifier\n\n# balanced 會自動計算權重: n_samples / (n_classes * np.bincount(y))\nclf = RandomForestClassifier(\n    n_estimators=100,\n    class_weight='balanced',  # 核心參數！自動補償少數類別權重\n    random_state=42\n)\n\nclf.fit(X_train, y_train)",
    "confusing": [
      "<code>class_weight='balanced'</code> 完全不修改原始訓練資料（不增加樣本數），因此不會增加訓練記憶體，是解決不平衡最乾淨的做法",
      "若使用自訂權重，可傳入字典：<code>class_weight={0: 1.0, 1: 10.0}</code>（對正例給予 10 倍懲罰）"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>一句搞定不平衡</b>：<code>class_weight='balanced'</code>（免造假數據，自動反比加權）\n      </div>\n    ",
    "keywords": [
      "class_weight",
      "balanced",
      "不平衡數據",
      "少數類加權",
      "損失加權"
    ]
  },
  {
    "id": "code_skl_11",
    "category": "sklearn",
    "code": "SKLEARN-11",
    "title": "降維轉換實作：PCA (非監督) vs LDA (監督)",
    "summary": "<code>PCA</code> 尋找最大變異方向（保留最多資訊，非監督）；<code>LinearDiscriminantAnalysis</code> 尋找類別區分最大方向（監督式，需傳入 <code>y</code>）。",
    "snippet": "from sklearn.decomposition import PCA\nfrom sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA\n\n# 1. PCA: 保留 95% 總變異量 (非監督，只傳 X)\npca = PCA(n_components=0.95)\nX_pca = pca.fit_transform(X_train)\nprint(\"降維後特徵數:\", X_pca.shape[1])\nprint(\"各主成分解釋變異比:\", pca.explained_variance_ratio_)\n\n# 2. LDA: 監督式降維 (必須傳入 y，最多降至 類別數 - 1 維)\nlda = LDA(n_components=1)  # 二分類只能降至 1 維\nX_lda = lda.fit_transform(X_train, y_train)",
    "confusing": [
      "<b>PCA 必備前置作業</b>：PCA 對特徵尺度極度敏感，執行 PCA 之前<b>必須先經過 <code>StandardScaler</code> 標準化</b>！否則數值範圍大的特徵會霸佔所有主成分"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">PCA: fit(X) 非監督 (最大變異)</span>\n        <span style=\"color:#059669;\">LDA: fit(X, y) 監督 (最大類別可分)</span>\n      </div>\n    ",
    "keywords": [
      "PCA",
      "LDA",
      "降維",
      "explained_variance_ratio_",
      "特徵提取",
      "主成分分析"
    ]
  },
  {
    "id": "code_torch_01",
    "category": "pytorch",
    "code": "TORCH-01",
    "title": "Tensor 張量建立、資料型態與裝置搬移 (.to(device))",
    "summary": "PyTorch 核心為 <code>torch.Tensor</code>。神經網路特徵預設為 <code>float32</code>，標籤預設為 <code>int64 (long)</code>。透過 <code>.to(device)</code> 將張量與模型搬移至 GPU (CUDA) 加速。",
    "snippet": "import torch\n\n# 1. 自動偵測 GPU 裝置\ndevice = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\n\n# 2. 建立張量 (注意型態差異)\nx = torch.randn(3, 3, dtype=torch.float32)  # 3x3 常態分佈特徵\ny = torch.tensor([0, 1, 0], dtype=torch.long) # 分類標籤必須為 long！\n\n# 3. 轉移至 GPU\nx = x.to(device)\ny = y.to(device)",
    "confusing": [
      "<b>PyTorch 最經典型態錯誤</b>：<code>CrossEntropyLoss</code> 要求標籤 \\(y\\) 必須是 <code>torch.long</code>（64 位元整數），若傳入 float 會噴 <code>RuntimeError: expected scalar type Long but found Float</code>！",
      "運算時，所有 Tensor 與模型<b>必須處於同一裝置</b>（不能一個在 CPU、一個在 CUDA）"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>GPU 部署範本</b>：<code>device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')</code>\n      </div>\n    ",
    "keywords": [
      "pytorch",
      "tensor",
      "device",
      "cuda",
      "float32",
      "long",
      "CrossEntropyLoss型態"
    ]
  },
  {
    "id": "code_torch_02",
    "category": "pytorch",
    "code": "TORCH-02",
    "title": "Autograd 自動求導機制與 loss.backward()",
    "summary": "設定 <code>requires_grad=True</code> 的 Tensor 會被計算圖追蹤其所有歷史運算。呼叫 <code>loss.backward()</code> 即自動利用鏈式法則求導，梯度存放在 <code>.grad</code> 屬性中。",
    "snippet": "x = torch.tensor(2.0, requires_grad=True)\n\n# 定義前向運算: y = x^2 + 3x + 1\ny = x**2 + 3*x + 1\n\n# 反向傳播自動求導 (dy/dx = 2x + 3 = 2*2 + 3 = 7)\ny.backward()\n\nprint(\"x 的梯度:\", x.grad)  # tensor(7.)",
    "confusing": [
      "PyTorch 預設<b>會累積梯度 (Accumulate Gradients)</b>！每次在反向傳播前，必須呼叫 <code>optimizer.zero_grad()</code> 清空上一步累積的梯度，否則梯度會越加越大導致模型發散！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">requires_grad=True: 開啟計算圖追蹤</span>\n        <span style=\"color:#dc2626;\">loss.backward(): 反向求導存入 .grad</span>\n      </div>\n    ",
    "keywords": [
      "Autograd",
      "requires_grad",
      "backward",
      "grad",
      "計算圖",
      "鏈式法則",
      "zero_grad"
    ]
  },
  {
    "id": "code_torch_03",
    "category": "pytorch",
    "code": "TORCH-03",
    "title": "Tensor 與 NumPy 互轉三部曲 (detach, cpu, numpy)",
    "summary": "從 NumPy 建立 Tensor 用 <code>torch.from_numpy()</code>（共享記憶體）；將帶有梯度的 Tensor 轉回 NumPy 必備三部曲：<code>.detach().cpu().numpy()</code>。",
    "snippet": "import numpy as np\n\n# 1. NumPy ➔ Tensor (共用底層記憶體，速度極快)\narr = np.array([1.0, 2.0, 3.0])\nt = torch.from_numpy(arr)\n\n# 2. Tensor ➔ NumPy (三部曲)\n# 假設 t_gpu 在 GPU 上且有計算圖追蹤 (requires_grad=True)\nt_gpu = torch.tensor([4.0, 5.0], requires_grad=True, device='cuda' if torch.cuda.is_available() else 'cpu')\n\n# 脫離計算圖 ➔ 搬回 CPU ➔ 轉回 NumPy\narr_out = t_gpu.detach().cpu().numpy()",
    "confusing": [
      "若直接對追蹤梯度的 GPU Tensor 呼叫 <code>.numpy()</code>，會報錯 <code>RuntimeError: Can't call numpy() on Tensor that requires grad. Use tensor.detach().numpy() instead.</code>",
      "<b>三步口訣</b>：<b>detach()</b> 斷開計算圖、<b>cpu()</b> 移回記憶體、<b>numpy()</b> 轉回陣列！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>轉回 NumPy 鐵三角</b>：<code>tensor.detach().cpu().numpy()</code>（缺一不可！）\n      </div>\n    ",
    "keywords": [
      "from_numpy",
      "detach",
      "cpu",
      "numpy",
      "記憶體共享",
      "RuntimeError"
    ]
  },
  {
    "id": "code_torch_04",
    "category": "pytorch",
    "code": "TORCH-04",
    "title": "張量維度變換：squeeze, unsqueeze, view, permute",
    "summary": "<code>squeeze()</code> 移除長度為 1 的多餘維度；<code>unsqueeze(dim)</code> 插入新維度；<code>view()</code> 改變形狀（需記憶體連續）；<code>permute()</code> 重排維度順序（如轉置影像通道）。",
    "snippet": "x = torch.randn(28, 28)  # 單張灰階圖片 (H, W)\n\n# 1. 擴展維度增加 Channel 與 Batch: (28, 28) ➔ (1, 1, 28, 28)\nx = x.unsqueeze(0).unsqueeze(0)  # shape: (1, 1, 28, 28)\n\n# 2. 移除所有長度為 1 的維度 ➔ (28, 28)\nx_squeezed = x.squeeze()\n\n# 3. 展平 (Flatten) 為二維向量給全連接層\nx_flat = x.view(x.size(0), -1)   # shape: (1, 784)\n\n# 4. permute 重排維度：從 PyTorch (B, C, H, W) 轉為 Matplotlib (B, H, W, C)\nimg_tensor = torch.randn(1, 3, 32, 32)\nimg_plt = img_tensor.permute(0, 2, 3, 1) # shape: (1, 32, 32, 3)",
    "confusing": [
      "<code>view()</code> 要求記憶體必須連續；若先做過 <code>transpose</code> 或 <code>permute</code>，直接呼叫 <code>view()</code> 會報錯，必須先呼叫 <code>.contiguous().view()</code> 或改用 <code>reshape()</code>"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">unsqueeze(0): 增加 Batch 維</span>\n        <span style=\"color:#059669;\">permute: 通道置換 (NCHW ➔ NHWC)</span>\n      </div>\n    ",
    "keywords": [
      "squeeze",
      "unsqueeze",
      "view",
      "permute",
      "contiguous",
      "維度變換",
      "Batch維度"
    ]
  },
  {
    "id": "code_torch_05",
    "category": "pytorch",
    "code": "TORCH-05",
    "title": "自訂神經網路模組：繼承 nn.Module 核心範式",
    "summary": "PyTorch 所有模型皆繼承 <code>nn.Module</code>。在 <code>__init__()</code> 中呼叫 <code>super()</code> 並定義子層結構；在 <code>forward(x)</code> 中編寫前向傳播邏輯。",
    "snippet": "import torch.nn as nn\nimport torch.nn.functional as F\n\nclass MLPClassifier(nn.Module):\n    def __init__(self, in_features, hidden_dim, num_classes):\n        super(MLPClassifier, self).__init__()\n        self.fc1 = nn.Linear(in_features, hidden_dim)\n        self.dropout = nn.Dropout(0.3)\n        self.fc2 = nn.Linear(hidden_dim, num_classes)\n        \n    def forward(self, x):\n        # x 形狀: (batch_size, in_features)\n        x = F.relu(self.fc1(x))\n        x = self.dropout(x)\n        logits = self.fc2(x)  # 輸出 Raw Logits (不加 Softmax！)\n        return logits\n\nmodel = MLPClassifier(in_features=784, hidden_dim=128, num_classes=10)",
    "confusing": [
      "<b>千萬別在 forward 中加 Softmax！</b> 當搭配 <code>nn.CrossEntropyLoss</code> 時，PyTorch 內部已經自動整合了 <code>LogSoftmax + NLLLoss</code>；若自己手動加 Softmax，等同於做了兩次 Softmax，會使模型收斂極差！",
      "推論呼叫模型時，直接使用 <code>model(x)</code>，<b>絕不能手動呼叫 <code>model.forward(x)</code></b>（直接呼叫會略過 Hook 機制）"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(168,85,247,0.08); border:1px solid rgba(168,85,247,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>nn.Module 兩大要素</b>：<code>__init__()</code> 定義層 | <code>forward()</code> 串接計算圖\n      </div>\n    ",
    "keywords": [
      "nn.Module",
      "__init__",
      "forward",
      "nn.Linear",
      "Softmax避坑",
      "CrossEntropyLoss"
    ]
  },
  {
    "id": "code_torch_06",
    "category": "pytorch",
    "code": "TORCH-06",
    "title": "資料載入神器：Dataset 與 DataLoader 實作",
    "summary": "<code>Dataset</code> 負責樣本與標籤的個別解碼（實作 <code>__len__</code> 與 <code>__getitem__</code>）；<code>DataLoader</code> 負責自動分批 (Batching)、洗牌 (Shuffle) 與多進程並行載入。",
    "snippet": "from torch.utils.data import Dataset, DataLoader\n\nclass CustomDataset(Dataset):\n    def __init__(self, features, labels):\n        self.features = torch.tensor(features, dtype=torch.float32)\n        self.labels = torch.tensor(labels, dtype=torch.long)\n        \n    def __len__(self):\n        return len(self.features)\n        \n    def __getitem__(self, idx):\n        return self.features[idx], self.labels[idx]\n\n# 實體化與 DataLoader 包裝\ndataset = CustomDataset(X_data, y_data)\nloader = DataLoader(\n    dataset, \n    batch_size=32, \n    shuffle=True,       # 訓練集必須洗牌！驗證/測試集設為 False\n    num_workers=2,      # 多進程預載\n    pin_memory=True     # GPU 傳輸加速\n)",
    "confusing": [
      "訓練集 <code>shuffle=True</code>；但<b>驗證集與測試集的 <code>shuffle</code> 必須設為 <code>False</code></b>，確保評估順序一致且可對照！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">Dataset: 定義單筆 (X, y)</span>\n        <span style=\"color:#059669;\">DataLoader: 自動 Batch + 洗牌 + 多執行緒</span>\n      </div>\n    ",
    "keywords": [
      "Dataset",
      "DataLoader",
      "__getitem__",
      "__len__",
      "batch_size",
      "shuffle",
      "num_workers"
    ]
  },
  {
    "id": "code_torch_07",
    "category": "pytorch",
    "code": "TORCH-07",
    "title": "PyTorch 訓練標準四部曲迴圈",
    "summary": "PyTorch 訓練的核心心法四步驟：(1) <code>optimizer.zero_grad()</code> 歸零梯度 ➔ (2) <code>outputs = model(inputs)</code> 前向傳播 ➔ (3) <code>loss.backward()</code> 反向傳導 ➔ (4) <code>optimizer.step()</code> 更新權重。",
    "snippet": "criterion = nn.CrossEntropyLoss()\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\n\nmodel.train()  # 切換為訓練模式 (開啟 Dropout 與 BatchNorm)\n\nfor epoch in range(num_epochs):\n    for inputs, labels in train_loader:\n        inputs, labels = inputs.to(device), labels.to(device)\n        \n        # 1. 梯度歸零\n        optimizer.zero_grad()\n        \n        # 2. 前向傳播\n        outputs = model(inputs)\n        loss = criterion(outputs, labels)\n        \n        # 3. 反向傳播計算梯度\n        loss.backward()\n        \n        # 4. 優化器更新權重\n        optimizer.step()",
    "confusing": [
      "<b>考題經典口訣</b>：<b>零、前、反、步</b>！順序絕對不能錯：<code>zero_grad()</code> ➔ 前向算 loss ➔ <code>backward()</code> ➔ <code>step()</code>"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>PyTorch 訓練四重奏</b>：zero_grad() ➔ model(x) ➔ backward() ➔ step()\n      </div>\n    ",
    "keywords": [
      "訓練迴圈",
      "zero_grad",
      "backward",
      "step",
      "optimizer",
      "CrossEntropyLoss",
      "model.train"
    ]
  },
  {
    "id": "code_torch_08",
    "category": "pytorch",
    "code": "TORCH-08",
    "title": "模型評估防護雙壁：model.eval() 與 torch.no_grad()",
    "summary": "在驗證集或測試集進行推論評估時，必須同時搭配 <code>model.eval()</code>（凍結 Dropout 與 BatchNorm 行為）以及 <code>with torch.no_grad():</code>（關閉計算圖記憶體與求導），大幅節省顯存並提速。",
    "snippet": "model.eval()  # 1. 關閉 Dropout 隨機丟棄，固定 BatchNorm 均值方差\n\ntotal_correct = 0\ntotal_samples = 0\n\nwith torch.no_grad():  # 2. 停用 Autograd 求導，避免顯存暴增爆炸 (OOM)\n    for inputs, labels in val_loader:\n        inputs, labels = inputs.to(device), labels.to(device)\n        outputs = model(inputs)\n        preds = torch.argmax(outputs, dim=1)\n        total_correct += (preds == labels).sum().item()\n        total_samples += labels.size(0)\n\naccuracy = total_correct / total_samples",
    "confusing": [
      "<code>model.eval()</code> 與 <code>torch.no_grad()</code> <b>功能完全不同，不能互相取代</b>！<code>eval()</code> 改變層的內部邏輯（如 Dropout 不丟棄）；<code>no_grad()</code> 停止記錄梯度歷史節省記憶體，兩者必須同時使用！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">model.eval(): 凍結 Dropout/BN 行為</span>\n        <span style=\"color:#059669;\">with torch.no_grad(): 關閉計算圖省顯存</span>\n      </div>\n    ",
    "keywords": [
      "model.eval",
      "torch.no_grad",
      "推論評估",
      "Dropout凍結",
      "OOM防禦",
      "驗證迴圈"
    ]
  },
  {
    "id": "code_torch_09",
    "category": "pytorch",
    "code": "TORCH-09",
    "title": "模型權重保存與載入：state_dict 推薦規範",
    "summary": "PyTorch 官方強烈推薦<b>只保存模型的權重狀態字典 <code>state_dict()</code></b>，而非保存整個 Python 物件（避免因為程式碼重構或路徑改變導致載入失敗）。",
    "snippet": "# 1. 保存模型權重 (推薦副檔名 .pth 或 .pt)\ntorch.save(model.state_dict(), 'best_model.pth')\n\n# 2. 載入模型權重\nmodel = MLPClassifier(784, 128, 10)  # 需先建立相同架構的模型實體\nmodel.load_state_dict(torch.load('best_model.pth', map_location=device))\nmodel.to(device)\nmodel.eval()  # 載入後記得切換到 eval 模式！",
    "confusing": [
      "載入時加上 <code>map_location=device</code> 非常關鍵！若模型是在 GPU 上訓練並保存，當在沒有 GPU 的 CPU 機器上測試時，沒有指定 <code>map_location='cpu'</code> 會直接引發 CUDA 錯誤崩潰！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>官方推薦</b>：<code>torch.save(model.state_dict(), 'path.pth')</code> 僅存參數最乾淨\n      </div>\n    ",
    "keywords": [
      "state_dict",
      "torch.save",
      "torch.load",
      "map_location",
      "權重保存",
      "跨裝置載入"
    ]
  },
  {
    "id": "code_torch_10",
    "category": "pytorch",
    "code": "TORCH-10",
    "title": "梯度裁剪 (Gradient Clipping) 防範梯度爆炸",
    "summary": "在訓練 RNN、LSTM 或深層 Transformer 時，反向傳播的梯度極易發生連乘爆炸。透過 <code>torch.nn.utils.clip_grad_norm_()</code> 限制梯度的 L2 範數最大值。",
    "snippet": "# 在 loss.backward() 之後、optimizer.step() 之前插入！\nloss.backward()\n\n# 將所有參數的梯度整體 L2 範數限制在 1.0 以內\ntorch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)\n\noptimizer.step()",
    "confusing": [
      "<b>梯度裁剪放置位置</b>：必須嚴格放在 <code>loss.backward()</code> <b>之後</b>（此時才有梯度產出），且在 <code>optimizer.step()</code> <b>之前</b>（裁剪完畢後再更新參數）！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>梯度裁剪位置</b>：<code>backward() ➔ clip_grad_norm_() ➔ optimizer.step()</code>\n      </div>\n    ",
    "keywords": [
      "梯度裁剪",
      "clip_grad_norm_",
      "梯度爆炸",
      "RNN訓練",
      "max_norm"
    ]
  },
  {
    "id": "code_torch_11",
    "category": "pytorch",
    "code": "TORCH-11",
    "title": "學習率調度器：StepLR 與 CosineAnnealingLR",
    "summary": "訓練過程中動態衰減學習率。<code>lr_scheduler.StepLR</code> 固定每隔一定 epoch 衰減；<code>CosineAnnealingLR</code> 依餘弦曲線平滑遞減。",
    "snippet": "from torch.optim.lr_scheduler import CosineAnnealingLR\n\noptimizer = torch.optim.Adam(model.parameters(), lr=1e-3)\n# 餘弦退火調度器: T_max 為半週期 Epoch 數\nscheduler = CosineAnnealingLR(optimizer, T_max=50, eta_min=1e-6)\n\nfor epoch in range(50):\n    train_one_epoch(...)\n    val_loss = validate(...)\n    \n    # 每個 Epoch 結束後更新學習率\n    scheduler.step()",
    "confusing": [
      "PyTorch 1.1.0 之後官方規範：<code>scheduler.step()</code> <b>必須在 <code>optimizer.step()</code> 之後呼叫</b>，通常放在每個 Epoch 的尾端（除非是 OneCycleLR 這類依 Batch 更新的調度器）"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">StepLR: 階梯式直接砍半</span>\n        <span style=\"color:#059669;\">CosineAnnealingLR: 餘弦曲線平滑降溫</span>\n      </div>\n    ",
    "keywords": [
      "lr_scheduler",
      "CosineAnnealingLR",
      "StepLR",
      "學習率調度",
      "scheduler.step"
    ]
  },
  {
    "id": "code_keras_01",
    "category": "keras",
    "code": "KERAS-01",
    "title": "模型建構兩大流派：Sequential vs Functional API",
    "summary": "<b>Sequential</b> 單向線性層疊加（適合標準前饋網路）；<b>Functional API</b> 支援多輸入、多輸出與殘差跳躍連接（如 \\(y = \\text{layer}(x)\\)），靈活性最高。",
    "snippet": "from tensorflow import keras\nfrom tensorflow.keras import layers\n\n# 1. Sequential API (簡單線性堆疊)\nseq_model = keras.Sequential([\n    layers.Dense(64, activation='relu', input_shape=(20,)),\n    layers.Dense(1, activation='sigmoid')\n])\n\n# 2. Functional API (函數式調用，適合複雜架構與 ResNet 跳躍連接)\ninputs = keras.Input(shape=(20,))\nx = layers.Dense(64, activation='relu')(inputs)\nx = layers.Dropout(0.3)(x)\noutputs = layers.Dense(1, activation='sigmoid')(x)\nfunc_model = keras.Model(inputs=inputs, outputs=outputs)",
    "confusing": [
      "若需要實作殘差網路 (ResNet) 的 <code>layers.add([x, residual])</code> 或多分支網路，<b>Sequential 完全做不到</b>，必須使用 Functional API 或 Model Subclassing"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>Sequential</b><br>單路直通堆疊</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>Functional</b><br>任意拓撲與跳躍連接</div>\n      </div>\n    ",
    "keywords": [
      "keras",
      "tensorflow",
      "Sequential",
      "Functional API",
      "keras.Input",
      "Model"
    ]
  },
  {
    "id": "code_keras_02",
    "category": "keras",
    "code": "KERAS-02",
    "title": "模型編譯三要素：model.compile (Optimizer, Loss, Metrics)",
    "summary": "在訓練前必須呼叫 <code>model.compile()</code> 設定優化器（如 Adam）、損失函數（如 crossentropy）與監控指標（如 accuracy）。",
    "snippet": "model.compile(\n    optimizer=keras.optimizers.Adam(learning_rate=0.001),\n    loss='sparse_categorical_crossentropy',  # 標籤為整數時\n    metrics=['accuracy', keras.metrics.AUC(name='auc')]\n)",
    "confusing": [
      "<b>二分類 vs 多分類編譯對照</b>：<br>二分類：輸出層 <code>Dense(1, activation='sigmoid')</code> ➔ loss 必設 <code>'binary_crossentropy'</code><br>多分類：輸出層 <code>Dense(C, activation='softmax')</code> ➔ loss 設 <code>'categorical_crossentropy'</code> 或 <code>'sparse_categorical_crossentropy'</code>"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>二分類</b>: sigmoid + binary_crossentropy | <b>多分類</b>: softmax + categorical_crossentropy\n      </div>\n    ",
    "keywords": [
      "model.compile",
      "optimizer",
      "loss",
      "metrics",
      "binary_crossentropy",
      "Adam"
    ]
  },
  {
    "id": "code_keras_03",
    "category": "keras",
    "code": "KERAS-03",
    "title": "損失函數巨坑：categorical vs sparse_categorical",
    "summary": "若真實標籤 \\(y\\) 是一熱編碼 (One-Hot，如 <code>[0, 1, 0]</code>)，必須使用 <code>categorical_crossentropy</code>；若標籤是<b>純整數 (Integer，如 <code>1</code>)</b>，必須使用 <code>sparse_categorical_crossentropy</code>！",
    "snippet": "# 情境 A: 標籤 y 為整數 [0, 2, 1, 0]\nmodel.compile(loss='sparse_categorical_crossentropy', optimizer='adam')\n\n# 情境 B: 標籤 y 經過 to_categorical 轉為 One-Hot [[1,0,0], [0,0,1]]\n# from tensorflow.keras.utils import to_categorical\n# y_train = to_categorical(y_train)\nmodel.compile(loss='categorical_crossentropy', optimizer='adam')",
    "confusing": [
      "<b>Keras 最常崩潰 Bug</b>：標籤是整數 <code>[0, 1, 2]</code>，卻選了 <code>categorical_crossentropy</code>，會噴 <code>ValueError: Shapes (None, 1) and (None, 3) are incompatible</code>！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">sparse_categorical: 標籤為整數 0, 1, 2</span>\n        <span style=\"color:#059669;\">categorical: 標籤為 One-Hot 向量</span>\n      </div>\n    ",
    "keywords": [
      "categorical_crossentropy",
      "sparse_categorical_crossentropy",
      "to_categorical",
      "維度不符",
      "ValueError"
    ]
  },
  {
    "id": "code_keras_04",
    "category": "keras",
    "code": "KERAS-04",
    "title": "CNN 視覺模型經典堆疊架構 (Conv2D, Pooling, Flatten)",
    "summary": "卷積神經網路在 Keras 中的標準積木：<code>Conv2D(filters, kernel_size, padding)</code> 擷取空間特徵 ➔ <code>MaxPooling2D</code> 降維下採樣 ➔ <code>Flatten</code> 展平 ➔ <code>Dense</code> 分類。",
    "snippet": "model = keras.Sequential([\n    # 第一層需指定 input_shape (H, W, C)\n    layers.Conv2D(32, (3, 3), activation='relu', padding='same', input_shape=(28, 28, 1)),\n    layers.MaxPooling2D((2, 2)),  # 尺寸減半 ➔ 14x14\n    \n    layers.Conv2D(64, (3, 3), activation='relu', padding='same'),\n    layers.MaxPooling2D((2, 2)),  # 尺寸再減半 ➔ 7x7\n    \n    layers.Flatten(),             # 展平為 7*7*64 = 3136 維\n    layers.Dense(128, activation='relu'),\n    layers.Dropout(0.5),          # 防過擬合\n    layers.Dense(10, activation='softmax')\n])",
    "confusing": [
      "<b>輸入形狀格式 (Channels Last)</b>：Keras 預設格式為 <code>(Height, Width, Channels)</code>，例如 <code>(28, 28, 1)</code>；而 PyTorch 預設為 <code>(Channels, Height, Width)</code> 即 <code>(1, 28, 28)</code>，切勿搞混！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>CNN 尺寸歷程</b>：(28, 28, 1) ➔ Pool(14, 14, 32) ➔ Pool(7, 7, 64) ➔ Flatten(3136)\n      </div>\n    ",
    "keywords": [
      "Conv2D",
      "MaxPooling2D",
      "Flatten",
      "Dense",
      "Dropout",
      "Channels Last",
      "CNN架構"
    ]
  },
  {
    "id": "code_keras_05",
    "category": "keras",
    "code": "KERAS-05",
    "title": "早停與最佳模型保存雙雄：Callbacks 實作",
    "summary": "<code>EarlyStopping</code> 監控驗證集損失，連續 \\(P\\) 輪不改善自動停止並回滾權重；<code>ModelCheckpoint</code> 自動將歷史最佳權重保存至磁碟。",
    "snippet": "from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint\n\nmy_callbacks = [\n    # 1. 早停法：容忍 5 個 epoch 不改善則中斷，並自動恢復最佳權重\n    EarlyStopping(\n        monitor='val_loss',\n        patience=5,\n        restore_best_weights=True  # 核心！確保訓練結束保留最佳狀態\n    ),\n    # 2. 最佳模型存檔\n    ModelCheckpoint(\n        filepath='best_model.keras',\n        monitor='val_loss',\n        save_best_only=True        # 只在驗證損失創新低時覆蓋保存\n    )\n]\n\nhistory = model.fit(X_train, y_train, validation_split=0.2, epochs=50, callbacks=my_callbacks)",
    "confusing": [
      "若忘記加上 <code>restore_best_weights=True</code>，早停停止當下的模型權重是「過擬合反彈後的較差權重」，而非歷史最低損失權重！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">EarlyStopping: patience=5 + restore_best_weights</span>\n        <span style=\"color:#059669;\">ModelCheckpoint: save_best_only=True</span>\n      </div>\n    ",
    "keywords": [
      "Callbacks",
      "EarlyStopping",
      "ModelCheckpoint",
      "val_loss",
      "restore_best_weights",
      "save_best_only"
    ]
  },
  {
    "id": "code_keras_06",
    "category": "keras",
    "code": "KERAS-06",
    "title": "自適應學習率衰減：ReduceLROnPlateau",
    "summary": "當指標進入高原期停滯時，自動動態將學習率打折（乘以 factor），輔助模型跳出局部鞍點或細緻收斂至平坦極小值。",
    "snippet": "from tensorflow.keras.callbacks import ReduceLROnPlateau\n\nlr_reducer = ReduceLROnPlateau(\n    monitor='val_loss',\n    factor=0.2,      # 每次衰減為原本的 20% (lr = lr * 0.2)\n    patience=3,      # 3 個 epoch 沒改善就觸發\n    min_lr=1e-6,     # 學習率下限\n    verbose=1\n)",
    "confusing": [
      "<code>ReduceLROnPlateau</code> 的 <code>patience</code> 應該<b>小於</b> <code>EarlyStopping</code> 的 <code>patience</code>（例如學習率衰減設 3，早停設 7），給予模型在降低學習率後重獲改善的機會"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>調度心法</b>：ReduceLR (patience=3) 先降溫 ➔ EarlyStopping (patience=7) 再停機\n      </div>\n    ",
    "keywords": [
      "ReduceLROnPlateau",
      "學習率衰減",
      "高原期",
      "factor",
      "patience",
      "min_lr"
    ]
  },
  {
    "id": "code_keras_07",
    "category": "keras",
    "code": "KERAS-07",
    "title": "遷移學習 (Transfer Learning) 與骨幹凍結流程",
    "summary": "載入預訓練模型（如 ResNet50、MobileNetV2），凍結骨幹網路權重 <code>base_model.trainable = False</code>，僅訓練自訂分類頂層，大幅節省算力並解決小樣本過擬合。",
    "snippet": "from tensorflow.keras.applications import ResNet50\n\n# 1. 載入 ImageNet 預訓練骨幹 (不含原本 1000 類全連接頂層)\nbase_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))\n\n# 2. 凍結骨幹權重！\nbase_model.trainable = False\n\n# 3. 拼接自訂任務頂層\ninputs = keras.Input(shape=(224, 224, 3))\nx = base_model(inputs, training=False)  # 確保 BN 處於推論模式\nx = layers.GlobalAveragePooling2D()(x)  # 全域平均池化取代 Flatten\nx = layers.Dropout(0.2)(x)\noutputs = layers.Dense(5, activation='softmax')(x) # 自訂 5 類輸出\n\nmodel = keras.Model(inputs, outputs)",
    "confusing": [
      "遷移學習頂部推薦使用 <code>GlobalAveragePooling2D()</code> 而非傳統 <code>Flatten()</code>，能巨幅減少可訓練參數量，有效抑制過擬合"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">骨幹: ResNet (凍結 trainable=False)</span>\n        <span>+</span>\n        <span style=\"color:#059669;\">頂層: GAP + Dense (訓練微調)</span>\n      </div>\n    ",
    "keywords": [
      "遷移學習",
      "Transfer Learning",
      "ResNet50",
      "include_top",
      "trainable=False",
      "GlobalAveragePooling2D"
    ]
  },
  {
    "id": "code_keras_08",
    "category": "keras",
    "code": "KERAS-08",
    "title": "訓練歷史紀錄視覺化：history.history 字典物件",
    "summary": "<code>model.fit()</code> 會回傳一個 <code>History</code> 物件。其 <code>history.history</code> 屬性為字典，紀錄每個 Epoch 的 loss 與各項指標，直接用於繪製收斂曲線。",
    "snippet": "history = model.fit(X_train, y_train, validation_data=(X_val, y_val), epochs=20)\n\n# history.history 包含: ['loss', 'accuracy', 'val_loss', 'val_accuracy']\nimport matplotlib.pyplot as plt\n\nplt.plot(history.history['loss'], label='Train Loss')\nplt.plot(history.history['val_loss'], label='Val Loss')\nplt.xlabel('Epochs')\nplt.ylabel('Loss')\nplt.legend()\nplt.show()",
    "confusing": [
      "若 <code>val_loss</code> 停滯並開始飆升，而 <code>loss</code> 仍持續下降，這是教科書級別的<b>過擬合 (Overfitting)</b> 徵兆"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>History 字典鍵值</b>：<code>loss</code> (訓練損失) vs <code>val_loss</code> (驗證損失)\n      </div>\n    ",
    "keywords": [
      "history",
      "history.history",
      "訓練曲線",
      "val_loss",
      "收斂曲線",
      "過擬合診斷"
    ]
  },
  {
    "id": "code_keras_09",
    "category": "keras",
    "code": "KERAS-09",
    "title": "模型儲存與載入：現代 .keras 格式規範",
    "summary": "Keras 3 官方推薦使用單一檔案格式 <code>.keras</code>，完整打包模型架構、權重與優化器狀態；透過 <code>keras.models.load_model()</code> 一鍵還原。",
    "snippet": "# 1. 保存完整模型架構與權重 (單一 .keras 檔案)\nmodel.save('final_model.keras')\n\n# 2. 載入模型 (無需重新定義模型程式碼！)\nloaded_model = keras.models.load_model('final_model.keras')\ntest_loss, test_acc = loaded_model.evaluate(X_test, y_test)",
    "confusing": [
      "舊版 TensorFlow 常用 <code>.h5</code> 或 SavedModel 資料夾格式，新版 Keras 全面推薦高效安全的 <code>.keras</code> 壓縮格式"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>現代保存規範</b>：<code>model.save('model.keras')</code> 打包架構+權重+優化器\n      </div>\n    ",
    "keywords": [
      ".keras",
      "load_model",
      "model.save",
      "模型持久化",
      "HDF5",
      "SavedModel"
    ]
  },
  {
    "id": "code_keras_10",
    "category": "keras",
    "code": "KERAS-10",
    "title": "自訂批次生成器：ImageDataGenerator vs tf.data 流程",
    "summary": "對於海量影像無法一次載入記憶體的情境，使用 <code>ImageDataGenerator</code> 進行即時隨機資料增強 (Data Augmentation) 與磁碟批次串流載入。",
    "snippet": "from tensorflow.keras.preprocessing.image import ImageDataGenerator\n\ntrain_datagen = ImageDataGenerator(\n    rescale=1./255,          # 像素歸一化 0~1\n    rotation_range=20,       # 隨機旋轉角度\n    horizontal_flip=True,    # 隨機水平翻轉\n    zoom_range=0.2           # 隨機縮放\n)\n\ntrain_generator = train_datagen.flow_from_directory(\n    'data/train',\n    target_size=(150, 150),\n    batch_size=32,\n    class_mode='binary'\n)\n\nmodel.fit(train_generator, epochs=20)",
    "confusing": [
      "<b>驗證集資料增強大忌</b>：對驗證集/測試集產生器，<b>只能做 <code>rescale=1./255</code></b>，絕對不能開啟旋轉、翻轉等隨機增強，否則會破壞真實評估分佈！"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">訓練集: 翻轉+旋轉+縮放 (擴增數據)</span>\n        <span style=\"color:#dc2626;\">驗證集: 僅作 rescale 歸一化！</span>\n      </div>\n    ",
    "keywords": [
      "ImageDataGenerator",
      "flow_from_directory",
      "Data Augmentation",
      "資料增強",
      "rescale"
    ]
  },
  {
    "id": "code_plt_01",
    "category": "matplotlib",
    "code": "PLT-01",
    "title": "物件導向繪圖架構：Figure 與 Axes 核心模式",
    "summary": "Matplotlib 推薦物件導向 (Object-Oriented) 畫法：<code>fig, ax = plt.subplots()</code>。<code>fig</code> 是整個畫布，<code>ax</code> 是具體的子圖坐標軸，可控度高且結構嚴謹。",
    "snippet": "import matplotlib.pyplot as plt\n\n# 建立畫布與坐標軸 (Figure, Axes)\nfig, ax = plt.subplots(figsize=(8, 5))\n\n# 在指定 ax 上繪圖\nax.plot([1, 2, 3, 4], [10, 20, 25, 30], color='#2563eb', linewidth=2, label='趨勢線')\n\n# 設定圖表元素 (注意皆為 set_* 前綴)\nax.set_title('月度銷售趨勢圖', fontsize=14, fontweight='bold')\nax.set_xlabel('月份 (Month)')\nax.set_ylabel('銷售額 (萬元)')\nax.legend()\nax.grid(True, linestyle='--', alpha=0.6)\n\nplt.show()",
    "confusing": [
      "狀態機寫法 <code>plt.title()</code> vs 物件導向寫法 <code>ax.set_title()</code>！在有多個子圖時，狀態機寫法只會作用在「最後一個活躍圖」，極易錯亂，強烈推薦統一使用 <code>ax.set_*()</code>"
    ],
    "visualHtml": "\n      <div style=\"display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.75rem; text-align:center;\">\n        <div style=\"background:rgba(59,130,246,0.08); padding:3px; border-radius:4px;\"><b>Figure (畫布)</b><br>控制視窗整體大小與 DPI</div>\n        <div style=\"background:rgba(16,185,129,0.08); padding:3px; border-radius:4px;\"><b>Axes (坐標軸)</b><br>控制線條、刻度與標題</div>\n      </div>\n    ",
    "keywords": [
      "matplotlib",
      "Figure",
      "Axes",
      "plt.subplots",
      "set_title",
      "物件導向繪圖"
    ]
  },
  {
    "id": "code_plt_02",
    "category": "matplotlib",
    "code": "PLT-02",
    "title": "多子圖佈局神器：plt.subplots 與 axes.flatten 走訪",
    "summary": "一鍵建立多欄多列子圖矩陣 <code>fig, axes = plt.subplots(nrows, ncols)</code>。搭配 <code>axes.flatten()</code> 將 2 維子圖矩陣壓平為 1 維，便於使用 for 迴圈批量繪圖。",
    "snippet": "fig, axes = plt.subplots(2, 2, figsize=(10, 8))\n\n# 將 2x2 的陣列展平成一維 [ax0, ax1, ax2, ax3]\nax_flat = axes.flatten()\n\nfor i, ax in enumerate(ax_flat):\n    ax.plot([0, 1], [0, i + 1])\n    ax.set_title(f'子圖 {i + 1}')\n\nplt.tight_layout()  # 自動調整子圖間距，防止標題重疊擠壓！\nplt.show()",
    "confusing": [
      "子圖標題與坐標軸文字經常互相重疊遮擋，在 <code>plt.show()</code> 之前必加 <b><code>plt.tight_layout()</code></b> 讓系統自動優化邊距！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>子圖走訪心法</b>：<code>axes.flatten()</code> 轉一維走訪 + <code>plt.tight_layout()</code> 自適應防重疊\n      </div>\n    ",
    "keywords": [
      "subplots",
      "nrows",
      "ncols",
      "axes.flatten",
      "tight_layout",
      "多子圖佈局"
    ]
  },
  {
    "id": "code_plt_03",
    "category": "matplotlib",
    "code": "PLT-03",
    "title": "中文亂碼與負號變方塊終極解方 (rcParams)",
    "summary": "Matplotlib 預設英文字體無法顯示中文（會變豆腐塊 ），且數學負號可能變缺失字元。在程式最上方透過 <code>plt.rcParams</code> 配置微軟正黑體與負號修復。",
    "snippet": "import matplotlib.pyplot as plt\n\n# 解決中文顯示問題 (Windows 首選微軟正黑體，Mac 可用 Arial Unicode MS)\nplt.rcParams['font.sans-serif'] = ['Microsoft JhengHei', 'PingFang TC', 'SimHei']\n\n# 解決負號 '-' 顯示為方塊亂碼問題\nplt.rcParams['unicode_minus'] = False",
    "confusing": [
      "只要有中文標題或坐標軸包含負數（如 -5 到 5），這兩行就是<b>必備起手式</b>，寫在所有繪圖函數呼叫之前即可全域生效！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>中文與負號雙保險</b>：<code>font.sans-serif=['Microsoft JhengHei']</code> + <code>unicode_minus=False</code>\n      </div>\n    ",
    "keywords": [
      "中文亂碼",
      "rcParams",
      "font.sans-serif",
      "unicode_minus",
      "豆腐塊",
      "負號修復"
    ]
  },
  {
    "id": "code_plt_04",
    "category": "matplotlib",
    "code": "PLT-04",
    "title": "機器學習四大多元圖表 (plot, scatter, bar, hist)",
    "summary": "機器學習四大基準圖表：折線圖 <code>ax.plot</code>（時序與損失）、散佈圖 <code>ax.scatter</code>（特徵相關與分群）、長條圖 <code>ax.bar</code>（類別比較）、直方圖 <code>ax.hist</code>（資料分佈）。",
    "snippet": "fig, axes = plt.subplots(1, 4, figsize=(16, 4))\n\n# 1. 折線圖 (Line Plot)\naxes[0].plot([1, 2, 3], [10, 15, 12], marker='o')\naxes[0].set_title('折線圖 (趨勢)')\n\n# 2. 散佈圖 (Scatter Plot, 著色分群)\naxes[1].scatter(x=[1, 2, 3, 4], y=[2, 4, 1, 5], c=[0, 0, 1, 1], cmap='coolwarm')\naxes[1].set_title('散佈圖 (分群)')\n\n# 3. 直方圖 (Histogram, 檢視常態/偏態)\naxes[2].hist(np.random.randn(100), bins=15, edgecolor='black')\naxes[2].set_title('直方圖 (分佈)')\n\n# 4. 長條圖 (Bar Chart)\naxes[3].bar(['A', 'B', 'C'], [30, 50, 20], color='#059669')\naxes[3].set_title('長條圖 (計數)')",
    "confusing": [
      "<b>直方圖 hist vs 長條圖 bar 區分</b>：<code>hist</code> 針對連續數值統計落入區間的頻率（箱子 bins 連續無縫）；<code>bar</code> 針對離散類別比較數值大小（柱狀之間通常有間距）"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.75rem; text-align:center; font-weight:700;\">\n        <span>plot: 趨勢曲線</span>\n        <span>scatter: 相關點雲</span>\n        <span>hist: 頻率分佈</span>\n        <span>bar: 類別對比</span>\n      </div>\n    ",
    "keywords": [
      "plot",
      "scatter",
      "bar",
      "hist",
      "直方圖",
      "散佈圖",
      "折線圖",
      "長條圖"
    ]
  },
  {
    "id": "code_plt_05",
    "category": "matplotlib",
    "code": "PLT-05",
    "title": "雙 Y 軸繪圖 (ax.twinx) 同圖對比不同量綱指標",
    "summary": "在監控機器學習訓練時，Loss（範圍 0~2）與 Accuracy（範圍 0~100%）數值維度差異極大。利用 <code>ax.twinx()</code> 共用 X 軸並在右側建立獨立的次 Y 軸。",
    "snippet": "fig, ax1 = plt.subplots(figsize=(8, 4))\n\nepochs = range(1, 11)\nloss = [1.2, 0.9, 0.7, 0.5, 0.4, 0.35, 0.3, 0.28, 0.25, 0.23]\nacc = [55, 68, 75, 82, 86, 88, 90, 91, 92, 93]\n\n# 主 Y 軸 (左側) 畫 Loss\nax1.plot(epochs, loss, 'r-', label='Train Loss')\nax1.set_xlabel('Epochs')\nax1.set_ylabel('Loss (損失值)', color='r')\n\n# 次 Y 軸 (右側) 共用 X 軸\nax2 = ax1.twinx()\nax2.plot(epochs, acc, 'b--', label='Accuracy (%)')\nax2.set_ylabel('Accuracy (準確率 %)', color='b')\n\nplt.title('訓練損失與準確率雙 Y 軸對比圖')\nplt.show()",
    "confusing": [
      "<code>twinx()</code> 共用 X 軸、各自擁有獨立的 Y 軸；若需要共用 Y 軸換 X 軸，則使用 <code>twiny()</code>"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>雙坐標軸法寶</b>：<code>ax2 = ax1.twinx()</code> 完美呈現不同量綱曲線\n      </div>\n    ",
    "keywords": [
      "twinx",
      "雙Y軸",
      "Loss對比Acc",
      "不同量綱",
      "共用X軸"
    ]
  },
  {
    "id": "code_plt_06",
    "category": "matplotlib",
    "code": "PLT-06",
    "title": "混淆矩陣視覺化：ConfusionMatrixDisplay 與 heatmap",
    "summary": "評估多分類模型時，直接看文字矩陣不夠直觀。透過 scikit-learn 的 <code>ConfusionMatrixDisplay</code> 或 Seaborn 的 <code>heatmap</code> 繪製熱力圖，誤分類分佈一目了然。",
    "snippet": "from sklearn.metrics import ConfusionMatrixDisplay, confusion_matrix\nimport matplotlib.pyplot as plt\n\ncm = confusion_matrix(y_true, y_pred)\n\n# 推薦 scikit-learn 原生簡潔畫法\ndisp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=['貓', '狗', '鳥'])\ndisp.plot(cmap=plt.cm.Blues, values_format='d')  # values_format='d' 顯示整數\n\nplt.title('混淆矩陣熱力分佈圖')\nplt.show()",
    "confusing": [
      "若使用 Seaborn 繪製：<code>sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')</code>，參數 <code>annot=True</code> 確保顯示數字，<code>fmt='d'</code> 避免整數顯示為科學記號"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">對角線深色：預測正確 (TP, TN)</span>\n        <span style=\"color:#dc2626;\">非對角線有值：誤判 (FP, FN)</span>\n      </div>\n    ",
    "keywords": [
      "ConfusionMatrixDisplay",
      "confusion_matrix",
      "heatmap",
      "混淆矩陣熱力圖",
      "Blues"
    ]
  },
  {
    "id": "code_plt_07",
    "category": "matplotlib",
    "code": "PLT-07",
    "title": "Seaborn 相關係數熱力圖：sns.heatmap 篩查共線性",
    "summary": "建模前必備特徵分析。計算 DataFrame 的皮爾森相關係數矩陣 <code>df.corr()</code>，搭配 <code>sns.heatmap</code> 視覺化特徵間的線性關聯度，排查多重共線性。",
    "snippet": "import seaborn as sns\nimport matplotlib.pyplot as plt\n\ncorr_matrix = df.corr()  # 計算特徵兩兩相關係數\n\nplt.figure(figsize=(8, 6))\nsns.heatmap(\n    corr_matrix, \n    annot=True,          # 顯示相關數值\n    cmap='coolwarm',     # 紅藍對比色調 (-1藍 ~ 0白 ~ +1紅)\n    vmin=-1, vmax=1,     # 固定尺度於 -1 到 1\n    fmt='.2f',           # 取小數後兩位\n    linewidths=0.5       # 格子間隔邊線\n)\nplt.title('特徵相關係數熱力圖')\nplt.show()",
    "confusing": [
      "若發現兩個特徵相關係數高達 0.9 以上（如面積與坪數），代表存在嚴重的<b>多重共線性 (Multicollinearity)</b>，可能導致線性模型權重劇烈震盪，通常應考慮剔除其中之一"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>熱力圖解讀</b>：紅色近 +1 (高度正相關) | 藍色近 -1 (高度負相關) | 避開共線性\n      </div>\n    ",
    "keywords": [
      "heatmap",
      "df.corr",
      "相關係數",
      "多重共線性",
      "coolwarm",
      "特徵篩選"
    ]
  },
  {
    "id": "code_plt_08",
    "category": "matplotlib",
    "code": "PLT-08",
    "title": "Seaborn 分佈與離群值探勘：sns.boxplot 與 sns.violinplot",
    "summary": "<b>箱型圖 (Boxplot)</b> 直觀展示中位數、四分位距 (IQR) 與離群點；<b>小提琴圖 (Violinplot)</b> 在箱型圖基礎上外加核密度估計 (KDE)，呈現真實多峰分佈。",
    "snippet": "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\n\n# 1. 箱型圖 (檢視極端異常離群值)\nsns.boxplot(x='category', y='price', data=df, ax=axes[0], palette='Set2')\naxes[0].set_title('箱型圖 (各類別價格與離群點)')\n\n# 2. 小提琴圖 (檢視多峰分佈與機率密度)\nsns.violinplot(x='category', y='price', data=df, ax=axes[1], palette='Pastel1')\naxes[1].set_title('小提琴圖 (密度分佈)')\n\nplt.show()",
    "confusing": [
      "箱型圖超出上下鬚（$Q3 + 1.5\\times IQR$ 或 $Q1 - 1.5\\times IQR$）的獨立圓點即為<b>統計學離群值</b>"
    ],
    "visualHtml": "\n      <div style=\"display:flex; justify-content:space-around; font-size:0.78rem; text-align:center; font-weight:700;\">\n        <span style=\"color:#2563eb;\">boxplot: 箱體 IQR + 鬚外離群點</span>\n        <span style=\"color:#059669;\">violinplot: 結合 KDE 多峰密度曲線</span>\n      </div>\n    ",
    "keywords": [
      "boxplot",
      "violinplot",
      "箱型圖",
      "小提琴圖",
      "離群值",
      "四分位距",
      "KDE"
    ]
  },
  {
    "id": "code_plt_09",
    "category": "matplotlib",
    "code": "PLT-09",
    "title": "高維特徵對成對散佈圖：sns.pairplot",
    "summary": "<code>sns.pairplot(df, hue='target')</code> 一行程式碼即可產出資料集中所有特徵兩兩配對的散佈圖矩陣，對角線展示單變數分佈直方圖，並按目標類別著色。",
    "snippet": "import seaborn as sns\n\n# hue='target' 依據分類標籤塗色，diag_kind='kde' 對角線畫平滑密度圖\nsns.pairplot(df, hue='species', diag_kind='kde', corner=True)\n# corner=True 參數只保留下三角矩陣，避免上下對稱圖形重複繪製浪費版面！\nplt.show()",
    "confusing": [
      "若特徵數量過多（如超過 10 個），<code>pairplot</code> 會產生 $10 \\times 10 = 100$ 張圖，繪圖速度極慢甚至耗盡記憶體崩潰；建議先挑選 4~6 個關鍵特徵再傳入"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>EDA 神技</b>：<code>sns.pairplot(corner=True)</code> 一鍵鳥瞰所有特徵可分性\n      </div>\n    ",
    "keywords": [
      "pairplot",
      "hue",
      "散佈圖矩陣",
      "corner=True",
      "EDA",
      "探索性數據分析"
    ]
  },
  {
    "id": "code_plt_10",
    "category": "matplotlib",
    "code": "PLT-10",
    "title": "高解析度圖表保存 (savefig) 與 bbox_inches='tight'",
    "summary": "輸出高解析論文或報告圖表。<code>plt.savefig('fig.png', dpi=300, bbox_inches='tight')</code>，<code>dpi=300</code> 確保清晰，<code>bbox_inches='tight'</code> 防止邊緣標題被腰斬裁切。",
    "snippet": "fig, ax = plt.subplots(figsize=(8, 5))\nax.plot([1, 2, 3], [4, 5, 6])\nax.set_title('清晰報告專用圖表')\n\n# 核心保存指令\nplt.savefig(\n    'my_chart.png', \n    dpi=300,                 # 300 DPI 印刷出版級清晰度\n    bbox_inches='tight',     # 核心參數！自動收緊白邊，防止坐標軸標籤被削掉\n    transparent=False        # 保持白底背景 (預設 True 可能變透明)\n)\n\nplt.close(fig)  # 保存後及時釋放畫布記憶體資源！",
    "confusing": [
      "<b>致命順序錯誤</b>：若寫成 <code>plt.show()</code> 在前，<code>plt.savefig()</code> 在後，保存出來的圖片會是<b>一張空白圖片</b>！因為 <code>plt.show()</code> 會在顯示完畢後自動清空當前畫布；<b>正確作法是先 savefig 再 show，或直接 savefig 後 close</b>！"
    ],
    "visualHtml": "\n      <div style=\"background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:4px; font-size:0.75rem; text-align:center;\">\n        <b>保存鐵律</b>：先 <code>plt.savefig(bbox_inches='tight')</code>，再 <code>plt.show()</code>！\n      </div>\n    ",
    "keywords": [
      "plt.savefig",
      "dpi",
      "bbox_inches='tight'",
      "空白圖片陷阱",
      "plt.close"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CODING_CHEATSHEET_DATA };
}
