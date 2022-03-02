---
slug: javascript/2022/03/02/React-Lesson-1
title: React Lesson 1
authors: albert
tags: [tags]
---

## 前言

如果待在前端領域一定對此主題 React 並不陌生，至少也聽過。

不管是從文件、課程、免費影片等學習管道，每個的學習順序各有不同，
筆者想用文字紀錄下建議路線，給當年的自己或正在觀看這篇文章的你/妳。

<!--truncate-->

## 概念

先說明根據 [2021.stateofjs.com](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks) 的 2021 調查排名

![](https://firebasestorage.googleapis.com/v0/b/albertnotes-65a90.appspot.com/o/front_end_frameworks_experience_ranking.png?alt=media&token=e532c2a0-241a-44c2-b90b-91c10827c61e)

可以看到除了 React 以外還有很多同性質的東西，可以先留個印象不是只能選擇 React 你應該去搞懂各自的差別。
有人會以市場熱度去做選擇、剛入門的則是會以工作碰到甚麼去選擇甚麼，但是請不要迷失惹。
它們只是讓你完成需求的工具。

:::tip 延伸閱讀

1. [前後端分離與 SPA by huli](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)
2. [What is the Difference Between SPAs, SSGs, and SSR? by Emily Nielsen](https://graphcms.com/blog/difference-spa-ssg-ssr)

:::

從延伸閱讀可以理解到，寫網頁不再是以過往簡單的方式， HTML & CSS 刻畫面、JavaScript 做特效就好。
當技術發展到 SPA 後，前端需要處理的事情越多，則重復性事情也越多，就會想寫成基底去製造輪子，讓後續每個專案都可以裝上輪子快速製作完就可以跑。

React 是由 Facebook(Meta) 團隊所推出的函式庫，一開始公司內使用，後續於 2013 年 5 月在 JSConf US 開源。
前面有說當重復性事情越多，就會想寫成基底去讓事情快速進行，那 React 要完成解決哪一種重復性的問題呢?

官方文件 [用 React 思考](https://zh-hant.reactjs.org/docs/thinking-in-react.html)，提到作者希望使用 React 時的構思步驟。
接著我們回到官方首頁，會有大大的文字告訴你 React 就是實作使用者介面的函式庫。

就是如下圖的樣子，框線代表每一個 DOM 節點、框線裡面的框線則是子節點。
用 React 拆成 component 層級，組合完整的使用者介面。

![](https://firebasestorage.googleapis.com/v0/b/albertnotes-65a90.appspot.com/o/react-1_1.png?alt=media&token=9700576a-3a8f-4e59-b7ee-13c4ba42b8df)
