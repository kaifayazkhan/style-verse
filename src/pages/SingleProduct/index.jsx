import { useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import { ProductContext } from "../../context/ProductCart";
import getProductById from "../../hooks/getProductsById";
const SingleProduct = () => {

    const {state:{singleProduct},dispatch} = useContext(ProductContext);

    const { productId } = useParams();
    // console.log(productId);

    useEffect(() => {
        (async () => {
            await getProductById({ dispatch },productId)
        }
        )()
    }, [dispatch, productId])

    // console.log("prod",products)

    if(singleProduct.length<=0) return <h1>Loading...</h1>

    return(
        <div className="px-[5%] my-[5%]">
            <ProductDetail data={singleProduct}/>
        </div>
    )
}

export default SingleProduct