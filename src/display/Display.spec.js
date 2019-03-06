// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';


describe('<Display />', () => {
    it('should display as unlocked and open', () => {
        const { getByText } = render(<Display />);

        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toBeTruthy();

        const open = getByText(/open/i);
        expect(open).toBeTruthy();
    });

    it('should display "Closed" if closed prop is true', () => {
        const { getByText } = render(<Display closed={true} />);

        expect(getByText(/closed/i)).toBeTruthy();
    });

    it('should display "Locked" if locked prop is true', () => {
        const { queryByText } = render(<Display locked={true}/>);

        expect(queryByText(/unlocked/i)).toBeFalsy();
    });

    it('should have the class name red-led if it is locked or closed', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');

        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    });
});