const FilterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_BRAND":
            return {
                ...state,
                brand: [...new Set([...state.brand, action.payload])]
            }
        case "REMOVE_BRAND":
            return {
                ...state,
                brand: state.brand.filter((item) => item !== action.payload)
            }
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                category: [...new Set([...state.category, action.payload])]
            }
            case "REMOVE_CATEGORY":
                return{
                    ...state,
                    category:state.category.filter((category)=>category !==action.payload)
                }
        case "FILTER_BY_PRICE":
            return {
                ...state,
                sort: action.payload
            }
        case "FILTER_BY_SIZE":
            return {
                ...state,
                size: [...new Set([...state.size, action.payload])]
            }
        case "REMOVE_SIZE":
            return {
                ...state,
                size: state.size.filter((item) => item !== action.payload)
            }
        case "FILTER_BY_RATING":
            return {
                ...state,
                rating: action.payload
            }
        case "SEARCH_BY_NAME":
                return{
                    ...state,
                    searchQuery:action.payload
                }
        case "CLEAR_FILTER":
            return {
                ...state,
                brand: [],
                category: [],
                size: [],
                sort: "",
                rating:"",
                searchQuery:""
            }

        default:
            return state
    }
}

export { FilterReducer };