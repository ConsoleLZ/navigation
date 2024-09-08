<script setup lang="ts">
function changePage1() {
  location.href = '/'
}
function changePage2() {
  location.href = '/h5Games'
}
function changePage3() {
  location.href = '/github'
}

function changePage4() {
  location.href = '/project'
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" @click="changePage1">WV</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li @click="changePage1"><a>网站分享</a></li>
        <li @click="changePage2"><a>h5小游戏</a></li>
        <li @click="changePage3"><a>github爆火项目</a></li>
        <li @click="changePage4"><a>我的项目</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  overflow: auto;
  position: sticky;
  top: 0;
  z-index: 9999;
}
</style>