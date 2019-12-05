import React, {FunctionComponent} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactSlider from "react-slick";
import NewsCard from "../news-card";
import {INews} from 'services/news'
import {MdExpandLess, MdExpandMore} from 'react-icons/md'
import {Collapse} from 'react-collapse'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Arrow = (props: any) => {
    return (
        <div {...props} style={{backgroundColor: '#37b2ab', border: '1px solid #fff', borderRadius: '100%'}}/>
    );
}


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    draggable: false,
    slidesToScroll: 1,
    centerPadding: '100px',
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>,
    // centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

interface ISlider {
    items: INews[],
    category: string

}


const Slider: FunctionComponent<ISlider> = ({items, category}) => {
    const {code} = useParams()
    const [isOpened, setOpened] = React.useState(true)
    const onToggle = React.useCallback(() => setOpened(p => !p), [setOpened])

    return <section>
        <header className='inline-flex items-center'>
            <Link className='cursor-pointer hover:text-teal-300' to={`/${code}/categories/${category}`}>
                <h1 className='text-2xl capitalize my-5 inline-flex items-center'>{category} </h1>
            </Link>
            <button onClick={onToggle}
                    className='ml-2 hover:bg-teal-400 text-base font-bold py-4 px-4 rounded-full focus:outline-none text-lg'>
                {isOpened ? <MdExpandLess size={24}/> : <MdExpandMore size={24}/>}
            </button>
        </header>
        <Collapse isOpened={isOpened}>
            <ReactSlider {...settings}>
                {items.map((item, index) => <div key={index} className='h-full p-2'>
                    <Link to={{
                        pathname: `/${code}/news/${item.source.id}`,
                        state: item
                    }
                    } className="cursor-pointer">
                        <NewsCard {...item}/>
                    </Link>
                </div>)}
            </ReactSlider>
        </Collapse>
    </section>
}

export default Slider;
