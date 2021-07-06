<template>
  <div class="list">
    <Summary field="健康"
             :content="data.health"></Summary>
    <Summary field="工作"
             :content="data.work"></Summary>
    <Summary field="爱情"
             :content="data.love"></Summary>
    <Summary field="财运"
             :content="data.money"></Summary>
    <Summary field="本月"
             :content="data.all"></Summary>
  </div>
</template>

<script>
export default {
  name: "MonethList",
  props: {
    data: Object
  }
}
</script>

<style lang="less">
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>