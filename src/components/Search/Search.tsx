import { useEffect, useState } from 'react';
import searchIcon from '../../assets/images/search-gray-icon.svg'
import searchIconBig from '../../assets/images/search-icon-big.svg'
import removeIcon from '../../assets/images/close-gray-icon.svg'
import { classes } from '../../utils/tailwindClasses';
import { useAppSelector } from '../../store/hooks';
import type { IProductsType } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import type { ISearchPropsType } from '../propsTypes';


const Search = ({ searchIsOpen, setSearchIsOpen }: ISearchPropsType) => {
    const navigate = useNavigate();
    const { products } = useAppSelector(state => state.allProducts)
    const [inputValue, setInputValue] = useState<string>("");
    const [results, setResults] = useState<IProductsType[]>([])
    const [searchTerm, setSearchTerm] = useState(inputValue);
    const [navigatedToSearch, setNavigatedToSearch] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchTerm(inputValue.trim());
        }, 1000);

        return () => clearTimeout(timeout);
    }, [inputValue]);

    useEffect(() => {
        if (!searchTerm) {
            setResults([]);
            setNavigatedToSearch(false);
            return;
        }

        const searched = products.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(searched);

        if (searched.length > 0 && !navigatedToSearch) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
            setSearchIsOpen(false);
            setNavigatedToSearch(true);
        }
    }, [searchTerm, products, navigate]);


    return (
        <div className={`${classes.searchDiv} ${searchIsOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='flex gap-2 items-center px-4 border-b border-[#ADADAD] xl:gap-2.5'>
                <button>
                    <img src={searchIcon} alt="search icon" className='my-2 block xl:hidden' />
                    <img src={searchIconBig} alt="search icon" className='my-4 hidden xl:block' />
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={classes.searchInput}
                />

                <button onClick={() => setInputValue("")}>
                    <img src={removeIcon} alt="remove" />
                </button>
            </div>
            {
                searchTerm && results.length === 0 && (<p className="text-[14px] text-center text-red-500 mt-2 lg:text-[16px]">No results found</p>)
            }
        </div>
    )
}

export default Search