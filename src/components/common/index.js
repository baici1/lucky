//公共组件作为插件使用
import ConsCard from '@/components/common/Card'

let MyPlugin = {};
MyPlugin.install = function (Vue) {
  Vue.component(ConsCard.name, ConsCard);
}
export default MyPlugin