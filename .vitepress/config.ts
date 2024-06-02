import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import path from 'path'
// 方法
import { getPosts, getPostLength } from './utils/post'

// 修改成config导出配置的形式，避免ts报错影响
async function config() {
	return {
		title: 'Ustinian', //站点标题
		ignoreDeadLinks: true,
		description: 'Ustinian的个人博客', //mate标签description，多用于搜索引擎抓取摘要
		head: [
			['link', { rel: 'icon', type: 'image/svg+xml', href: '/avatar.png' }],
			[
				'link',
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'
				}
			],
			['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }]
		],
		themeConfig: {
			logo: '/avatar.png',
			// avator: "/avator.png",
			// algolia: {
			//     apiKey: 'your_api_key',
			//     indexName: 'index_name',
			// },
			nav,
			dailyPosts: await getPosts('posts/inbox/'),
			posts: await getPosts(),
			pageSize: 5,
			postLength: await getPostLength(),
			socialLinks: [{ icon: 'github', link: 'https://github.com/Ustinian-sudo' }], // 社交链接
			// lastUpdated: {
			//   text: 'Updated at',
			//   formatOptions: {
			//     dateStyle: 'full',
			//     timeStyle: 'medium'
			//   }
			// },
			// // 底部
			// footer: {
			//     message: 'Released under the MIT License.',
			//     copyright: 'Copyright © 2022-10-10～present ustinian',
			// },

			sidebar,
			// 修改成右侧aside自定义显示层级
			aside: false,
			// 彩色火花动画效果
			showFireworksAnimation: false
		},
		// markdown
		markdown: {
			config: (md: any) => {
				// use more markdown-it plugins!
				md.use(mdItCustomAttrs, 'image', {
					'data-fancybox': 'gallery'
				})
			},
		},
		vite: {
			server: {
				host: true,
				port: 8888,
				//   open: true,
				proxy: {
					'/so': {
						target: 'http://139.159.245.209:5000', // 代理接口
						changeOrigin: true,
						rewrite: (path: string) => path.replace(/^\/so/, '')
					}
				}
			},
			resolve: {
				alias: {
					'@': path.resolve(__dirname, './'),
					'~': path.resolve(__dirname, '../public')
				}
			}
		}
	}
}

export default config()
