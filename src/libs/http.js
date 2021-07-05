import axios from "axios"
import { JUHE_KEY } from "@/configs/keys"
//封装axios
function axiosGet (options) {//根据请求方式进行封装--get请求
  axios(options.url + "&key=" + JUHE_KEY)//后面接入key
    .then((res) => {//如果成功就返回res
      options.success(res.data)
    })
    .catch((err) => {//捕捉失败
      options.error(err)
    })
}
//将封装函数暴露出去
export {
  axiosGet
}