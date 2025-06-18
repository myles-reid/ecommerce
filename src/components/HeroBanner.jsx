import bannerImage from '../img/banner-img.png';

function HeroBanner({ onClick }) {
  const circles = []

  for (let i = 0; i < 5; i++) {
    circles.push(<span className="extra" key={i}></span>);
  }

  return (
    <div className="hero-banner">
      {circles.map(circle => (
        <span className="extra" key={circle.key}></span>
      ))}
      <div className="banner-text">
        <div className="banner-header">
          <p>Last Chance</p>
          <h2>70% <span>off all</span></h2>
        </div>
        <div className="banner-subtext">
          <p>Your favourite looks and style, on sale</p>
          <p>Enjoy up to 70% off everything in the store</p>
          <p className="disclaimer">Limited selection available. No refunds or alternatives</p>
          <button onClick={onClick}>Shop Now</button>{/*This should ref down to the products section*/}
        </div>
      </div>
      <img className="banner-image" src={bannerImage} alt="Banner Image" />
    </div>
  )
}

export default HeroBanner;