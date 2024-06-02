/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
	{ text: '🏠Home', link: '/' },
	{ text: '🧭Guide', link: '/pages/guide' },
	{ text: '🍸Life', items: [{ text: 'Photo', link: '/pages/photo' }] },
	{
		text: '📖Index',
		items: [
			{ text: 'Archive', link: '/pages/archive' },
			{ text: 'Sort', link: '/pages/sort' },
			{ text: 'Inbox', link: '/pages/inbox' }
		]
	},
	{ text: '🔧Upgrade', link: '/pages/upgrade' },
	{ text: '👁️‍🗨️About', link: '/pages/about' }
]
