import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
clsx;
// Default implementation, that you can customize
function Footer() {
	const { siteConfig, siteMetadata } = useDocusaurusContext();
	const { footer } = siteConfig.themeConfig;

	return (
		<footer className={clsx('footer', styles.footer)}>
			{footer.copyright}
		</footer>
	);
}
export default Footer;
