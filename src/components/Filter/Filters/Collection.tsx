import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { classes } from "../../../utils/tailwindClasses";
import { useRef, useState } from "react";

const Collection = () => {
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
                <h3 className={`font-bold ${openSort ? ' text-bg_green' : 'text-primary'}`}>Collection</h3>
                {
                    openSort
                        ? <PiMinusBold className="text-bg_green" />
                        : <PiPlusBold className="text-primary" />
                }
            </button>

            <div ref={contentRef} style={{ height }} className="overflow-hidden transition-all duration-300">
                <ul className="text-[14px] py-4 pl-4">
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="Stock " className={classes.checkbox} />
                        In Stock 
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="OutStock" className={classes.checkbox} />
                        Out Of Stock
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Collection