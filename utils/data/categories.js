import { mdiWeb, mdiLockOutline, mdiEarth, mdiSim, mdiCodeTags, mdiAndroid, mdiLinux, mdiApple, mdiMicrosoftWindows, mdiHeadCogOutline } from '@mdi/js'

const categories = [
  { id: 'software', icon: mdiWeb },
  { id: 'security', icon: mdiLockOutline },
  { id: 'web', icon: mdiEarth },
  { id: 'hardware', icon: mdiSim },
  { id: 'programming', icon: mdiCodeTags },
  { id: 'android', icon: mdiAndroid },
  { id: 'linux', icon: mdiLinux },
  { id: 'windows', icon: mdiMicrosoftWindows },
  { id: 'ml', icon: mdiHeadCogOutline },
  { id: 'apple', icon: mdiApple }
]

function getCategory (id) {
  return categories.find(category => category.id === id)
}

export { categories, getCategory }
