

import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 Not Found</h1>
      <p className="not-found__text">
        We're sorry, but the page you requested could not be found.
      </p>
      <p className="not-found__text">Please check the URL and try again.</p>
      <p className="not-found__text">
        You can also go back to the Home page by clicking on the logo.
      </p>
    </div>
  );
}

export default NotFound;
