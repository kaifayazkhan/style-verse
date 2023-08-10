import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import { ProductContext } from "../../context/ProductCart";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const SingleProduct = () => {

    const { state: { singleProduct }, getProductById } = useContext(ProductContext);

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    return (
        <>
        <Header search={false}/>
            {
                singleProduct.length <= 0 ? <Loader /> : (
                    <div className="px-[5%] my-[5%]">
                        <ProductDetail data={singleProduct} />
                    </div>
                )
            }
            <Footer/>
        </>
    )
}

export default SingleProduct