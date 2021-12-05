import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

function Hero(props) {
	const { title, subtitle, className } = props;
	return (
		<header className={clsx('hero', styles.hero, className)}>
			<h3 className='hero__title'>{title}</h3>
			<p className='hero__subtitle'>{subtitle}</p>
			{props.children}
		</header>
	);
}

export default Hero;
