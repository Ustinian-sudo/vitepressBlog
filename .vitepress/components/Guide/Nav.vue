<script lang="ts" setup>
import NavItem from './NavItem.vue';
import { slugify } from '@mdit-vue/shared';
import { NAV_DATA } from './data';

type Nav = {
    icon?: string | { svg: string };
    title: string;
    desc?: string;
    link: string;
}

</script>

<template>
    <div class="nav-container">
        <div class="nav-box" v-for="(item, index) in NAV_DATA" :key="index">
            <h2 :id="item.title" tabindex="-1">
                {{ item.title }}
                <a class="header-anchor" :href="`# ${item.title}`" aria-hidden="true"></a>
            </h2>
            <div class="nav-item">
                <NavItem v-for="{ icon, title, desc, link } in item.children" :key="link" :icon="icon" :title="title"
                    :desc="desc" :link="link"></NavItem>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-container {
    .nav-box {
        h2 {
            // margin-top: 0;
            // border-top: none;
            margin: 0 0 16px;
            // border-top: 1px solid var(--vp-c-divider);
            padding-top: 24px;
            letter-spacing: -0.02em;
            line-height: 32px;
            font-size: 24px;
        }
    }
}

.nav-item {
    // display: flex;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-auto-flow: row dense;
    justify-content: center;
    // margin-top: 20px;
}

@media (min-width: 960px) {
    .nav-item {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
// @media (min-width: 768px) {
//     .nav-item {
//         grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
//     }
// }

// @media (min-width: 640px) {
//     .nav-item {
//         grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
//     }
// }

// @media (min-width: 500px) {
//     .nav-item {
//         grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
//     }
// }
</style>
