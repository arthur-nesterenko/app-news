import React from 'react'
import {RouteProps} from 'react-router-dom'

const HomeScreen = React.lazy(() => import('./home'));
const NewsDetail = React.lazy(() => import('./news-detail'));
const Categories = React.lazy(() => import('./categories'));
const Category = React.lazy(() => import('./category'));
const Search = React.lazy(() => import('./search'));


const routes: RouteProps[] = [{
    component: HomeScreen,
    exact: true,
    path: '/:code'
}, {
    component: NewsDetail,
    exact: true,
    path: '/:code/news/:id'
},
    {
        component: Categories,
        exact: true,
        path: '/:code/categories'
    }, {
        component: Category,
        exact: true,
        path: '/:code/categories/:category'
    }, {
        component: Search,
        exact: true,
        path: '/:code/search'
    }];


export default routes
