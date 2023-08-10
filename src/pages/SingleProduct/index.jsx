import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import { ProductContext } from "../../context/ProductCart";
import Loader from "../../components/Loader";
const SingleProduct = () => {

    const { state: { singleProduct }, getProductById } = useContext(ProductContext);

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    return (
        <>
            {
                singleProduct.length <= 0 ? <Loader /> : (
                    <div className="px-[5%] my-[5%]">
                        <ProductDetail data={singleProduct} />
                    </div>
                )
            }
        </>
    )
}

export default SingleProduct