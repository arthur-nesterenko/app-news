import React from 'react'
import {useParams} from "react-router";
import {useAsync} from "react-use";
import newsApi from "services/news/api";
import Slider from "shared/components/slider";
import Loader from "shared/components/loader";

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
const PAGE_SIZE = 5;
const getCategories = async (code: any) => {
    const promises = categories.map((category: any) => newsApi.fetch({category, country: code, pageSize: PAGE_SIZE}))
    return Promise.all(promises)
}

const Screen = () => {

    const {code} = useParams()
    const state = useAsync(async () => {
        return await getCategories(code);
    }, [code]);

    return <div className='mb-5 sm:px-1 md:px-12'>
        <h1 className='sm:text-center md:text-left text-2xl'>Top 5 news by categories from <span
            className='uppercase'>{code}</span></h1>
        <div className='border-1 rounded'>
            {state.loading ? <Loader/> : state.value && state.value.map((items, index) => <Slider key={index}
                                                                                                  items={items}
                                                                                                  category={categories[index]}/>)}
        </div>
    </div>
}

export default Screen;
