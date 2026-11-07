# 🎯 iPAS AI 應用規劃師（初級 & 中級）考古題智能刷題與核心考點速記系統

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://echomanrido.github.io/ipas-ai-mid-exam/)
[![iPAS Exam](https://img.shields.io/badge/Exam-iPAS%20AI%20Planner-success?style=flat&logo=target)]()
[![Platform](https://img.shields.io/badge/Platform-Web%20(Pure%20Static)-brightgreen)]()
[![Language](https://img.shields.io/badge/Language-繁體中文%20(Traditional%20Chinese)-orange)]()

專為**經濟部產業人才能力鑑定（iPAS）「AI 應用規劃師」**（涵蓋**初級**與**中級**全科目）打造的全方位備考學習平台。集結 **500 道歷屆公告試題逐題深度詳解**、**5 大考科一頁式核心考點速記卡片**、**官方評鑑大綱對照表**以及**技術百科全書**，免安裝後端，開啟瀏覽器即可隨時刷題複習！

---

## 🌟 核心功能特色

### 1. 📝 智能考古題刷題系統（500 題真題詳解）
- **歷屆試題全收錄**：
  - **初級試題（300 題）**：115 年第 1 次、第 2 次、第 3 次（第一科：人工智慧基礎概論、第二科：生成式 AI 應用與規劃）。
  - **中級試題（200 題）**：114 年第 2 次、115 年第 1 次（科目 1：人工智慧技術應用與規劃、科目 3：機器學習技術與應用）。
- **逐題深度剖析**：不只給正確答案，針對四個選項進行逐一分析，點出題目關鍵坑點與核心考點歸屬。
- **靈活導航與作答機制**：
  - **快速跳題選單**：支援直接下拉跳轉指定題號（1 ~ 50 題）。
  - **題目作答卡**：即時掌握作答狀態與進度。
  - **錯題複習本**：自動作答判定，方便加強弱點。
  - **多模式測驗**：支援循序刷題與隨機抽題測驗。

---

### 2. ⚡ 一頁式核心考點速記（Cheat Sheet）
針對 5 大考試科目獨立打造專屬重點速記網頁，具備清晰的 3 欄響應式卡片排版：
- **即時考點搜尋**：輸入關鍵字（如 `GAN`、`過擬合`、`歐盟`、`Spark`、`RTFC`）即時動態過濾卡片。
- **考點掌握度勾選**：每個卡片皆附帶核取方塊，學習狀態自動持久化記錄於瀏覽器（`localStorage`），即時計算學習進度百分比。
- **直擊考古題連動**：標記有「有考古題」的考點，點擊即可彈出歷屆真題彈跳視窗（含題號、題目與詳解）。
- **⚠️ 易混淆考點警示**：特別標示高頻陷阱與容易混淆的觀念對照。
- **架構圖解與視覺化圖表**：內建歐盟 AI 法案四級風險金字塔、Data Lakehouse 三層架構、Spark 運算機制、模型生命週期等視覺化資訊圖表。

| 科目代號 | 考試科目名稱 | 核心考點速記頁面 | 主要內容特色 |
| :---: | :--- | :---: | :--- |
| **L11** | **初級 科目一：人工智慧基礎概論** | [`quick_notes_l11.html`](quick_notes_l11.html) | 黃仁勳物理 AI 四階段論、學界 vs 業界框架、圖靈測試口訣、歐盟 AI 法案、ML 三大範式、No Code/Low Code |
| **L12** | **初級 科目二：生成式 AI 應用與規劃** | [`quick_notes_l12.html`](quick_notes_l12.html) | 提示詞工程 RTFC 框架、Token 計費機制、幻覺成因與防範、RAG vs 微調、Webhook 事件驅動、影子 IT 與供應商鎖定 |
| **L21** | **中級 科目1：人工智慧技術應用與規劃** | [`quick_notes_l21.html`](quick_notes_l21.html) | NLP/CV/GenAI、多模態架構、模型生命週期、PoC 概念驗證、PILOT 試行、歐盟 AI 法案合規、技術成熟度 |
| **L22** | **中級 科目2：大數據處理分析與應用** | [`quick_notes_l22.html`](quick_notes_l22.html) | 大數據 5V 特性、ETL vs ELT、Data Lakehouse、Spark vs MapReduce、辛普森悖論、差分隱私、聯邦學習 |
| **L23** | **中級 科目3：機器學習技術與應用** | [`quick_notes_l23.html`](quick_notes_l23.html) | 特徵工程、偏差-方差權衡、ROC-AUC、梯度下降與各類優化器、隨機森林/XGBoost、過擬合處理方針 |

---

### 3. 📖 官方考試評鑑大綱對照表（`syllabus.html`）
完整還原經濟部 iPAS 官方發行之「第一章 考試科目與評鑑內容」標準表格：
- **初級**：涵蓋科目一與科目二的各項評鑑主題與評鑑指標。
- **中級**：詳細條列 L21、L22、L23 三大科目的評鑑主題代碼（如 `L211`、`L223`）與評鑑內容（如 `L21101`、`L22301`）。
- **無縫跳轉**：表格旁均配置速記卡片直達連結，方便邊讀大綱邊複習對應考點。

---

### 4. 👑 核心技術百科全書（Technical Wiki）
- 內建 60+ 項核心技術詞條與知識點。
- 試題與速記頁面支援一鍵喚出彈窗查詢，提供概念定義、應用情境與考題常考盲點。

---

### 5. 🌓 極致使用者體驗
- **全平台響應式**：支援手機（Mobile）、平板（Tablet）與電腦桌面（Desktop）。
- **深色 / 淺色模式切換**：內建暗黑主題切換按鈕，夜間刷題護眼舒適。

---

## 📂 專案檔案結構

```text
├── index.html                 # 系統首頁（考古題測驗系統、題庫選擇器、推薦工具區）
├── syllabus.html              # 官方第一章：考試科目與評鑑大綱完整對照表
├── quick_notes_l11.html       # 初級 科目一（L11）核心考點速記頁面
├── quick_notes_l12.html       # 初級 科目二（L12）核心考點速記頁面
├── quick_notes_l21.html       # 中級 科目1（L21）核心考點速記頁面
├── quick_notes_l22.html       # 中級 科目2（L22）核心考點速記頁面
├── quick_notes_l23.html       # 中級 科目3（L23）核心考點速記頁面
├── l11_cheat_sheet_data.js    # 初級 科目一 考點資料庫（32 個核心考點）
├── l12_cheat_sheet_data.js    # 初級 科目二 考點資料庫（20 個核心考點）
├── l21_cheat_sheet_data.js    # 中級 科目1 考點資料庫（48 個核心考點）
├── l22_cheat_sheet_data.js    # 中級 科目2 考點資料庫（40 個核心考點）
├── l23_cheat_sheet_data.js    # 中級 科目3 考點資料庫（54 個核心考點）
├── questions_data.js          # 500 道試題題庫（題目、選項、解析、考點關聯）
├── wiki_data.js               # 60+ 核心名詞技術百科全書資料庫
├── styles.css                 # 全站統一樣式表與主題變數
├── .nojekyll                  # 確保 GitHub Pages 正確載入底線開頭之靜態資產
└── README.md                  # 專案說明文件
```

---

## 🚀 快速上手使用

本專案為**純前端純靜態網站（Vanilla Web App）**，無需安裝任何伺服器環境或執行構建編譯。

### 方法一：直接點擊開啟
1. 下載或複製本倉庫至本地端電腦。
2. 直接使用任意瀏覽器（Chrome, Edge, Safari, Firefox）雙擊開啟 `index.html` 即可開始使用！

### 方法二：透過本機 HTTP 伺服器預覽
若希望透過本機 Localhost 預覽，可執行任一簡易伺服器：

```bash
# 使用 Python 內建伺服器
python -m http.server 8080

# 或使用 Node.js 的 npx serve
npx serve .
```
隨後於瀏覽器中造訪 `http://localhost:8080` 即可。

### 方法三：線上直接造訪（GitHub Pages）
若本倉庫已啟用 GitHub Pages，可直接造訪：
👉 **https://echomanrido.github.io/ipas-ai-mid-exam/**

---

## 📌 學習建議與備考指南

1. **第一步（綜觀全貌）**：先瀏覽 [`syllabus.html 評鑑大綱`](syllabus.html)，了解所要應考級別（初級/中級）的能力指標與科目權重。
2. **第二步（考點速記）**：進入各科 [`考點速記頁面`](quick_notes_l21.html)，快速掃描關鍵考點與「⚠️ 易混淆考點」，並善用核取方塊標記已掌握項目。
3. **第三步（真題實戰）**：回到 [`首頁 index.html`](index.html) 進行章節模擬測驗，針對錯題點擊詳細解析進行觀念強化。
4. **第四步（查漏補缺）**：利用搜尋列反查弱點名詞，輔以技術百科深入理解背後架構。

---

## 📄 版權與免責聲明
- 本系統所收錄之歷屆試題內容版權屬**經濟部產業人才能力鑑定（iPAS）**官方所有。
- 本專案僅供個人學術探討、個人備考與非營利學習交流使用。
