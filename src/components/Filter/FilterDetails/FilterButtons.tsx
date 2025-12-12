import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { clearFilters, openCloseFilter } from "../../../store/slices/FilterSlice/filterSlice";

const FilterButtons = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { selectedOptions } = useAppSelector(state => state.filter);

    // console.log(selectedOptions);
    

    const applyFilters = () => {
        const params = new URLSearchParams();

        selectedOptions.forEach(opt => {
            params.append(opt.key.toLowerCase().replace(' ',''), opt.value.toLowerCase());
        });

        navigate(`?${params.toString()}`);
        dispatch(openCloseFilter(false))
    };

    return (
        <div className="flex justify-center gap-4 text-[14px] mt-10">
            <button
                onClick={() => dispatch(clearFilters())}
                className="w-30 lg:w-[152px] h-10 border border-gray-400 cursor-pointer"
            >
                Clear Filter
            </button>
            <button onClick={applyFilters}
                className="w-30 lg:w-[152px] h-10 bg-bg_green text-primary cursor-pointer"
            >
                Apply Filter
            </button>
        </div>
    )
}

export default FilterButtons