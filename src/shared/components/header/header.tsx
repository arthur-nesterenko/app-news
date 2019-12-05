import React from 'react'
import Navbar, {ICountryButton, INavItem} from "./../navbar";
import {useParams} from 'react-router-dom'


const generateItemsByCode = (code: 'us' | 'gb' = 'us'): INavItem[] => {
    const baseitems: INavItem[] = [{
        children: 'Top News',
        to: '/'
    }, {
        children: 'Categories',
        to: '/categories'
    }, {
        children: 'Search',
        to: '/search'
    }]

    return baseitems.map(item => ({...item, to: `/${code}${item.to}`}))
}

const countries: ICountryButton[] = [
    {
        title: 'GB',
        code: 'gb',

    },
    {
        title: 'US',
        code: 'us'
    }
];

const Header = () => {

    const {code} = useParams<{ code: 'gb' | 'us' }>();

    const items = React.useMemo(() => generateItemsByCode(code as any), [code])
    return <header>
        <Navbar items={items} countries={countries}/>
    </header>
}

export default Header
