import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import Chicago from './Components/Chicago';
import BookingPage from './Components/BookingPage';
import { specialsData } from './data';
import { fetchAPI } from './api';
import ConfirmedBooking from './Components/ConfirmedBooking';

// Modified to return a Promise that resolves to an array
export const initializeTimes = async () => {
  const today = new Date();
  const defaultTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  
  try {
    const times = await fetchAPI(today);
    return times || defaultTimes;
  } catch (error) {
    console.error('Error fetching times:', error);
    return defaultTimes;
  }
};

// Modified reducer to handle synchronous state updates
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times || state;
    case 'SET_TIMES':
      return action.times;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]); // Initialize with default times

  useEffect(() => {
    const loadInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'SET_TIMES', times });
    };
    loadInitialTimes();
  }, []);

  const handleDateChange = async (date) => {
    try {
      const times = await fetchAPI(new Date(date));
      dispatch({ 
        type: 'UPDATE_TIMES', 
        times: times || availableTimes 
      });
    } catch (error) {
      console.error('Error updating times:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <CallToAction />
              <Specials specials={specialsData} />
              <Chicago />
            </>
          } />
          <Route
            path="/booking"
            element={
              <BookingPage 
                availableTimes={availableTimes} 
                onDateChange={handleDateChange}
              />
            }
          />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Specials specials={specialsData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;