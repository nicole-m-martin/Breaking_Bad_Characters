import React from 'react';
import { render, screen } from '@testing-library/react';
import BreakingBadContainer from './BreakingBadContainer';

describe('Breaking Bad Container', () => {
  it('renders a list of Breaking Bad characters to the page', async () => {
    render(<BreakingBadContainer />);

    screen.getByText('Loading....');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
