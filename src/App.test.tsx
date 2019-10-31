import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TranslationUtils } from './utils/TranslationsUtils'


it('renders without crashing', () => {
    TranslationUtils.initializeTranslation();
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
