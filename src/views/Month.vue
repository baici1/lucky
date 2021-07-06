<template>
  <div class="container">
    <ConsCard :name="monthData.name"
              :allIndex="Number(monthData.all)"></ConsCard>
    <ConsList :data="monthData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted, ref, onActivated } from 'vue'
import ConsList from "@/components/List/Month"
export default {
  name: 'Month',
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
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style>
</style>