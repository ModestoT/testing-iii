// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';


describe('<Display />', () => {
    it('should display as unlocked and open', () => {
        const { getByText } = render(<Display />);

        //looks for the text unlocked if it's not their test will throw an error
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toBeTruthy();

        //looks for the text open if it's not their test will throw an error
        const open = getByText(/open/i);
        expect(open).toBeTruthy();
    });

    it('should display "Closed" if closed prop is true', () => {
        const { getByText } = render(<Display closed={true} />);
        
        //looks for the text closed to be displayed if the prop closed is true
        expect(getByText(/closed/i)).toBeTruthy();
    });

    it('should display "Locked" if locked prop is true', () => {
        const { queryByText } = render(<Display locked={true}/>);

        //looks for the text closed to be displayed if the prop locked is true
        expect(queryByText(/unlocked/i)).toBeFalsy();
    });

    it('should have the class name red-led if it is locked or closed', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        
        //checks to make sure that the div containing the text Closed is using the class red-led
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');
    //checks to make sure that the div containing the text Locked is using the class red-led
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    });

    it('should have the class name green-led if it is unlocked or open', () => {
        const { getByText } = render(<Display />);

        //checks to make sure that the div containing the text Unlocked is using the class green-led
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toHaveClass('green-led');

        //checks to make sure that the div containing the text Open is using the class green-led
        const open = getByText(/open/i);
        expect(open).toHaveClass('green-led');
    })
});