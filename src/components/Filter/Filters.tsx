import close from "../../assets/images/close-icon.svg";
import FilterBy from "./FilterDetails/FilterBy";
// import FilterByColor from "./FilterDetails/FilterByColor";
import SelectedOptions from "./FilterDetails/SelectedOptions";
import { filters } from "../../utils/arrays";
import FilterButtons from "./FilterDetails/FilterButtons";
import { useAppSelector } from "../../store/hooks";


const Filters = ({ setOpenFilter } : {setOpenFilter: (stete: boolean) => void}) => {
    const { selectedOptions } = useAppSelector(state => state.filter);

    return (
        <div className="mb-40">
            <div className="flex justify-between items-center pr-4 pb-4">
                <h2 className="text-[24px] font-bold">Filters</h2>
                <button onClick={() => setOpenFilter(false)} className="sm:hidden">
                    <img src={close} alt="close icon" />
                </button>
            </div>

            <SelectedOptions />
            <div className="flex flex-col gap-4 mt-4">
                <FilterBy name='Sort By' filters={filters.sort} />
                <FilterBy name='Size' filters={filters.size} />
                <FilterBy name='Color' filters={filters.colors}/>
                <FilterBy name='Type' filters={filters.type} />
                <FilterBy name='Brand' filters={filters.brand} />
                <FilterBy name='Category' filters={filters.category} />
                {
                    selectedOptions.length > 0 && <FilterButtons/>
                }
            </div>
        </div>
    )
}

export default Filters;