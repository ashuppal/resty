import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Header from '.';


describe('renders Header', () => {
  test('renders h1 as expected', () => {
    render(<Header  />);
    const headerElement = screen.getByText(/RESTy/i);
    expect(headerElement).toBeTruthy();
  }
  );
});
