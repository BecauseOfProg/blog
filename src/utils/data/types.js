const types = [
  { id: 'article', name: 'Article', icon: 'mdi-file-document-outline' },
  { id: 'flash', name: 'Flash', icon: 'mdi-flash' },
  { id: 'tutorial', name: 'Tutoriel', icon: 'mdi-play-circle-outline' }
]

function getType(id) {
  return types.find(type => type.id === id)
}

export { types, getType }
