import type { IFilterPropsType } from "../propsTypes"
import close from "../../assets/images/close-icon.svg"
import { SortBy, Size, Color, Collection, Fabric } from './index'

const Filter = ({ openFilter, setOpenFilter }: IFilterPropsType) => {
    return (
        <section className={`fixed top-17 right-0 w-screen h-screen overflow-y-auto px-5 bg-primary pt-6 z-5 md:hidden 
             duration-300 ease-in-out ${openFilter ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex justify-between items-center pr-4">
                <h2 className="text-[24px] font-bold">Filters</h2>
                <button onClick={() => setOpenFilter(false)}>
                    <img src={close} alt="close icon" />
                </button>
            </div>

            <div className="flex flex-col gap-4 pt-8">
                <SortBy />
                <Size />
                <Color />
                <Collection />
                <Fabric />
                <div className="flex gap-4 text-[14px] my-20">
                    <button className="w-[152px] h-10 border border-gray-400 cursor-pointer">Clear Filter</button>
                    <button className="w-[152px] h-10 bg-bg_green text-primary cursor-pointer">Apply Filter</button>
                </div>
            </div>
        </section>
    )
}

export default Filter
