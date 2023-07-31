import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { FilterReducer } from "../reducers/FilterReducer";
import PropTypes from "prop-types"

const ProductContext = createContext(   );

const initialState = {
    products: [],
    singleProduct: [],
    cart: [],
    wishlist: [],
}
const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        sort: "",
        brand:[],
        category:[],
        size:[],
        color:[],
        rating:''
    });

    return (
        <ProductContext.Provider value={{ state, dispatch ,filterState,filterDispatch}}>
            {children}
        </ProductContext.Provider>
    );

}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductContext, ProductProvider};