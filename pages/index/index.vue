<template>
  <Navbar></Navbar>
  <div class="app">
    <div class="main">
      <div class="sidebar">
        <a href="#aboutFrontEnd">关于前端</a>
        <a href="#documentation">前端文档</a>
        <a href="#UIFramework">UI框架</a>
        <a href="#material">素材资源</a>
        <a href="#design">设计</a>
        <a href="#tools">工具</a>
        <a href="#AI">AI</a>
        <a href="#cloudPlatform">云平台</a>
        <a href="#networkSecurity">网络安全</a>
        <a href="#study">学习</a>
        <a href="#games">游戏资源</a>
        <a href="#other">其他</a>
      </div>
      <div class="sidebar_right">
        <div id="aboutFrontEnd">
          <button></button>
          <div style="margin-bottom: 10px;font-weight: 700">关于前端</div>
          <div style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in aboutFrontEnd" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="documentation">
          <div style="margin-bottom: 10px;font-weight: 700">前端文档</div>
          <div v-if="documentation.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in documentation" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="UIFramework">
          <div style="margin-bottom: 10px;font-weight: 700">UI框架</div>
          <div v-if="UIFramework.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in UIFramework" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="material">
          <div style="margin-bottom: 10px;font-weight: 700">素材资源</div>
          <div v-if="material.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in material" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="design">
          <div style="margin-bottom: 10px;font-weight: 700">设计</div>
          <div v-if="design.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in design" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="tools">
          <div style="margin-bottom: 10px;font-weight: 700">工具</div>
          <div v-if="tools.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in tools" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="AI">
          <div style="margin-bottom: 10px;font-weight: 700">AI</div>
          <div v-if="AI.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in AI" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="cloudPlatform">
          <div style="margin-bottom: 10px;font-weight: 700">云平台</div>
          <div v-if="cloudPlatform.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in cloudPlatform" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="networkSecurity">
          <div style="margin-bottom: 10px;font-weight: 700">网络安全</div>
          <div v-if="networkSecurity.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in networkSecurity" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="study">
          <div style="margin-bottom: 10px;font-weight: 700">学习</div>
          <div v-if="study.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in study" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="games">
          <div style="margin-bottom: 10px;font-weight: 700">游戏资源</div>
          <div v-if="games.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in games" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
        <div id="other">
          <div style="margin-bottom: 10px;font-weight: 700">其他</div>
          <div v-if="other.length" style="display: flex;flex-wrap: wrap;gap: 10px">
            <a class="main_item" v-for="item in other" :key="item.id" :data-title="item.description" :href="item.url"
              target="_blank">
              <div class="ico" :style="'background-image: url(' + item.ico + ')'"></div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="frLink">
      <div class="title">友链</div>
      <a href="https://daisyui.com/" target="_blank">
        <img src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" alt="daisyui">
        <span>daisyui</span>
      </a>
      <a href="https://icp.gov.moe/?keyword=20240061" target="_blank">
        <img src="https://icp.gov.moe/favicon.ico" alt="萌国ICP备案">
        <span>萌ICP备20240061号</span>
      </a>
      <a href="https://nuxt.com.cn/" target="_blank">
        <img src="https://nuxt.com.cn/icon.png" alt="nuxt框架">
        <span>nuxt框架</span>
      </a>
      <a href="https://ziyuan.baidu.com/dailysubmit/index" target="_blank">
        <img src="https://ziyuan.baidu.com/favicon.ico" alt="百度收录">
        <span>百度收录</span>
      </a>
    </div>
    <div class="abInfo">
      <div class="title">个人信息</div>
      <div class="abinfo_item">
        <span>站长</span>
        <button class="btn btn-link btn-sm">程序猿小哲</button>
      </div>
      <div class="abinfo_item">
        <span>个人博客</span>
        <button class="btn btn-link btn-sm" @click="onJumpBlog">https://consolelz.github.io/</button>
      </div>
      <div class="abinfo_item">
        <span>联系方式</span>
        <button class="btn btn-link btn-sm">17347187569</button>
      </div>
      <div class="abinfo_item">
        <span>邮箱</span>
        <button class="btn btn-link btn-sm">17347187569@163.com</button>
      </div>
    </div>
    <div class="staWeb">
      <div class="title">站点信息</div>
      <div>本站已经运行:<span style="margin-left: 5px;" class="badge badge-primary badge-outline">{{ webTime }}</span></div>
    </div>
  </footer>
</template>

<script lang="ts" src="./main.ts"></script>
<style src="./index.css" scoped></style>