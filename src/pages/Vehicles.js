import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicles.css';

const vehicles = [
  { name: 'Mustang Mach-E', img: '/assets/mustang mach-e.jpg', link: '/vehicle/mustang' },
  { name: 'F-150 Lightning', img: '/assets/f-150-lightning.jpg', link: '/vehicle/f150' },
  { name: 'Bronco', img: '/assets/bronco.jpg', link: '/vehicle/bronco' },
  { name: 'Explorer', img: '/assets/explorer.jpg', link: '/vehicle/explorer' },
];

function Vehicles() {
  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle, index) => (
        <Link to={vehicle.link} key={index} className="vehicle-card">
          <img src={vehicle.img} alt={vehicle.name} />
          <h2>{vehicle.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Vehicles;
