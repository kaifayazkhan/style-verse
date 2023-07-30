import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
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

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );

}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductContext, ProductProvider};