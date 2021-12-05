const AllPosts = (ctx => {
	/** @type {string[]} */
	const blogPostNames = ctx.keys();
	return blogPostNames
		.reduce((blogPosts, blogPostName, i) => {
			const module = ctx(blogPostName);
			const { date, formattedDate, title, permalink } = module.metadata;
			const category = permalink.split('/')[2];
			return [
				...blogPosts,
				{
					date,
					formattedDate,
					label: title,
					href: permalink,
					category: category,
					type: 'link',
				},
			];
		}, [])
		.sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime());
})(require.context('../../blog/', true, /.md/));

export default AllPosts;
