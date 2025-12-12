import { NavLink } from "react-router-dom"
import type { IProductsType } from "../../types/types"
import ProductAccordions from "./ProductAccordions";
import YouMayAlsoLike from "./YouMayAlsoLike";
import ProductMainInfo from "./ProductMainInfo";


const ProductDetails = ({ product }: { product: IProductsType }) => {
    return (
        <div>
            <div className="flex gap-3 text-[12px] pl-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12 xl:pl-[108px]">
                <NavLink to='/' className='text-bg_green'>Home</NavLink>
                <span>/</span>
                <span>{product.title}</span>
            </div>
            <ProductMainInfo product={product} />
            <div className="max-w-[1224px] py-8 px-5 xs:px-10 sm:px-5 flex flex-col justify-center xl:mx-[100px] xl:px-2">
                <ProductAccordions product={product} />
                <YouMayAlsoLike id={product._id} type={product.type} />
            </div>
        </div>
    )
}

export default ProductDetails;