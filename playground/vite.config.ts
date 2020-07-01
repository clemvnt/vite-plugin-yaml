import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [require('../dist/index')]
}

export default config
