<script setup>
import NavLinks from './components/NavLinks.vue'
import Bubble from '../.vitepress/components/animation/Bubble.vue'

import { NAV_LINK_DATA } from './data'
</script>

<Bubble/>
<NavLinks v-for="(item,index) in NAV_LINK_DATA" :key=index :title="item.title" :children="item.children"/>
