//对于axios进行二次封装
import axios from "axios";
//引入nprogress
import nprogress from "nprogress"
import store from "@/store"

//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";

//利用axios对象的create方法，创建一个axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId):和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token;
  };
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  //config是什么?配置对象，里面有一个属性很重要：headers请求头
  return config;
});

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    //成功的回调函数
    return res.data;
  },
  //响应失败的回调函数
  (err) => {
    alert("服务器响应数据失败");
  }
);
//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests;