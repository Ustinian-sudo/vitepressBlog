/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
    '/daily/': [
        {
            text: '导航',
            items: [{ text: 'Home', link: '/daily/' }],
        },
        {
            text: '2022年',
            collapsible: true,
            collapsed: false,
            items: [
                { text: '2022-10', link: '/daily/2022-10' },
                { text: '2022-11', link: '/daily/2022-11' },
                { text: '2022-12', link: '/daily/2022-12' },
            ],
        },
        {
            text: '2023年',
            collapsible: true,
            collapsed: false,
            items: [
                { text: '2023-01', link: '/daily/2023-01' },
                { text: '2023-02', link: '/daily/2023-02' },
                { text: '2023-03', link: '/daily/2023-03' },
            ],
        },
    ],
    '/note/': [
        {
            items: [{ text: '归档', link: '/note/' }],
        },
    ],
};
