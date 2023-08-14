import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductCart"
import CartProductCard from "../../components/CartProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { style } from "../../constant/globalStyle";
import ToastNotification from "../../components/ToastNotification";

const Cart = () => {
    const { state: { cart } } = useContext(ProductContext);
    // console.log("Cart data",cart)

    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {

        const price = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(price)

        const discprice = cart?.reduce((acc, item) => acc + item.discounted_price * item.quantity, 0);
        const discount = price - discprice;
        setDiscount(discount);

        const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(totalItems)

    }, [cart])

    return (
        <>
            <Header search={false} />
            <ToastNotification/>
            <div className="px-[5%] my-[5%] min-h-[50vh] flex flex-col justify-center items-center ">
                {cart.length > 0 && <h1 className={`${style["heading-large"]} mb-6`}>My Shopping Bag ({cart.length} Items)</h1>}
                {
                    cart.length > 0 ?
                        (<div className="md:flex w-full justify-between gap-4">
                            <div className="border border-[#4C4E6438] py-4 md:w-[70%] h-full md:max-w-3xl lg:min-w-[70%] rounded-lg">
                                <div className="flex flex-col ">
                                    {
                                        cart?.map((item, i) => (
                                            <div key={item.product_id}>
                                                <CartProductCard data={item} />
                                                {i !== cart.length - 1 && <hr className="bg-[#4C4E6438]" />}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col items-start  mt-4 md:mt-0 md:w-[25%] md:min-w-[250px] h-full lg:min-w-[25%]">
                                <div className="text-sm rounded-lg w-full flex flex-col gap-2 p-4 border border-[#4C4E6438]">
                                    <h2 className={`${style["heading-medium"]} `}>Price Details</h2>
                                    <p >Total Items: {totalItems}</p>
                                    <p >Item Price: ${totalPrice.toFixed(2)}</p>
                                    <p >Discount : ${discount.toFixed(2)}</p>
                                    <hr className="bg-[#4C4E6438] mt-4" />
                                    <div className={`${style["heading-small"]} ${style["flex-row"]} mt-2`}>
                                        <h3>Total</h3>
                                        <h3> ${(totalPrice - discount).toFixed(2)}</h3>
                                    </div>
                                </div>
                                <button className="bg-black text-white flex justify-end items-end ml-auto px-4 py-1 mt-3 rounded" >Checkout</button>
                            </div>
                        </div>) : (
                            <div className="text-center flex flex-col gap-2">
                                <h2 className="text-2xl text-center ">No Items are added in the cart</h2>
                                <Link to="/shop" className="text-center text-xl underline">Add Products</Link>
                            </div>
                        )
                }
            </div>
            <Footer />
        </>
    )
}

export default Cart