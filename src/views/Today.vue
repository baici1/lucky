<template>
  <div class="container">
    <ConsCard :name="todayData.name"
              :allIndex="todayData.all"></ConsCard>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'Today',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
      console.log(state)
    })
    return {
      todayData: computed(() => state.today)
    }
  }
}
</script>

<style>
</style>