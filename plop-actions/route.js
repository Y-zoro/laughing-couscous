module.exports = (actions, data) => {

    /**
     * 插入到底部（新建一个路由）
     */
    if (data.name) {
        const str = '//.+end'
        const pattern = new RegExp(str, 'g')

        actions.push({
            type: 'modify',
            path: 'src/pages.json',
            pattern,
            templateFile: 'plop-templates/routes.hbs',
            data
        })
    }
}
