
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { ProductContext } from "../context/ProductCart";
import { style } from "../constant/globalStyle";
const ProductDetail = ({ ...data }) => {
    const { product_id, product_name, description, price, image_url, brand, discounted_price } = data.data[0];

    const { state, dispatch } = useContext(ProductContext);

    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload:  { ...product.data[0], quantity: 1 },//Quantity is added to the product object when any new product is added to the cart then the quantity is set to 1
        })
    }

    const removeFromCart = (product_id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product_id,
        })
    }

    const addToWishlist = (product)=>{
        dispatch({
            type:"ADD_TO_WISHLIST",
            payload:{...product.data[0]}
        })
    }

    const removeFromWishlist = (product_id)=>{
        dispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload:product_id
        })
    }

    return (
        <div className={`${style["flex-col"]} gap-4 md:gap-0 md:flex-row md:items-center md:justify-between w-full md:w-3/4 mx-auto`}>
            <div className="w-full md:w-[40%] bg-gray-200 pt-4 relative">
                <img src={`${image_url}`} alt={product_name} className="w-full h-60 md:h-72 md:max-h-80 object-contain mix-blend-darken" />
                <div className="absolute top-4 right-4 text-2xl cursor-pointer">
                {
                    state?.wishlist?.find((item)=>item.product_id === product_id) ? <AiFillHeart className="text-red-500" onClick={()=>removeFromWishlist(product_id)}/> : (<AiOutlineHeart className="hover:text-red-500 " onClick={()=>addToWishlist(data)}/>)
                }
                </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-2 ">
                <h3 className={`${style["heading-xsmall"]}`}>{brand}</h3>
                <h2 className={`${style["heading-medium"]}`}>{product_name}</h2>
                <p>{description}</p>
                <div className="flex gap-2 items-center">
                    <p className={`${style["heading-xsmall"]} line-through`}>${price}</p>
                    <p className={`${style["heading-small"]}`}>${discounted_price}</p>
                </div>

                {
                    state?.cart?.find((item) => item.product_id === product_id) ? <button onClick={() => removeFromCart(product_id)} className={`${style["btn-outline"]}`}>Remove from Cart</button> : <button onClick={() => addToCart(data)} className={`${style["global-btn"]}`}>Add to Cart</button>
                }

            </div>
        </div>
    )
}

export default ProductDetail
