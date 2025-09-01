import ProductCard from "./ProductCard";

const Products = () => {
    const isLoading = false;

    const error = false;

    const products = [
        {
            productId: 456,
            productName: "Puma King Ultimate X AOF FG",
            image: "https://placehold.co/600x400",
            description: "A tribute to football artistry and legacy, the Puma King Ultimate X AOF FG is a limited-edition collaboration with Art of Football, blending retro aesthetics with next-gen performance on firm ground.",
            quantity: 10,
            price: 1450.0,
            discount: 10.0,
            specialPrice: 1305.0,
        },
        {
            productId: 654,
            productName: "Adidas F50+ Elite FG",
            image: "https://placehold.co/600x400",
            description: "Built for pure acceleration and razor-sharp control, the adidas F50+ Elite FG revives a speed icon with modern innovation and featherlight precision. Its ultra-thin Fibertouch upper molds seamlessly to your foot, enhanced by Sprintweb 3D texture for close-contact ball control at top speed.",
            quantity: 0,
            price: 2550.0,
            discount: 20.0,
            specialPrice: 2040.0,
        }
    ]
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