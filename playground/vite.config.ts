import { UserConfig } from 'vite'
import yamlPlugin from '../dist/index'

const config: UserConfig = {
  plugins: [yamlPlugin]
}

export default config
