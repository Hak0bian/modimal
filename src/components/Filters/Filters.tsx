import close from "../../assets/images/close-icon.svg";
import FilterBy from "./FilterDetails/FilterBy";
import FilterByColor from "./FilterDetails/FilterByColor";
import SelectedOptions from "./FilterDetails/SelectedOptions";
import { filters } from "../../utils/arrays";
import FilterButtons from "./FilterDetails/FilterButtons";
import { useAppSelector } from "../../store/hooks";


const Filters = ({ setOpenFilter } : {setOpenFilter: (stete: boolean) => void}) => {
    const { selectedOptions } = useAppSelector(state => state.filter);

    return (
        <div>
            <div className="flex justify-between items-center pr-4 pb-4">
                <h2 className="text-[24px] font-bold">Filters</h2>
                <button onClick={() => setOpenFilter(false)} className="sm:hidden">
                    <img src={close} alt="close icon" />
                </button>
            </div>

            <SelectedOptions />
            <div className="flex flex-col gap-4 pt-4">
                <FilterBy name='Sort By' filters={filters.sort} />
                <FilterBy name='Size' filters={filters.size} />
                <FilterByColor />
                <FilterBy name='Collection' filters={filters.collection} />
                <FilterBy name='Fabric' filters={filters.fabric} />
                {
                    selectedOptions.length > 0 && <FilterButtons/>
                }
            </div>
        </div>
    )
}

export default Filters;