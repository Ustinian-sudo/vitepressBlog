<script lang="ts" setup>
import NavLinkItem from './NavLink.vue';
import { slugify } from '@mdit-vue/shared';
import type { NavLink } from '../types';
import { computed } from 'vue';

const props = defineProps<{
    title: string;
    children: NavLink[];
}>();

const formatTitle = computed(() => {
    if (!props.title) {
        return '';
    }
    return slugify(props.title);
});
</script>

<template>
    <div class="nav-links-container">
        <h2 :id="formatTitle" tabindex="-1">
            {{ props.title }}
            <a class="header-anchor" :href="`# ${formatTitle}`" aria-hidden="true"></a>
        </h2>
        <div class="nav-links-item">
            <NavLinkItem
                v-for="{ icon, title, desc, link } in props.children"
                :key="link"
                :icon="icon"
                :title="title"
                :desc="desc"
                :link="link"
            ></NavLinkItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-links-item {
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: 20px;
}

@media (min-width: 1440px) {
    .nav-links-item {
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    }
}
</style>
