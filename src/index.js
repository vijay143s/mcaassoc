import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';

import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import customstore from './redux/customstore';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

import './app/i18n';
import LoadingIndicator from './common/LoadingIndicator';
import { App } from './app/App';

ReactDOM.render(
    <Provider store={customstore} >
        <StrictMode>

            <Suspense fallback={(<LoadingIndicator variant="loader-w" style={{ marginTop: 100, textAlign: "center" }} />)}>
                <LoadingIndicator />
                <HashRouter basename='/' >
                    {
                        //history={createBrowserHistory} 
                    }
                    <App />
                </HashRouter>
            </Suspense>
        </StrictMode>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();