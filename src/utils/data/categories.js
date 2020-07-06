const categories = [
  { id: 'software', icon: 'mdi-web' },
  { id: 'security', icon: 'mdi-lock-outline' },
  { id: 'web', icon: 'mdi-earth' },
  { id: 'hardware', icon: 'mdi-sim' },
  { id: 'programming', icon: 'mdi-code-tags' },
  { id: 'android', icon: 'mdi-android' },
  { id: 'linux', icon: 'mdi-linux' },
  { id: 'windows', icon: 'mdi-microsoft-windows' },
  { id: 'apple', icon: 'mdi-apple' }
]

function getCategory(id) {
  return categories.find(category => category.id === id)
}

export { categories, getCategory }
