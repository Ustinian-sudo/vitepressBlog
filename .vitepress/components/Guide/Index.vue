<script lang="ts" setup>
import Category from './Category.vue'
import Nav from './Nav.vue'
// import 

</script>

<template>
    <div class="main">
        <div class="aside">
            <Category />
        </div>
        <div class="content">
            <!-- <h2>asdasd</h2> -->
            <div class="content-container">
                <h1 class="title">Learning Guiding</h1>
                <div class="date">🕒 Published at: 4 months ago</div>
                <div class="nav">
                    <Nav ></Nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    // padding: 48px 32px 0;
    padding: 3rem 2rem 4rem;

    // display: flex;

    // .aside {
    //     height: 100%;
    //     // overflow: hidden;
    // }
    .content {
        padding-left: 350px;

        .content-container {
            .title {
                color: var(--vp-c-text-1);
                font-weight: 600;
                font-size: 2.25em;
                margin-top: 0.3em;
                margin-bottom: 0.3em;
                line-height: 1.3;
            }

            .date {
                font-size: 0.875rem;
                line-height: 1.25rem;
                margin-bottom: 1em;
                padding-bottom: 1em;
                border-bottom: 1px dashed #c7c7c7;
            }
        }
    }
}
</style>