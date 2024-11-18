import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Delicious meals served with love. Book now and taste the freshness!</p>
        <button onClick={() => navigate('/booking')}>Book Now</button>
      </div>
    </div>
  );
}

export default CallToAction;
