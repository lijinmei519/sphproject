import { reqGetSearchInfo } from '@/api'

const state = {
  searchList: {}
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {   /* {commit}为上下文 
                                                   params为dispatch的第二个参数 params={}为默认参数（如果不传，则传递默认参数）*/
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  }
};

//项目当中getters主要的作用是:简化仓库中的数据(简化数据而生)
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  goodsList(state) {
    //state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
    //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
    //计算新的属性的属性值至少给人家来一个数组
    return state.searchList.goodsList || [];
  }
  ,
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
}