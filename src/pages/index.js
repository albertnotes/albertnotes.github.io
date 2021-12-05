import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Articles from '../components/Articles';
import Hero from '../components/Hero';
import AllPosts from '../utils/AllPosts';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout description='探討轉生後的多災多難事件錄'>
			<main className='container'>
				<Hero title={siteConfig.title} subtitle={siteConfig.tagline}>
					<i>—　Albert</i>
				</Hero>
				<Articles
					isBadge={true}
					header={
						<>
							<h3>最新文章</h3>
							<Link to='/blog'>View</Link>
						</>
					}
					items={AllPosts.slice(0, 10)}
				/>
			</main>
		</Layout>
	);
}
