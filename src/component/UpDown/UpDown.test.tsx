import { render, screen } from '@testing-library/react';
import * as React from 'react';
import UpDown from './UpDown';

test('renders UpDown component', () => {
  render(<UpDown upCount={12} />);
  expect(screen.getByText('12')).toBeInTheDocument();
});
