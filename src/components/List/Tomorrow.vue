<template>
  <div class="list">
    <cons-item title="明日日期"
               :content="data.datetime"></cons-item>
    <cons-item title="配对星座"
               :content="data.QFriend"></cons-item>
    <cons-item title="幸运颜色"
               :content="data.color"></cons-item>
    <cons-item title="幸运数字"
               :content="data.number"></cons-item>
    <Summary field="明日"
             :content="data.summary"></Summary>
  </div>
</template>

<script>
export default {
  name: "TomorrowList",
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