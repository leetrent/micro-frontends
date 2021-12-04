import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const genereateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider genereateClassName={genereateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};