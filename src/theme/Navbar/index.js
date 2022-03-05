import Link from '@docusaurus/Link';
import { useWindowSize } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React from 'react';
import NavbarItem from '../NavbarItem';
import styles from './styles.module.css';

// Default implementation, that you can customize
function Navbar({ children }) {
	const { siteConfig } = useDocusaurusContext();
	const { navbar } = siteConfig.themeConfig;
	const windowSize = useWindowSize();
	// Desktop sidebar visible on hydration: need SSR rendering
	const shouldRenderSidebarMobile = windowSize === 'mobile';
	return (
		<aside className={clsx('navbar', styles.navbar)}>
			{shouldRenderSidebarMobile && (
				<Link className={styles.navbarMobileTitle} to='/'>
					關於轉生攻城屍那件事
				</Link>
			)}
			<section>
				<nav>
					{navbar &&
						navbar.items
							.filter(i => i.position === 'left')
							.map((item, idx) => (
								<NavbarItem
									key={idx}
									className={item.className}
									href={item.href ?? item.to}
									target={item.target}
								>
									<img src={item.image} alt={item.label} />
								</NavbarItem>
							))}
				</nav>
				<nav>
					{navbar &&
						navbar.items
							.filter(i => i.position === 'right')
							.map((item, idx) => (
								<NavbarItem
									key={idx}
									className={item.className}
									href={item.href ?? item.to}
									target={item.target}
									tip={item.label}
								>
									<img src={item.image} alt={item.label} />
								</NavbarItem>
							))}
				</nav>
			</section>
		</aside>
	);
}

export default Navbar;
