import React, {Fragment} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useAsync} from "react-use";
import newsApi, {Category} from "services/news";
import NewsList from "../../shared/components/news-list";
import Loader from 'shared/components/loader'

const Screen = () => {
    const {goBack} = useHistory()
    const {code, category} = useParams<{
        category: Category,
        code: string
    }>();

    const state = useAsync(async () => {
        return await newsApi.fetch({
            country: code,
            //@ts-ignore
            category
        });
    }, [code]);


    return <Fragment>
        <h1 onClick={goBack}
            className='text-base text-3xl capitalize my-2 inline-flex items-center cursor-pointer'>
            Top

            <strong className='mx-2'>{category} </strong> news
            from {code === 'us' ? 'United States' : 'Great Britain'}
        </h1>
        {state.loading ? <Loader/> : <NewsList items={state.value || []}/>}
        <div className='flex justify-start items-center py-5'>
            <button onClick={goBack} className='cursor-pointer outline-none focus:outline-none'>
                <span className='text-base'> Back to list</span>
            </button>
        </div>
    </Fragment>
}

export default Screen;
