import { nav } from './config/nav';
import { sidebar } from './config/sidebar';
export default {
    title: 'Ustinian', //站点标题
    description: 'Ustinian的个人博客', //mate标签description，多用于搜索引擎抓取摘要
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/avatar.png' }]],
    themeConfig: {
        logo: '/avatar.png',
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name',
        },
        nav,
        socialLinks: [{ icon: 'github', link: 'https://github.com/Ustinian-sudo' }], // 社交链接

        // 底部
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-10-10～present ustinian',
        },
        sidebar,
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
                    rewrite: path => path.replace(/^\/so/, ''),
                },
            },
        },
    },
};
