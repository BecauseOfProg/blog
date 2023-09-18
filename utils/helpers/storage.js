const defaults = {
  token: '',
  theme: 'auto',
  lang: 'fr',
  'read-publications': ''
}

function loadFromStorage (category, json = false) {
  let data = localStorage.getItem(category)
  if (data === null) {
    if (json) { data = JSON.stringify(defaults[category]) } else { data = defaults[category] }
    localStorage.setItem(category, data)
  }

  return json ? JSON.parse(data) : data
}

function saveToStorage (category, data) {
  localStorage.setItem(category, JSON.stringify(data))
}

export { loadFromStorage, saveToStorage }
