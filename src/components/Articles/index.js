import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

export default function Articles(props) {
	const { header, items, isBadge } = props;
	return (
		<section className={styles.latestArticles}>
			<div className={styles.latestArticles__header}>{header}</div>
			<ul className={styles.latestArticles__items}>
				{items.map((item, idx) => {
					const date = new Date(item.date);
					return (
						<li className={styles.latestArticles__item} key={item.href}>
							<Link
								className={styles.latestArticles__item__link}
								to={item.href}
							>
								{idx === 0 && isBadge && <i>New</i>}
								{item.label}
								<span>{date.toLocaleDateString()}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
