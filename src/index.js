import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
    //  wrapper component needed for HMR

import App from './components/App';

const render = (Component) =>
    {
        ReactDOM.render(
                            (<AppContainer>
                                <Component />
                            </AppContainer>),
                            
                            document.getElementById('main') // renamed root id to main
                       );
    };
    
render(App);

if (module.hot)
{
    module.hot.accept('./components/App', () =>
        {
            render(App);
        });
}