// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');
  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');
  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('-1');
});

