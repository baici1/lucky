<template>
  <div class="container">
    <ConsCard :name="yearData.name"
              :allIndex="yearData.all"></ConsCard>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'Year',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style>
</style>