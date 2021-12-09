---
slug: utils/2021/12/09/docusaurus
title: Docusaurus 主題
authors: albert
tags: [docusaurus]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Hi 本部落格使用 Docusaurus 構建。

樣式的替換採用，官方文件所介紹的主題文件篇章

[https://docusaurus.io/docs/using-themes#theme-components](https://docusaurus.io/docs/using-themes#theme-components)

- Webpack 設定 @theme 作為元件導入的路徑開頭
- 對於目錄有著優先順序，優先引入 `src/theme` 的元件

主題使用 `@docusaurus/preset-classic`，並且觀察使用的元件

<img src={useBaseUrl('/img/docusaurus/img-1.png')} />

##

把需替換樣式的元件複製 `src/theme` 底下後，重新設計樣式與資料傳遞，
即可自定義改變部落格的結構。
