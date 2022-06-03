import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import UpDown from './UpDown';

test('renders UpDown component', () => {
  render(<UpDown upCount={12} />);
  expect(screen.getByText('12')).toBeInTheDocument();
});

it('should increase upVote count when + symbol is clicked', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('upvote'));
  expect(screen.getByText('13')).toBeInTheDocument();
});

it('should reset the count when + symbol is clicked twice', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('upvote'));
  fireEvent.click(screen.getByAltText('upvote'));
  expect(screen.getByText('12')).toBeInTheDocument();
});

it('should decrease upVote count when - symbol is clicked', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('downvote'));
  expect(screen.getByText('11')).toBeInTheDocument();
});

it('should reset the count when - symbol is clicked twice', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('downvote'));
  fireEvent.click(screen.getByAltText('downvote'));
  expect(screen.getByText('12')).toBeInTheDocument();
});

it('should decrease count by 2 when + is already active and - is clicked', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('upvote'));
  // count=13
  fireEvent.click(screen.getByAltText('downvote'));
  expect(screen.getByText('11')).toBeInTheDocument();
});

it('should increaese count by 2 when - is already active and + is clicked', () => {
  render(<UpDown upCount={12} />);
  fireEvent.click(screen.getByAltText('downvote'));
  // count=11
  fireEvent.click(screen.getByAltText('upvote'));
  expect(screen.getByText('13')).toBeInTheDocument();
});
