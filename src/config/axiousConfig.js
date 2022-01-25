import axios from "axios"


const devUrl="https://ty-shop.herokuapp.com/"
const paymentGateWayUrl=""
const testUrl=''
const prodUrl=''
const axiosInstance=axios.create({
    baseUrl:devUrl
})

const axiosInstancePayment=axios.create({
    baseUrl:paymentGateWayUrl
})
export default axiosInstance
export {axiosInstancePayment}