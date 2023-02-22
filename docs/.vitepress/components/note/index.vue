<script setup>
import { ref } from "vue";

const activeIndex = ref(1);
const onChange = (index) => {
  console.log(index)
  activeIndex.value = index;
};
</script>

<template>
  <div class="article">
    <div class="article-box">
      <h3 class="article-title">2023</h3>
      <div class="article-item" v-for="item in 15">
        <a href="#" class="article-item-link">你不知道的那些事?</a>
        <span class="article-item-date">10-21</span>
      </div>
    </div>

    <ul class="pagination">
      <li
        v-for="(item, index) in 3"
        :key="3"
        :class="{ 'page-item': true, active: index + 1 == activeIndex }"
        @click="onChange(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.article {
  .article-box {
    .article-title {
      display: block;
      font-size: 1.17em;
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
        color: #161209;

        &:hover {
          color: var(--vp-c-brand);
        }
      }

      .article-item-date {
        width: 4em;
        text-align: right;
        color: #a9a9b3;
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
        content: "";
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
