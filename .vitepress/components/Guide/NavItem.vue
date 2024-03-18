<script lang="ts" setup>
import { computed, ref } from 'vue';
// import type { NavLink } from './types';
import { slugify } from '@mdit-vue/shared';

type Nav = {
    icon?: string | { svg: string };
    title: string;
    desc?: string;
    link: string;
}

const props = defineProps<{
    icon?: Nav['icon'];
    title: Nav['title'];
    desc?: Nav['desc'];
    link?: Nav['desc'];
}>();

const formatTitle = computed(() => {
    return slugify(props.title);
});

const svg = computed(() => {
    if (typeof props.icon === 'object') return props.icon.svg;
    return '';
});

</script>

<template>
    <a v-if="props.link" :href="props.link" class="nav-link" target="_blank" rel="noreferrer">
        <article class="box">
            <div class="box-header">
                <div v-if="svg" class="icon" v-html="svg"></div>
                <div v-else-if="icon && typeof icon === 'string'" class="icon">
                    <img :src="props.icon as string" :alt="props.title" onerror="this.parentElement.style.display='none'" />
                </div>
                <h5 v-if="props.title" :id="formatTitle" class="title">{{ props.title }}</h5>
            </div>
            <p v-if="props.desc" class="desc">{{ props.desc }}</p>
        </article>
    </a>
</template>

<style lang="scss" scoped>

.nav-link {
    flex: 1;
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    background-color: var(--vp-c-bg-soft);
    height: 100%;
    cursor: pointer;
    transition: border-color 0.25s, background-color 0.25s;

    &:hover {
        -webkit-transform: translateY(-6px);
        -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
        transition: all 0.3s ease;
        border: 1px solid var(--vp-c-brand);
    }

    .box {
        padding: 16px;
        color: var(--vp-c-text-1);
        // height: 110px;
        // width: 200px;

        .box-header {
            display: flex;
            align-items: center;

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 12px;
                width: 48px;
                height: 48px;
                border-radius: 6px;
                font-size: 24px;
                background-color: rgba(142, 150, 170, .14);

                :deep(svg) {
                    width: 24px;
                    fill: currentColor;
                }

                :deep(img) {
                    width: 24px;
                    border-radius: 4px;
                }
            }

            .title {
                overflow: hidden;
                flex-grow: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                line-height: 48px;
                font-size: 16px;
                font-weight: 600;
            }
        }

        .desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-grow: 1;
            margin: 10px 0 0;
            line-height: 20px;
            font-size: 12px;
            color: var(--vp-c-text-2);
        }
    }
}
</style>
