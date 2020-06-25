const defaults = {
  token: '',
  reconnection: false,
  theme: 'auto'
}

function loadFromStorage(category, json = false) {
  let data = localStorage.getItem(category)
  if (data === null) {
    data = JSON.stringify(defaults[category])
    localStorage.setItem(category, data)
  }

  return json ? JSON.parse(data) : data
}

function saveToStorage(category, data) {
  localStorage.setItem(category, JSON.stringify(data))
}

export { loadFromStorage, saveToStorage }
