<template>
  <div class="container">
    Week
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  name: 'week',
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