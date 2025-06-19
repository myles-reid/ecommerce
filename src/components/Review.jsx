import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

function Review() {
  const date = Date.now();
  const formattedDate = new Date(date).toLocaleDateString();
  const stars = [];
  const outline = [];
  const displayRating = 4.5; // Example rating

for (let i = 0; i < 5; i++) {
    outline.push(
      <FaRegStar
        key={i}
        className="star grey"
      />
    );

    if (i < Math.floor(displayRating)) {
      // Full star
      stars.push(
        <FaStar 
          key={i}
          className="star gold"
        />
      );
    } else if (i === Math.floor(displayRating) && displayRating % 1 === 0.5) {
      // Half star
      stars.push(
        <FaStarHalf 
          key={i}
          className="star gold"
        />
      );
    } 
  }



  return (
    <div className="review">
      <div className="review-header">
        <div className="reviewer-info">
          <h2>Review Title</h2>
          <p>Username - <span>{formattedDate}</span></p>
        </div>
        <div className="review-rating">
          <div className="stars flex star-overlay">
            {outline.map(star => (
              <div key={star.key}>
                {star}
              </div>
            ))}
            <div className="stars star-foreground flex">
              {stars.map(star => (
                <div key={star.key}>
                  {star}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="review-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit 
          harum officiis, quas magnam possimus veritatis doloribus? Aliquam aliquid 
          dolore debitis soluta iusto explicabo! Consequatur voluptatibus ducimus 
          sapiente debitis quia.
        </p>
      </div>
    </div>
  );
}

export default Review;