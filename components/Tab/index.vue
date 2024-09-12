<template>
    <div role="tablist" class="tabs tabs-bordered">
        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="项目开发" :checked="checked" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data1" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="模板" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data3" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="学习" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data4" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="AI" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data6" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="脚本" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data7" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="娱乐" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data5" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type="radio" name="github_hot" role="tab" class="tab" aria-label="其他" />
        <div role="tabpanel" class="tab-content p-10">
            <div class="box-flex">
                <div v-for="item in data2" :key="item.id" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="badge badge-primary badge-outline">{{ item.language }}</div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="onJumpPage(item.url)">Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { baseURL } from "~/public/config";
import type { GithubModel } from "~/types/github";

// 网站开发
const data1 = ref<GithubModel[]>()
// 其他
const data2 = ref<GithubModel[]>()
// 模板
const data3 = ref<GithubModel[]>()
// 学习
const data4 = ref<GithubModel[]>()
// 娱乐
const data5 = ref<GithubModel[]>()
// ai
const data6 = ref<GithubModel[]>()
// 脚本
const data7 = ref<GithubModel[]>()
const checked = ref(true)
const onJumpPage = (url: string)=>{
    window.open(url)
}
$fetch(`${baseURL}/json/github.json`).then((data: any) => {
    data1.value = data.exploitation
    data2.value = data.other
    data3.value = data.template
    data4.value = data.study
    data5.value = data.amusement
    data6.value = data.ai
    data7.value = data.script
})
</script>

<style scoped>
.box-flex {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

@media screen and (max-width: 950px) {
    .box-flex {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 600px) {
    .box-flex {
        grid-template-columns: repeat(1, 1fr);
    }
}

.tab:is(input[type="radio"]):after {
    white-space: nowrap;
}
.tab-content{
    height: 80vh;
    overflow: auto;
}

</style>