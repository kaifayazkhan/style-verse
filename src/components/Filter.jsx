import { useContext } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { style } from "src/constant/globalStyle"
import FilterBox from "./FilterBox"
import { ProductContext } from "src/context/ProductCart"
import propType from "prop-types"
const Filter = ({ handleClose }) => {

    const { state: { products }, filterState: { sort, rating, brand, size, category }, filterDispatch } = useContext(ProductContext);

    const brands = [...new Set(products.map((product) => product.brand))]
    const categories = [...new Set(products.map((product) => product.category))];

    const handleCategoryChange = (e) => {
        if (e.target.checked) {
            filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: e.target.value
            })
        }
        if (!e.target.checked) {
            filterDispatch({
                type: "REMOVE_CATEGORY",
                payload: e.target.value
            })
        }
    }
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
        if (!e.target.checked) {
            filterDispatch({
                type: "REMOVE_SIZE",
                payload: e.target.value
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

    const clearAllFilter = () => {
        filterDispatch({
            type: "CLEAR_FILTER"
        })
    }



    return (
        <div className=" w-full h-full  overflow-y-auto ">
            <div className=" p-3">
                <div className={`${style["flex-row"]}  `}>
                    <h2 className={`${style["heading-small"]} text-lg`}>Filters</h2>
                    <button className={`${style["global-btn"]} `} onClick={clearAllFilter}>
                        Clear All
                    </button>
                </div>
                <div className="mt-4">
                    <h3 className={`${style["heading-small"]} text-lg`}>Sort by Categories:</h3>
                    <div className="flex flex-col gap-2 mt-3">
                        {
                            categories?.map((item, idx) => (
                                <FilterBox key={idx} type="checkbox" check={category.includes(item)} title={item} onChange={handleCategoryChange} />
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className={`${style["heading-small"]} text-lg`}>Sort by Brand:</h3>
                    <div className="flex flex-col gap-2 mt-3">
                        {
                            brands.map((item) => (
                                <FilterBox key={item} type="checkbox"  check={brand.includes(item)} title={item} onChange={handleBrandChange} />
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className={`${style["heading-small"]} text-lg`}>Sort by Size:</h3>
                    <div className="flex flex-col gap-2 mt-3">
                        {
                            ['S', 'M', 'L', 'XL'].map((item) => (
                                <FilterBox key={item} type="checkbox" title={item} check={size.includes(item)} onChange={handleSizeChange} />
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className={`${style["heading-small"]} text-lg`}>Sort by Price:</h3>
                    <div className="flex flex-col gap-2 mt-3">
                        <FilterBox type="radio" title="Low to High" check={sort === "Low to High" ? true : false} onChange={handlePriceChange} />
                        <FilterBox type="radio" title="High to Low" check={sort === "High to Low" ? true : false} onChange={handlePriceChange} />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className={`${style["heading-small"]} text-lg`}>Sort by Rating:</h3>
                    <div className="flex  gap-1 mt-3">
                        {
                            [1, 2, 3, 4, 5].map((_, i) => (
                                rating > i ? <AiFillStar key={i} className="cursor-pointer" onClick={() => handleRatingChange(i)} /> : <AiOutlineStar key={i} className="cursor-pointer" onClick={() => handleRatingChange(i)} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`${style["flex-row"]} absolute  lg:hidden bottom-0 w-full p-4 bg-white `}>
                <button className={`${style["btn-outline"]}  lg:hidden`} onClick={handleClose}>
                    CLOSE
                </button>
                <div className="w-[1px] h-6 visible bg-[#4C4E6438] lg:hidden"></div>
                <button className={`${style["global-btn"]} lg:hidden`} onClick={handleClose}>
                    APPLY
                </button>
            </div>
        </div>
    )
}

Filter.propTypes = {
    handleClose: propType.func.isRequired
}

export default Filter