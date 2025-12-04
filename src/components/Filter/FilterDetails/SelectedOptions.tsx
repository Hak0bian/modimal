import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { toggleOption } from "../../../store/slices/FilterSlice/filterSlice";
import { classes } from "../../../utils/tailwindClasses";
import remove from "../../../assets/images/close-icon.svg"

const SelectedOptions = () => {
    const dispatch = useAppDispatch();
    const { selectedOptions } = useAppSelector(state => state.filter);
    

    return (
        <div className="flex flex-wrap gap-2">
            {selectedOptions.map((option, ind) => (
                <div key={ind} className={classes.optionDiv}>
                    <span className="w-full">{option.value}</span>
                    <button onClick={() => dispatch(toggleOption(option))} className="min-w-3.5 cursor-pointer">
                        <img src={remove} alt="remove item" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SelectedOptions;