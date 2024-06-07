<script lang="ts" setup></script>

<template>
	<div class="photo">
		<div class="photo-inner">
			<div class="photo-tab" v-for="i in 10">
				<div class="photo-box animate-magnify">
					<a href="" target="_blank">
						<img src="https://img.kecq.com/upload/fyj/album/2014/xiaodongjiang/IMG_0795.jpg" alt="" />
					</a>
				</div>
				<div class="photo-text">
					<a href="" target="_blank">郴州.高椅岭</a>
					<span class="num">(25 pictures)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.animate-magnify img {
	transition: all 0.5s;
}
.animate-magnify::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3); /* 半透明黑色覆盖层 */
	opacity: 0;
	transition: opacity 0.3s ease; /* 平滑过渡效果 */
}
.animate-magnify:hover img {
	background-color: aqua;
	transform: scale(1.3);
}
.animate-magnify:hover::after {
	opacity: 1;
}
.photo {
	margin-top: 30px;
	margin-bottom: 70px;
	margin-left: 50px;
	margin-right: 50px;
	.photo-inner {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 30px;
		width: 100%;
		.photo-tab {
			.photo-box {
				position: relative;
				overflow: hidden;
				cursor: pointer;
                box-shadow: 17px 17px 23px 0px rgba(0,0,0,0.2);
			}
			.photo-text {
				text-align: center;
				color: rgba(53, 117, 159, 1);
				margin-top: 10px;
				font-size: 18px;
				.num {
					font-size: 14px;
					color: rgba(102, 102, 102, 1);
				}
			}
		}
	}
}
</style>
