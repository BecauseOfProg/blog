import { loadFromStorage } from '@/utils/helpers'

const state = {
  theme: loadFromStorage('theme')
}

export default { state }
