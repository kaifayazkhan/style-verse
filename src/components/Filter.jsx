import { useContext } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { style } from "../constant/globalStyle"
import FilterBox from "./FilterBox"
import { ProductContext } from "../context/ProductCart"
const Filter = () => {
    const { state: { products }, filterState: { sort, rating,brand ,size}, filterDispatch } = useContext(ProductContext);


    const brands = [...new Set(products.map((product) => product.brand))]


    const handleBrandChange = (e) => {
        if (e.target.checked) {
            filterDispatch({
                type: "FILTER_BY_BRAND",
                payload: e.target.value
            })
        }
        if (!e.target.checked) {
            filterDispatch({
                type: "REMOVE_BRAND",
                payload: e.target.value
            })
        }
    }

    const handleSizeChange = (e) => {
        if (e.target.checked) {
            filterDispatch({
                type: "FILTER_BY_SIZE",
                payload: e.target.value
            })
        }
        if(!e.target.checked){
            filterDispatch({
                type:"REMOVE_SIZE",
                payload:e.target.value
            })
        }
    }

    const handlePriceChange = (e) => {
        if (e.target.checked) {
            filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: e.target.value
            })
        }
    }

    const handleRatingChange = (i) => {
        filterDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1
        })
    }

    // console.log('si',size)


    return (
        <div className="bg-gray-400 w-full h-full overflow-y-auto p-3">
            <h2 className={`${style["heading-medium"]}`}>Filter by:</h2>
            <div className="mt-4">
                <h3 className={`${style["heading-small"]}`}>Brand:</h3>
                <div className="flex flex-col gap-2 mt-3">
                    {
                        brands.map((item) => (
                            <FilterBox key={item} type="checkbox" check={brand.includes(item)} title={item} onChange={handleBrandChange} />
                        ))
                    }
                </div>
            </div>
            <div className="mt-4">
                <h3 className={`${style["heading-small"]}`}>Size:</h3>
                <div className="flex flex-col gap-2 mt-3">
                    {
                        ['S', 'M', 'L', 'XL'].map((item) => (
                            <FilterBox key={item} type="checkbox" title={item} check={size.includes(item)} onChange={handleSizeChange} />
                        ))
                    }
                </div>
            </div>
            <div className="mt-4">
                <h3 className={`${style["heading-small"]}`}>Price:</h3>
                <div className="flex flex-col gap-2 mt-3">
                    <FilterBox type="radio" title="Low to High" check={sort === "Low to High" ? true : false} onChange={handlePriceChange} />
                    <FilterBox type="radio" title="High to Low" check={sort === "High to Low" ? true : false} onChange={handlePriceChange} />
                </div>
            </div>
            <div className="mt-4">
                <h3 className={`${style["heading-small"]}`}>Rating:</h3>
                <div className="flex  gap-1 mt-3">
                    {
                        [1, 2, 3, 4, 5].map((_, i) => (
                            rating > i ? <AiFillStar key={i} className="cursor-pointer" onClick={() => handleRatingChange(i)} /> : <AiOutlineStar key={i} className="cursor-pointer" onClick={() => handleRatingChange(i)} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter