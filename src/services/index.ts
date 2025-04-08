import axios from "axios"

// 60 seconds
const REQUEST_TIMEOUT = 60000

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: REQUEST_TIMEOUT,
})
