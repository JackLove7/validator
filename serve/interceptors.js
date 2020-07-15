import axios from 'axios'

export default function(vm){
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if(token){
      config.headers.token = token
    }
    return config
  })

  axios.interceptors.response.use(null, err => {
    console.log('err status', err.response.status)
    if(err.response.status === 401){
       // 清空
      vm.$store.dispatch('logout')
       // 跳转
       vm.$route.replace('/')
    }
    return Promise.reject(err => {
      console.log('err==>', err)
      
    }) 
  })
}
