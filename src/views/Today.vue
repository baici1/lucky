<template>
  <div class="container">
    <ConsCard :name="todayData.name"
              :allIndex="todayData.all"></ConsCard>
    <num-list :data="todayData"></num-list>
    <ConsList :data="todayData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onActivated, onMounted, ref } from 'vue'
import NumList from "@/components/Numlist"
import ConsList from "@/components/List/Today"
export default {
  name: 'Today',
  components: {
    NumList,
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
      todayData: computed(() => state.today)
    }
  }
}
</script>

<style>
</style>