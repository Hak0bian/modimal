import { useAppDispatch } from "../../../store/hooks";
import { clearFilters } from "../../../store/slices/FilterSlice/FilterSlice";

const FilterButtons = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-center gap-4 text-[14px] mt-10 mb-30">
            <button
                onClick={() => dispatch(clearFilters())}
                className="w-30 lg:w-[152px] h-10 border border-gray-400 cursor-pointer"
            >
                Clear Filter
            </button>
            <button 
                className="w-30 lg:w-[152px] h-10 bg-bg_green text-primary cursor-pointer"
            >
                Apply Filter
            </button>
        </div>
    )
}

export default FilterButtons