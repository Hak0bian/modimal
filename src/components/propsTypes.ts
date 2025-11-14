export interface ICardInfoType {
    title: string;
    about: string;
    price: string;
    smallImg: string, 
    bigImg: string,
    color1: string;
    color2: string;
    color3: string;
}

export interface ICardInfoPropsType {
    cardInfo: ICardInfoType;
}

export interface IAccordionPropsType {
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}