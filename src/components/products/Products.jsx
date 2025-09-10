import ProductCard from "../shared/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../../store/index.js";
import Filter from "./Filter.jsx";
import useProductFilter from "../../hooks/useProductFilter.js";
import Loader from "../shared/Loader.jsx";
import Paginations from "../shared/Paginations.jsx";

const Products = () => {

    const {isLoading, errorMessage} = useSelector(
        (state) => state.errors
    )

    const {products, categories, pagination} = useSelector(
        (state) => state.products
    )
    const dispatch = useDispatch();
    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter categories={categories ? categories : []}/>
            {
                isLoading ?
                    <Loader/> :
                    errorMessage ?
                        (<div>Error Message</div>) :
                        (<div className="min-h-[700px]">
                            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap">
                                {products &&
                                    products.map((item, i) => <ProductCard key={i} {...item} />)}
                            </div>
                            <div className="flex justify-center pt-10">
                                <Paginations
                                    numberOfPage={pagination?.totalPages}
                                    totalProducts={pagination?.totalElements}/>
                            </div>
                        </div>)
            }
        </div>
    )
}

export default Products;