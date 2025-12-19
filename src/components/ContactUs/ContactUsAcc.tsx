import { contactUs } from "../../utils/arrays";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { useRef, useState } from "react";


const ContactUsAcc = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="px-5 pb-10 max-w-160 mx-auto mdx:hidden">
            {
                contactUs.map((item, i) => {
                    const isOpen = openIndexes.includes(i);

                    return (
                        <div key={i} className="mt-1">
                            <button
                                onClick={() => toggle(i)}
                                className={`w-full h-15 flex justify-between items-center px-4 border border-[#CBCBCB] border-b-0
                                    ${isOpen ? "bg-[#F0F2EF]" : "bg-[#D1D9CF]"}
                                    ${item.type === "write" ? "bg-primary" : ""}
                                `}
                            >
                                <h3 className="text-[14px] font-semibold">{item.title}</h3>
                                {
                                    isOpen
                                        ? (<PiMinusBold className="text-bg_green text-[14px]" />)
                                        : (<PiPlusBold className="text-[14px]" />)
                                }
                            </button>

                            <div
                                ref={el => { contentRefs.current[i] = el }}
                                style={{ height: isOpen ? contentRefs.current[i]?.scrollHeight : 0 }}
                                className={`overflow-hidden transition-all duration-300 bg-[#F0F2EF] border border-[#CBCBCB]
                                    ${item.type === "write" ? "bg-primary" : ""}`}
                            >
                                <div className="py-4 text-[12px]">{item.content}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default ContactUsAcc