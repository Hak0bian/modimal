import { useState } from 'react';
import searchIcon from '../../assets/images/search-gray-icon.svg'
import searchIconBig from '../../assets/images/search-icon-big.svg'
import removeIcon from '../../assets/images/close-gray-icon.svg'
import { classes } from '../../utils/tailwindClasses';

const Search = ({searchIsOpen} : {searchIsOpen: boolean}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className={`${classes.searchDiv} ${searchIsOpen ? "translate-y-0" : "-translate-y-full"}`}>
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
                    className={classes.searchInput}
                />

                <button onClick={() => setInputValue("")}>
                    <img src={removeIcon} alt="remove" />
                </button>
            </div>
        </div>
    )
}

export default Search