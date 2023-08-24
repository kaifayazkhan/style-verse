import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "../pages/index"
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import {SignIn,SignUp} from "../pages/Auth";

const AppRouter = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productId" element={<SingleProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </Router>
    );
    }

export default AppRouter;