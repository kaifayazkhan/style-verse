import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { FilterReducer } from "../reducers/FilterReducer";
import PropTypes from "prop-types"
import prod from "../constant/products.json";

const ProductContext = createContext();

const initialState = {
    products: [],
    singleProduct: [],
    cart: [],
    wishlist: [],
}

const initialFilterState = {
    sort: "",
    rating:"",
    searchQuery:"",
    brand:[],
    category:[],
    size:[],
}
const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [filterState, filterDispatch] = useReducer(FilterReducer,initialFilterState);

    const getProducts = ()=>{
        return dispatch({
            type: "GET_PRODUCTS",
            payload:prod.men_products
        })
    }

    const getProductById = (id) => {
        return dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: prod.men_products.filter((item) => item.product_id === id)
        })
    }

    const contextValue = {
        state,
        dispatch,
        filterState,
        filterDispatch,
        getProducts,
        getProductById
    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );

}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductContext, ProductProvider};