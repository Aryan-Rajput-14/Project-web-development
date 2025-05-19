import { useState } from 'react';
import './Cars.css';

function Review() {
  const [reviews, setReviews] = useState([
    { name: 'Alex R.', text: 'Love the torque and tech in the Lightning! Easily handles my weekend adventures.' },
    { name: 'Jamie T.', text: 'Was skeptical about electric trucks, but this changed my mind. Smooth and powerful ride.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', text: '' });
    }
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>

      {reviews.map((review, index) => (
        <div className="jumbotron" key={index}>
          <h4>{review.name}</h4>
          <p>{review.text}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="jumbotron review-form">
        <h3>Leave a Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={newReview.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Review;
