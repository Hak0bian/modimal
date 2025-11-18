import { useState } from 'react';
import searchIcon from '../../assets/images/search-gray-icon.svg'
import searchIconBig from '../../assets/images/search-icon-big.svg'
import removeIcon from '../../assets/images/close-gray-icon.svg'

const Search = ({searchIsOpen} : {searchIsOpen: boolean}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className={`fixed w-full max-w-[1440px] bg-primary px-6 py-5 z-9
            transform transition-transform duration-300 ease-in-out ${searchIsOpen ? "translate-y-0" : "-translate-y-full"}`}
        >

            <div className='flex gap-2 items-center px-4 border-b border-[#ADADAD] xl:gap-2.5'>
                <button>
                    <img src={searchIcon} alt="search icon" className='my-2 block xl:hidden'/>
                    <img src={searchIconBig} alt="search icon" className='my-4 hidden xl:block'/>
                </button>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={inputValue}
                    onChange={(e) => handleSearch(e)}
                    className='w-full outline-0 text-[14px] md:text-[16px] xl:text-[18px]
                        placeholder:text-[#ADADAD] placeholder:text-[12px] md:placeholder:text-[18px] xl:placeholder:text-[20px]'
                />

                <button onClick={() => setInputValue("")}>
                    <img src={removeIcon} alt="remove" />
                </button>
            </div>
        </div>
    )
}

export default Search