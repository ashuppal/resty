import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('renders Footer', () => {
  test('renders Footer as expected', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/2023/i);
    expect(footerElement).toBeTruthy();
  });
}
);
