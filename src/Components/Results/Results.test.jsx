'import @testing-library/react';
import { render, screen } from '@testing-library/react';

import Results from '.';

describe('renders Results', () => {
  test('renders Results as expected', () => {
    render(<Results />);
    const resultsElement = screen.getByText;
    expect(resultsElement).toBeTruthy();
  }
  );
}
);