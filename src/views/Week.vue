<template>
  <div class="container">
    <ConsCard :name="weekData.name"
              :allIndex="weekData.all"></ConsCard>
    <ConsList :data="weekData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted, ref, onActivated } from 'vue'
import ConsList from "@/components/List/Week"
export default {
  name: 'week',
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
      weekData: computed(() => state.week)
    }
  }
}
</script>

<style>
</style>