
// 更新列表，触发以下操作会调用 loadData 方法
export const updateList = ref(0)

// 加载列表数据
const _loadData = async (IList: any, cond: any, table: any, init: any = true) => {
    console.log(table, init)
    if (init) {
        table.refresh = init === 'refresh'
        table.hasMore = true
        table.pageNo = 1
        table.data.results = []
    }
    if (table.hasMore) {
        uni.showLoading({
            title: '正在加载数据……'
        })
        const res: any = await IList({
            ...cond.value,
            pageNo: table.pageNo,
            pageSize: table.pageSize
        })
        table.refresh = false
        uni.hideLoading()
        if (init) {
            table.data = JSON.parse(JSON.stringify(res))
        } else {
            table.data.results = table.data.results.concat(res.results)
        }
        if (table.data.results.length >= res.totalRow) {
            table.hasMore = false
        } else {
            table.pageNo++
        }
    }

    return table

}

// 函数柯里化，缓存参数
export const createTable = ({ IList, cond, table }: any) => {
    watch(
        () => updateList.value,
        () => _loadData(IList, cond, table),
        { immediate: true }
    )

    return {
        loadData: async (init: any) => await _loadData(IList, cond, table, init)
    }
}
