---
slug: javascript/2022/03/03/React-Lesson-2
title: React Lesson 2
authors: albert
tags: [javascript, react]
---

import Link from '@docusaurus/Link';

## 前言

前一篇講到 React 是處理使用者介面，讓我們從淺到深開始撰寫介面

<!--truncate-->

:::note

還沒有看過上一篇的朋友，連結在此 <Link to='/blog/javascript/2022/03/02/React-Lesson-1'>React Lesson 1</Link>
:::

## 如何使用

前述說過 React 是函式庫，可以透過 NPM 或者 CDN 載入。
React 對於函式庫有針對其用途做拆分，下列以 WEB 為例

```
1. react / npm install react --save
2. react-dom / npm install react-dom --save
```

- 第一個定義元件所相關功能函式
- 第二個撰寫渲染器

透過以上的方式，只要把渲染器換成另一種就可以跑在別的環境上，
故 React 還提供 React Native 可以開發 iOS and Android.

## 建立介面

我們先專注學習如何使用，故載入的方式先用簡單的 CDN

```html title="src/index.html"
<script
	src="https://unpkg.com/react@17/umd/react.production.min.js"
	crossorigin
></script>
<script
	src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
	crossorigin
></script>
```

### React.createElement 語法

> 這是透過 React 建立 HTML DOM

[官方文件](https://zh-hant.reactjs.org/docs/react-api.html#createelement)

```javascript live
function Test() {
	return React.createElement(
		'button',
		{
			className: 'test',
			onClick: () => {
				alert('測試');
			},
		},
		'按鈕'
	);
}
```

使用 JSX

```jsx live
function Test() {
	const clickHandler = () => {
		alert('測試');
	};
	return (
		<button className='test' onClick={clickHandler}>
			按鈕
		</button>
	);
}
```

:::tip 延伸閱讀

語法的第二個參數為

1. DOM 屬性
2. 自定義屬性

其中要注意的是某些屬性 React 會做調整

1. dom 事件處理都以 on 小寫後續大寫為例 ex: onClick / onInput
2. 使用 class 屬性變成使用 className

[官方文件](https://reactjs.org/docs/dom-elements.html#differences-in-attributes)
:::

接著需要透過 react-dom 渲染到實體的 DOM 節點

```js
import ReactDOM from 'react-dom';
ReactDOM.render(<Test />, document.getElementById('root'));
```

以下是不依賴 React，以簡單的方式不考慮其狀態管理。

```js
const el = document.createElement('button');
const clickHandler = function () {
	alert('測試');
};
el.textContent = '按鈕';
el.addEventListener('click', clickHandler);
document.getElementById('root').append(el);
```

當畫面元素變多狀態與行為變得複雜，繼續撰寫這種方式過程會很繁瑣。
所以透過 React 去處理使用者介面，進行簡化這一過程則省下的時間讓你更專注處理商業邏輯。