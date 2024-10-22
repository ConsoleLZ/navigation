<script setup lang="ts">
import { routerConfig } from '~/public/config'
import { type roterModel } from '~/types/router'
import { data as webData } from '~/public/data/webData';
import { data as githubData } from '~/public/data/github';
import { data as vscodeData } from '~/public/data/vscode';
import { data as addonData } from '~/public/data/addon';
import { data as h5GamesData } from '~/public/data/h5Games';
import { data as projectData } from '~/public/data/project';
import MiniSearch from 'minisearch'


const rConfig: roterModel[] = routerConfig
const searchData = ref<any>([])
const changePage = (url: string) => {
  location.href = url
}
const onJump = (url: string) => {
  window.open(url)
}
// 防抖函数
function debounce(func: any, delay: number) {
  let timerId: any;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this);
      timerId = null;
    }, delay);
  };
}

let webDocuments: any
let githubDocuments: any
let vscodeDocuments: any
let addonDocuments: any
let h5GamesDocuments: any
let projectDocuments: any

if (import.meta.client) {
  let id: number = 1
  switch (true) {
    case location.href.includes('github'):
      githubDocuments = Object.values(githubData).flat().map(item => {
        return {
          name: item.name,
          description: item.description,
          url: item.url,
          id: id++
        }
      })
      break;
    case location.href.includes('vscode'):
      vscodeDocuments = Object.values(vscodeData).flat().map(item => {
        return {
          name: item.name,
          description: item.des,
          url: item.url,
          id: id++
        }
      })
      break;
    case location.href.includes('addon'):
      addonDocuments = Object.values(addonData).flat().map(item => {
        return {
          name: item.name,
          description: item.des,
          url: item.url,
          id: id++
        }
      })
      break;
    case location.href.includes('h5Games'):
      h5GamesDocuments = Object.values(h5GamesData).flat().map(item => {
        return {
          name: item.name,
          description: item.description,
          url: item.url,
          id: id++
        }
      })
      break;
    case location.href.includes('project'):
      projectDocuments = Object.values(projectData).flat().map(item => {
        return {
          name: item.name,
          description: item.description,
          url: item.ckURL,
          id: id++
        }
      })
      break;
    default:
      webDocuments = Object.values(webData).flat().map(item => {
        return {
          name: item.name,
          description: item.description,
          url: item.url,
          id: id++
        }
      })
  }
}

const tokenizer = (str) => {
  // 分词逻辑，返回完整的单词以及单词的部分片段
  const words = str.match(/[\u4e00-\u9fa5]+|[a-zA-Z0-9]+/g) || [];
  const subStrings = [];

  words.forEach(word => {
    if (/^[a-zA-Z0-9]+$/.test(word)) { // 英文或数字
      // 生成所有可能的子串
      for (let i = 1; i <= word.length; i++) {
        subStrings.push(...word.slice(0, i));
      }
    } else { // 中文
      // 生成所有可能的 n-gram 子串
      for (let i = 1; i <= word.length; i++) {
        for (let j = 0; j <= word.length - i; j++) {
          subStrings.push(word.substring(j, j + i));
        }
      }
    }
  });

  return subStrings.filter((value, index, self) => self.indexOf(value) === index); // 去重
};

// 搜索
const onSearch = debounce(function () {
  searchData.value = []
  const searchInput: any = document.getElementById('searchInput')
  let miniSearch = new MiniSearch({
    fields: ['name', 'description'], // fields to index for full-text search
    storeFields: ['name', 'description', 'url'], // fields to return with search results
    tokenize: tokenizer
  })

  switch (true) {
    case location.href.includes('github'):
      miniSearch.addAll(githubDocuments);
      break;
    case location.href.includes('vscode'):
      miniSearch.addAll(vscodeDocuments);
      break;
    case location.href.includes('addon'):
      miniSearch.addAll(addonDocuments);
      break;
    case location.href.includes('h5Games'):
      miniSearch.addAll(h5GamesDocuments);
      break;
    case location.href.includes('project'):
      miniSearch.addAll(projectDocuments);
      break;
    default:
      miniSearch.addAll(webDocuments)
  }

  miniSearch.autoSuggest(searchInput.value, {
    filter: (result) => {
      searchData.value.push({
        name: result.name,
        description: result.description,
        url: result.url
      })
      return true
    }
  })
}, 500);

// 搜索框失去焦点
const onSearchBlur = (e: any) => {
  setTimeout(() => {
    searchData.value = []
  }, 150)
}
</script>

<template>
  <div class="navbar bg-base-100">
    <img width="28px" alt="logo" src="/favicon.svg" />
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" @click="changePage('/')">WV</a>
    </div>
    <label class="input input-bordered flex items-center gap-2">
      <input @focusout="onSearchBlur" @input="onSearch" id="searchInput" type="text" class="grow" placeholder="搜索" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
        <path fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd" />
      </svg>
      <div class="alertSearch" v-show="searchData.length">
        <div style="width: 100%;cursor: pointer;margin-bottom: 10px" v-for="item in searchData" :key="item.url"
          @click="onJump(item.url)">
          <div>{{ item.name }}</div>
          <div class="des">
            {{ item.description }}
          </div>
          <hr>
        </div>
      </div>
    </label>
    <div class="nav">
      <div class="nav-item" v-for="item in rConfig" :key="item.url" @click="changePage(item.url)">
        <img width="18px" :src="item.icon">
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.nav {
  width: 805px;
  overflow: auto;
  margin-left: 20px;
  padding: 10px;
  min-width: 100px;
}

.nav-item {
  display: flex;
  gap: 5px;
  margin-right: 40px;
  cursor: pointer;
}

.nav-item>div {
  transition: all 300ms;
  white-space: nowrap;
  font-size: 14px;
}

.nav-item>div:hover {
  color: rgb(38, 29, 170);
}

.input {
  height: 40px !important;
  position: relative;
}

.input .grow {
  max-width: 150px;
}

.alertSearch {
  width: 208px;
  max-height: 400px;
  overflow: auto;
  background-color: white;
  box-shadow:
    2.8px 2.8px 5.5px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 13.2px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 24.8px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 44.2px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 82.7px rgba(0, 0, 0, 0.05),
    100px 100px 198px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 47px;
  left: 0px;
  z-index: 9999;
}

.des {
  width: 100%;
  font-size: 13px;
  color: gray;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>