import React, {FunctionComponent} from 'react'

import NavItem from "./nav-item";
import {INavBar} from './types'
import CountryButton from './country-button'

const Navbar: FunctionComponent<INavBar> = ({items, countries}) => {


    return <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                {items.map((item, index) => <NavItem key={index} {...item}/>)}
            </div>
            <div>
                {countries.map((item, index) => <CountryButton key={index} {...item}/>)}
            </div>
        </div>
    </nav>
}

export default Navbar
