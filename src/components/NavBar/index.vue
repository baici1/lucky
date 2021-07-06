<template>
  <div class="nav-bar">
    <!-- 滚动区域 -->
    <div class="scroll-wrapper">
      <!-- 子组件 -->
      <div class="nav-wrapper"
           :style="`width:${navData.length*.8}rem`">
        <!-- index代表是在navData中的位置
           curIdx代表是点击位置 -->
        <nav-item v-for="(item,index) of navData"
                  :key="index"
                  :item="item"
                  :curIdx="curIdx"
                  :index="index"
                  @click="barclick(index)">
        </nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import navData from '@/datas/nav'
import NavItem from './item.vue'
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import getData from "@/services/index"
export default {
  name: "NavBar",
  components: {
    NavItem
  },
  setup () {
    const curIdx = ref(0)
    const store = useStore()
    function barclick (index) {
      curIdx.value = index
      store.commit('setConsName', navData[index])
      getData(store)
      //console.log(store.state.consName)
    }
    return {
      curIdx,
      navData,
      barclick
    }
  }
}
</script>

<style lang="less">
.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>