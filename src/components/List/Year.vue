<template>
  <div class="list">
    <cons-item title="所在年份"
               :content="data.date"></cons-item>
    <cons-item title="幸运石头"
               :content="data.luckeyStone"></cons-item>
    <Summary field="健康"
             :content="data.health&&data.health[0]"></Summary>
    <Summary field="事业"
             :content="data.career&&data.career[0]"></Summary>
    <Summary field="爱情"
             :content="data.love&&data.love[0]"></Summary>
    <Summary field="财运"
             :content="data.finance&&data.finance[0]"></Summary>
    <Summary field="本年"
             :content="data.mima&&`${data.mima.info}.${data.mima.text[0]}`"></Summary>
  </div>
</template>

<script>
export default {
  name: "YearList",
  props: {
    data: Object
  }
}
</script>

<style>
</style>