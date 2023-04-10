/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
    { text: '🏠首页', link: '/' },
    { text: '📖搬砖日记', link: '/daily/' },
    {
        text: '📓索引',
        items: [
            { text: '归档', link: '/archives/blog/' },
            { text: '分类', link: '/archives/tag/' },
        ],
    },
    { text: '🔧更新日志', link: '/log/' },
    { text: '👁️‍🗨️关于我', link: '/mine/' },
];
