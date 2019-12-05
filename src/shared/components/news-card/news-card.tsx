import React, {FunctionComponent} from 'react'
import {INews} from 'services/news'
import {Link, useParams} from 'react-router-dom'


const NewsCard: FunctionComponent<INews> = ({title, description, urlToImage, source, content}) => {
    const {code} = useParams()
    return <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full flex flex-col justify-between">
        <img className="w-full h-64 object-cover" height={200}
             src={urlToImage || 'http://www.geographicexperiences.com/wp-content/uploads/revslider/home5/placeholder-1200x500.png'}
             alt={title}/>
        <div className="px-6 py-4">
            <div className="font-bold mb-2 h-32 sm:text-sm md:text-base overflow-y-hidden">{title}</div>
            <p className="text-gray-700 text-base overflow-hidden h-32">
                {description}
            </p>
        </div>
        <div className="px-6 py-4 flex flex-row-reverse">
            <Link to={{
                pathname: `/${code}/news/${source.id}`,
                state: {
                    title,
                    urlToImage,
                    content
                }
            }
            } className="cursor-pointer">
            <span
                className="block bg-gray-200 rounded-full px-8 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-500">More</span>
            </Link>
        </div>
    </div>
}


export default NewsCard
