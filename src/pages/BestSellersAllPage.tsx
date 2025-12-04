import { ProductCard } from "../components"
import { useAppSelector } from "../store/hooks"


const BestSellersAllPage = () => {
    const { products } = useAppSelector(state => state.allProducts)

    return (
        <section className="grid grid-cols-2 gap-x-4 gap-y-6 px-5 py-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            {
                products.map(product => (
                    <ProductCard product={product}/>
                ))
            }
        </section>
    )
}

export default BestSellersAllPage