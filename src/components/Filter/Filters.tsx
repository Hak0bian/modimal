import close from "../../assets/images/close-icon.svg";
import FilterBy from "./FilterDetails/FilterBy";
import SelectedOptions from "./FilterDetails/SelectedOptions";
import { useAppDispatch } from "../../store/hooks";
import { openCloseFilter } from "../../store/slices/FilterSlice/filterSlice";
import { filters } from "../../utils/arrays";
import FilterButtons from "./FilterDetails/FilterButtons";


const Filters = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="mb-40">
            <div className="flex justify-between items-center pr-4 pb-4">
                <h2 className="text-[24px] font-bold">Filters</h2>
                <button onClick={() => dispatch(openCloseFilter(false))} className="sm:hidden">
                    <img src={close} alt="close icon" />
                </button>
            </div>

            <SelectedOptions />
            <div className="flex flex-col gap-4 mt-4">
                <FilterBy name='SortBy' filters={filters.sort} />
                <FilterBy name='Size' filters={filters.size} />
                <FilterBy name='Color' filters={filters.colors}/>
                <FilterBy name='Type' filters={filters.type} />
                <FilterBy name='Brand' filters={filters.brand} />
                <FilterBy name='Category' filters={filters.category} />
                <FilterButtons />
            </div>
        </div>
    )
}

export default Filters;