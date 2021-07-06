<template>
  <div class="error-tip"
       v-if="errorCode">
    <img src="../../assets/img/error.png"
         alt="error">
    <p>{{errorData[errorCode]}}</p>
  </div>
</template>

<script>
import errorData from '@/datas/error'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  name: "Error",
  setup () {
    const store = useStore()
    return {
      errorCode: computed(() => store.state.errorCode),
      errorData
    }
  }
}
</script>

<style lang="less">
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 0.5rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>