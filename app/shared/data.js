import axios from "axios";

export default class MelloGreenData {
    constructor(){

    }

    getDistributors() {
        return axios.get("/api/distributors");
    }

    getTotalSalesThisWeek(){
        return axios.get("/api/sales/this-week/total");
    }

    getTotalSalesThisWeekByProduct(){
        return axios.get("/api/sales/this-week/by-product");
    }

    getProducts(){
        return axios.get("/api/products");
    }

    getSales(){
        return axios.get("/api/sales/200");
    }
}