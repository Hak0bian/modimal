import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Filters, ProductCard } from "../components";
import { filterProducts, getFiltersFromParams } from "../utils/filterProducts";
import filterIcon from '../assets/images/filter.svg'
import { openCloseFilter } from "../store/slices/FilterSlice/filterSlice";
import { classes } from "../utils/tailwindClasses";


const SearchResultsPage = () => {
    const dispatch = useAppDispatch();
    const { filterIsOpen } = useAppSelector(state => state.filter)
    const [params] = useSearchParams();
    const query = params.get("q") || "";
    const { products } = useAppSelector(s => s.allProducts);
    const results = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    const activeFilters = getFiltersFromParams(params);
    const filteredProducts = filterProducts(results, activeFilters);

    return (
        <div>
            {
                results.length === 0
                ? (
                    <p>Not found</p>
                ) : (
                    <div>
                        <p className="text-center py-10 font-semibold">{results.length} Items</p>
                        <div className="w-full flex justify-center py-2 sm:hidden">
                            <button className="flex gap-1 justify-center cursor-pointer" onClick={() => dispatch(openCloseFilter(!filterIsOpen))}>
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
                    </div>
                )
            }
        </div>
    );
};

export default SearchResultsPage