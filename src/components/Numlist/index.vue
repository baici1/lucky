<template>
  <div class="num-list">
    <num-item v-for="(item,index) of numData"
              :key="index"
              :item="item"
              :data="data"></num-item>
  </div>
</template>

<script>
import numData from "@/datas/num"
import NumItem from "./item.vue"
export default {
  name: "NumList",
  components: {
    NumItem
  },
  props: {
    data: Object
  },
  setup () {
    return { numData }
  }
}
</script>

<style lang="less">
.num-list {
  display: flex;
  flex-direction: row;
  margin: 0.15rem 0;
  padding: 0.1rem;
  box-shadow: 0.02rem 0.02rem 0.05rem #999;
}
</style>