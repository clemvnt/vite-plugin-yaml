# vite-plugin-yaml

**The plugin was useful with Vite 1 but now that most of the Rollup plugins, including [@rollup/plugin-yaml](https://github.com/rollup/plugins/tree/master/packages/yaml), are compatible with Vite 2, it is recommended to use them.**

A Vite plugin for import YAML/YML files as ES6 modules.

Like [@rollup/plugin-yaml](https://github.com/rollup/plugins/tree/master/packages/yaml) but for Vite.

# Install

Using npm :

```
npm i -D vite-plugin-yaml
```

Using yarn :

```
yarn add -D vite-plugin-yaml
```

# Configuration

## vite.config.js

```js
module.exports = {
  plugins: [require('vite-plugin-yaml')]
}
```

## vite.config.ts

```ts
const config = {
  plugins: [require('vite-plugin-yaml')]
}

export default config
```

# Usage

You can now import YAML/YML files.

```ts
import object from './object.yml'
```

_Check the [playground](https://github.com/clemvnt/vite-plugin-yaml/tree/master/playground) for an example of use._
