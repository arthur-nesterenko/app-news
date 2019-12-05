import React, {FunctionComponent} from "react";


interface ISearchInput {
    onChange: (value: string) => void;
    onEnter?: (value: string) => void;
    value: string
}

const SearchInput: FunctionComponent<ISearchInput> = ({onChange, value, onEnter}) => {

    const onSubmit = React.useCallback((e) => {
        e.preventDefault();
        onEnter && onEnter(value)
    }, [onEnter, value])

    const handleChange = React.useCallback((e) => onChange(e.currentTarget.value), [onChange])

    return <form onSubmit={onSubmit} className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
            value={value}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" placeholder="Search by term" aria-label="Search" onChange={handleChange}/>
        <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none"
            type="submit">
            Search
        </button>

    </form>
}


export default SearchInput;
