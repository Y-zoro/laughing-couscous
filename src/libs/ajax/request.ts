import Config from './config.js'
import { url } from './url.js'

/**
 * 接口请求方法
 * @func request
 * @param {Object} method 请求方式： 仅支持GET、POST
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */

export const arrayJoin = (obj: any, mark = ';') => {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key] = obj[key].join(mark)
        }
    }
    return obj
}

export const dataConversion = (data: any) => {
    for (const key in data) {
        const element = data[key]
        const lowKey = key.toLowerCase()
        if ((lowKey.includes('price') || lowKey.includes('weight')) && typeof element === 'number') {
            data[key] = element.toFixed(2)
        } else if (Array.isArray(element)) {
            element.forEach((item) => {
                dataConversion(item)
            })
        } else if (element && typeof element === 'object') {
            dataConversion(element)
        }
    }
}

const request = (option: any, fn: any) => {
    return new Promise((resolve) => {
        if (option.url) {
            option.param = option.param || {}

            const weixinLoginCode = uni.getStorageSync('TOKEN')
            return new Config({
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                    cookie: `weixin_login_token=${weixinLoginCode}`
                },
                method: option.method || 'POST',
                url: option.url.includes('api.poscom') ? option.url : url + option.url,
                param: option.param,
                interceptors: (config: any) => {

                    // 真机调试使用
                    let url = ''
                    config.url.split('/').forEach((item: any, index: number) => {
                        if (index > 2) {
                            url += `/${item}`
                        }
                    })
                    console.log('%c %s', 'color: #0067E2;', `请求地址：${url}`)
                    console.log('%c %s', 'color: #FFBF0F;', '请求参数', config.param)
                    arrayJoin(config.param)
                    return true
                },
                response: (data: any) => {
                    console.log('%c %s', 'color: #0FCE97;', '返回数据', data)
                    dataConversion(data)
                    return resolve(fn(data))
                }
            })
        } else {
            resolve(fn(null))
        }
    })
}

export default request
