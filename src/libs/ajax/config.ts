class Config {
    method: any
    url: any
    param: any
    header: any
    response: any
    constructor (data: any) {
        this.method = data.method
        this.url = data.url
        this.param = data.param
        this.header = data.header
        this.response = data.response

        if (data.interceptors(data)) {
            this.xhrRequest()
        } else {
            console.error('request interceptor', '请求未发出, 请求拦截器已生效!')
        }
    }

    // HTTP请求
    xhrRequest () {
        uni.request({
            url: this.url,
            data: this.param,
            method: this.method,
            header: this.header,
            success (res: any) {
                if (res.data.status === -400) {
                    uni.removeStorageSync('TOKEN')
                    uni.reLaunch({ url: '/pages/login/index' })

                } else if (res.data.status === 200 || [0, 1].includes(res.data.code)) {
                    return this.response(res.data, { header: res.header, url: this.url, param: this.param })
                } else {
                    uni.showToast({
                        title: res.data.message,
                        mask: true,
                        icon: 'none'
                    })

                }
            },
            fail () {
                uni.showToast({
                    title: '请求超时请重试',
                    icon: 'error',
                    duration: 2000
                })

            }
        })
    }

    // 参数转换
    convParams (param: any) {
        const mark: any = this.url.indexOf('&') > 0 ? '&' : '?'

        let i = 0
        let newParams = ''
        for (const key in param) {
            if (i > 0) {
                newParams += `&${key}=${param[key]}`
            } else {
                newParams += `${mark}${key}=${param[key]}`
            }
            i++
        }
        return newParams
    }

    // 数据GET、POST请求处理
    filter () {

        // 接口名称拼接位置：(1、url) (2、param)
        const newParams = this.convParams(this.param)
        if (this.method === 'GET') {
            this.url += newParams
        } else {
            this.param = newParams.replace('?', '')
        }

        return this.xhrRequest()
    }
}

export default Config
