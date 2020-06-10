const categories = [
  { id: 'software', name: 'Software', icon: 'mdi-web' },
  { id: 'security', name: 'Sécurité', icon: 'mdi-lock-outline' },
  { id: 'web', name: 'Web', icon: 'mdi-earth' },
  { id: 'hardware', name: 'Hardware', icon: 'mdi-sim' },
  { id: 'programming', name: 'Programmation', icon: 'mdi-code-tags' },
  { id: 'android', name: 'Android', icon: 'mdi-android' },
  { id: 'linux', name: 'Linux', icon: 'mdi-linux' },
  { id: 'windows', name: 'Windows', icon: 'mdi-microsoft-windows' },
  { id: 'apple', name: 'Apple', icon: 'mdi-apple' }
]

function getCategory(id) {
  return categories.find(category => category.id === id)
}

export { categories, getCategory }
