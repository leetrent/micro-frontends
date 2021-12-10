import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';
///////////////////////////////////////////////
// Mount function to start up this application:
///////////////////////////////////////////////
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate( { pathname: nextPathname }) {
            //console.log("[marketing][bootstrap][mount][onParentNavigate] => (nextPathname):", nextPathname);
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

//////////////////////////////////////////////////////////
// If we are in development mode and running in isolation,
// call the mount function above immediately:
//////////////////////////////////////////////////////////
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// If we are running this application through a container,
// export the mount function;
export { mount };