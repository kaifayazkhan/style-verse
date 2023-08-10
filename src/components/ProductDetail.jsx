import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ProductContext } from "../context/ProductCart";
import { style } from "../constant/globalStyle";
import SizeModal from "./SizeModal";
import { useEffect } from "react";
const ProductDetail = ({ ...data }) => {
    const { product_id, product_name, description, price, image_url, brand, discounted_price, sizes } = data.data[0];

    const { state, dispatch } = useContext(ProductContext);

    const [productSize, setProductSize] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const addToCart = () => {
        if (!productSize) {
            alert("Please select a size");
            return;
        }
        const payload = {
            product_id: `${product_id}${productSize}`,
            product_name,
            description,
            price,
            discounted_price,
            brand,
            image_url,
            quantity: 1, //Quantity is added to the product object when any new product is added to the cart then the quantity is set to 1
            size: productSize,
        };

        dispatch({ type: "ADD_TO_CART", payload });
    }

    const addToWishlist = (product) => {
        dispatch({
            type: "ADD_TO_WISHLIST",
            payload: { ...product.data[0] }
        })
    }

    const removeFromWishlist = (product_id) => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product_id
        })
    }

    const handleModal = () => {
        setOpenModal(!openModal);
    }

    useEffect(()=>{
        document.body.style.overflow = openModal ?'hidden' : 'auto'
    },[openModal])


    return (
        <>
            <div className={`${style["flex-col"]} gap-4 md:gap-0 md:flex-row md:items-start md:justify-between w-full md:w-3/4 mx-auto `}>

                <div className="w-full md:w-[40%] bg-gray-200 relative">
                    <img src={image_url} alt={product_name} className="w-full h-60 md:h-72 md:max-h-80 object-contain mix-blend-multiply" />
                    <div className="absolute top-4 right-4 text-2xl cursor-pointer">
                        {
                            state?.wishlist?.find((item) => item.product_id === product_id) ? <AiFillHeart className="text-red-500" onClick={() => removeFromWishlist(product_id)} /> : (<AiOutlineHeart className="hover:text-red-500 " onClick={() => addToWishlist(data)} />)
                        }
                    </div>
                </div>

                <div className="w-full md:w-[50%] flex flex-col gap-3 ">
                    <div className={`${style["flex-row"]}`}>
                        <span className="text-sm cursor-pointer font-bold">{brand}</span>
                        <span className="text-sm cursor-pointer font-semibold" onClick={handleModal}>Size guide</span>
                    </div>
                    <h2 className={`${style["heading-medium"]} uppercase`}>{product_name}</h2>
                    <div className={`${style["flex-row-start"]} gap-2`}>
                        <p className={`${style["heading-xsmall"]} line-through`}>${price}</p>
                        <p className={`${style["heading-small"]}`}>${discounted_price}</p>
                        <span className="text-[10px]">inclusive of all taxes</span>
                    </div>
                    <p className="text-sm">{description}</p>


                    <div className={`${style["flex-row-start"]} gap-3`}>
                        <p className={`${style["heading-small"]}`}>Size:</p>
                        <div className={`${style["flex-row"]} justify-start gap-3`}>
                            {sizes?.map((size) => (<span key={size} className={`px-4 cursor-pointer py-2 border border-gray-400 rounded-md text-sm ${productSize === size && "bg-gray-400"}`} onClick={() => setProductSize(size)}>{size}</span>))}
                        </div>
                    </div>
                    {
                        state?.cart?.find((item) => item.size === productSize && item.product_id === (`${product_id}${productSize}`)) ? <button className={`${style["btn-outline"]}`}><Link to="/cart">Go to Cart</Link></button> : <button onClick={addToCart} className={`${style["global-btn"]}`} >Add to Cart</button>
                    }

                </div>

            </div>
            {
                openModal && <div className="absolute left-0 top-0 right-0 bottom-0  bg-[#0009] backdrop-blur-sm  flex justify-center items-center p-[5%]">
                    <SizeModal closeModal={handleModal} />
                </div>
            }
        </>
    )
}

export default ProductDetail
