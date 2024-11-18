import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import { specialsData } from './data';

// Lazy load components for better performance
const Nav = lazy(() => import('./Components/Nav'));
const Header = lazy(() => import('./Components/Header'));
const CallToAction = lazy(() => import('./Components/CallToAction'));
const Specials = lazy(() => import('./Components/Specials'));
const Chicago = lazy(() => import('./Components/Chicago'));
const BookingPage = lazy(() => import('./Components/BookingPage'));
const Footer = lazy(() => import('./Components/Footer'));
const Homepage = lazy(() => import('./Components/Homepage'));
const Contact = lazy(() => import('./Components/Contact'));


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<Chicago />} />
            <Route path="/menu" element={<Specials specials={specialsData} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;