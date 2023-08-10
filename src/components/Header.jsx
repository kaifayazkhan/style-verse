import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import { ProductContext } from "../context/ProductCart"
import Logo from "../assets/style-verse-logo.png"
import PropTypes from "prop-types"
const Header = ({ search }) => {
    const { state: { cart, wishlist }, filterDispatch } = useContext(ProductContext);

    const [totalItems, setTotalItems] = useState(0);
    const [wishlistItem, setWishlistItem] = useState(0);


    useEffect(() => {
        const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(totalItems)

        setWishlistItem(wishlist.length)
    }, [cart, wishlist])

    const handleSearch = (e) => {
        filterDispatch({
            type: "SEARCH_BY_NAME",
            payload: e.target.value
        })
    }

    return (
        <header className="flex justify-between px-[5%] items-center w-full bg-slate-300 h-16">
            <div className="text-3xl relative">
                <Link to="/" className="absolute top-0 left-0 right-0 bottom-0" />
                <img src={Logo} className="w-32 md:w-40 " />
            </div>
            {search && <input type="Search" placeholder="Search products" onChange={handleSearch} className="p-2 hidden md:block outline-none" />}
            <div>
                <ul className="flex items-center gap-6 text-lg">
                    <li>
                        <div className="text-2xl relative" >
                            <Link to="/cart">
                                <AiOutlineShoppingCart />
                                {totalItems > 0 && <span className="text-sm absolute -top-4 -right-3 bg-red-400 w-5 h-5 text-center rounded-[50%]">{totalItems}</span>}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="text-2xl relative">
                            <Link to="/wishlist">
                                <AiOutlineHeart />
                                {wishlistItem > 0 && <span className="text-sm absolute -top-4 -right-3 bg-red-400 w-5 h-5 text-center rounded-[50%]">{wishlistItem}</span>}
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    search: PropTypes.bool.isRequired,
}



export default Header