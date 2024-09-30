# 建立後端環境
- 安裝 express 框架：為一種專為 node.js 環境設計的 Web 應用框架，用於建立並管理 API & Web Server 。
- 設定與啟動 Web Server，並監聽 port number 為 "3000" 的 localhost 。
## package.json 中的 dependencies 與 devDependencies 分別是什麼？
## package.json 中的 scripts 區塊如何使用？
## Port number 如何以環境變數設定？
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
## CJS vs ESM，兩者分別如何使用？