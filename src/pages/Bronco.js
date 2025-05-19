import './Cars.css';
import Review from './Review';
function Bronco() {
    return (
      <div>
        <h1>2025 Ford Bronco</h1>
        <img
          src="/assets/bronco.jpg"
          alt="2025 Ford Bronco"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="Bronco-details">
        <p>The 2025 Ford Bronco is built for rugged adventures with legendary off-road capability.</p>
        <p>It offers multiple 4x4 systems, G.O.A.T. Modes™, and removable doors and roof for a customizable experience.</p>
        <p>Technology includes trail navigation, terrain management, and available 12-inch touchscreen with SYNC 4.</p>
        <p>Starting MSRP: $39,130</p>
        </div>
        <Review/>
      </div>
    );
  }
  
  export default Bronco;
  