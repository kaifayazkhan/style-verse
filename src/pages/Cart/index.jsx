import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductCart"
import CartProductCard from "../../components/CartProductCard";

const Cart = () => {
    const { state: { cart } } = useContext(ProductContext);
    // console.log("Cart data",cart)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems,setTotalItems] = useState(0);

    useEffect(() => {
        const price = cart?.reduce((acc, item) => acc + item.discounted_price * item.quantity, 0)
        setTotalPrice(price)

        const totalItems = cart?.reduce((acc,item)=>acc+item.quantity,0);
        setTotalItems(totalItems)
    }, [cart])

    return (
        <div className="px-[5%] my-[5%] min-h-[50vh] flex flex-col justify-center items-center">
            {
              cart?.length>0 ?  (<div>
            <h1 className="text-3xl text-center my-10">Your Products</h1>
                    <div className="flex flex-col gap-8">
                        {
                            cart?.map((item) => (
                                <CartProductCard key={item.product_id} data={item} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col  items-end mt-6  text-lg">
                        <p className="font-semibold">Total Items: {totalItems}</p>
                        <p className="font-bold">Total Price: $ {totalPrice.toFixed(2)}</p>
                        <button className="bg-black text-white px-4 py-1 mt-3 rounded" >Checkout</button>
                    </div>
                </div>): (
                    <div className="text-center flex flex-col gap-2">
                    <h2 className="text-2xl text-center ">No Items are added in the cart</h2>
                    <Link to="/" className="text-center text-xl underline">Go to Products</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart