<template>
  <div class="logPage">
    <el-timeline>
      <el-timeline-item timestamp="2022/10/10" placement="top">
        <el-card>
          <h3 class="version">blog v1.0.0</h3>
          <h4 class="subtitle">更新</h4>
          <p>初步搭建blog v1.0.0版本网站</p>
        </el-card>
      </el-timeline-item>
      <!-- <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item> -->
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "LogPage",

}
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