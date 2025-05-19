import './Cars.css';
import Review from './Review';

function F150() {
  return (
    <div className="f150-container">
      <h1>2025 Ford F-150 Lightning</h1>
      <img
        src="/assets/f-150-lightning.jpg"
        alt="2025 Ford F-150 Lightning"
      />
      <div className="f150-details">
        <p>The 2025 F-150 Lightning is Ford’s advanced all-electric pickup, offering the power of a traditional truck with cutting-edge electric technology.</p>
        <p>It features dual electric motors, available extended range, and a maximum towing capacity of 10,000 pounds.</p>
        <p>Inside, enjoy SYNC 4A with a large touchscreen, over-the-air updates, and available BlueCruise hands-free highway driving.</p>
        <p><strong>Starting MSRP:</strong> $49,995</p>
      </div>

      <Review />
    </div>
  );
}

export default F150;
