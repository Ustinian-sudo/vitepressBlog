<script lang="ts" setup>
import { useData, onContentUpdated } from "vitepress";
import { ref } from "vue";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
type pageData = {
    description: string;
    title: string;
    frontmatter: object;
    headers: object[];
    lastUpdated: number;
    relativePath: string;
};
//@ts-ignore
const pageData: pageData = useData().page;
// console.log(pageData)
const publishDate = ref("");
dayjs.extend(relativeTime);
onContentUpdated(() => {
    //@ts-ignore
    const { frontmatter } = pageData.value;
    publishDate.value = dayjs().to(dayjs(frontmatter.date || Date.now()));
});
</script>

<template>
    <h1 class="title">{{ pageData.title }}</h1>
    <div class="date">🕒 Published at: {{ publishDate }}</div>
</template>

<style scoped>
.title {
    color: var(--vp-c-text-1);
    font-weight: bolder;
    font-size: 2.25em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    line-height: 1.3;
    /* font-family: Dosis, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji"; */
}

.date {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 1px dashed #c7c7c7;
}
</style>
  