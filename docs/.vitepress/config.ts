export default {
	title: 'Ustinian', //站点标题
	description: 'Ustinian的个人博客', //mate标签description，多用于搜索引擎抓取摘要
	head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/avatar.png' }]],
	themeConfig: {
		logo: '/avatar.png',
		nav: [
			{ text: '🏠首页', link: '/' },
			{ text: '📖搬砖日记', link: '/daily/' },
			{ text: '前端总结', link: '/javascript/' },
			{ text: '🔧更新日志', link: '/log/' },
			{
				text: ' 🗞️我的博客',
				items: [
					{ text: 'CSDN', link: 'https://blog.csdn.net/Th_rob?spm=1010.2135.3001.5343' },
					{ text: '掘金', link: 'https://juejin.cn/user/3189018107583960' }
				]
			},
			{ text: '👁️‍🗨️关于我', link: '/mine/' }
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/Ustinian-sudo' }], // 社交链接

		// 底部
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-10-10～present ustinian'
		},

		// 侧边栏
		sidebar: {
			'/daily/': [
				{
					text: '2022年每日笔记',
					items: [
						{ text: 'home', link: '/daily/' },
						{ text: '2022-10', link: '/daily/2022-10' }
					]
				}
			]
		}
	},
	vite: {
		server: {
			host: true,
			port: 3000,
			open: true,
			proxy: {
				'/so': {
					target: 'http://139.159.245.209:5000', // 代理接口
					changeOrigin: true,
					rewrite: path => path.replace(/^\/so/, '')
				}
			}
		}
	}
}
