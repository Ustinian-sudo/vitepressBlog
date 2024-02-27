<script lang="ts" setup>
import { useData, onContentUpdated } from 'vitepress'
import { shallowRef, ref } from 'vue'
import { getHeaders } from '../../utils/common'

const { frontmatter, theme } = useData()
const headers = shallowRef<any>([])
const showIndent = ref(false)
const showIndent2 = ref(false)
onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
    showIndent.value = headers.value.some((header: { level: number; }) => {
        return header.level === 2
    })
    showIndent2.value = headers.value.some((header: { level: number; }) => {
        return header.level === 3
    })
})
</script>

<template>
    <div class="category" v-if="headers.length > 0">
        <ul class="list">
            <li class="header" v-for="item in headers">
                <a :href="item.link" class="header-h2" v-if="item.level === 2">{{
                    item.title
                }}</a>
                <ul v-if="item.level === 3">
                    <li class="header">
                        <a :href="item.link" :class="['header-h3', { showIndent: showIndent }]">{{ item.title }}</a>
                    </li>
                </ul>
                <ul v-if="item.level === 4">
                    <li class="header">
                    <a :href="item.link" :class="['header-h4', { showIndent2: showIndent2 }]">{{ item.title }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.category {
    width: 20rem;
    background: var(--vp-c-bg);
    box-shadow: 6px 6px var(--vp-c-brand);
    border: 4px solid #3f4e4f;
    color: var(--vp-c-brand-light);
    overflow-y: auto;
    max-height: 300px;
}

.list {
    padding-left: 1.25em;
    margin: 1rem 0;
    line-height: 1.7;
    list-style-type: none;
    box-sizing: border-box;
}

.showIndent {
    padding-left: 1rem;
}

.showIndent2 {
    padding-left: 2rem;
}

ul {
    list-style-type: none;
}

.header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media (min-width: 768px) {
    .category {
        max-height: 400px;
    }
}

@media (min-width: 1024px) {
    .category {
        max-height: 450px;
    }
}

@media (min-width: 1400px) {
    .category {
        position: fixed;
        right: 20px;
        max-height: 490px;
    }
}
</style>
