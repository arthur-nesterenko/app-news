import React from 'react'
import {Redirect, useHistory, useLocation, useParams} from 'react-router-dom'

const Screen = () => {
    const {goBack} = useHistory()
    const {state} = useLocation()
    const {code} = useParams()


    if (!state) {
        return <Redirect to={`/${code}`}/>
    }

    return <article className='container mx-auto px-4 mt-5'>
        <header>
            <h1 className='text-base text-2xl my-2'>{state.title}</h1>
            {state.urlToImage &&
            <img className='w-full object-contain' src={state.urlToImage} alt={state.title}/>
            }
        </header>
        <p className='my-3 text-black'>{state.content}</p>
        <footer className='py-4'>
            <button onClick={goBack} className='cursor-pointer outline-none'>
                <span className='text-base'> Back to list</span>
            </button>
        </footer>
    </article>
}

export default Screen;
