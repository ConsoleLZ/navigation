<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="blender">
      <div v-for="item in data" :key="item.id" class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>{{ item.des }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="onDownload(item.url)">下载</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./main.ts"></script>
<style src="./index.css" scoped></style>
