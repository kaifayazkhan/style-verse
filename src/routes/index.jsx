import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Header from "../components/Header";
import ProductListingPage from "../pages/ProductPage";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Footer from "../components/Footer";

const AppRouter = () => {
    return (
        <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
        </Router>
    );
    }

export default AppRouter;