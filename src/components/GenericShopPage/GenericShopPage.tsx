import { useEffect } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { ProductCard, Filters } from "../index";
import { classes } from "../../utils/tailwindClasses";
import { filterProducts, getFiltersFromParams } from "../../utils/filterProducts";
import type { IGenericShopPropsType } from "../propsTypes";
import filterIcon from '../../assets/images/filter.svg'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearFilters, openCloseFilter } from "../../store/slices/FilterSlice/filterSlice";


const GenericShopPage = ({ products, pageTitle, imageSmall, imageBig }: IGenericShopPropsType) => {
    const {filterIsOpen} = useAppSelector(state => state.filter)
    const [params] = useSearchParams();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const activeFilters = getFiltersFromParams(params);
    const filteredProducts = filterProducts(products, activeFilters);

    useEffect(() => {
        dispatch(clearFilters());
    }, [location.pathname, dispatch]);

    return (
        <section>
            <div className="flex gap-3 text-[12px] px-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12">
                <NavLink to='/' className='text-bg_green'>Home</NavLink>
                <span>/</span>
                <span>{pageTitle}</span>
            </div>

            <img src={imageSmall} alt={pageTitle} className="xs:hidden w-full max-h-[540px] object-contain" />
            <div className="flex justify-center max-h-150">
                <img src={imageBig} alt={pageTitle} className="hidden xs:block object-cover " />
            </div>

            <div className="w-full flex justify-center py-2 mt-9 sm:hidden">
                <button className="flex gap-1 justify-center cursor-pointer" onClick={() => dispatch(openCloseFilter(true))}>
                    <img src={filterIcon} alt="filter icon" />
                    <span>Filters</span>
                </button>
            </div>

            <div className="flex justify-center gap-4 px-5 py-12 lg:gap-6 m-auto">
                <div className="w-[33%] max-w-98 hidden sm:block">
                    <Filters />
                </div>

                <div className={`grid gap-4 w-full max-w-202 sm:w-[67%] lg:gap-6 ${filteredProducts.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {filteredProducts.length === 0 ? (
                        <p className="md:text-[20px] font-semibold text-center col-span-2 mt-15">
                            No products found
                        </p>
                    ) : (
                        filteredProducts.map(p =>
                            <div key={p._id} className="max-w-108 mx-auto">
                                 <ProductCard product={p} />
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className={`${classes.filtersDiv} ${filterIsOpen ? "translate-x-0" : "translate-x-full"}`}>
                <Filters />
            </div>
        </section>
    );
};

export default GenericShopPage;