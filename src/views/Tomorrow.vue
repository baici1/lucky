<template>
  <div class="container">
    <ConsCard :name="tomorrowData.name"
              :allIndex="tomorrowData.all"></ConsCard>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'Tomorrow',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style>
</style>