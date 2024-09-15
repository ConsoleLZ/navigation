import { defineComponent,reactive } from 'vue'
import { baseURL } from "~/public/config";
import { type StateModel } from './types'
import Navbar from "~/components/Navbar/index.vue";
import tools from '~/utils'

export default defineComponent({
    components: {
        Navbar
    },
    setup() {
        const state = reactive<StateModel>({
            webTime: '',
            data1: [], // 关于前端
            data2: [], // 工具
            data3: [], // 云平台
            data4: [], // 网络安全
            data5: [], // 其他
            data6: [], // 设计
            data7: [], // AI
            data8: [], // ui框架
            data9: [], // 重要文档
            data10: [], // 自学神器
            data11: [], // 游戏
            data12: [], // 素材资源
            isData1: false,
            isData2: false,
            isData3: false,
            isData4: false,
            isData5: false,
            isData6: false,
            isData7: false,
            isData8: false,
            isData9: false,
            isData10: false,
            isData11: false,
            isData12: false,
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
                $fetch(`${baseURL}/json/webData.json`).then((data: any) => {
                    // 关于前端
                    state.data1 = data.aboutFrontEnd
                    for (let item of state.data1) {
                        methods.isLink(item.ico).then(res => {
                            if (!res) {
                                item.ico = '/replace.svg'
                            }
                        })
                    }
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
            isLink(url: string) {
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

        onMounted(()=>{
            // 关于前端
            const dom1 = document.querySelector('#aboutFrontEnd') as HTMLElement
        })

        // 初始化网站数据
        methods.init()

        return {
            ...toRefs(state),
            ...methods
        }
    }
})