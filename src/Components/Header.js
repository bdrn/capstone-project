import { Link } from 'react-router-dom';
import logo from '../assets/small-logo.png';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
        <h1>Little Lemon</h1>
      </Link>
    </header>
  );
}

export default Header;
