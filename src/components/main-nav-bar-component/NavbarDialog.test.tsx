import { render, wait } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils'
import App from '../../App';
import { TranslationUtils } from '../../utils/TranslationUtils';
import { NavbarDialog } from './NavbarDialog';

beforeEach((): void => {
    TranslationUtils.initializeTranslation()
})

it('should renders without crashing', (): void => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarDialog/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('should open navbar dialog when icon button clicked', async (): Promise<void> => {

    // given
    const { getByTestId, getAllByRole } = render(
        <App/>,
    )
    const dottedBtn = getByTestId('dottedBtn');
    expect(getAllByRole('button').length).toBe(1);

    // when
    act(() => {
        Simulate.click(dottedBtn);
    });

    // then
    await wait(() => {
        const drawer = getByTestId('drawer');
        const buttons = getAllByRole('button');
        expect(drawer).toBeDefined();
        expect(buttons.length).toBe(4);
    })
})

it('should close dialog after clicking anywhere when navbar open', async (): Promise<void> => {

    // given
    const { getByTestId, getAllByRole, queryByTestId } = render(
        <App/>,
    )
    const dottedBtn = getByTestId('dottedBtn');

    act(() => {
        Simulate.click(dottedBtn);
    });

    await wait(() => {
        expect(getByTestId('drawer')).toBeDefined();
    })

    // when
    const randomDrawerBtn = getAllByRole('button')[0];
    act(() => {
        Simulate.click(randomDrawerBtn);
    });

    // then
    await wait(() => {
        expect(queryByTestId('drawer')).toBeNull();
    })
})
