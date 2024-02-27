/**
 * date：发布时间
 * version：版本号
 * desc：描述内容
 *  type：版本标识
 *    1. 新增（Features）：新增功能。
 *    2. 修复（Fixed）：修复 bug。
 *    3. 变更（Changed）：对于某些已存在功能所发生的逻辑变化。
 *    4. 优化（Refactored）：性能或结构上的优化，并未带来功能的逻辑变化。
 *    5. 即将删除（Deprecated）：不建议使用 / 在以后的版本中即将删除的功能。
 *    6. 删除（Removed）：已删除的功能。
 *
 */

export const LOG_INFO = [
    {
		date: '2024/02/23',
		version: '1.0.0-beta.2',
		desc: [
            {
				type: 'Features',
				content: [
                    '· 新增学习导航页面',
                ]
			},
            {
				type: 'Fixed',
				content: [
                    '· 修复 Buddle 气泡组件被遮挡问题',
                ]
			},
			{
				type: 'Changed',
				content: [
                    '· 重构 Home、Guide、About 等页面',
                    '· 重构页面 CSS 样式',
                ]
			}
		]
	},
	{
		date: '2022/10/10',
		version: '1.0.0-beta.1',
		desc: [
			{
				type: 'Features',
				content: [
                    '· 初步构建成 blog 网站',
                ]
			}
		]
	}
]
