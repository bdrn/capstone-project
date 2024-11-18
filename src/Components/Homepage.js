import { useNavigate } from 'react-router-dom';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Chicago from './Chicago';

function Homepage() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <Chicago />
    </main>
  );
}

export default Homepage;
