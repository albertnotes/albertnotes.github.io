import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import Hero from '../../components/Hero';
function Projects() {
	return (
		<Layout>
			<main className='container'>
				<Hero
					className='align-item-center'
					title='Projects'
					subtitle={
						<>
							一些正式的 Project 項目，想查看全部請至
							<Link to='https://github.com/Albertnotes'> GitHub </Link>
						</>
					}
				>
					<i> </i>
				</Hero>
			</main>
		</Layout>
	);
}

export default Projects;
