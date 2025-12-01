import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { classes } from "../../../utils/tailwindClasses";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleOption } from "../../../store/slices/FilterSlice/FilterSlice";
import { colors } from "../../../utils/arrays";


const FilterByColor = () => {
    const dispatch = useAppDispatch();
    const { selectedOptions } = useAppSelector(state => state.filter);
    const [openOptions, setOpenOptions] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleSort = () => {
        if (!contentRef.current) return;
        setHeight(openOptions ? "0px" : `${contentRef.current.scrollHeight}px`);
        setOpenOptions(!openOptions);
    };
    
    return (
        <div className={`border border-bg_green`}>
            <button
                onClick={toggleSort}
                className={`w-full flex justify-between items-center px-4 h-10 ${openOptions ? 'bg-primary' : 'bg-bg_green'}`}
            >
                <h3 className={`font-bold ${openOptions ? ' text-bg_green' : 'text-primary'}`}>Color</h3>
                {
                    openOptions ? <PiMinusBold className="text-bg_green" /> : <PiPlusBold className="text-primary" />
                }
            </button>

            <div ref={contentRef} style={{ height }} className="overflow-hidden transition-all duration-300">
                <ul className="text-[14px] py-4 pl-4">
                    {colors.map(({ option, color, border }, ind) => (
                        <li key={ind} className="flex items-center gap-1 leading-loose mb-1">
                            <input
                                type="checkbox"
                                name={option}
                                className={classes.checkbox}
                                checked={selectedOptions.includes(option)}
                                onChange={() => dispatch(toggleOption(option))}
                            />
                            <span
                                className={`w-4 h-4 rounded-full ${border ? "border border-gray-400" : ""}`}
                                style={{ backgroundColor: color }}
                            ></span>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FilterByColor