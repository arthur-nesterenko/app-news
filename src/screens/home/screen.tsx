import React, {Fragment} from 'react'
import NewsList from "shared/components/news-list";
import {useParams} from 'react-router-dom'
import {useAsync} from "react-use";
import newsApi from 'services/news'
import Loader from 'shared/components/loader'


const HomeScreen = () => {
    const {code} = useParams()
    const state = useAsync(async () => {
        return await newsApi.fetch({
            country: code
        });
    }, [code]);

    return <Fragment>
        <h1 className='text-base text-3xl capitalize p-2'>Top news
            from {code === 'us' ? 'United States' : 'Great Britain'}</h1>
        {state.loading ? <Loader/> : <NewsList items={state.value || []}/>}
    </Fragment>
}


export default HomeScreen
