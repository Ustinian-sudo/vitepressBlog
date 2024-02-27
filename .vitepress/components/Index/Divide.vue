<script lang="ts" setup>
// import '~/font/iconfont.js';
// import '~/font/iconfont.css';

const props = defineProps<{
    data: Array<any>;
}>();
</script>

<template>
    <div class="divide-container">
        <div class="divide-left">
            <div class="post-list">
                <div class="post-item card-box" v-for="(item, index) in 20">
                    <div class="post-header">Git修改分支名</div>
                    <div class="post-info">
                        <span>
                            <i class="iconfont icon-user"></i>
                            xugaoyi {{ item }}
                        </span>
                        <span>
                            <i class="iconfont icon-date"></i>
                            2023-10-01 {{ index }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="divide-right">
            <div class="divide-wrapper card-box">
                <div class="wrapper-header">
                    <i class="iconfont icon-fenlei"></i>
                    全部分类
                </div>
                <div class="wrapper-list">
                    <div class="wrapper-item active">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item active">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item active">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                    <div class="wrapper-item">
                        <span>更多</span>
                        <span class="num">12</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
</template>

<style lang="scss" scoped>
.card-box {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.5s;
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
.divide-container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 50px;
    .divide-left {
        flex: 1;
        .post-list {
            .post-item {
                padding: 1rem 1.5rem;
                margin-bottom: 0.8rem;
                transition: all 0.3s;
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
    .divide-right {
        width: 245px;
        .card-box {
            margin: 0 0 0.8rem 0.8rem;
            padding-top: 0.95rem;
            padding-bottom: 0.95rem;
        }
        .divide-wrapper {
            flex: 1;
            position: sticky;
            top: 4.5rem;
            max-height: calc(100vh - 10rem);
            min-height: 4.2rem;
            .wrapper-header {
                opacity: 0.9;
                font-size: 1.2rem;
                padding: 8px 0.95rem 7px;
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
    .divide-container {
        margin: 0.9rem 0;
        padding: 0;
        display: block;
        .divide-right {
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
