<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../../utils/tags'

const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))
let selectTag = ref<any>("全部");
const toggleTag = (tag: any) => {
    selectTag.value = tag;
};
</script>

<template>
    <div class="sort-container">
        <div class="sort-left">
            <div class="post-list" v-show="selectTag">
                <div class="post-item card-box" v-for="item in data[selectTag]">
                    <div class="post-header">
                        <a :href="withBase(item.regularPath)">
                            {{ item.frontMatter.title }}
                        </a>
                    </div>

                    <div class="post-info">
                        <span>
                            <i class="iconfont icon-user"></i>
                            {{ item.frontMatter.author }}
                        </span>
                        <span>
                            <i class="iconfont icon-rili"></i>
                            {{ item.frontMatter.date }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sort-right">
            <div class="sort-wrapper card-box">
                <div class="wrapper-header">
                    <i class="iconfont icon-2"></i>
                    全部分类
                </div>
                <div class="wrapper-list">
                    <div @click="toggleTag(key)" :class="['wrapper-item', { active: selectTag === key }]"
                        v-for="(item, key) in data">
                        <span>{{ key }}</span>
                        <span class="num">{{ item.length }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
</template>

<style lang="scss" scoped>
// @keyframes fadeIn {
//     0% {
//         opacity: 0;
//         /* 初始状态：完全透明 */
//     }

//     50% {
//         opacity: 0.5;
//         /* 中间状态：半透明 */
//     }

//     100% {
//         opacity: 1;
//         /* 最终状态：完全不透明 */
//     }
// }
.card-box {
    border-radius: 5px;
    background: var(--vp-c-bg-soft);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    // transition: box-shadow 0.5s;

    &:hover {
        box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.1);
    }
}

.active {
    background: #11a8cd !important;
    color: #fff !important;
    padding-left: 0.8rem;
    border-radius: 1px;
    border-color: transparent;
}

.sort-container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 4rem;

    .sort-left {
        flex: 1;

        .post-list {
            .post-item {
                padding: 1rem 1.5rem;
                margin-bottom: 0.8rem;
                // transition: all 0.3s;

                .post-header {
                    font-size: 1.4rem;
                    margin: 0.5rem 0;
                    cursor: pointer;

                    &:hover {
                        color: #11a8cd;
                    }
                }

                .post-info {
                    span {
                        opacity: 0.7;
                        font-size: 0.8rem;
                        margin-right: 1rem;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .sort-right {
        width: 245px;

        .card-box {
            // width: 100%;
            width: inherit;
            margin: 0 0 0.8rem 0.8rem;
            padding-top: 0.95rem;
            padding-bottom: 0.95rem;
        }

        .sort-wrapper {
            position: fixed;
            // max-height: calc(100vh - 10rem);
            min-height: 4.2rem;

            .wrapper-header {
                opacity: 0.9;
                font-size: 1.2rem;
                padding: 0px 0.95rem 7px;
            }

            .wrapper-list {
                .wrapper-item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.95rem;
                    line-height: 0.95rem;
                    padding: 8px 0.95rem 7px;
                    opacity: 0.8;
                    font-size: 0.95rem;
                    line-height: 0.95rem;
                    position: relative;
                    transition: all 0.2s;
                    border-left: 2px solid transparent;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    cursor: pointer;

                    &:hover {
                        color: #11a8cd;
                        background: #f8f8f8;
                        border-color: #11a8cd;
                    }

                    span {
                        display: inline-block;
                    }

                    .num {
                        background-color: #00323c;
                        color: #fff;
                        border-radius: 8px;
                        padding: 0 0.13rem;
                        min-width: 1rem;
                        height: 1rem;
                        line-height: 1rem;
                        font-size: 0.6rem;
                        text-align: center;
                        opacity: 0.6;
                        transition: opacity 0.3s;
                    }
                }
            }
        }
    }
}

@media (max-width: 719px) {
    .sort-container {
        margin: 0.9rem 0;
        padding: 0;
        display: block;

        .sort-right {
            width: 100%;

            .card-box {
                margin: 0 0 0.9rem;
                border-radius: 0;
                width: 100%;
            }
        }
    }
}
</style>
