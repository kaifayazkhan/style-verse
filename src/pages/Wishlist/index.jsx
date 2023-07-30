import { useContext } from "react"
import { style } from "../../constant/globalStyle"
import { ProductContext } from "../../context/ProductCart"
import WishlistCard from "../../components/WishlistCard"

const Wishlist = ()=>{
    const {state:{wishlist}} = useContext(ProductContext);
    // console.log(wishlist)

    return(
        <div className={`${style["padding-global"]} py-[5%]`}>
            <h1 className={`${style["heading-large"]} text-center `}>Your Wishlist</h1>
            <div className={`${style["flex-col"]} md:flex-row mt-8 gap-4`}>
            {
                wishlist?.map((product)=>(
                    <WishlistCard key={product.product_id} data={product}/>
                ))
            }
            </div>
        </div>
    )
}

export default Wishlist