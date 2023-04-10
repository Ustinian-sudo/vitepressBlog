import type { NavLink } from '../types';

type NavData = {
    title: string;
    children: NavLink[];
};

export const NAV_LINK_DATA: NavData[] = [
    {
        title: '常用工具',
        children: [
            {
                icon: 'https://www.emojiall.com/favicon.ico',
                title: 'Emoji 大全',
                desc: 'Emoji 中文网大全',
                link: 'https://www.emojiall.com/zh-hans',
            },
            {
                icon: 'https://regex101.com/static/assets/icon-144.png',
                title: 'Regex101',
                desc: '在线正则测试网站',
                link: 'https://regex101.com/',
            },
        ],
    },

    {
        title: 'Vue 生态',
        children: [
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 3',
                desc: '渐进式 JavaScript 框架',
                link: 'https://cn.vuejs.org',
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 2',
                desc: '渐进式 JavaScript 框架',
                link: 'https://v2.cn.vuejs.org',
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue Router',
                desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
                link: 'https://router.vuejs.org/zh',
            },
            {
                icon: 'https://pinia.vuejs.org/logo.svg',
                title: 'Pinia',
                desc: '符合直觉的 Vue.js 状态管理库',
                link: 'https://pinia.vuejs.org/zh',
            },
            {
                icon: 'https://vueuse.org/favicon.svg',
                title: 'VueUse',
                desc: 'Vue Composition API 的常用工具集',
                link: 'https://vueuse.org',
            },
            {
                icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
                title: 'Element Plus',
                desc: '基于 Vue 3，面向设计师和开发者的组件库',
                link: 'https://element-plus.org',
            },
            {
                icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
                title: 'Ant Design Vue',
                desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
                link: 'https://antdv.com',
            },
            {
                icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
                title: 'Vant',
                desc: '轻量、可定制的移动端 Vue 组件库',
                link: 'https://vant-ui.github.io/vant',
            },
            {
                icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
                title: 'Cube UI',
                desc: '基于 Vue.js 实现的精致移动端组件库',
                link: 'https://didi.github.io/cube-ui',
            },
            {
                icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
                title: 'NutUI',
                desc: '京东风格的轻量级移动端组件库',
                link: 'https://nutui.jd.com',
            },
            {
                icon: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
                title: 'Quasar',
                desc: '基于Vue3的高性能组件库',
                link: 'http://www.quasarchs.com/',
            },
        ],
    },
    {
        title: 'JavaScript 框架类库',
        children: [
            {
                icon: 'https://svelte.dev/favicon.png',
                title: 'Svelte',
                desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
                link: 'https://svelte.dev',
            },
            {
                // icon: 'https://simpleicons.org/icons/jquery.svg',
                icon: 'https://jquery.cuishifeng.cn/images/favicon.ico',
                title: 'jQuery API 中文文档',
                desc: '一个兼容多浏览器的 JavaScript 框架',
                link: 'https://jquery.cuishifeng.cn',
            },
        ],
    },
    {
        title: 'CSS 相关',
        children: [
            {
                icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
                title: 'PostCSS',
                desc: '一个用 JavaScript 转换 CSS 的工具',
                link: 'https://postcss.org',
            },
            {
                icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
                title: 'Sass',
                desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
                link: 'https://sass-lang.com',
            },
            {
                icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
                title: 'TailwindCSS 中文网',
                desc: '一个功能类优先的 CSS 框架',
                link: 'https://www.tailwindcss.cn',
            },
            {
                icon: 'https://webgradients.com/img/other/logos/webgradients_logo.png',
                title: 'Webgradients',
                desc: '一个渐变色调色网站',
                link: 'https://webgradients.com/',
            },
            {
                icon: {
                    svg: '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><rect width="128" height="128" rx="64" fill="#6CC1FF"/><g filter="url(#filter0_dddddd)"><rect x="28" y="-36" width="72" height="74" rx="10" fill="white"/></g></g><defs><filter id="filter0_dddddd" x="-39" y="-36" width="206" height="232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2.5182"/><feGaussianBlur stdDeviation="0.927031"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.138919 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="6.05159"/><feGaussianBlur stdDeviation="2.22778"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.176976 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="11.3946"/><feGaussianBlur stdDeviation="4.19472"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.207455 0"/><feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="20.326"/><feGaussianBlur stdDeviation="7.48266"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.253717 0"/><feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="38.0176"/><feGaussianBlur stdDeviation="13.9955"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.345225 0"/><feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="91"/><feGaussianBlur stdDeviation="33.5"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.345098 0 0 0 0.6 0"/><feBlend mode="normal" in2="effect5_dropShadow" result="effect6_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow" result="shape"/></filter><clipPath id="clip0"><rect width="128" height="128" rx="64" fill="white"/></clipPath></defs></svg>',
                },
                title: 'Smooth Shadow',
                desc: 'Box Shadow调试网站',
                link: 'https://shadows.brumm.af/?ref=undesign',
            },
        ],
    },
    {
        title: 'Node 相关',
        children: [
            {
                icon: 'https://nodejs.org/static/images/favicons/favicon.png',
                title: 'Node.js',
                desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
                link: 'https://nodejs.org/zh-cn',
            },
            {
                icon: 'https://expressjs.com/images/favicon.png',
                title: 'Express',
                desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
                link: 'https://expressjs.com',
            },
            {
                icon: 'https://nodejs.org/static/images/favicons/',
                title: 'Koa',
                desc: '基于 Node.js 平台的下一代 web 开发框架',
                link: 'https://koajs.com',
            },
            {
                icon: 'https://www.eggjs.org/favicon.png',
                title: 'Egg',
                desc: '为企业级框架和应用而生',
                link: 'https://www.eggjs.org/zh-CN',
            },
            {
                icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
                title: 'Nest.js 中文文档',
                desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
                link: 'https://docs.nestjs.cn',
            },
        ],
    },
    {
        title: '算法',
        children: [
            {
                icon: 'https://leetcode.cn/favicon.ico',
                title: 'LeetCode',
                desc: '力扣 (LeetCode) 全球极客挚爱的技术成长平台',
                link: 'https://leetcode.cn/',
            },
        ],
    },
    {
        title: '前端工程化',
        children: [
            {
                icon: 'https://www.webpackjs.com/icon_180x180.png',
                title: 'Webpack 中文网',
                desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
                link: 'https://www.webpackjs.com',
            },
            {
                icon: 'https://cn.vitejs.dev/logo.svg',
                title: 'Vite 中文文档',
                desc: '下一代前端工具链',
                link: 'https://cn.vitejs.dev',
            },
            {
                icon: 'https://www.rollupjs.com/img/favicon.png',
                title: 'Rollup',
                desc: 'Rollup 是一个 JavaScript 模块打包器',
                link: 'https://www.rollupjs.com',
            },
            {
                icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
                title: 'Turbo',
                desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
                link: 'https://turbo.build',
            },
            {
                icon: 'https://www.babeljs.cn/img/favicon.png',
                title: 'Babel',
                desc: 'Babel 是一个 JavaScript 编译器',
                link: 'https://www.babeljs.cn',
            },
            {
                icon: 'https://esbuild.github.io/favicon.svg',
                title: 'esbuild',
                desc: 'An extremely fast bundler for the web',
                link: 'https://esbuild.github.io',
            },
            {
                icon: 'https://swc.rs/favicon/apple-touch-icon.png',
                title: 'SWC',
                desc: 'Rust-based platform for the Web',
                link: 'https://swc.rs',
            },
        ],
    },
    {
        title: '前端学习文档',
        children: [
            {
                icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
                title: 'MDN | Web 开发者指南',
                desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
                link: 'https://developer.mozilla.org/zh-CN',
            },
            {
                icon: 'https://static.runoob.com/images/favicon.ico',
                title: '菜鸟教程',
                desc: '学的不仅是技术，更是梦想！',
                link: 'https://www.runoob.com',
            },
        ],
    },
    {
        title: '社区',
        children: [
            {
                title: 'Github',
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
                },
                desc: '一个面向开源及私有软件项目的托管平台',
                link: 'https://github.com',
            },
            {
                title: 'Gitee',
                icon: 'https://gitee.com/favicon.ico',
                desc: '一个国内的代码托管平台',
                link: 'https://gitee.com/',
            },
            {
                icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
                title: 'Stack Overflow',
                desc: '全球最大的技术问答网站',
                link: 'https://stackoverflow.com',
            },
            {
                title: '稀土掘金',
                icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
                desc: '面向全球中文开发者的技术内容分享与交流平台',
                link: 'https://juejin.cn',
            },
            {
                title: 'SegmentFault 思否',
                icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
                desc: '技术问答开发者社区',
                link: 'https://segmentfault.com',
            },
        ],
    },
    // {
    //     title: '摸摸鱼',
    //     children: [
    //         {
    //             icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
    //             title: 'YouTube',
    //             desc: '',
    //             link: 'https://www.youtube.com',
    //         },
    //         {
    //             icon: '/icons/twitter.svg',
    //             title: 'Twitter',
    //             desc: '',
    //             link: 'https://twitter.com',
    //         },
    //         {
    //             icon: 'https://momoyu.cc/icon-192.png',
    //             title: '摸摸鱼热榜',
    //             // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
    //             link: 'https://momoyu.cc',
    //         },
    //     ],
    // },
];
