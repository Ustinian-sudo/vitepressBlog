import DefaultTheme from 'vitepress/theme'
import './styles/var.scss'
import './styles/default.scss'

// element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
	...DefaultTheme,

	// 注册全局组件
	enhanceApp({ app }) {
		// register global components
		app.use(ElementPlus)
	}
}
