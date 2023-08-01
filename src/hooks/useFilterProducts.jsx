import { useContext } from "react";
import { ProductContext } from "../context/ProductCart";

const useFilterProducts = () => {
    const { state: { products }, filterState: { sort,brand,size ,rating,searchQuery} } = useContext(ProductContext);

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

    return newProduct;
}

export default useFilterProducts