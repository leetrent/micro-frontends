import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

///////////////////////////////////////////////
// Mount function to start up this application:
///////////////////////////////////////////////
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

//////////////////////////////////////////////////////////
// If we are in development mode and running in isolation,
// call the mount function above immediately:
//////////////////////////////////////////////////////////
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}


// If we are running this application through a container,
// export the mount function;
export { mount };