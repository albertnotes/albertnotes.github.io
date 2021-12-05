import Layout from '@theme/Layout';
import React from 'react';
import Hero from '../../components/Hero';
function About() {
	return (
		<Layout title='About'>
			<main className='container'>
				<Hero className='align-item-center' title='About Me'>
					<i> </i>
				</Hero>
			</main>
		</Layout>
	);
}

export default About;
