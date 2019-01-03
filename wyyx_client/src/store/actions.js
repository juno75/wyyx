import {reqMsiteData, reqCateList, reqTabs} from '../api'
import {RECEIVE_CATEGORIES, RECEIVE_CATELIST, RECEIVE_TABS} from './mutation-types'

export default {
  // 异步获取主页数据
  async getCategory({commit}) {
    const result = await reqMsiteData()
    const categories = result.data
    commit(RECEIVE_CATEGORIES, {categories: result.data})
  },

  // 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  }
}
