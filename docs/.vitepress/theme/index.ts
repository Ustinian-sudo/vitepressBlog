import DefaultTheme from 'vitepress/theme';
import './styles/var.scss';
import './styles/default.scss';

// element-plus组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 自定义组件
import Bubble from '../components/animation/Bubble.vue';

export default {
    ...DefaultTheme,
    // 注册全局组件
    //@ts-ignore
    enhanceApp({ app, router, siteData }) {
        // register global components
        app.use(ElementPlus);
        app.use(Bubble);
    },
};
