<template>
    <div class="grid">
        <div class="grid-item" v-for="item in dataList" :key="item.id">
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img :src="item.img" />
                </div>
            </div>
            <div class="content">
                <div class="tooltip" :data-tip="item.name">
                    <p class="name">{{ item.name }}</p>
                </div>
                <div class="tooltip" :data-tip="item.des">
                    <p class="des">{{ item.des }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./index.css" scoped></style>
<script lang="ts" src="./main.ts"></script>