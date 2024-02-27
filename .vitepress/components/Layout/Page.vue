<script lang="ts" setup>
import { ref } from 'vue'
import ShareCard from './ShareCard.vue'
import FireWorksAnimation from '../Animation/FireWorksAnimation.vue'
import { useData, withBase } from 'vitepress'
import { transDate } from '../../utils/common'


const { theme } = useData()

// 文章列表
let postsAll = theme.value.posts || []
console.log("postsAll", postsAll)
// 文章总数
let postLength = theme.value.postLength
// 每页文章数
let pageSize = theme.value.pageSize
// 最大页数
let pagesNum =
    postLength % pageSize === 0
        ? postLength / pageSize
        : postLength / pageSize + 1
pagesNum = parseInt(pagesNum.toString())
// 当前第几页
let pageCurrent = ref(1)

// 分页
let allMap = [] as any[]
for (let i = 0; i < pagesNum; i++) {
    allMap[i] = []
}
let index = 0
for (let i = 0; i < postsAll.length; i++) {
    if (allMap[index].length > pageSize - 1) {
        index += 1
    }
    allMap[index].push(postsAll[i])
}

let posts = ref([] as Post[])
posts.value = allMap[pageCurrent.value - 1]

const go = (i: number) => {
    pageCurrent.value = i
    posts.value = allMap[pageCurrent.value - 1]
}

</script>

<template>
    <FireWorksAnimation />
    <ShareCard />
    <h1 class="blog-title">Blogs</h1>
    <div class="blogList">
        <a class="blog" v-for="item in posts" :href="withBase(item.regularPath)">
            <div class="title">{{ item.frontMatter.title }}</div>
            <div class="date">{{ transDate(item.frontMatter.date || '9999-99-99') }}</div>
        </a>
    </div>
    <div class="pagination">
        <button class="left" v-if="pageCurrent > 1" @click="go(pageCurrent - 1)">
            Previous page
        </button>
        <div v-if="pagesNum > 1">{{ `${pageCurrent}/${pagesNum}` }}</div>
        <button class="right" v-if="pageCurrent < pagesNum" @click="go(pageCurrent + 1)">
            Next page
        </button>
    </div>
</template>

<style scoped>
.blog-title {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 24px;
}

.blogList {
    padding: 30px 0;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.blog {
    width: 85%;
    display: block;
    border-radius: 10px;
    padding: 0 20px;
    margin: 10px;
    background: var(--vp-c-bg);
    max-width: 600px;
    box-shadow: 6px 6px var(--vp-c-brand);
    border: 4px solid #3f4e4f;
    cursor: pointer;
}

.blog:hover {
    text-decoration: none;
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px var(--vp-c-brand);
}

.title {
    color: var(--vp-c-brand-light);
    font-size: 1.2em;
    font-weight: bold;
}

.date {
    padding-bottom: 7px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
}

button {
    display: inline-block;
    position: relative;
    color: var(--vp-c-color-d);
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
}

button::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--vp-c-color-d);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

button:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.left {
    position: absolute;
    left: 0;
}

.right {
    position: absolute;
    right: 0;
}
</style>
