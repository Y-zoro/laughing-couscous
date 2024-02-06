import request from '@/libs/ajax/request'

// 首页下拉
export const Itype: any = (param: any) => {
    return request({ url: '', param }, async (res: any) => {
        return [
            {
                label: '选项1',
                id: '1'
            },
            {
                label: '选项2',
                id: '2'
            },
            {
                label: '选项3',
                id: '3'
            }
        ]
    })
}
