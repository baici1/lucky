import { getData } from "./request"

export default async (store) => {
  const consName = store.state.consName
  const field = store.state.field
  const data = await getData(consName, field)
  console.log('%c 🍗 data: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', data);
  if (data.error_code) {
    store.commit('setErrorCode', data.error_code)
    return
  }
  store.commit('setData', data.result)
}