import React, {FunctionComponent} from 'react'
import {NavLink} from 'react-router-dom'
import {INavItem} from './types'

const NavItem: FunctionComponent<INavItem> = (props) => <NavLink
    activeClassName='text-teal-900'
    className=" text-left sm:text-center  block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" {...props} />

export default NavItem
