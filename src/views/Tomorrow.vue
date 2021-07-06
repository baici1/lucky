<template>
  <div class="container">
    <ConsCard :name="tomorrowData.name"
              :allIndex="tomorrowData.all"></ConsCard>
    <ConsList :data="tomorrowData"></ConsList>
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { computed, onMounted, ref, onActivated } from 'vue'
import ConsList from "@/components/List/Tomorrow"
export default {
  name: 'Tomorrow',
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
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style>
</style>