import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import common_de from './translations/de.json';
import common_en from './translations/en.json';
import common_pl from './translations/pl.json';

const resources = {
    de: {
        translation: common_de,
    },
    en: {
        translation: common_en,
    },
    pl: {
        translation: common_pl,
    },
};

i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources,
});

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
