import './Cars.css';
import Review from './Review';
function Mustang() {
    return (
      <div>
        <h1>2025 Ford Mustang</h1>
        <img
          src="/assets/mustang mach-e.jpg"
          alt="2025 Ford Mustang"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="Mustang-details">
        <p>The 2025 Ford Mustang combines classic muscle with modern technology.</p>
        <p>Powertrains include a 2.3L EcoBoost engine delivering 315 hp and a 5.0L V8 engine producing up to 500 hp in the Dark Horse trim.</p>
        <p>Features include a 13.2-inch SYNC 4 touchscreen, Apple CarPlay, Android Auto, and an available B&O sound system.</p>
        <p>Prices start at $31,920 for the base EcoBoost model and go up to $69,870 for the Dark Horse Premium trim.</p>
        <p>For more details, visit the official Ford Mustang page: <a href="https://www.ford.com/cars/mustang/" target="_blank" rel="noopener noreferrer">Ford Mustang</a></p>
        </div>
        <Review />
      </div>
    );
  }
  
  export default Mustang;
  