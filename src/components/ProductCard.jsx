import { useContext } from "react";
import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ProductContext } from "../context/ProductCart";
import { style } from "../constant/globalStyle";
const ProductCard = ({ ...data }) => {

  const { product_id, brand, product_name, price, image_url, rating } = data.data;

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
    <div className="w-[45%] min-h-fit max-h-[330px] max-w-[240px] lg:w-[230px]  border border-gray-400 rounded-lg p-6 relative hover:scale-y-105 transition duration-200">

      <div className="absolute top-4 right-4 text-2xl cursor-pointer z-50 ">
        {
          state?.wishlist?.find((item) => item.product_id === product_id) ? <AiFillHeart className="text-red-500 relative " onClick={() => removeFromWishlist(product_id)} /> : (<AiOutlineHeart className="hover:text-red-500  relative " onClick={() => addToWishlist(data)} />)
        }
      </div>
      <div className="relative">
        <Link to={`/product/${product_id}`} className="absolute top-0 left-0 bottom-0 right-0" />
        <img src={`${image_url}`} alt={product_name} className="w-full h-22 md:h-44 object-contain" />
      </div>

      <div className="mt-4 text-sm flex flex-col gap-2">
        <p className={`${style["heading-xsmall"]} font-normal`}>{brand}</p>
        <h3 className="font-bold uppercase">
          <Link to={`/product/${product_id}`}>{product_name.slice(0, 15) + "..."}</Link>
        </h3>
        <div className=" text-yellow-500 flex gap-1">
          {
            [1, 2, 3, 4, 5].map((_, idx) => (
              rating > idx ? <AiFillStar key={idx} /> : <AiOutlineStar key={idx} />
            ))}
        </div>
        <p className="font-semibold">${price}</p>
      </div>

    </div>
  )
}

export default ProductCard