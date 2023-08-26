import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Filter";
import Loader from "../../components/Loader";
import { style } from "../../constant/globalStyle";
import { ProductContext } from "../../context/ProductCart";
import useFilterProducts from "../../hooks/useFilterProducts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ProductPage = () => {
  const {
    getProducts,
    state: { products },
  } = useContext(ProductContext);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useFilterProducts();

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    // console.log("data changed",data);
  }, [data]);

  return (
    <>
      <Header search />
      {products?.length <= 0 ? (
        <Loader />
      ) : (
        <div
          className={`${style["padding-global"]} flex flex-col lg:flex-row justify-between gap-6 w-full mt-2 mb-8 md:my-8 relative`}
        >
          <div
            className={`border bg-white  w-full  lg:w-[300px] left-0  fixed z-[100]   ${
              showFilter ? "top-0 bottom-0" : "top-[100%]"
            } transition-all duration-300 lg:sticky lg:top-2 lg:max-h-screen`}
          >
            <Filter handleClose={handleShowFilter} />
          </div>
          <div className="flex justify-end lg:hidden ">
            <button
              className={`${style["global-btn"]}`}
              onClick={handleShowFilter}
            >
              Filters
            </button>
          </div>
          <div className="flex mx-auto  justify-start  gap-5 lg:gap-3 w-full lg:w-[80%] flex-wrap">
            {data.length > 0 ? (
              data?.map((product) => (
                <ProductCard key={product.product_id} data={product} />
              ))
            ) : (
              <div className="flex justify-center items-center  mx-auto text-center min-h-[60dvh]">
                <h2 className={`${style["heading-medium"]}`}>
                We could&apos;t find any matches!
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductPage;
