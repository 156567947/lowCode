import axios from "axios";
import {message} from 'antd'
const instance = axios.create({
    baseURL: '/',
    timeout: 1000 * 5,
})

instance.interceptors.response.use(
    res => {
        const resData = res.data || {} as ResType
        const { errno, msg, data } = resData
        if (errno !== 0) {
            if(msg){
                message.error(msg)
            }
            throw new Error(msg)
        }
        return data
    }
)



export default instance;

export type ResType = {
    errno: number
    data?: ResDataType
    msg?: string
}

export type ResDataType = {
    [key: string]: any
}