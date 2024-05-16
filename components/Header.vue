<script setup lang="ts">

</script>

<template>
  <header>
    <div>网站分享</div>
    <div>h5小游戏</div>
    <div>项目</div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: white;
}

header div {
  cursor: pointer;
  transition: all 200ms;
}

header div:hover{
  color: #5086ea;
}
</style>