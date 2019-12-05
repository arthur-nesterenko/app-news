import {NavLinkProps} from "react-router-dom";


export interface INavItem extends NavLinkProps {
}

export interface ICountryButton {
    title: string;
    code: string
}

export interface INavBar {
    items: INavItem[],
    countries: ICountryButton[]
}
