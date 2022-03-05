import Link from '@docusaurus/Link';
import React from 'react';

export default function ({ children, to }) {
	return <Link to={to}>{children}</Link>;
}
