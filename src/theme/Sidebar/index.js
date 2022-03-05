/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ThemeClassNames, useWindowSize } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';
import { DocSidebarItems } from '../SidebarItems';
import styles from './styles.module.css';

function DocSidebarDesktop({ path, sidebar }) {
	return (
		<div
			className={clsx('sidebar', styles.sidebar)}
		>
			<div className={styles.sidebarHeader}>
				<span>Categories</span>
				{/* <button onClick></button> */}
			</div>
			<nav className={clsx('menu thin-scrollbar', styles.menu)}>
				<ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
					<DocSidebarItems items={sidebar} activePath={path} level={1} />
				</ul>
			</nav>
		</div>
	);
}

const DocSidebarDesktopMemo = React.memo(DocSidebarDesktop);

export default function Sidebar(props) {
	const windowSize = useWindowSize();
	// Desktop sidebar visible on hydration: need SSR rendering
	const shouldRenderSidebarDesktop =
		windowSize === 'desktop' || windowSize === 'ssr';

	return shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />;
}
