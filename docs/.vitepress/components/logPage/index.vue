<template>
  <div class="logPage">
    <el-timeline>
      <el-timeline-item timestamp="2022/10/10" placement="top">
        <el-card>
          <h3 class="version">
            <span>blog</span>
            <Badge type="warning">beta</Badge>
          </h3>
          <h4 class="subtitle">更新</h4>
          <p>初步搭建blog v1.0.0版本网站</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import Badge from '../tools/Badge.vue';
</script>

<style lang="scss" scoped>
.version {
  margin: 20px 0;
  color: transparent;
  background: #bd34fe;
  -webkit-background-clip: text;
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
