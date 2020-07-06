const types = [
  { id: 'article', icon: 'mdi-file-document-outline' },
  { id: 'flash', icon: 'mdi-flash' },
  { id: 'tutorial', icon: 'mdi-play-circle-outline' }
]

function getType(id) {
  return types.find(type => type.id === id)
}

export { types, getType }
