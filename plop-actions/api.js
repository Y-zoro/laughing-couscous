module.exports = (actions, data) => {
    actions.push({
        type: 'add',
        path: `src/api/${data.url}/index.ts`,
        templateFile: 'plop-templates/api.hbs',
        skipIfExists: true,
        data
    })
}
