import Layout from '@theme/Layout';
import React from 'react';
import Articles from '../../components/Articles';
import Hero from '../../components/Hero';
import AllPosts from '../../utils/AllPosts';
/**
 * @typedef {Object} BlogPost - creates a new type named 'BlogPost'
 * @property {string} date - eg "2021-04-24T00:00:00.000Z"
 * @property {string} formattedDate - eg "April 24, 2021"
 * @property {string} label - eg "The Service Now API and TypeScript Conditional Types"
 * @property {string} permalink - eg "/2021/04/24/service-now-api-and-typescript-conditional-types"
 */

/** @type {BlogPost[]} */

const postsByYear = AllPosts.reduceRight((posts, post) => {
	const year = post.date.split('-')[0];
	const yearPosts = posts.get(year) || [];
	return posts.set(year, [post, ...yearPosts]);
}, /** @type {Map<string, BlogPost[]>}>} */ (new Map()));

const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
	year,
	posts,
}));

const postTotal = Array.from(
	postsByYear,
	([year, posts]) => posts.length
).reduce((prev, curr) => prev + curr, 0);

function BlogArchive() {
	return (
		<Layout>
			<main className='container'>
				<Hero
					className='align-item-center'
					title='Articles'
					subtitle={`
					涵蓋範圍：JavaScript 框架,　前端常見工具,　GIT,　程式以外的工具（例: 專案管理、Chrome 擴充應用程式）
				`}
				>
					<i>共 {postTotal} 筆</i>
				</Hero>
				{yearsOfPosts &&
					yearsOfPosts.length > 0 &&
					yearsOfPosts.map((i, idx, arr) => {
						return (
							<Articles
								key={i.year}
								header={<h3>{i.year}</h3>}
								items={i.posts}
							/>
						);
					})}
			</main>
		</Layout>
	);
}

export default BlogArchive;
