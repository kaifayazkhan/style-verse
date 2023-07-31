import {  useContext ,useEffect} from "react";
import ProductCard from "../../components/ProductCard"
import { ProductContext } from "../../context/ProductCart";
import getProducts  from "../../hooks/getProducts";

const ProductPage = () => {

    const { state:{products},dispatch } = useContext(ProductContext);

    useEffect(() => {
        (async () => {
            await getProducts({ dispatch })
        }
        )()
    }, [dispatch])  

    if(products?.length<=0) return <h1>Loading...</h1>

    return (
        <div className="px-[5%] my-8 flex justify-center  items-center gap-4 lg:gap-8 flex-wrap">
            {
                products?.map((product) => (
                    <ProductCard key={product.product_id} data={product} />
                ))
            }
        </div>
    )
}

export default ProductPage