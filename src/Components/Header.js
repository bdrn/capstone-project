import logo from '../assets/small-logo.png';

function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <h1>Little Lemon</h1>
        </header>
    );
}

export default Header;