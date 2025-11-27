import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { useEffect, useState } from 'react';
import { productsThunk } from '../../store/slices/ProductsSlice/ProductsThunk';
import type { IProductsType } from "../../types/types";
import { ProductCard, Filter } from "../index"
import shopAllSmall from '../../assets/images/shop-all-small.png'
import shopAllBig from '../../assets/images/shop-all-big.png'
import filter from '../../assets/images/filter.svg'


const ShopAll = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    const { products } = useSelector((state: any) => state.allProducts)

    useEffect(() => {
        dispatch(productsThunk());
    }, [dispatch]);

    return (
        <>
            <section>
                <div className="flex gap-3 text-[12px] px-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12">
                    <NavLink to='/' className='text-bg_green'>Home</NavLink>
                    <span>/</span>
                    <span>Shop All</span>
                </div>

                <img src={shopAllSmall} alt="shop all image" className="xs:hidden w-full max-h-[540px] object-cover"/>
                <img src={shopAllBig} alt="shop all image" className="hidden xs:block object-cover"/>

                <div className="w-full flex justify-center py-2 mt-9">
                    <button className="flex gap-1 justify-center cursor-pointer" onClick={() => setOpenFilter(!openFilter)}>
                        <img src={filter} alt="filter icon" />
                        <span>Filter</span>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 px-5 pt-4 pb-6 max-w-200">
                    {
                        products.map((product: IProductsType, ind: number) => (
                            <ProductCard key={ind} product={product}/>
                        ))
                    }
                </div>
            <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
            </section>
        </>
    )
}

export default ShopAll