import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { ProductContext } from "../context/ProductCart";
const ProductCard = ({ ...data }) => {

  const { product_id, brand, product_name, price, image_url } = data.data;

  const { state, dispatch } = useContext(ProductContext);
  
  const addToWishlist = (product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { ...product.data }
    })
  }

  const removeFromWishlist = (product_id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product_id
    })
  }


  return (
    <div className="w-[46%] md:w-[22%] max-w-[240px] border border-gray-400 rounded-lg p-6 relative hover:scale-y-110 transition duration-200">
      <Link to={`/product/${product_id}`} className="absolute top-0 left-0 bottom-0 right-0" />

      <div className="absolute top-4 right-4 text-2xl cursor-pointer z-50">
        {
          state?.wishlist?.find((item) => item.product_id === product_id) ? <AiFillHeart className="text-red-500" onClick={() => removeFromWishlist(product_id)} /> : (<AiOutlineHeart className="hover:text-red-500 " onClick={() => addToWishlist(data)} />)
        }
      </div>
      <div >
        <img src={`${image_url}`} alt={product_name} className="w-full h-22 md:h-44 object-contain" />
      </div>

      <div className="mt-4 text-sm flex flex-col gap-2">
        <p>{brand}</p>
        <h3 className="font-bold">{product_name.slice(0, 20) + "..."}</h3>
        <p className="font-semibold">${price}</p>
      </div>

    </div>
  )
}

export default ProductCard