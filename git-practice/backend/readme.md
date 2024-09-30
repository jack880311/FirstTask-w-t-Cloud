# 建立後端環境
- 安裝 express 框架：為一種專為 node.js 環境設計的 Web 應用框架，用於建立並管理 API & Web Server 。
- 設定與啟動 Web Server，並監聽 port number 為 "3000" 的 localhost 。

## package.json 中的 dependencies 與 devDependencies 分別是什麼？
兩個都是用來管理和紀錄專案所需套件之屬性，但稍有不同的功能：
- dependencies：管理和紀錄該專案中 __程式運行__ 時所需要的套件。
- devDependencies：管理和紀錄該專案中 __開發和測試__ 時所需要的套件。

可觀察到，在執行指令 npm install express 後，在 package.json 中多了以下內容：
`
"dependencies": {
    "express": "^4.21.0"
}
`
也就是說，我們這個後端環境的 Web Server 正常運行，會用到 express 此套件。

## package.json 中的 scripts 區塊如何使用？
- 定義：scripts 區塊即是此專案的 __腳本__ ，先寫好一些預設會需要用 npm 執行的各種指令，讓使用者能快速執行。
- 好處：節省時間，使用者不用每次都得輸入很長的指令。
- 用途：如以開發者而言，當定義 scripts 於其專案後，便能在每次開發該專案時一鍵啟動伺服器、測試、編譯等，避免重複性工作，建立自動化流程。
- 使用方式：
    假設我們在 scripts 中定義了start如下：
    `
    "scripts": {
        "start": "node app.js"
    }
    `
    則之後當我們在該專案目錄底下時，只要在終端機輸入`npm start`，則系統便會自動執行檔案 "app.js"。
 
## Port number 如何以環境變數設定？
### 首先，讓程式優先以環境變數作為 port
將原於app.js中的程式碼：
`const port = 3000;`
改成：
`const port = process.env.PORT || 3000;`
如此一來，當此檔案跑到此行程式碼時，若使用者系統已有設定環境變數 port ，就會以該值作監聽，反之則預設以3000作監聽。

### 再來，設定環境變數
當使用者要使用此 express 框架時，先在終端機輸入以下命令（以 macOS 為例）：
`port = 4000 node app.js`
如此一來，未來要使用時，便不用擔心還得從 app.js 中修改可使用的 port number 了。

### 延伸：什麼是 Port Number ？（相對於 IP address）
- 定義：是對應 IP address的端點之代號，用來標識應用程式。
- 用途：當有數據通過網路發送到某台設備時，IP address幫助確定是哪台設備，而 Port number 幫助確定設備上的哪個應用程式應該處理這些數據。
- 舉例說明：
    - IP address：類似於郵件上的收件人地址，協助把包裹送到正確的房子。
    - Port Number：類似於房子的具體門牌號，幫助找到要送到的具體房間或人。
- 與 Server 的關係：
    - 在 Server 上，每個網頁應用、資料庫等服務通常會綁定到特定的 port number，以便與網絡中的其他設備通信。

### 延伸：什麼是環境變數？
- 定義：為 OS 層級的參數，用來儲存應用程式執行時的設定，如 post number 、資料庫連結字串等等。
- 用途：透過在應用程式外部設定這些參數，讓程式在運行時能讀取，有點像是各個應用程式的準則。
- 優點：能透過環境變數來更靈活地設定想要的操作以影響應用程式，不用修改程式內部的 code 。
    - 如若要在不同的環境設定不同的 port number ， 就不需要改動到程式碼。
    - 呈上，在此次作業中我們將 post number 寫死成 3000 ，若有些使用者的電腦已先使用了，就會造成程式無法正常運行。

## 為什麼我選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
### 欲上傳檔案的要素，是希望所有協作者能在 __各自環境__ 中：
- __重現__ 出能理想運行的狀況。
- 一同協作。
- 了解專案中的依賴關係。

### 因此我選擇上傳：
- 目前產出的核心檔案、程式碼本身。
- package.json。

### 而非上傳檔案的要素，除了不具前述欲上傳的必要性，還包含了：
- 敏感檔案。
- 生成的檔案（如能透過 npm 指令生成的檔案，就沒必要佔空間）。
- 頻繁變動且不影響專案本身結構與邏輯的檔案（否則會產生許多不必要的版本更新）。

### 因此我選擇不上傳：
- node_modules
- *.env檔案

## CJS vs ESM，兩者分別如何使用？
隨著 ES6 語法出現， ESM 是更加標準化和現代化的作法，因為前端和後端皆可使用。
- CommonJS(CJS) ：
	- 導入 modules ：使用 require() 指令。
	- 導出 modules ：使用 exports 、 module.exports 。
- ECMAScript Modules(ESM) ：
	- 導入 modules ：使用 import() 指令。
	- 導出 modules ：使用 export 。