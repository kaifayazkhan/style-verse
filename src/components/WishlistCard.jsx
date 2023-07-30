import { useContext } from "react";
import { Link } from "react-router-dom";
import { style } from "../constant/globalStyle";
import { ProductContext } from "../context/ProductCart";
import { AiFillHeart } from "react-icons/ai";
const WishlistCard = ({ ...data }) => {
    const { product_id, brand, product_name, discounted_price, image_url } = data.data;

    const { state: { cart }, dispatch } = useContext(ProductContext);

    const removeFromWishlist = (product_id) => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product_id
        })
    }

    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...product.data, quantity: 1 }
        })
    }

    return (
        <div className={`${style["flex-col"]} p-4 w-full md:w-64 border relative items-center border-gray-300 rounded`}>
            <Link to={`/product/${product_id}`} className="absolute top-0 left-0 bottom-0 right-0" />
            <img src={image_url} alt={product_name} className="w-24 md:w-32 h-24 md:h-32 object-contain" />
            <div className="flex flex-col gap-2 w-full mt-4">
                <div className={`${style["flex-col"]} gap-1`}>
                    <p>{brand}</p>
                    <h2 className={`${style["heading-small"]}`}>{product_name.slice(0,20)+"..."}</h2>
                    <h2 className={`${style["heading-small"]}`}>${discounted_price}</h2>
                </div>
                <div className={`${style["flex-row"]} items-center`}>

                    {
                        cart?.find((item) => item.product_id === product_id) ? <Link to="/cart" className={`${style["btn-outline"]} text-green-500 z-50`}>Go to Cart</Link> : <button className={`${style["btn-outline"]} z-50`} onClick={() => addToCart(data)}>Add to Cart</button>
                    }
                    <AiFillHeart className="text-red-500 text-2xl cursor-pointer z-50" onClick={() => removeFromWishlist(product_id)} />
                </div>
            </div>
        </div>
    )
}

export default WishlistCard