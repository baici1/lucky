<template>
  <div :class="['nav-item',{'nav-current':index===curIdx}]">{{item}}</div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: String,
    curIdx: Number,
    index: Number
  },
  setup () {
  }
}
</script>

<style lang="less">
.nav-item {
  width: 0.8rem;
  height: 100%;
  font-size: 0.14rem;
  line-height: 0.38rem;
  text-align: center;
  color: #666;

  &.nav-current {
    color: #db7093;
    font-weight: bold;
  }
}
</style>