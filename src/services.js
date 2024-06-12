import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.1.14:3000/"
})

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    }
}