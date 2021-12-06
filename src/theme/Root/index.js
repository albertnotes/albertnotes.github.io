import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AllCategories from '../../utils/AllCategories';
import AllPosts from '../../utils/AllPosts';
import Header from '../Header';
import Sidebar from '../Sidebar';
// Default implementation, that you can customize
function Root({ children }) {
	const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
	const toggleSidebar = () => {
		setIsHiddenSidebar(value => !value);
		document.body.classList.toggle('collapsed');
	};
	const location = useLocation();
	const sidebars = AllCategories.map(category => {
		let _ = {
			collapsed: true,
			collapsible: true,
			type: 'category',
			label: category,
			items: AllPosts.filter(i => i.category === category),
		};
		return _;
	});

	return (
		<>
			<Sidebar
				sidebar={sidebars}
				isHidden={isHiddenSidebar}
				path={location.pathname}
			/>
			<Header toggleSidebar={toggleSidebar} />
			{children}
		</>
	);
}

export default Root;
