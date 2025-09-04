import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../store/index.js";

const Products = () => {
    const isLoading = false;

    const error = false;

    const {products} = useSelector(
        (state) => state.products
    )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {
                isLoading ?
                    (<p>Is Loading</p>) :
                    error ?
                        (<div>Error Message</div>) :
                        (<div className="min-h-[700px]">
                            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap">
                                {products &&
                                    products.map((item, i) => <ProductCard key={i} {...item} />)}
                            </div>
                        </div>)
            }
        </div>
    )
}

export default Products;