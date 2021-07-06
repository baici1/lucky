<template>
  <div class="container">
    <ConsCard :name="yearData.name"
              :allIndex="Number(yearData.all)"></ConsCard>
    <ConsList :data="yearData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted, ref, onActivated } from 'vue'
import ConsList from "@/components/List/Year"
export default {
  name: 'Year',
  components: {
    ConsList
  },
  setup () {
    const store = useStore()
    const state = store.state
    const status = ref('')
    onMounted(() => {
      getData(store)
      status.value = state.consName
    })
    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store)
        status.value = state.consName
      }
    })
    return {
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style>
</style>