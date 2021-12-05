import clsx from 'clsx';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

// Default implementation, that you can customize
function NavbarItem(props) {
	const { href, target, tip, className } = props;
	const location = useLocation();
	const isActive = location.pathname.includes(href);

	return (
		<>
			<a
				className={clsx(
					styles['navbar-item'],
					isActive && styles['active'],
					className ?? ''
				)}
				href={href}
				target={target}
				data-tip={tip}
			>
				{props.children}
			</a>
		</>
	);
}
export default NavbarItem;
