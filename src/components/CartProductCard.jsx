import { useContext, useEffect } from "react";
import {RiDeleteBin6Line} from "react-icons/ri"
import { ProductContext } from "../context/ProductCart";
const CartProductCard = ({ ...data }) => {
    // console.log("Cart data", data.data);

    const { product_id, product_name, image_url, description, discounted_price, quantity } = data.data;

    const { dispatch } = useContext(ProductContext);

    const increaseQuantity = (product_id) => {
        dispatch({
            type: "INCREASE_QUANTITY",
            payload: product_id,
        })
    }

    const decreaseQuantity = (product_id) => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: product_id,
        })
    }

    const removeFromCart = (product_id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product_id,
        })
    }

    useEffect(()=>{
        if(quantity===0){
            removeFromCart(product_id)
        }
    },[quantity])



    return (
        <div className="flex gap-5 p-4 rounded shadow-lg w-full bg-white shadow-slate-200">
            <img src={image_url} alt={product_name} className="w-24 md:w-32 h-24 md:h-32 object-contain" />
            <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between text-md md:text-xl font-semibold md:font-bold">
                    <h2>{product_name}</h2>
                    <h2>${discounted_price}</h2>
                </div>
                <p className="text-sm md:text-md ">{description}</p>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <span className="bg-black text-white w-8 text-center rounded-[50%] h-8 text-xl cursor-pointer"  onClick={()=>decreaseQuantity(product_id)}>-</span>
                        <p className="">{quantity}</p>
                        <span className="bg-black text-white w-8 text-center rounded-[50%] h-8 text-xl cursor-pointer" onClick={() => increaseQuantity(product_id)}>+</span>
                    </div>
                    <div className="text-2xl text-gray-400 cursor-pointer" onClick={() => removeFromCart(product_id)}>
                    <RiDeleteBin6Line/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard