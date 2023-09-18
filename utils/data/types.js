import { mdiFileDocumentOutline, mdiFlash, mdiPlayCircleOutline } from '@mdi/js'

const types = [
  { id: 'article', icon: mdiFileDocumentOutline },
  { id: 'flash', icon: mdiFlash },
  { id: 'tutorial', icon: mdiPlayCircleOutline }
]

function getType (id) {
  return types.find(type => type.id === id)
}

export { types, getType }
