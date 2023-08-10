import { useContext } from "react"
import { Link } from "react-router-dom"
import { style } from "../../constant/globalStyle"
import { ProductContext } from "../../context/ProductCart"
import WishlistCard from "../../components/WishlistCard"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


const Wishlist = () => {
    const { state: { wishlist } } = useContext(ProductContext);

    return (
        <>
            <Header search={false}/>
            <div className={`${style["padding-global"]} py-[5%] min-h-[70dvh]`}>
                {wishlist.length > 0 && <h1 className={`${style["heading-large"]} text-center `}>Your Wishlist</h1>}
                <div className={`${style["flex-col"]} md:flex-row mt-8 gap-4`}>
                    {
                        wishlist?.map((product) => (
                            <WishlistCard key={product.product_id} data={product} />
                        ))
                    }
                </div>
                {
                    wishlist.length <= 0 && <div className="text-center flex flex-col items-center justify-center mt-20 gap-2">
                        <h2 className="text-2xl text-center ">Your wishlist is empty</h2>
                        <Link to="/shop" className="text-center text-xl underline">Add Products</Link>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default Wishlist