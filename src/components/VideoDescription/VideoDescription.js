import "./VideoDescription.scss";
import viewsIcon from "../../assets/images/views.svg"
import likesIcon from "../../assets/images/likes.svg"

function VideoDescription({ videoDetail }) {
  const { timestamp, title, channel, views, likes, description } =
    videoDetail;
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
        <div className="details__left">
          <p className="details__left__channel">By {channel}</p>
          <span className="details__left__time">{formattedDate}</span>
        </div>
        <div className="details__right">
          <div className="details__right__view">
            <img
              className="details__right__view__image"
              src={viewsIcon}
              alt="views icon"
            />{" "}
            <span className="details__right__view__views">{views}</span>
          </div>
          <div className="details__right__like">
            <img
              className="details__right__like__image"
              src={likesIcon}
              alt="likes icon"
            />{" "}
            <span className="details__right__like__likes">{likes}</span>
          </div>
        </div>
      </div>
      <div className="description">
        <p className="description__text">{description}</p>
      </div>
    </>
  );
};

export default VideoDescription;