<template>
  <div class="app">
    <headerpage>星座物语</headerpage>
    <nav-bar></nav-bar>
    <!-- 当切换页面同时缓存组件 -->
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <tab></tab>
  </div>
</template>


<script>
import Headerpage from "@/components/Header"
import NavBar from '@/components/NavBar'
import Tab from '@/components/Tab'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
  name: "App",
  components: {
    Tab,
    Headerpage,
    NavBar
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    /**
     * 刷新时候，跳转到today
     */
    router.push('/')
    store.commit('setField', 'today')
    /**
     * 封装的api请求的数据来源是vuex的，所以当你路由进行变换的时候，vuex中的数据也需要跟着更新，才会请求到正确的数据
     */
    watch(() => {
      return router.currentRoute.value.name;//监听路由名字
    }, (value) => {
      store.commit('setField', value)
    })
  }
}
</script>

