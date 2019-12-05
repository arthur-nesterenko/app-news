import React from 'react'
import SearchInput from "./components/search-input";
import {useAsyncFn, useUpdateEffect} from "react-use";
import {useParams} from 'react-router-dom'
import newsApi from 'services/news'
import NewsList from "../../shared/components/news-list";
import Loader from 'shared/components/loader'


const Screen = () => {

    const [query, setQuery] = React.useState('');
    const {code} = useParams()

    // @ts-ignore
    const [state, fetch] = useAsyncFn(async (q) => {
        return await newsApi.fetch({
            country: code,
            q
        })
    }, [code]);

    useUpdateEffect(() => {
        fetch(query)
    },[code]
)

    const onChange = React.useCallback((q: any) => {
        setQuery(q)
        fetch(q)
    }, [fetch])


    return <div className='py-5'>
        <h1 className='text-base text-3xl capitalize p-2'>Search Top news by
            from {code === 'us' ? 'United States' : 'Great Britain'} term:</h1>
        <div className='sm:w-full md:w-1/2  mx-auto px-4'>
            <SearchInput value={query} onChange={onChange}/>
        </div>
        {state.loading ? <Loader/>
            : (Array.isArray(state.value) && state.value.length > 0) ?
                <NewsList items={state.value}/> : <div>
                    <h2 className='text-base text-3xl  p-5 text-center'>No results by term</h2>
                </div>}
    </div>
}

export default Screen
