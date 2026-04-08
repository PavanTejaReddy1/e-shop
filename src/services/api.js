import axios from "axios";

const API = axios.create({
    baseURL: "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app",
    headers: {
        "x-internal-call": "true",
    },
});

export const getProducts = (page = 1) =>
    API.get(`/cms/products?page=${page}`);