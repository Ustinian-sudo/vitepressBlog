import matter from 'gray-matter'
import { globby } from 'globby'
import fs from 'fs-extra'

export async function getPosts(filter = 'posts/blog/') {
	let paths = await getMDFilePaths(filter)
	let posts = await Promise.all(
		paths.map(async item => {
			const content = await fs.readFile(item, 'utf-8')
			const { data } = matter(content)
			data.date = _convertDate(data.date)
			return {
				frontMatter: data,
				regularPath: `/${item.replace('.md', '.html')}`
			}
		})
	)
	posts.sort(_compareDate)
	return posts
}

export async function getPostLength() {
	return [...(await getMDFilePaths())].length
}

function _convertDate(date = new Date().toString()) {
	const json_date = new Date(date).toJSON()
	return json_date.split('T')[0]
}

function _compareDate(obj1: any, obj2: any) {
	return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getMDFilePaths(filter = 'posts/blog/') {
	let paths = await globby(['**.md'], {
		ignore: ['node_modules', 'README.md']
	})
	return paths.filter(item => item.includes(filter))
}
