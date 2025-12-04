import { useMemo, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom"
import { useAppSelector } from "../../store/hooks";
import { ProductCard, Filters } from "../index"
import shopAllSmall from '../../assets/images/shop-all-small.png'
import shopAllBig from '../../assets/images/shop-all-big.png'
import filter from '../../assets/images/filter.svg'
import { classes } from "../../utils/tailwindClasses";


const ShopAll = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const { products } = useAppSelector((state) => state.allProducts)
    const [params] = useSearchParams();

    const activeFilters: Record<string, string[]> = {};
    params.forEach((value, key) => {
        if (!activeFilters[key]) activeFilters[key] = [];
        activeFilters[key].push(value);
    });

    const filteredProducts = useMemo(() => {
        let allProducts = [...products];

        for (const key in activeFilters) {
            if (key === 'sort') continue;
            const values = activeFilters[key];
            allProducts = products.filter(p => values.includes((p as any)[key]));
        }

        if (activeFilters.sort?.length) {
            const sortValue = activeFilters.sort[0];
            if (sortValue === 'Rating(H-L)') allProducts.sort((a, b) => a.price - b.price);
            if (sortValue === 'Rating(L-H)') allProducts.sort((a, b) => b.price - a.price);
            if (sortValue === 'Price(H-L)') allProducts.sort((a, b) => a.rating - b.rating);
            if (sortValue === 'Price(L-H)') allProducts.sort((a, b) => b.rating - a.rating);
        }

        return allProducts;
    }, [products, activeFilters]);


    return (
        <section>
            <div className="flex gap-3 text-[12px] px-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12">
                <NavLink to='/' className='text-bg_green'>Home</NavLink>
                <span>/</span>
                <span>Shop All</span>
            </div>
            <img src={shopAllSmall} alt="shop all image" className="xs:hidden w-full max-h-[540px] object-cover" />
            <img src={shopAllBig} alt="shop all image" className="hidden xs:block object-cover" />

            <div className="w-full flex justify-center py-2 mt-9 sm:hidden">
                <button className="flex gap-1 justify-center cursor-pointer" onClick={() => setOpenFilter(!openFilter)}>
                    <img src={filter} alt="filter icon" />
                    <span>Filter</span>
                </button>
            </div>

            <div className="flex justify-center gap-4 px-5 py-12 lg:gap-6 m-auto">
                <div className="w-[33%] max-w-98 hidden sm:block">
                    <Filters setOpenFilter={setOpenFilter} />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full sm:w-[67%] max-w-202 lg:gap-6">
                    {
                        filteredProducts.length === 0
                            ? (<p>No products found</p>)
                            : (
                                filteredProducts.map(p => (
                                    <ProductCard key={p._id} product={p} />
                                ))
                            )
                    }
                </div>
            </div>

            <div className={`${classes.filtersDiv} ${openFilter ? "translate-x-0" : "translate-x-full"}`}>
                <Filters setOpenFilter={setOpenFilter} />
            </div>
        </section>

    )
}

export default ShopAll