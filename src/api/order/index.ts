import request from '@/libs/ajax/request'

// 列表
export const IList: any = (param: any) => {
    return request({ url: '', param }, async (res: any) => {
        return {
            results: [
                { id: '1', field1: 'field1', field2: 'field2', field3: 'field3', field4: 'field4', field5: 'field5', field6: 'field6', status: '1' },
                { id: '2', field1: 'field1', field2: 'field2', field3: 'field3', field4: 'field4', field5: 'field5', field6: 'field6', status: '0' },
                { id: '3', field1: 'field1', field2: 'field2', field3: 'field3', field4: 'field4', field5: 'field5', field6: 'field6', status: '1' }
            ],
            totalRow: 10
        }
    })
}

// 新增
export const IAdd: any = (param: any) => {
    return request({ url: '', param }, async (res: any) => {
        return res
    })
}

// 编辑
export const IEdit: any = (param: any) => {
    return request({ url: '', param }, async (res: any) => {
        return res
    })
}

// 详情
export const IDetail: any = (param: any) => {
    return request({ url: '', param }, async (res: any) => {
        return {
            field1: 'field1',
            field2: 'field2',
            field3: '09:30',
            field4: 'field4',
            field5: 'field5',
            field6: 'field6'
        }
    })
}

// 下拉
export const IOptionsField1: any = (param: object) => {
    return request({ url: '', param }, async (res: any) => {
        return [
            {
                label: '选项1',
                id: '1'
            },
            {
                label: '选项2',
                id: 'field2'
            },
            {
                label: '选项3',
                id: '3'
            }
        ]
    })
}
