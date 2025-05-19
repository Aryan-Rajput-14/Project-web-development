import React, { useState } from 'react';
import './Search.css';

const carData = [
{
name: 'F-150 Lightning',
price: 49995,
color: 'Blue',
fuel: 'Electric',
image: '/assets/f-150-lightning.jpg',
},
{
name: 'Mustang',
price: 55000,
color: 'Red',
fuel: 'Petrol',
image: '/assets/mustang mach-e.jpg',
},
{
name: 'Explorer',
price: 38000,
color: 'Black',
fuel: 'Petrol',
image: '/assets/explorer.jpg',
},
{
name: 'Bronco',
price: 42000,
color: 'Green',
fuel: 'Diesel',
image: '/assets/bronco.jpg',
},
];

function Search() {
const [filters, setFilters] = useState({ price: '', color: '', fuel: '' });

const handleChange = (e) => {
setFilters({ ...filters, [e.target.name]: e.target.value });
};

const filteredCars = carData.filter((car) => {
return (
(!filters.price || car.price <= parseInt(filters.price)) &&
(!filters.color || car.color.toLowerCase() === filters.color.toLowerCase()) &&
(!filters.fuel || car.fuel.toLowerCase() === filters.fuel.toLowerCase())
);
});

return (
<div className="search-page">
<h1>Search Vehicles</h1>
<div className="filter-form">
<input type="number" name="price" placeholder="Max Price (e.g., 50000)" value={filters.price} onChange={handleChange} />
<input type="text" name="color" placeholder="Color (e.g., Red)" value={filters.color} onChange={handleChange} />
<input type="text" name="fuel" placeholder="Fuel Type (e.g., Petrol)" value={filters.fuel} onChange={handleChange} />
</div>


  <div className="results">
    {filteredCars.length > 0 ? (
      filteredCars.map((car, index) => (
        <div key={index} className="car-card">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>Price: ${car.price}</p>
          <p>Color: {car.color}</p>
          <p>Fuel: {car.fuel}</p>
        </div>
      ))
    ) : (
      <p className="no-results">No cars match your criteria.</p>
    )}
  </div>
</div>
);
}
export default Search;