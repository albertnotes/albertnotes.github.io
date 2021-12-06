// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '關於轉生攻城屍那件事',
	tagline:
		'探討轉生後的多災多難事件錄，歡迎來泡茶聊天我是一位前端工程師 (X) 攻城屍 (O)，參與開源專案並透過社群分享知識，這個網站就是用來歸納所學的技能。',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	url: 'https://albertnotes.github.io',
	baseUrl: '/',
	projectName: 'albertnotes.github.io', // Usually your repo name.
	organizationName: 'albertnotes', // Usually your GitHub org/user name.,
	deploymentBranch: 'gh-pages',
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				blog: {
					showReadingTime: true,
					blogSidebarCount: 'ALL',
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/main/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						to: '/articles',
						label: 'Articles',
						position: 'left',
						image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEEUlEQVR4nO2bTWwTRxiGnzUhBClGEASE8ishpFBUCkSARFPBpfyU3174SVE5lwMcK4QoJGDghEQPpL22ApJeCAcUKEGAWksICCkHBBxyQFUhapADxiIJhCyH7XrHXjszXq93l3gfaeWd3dmZbz6/8+56bENISDbbgJtACtDHyJYCbgBbZIM/FYBgS73FxAFrwv42oL0yonFsUQ175lTzSVWFLGEfBc8Gh/ntnxQ/PkrwdkQH2AxcBhgn1PsFmB/7dCo/LJxMtCLiQ6ilIVoRoWFqFZURjc6+AYBa4FcAcZT1AN/NiWZcrLX3oLX3KJeDzF5rbCvMHTEB1QAzq0RRjC1qrbGlMyF6gA6gb1/gYUjeI6hVg0wFlCU2BZQRoQIAbDf6xt+f+xGHZ5zfMTOjHCpAVuGPw1t58eRuUZ1Mq1vJV82XimqjVEgTUOzgAfoe37Edy5aiDHNqOr0uH8oP+/qF+oI6NtF2dzm6zit8+7Tj1GzdNunQBP3qOCgeECrAr45DDwgIZe8BygkI+v3cKdIETKtbmfNJrhCmL1plOxYUD5AmIKjP8G4RmqCsgmk6Tk0oH9lSdqtdWT/ZlL0CbGuCZbQiFK4JQgEe4DahBwQEqQK88gS/vKfsFRAmwO8A/MbmAf89us3Diz+R6HnA0OuEHzG5zoRoDTULPmfxN/tt58r+y1GbAsaPg0PrYMdSqJ3kfVSloDcJbd1w4hq8e595zqaAIxvgwBoPo/OQM7eg6Uq6mPtReNdy+4U1B43tYy2b7M4xNlsCZkTtlcYK03OMzTYFEic9isYnBGWEnwZBMQGqc8zp9aVufzRc+V5gaNhw17Zuo7xruXE3qXTpJ4elbN+RBwwNQ/NVuNAFmgbzpsDf/2bWWToLnvaDrkNjPRxeDxMU013K9rM9wJECmq9AS9wq978xXuMtexjRdb7cdy4j4LN/Ga/HNwWjfRFHJtjabQX059lv08dXfzaLhiWz02XxfOt963rZnC22/UJQUsDb99DUAee6DN28GrQCGg3xfOINDLyDiePl/ZnveKHtz28y4mushyMb1TxCKQFHO+DnuLyejLoYRDT4/gsjQJPe40aCzQE4Jfn/G9MSBzSIKUwJpSlgyitbkoXyeshQT0s845mcox3GseSgpS4nOJkSSgp4OWC8yiQpQzSx1vvWOyQm2DzvBDG+fsUp5+nvA/IF6FaCs+lLwdwpo9dxlICGJbPRNPVyMQEW09/wiLxtMQEpoLo3KV8IyfYBWTkfKgG62d/zZHr3lbkjJuAesLat2/0FEVVFOK2vSptljPfMHTEBp4G1J64ZhZ3L3FsSK/TOUcydJhfmktjJzvSh0/nqxvD/j42l3pplCdsEXAeSAQjWrS0JdAJfywYfUm58AMuzXA7Y0VAdAAAAAElFTkSuQmCC`,
					},
					{
						to: '/projects',
						label: 'Projects',
						position: 'left',
						image: `data:image/png;base64,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`,
					},
					{
						to: '/about',
						label: 'About Me',
						position: 'left',
						image: `data:image/png;base64,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`,
					},
					{
						href: 'https://github.com/Albertnotes',
						label: 'GitHub',
						position: 'right',
						target: '_blank',
						'aria-label': 'GitHub repository',
						image: `data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E`,
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `Copyright © ${new Date().getFullYear()} 關於轉生攻城屍那件事, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
