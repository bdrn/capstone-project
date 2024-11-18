function Specials({ specials }) {
    return (
      <section className="specials">
        <h2>Today's Specials</h2>
        <div className="specials-list">
          {specials.map((special, index) => (
            <div key={index} className="special-item">
              <img src={special.image} alt={special.name} />
              <h3>{special.name}</h3>
              <p>{special.description}</p>
              <span>{special.price}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Specials;