<template>
  <div class="list">
    <cons-item title="本周日期"
               :content="data.datetime"></cons-item>
    <Summary field="工作"
             :content="data.work"></Summary>
    <Summary field="恋爱"
             :content="data.love"></Summary>
    <Summary field="学业"
             :content="data.job"></Summary>
    <Summary field="财运"
             :content="data.money"></Summary>
  </div>
</template>

<script>
export default {
  name: "WeekList",
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