// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {

    it('Should fire a function when the button Lock is clicked when Closed prop is true', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Controls toggleLocked={onClick} closed={true}/>);

        const lockButton = getByText(/lock/i);
        fireEvent.click(lockButton);

        expect(onClick).toHaveBeenCalled();
    });

    it('Should fire a function when the close gate button is clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Controls toggleClosed={onClick}/>);

        const closeButton = getByText(/close gate/i);
        fireEvent.click(closeButton);

        expect(onClick).toHaveBeenCalled();
    });
})