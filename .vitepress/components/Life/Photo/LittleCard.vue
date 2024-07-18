<script setup>
import { withBase } from 'vitepress'
</script>

<template>
	<div class="little-card">
		<div class="container">
			<div class="title">
				<img :src="withBase('/svg/info.svg')" />
				<p>相片描述</p>
			</div>
			<h4 class="desc">N/A</h4>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.little-card {
	padding-top: 1rem;
	padding-bottom: 1rem;
	background-color: #fff;
	border-radius: 12px;
	color: #000000;
	font-weight: bolder;
    border: 2px solid #eaeaea;
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
		.title {
			display: flex;
			align-items: center;
			p {
                font-size: 14px;
				margin-left: 0.3rem;
			}
		}
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
	}
}
</style>
