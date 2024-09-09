<script setup lang="ts">
import { ref, type Ref } from "vue"
import { type projectArr } from "~/types/project";
import { baseURL } from "~/public/config";

let data: Ref<projectArr> = ref([])
fetch(`${baseURL}/json/project.json`).then(res => res.json()).then(res => {
  data.value = res.data
})

const onJumpPage = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="main">
      <div class="card bg-base-100 image-full shadow-xl" v-for="item in data" :key="item.id">
        <figure>
          <img :src="item.img" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p>时间: <span class="badge badge-accent badge-outline">{{ item.time }}</span></p>
          <p>
            <span v-for="tagsItem in item.tags" style="margin-right: 5px;" class="badge badge-ghost">{{ tagsItem
              }}</span>
          </p>
          <div class="card-actions justify-end">
            <button v-if="item.prURL" class="btn btn-primary" @click="onJumpPage(item.prURL)">预览地址</button>
            <button class="btn btn-primary" @click="onJumpPage(item.ckURL)">仓库地址</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  padding: 10px;
}

@media screen and (max-width: 900px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .main {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>