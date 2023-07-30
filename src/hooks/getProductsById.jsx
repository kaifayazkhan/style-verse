import response from "../constant/data.json"

const getProductById = async({dispatch},id) => {
    return dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: response.men_shirts.filter((item) => item.product_id === id)
    })
}

export default getProductById