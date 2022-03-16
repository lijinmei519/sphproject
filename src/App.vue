<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知vuex发请求，获取数据，存储与仓库内
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch("getCategoryList");
    // this.$store.dispatch('getUserInfo');
  },  
}
</script>

<style>

</style>
