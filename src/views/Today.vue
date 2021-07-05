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
import ConsCard from '@/components/common/Card'
export default {
  name: 'Today',
  components: {
    ConsCard
  },
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