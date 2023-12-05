import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { ProductContext } from "src/context/ProductCart";
import Logo from "src/assets/style-verse-logo.png";
import PropTypes from "prop-types";
import { style } from "src/constant/globalStyle";
import useToken from "src/hooks/useToken";
import useAuth from "src/hooks/useAuth";
const Header = ({ search }) => {
  const {
    state: { cart, wishlist },
    filterDispatch,
  } = useContext(ProductContext);

  const { token } = useToken();
  const { signOut } = useAuth();
  const [totalItems, setTotalItems] = useState(0);
  const [wishlistItem, setWishlistItem] = useState(0);

  useEffect(() => {
    const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(totalItems);

    setWishlistItem(wishlist.length);
  }, [cart, wishlist]);

  const handleSearch = (e) => {
    filterDispatch({
      type: "SEARCH_BY_NAME",
      payload: e.target.value,
    });
  };

  return (
    <header className="flex justify-between px-[5%] gap-3 py-5 md:py-4 flex-wrap md:flex-nowrap items-center w-full  bg-[#F3F4F6] min-h-16">
      <div className="text-3xl relative">
        <Link to="/" className="absolute top-0 left-0 right-0 bottom-0" />
        <img src={Logo} className="w-32 md:w-40 " />
      </div>
      {search && (
        <div className="order-3 w-full border-2 rounded-lg border-gray-300  bg-white max-w-full md:w-auto  md:order-none">
          <div className="relative  mx-auto max-w-full text-gray-600  h-10 ">
            <input
              className="h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              autoComplete="off"
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 translate-y-[-50%]  mr-4 text-2xl"
            >
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      )}
      <div>
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <div className="text-2xl relative">
              <Link to="/cart">
                <AiOutlineShoppingCart />
                {totalItems > 0 && (
                  <span className="text-sm absolute -top-4 -right-3 bg-red-400 w-5 h-5 text-center rounded-[50%]">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </li>
          <li>
            <div className="text-2xl relative">
              <Link to="/wishlist">
                <AiOutlineHeart />
                {wishlistItem > 0 && (
                  <span className="text-sm absolute -top-4 -right-3 bg-red-400 w-5 h-5 text-center rounded-[50%]">
                    {wishlistItem}
                  </span>
                )}
              </Link>
            </div>
          </li>
          <li>
            {token ? (
              <button
                className={`${style["btn-outline"]}`}
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button className={`${style["btn-outline"]}`}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  search: PropTypes.bool.isRequired,
};

export default Header;
