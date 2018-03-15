import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter } from 'react-router-dom' 
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'



// used for Redux Dev Tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


/**
 * // import { applyMiddleware } from 'redux'
 *
 * createStore(reducer, composeEnhancers(applyMiddleware(mid1, mid2, mid3)))
 * createStore(reducer, applyMiddleware(mid1, mid2, mid3))
 *
 */
const store = createStore(reducer,
    composeEnhancers()    
)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));






registerServiceWorker();
