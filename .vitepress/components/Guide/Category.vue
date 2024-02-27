<script lang="ts" setup>
import { ref } from 'vue'
import { NAV_HEADERS } from './data'

type NavHeader = {
    level: Number
    link?: string
    title?: string
}

const headers: NavHeader[] = NAV_HEADERS

const showIndent = ref(false)

</script>

<template>
    <div class="category">
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
        left: 20px;
        top: 235px;
        max-height: 490px;
    }
}
</style>
