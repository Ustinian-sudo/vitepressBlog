import DefaultTheme from 'vitepress/theme';
import './styles/var.scss';
import './styles/default.scss';

// element-plus组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// iconfont
import '../../public/font/iconfont.js';
import '../../public/font/iconfont.css';


// 自定义全局组件
// import Bubble from '../components/Animation/Bubble.vue';
// import Archives from '/.vitepress/components/archives/Archives.vue';
// import Badge from '../components/Tools/Badge.vue';

// 自定义文章布局
import MyLayout from '../components/Layout/Index.vue';

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    // 注册全局组件
    //@ts-ignore
    enhanceApp({ app, router, siteData }) {
        // register global components
        app.use(ElementPlus);
        // app.component('Bubble', Bubble);
        // app.component('Archives', Archives);
        // app.component('Badge', Badge);
    },
};
