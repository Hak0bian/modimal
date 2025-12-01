import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { toggleOption } from "../../../store/slices/FilterSlice/FilterSlice";
import remove from "../../../assets/images/close-icon.svg"

const SelectedOptions = () => {
    const dispatch = useAppDispatch();
    const { selectedOptions } = useAppSelector(state => state.filter);

    return (
        <div className="flex flex-wrap gap-2">
            {selectedOptions.map((option, ind) => (
                <div key={ind} className="w-[156px] h-10 leading-4 bg-[#D1D9CF] text-[14px] text-center flex justify-between items-center gap-2 px-4 xs:w-[192px]">
                    <span className="w-full">{option}</span>
                    <button onClick={() => dispatch(toggleOption(option))} className="min-w-[14px] cursor-pointer">
                        <img src={remove} alt="remove item" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SelectedOptions;