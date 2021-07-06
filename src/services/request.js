//对请求api进行封装使用
import { axiosGet } from "../libs/http";
function getData (consName, type) {//利用promise进行异步操作顺便使用 async await 语法糖 
  return new Promise((resolve, reject) => {
    axiosGet({
      url: `http://web.juhe.cn:8080/constellation/getAll?consName=${consName}&type=${type}`,
      success (data) {
        resolve(data);
      },
      error (err) {
        reject(err)
      }
    });
  })

}

export {
  getData
}