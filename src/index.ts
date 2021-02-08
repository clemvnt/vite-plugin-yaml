import { Plugin } from 'vite'
import { safeLoad } from 'js-yaml'
import toSource from 'tosource'

const ext = /\.ya?ml$/

const yamlPlugin: Plugin = {
  name: 'yaml',
  transform(code, id) {
    if (ext.test(id)) {
      return {
        code: `export default ${toSource(safeLoad(code))}\n`,
      }
    }
  },
}

module.exports = yamlPlugin
