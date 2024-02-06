module.exports = (plop) => {

    /**
     * 注册过滤器
     */
    const registerEvent = require('./plop-event/index.js')

    /**
     * 导入 actions
     */
    const actionPage = require('./plop-actions/page.js')
    const actionApi = require('./plop-actions/api.js')
    const actionRoute = require('./plop-actions/route.js')

    /**
     * 创建新的页面
     */
    plop.setGenerator('', {
        description: '写入当前数据信息模块代码',
        prompts: [
            {
                type: 'input',
                name: 'url',
                message: '请输入文件名称，必须是 xxx 或 xxx/xxx 格式',
                default: 'home'
            },
            {
                type: 'input',
                name: 'name',
                message: '请输入title名称',
                default: '首页'
            }
        ],
        actions: (user) => {
            const actions = []
            let urls = []
            if (user.url.indexOf('/') > 0) {
                urls = user.url.split('/')
                user.one = urls[0]
                user.two = urls[1]
            } else {
                user.one = user.url
            }

            if (urls.length === 3) {
                user.three = urls[2]
            }

            actionPage(actions, user)
            actionApi(actions, user)
            actionRoute(actions, user)
            return actions
        }
    })

    registerEvent(plop)
}
