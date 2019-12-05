import React, {Suspense} from 'react';
import ErrorBoundary from "./shared/components/error-boundary";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import routes from './screens'
import Header from './shared/components/header'
import Loader from 'shared/components/loader'


const App: React.FC = () => {
    return (
        <div className='container mx-auto mt-20 px-5'>
            <ErrorBoundary>
                <Router basename={process.env.PUBLIC_URL}>
                    <Header/>
                    <main className='bg-gray-200 p-2'>
                        <Suspense fallback={<Loader/>}>
                            <Switch>
                                {routes.map((route, index) => <Route key={index}{...route}/>)}
                                <Redirect to='/us'/>
                            </Switch>
                        </Suspense>
                    </main>
                </Router>
            </ErrorBoundary>
        </div>
    );
}

export default App;
