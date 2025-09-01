const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice
}


) => {
    //const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnHnadler = false;
    //const [selectedViewProduct, setSelectedViewProduct] = useState();
    const isAvailable = quantity && Number(quantity) > 0;



    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300" >
            <div onClick={() => { }} className="w-full overflow-hidden aspect-[3/2]">
                <img className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    src={image}
                    alt={productName}>
                </img>
            </div>
            <div className="p-4">
                <h2
                    onClick={() => { }}
                    className="text-lg font-semibold mb-2 cursor-pointer">
                    {productName}
                </h2>

                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">
                        {description}
                    </p>

                </div>

                <div className="flex items-center justify">
                    {specialPrice ? (
                        <div className="flex flex-col">
                            <span className="text-gray-400 line-through">
                                R{Number(price).toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-red-600">
                                R{Number(specialPrice).toFixed(2)}
                            </span>
                        </div>
                    ) :
                        (
                            <div>
                                <span className="text-xl font-bold text-slate-700">
                                    {"  "}
                                    R{Number(price).toFixed(2)}
                                </span>
                            </div>
                        )}

                    <button className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}`}
                    text-white py-2 px-3 rounded-lg items-center transition duration-300 ml-auto
                    >
                        {isAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ProductCard;

