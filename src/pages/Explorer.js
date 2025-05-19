
import './Cars.css';
import Review from './Review';
function Explorer() {
    return (
      <div>
        <h1>2025 Ford Explorer</h1>
        <img
          src="/assets/explorer.jpg"
          alt="2025 Ford Explorer"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="Explorer-details">
        <p>The 2025 Explorer is Ford’s midsize SUV offering three-row seating and impressive performance for families and adventurers alike.</p>
        <p>Available powertrains include a turbocharged 2.3L EcoBoost and a 3.0L EcoBoost V6 for enhanced capability.</p>
        <p>Features include SYNC 4, a digital instrument cluster, and Ford Co-Pilot360™ driver assist technologies.</p>
        <p>Starting MSRP: $38,000</p>
        </div>
        <Review/>
      </div>
    );
  }
  
  export default Explorer;
  