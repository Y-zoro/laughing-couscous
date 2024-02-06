import { verify } from '@/libs/utils'
import { updateList } from './index'

// 表单提交
const _submit = async (fn: any, api: any) => {
    const { form, rules }: any = fn()

    verify(form.value, rules).then(async (res: any) => {

        if (res && api) {
            await api(form.value)
            updateList.value++
            _clear()
        }
    })
}

// 获取详情数据
const _detail = async (fn: any, api?: any) => {
    const { form }: any = fn()

    if (api && form.value.id) {

        form.value = await api({ id: form.value.id })
    }
}

// 取消返回
const _clear = () => {

    uni.navigateBack({
        delta: 1
    })
}

// 函数柯里化，缓存参数
export const createForm = (fn: any) => {
    return {
        submit: (api: any) => _submit(fn, api),
        detail: async (api: any) => await _detail(fn, api),
        clear: () => _clear()
    }
}
