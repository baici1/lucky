<template>
  <div class="container">
    Month
  </div>
</template>

<script>
import getData from "@/services/index"
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  name: 'Month',
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