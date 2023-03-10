import DefaultTheme from 'vitepress/theme';
import './styles/var.scss';
import './styles/default.scss';

// element-plus组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 自定义组件

export default {
    ...DefaultTheme,
    // 注册全局组件
    enhanceApp({ app, router, siteData }) {
        // register global components
        app.use(ElementPlus);
    },
};
