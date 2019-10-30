import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TranslationUtils } from './utils/TranslationUtils';

it('renders without crashing', () => {
    const div = document.createElement('div');
    TranslationUtils.initializeTranslation();
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
