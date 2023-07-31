import { useContext, useEffect } from "react";
import ProductCard from "../../components/ProductCard"
import Filter from "../../components/Filter";
import { style } from "../../constant/globalStyle";
import { ProductContext } from "../../context/ProductCart";
import getProducts from "../../hooks/getProducts";
import useFilterProducts from "../../hooks/useFilterProducts";

const ProductPage = () => {

    const { state: { products }, dispatch} = useContext(ProductContext);

    
    useEffect(() => {
        (async () => {
            await getProducts({ dispatch })
        }
        )()
    }, [dispatch])
    
    const data = useFilterProducts();

    if (products?.length <= 0) return <h1>Loading...</h1>

    return (
        <div className={`${style["padding-global"]} flex justify-between gap-6 w-full my-8 relative`}>
            <div className="w-[20%] absolute z-50 left-0 lg:sticky top-2 max-h-screen">
                <Filter />
            </div>
            <div className="flex justify-center lg:justify-start  gap-8 w-full lg:w-[80%] flex-wrap">
                {
                    data?.map((product) => (
                        <ProductCard key={product.product_id} data={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPage