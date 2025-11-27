import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { classes } from "../../../utils/tailwindClasses";
import { useRef, useState } from "react";

const Size = () => {
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
                <h3 className={`font-bold ${openSort ? ' text-bg_green' : 'text-primary'}`}>Size</h3>
                {
                    openSort
                        ? <PiMinusBold className="text-bg_green" />
                        : <PiPlusBold className="text-primary" />
                }
            </button>

            <div ref={contentRef} style={{ height }} className="overflow-hidden transition-all duration-300">
                <ul className="text-[14px] py-4 pl-4">
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="XS" className={classes.checkbox} />
                        XS / US (0-4)
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="S" className={classes.checkbox} />
                        S / US (4-6)
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="M" className={classes.checkbox} />
                        M / US (6-10)
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="L" className={classes.checkbox} />
                        L / US (10-14)
                    </li>
                    <li className="flex items-center gap-1 leading-loose mb-1">
                        <input type="checkbox" name="XL" className={classes.checkbox} />
                        XL / US (12-16)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Size