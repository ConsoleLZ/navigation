<script setup lang="ts">
import {routerConfig} from '~/public/config'
import {type roterModel} from '~/types/router'

const rConfig:roterModel[] = routerConfig
const changePage = (url:string)=>{
  location.href = url
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="w-8 rounded-full">
          <img
            alt="logo"
            src="/favicon.svg" />
        </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" @click="changePage('/')">WV</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in rConfig" :key="item.url" @click="changePage(item.url)"><a><img width="18px" :src="item.icon">{{ item.name }}</a></li>
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