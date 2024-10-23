import { defineComponent, reactive, watch, nextTick } from 'vue'
import { type StateModel } from './types'
import Navbar from "~/components/Navbar/index.vue";
import { data as webData } from '~/public/data/webData';
import { data as githubData } from '~/public/data/github';
import { data as vscodeData } from '~/public/data/vscode';
import { data as addonData } from '~/public/data/addon';
import { data as h5GamesData } from '~/public/data/h5Games';
import {sumOfArrayLengths} from '~/utils/index'

export default defineComponent({
    components: {
        Navbar
    },
    setup() {
        const webTime = ref<string>('')
        const state = reactive<StateModel>({
            aboutFrontEnd: [],
            documentation: [],
            UIFramework: [],
            material: [],
            design: [],
            tools: [],
            AI: [],
            cloudPlatform: [],
            networkSecurity: [],
            study: [],
            games: [],
            other: [],
            webStatistics: null,
            githubStatistics: null,
            vscodeStatistics: null,
            addonStatistics: null,
            h5GamesDataStatistics: null,
        })

        if (import.meta.client) {
            // 不断更新网站显示时间
            setInterval(() => {
                webTime.value = methods.getWebTime()
            }, 1000)
        }

        const methods = {
            // 统计网站运行时间
            getWebTime() {
                // 创建网站的时间2024.5.12
                const startTimeDate = new Date(2024, 4, 12, 13, 14, 52)
                // 获取当前时间
                var now = new Date();
                // 计算时间差，单位为毫秒
                var uptimeMs = now.getTime() - startTimeDate.getTime();
                // 计算天数
                var days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
                uptimeMs -= days * (1000 * 60 * 60 * 24);
                // 计算小时数
                var hours = Math.floor(uptimeMs / (1000 * 60 * 60));
                uptimeMs -= hours * (1000 * 60 * 60);
                // 计算分钟数
                var minutes = Math.floor(uptimeMs / (1000 * 60));
                uptimeMs -= minutes * (1000 * 60);
                // 计算秒数
                var seconds = Math.floor(uptimeMs / 1000);
                return `${days}天${hours}时${minutes}分${seconds}秒`;
            },
            // 判断图片链接是否有效
            isLink(url: string): Promise<boolean> {
                return new Promise((resolve, reject) => {
                    let img = new Image(0, 0)

                    img.src = url
                    img.addEventListener('load', () => {
                        resolve(true)
                    })
                    img.addEventListener('error', () => {
                        resolve(false)
                    })
                })
            },
            // 获取统计信息
            getInfo(){
                state.webStatistics = sumOfArrayLengths(webData)
                state.githubStatistics = sumOfArrayLengths(githubData)
                state.vscodeStatistics = vscodeData.length
                state.addonStatistics = addonData.length
                state.h5GamesDataStatistics = addonData.length
            },
            // 跳转到我的博客
            onJumpPage(url: string) {
                window.open(url)
            }
        }
        methods.getInfo()
        // 记录当前是哪个元素进入视口
        let viewDom: string = ''
        // 存储目前有哪些元素已经进入了视口
        const viewList:string[] = []
        const dataList: any = webData
        onMounted(() => {
            // 关于前端
            const dom: HTMLElement[] = [
                document.querySelector('#aboutFrontEnd') as HTMLElement,
                document.querySelector('#documentation') as HTMLElement,
                document.querySelector('#UIFramework') as HTMLElement,
                document.querySelector('#material') as HTMLElement,
                document.querySelector('#design') as HTMLElement,
                document.querySelector('#tools') as HTMLElement,
                document.querySelector('#AI') as HTMLElement,
                document.querySelector('#cloudPlatform') as HTMLElement,
                document.querySelector('#networkSecurity') as HTMLElement,
                document.querySelector('#study') as HTMLElement,
                document.querySelector('#games') as HTMLElement,
                document.querySelector('#other') as HTMLElement,
            ]
            if (import.meta.client) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // 元素已进入视口
                            viewDom = entry.target.id
                            dataList[viewDom].forEach(async (item: any) => {
                                const isLink = await methods.isLink(item.ico)
                                if (!isLink) {
                                    item.ico = '/replace.svg'
                                }
                            })
                            state[viewDom] = dataList[viewDom]
                            if(!viewList.includes(viewDom)){
                                viewList.push(viewDom)
                            }
                            // 取消对该元素的监听
                            observer.unobserve(entry.target);
                        } else {
                            // 元素不在视口内
                        }
                    });
                }, {
                    rootMargin: '0px 0px -100px 0px', // 提前加载高度
                });
                // 循环进行监听
                dom.forEach(item => {
                    observer.observe(item)
                })
            }
        })

        watch(state, (value) => {
            nextTick(() => {
                viewList.forEach(item=>{
                    const domList = Array.from(document.querySelectorAll(`#${item} div`)[1].children)
                    domList.forEach((item: any)=>{
                        item.classList.add('animation')
                    })
                })
            })
        })

        return {
            webTime,
            ...toRefs(state),
            ...methods
        }
    }
})