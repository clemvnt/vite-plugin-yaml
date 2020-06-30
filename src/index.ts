import { Plugin } from 'vite'
import { safeLoad } from 'js-yaml'
import toSource from 'tosource'

const ext = /\.ya?ml$/

const yamlPlugin: Plugin = {
  transforms: [
    {
      test({ path }) {
        return ext.test(path)
      },
      transform({ code }) {
        const transformedCode = `const data = ${toSource(safeLoad(code))}\n`
        return transformedCode + 'export default data'
      }
    }
  ]
}

export default yamlPlugin
