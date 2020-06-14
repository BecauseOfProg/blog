const defaults = {
  token: '',
  theme: 'auto'
}

function loadFromStorage(category) {
  let data = localStorage.getItem(category)
  if (data === null) {
    data = JSON.stringify(defaults[category])
    localStorage.setItem(category, data)
  }

  return JSON.parse(data)
}

function saveToStorage(category, data) {
  localStorage.setItem(category, JSON.stringify(data))
}

export { loadFromStorage, saveToStorage }
