import {defineComponent} from 'vue'
import {data} from '@/public/data/blender'

export default defineComponent({
    setup(){
        const methods = {
            onDownload(url: string){
                window.open(url)
            }
        }

        return {
            data,
            ...methods
        }
    }
})