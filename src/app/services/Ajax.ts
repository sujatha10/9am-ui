import axios from "axios"
const BASE_URL = "http://localhost:2020/"
export class Ajax {
    static sendGetReq(url: String) {
        return axios.get(BASE_URL + url)
    }

    static sendPostReq(url: String, data: any) {
        return axios.post(BASE_URL + url,data)
    }
    static sendPutReq(url: String, data: any) {
        return axios.put(BASE_URL + url,data)      
    }
    static sendDeleteReq(url: String, data: any) {
        return axios.delete(BASE_URL + url,data)
    }
}