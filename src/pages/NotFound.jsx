import '../css/notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <img
        src="/images/404.png" // Reemplaza esto con la ruta real de tu imagen
        alt="Page not found"
        className="notfound-image"
      />
      <h1 className="notfound-title">Oops! Page Not Found</h1>
      <p className="notfound-message">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="notfound-button">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;