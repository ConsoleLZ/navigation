import { defineComponent, reactive } from 'vue'
import { baseURL } from "~/public/config";
import { type StateModel } from './types'
import Navbar from "~/components/Navbar/index.vue";

export default defineComponent({
    components: {
        Navbar
    },
    setup() {
        const state = reactive<StateModel>({
            webTime: '',
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
            other: []
        })

        if (import.meta.client) {
            // 不断更新网站显示时间
            setInterval(() => {
                state.webTime = methods.getWebTime()
            }, 1000)
        }

        const methods = {
            // 初始化网站数据
            init() {
                return new Promise(resolve => {
                    $fetch(`${baseURL}/json/webData.json`).then(data => {
                        resolve(data)
                    })
                })
            },
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
            isLink(url: string) :Promise<boolean>{
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
            // 跳转到我的博客
            onJumpBlog() {
                window.open('https://consolelz.github.io/')
            }
        }

        onMounted(async () => {
            const dataList:any = await methods.init()
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
            // 记录当前是哪个元素进入视口
            let viewList: string = ''
            if (import.meta.client) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // 元素已进入视口
                            entry.target.classList.add('animation')
                            viewList = entry.target.id
                            dataList[viewList].forEach(async(item:any)=>{
                                const isLink = await methods.isLink(item.ico)
                                if(!isLink){
                                    item.ico = '/replace.svg'
                                }
                            })
                            console.log(dataList[viewList])
                            state[viewList] = dataList[viewList]
                            // 取消对该元素的监听
                            observer.unobserve(entry.target);
                        } else {
                            // 元素不在视口内
                        }
                    });
                }, {
                    threshold: 1 // 当元素至少有50%进入视口时触发回调
                });
                // 循环进行监听
                dom.forEach(item => {
                    observer.observe(item)
                })
            }
        })

        return {
            ...toRefs(state),
            ...methods
        }
    }
})