import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Book Table</Link>
      </nav>
      <p>&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;