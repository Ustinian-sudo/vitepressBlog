<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import LittleCard from './LittleCard.vue'

const activeTab = ref<number>(0)
const tabWidths = ref<number[]>([])
const tabOffsets = ref<number[]>([])
const tabs = [
	{ name: '详情', icon: 'icon-tuwenzixun' },
	{ name: 'Exif', icon: 'icon-canshu' },
	{ name: '版权', icon: 'icon-banquan' }
]
const tabRefs = ref<HTMLElement[]>([])
const sliderRef = ref<HTMLElement | null>(null)

const calculateTabSizes = () => {
	nextTick(() => {
		tabWidths.value = Array.from(tabRefs.value).map(tab => {
			return tab.offsetWidth
		})
		tabOffsets.value = Array.from(tabRefs.value).map(tab => {
			// if (tab.id === 'Param') {
			// 	return tab.offsetLeft + 8
			// } else if (tab.id === 'Author') {
			// 	return tab.offsetLeft + 16
			// } else {
			return tab.offsetLeft
			// }
		})
	})
}

onMounted(() => {
	calculateTabSizes()
	window.addEventListener('resize', calculateTabSizes)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', calculateTabSizes)
})

const backgroundStyle = computed(() => ({
	width: `${tabWidths.value[activeTab.value]}px`,
	transform: `translateX(${tabOffsets.value[activeTab.value]}px)`
}))
</script>

<template>
	<div class="album">
		<div class="album-container">
			<div class="left-container">
				<div class="gallery">
					<div class="navl nav">
						<span class="icon iconfont icon-zuojiantou1"></span>
					</div>
					<div class="img-box">
						<img src="https://fastly.picsum.photos/id/172/800/500.jpg?hmac=ukroz1OHueoC3JDULheWk3ORRcgrqVdhE1TfcjyD79o" alt="" />
					</div>
					<div class="navr nav">
						<span class="icon iconfont icon-youjiantou1"></span>
					</div>
				</div>
			</div>
			<div class="right-container">
				<div class="tablist">
					<div v-for="(btn, index) in tabs" :key="btn.name" :id="btn.name" :class="{ 'tab-item': true, active: activeTab === index }" @click="activeTab = index" ref="tabRefs">
						<div :class="['iconfont', btn.icon]"></div>
						<div>{{ btn.name }}</div>
					</div>
					<div class="slider" ref="sliderRef" :style="backgroundStyle">
						<div class="tab-background"></div>
					</div>
				</div>
				<div class="tab-content">
					<div class="tab-pane-info">
						<LittleCard></LittleCard>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.slider {
	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	transition: transform 0.3s, opacity 0.3s;
	z-index: 0;
	padding: 0.25rem 0;
}
.tab-background {
	height: 100%;
	opacity: 1;
	border-radius: 8px;
	background-color: #181818;
}

.album {
	.album-container {
		padding-top: 50px;
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		.left-container {
			flex: 2.5;
			.gallery {
				display: flex;
				justify-content: space-between;
				.nav {
					display: flex;
					position: unset;
					align-items: center;
					justify-content: center;
					width: 100px;
					// height: calc(100% - 64px);
					.icon {
						// color: #CACACA;
						position: unset;
						margin-top: 0;
						transform: none;
						font-size: 40px;
						transition: all 0.25s cubic-bezier(0.3, 0.55, 0.1, 1);
						&:hover {
							color: #cacaca;
							cursor: pointer;
						}
					}
				}
				.navl .icon:hover {
					transform: translateX(30%);
				}
				.navr .icon:hover {
					transform: translateX(-30%);
				}
				.img-box {
					// width: 100%;
					// flex: 1;
					// width: 100%;
					// height: 400px;
					// overflow: hidden;
					img {
						// width: 95%;
						// height: 100%;
						// object-fit: cover; /* 图片保持比例铺满盒子 */
					}
				}
			}
			.nav {
				display: flex;
			}
		}
		.right-container {
			flex: 1;
			// background-color: aliceblue;
			.tablist {
				padding: 0.25rem;
				position: relative;
				background-color: #fff;
				border-radius: 12px;
				border: 2px solid #eaeaea;
				margin-bottom: 1rem;
				// width: ;
				display: flex;
				// flex-wrap: nowrap;
				// justify-content: center;
				// box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.02), 0px 2px 10px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
				// align-items: center;
				.tab-item {
                    flex: 1;
					cursor: pointer;
					padding-top: 0.25rem;
					padding-bottom: 0.25rem;
					padding-left: 0.75rem;
					padding-right: 0.75rem;
					border-radius: 8px;
					background-color: transparent;
					font-size: 16px;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 1;
					.iconfont {
						margin-right: 5px;
						font-size: 20px;
					}
				}
				.active {
					color: #fff;
				}
			}
			.tab-content {
				// width: 400px;
				height: 100%;
				// background-color: aqua;
			}
		}
	}
}
</style>
