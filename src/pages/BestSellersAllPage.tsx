import { NavLink } from "react-router-dom"
import { ProductCard } from "../components"
import { useAppSelector } from "../store/hooks"


const BestSellersAllPage = () => {
    const { products } = useAppSelector(state => state.allProducts)

    return (
        <>
            <div className="flex gap-3 text-[12px] px-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12">
                <NavLink to='/' className='text-bg_green'>Home</NavLink>
                <span>/</span>
                <span>Best Sellers</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-5 pb-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
                {
                    products.map(product => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </>
    )
}

export default BestSellersAllPage