import { Link } from 'react-router-dom';

function Chicago() {
  return (
    <section className="chicago">
      <h2>About Little Lemon Chicago</h2>
      <p>Little Lemon has been serving delicious meals in Chicago since 1995. We're committed to bringing fresh ingredients and bold flavors to every dish.</p>
      <Link to="/about">Learn More About Us</Link>
    </section>
  );
}

export default Chicago;