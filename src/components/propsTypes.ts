import type { IProductsType } from "../types/types";

export interface INavContentPropsType {
    toggleMenu: (menu: string) => void;
    searchIsOpen: boolean;
    setSearchIsOpen: (state: boolean) => void;
    burgerIsOpen: boolean;
    setBurgerIsOpen: (state: boolean) => void;
    bagIsOpen: boolean
    setBagIsOpen: (state: boolean) => void;
}

export interface ICardInfoType {
    title: string;
    about: string;
    price: string;
    smallImg: string,
    bigImg: string,
    color1: string;
    color2: string;
    color3: string;
    link: string
}

export interface ICardInfoPropsType {
    cardInfo: ICardInfoType;
}

export interface IAccordionPropsType {
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export interface IModalsPropsType {
    open: boolean,
    setOpenModal: (state: boolean) => void
}

export interface ISearchPropsType {
    searchIsOpen: boolean,
    setSearchIsOpen: (state: boolean) => void
}

export interface IFilterByPropsType {
    name: string;
    filters: {
        label: string;
        value: string;
        color?: string;
        border?: boolean
    }[];
}

export interface IGenericShopPropsType {
    products: IProductsType[];
    pageTitle: string;
    imageSmall: string;
    imageBig: string;
}