<script lang="ts" setup>
import Badge from './Badge.vue';
import { LOG_INFO } from './data';
</script>

<template>
    <div class="logPage">
        <el-timeline>
            <el-timeline-item v-for="item in LOG_INFO" :timestamp="item.date" placement="top">
                <el-card>
                    <h3 class="version">
                        <span>{{ item.date }}</span>
                        <Badge type="warning">{{ item.version }}</Badge>
                    </h3>
                    <div class="desc" v-for="(subItem, subIndex) in item.desc">
                        <h4 class="subtitle">{{ subItem.type }}</h4>
                        <p v-for="contentItem in subItem.content">{{ contentItem }}</p>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    margin: 8px 0 0;
}
.version {
    margin: 10px 0;
    color: transparent;
    background: #bd34fe;
    -webkit-background-clip: text;
}

.desc p {
    margin: 0;
}

.subtitle {
    color: transparent;
    background: #0366d6;
    -webkit-background-clip: text;
}

.el-timeline {
    list-style: none;
}
</style>
