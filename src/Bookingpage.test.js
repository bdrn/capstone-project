import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './BookingPage';

describe('BookingPage', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  test('renders booking form heading', () => {
    render(
      <BrowserRouter>
        <BookingPage availableTimes={availableTimes} dispatch={mockDispatch} />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
  });
});
