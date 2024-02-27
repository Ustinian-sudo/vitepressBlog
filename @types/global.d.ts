interface Post {
	frontMatter: {
		date?: string
		title?: string
		tags?: string[]
		description?: string
	}
	regularPath: string
}

interface NavData {
	title: string
	children: NavLink[]
}
