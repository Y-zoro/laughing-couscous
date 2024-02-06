module.exports = (plop) => {
    plop.setHelper('toUpperCaseHump', function (str) {
        return str.toUpperCase()
    })

    plop.setHelper('stringify', function (str) {
        return JSON.stringify(str)
    })

    plop.setHelper('modelClassName', function (str) {
        return str.split('/').join('__')
    })

    plop.setHelper('indexPlus', function (index) {
        return Number(index) + 1
    })

    plop.setHelper('apiName', function (name) {
        return name.replace('Analyze', '')
    })

    plop.setHelper('modelApi', function (modelCode) {
        return 'I' + String(modelCode[0]).toUpperCase() + String(modelCode).slice(1, 6)
    })

    plop.setHelper('capitalizeFirstLetter', function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
}
