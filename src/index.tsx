import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { TranslationUtils } from './utils/TranslationUtils';

TranslationUtils.initializeTranslation();
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
