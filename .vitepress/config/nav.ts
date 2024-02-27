/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
	{ text: '🏠Home', link: '/' },
	{ text: '🧭Guide', link: '/pages/guide' },
	{
		text: '📖Index',
		items: [
			{ text: 'Archive', link: '/pages/archive' },
			{ text: 'Sort', link: '/pages/sort' },
            { text: 'Daily', link: '/pages/daily' },
		]
	},
	{ text: '🔧Upgrade', link: '/pages/upgrade' },
	{ text: '👁️‍🗨️About', link: '/pages/about' }
]
