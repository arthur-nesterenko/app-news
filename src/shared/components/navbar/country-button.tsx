import React, {FunctionComponent} from 'react'
import cx from 'classnames'
import {ICountryButton} from './types'
import {useHistory, useLocation, useRouteMatch} from 'react-router-dom'


const CountryButton: FunctionComponent<ICountryButton> = ({code, title,}: any) => {
    const isMatch = useRouteMatch('/:code/news/:id')
    const {replace} = useHistory()
    const {pathname} = useLocation()

    const path = pathname.replace(/(?:us|gb)/, code)

    return <button disabled={isMatch !== null}
                   onClick={() => replace(path)}
                   className={cx('text-white font-bold py-2 px-4 outline-none  focus:outline-none',
                       {"bg-teal-700  cursor-not-allowed": isMatch === null && pathname.includes(code)},
                       [isMatch !== null ? 'bg-gray-500 bg-gray-600 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'],
                   )}>
        {title}
    </button>
}


export default CountryButton
