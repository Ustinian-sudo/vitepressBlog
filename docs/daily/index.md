<script setup>
import NavLinks from './components/NavLinks.vue'

import { NAV_LINK_DATA } from './data'
</script>

<NavLinks v-for="(item,index) in NAV_LINK_DATA" :key=index :title="item.title" :children="item.children"/>
