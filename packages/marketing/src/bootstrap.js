import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
///////////////////////////////////////////////
// Mount function to start up this application:
///////////////////////////////////////////////
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

//////////////////////////////////////////////////////////
// If we are in development mode and running in isolation,
// call the mount function above immediately:
//////////////////////////////////////////////////////////
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// If we are running this application through a container,
// export the mount function;
export { mount };