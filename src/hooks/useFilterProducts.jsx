import { useContext,useState,useEffect } from "react";
import { ProductContext } from "../context/ProductCart";

const useFilterProducts = () => {
    const { state: { products }, filterState: { sort,brand,size ,rating,searchQuery} } = useContext(ProductContext);
    const [data,setData] = useState([]);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            let newProduct = products;

            if (sort) {
                if (sort === "Low to High") {
                    newProduct = newProduct.sort((a, b) => a.discounted_price - b.discounted_price);
                } else if (sort === "High to Low") {
                    newProduct = newProduct.sort((a, b) => b.discounted_price - a.discounted_price);
                } else {
                    newProduct = products;
                }
            }
        
            if(brand.length>0){
                newProduct = newProduct.filter((product) => brand.includes(product.brand))
            }
        
            if(size.length>0){
                newProduct = newProduct.filter((product) => (
                    product.sizes.some((item) => size.includes(item))
                ))
            }
        
            if(rating>0){
                newProduct = newProduct.filter((product)=>product.rating === rating)
            }
        
            if(searchQuery.length>0){
                newProduct = newProduct.filter((product)=>product.product_name.toLowerCase().includes(searchQuery.toLowerCase()))
            }

            setData(newProduct)
        
        },700);

        return ()=>clearTimeout(timer);
    },[sort,brand,size,rating,searchQuery,products])
    
    return data;
}

export default useFilterProducts