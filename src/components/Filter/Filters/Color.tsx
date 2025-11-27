import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { classes } from "../../../utils/tailwindClasses";
import { useRef, useState } from "react";

const Color = () => {
    const [openSort, setOpenSort] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");

    const toggleSort = () => {
        if (!contentRef.current) return;

        if (!openSort) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
        setOpenSort(!openSort);
    };


    return (
        <div className={`relative border border-bg_green`}>
            <button
                onClick={toggleSort}
                className={`w-full flex justify-between items-center px-4 h-10 ${openSort ? 'bg-primary' : 'bg-bg_green'}`}
            >
                <h3 className={`font-bold ${openSort ? ' text-bg_green' : 'text-primary'}`}>Color</h3>
                {
                    openSort
                        ? <PiMinusBold className="text-bg_green" />
                        : <PiPlusBold className="text-primary" />
                }
            </button>

            <div ref={contentRef} style={{ height }} className="overflow-hidden transition-all duration-300">
                <ul className="text-[14px] py-4 pl-4">
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Black" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#0C0C0C]"></span>
                        Black
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Red" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#CA2929]"></span>
                        Red
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Green" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#748C70]"></span>
                        Green
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Yellow" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#909225]"></span>
                        Yellow
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="DarkBlue" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#19418E]"></span>
                        Dark Blue
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Purpie" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#D0A5EA]"></span>
                        Purpie
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Pink" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#CA2980]"></span>
                        Pink
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="LightBlue" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#7DC3EB]"></span>
                        Light Blue
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Orange" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full bg-[#CA6D29]"></span>
                        Orange
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="White" className={classes.checkbox} />
                        <span className="w-4 h-4 rounded-full border border-gray-400 bg-[#FFFFFF]"></span>
                        White
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Color