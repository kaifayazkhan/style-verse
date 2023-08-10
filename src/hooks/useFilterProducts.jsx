import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductCart";

const useFilterProducts = () => {
  const {
    state: { products },
    filterState: { sort, brand, size, rating, searchQuery, category },
  } = useContext(ProductContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, [products])
  useEffect(() => {
    const timer = setTimeout(() => {
      let filteredData = [...products];
      // let filteredData = products; //this code is giving not filtering the products fully

      if (sort === "Low to High") {
        filteredData = filteredData.sort((a, b) => a.price - b.price);
      } else if (sort === "High to Low") {
        filteredData = filteredData.sort((a, b) => b.price - a.price);
      }

      if (category?.length > 0) {
        filteredData = filteredData.filter((product) =>
          category.includes(product.category)
        );
      }

      if (brand?.length > 0) {
        filteredData = filteredData.filter((product) => brand.includes(product.brand));
      }

      if (size.length > 0) {
        filteredData = filteredData.filter((product) =>
          product.sizes.some((item) => size.includes(item))
        );
      }

      if (rating > 0) {
        filteredData = filteredData.filter((product) => product.rating === rating);
      }

      if (searchQuery.length > 0) {
        filteredData = filteredData.filter((product) =>
          product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) || product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
         ( product.brand.toLowerCase() + " "+ product.product_name.toLowerCase()).includes(searchQuery.toLowerCase())
        );
      }

      setData(filteredData);
    }, 700);

    return () => clearTimeout(timer);
  }, [category, brand, size, rating, searchQuery, products, sort]);


  return data;
};

export default useFilterProducts;
