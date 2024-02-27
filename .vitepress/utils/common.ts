// 转换日期为英文
export function transDate(date: string) {
	const dateArray = date.split('-')
	let year = dateArray[0],
		month = ``,
		day = dateArray[2]
	switch (dateArray[1]) {
		case '1':
		case '01':
			month = `Jan`
			break
		case '2':
		case '02':
			month = `Feb`
			break
		case '3':
		case '03':
			month = `Mar`
			break
		case '4':
		case '04':
			month = `Apr`
			break
		case '5':
		case '05':
			month = `May`
			break
		case '6':
		case '06':
			month = `Jun`
			break
		case '7':
		case '07':
			month = `Jul`
			break
		case '8':
		case '08':
			month = `Aug`
			break
		case '9':
		case '09':
			month = `Sep`
			break
		case '10':
			month = `Oct`
			break
		case '11':
			month = `Nov`
			break
		case '12':
			month = `Dec`
			break
		default:
			month = `Month`
	}
	return `${month} ${day}, ${year}`
}

export function useYearSort(post: Post[] = []) {
	const data = []
	let year = '0'
	let num = -1
	for (let index = 0; index < post.length; index++) {
		const element = post[index]
		if (element.frontMatter.date) {
			const y = element.frontMatter.date.split('-')[0]
			if (y === year) {
				data[num].push(element)
			} else {
				num++
				data[num] = [] as any
				data[num].push(element)
				year = y
			}
		}
	}
	return data
}

// 获取导航标题
export function getHeaders(range: any) {
	const headers = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6')]
		.filter(el => el.id && el.hasChildNodes())
		.map(el => {
			const level = Number(el.tagName[1])
			return {
				title: serializeHeader(el),
				link: '#' + el.id,
				level
			}
		})

	// return resolveHeaders(headers, range);
	return headers
}

function serializeHeader(h: Element): string {
	let ret = ''
	for (const node of h.childNodes) {
		if (node.nodeType === 1) {
			if ((node as Element).classList.contains('VPBadge') || (node as Element).classList.contains('header-anchor')) {
				continue
			}
			ret += node.textContent
		} else if (node.nodeType === 3) {
			ret += node.textContent
		}
	}
	return ret.trim()
}