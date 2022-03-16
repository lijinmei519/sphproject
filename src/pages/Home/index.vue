<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor" />
    <Brand/>
  </div> 
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import {mapState} from "vuex"
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList');
    this.$store.dispatch('getUserInfo');
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
};
</script>

<style>
</style>