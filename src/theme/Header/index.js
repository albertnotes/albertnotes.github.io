import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
// Default implementation, that you can customize
function Header({ toggleSidebar }) {
	return (
		<header className={clsx('header', styles.header)}>
			<button onClick={toggleSidebar}>
				<svg width='1em' height='1em' viewBox='0 0 24 24'>
					<path
						d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z'
						fill='currentColor'
					></path>
				</svg>
			</button>
			<h1>
				<Link to='/'>關於轉生攻城屍那件事</Link>
			</h1>
		</header>
	);
}
export default Header;
