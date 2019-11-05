const fs = require('fs')
const { join } = require('path')

async function getFileContent (content) {
  let fileContent
  if (typeof content === 'function') {
    fileContent = await content()
  } else if (typeof content === 'string') {
    fileContent = content
  } else {
    fileContent = '@warn "nuxt-dynamic-styles-module: Unsupported content type";'
  }

  return fileContent
}

function defaultValue (option, value) {
  return option === undefined ? value : option
}

module.exports = async function dynamicStyles (moduleOptions) {
  const content = defaultValue(moduleOptions.content, '')
  const addTo = defaultValue(moduleOptions.addTo, 'start')

  const fileContent = await getFileContent(content)
  const pathToDynamicStyles = join(__dirname, './_dynamic.scss')
  fs.writeFileSync(pathToDynamicStyles, fileContent)

  this.options.styleResources = defaultValue(this.options.styleResources, { scss: [] })

  if (addTo === 'start') {
    this.options.styleResources.scss.unshift(pathToDynamicStyles)
  } else {
    this.options.styleResources.scss.push(pathToDynamicStyles)
  }
}
