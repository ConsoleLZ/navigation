<script setup lang="ts">
import {ref, type Ref} from "vue"
import {type projectArr} from "~/types/project";

let data:Ref<projectArr> = ref([])
fetch('/json/project.json').then(res=>res.json()).then(res=>{
  data.value = res.data
})
</script>

<template>
  <div class="app">
    <Header></Header>
    <div class="main_item" v-for="item in data" :key="item.id">
      <div class="bg" :style="'background-image: url('+ item.img + ')'"></div>
      <div class="right">
        <div class="name">{{item.name}}</div>
        <div class="description">{{item.description}}</div>
        <div class="lan">
          <div v-for="item2 in item.tags" :key="item2"># {{item2}}</div>
        </div>
        <div class="bottom">
          <div>
            <img src="/images/warehouse.svg" alt="">
            <a :href="item.ckURL" target="_blank">仓库地址</a>
          </div>
          <div>
            <img src="/images/preview.svg" alt="">
            <a :href="item.prURL" target="_blank">预览地址</a>
          </div>
          <div>
            <img src="/images/time.svg" alt="">
            <div>{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_item{
  width: 95vw;
  height: 250px;
  margin: 10px auto;
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 15px 10px 15px 0;
  box-sizing: border-box;
}
.bg{
  flex: 1;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-right: 20px;
}
.right{
  width: 60%;
  position: relative;
}
.name{
  margin-bottom: 10px;
  font-weight: 700;
}
.description{
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-line-clamp: 6; /* 行数，值可以改，表示展示X行后多余的缩略展示 */
  -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
}
.bottom{
  width: 100%;
  position: absolute;
  bottom: 10px;
  right: 0;
  display: flex;
  gap: 10px;
}
.bottom>div{
  display: flex;
  gap: 3px;
  font-size: 12px;
  color: gray;
}
.bottom img{
  width: 15px;
  position: relative;
  top: 1px;
}
.lan{
  width: 100%;
  display: flex;
  gap: 10px;
  position: absolute;
  right: 0;
  bottom: 35px;
}
.lan>div{
  border-radius: 3px;
  padding: 5px;
  background-color: #e6e6e8;
  box-sizing: border-box;
  font-size: 12px;
}
.bottom a{
  text-decoration: none;
  color: gray;
  display: inline-block;
  white-space: nowrap;
}
.bottom a:hover{
  color: #0047e1;
}
@media screen and (max-width: 550px) {
  .main_item{
    flex-direction: column;
    height: 325px;
    padding: 0;
  }
  .bg{
    width: 100%;
    flex: none;
    height: 50%;
    margin-right: 0;
  }
  .right{
    width: 100%;
  }
  .lan{
    position: relative;
    top: 0;
    left: 0;
  }
  .bottom{
    position: relative;
    top: 0;
    left: 0;
  }
  .description{
    -webkit-line-clamp: 4; /* 行数，值可以改，表示展示X行后多余的缩略展示 */
  }
}
</style>