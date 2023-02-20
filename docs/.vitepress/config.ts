export default {
  title: "Ustinian", //站点标题
  description: "Ustinian的个人博客", //mate标签description，多用于搜索引擎抓取摘要
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/avatar.png" }]],
  themeConfig: {
    logo: "/avatar.png",
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    nav: [
      { text: "🏠首页", link: "/" },
      { text: "📖搬砖日记", link: "/daily/" },
      { text: "📓我的笔记", link: "/note/" },
      { text: "🔧更新日志", link: "/log/" },
      { text: "👁️‍🗨️关于我", link: "/mine/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Ustinian-sudo" }], // 社交链接

    // 底部
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-10-10～present ustinian",
    },

    // 侧边栏
    sidebar: {
      "/daily/": [
        {
          text: "首页",
          items: [{ text: "Home", link: "/daily/" }],
        },
        {
          text: "2022年",
          items: [
            { text: "2022-10", link: "/daily/2022-10" },
            { text: "2022-11", link: "/daily/2022-11" },
            { text: "2022-12", link: "/daily/2022-12" },
          ],
        },
        {
          text: "2023年",
          items: [
            { text: "2023-01", link: "/daily/2023-01" },
            { text: "2023-02", link: "/daily/2023-02" },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 8888,
      //   open: true,
      proxy: {
        "/so": {
          target: "http://139.159.245.209:5000", // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, ""),
        },
      },
    },
  },
};
