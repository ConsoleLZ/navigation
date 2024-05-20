<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <div class="sidebar">
        <a href="#aboutFrontEnd">关于前端</a>
        <a href="#UIFramework">UI框架</a>
        <a href="#design">设计</a>
        <a href="#tools">工具</a>
        <a href="#AI">AI</a>
        <a href="#cloudPlatform">云平台</a>
        <a href="#networkSecurity">网络安全</a>
        <a href="#other">其他</a>
      </div>
      <div class="sidebar_right">
        <div id="aboutFrontEnd">
          <div style="margin-bottom: 10px;font-weight: 700">关于前端</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data1" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="UIFramework">
          <div style="margin-bottom: 10px;font-weight: 700">UI框架</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data8" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="design">
          <div style="margin-bottom: 10px;font-weight: 700">设计</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data6" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="tools">
          <div style="margin-bottom: 10px;font-weight: 700">工具</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data2" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="AI">
          <div style="margin-bottom: 10px;font-weight: 700">AI</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data7" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="cloudPlatform">
          <div style="margin-bottom: 10px;font-weight: 700">云平台</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data3" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="networkSecurity">
          <div style="margin-bottom: 10px;font-weight: 700">网络安全</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data4" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="other">
          <div style="margin-bottom: 10px;font-weight: 700">其他</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in data5" :key="item.id" :data-title="item.description" :href="item.url"
               target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type Ref, ref} from "vue"
import {type webDataArr} from "~/types/webData";
import Header from "~/components/Header.vue";

// 判断图片链接是否有效
function isLink(src:string){
  return new Promise((resolve, reject) => {
    let img = new Image(0,0)

    img.src = src
    img.addEventListener('load', () => {
      resolve(true)
    })
    img.addEventListener('error', () => {
      resolve(false)
    })
  })
}
// 关于前端
const data1: Ref<webDataArr> = ref([])
// 工具
const data2: Ref<webDataArr> = ref([])
// 云平台
const data3: Ref<webDataArr> = ref([])
// 网络安全
const data4: Ref<webDataArr> = ref([])
// 其他
const data5: Ref<webDataArr> = ref([])
// 设计
const data6: Ref<webDataArr> = ref([])
// AI
const data7: Ref<webDataArr> = ref([])
// ui框架
const data8: Ref<webDataArr> = ref([])
fetch("/json/webData.json").then(res => res.json()).then(res => {
  // 关于前端
  data1.value = res.aboutFrontEnd
  for(let item of data1.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // 工具
  data2.value = res.tools
  for(let item of data2.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // 云平台
  data3.value = res.cloudPlatform
  for(let item of data3.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // 网络安全
  data4.value = res.networkSecurity
  for(let item of data4.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // 其他
  data5.value = res.other
  for(let item of data5.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // 设计
  data6.value = res.design
  for(let item of data6.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // AI
  data7.value = res.AI
  for(let item of data7.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
  // ui框架
  data8.value = res.UIFramework
  for(let item of data8.value){
    isLink(item.ico).then(res=>{
      if(!res){
        item.ico = '/replace.svg'
      }
    })
  }
})
</script>

<style scoped>
.main {
  width: 100%;
  flex: 1;
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 12px;
}

.sidebar>a{
  cursor: pointer;
  transition: all 200ms;
  text-decoration: none;
  color: black;
}

.sidebar>a:hover{
  color: #3e68f1;
}

.sidebar_right {
  width: 90%;
  height: 100%;
  padding-left: 120px;
  padding-top: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 550px) {
  .sidebar{
    display: none;
  }
  .sidebar_right{
    padding-left: 0;
    margin: 0 auto;
  }
  .main_item{
    width: 40% !important;
  }
}

.sidebar_right > div {
  width: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 10px 40px;
  box-sizing: border-box;
}

.main_item {
  width: 18%;
  padding: 3px;
  display: flex;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  transition: all 200ms;
  font-size: 16px;
  text-decoration: none;
}
.main_item span{
  width: 80%;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main_item span:hover {
  width: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.main_item:hover::before {
  content: attr(data-title);
  position: absolute;
  background: #231e1e;
  color: white;
  padding: 2px 8px;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  white-space: nowrap;
}

.ico {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>