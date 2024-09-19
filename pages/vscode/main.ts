import {defineComponent} from 'vue'
import {data} from '~/public/data/vscode'

export default defineComponent({
    setup(){
        console.log(data)
        return {
            data
        }
    }
})