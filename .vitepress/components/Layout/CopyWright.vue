<script lang="ts" setup>
const date = new Date().getFullYear()
</script>
<template>
  <footer>
    Powered by
    <a href="https://github.com/Ustinian-sudo" target="_blank" title="作者">Ustinian</a>
    | Copyright © 2019-{{ date }} | MIT License
  </footer>
</template>
<style scoped>
footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  /* z-index: -11; */
}

a {
  color: var(--vp-c-brand);
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
