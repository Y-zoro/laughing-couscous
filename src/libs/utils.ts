
// js获取当前时间 格式“yyyy-MM-dd HH:MM:SS”
export const getNowFormatDate = () => {
    const date = new Date() // 获取当前时间
    let month: any = date.getMonth() + 1 // 月份处理
    let day: any = date.getDate()
    month = month < 10 ? '0' + month : month // 月份为1-9月,在其前面加0
    day = day < 10 ? '0' + day : day // 日期为1-9号,在其前面加了0
    const s1 = '-' // 定义年月日分隔符-
    const s2 = ':' // 定义时分秒分隔符:
    // 拼接年月日,时分秒
    const currDate = date.getFullYear() + s1 + month + s1 + day + ' ' + date.getHours() + s2 + date.getMinutes() + s2 + date.getSeconds()
    return currDate
}

export const getToday = () => {
    const date = new Date()
    const year = date.getFullYear()
    let month: any = date.getMonth() + 1
    let day: any = date.getDate()

    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    return year + '-' + month + '-' + day
}

export const getYearMonth = (date: any) => {
    const year = date.getFullYear()
    let month = date.getMonth() + 1

    if (month < 10) month = '0' + month
    return year + '-' + month
}

export const dateFormat = (date: any, format: any) => {
    date = new Date(date)

    const args: any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
        S: date.getMilliseconds()
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const i in args) {
        const n = args[i]
        if (new RegExp('(' + i + ')').test(format)) format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? n : ('00' + n).substr(('' + n).length))
    }
    return format
}

export const initForm = (ruleForm: any, form: any) => {
    for (const ruleKey in ruleForm) {
        for (const key in form) {
            if (ruleKey === key) {
                ruleForm[key] = form[key]
            }
        }
    }

    return ruleForm
}

// 传入一个图片对象和目标宽度，返回一个压缩后的图片对象
export const compressImage = (img: any, maxWidth: any) => {
    const canvas = document.createElement('canvas')
    const ctx: any = canvas.getContext('2d')

    // 设置画布的宽高，根据目标宽度等比例缩放高度
    const ratio = maxWidth / img.width
    canvas.width = maxWidth
    canvas.height = img.height * ratio

    // 在画布上绘制原始图片
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    // 将画布转换为压缩后的图片对象
    uni.getImageInfo({
        src: canvas.toDataURL('image/jpeg'),
        success: function (image: any) {
            console.log(image.width)
            console.log(image.height)
            return image
        }
    })
}

export const isPhone = (phone: any) => {
    const reg = /^1[3456789]\d{9}$/
    if (reg.test(phone)) {
        return true
    } else {
        uni.showToast({
            title: '输入正确手机号',
            icon: 'error'
        })
        return false
    }
}

export const isBankCard = (cardNo: any) => {
    const reg = /^([1-9]{1})(\d{15}|\d{18})$/
    if (reg.test(cardNo)) {
        return true
    } else {
        uni.showToast({
            title: '输入正确的银行卡号',
            icon: 'error'
        })
        return false
    }
}

export const verify = (form: any, rules: any) => {
    let result = true
    return new Promise((resolve) => {
        for (const key in rules) {
            if (!form[key]) {
                uni.showToast({
                    title: rules[key].message,
                    icon: 'error',
                    mask: true
                })
                result = false
                break
            }
        }
        resolve(result)
    })
}

// 校验数组表单数据
export const verifyList = (formList: any, rules: any) => {
    return new Promise((resolve) => {
        const temp = formList.some((item: any) => {
            for (const key in rules) {
                if (!item[key]) {
                    uni.showToast({
                        title: rules[key].message,
                        icon: 'error',
                        mask: true
                    })
                    return true // 如果有错误，返回true
                }
            }
            return false // 如果没有错误，返回false
        })
        resolve(!temp)
    })
}

export const phoneCall = (phone: any) => {
    const tel = phone
    uni.makePhoneCall({
        phoneNumber: tel.toString()
    })
}

export const power = (data: any) => {
    const resource = uni.getStorageSync('POWER') || ''
    if (data && resource) {
        let hasPermission = false
        if (typeof data === 'string') {
            hasPermission = resource.includes(data)
        } else {
            for (let index = 0; index < data.length; index++) {
                const item = data[index]
                if (resource.includes(item)) {
                    hasPermission = resource.includes(item)
                    break
                }
            }
        }
        return hasPermission
    }
}
