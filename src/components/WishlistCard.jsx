import { useContext } from "react";
import { Link } from "react-router-dom";
import { style } from "../constant/globalStyle";
import { ProductContext } from "../context/ProductCart";
import { AiFillHeart } from "react-icons/ai";
const WishlistCard = ({ ...data }) => {
    const { product_id, brand, product_name, discounted_price, image_url } = data.data;

    const { dispatch } = useContext(ProductContext);

    const removeFromWishlist = (product_id) => {    
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product_id
        })
    }



    return (
        <div className={`${style["flex-col"]} w-[45%] md:w-[230px] relative items-center `}>
            <div className="relative bg-gray-200 w-full h-40 md:h-44 overflow-hidden">
                <Link to={`/shop/${product_id}`} className="absolute top-0 left-0 bottom-0 right-0 z-10" />
                <img src={`${image_url}`} alt={product_name} className="w-full h-full max-h-full  object-contain mix-blend-multiply" />
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
                <div className={`${style["flex-col"]} gap-1`}>
                    <p className={`${style["heading-xsmall"]}`}>{brand}</p>
                    <Link to={`/shop/${product_id}`}>
                    <h2 className={`${style["heading-small"]}`}>{product_name.slice(0, 15) + "..."}</h2>
                    </Link>
                </div>
                <div className={`${style["flex-row"]} items-center`}>
                        <h2 className={`${style["heading-small"]}`}>${discounted_price}</h2>
                        <AiFillHeart className="text-red-500 text-2xl cursor-pointer z-50" onClick={() => removeFromWishlist(product_id)} />
                </div>
            </div>
        </div>
    )
}

export default WishlistCard