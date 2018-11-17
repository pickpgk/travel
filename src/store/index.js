import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // actions里的city传到mutations里的city，给到state.city
  // 改变State此次操作时，没有异步处理，也没有批量操作；这时组件没有必要去调用Actions去做一个转换
  // 可以直接调用Mutations就可以了（去掉actions），在组件里不用dispatch调用actions，直接用commit
  // 当用户关闭本地存储或者使用影身功能，这时使用localStorage就会抛出异常，所以建议加一个trycatch
  // mutations:这些代码剪切到 state 和 mutations 这两个文件中
})
