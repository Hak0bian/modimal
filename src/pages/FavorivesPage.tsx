import { ProductCard } from "../components";
import { useAppSelector } from "../store/hooks"

const FavorivesPage = () => {
    const { products } = useAppSelector((state) => state.allProducts)
    const { items } = useAppSelector(state => state.favorites);
    const favoriteProducts = products.filter(p => items.includes(p._id));

    return (
        <>
            {
                favoriteProducts.length > 0
                    ? (
                        <div className="lg:pt-[70px]">
                            <div className="text-center">
                                <h3 className="text-[20px] font-bold py-4">My Wish List</h3>
                                <p className="text-[14px] lg:text-[16px]">{`${favoriteProducts?.length} Item`}</p>
                            </div>

                            <div className="py-6 px-5 grid gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 xl:py-14">
                                {favoriteProducts.map(product => (
                                    <ProductCard key={product._id} product={product} />
                                ))} 
                            </div>
                        </div>
                    )
                    : (
                        <div className="text-center h-screen pt-10">
                            <h3 className="text-[20px] font-bold py-4">My Wish List</h3>
                            <p className="text-[14px] lg:text-[16px]">{`${favoriteProducts?.length} Item`}</p>
                        </div>
                    )
            }
        </>
    )
}

export default FavorivesPage