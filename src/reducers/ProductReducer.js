const ProductReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "GET_PRODUCT_BY_ID":
            return {
                ...state,
                singleProduct: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.product_id !== action.payload)
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) => item.product_id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) => item.product_id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, { ...action.payload }]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.product_id !== action.payload)
            }
        default:
            return state

    }
}

export { ProductReducer };