import {defineComponent} from 'vue'
import type {PropType} from 'vue'
import type {DataModel} from './types'

export default defineComponent({
    props: {
        dataList: {
            type: Array as PropType<DataModel[]>,
            default: ()=>[]
        }
    }
})