import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60000
})

instance.interceptors.request.use(
  config => config,
  error => error
)

instance.interceptors.response.use(
  ({ data }) => data,
  error => error
)

export default instance
