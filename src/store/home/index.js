import { reqgetCategoryList, reqGetBannerList,reqFloorList } from "@/api"
//新建home小仓库
const state = {
  //home仓库中存储三级菜单的数据
  categoryList: [],
  bannerList: [],
  floorList:[],

};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){  //这个是行参，写什么都可以
    state.floorList = floorList;
 }

};
const actions = {
  async getCategoryList({ commit }) { /* 解构赋值 */
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //提交mutation
      commit("GETFLOORLIST", result.data); //提交的是后面的那个
    }
  },


};
const getters = {
};

export default {
  state,
  mutations,
  actions,
  getters
}