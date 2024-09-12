<script setup lang="ts">
import { type Ref, ref } from "vue"
import { type H5GamesArr } from "~/types/h5Games";
import { baseURL } from "~/public/config";

const data: Ref<H5GamesArr> = ref([])
$fetch(`${baseURL}/json/h5Games.json`).then((data:any) => {
  data.value = data
})

const onJumpPage = (url:string) =>{
  window.open(url)
}

</script>

<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="main">
      <div v-for="item in data" :key="item.id" class="card bg-base-100 image-full shadow-xl">
        <figure>
          <img :src="item.img" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p></p>
          <p v-show="item.description">{{ item.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="onJumpPage(item.url)">Go</button>
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

@media screen and (max-width: 800px) {
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