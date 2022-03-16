//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);

//引入模块
import home from "./home"
import search from './search'
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";

export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库,实现vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  }
}
)

