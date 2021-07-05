<template>
  <div class="container">
    Tomorrow
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  name: 'Tomorrow',
  setup () {
    const store = useStore()
    onMounted(() => {
      getData(store)
    })
  }
}
</script>

<style>
</style>