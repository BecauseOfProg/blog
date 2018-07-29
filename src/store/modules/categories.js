import categories from '../../utils/categories.js'

const state = {
  categories
}

const getters = {
  getAllCategories: state => state.categories,
  getOneCategory: state => url => {
    return state.categories.filter(category => category.url === url)
  }
}

const categoriesModule = {
  state,
  getters
}

export default categoriesModule
