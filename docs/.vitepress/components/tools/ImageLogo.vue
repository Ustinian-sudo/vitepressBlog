<script lang="ts" setup>
const props = defineProps({
    src: String,
    width: String,
    height: String,
})
</script>

<template>
    <div class="img-box">
        <img class="img" :src="props.src" :width="props.width" :height="props.height">
    </div>
</template>

<style lang="scss" scoped>
.clearfix:after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
}

.img-box {
    .img {
        float: left;

    }
}
</style>