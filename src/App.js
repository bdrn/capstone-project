import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header'
import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import Chicago from './Components/Chicago';
import BookingPage from './Components/BookingPage';
import { specialsData } from './data';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <CallToAction />
      <Specials specials={specialsData} />
      <Chicago />
      <BookingPage />
    </div>
  );
}

export default App;