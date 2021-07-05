import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//添加静态文件
import '@/assets/css/resets.css'
import '@/assets/css/border.css'
import '@/assets/js/common.js'
//添加插件
import MyPlugin from '@/components/common'
createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
