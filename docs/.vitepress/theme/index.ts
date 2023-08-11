import DefaultTheme from 'vitepress/theme';
import './styles/var.scss';
import './styles/default.scss';

// element-plus组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 自定义全局组件
import Bubble from '../components/animation/Bubble.vue';
import Archives from '/.vitepress/components/archives/Archives.vue';
import Badge from '../components/tools/Badge.vue';

export default {
    ...DefaultTheme,
    // 注册全局组件
    //@ts-ignore
    enhanceApp({ app, router, siteData }) {
        // register global components
        app.use(ElementPlus);
        app.component('Bubble', Bubble);
        app.component('Archives', Archives);
        app.component('Badge', Badge);
    },
};
