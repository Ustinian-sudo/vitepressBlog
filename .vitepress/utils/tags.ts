export function initTags(post: Post[]) {
	const data: any = {}
	data['全部'] = []
	for (let i = 0; i < post.length; i++) {
		const element = post[i]
		const tags = element.frontMatter.tags
		// tags是数组，需要tags按照数组语法的格式书写
		if (Array.isArray(tags)) {
			tags.forEach(item => {
				if (!data[item]) {
					data[item] = []
				}
				data[item].push(element)
				if (!data['全部'].some((obj: any) => obj.regularPath === element.regularPath)) {
					data['全部'].push(element)
				}
			})
		}
	}
	return data
}
