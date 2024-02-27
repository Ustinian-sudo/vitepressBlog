<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
    type: String
})

const borderColor = ref<string>("rgba(60, 60, 67, .29)");
const bgColor = ref<string>("rgb(246,246,247)");
const color = ref<string>("rgba(60, 60, 67, 0.7)");
// const text = ;

onMounted(() => {
    if (props.type === "tip") {
        borderColor.value = "#059669";
        bgColor.value = "rgba(16, 185, 129, .05)";
        color.value = "#10b981"
    } else if (props.type === 'warning') {
        borderColor.value = "#ca8a04";
        bgColor.value = "rgba(234, 179, 8, .05)";
        color.value = "#eab308"
    } else if (props.type === 'danger') {
        borderColor.value = "#e11d48";
        bgColor.value = "rgba(234, 179, 8, .05)";
        color.value = "#f43f5e"
    }
})
</script>

<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
.badge {
    margin-left: 15px;
    padding: 2px 8px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid transparent;
    border-color: v-bind(borderColor);
    background-color: v-bind(bgColor);
    color: v-bind(color);
}
</style>