import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATELIST,
  RECEIVE_TABS
} from './mutation-types'

export default {
  [RECEIVE_CATEGORIES](state, {categories}) {
    state.categories = categories
  },
  [RECEIVE_CATELIST](state, {cateList}) {
    state.cateList = cateList
  },
  [RECEIVE_TABS](state, {tabs}) {
    state.tabs = tabs
  },
}
