<script setup lang="ts">
function changePage1(){
  location.href = '/'
}
function changePage2(){
  location.href = '/h5Games'
}
function changePage3(){
  location.href = '/github'
}

function changePage4(){
  location.href = '/project'
}
</script>

<template>
  <header>
    <div @click="changePage1()">网站分享</div>
    <div @click="changePage2()">h5小游戏</div>
    <div @click="changePage3()">github爆火项目</div>
    <div @click="changePage4()">我的项目</div>
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
  margin-bottom: 20px;
}

header div {
  cursor: pointer;
  transition: all 200ms;
}

header div:hover{
  color: #5086ea;
}
</style>