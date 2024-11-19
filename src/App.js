import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import Chicago from './Components/Chicago';
import BookingPage from './Components/BookingPage';
import { specialsData } from './data';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.date);
      return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
    default:
      return state;
  }
};

const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

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
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} 
          />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Specials specials={specialsData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;