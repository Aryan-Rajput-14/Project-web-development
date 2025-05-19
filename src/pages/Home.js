import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: if you have styles

const vehicles = [
  { name: 'Mustang Mach-E', id: 'mustang', img: '/assets/mustang mach-e.jpg' },
  { name: 'F-150 Lightning', id: 'f150', img: '/assets/f-150-lightning.jpg' },
  { name: 'Bronco', id: 'bronco', img: '/assets/bronco.jpg' },
  { name: 'Explorer', id: 'explorer', img: '/assets/explorer.jpg' },
];

const Home = () => {
  return (
    <main>
      <section className="hero">
        <img src="/assets/hero.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Built Ford Tough</h1>
        </div>
      </section>

      <section className="showcase">
        {vehicles.map((vehicle, index) => (
          <Link to={`/vehicle/${vehicle.id}`} key={index} className="vehicle">
            <img src={vehicle.img} alt={vehicle.name} />
            <h2>{vehicle.name}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;
