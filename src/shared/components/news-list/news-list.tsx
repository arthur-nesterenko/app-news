import React, {FunctionComponent} from 'react'
import NewsCard from 'shared/components/news-card'
import {INews} from 'services/news'

interface INewsList {
    items: INews[]
}

const NewsList: FunctionComponent<INewsList> = ({items}) => {
    return <div className="flex flex-wrap">
        {items.map((item, index) => <div key={index} className={'w-full sm:w-1/2 md:w-1/3 mb-4 p-2'}>
            <NewsCard key={item.source.id}{...item}/>
        </div>)}
    </div>
}


export default NewsList;
