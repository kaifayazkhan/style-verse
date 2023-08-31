import { useContext } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { ProductContext } from "../context/ProductCart";
import { style } from "../constant/globalStyle";

import useToken from "../hooks/useToken";
const ProductCard = ({ ...data }) => {
  const { product_id, brand, product_name, price, image_url, rating } =
    data.data;

  const { state, dispatch } = useContext(ProductContext);
  const {token}  = useToken();

  const addToWishlist = (product) => {
    if(!token){
      toast.warning("Please login to add the item to wishlist.");
      return;
    }
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { ...product.data },
    });
    toast.success("Successfully added to wishlist");
  };

  const removeFromWishlist = (product_id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product_id,
    });
    toast.success("Removed from wishlist!");
  };

  return (
    <div className="w-[46%] lg:w-[23%]  md:w-[30%]   relative">
      <div className="absolute top-3 right-2 text-2xl cursor-pointer z-50 ">
        {state?.wishlist?.find((item) => item.product_id === product_id) ? (
          <AiFillHeart
            className="text-red-500 relative "
            onClick={() => removeFromWishlist(product_id)}
          />
        ) : (
          <AiOutlineHeart
            className="hover:text-red-500  relative "
            onClick={() => addToWishlist(data)}
          />
        )}
      </div>
      <div className="relative bg-gray-100 w-full h-40 md:h-44 overflow-hidden">
        <Link
          to={`/shop/${product_id}`}
          className="absolute top-0 left-0 bottom-0 right-0 z-10"
        />
        <img
          src={`${image_url}`}
          alt={product_name}
          className="w-full h-full max-h-full  object-contain mix-blend-multiply"
        />
      </div>

      <div className="mt-4 text-sm flex flex-col gap-1 ">
        <p className={`${style["heading-xsmall"]} font-normal`}>{brand}</p>
        <h3 className={`${style["heading-small"]} uppercase`}>
          <Link to={`/shop/${product_id}`}>{product_name}</Link>
        </h3>
        <div className=" text-yellow-500 flex gap-1">
          {[1, 2, 3, 4, 5].map((_, idx) =>
            rating > idx ? (
              <AiFillStar key={idx} />
            ) : (
              <AiOutlineStar key={idx} />
            )
          )}
        </div>
        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
