/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Layout from '@theme/Layout';
import React from 'react';
function BlogLayout(props) {
	const { sidebar, toc, children, ...layoutProps } = props;
	return (
		<Layout {...layoutProps}>
			<div className='container margin-vert--lg'>
				<div className='row'>
					<main
						className='col col--9'
						itemScope
						itemType='http://schema.org/Blog'
					>
						{children}
					</main>
					{toc && <div className='col col--3'>{toc}</div>}
				</div>
			</div>
		</Layout>
	);
}

export default BlogLayout;
