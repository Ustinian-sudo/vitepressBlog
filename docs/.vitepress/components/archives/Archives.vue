<script lang="ts" setup>
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';

const props = defineProps<{
    title: string;
    data: Array<any>;
}>();

const formatTitle = computed(() => {
    return props.data[activeIndex.value - 1].title;
});
const chilren = computed(() => {
    return props.data[activeIndex.value - 1].chilren;
});
const activeIndex = ref(1);
const onChange = (index: number) => {
    activeIndex.value = index;
};
</script>

<template>
    <h2 :id="title" tabindex="-1" class="title">
        {{ title }}
        <a class="header-anchor" :href="`# ${title}`" aria-hidden="true"></a>
    </h2>
    <div class="article">
        <div class="article-box">
            <h3 class="article-title year">{{ formatTitle }}</h3>
            <div class="article-item" v-for="(item, index) in chilren" :key="index">
                <a :href="withBase(`${item.link}`)" class="article-item-link">
                    {{ item.title }}
                </a>
                <span class="article-item-date date">{{ item.date }}</span>
            </div>
        </div>

        <ul class="pagination">
            <li
                v-for="(item, index) in data.length"
                :key="index"
                :class="{ 'page-item': true, active: index + 1 == activeIndex }"
                @click="onChange(item)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.vp-doc h2 {
    border-top: none;
}
.title {
    font-family: var(--date-font-family);
}
.year {
    font-family: var(--date-font-family);
}
.date {
    font-weight: 700;
    font-family: var(--date-font-family);
}
.article {
    .article-box {
        height: 400px;
        .article-title {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .article-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            margin: 0.25rem 0 0.25rem 1.5rem;

            .article-item-link {
                min-width: 10%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-decoration: none;
                color: #050505;
                &:hover {
                    color: var(--vp-c-brand);
                }
            }

            .article-item-date {
                width: 4em;
                text-align: right;
                color: #7e7e85;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        list-style: none;
        white-space: nowrap;
        padding: 1rem 0 0;

        .page-item {
            font-size: 0.8rem;
            cursor: pointer;
            color: #bfbfbf;
            letter-spacing: 0.1rem;
            box-sizing: border-box;
            position: relative;
            font-weight: 700;
            padding: 0 0.35rem;
            margin: 0 20px;

            &:hover {
                &:after {
                    width: 50%;
                }

                &:before {
                    width: 50%;
                }
            }

            &::after {
                right: 50%;
            }

            &:before {
                left: 50%;
            }

            &:after,
            &:before {
                position: absolute;
                content: '';
                width: 0px;
                height: 3px;
                background: var(--vp-c-brand);
                -webkit-transition: 0.3s;
                -moz-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
                bottom: 0px;
            }
        }

        .active {
            color: var(--vp-c-brand);

            &:after {
                width: 50%;
            }

            &:before {
                width: 50%;
            }
        }
    }
}
</style>
