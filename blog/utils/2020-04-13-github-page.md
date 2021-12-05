---
slug: utils/2020/04/13/github-page
title: 從 0 到 1 的 GitHub Pages 教學手冊
authors: albert
tags: [github]
---

## 前言

這是一篇筆者參加六角學院 - 網頁直播切版班擔任志工
撰寫的從無到有的 GitHub Pages 教學手冊

<!--truncate-->

## 開始前注意事項

- 本次教學使用 GitHub Desktop 應用程式操作
- 著重於不需要了解 **Git 指令** 與 **Git 觀念知識**
- Windows 作業系統必須是 64bit
- 提交作業的話，請打開 GitHub Pages 的功能，就可以在網路上看到你的畫面哦

:::note

- [32 位元與 64 位元 Windows： 常見問題集](https://support.microsoft.com/zh-tw/help/15056/windows-32-64-bit-faq)
- [GitHub Desktop 下載連結](https://desktop.github.com/)
- 請依作業系統 Download
- 教學操作版本號為 2.4.0 不同版本介面可能有所不同

:::

![](https://i.imgur.com/iXLtTjA.png)

## 閱讀指南

- 我們會模擬開發的狀況，來介紹如何 **初次上傳** 與 **修改後上傳**
- 閱讀本教學手冊時，可以透過畫面右側的文章導覽到達指定標題
- 若對於以下操作想要深入了解的話，建議上是先學習 **Git 是什麼**

## GitHub 註冊

> 複製以下的連結，前往 GitHub 官網
> https://github.com/

- 依下圖所示填寫你的資料，點擊 **`Sign up for GitHub`**

![](https://i.imgur.com/utGgXBw.png)

- 接著會有 **機器人驗證** 與 **Email 郵件推播資訊勾選框**

![](https://i.imgur.com/GItHLNO.png)

- 接著會有選擇 GitHub 帳號的相關資訊
- 請選擇 Individual (**個人**) 與 Free

![](https://i.imgur.com/d63IPiF.png)

- 接著就歡迎使用 GitHub 並且要你填寫來源資訊，這個可以按 **`Skip this step`**

![](https://i.imgur.com/1GPNoDW.png)

- 恭喜到這邊後，就可以去驗證電子郵件
- 驗證後就已經完成註冊

![](https://i.imgur.com/42X7R5a.png)

## 初次上傳

### 專案程式碼

- 請於習慣路徑建立專案資料夾
- 接著我們照著下圖的方式，模擬專案已完成

![](https://i.imgur.com/uQJUuKH.png)

### GitHub Desktop 設定

- 打開一開始就下載的 GitHub Desktop 執行檔
- 一開始建議先去設定以下兩點
  - GitHub 帳號綁定
  - Git 使用者與信箱 (**不設定的話，等等上傳會叫你設定**)
- 跟著下方的圖示點開 `Options`

![](https://i.imgur.com/M98XuXp.png)

- 登入 GitHub 帳號

![](https://i.imgur.com/eo6F4gQ.png)

- 切換到 Git 填寫 Name 與 Email

![](https://i.imgur.com/T5OeeEU.png)

> Name 與 Email 是指我們每一次專案版本修改並提交紀錄的使用者
>
> ![](https://i.imgur.com/op5rIw8.png)

### 建立 Repository

> Repository 的翻譯是儲存庫
> 意思是會把專案資料夾的檔案複製一份加到 Repository 裡面

從下圖會看到左邊有 4 個選項

1. 建立操作教程的儲存庫
2. 從網路上的儲存庫複製一份到本機上
3. 建立一個新的儲存庫到本機上
4. 從本機上加入已存在的儲存庫

> 注意:warning:
> 我們要選擇 `選項4` 因為我們已經有專案，只是還沒有儲存庫
> `選項3` 是創建一個 **空的專案資料夾** 與 **內建儲存庫**

![](https://i.imgur.com/rdZaJhS.png)

- 接著依下圖操作

![](https://i.imgur.com/dMy3lU9.png)

- 若沒意外的話，會跳出下圖警告，意思是檔案內沒有儲存庫
- 此時點選 **`create a repository`** 建立儲存庫

![](https://i.imgur.com/ZE0PpIy.png)

- 接著會看到以下圖示
- 特別注意的是 Local path 已經綁定資料夾，你不能 Choose 它
- 建立儲存庫的各選項資訊為
  - Name (儲存庫名稱)
  - Description (儲存庫的描述 e.g 第一週作業)
  - lnitialize this..(儲存庫初始化階段，建立 README 檔案)
  - Gitignore (需要被儲存庫忽略的檔案)
  - License (授權宣告，意思是別人取用檔案的話自身權益的保障)

> 以上選項可以只填寫 **Name** 就好哩，接著按下 **Create Repository**

![](https://i.imgur.com/ad0coOP.png)

- 接著請看下圖的紅框 LiveCourse 就是已建立的 **repository**
- 下方有 **Changes** 與 **History**

![](https://i.imgur.com/r5gHHnP.png)

- 接著我們切換 `History` 會看到以下的初始化檔案紀錄

> :warning: 此時專案資料夾內會有 .git 與 .gitattributes
>
> - .git 是隱藏資料夾 (這個代表著你的儲存庫)
> - .gitattributes 這個是 Git 斷行字元處理 (請不要理它)

![](https://i.imgur.com/3Wrpy4o.png)

> 到這邊就完成了建立 Repository 的流程:beers:

### 推上 GitHub 伺服器

- 我們接續上一個步驟的 **History**
- 你會發現程式碼已經被儲存庫完整紀錄下來
- 這個時候選單切換為 **Changes**
- 點選下圖的紅框 **發佈儲存庫** (推上 GitHub 伺服器)

> 這邊就不特別 Google 翻譯...請自行查詢藍框內的英文

![](https://i.imgur.com/JRuEk5D.png)

- 接著彈出的視窗，要畫重點注意
- 選項上我們不是企業，是屬於個人要選擇 **`GitHub.com`**
- Name 這個會自動帶入儲存庫名稱
- Description 描述可空白
- Keep this code private **這個重要了！請取消勾選**

> :warning: 決定了發佈 GitHub 伺服器的儲存庫是否公開
>
> - 取消勾選 = 公開
> - 已勾選 = 私密
>
> 如果是勾選狀態傳給助教或老師批改就會出現 GitHub 404 頁面
> 這個時候筆者就把你釘在牆上，我在講你有沒有在看，沒有嘛！！

- 接著就放心地按下按鈕

![](https://i.imgur.com/rxEk02d.png)

- 接著開啟 GitHub 並且登入帳號
- 按照下圖可以點擊 Your repository 或者畫面左側的儲存庫名稱
- 特別注意的是此畫面是已經上傳的儲存庫為私密狀態
- 若你的已經是公開，可以大概看一下儲存庫 **Settings** 按鈕在哪
- 接著會教如何改回公開，即可避免被筆者釘到牆上

![](https://i.imgur.com/Hy5yJW7.png)

- 當你發現點進去儲存庫後是 Private 的話
- 請點擊 **Settings**

![](https://i.imgur.com/p5lbCr8.png)

- 當切到 Settings 畫面後，頁面滾到最下方找到 Danger Zone
- 點擊 Make pubilc

![](https://i.imgur.com/r8kXCMb.png)

- 輸入紅框內的文字
- 就可以點擊按鈕切換成公開
- 此時切回專案資料夾的畫面 Private 就會消失，就不放圖囉

![](https://i.imgur.com/ncrCMQT.png)

### GitHub Pages 設置

- 接著透過 GitHub 建立靜態網站稱為 GitHub Pages
- 我們在 Settings 頁面找尋 GitHub Pages 標題如下圖所示
- 找到後點擊 **下拉式按鈕** 選擇 master branch

![](https://i.imgur.com/PITpqrt.png)

- 接著會畫面會閃一下重整頁面
- 回到 GitHub Pages 標題，就會發現如下圖所示
- 可以看到下圖的藍框有一串網址，這個就是你的靜態網站網址

> 生成靜態網站的速度，依專案大小而定通常不超過 3 小時

![](https://i.imgur.com/OEUFaMn.png)

截止於此，你的專案可以傳給助教或老師檢閱囉
接下來是當建立儲存庫專案已被追蹤，修改後的操作

## 修改後上傳

### 專案程式碼

- 接著我們模擬一下程式碼修改

![](https://i.imgur.com/bIsYRwV.png)

### GitHub Desktop 操作

- 程式碼儲存後，回到 **GitHub Desktop**
- 就會發現 Changes 後面多了 `(1)` 這代表 1 個檔案被修改過
- 從下圖來看可以發現修改的程式碼，完整顯示於畫面上
- 這時候來到左下方紅框 - 意思提交檔案紀錄的選項

![](https://i.imgur.com/QQPFfco.png)

- 依下圖所示會看到 "被助教釘在牆上修改版本\_v1"
- 這個意思是本次提交檔案紀錄的標題
- 至於 Description 就是這次提交紀錄的描述

> 標題通常會寫 **修改程式碼的主要操作** e.g. 修改 Footer 外距誤差值
> 描述可以不寫，但是若覺得程式碼修改比較複雜，可以有善利用描述

- 接著就是點擊 **`Commit to master`**

![](https://i.imgur.com/My8lNLK.png)

- 接著切換到 **History** 就會發現多一筆紀錄是 **被助教釘在牆上修改版本\_v1**

![](https://i.imgur.com/WrhuleX.png)

- 這個時候，就已經修改好本機的儲存庫
- 接下來要上傳 GitHub 伺服器囉
- 請切換回 **Changes**
- 點擊 **Push origin** 後會跑一下等到按鈕消失即可

![](https://i.imgur.com/X70kS8b.png)

- 接著回到 GitHub 儲存庫
- 依下圖所示，會發現 **commits** 這個提交紀錄是 2 次
- index.html 後面的版本紀錄最新的是 **被助教釘在牆上修改版本\_v1**

![](https://i.imgur.com/UM2GOnv.png)

- 接著打開靜態網站網址，畫面上會同步更新

> 如果沒有的話，要稍微等一下重新整理

截止於此，修改後上傳已經完成囉:beers:

## 補充

### VS Code

當你建立好儲存庫，你的專案資料夾內有 `.git`
重新打開後 VS Code 會跳出以下的警示，找不到 Git 應用程式

![](https://i.imgur.com/nMLC9p6.png)

這是因為 GitHub Desktop 是採內建 Git 應用程式

解決方案：
點擊連結去官方下載 Git 應用程式，全域安裝在你的系統內

> https://git-scm.com/

### GitHub Pages 404

- 如果你的 GitHub Pages 出現以下問題

![](https://i.imgur.com/p9VPvqx.png)

- 如果資料夾結構是類似於以下的圖示

![](https://i.imgur.com/g93adzd.png)

這樣 GitHub Pages 會抓不到 **index.html**
你必須手動更改網址讓它指向 **index.html**

範例如下

```
https://username.github.io/儲存庫名稱/work1/index.html/
```

- 如果資料夾結構是類似於以下的圖示

![](https://i.imgur.com/HJrXrLj.png)

- 但是以下的網址還是 404

```
https://username.github.io/儲存庫名稱/
```

- 請試著手動輸入 index.html 讓它指向 index.html 檔案

```
https://username.github.io/儲存庫名稱/index.html
```

- 或者你的資料結構 html 檔名，不是 index 的話，請改寫為你的檔名

```
https://username.github.io/儲存庫名稱/檔名.html
```

### 忽略檔案

- 假設你想加入一些範例在資料夾內，但是又不想把它加入到儲存庫，可以參考以下的圖示。
- 本次圖示是以新增 example 資料夾為例

![](https://i.imgur.com/g6sH0hd.gif)

### 深入研究 Git

> 這裡是提供給讀者，學習 Git 的資源參考

- [Git & GitHub 教學手冊 - 六角學院](https://w3c.hexschool.com/git/cfdbd310)
- [為你自己學 Git - 作者高見龍](https://gitbook.tw/)
- [30 天精通 Git 版本控管 - 作者黃保翕 ( Will 保哥 )](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md)
- [Git 官方中文教學](https://git-scm.com/book/zh-tw/v2)
- [連猴子都能懂的 Git 入門指南](https://backlog.com/git-tutorial/tw/)
