import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapiserver.reactbd.org/api",

});

export const API = {
    getProducts(){
        return instance.get(`/products`)
    }
}