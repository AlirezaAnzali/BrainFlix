import pic404 from "../../assets/images/404.png";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__image" src={pic404} alt="404 not found" />
      {/* <h1 className="not-found__title">404 Not Found</h1> */}
      <p className="not-found__text">
        We're sorry, but the page you requested could not be found.
      </p>
      <p className="not-found__text">Please check the URL and try again.</p>
      <button className="not-found__button">
        <Link to="/">GO BACK TO THE HOME PAGE</Link>
      </button>
    </div>
  );
}

export default NotFound;
