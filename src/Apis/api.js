
import { Get_products, Get_categories } from './config';
import axios from 'axios';

export const getProductList = (callBack) => {
    const config = {
        method: 'get',
        url: Get_products,
    };

    axios(config)
        .then(function (response) {
            callBack({ data: response.data });

        })
        .catch(function (error) {
            console.log(error);
        });
};

export const getCategoriesTabs = (callBack) => {
    var config = {
        method: 'get',
        url: Get_categories,
    };

    axios(config)
        .then(function (response) {

            callBack({ data: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });
}

