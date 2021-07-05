<template>
  <div class="container">
    <ConsCard :name="weekData.name"
              :allIndex="weekData.all"></ConsCard>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'week',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      weekData: computed(() => state.week)
    }
  }
}
</script>

<style>
</style>