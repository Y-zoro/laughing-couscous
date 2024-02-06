module.exports = (actions, data) => {
    actions.push({
        type: 'add',
        path: `src/pages/${data.url}/index.vue`,
        templateFile: 'plop-templates/index.hbs',
        skipIfExists: true,
        data
    })

    actions.push({
        type: 'add',
        path: `src/pages/${data.url}/add.vue`,
        templateFile: 'plop-templates/add.hbs',
        skipIfExists: true,
        data
    })
    actions.push({
        type: 'add',
        path: `src/pages/${data.url}/detail.vue`,
        templateFile: 'plop-templates/detail.hbs',
        skipIfExists: true,
        data
    })
    actions.push({
        type: 'add',
        path: `src/pages/${data.url}/index.ts`,
        templateFile: 'plop-templates/index.ts.hbs',
        skipIfExists: true,
        data
    })
}
