/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
    '/inbox/': [
        {
            text: '导航',
            items: [{ text: 'Home', link: '/inbox/' }],
        },
        {
            text: '2022年',
            collapsible: true,
            collapsed: false,
            items: [
                { text: '2022-10', link: '/inbox/2022-10' },
                { text: '2022-11', link: '/inbox/2022-11' },
                { text: '2022-12', link: '/inbox/2022-12' },
            ],
        },
        {
            text: '2023年',
            collapsible: true,
            collapsed: false,
            items: [
                { text: '2023-01', link: '/inbox/2023-01' },
                { text: '2023-02', link: '/inbox/2023-02' },
                { text: '2023-03', link: '/inbox/2023-03' },
                { text: '2023-09', link: '/inbox/2023-09' },
            ],
        },
    ],
    // '/archives/tag': [
    //     {
    //         text: '分类',
    //         items: [
    //             { text: 'PHP', link: '/archives/blog/PHP/' },
    //             { text: 'Vue', link: '/archives/blog/Vue/' },
    //     ],
    //     },
    // ],
};
