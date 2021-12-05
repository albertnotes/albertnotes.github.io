import AllPosts from './AllPosts';
const AllCategories = AllPosts.filter(
	(i, idx, arr) => arr.findIndex(j => j.category === i.category) === idx
)
	.map(i => i.category)
	.sort((a, b) => (a > b ? 1 : -1));

export default AllCategories;
