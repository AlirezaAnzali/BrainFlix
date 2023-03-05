import "./VideoDescription.scss";
import viewsIcon from "../../assets/images/views.svg"
import likesIcon from "../../assets/images/likes.svg"

function VideoDescription({ getVideoDetails }) {
  const { timestamp, title, channel, views, likes, description } =
    getVideoDetails();
  const date = new Date(timestamp);
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="title">
        <h1 className="title__name">{title}</h1>
      </div>
      <div className="details">
        <div className="details_left">
          <p className="details__left__channel">By {channel}</p>
          <span className="details__left__time">{formattedDate}</span>
        </div>
        <div className="details_right">
          <img
            className="details__right__views--image"
            src={viewsIcon}
            alt="views icon"
          />{" "}
          <span className="details__right__views">{views}</span>
          <img
            className="details__right__likes--image"
            src={likesIcon}
            alt="likes icon"
          />{" "}
          <span className="details__right__likes">{likes}</span>
        </div>
      </div>
      <div className="description">
        <p className="description__text">{description}</p>
      </div>
    </>
  );
};

export default VideoDescription;