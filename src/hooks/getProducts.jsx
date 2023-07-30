import products from "../constant/data.json";

const getProducts = async ({dispatch}) => {
    return dispatch({
        type: "GET_PRODUCTS",
        payload:products.men_shirts
    })
}

export default getProducts;