// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

it('Should change the text of the button close gate when clicked on to open gate', () => {
    const { getByText, queryByText } = render(<Dashboard />);

    const closeButton = getByText(/close gate/i);
    expect(queryByText(/open gate/i)).toBeFalsy();

    fireEvent.click(closeButton);

    expect(closeButton).toHaveTextContent('Open Gate');
          
});
