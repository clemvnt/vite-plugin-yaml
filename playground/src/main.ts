import object1 from './object1.yml'

document.getElementById('object1')!.innerText = JSON.stringify(object1, null, 2)

import('./object2.yaml').then(({ default: object2 }) => {
  document.getElementById('object2')!.innerText = JSON.stringify(
    object2,
    null,
    2
  )
})
