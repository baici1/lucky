<template>
  <div class="container">
    <ConsCard :name="monthData.name"
              :allIndex="monthData.all"></ConsCard>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  name: 'Month',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style>
</style>