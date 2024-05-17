<script setup lang="ts">
import {type Ref, ref} from "vue"
import {type GithubArr} from "~/types/github";

let data:Ref<GithubArr> = ref([])
fetch("/navigation/dist/json/github.json").then(res=>res.json()).then(res=>{
   data.value = res
})

</script>

<template>
  <div class="app">
    <Header></Header>
    <div class="main_item" v-for="item in data" :key="item.id">
      <a class="title" :href="item.url" target="_blank">{{item.name}}</a>
      <p class="description">{{item.description}}</p>
      <div class="bottom">
        <div class="language">
          {{item.language}}
        </div>
        <div class="star">
          <div></div>
          <div>{{item.star}}</div>
        </div>
        <div class="fork">
          <div></div>
          <div>{{item.fork}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_item{
  padding: 10px;
  border-bottom: 1px solid #d0d7de;
}
.title{
  font-size: 20px;
  color: #0969da;
  text-decoration: none;
}
.title:hover{
  text-decoration: underline;
}
.description{
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #636c76;
}
.bottom{
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 25px;
}
.language::before{
  --size: 10px;
  content: "";
  width: var(--size);
  height: var(--size);
  display: inline-block;
  border-radius: calc(var(--size) / 2);
  background-color: #7ca5ff;
  position: relative;
  top: 1px;
}
.star,.fork{
  display: flex;
  gap: 2px;
  color: #4d4b4b;
  align-items: center;
}
.star div:nth-child(1){
  width: 20px;
  height: 20px;
  background: no-repeat url("/images/star.svg") center;
  background-size: contain;
}
.fork div:nth-child(1){
  width: 20px;
  height: 20px;
  background: no-repeat url("/images/fork.svg") center;
  background-size: contain;
}
</style>