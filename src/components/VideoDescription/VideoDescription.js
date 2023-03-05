import "./VideoDescription.scss";
import views from "../../assets/images/views.svg"
import likes from "../../assets/images/likes.svg"

function VideoDescription({ currentVideo }) {
    const date = new Date(currentVideo.timestamp);
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
        <h1 className="title__name">{currentVideo.title}</h1>
      </div>
      <div className="details">
        <div className="details_left">
          <p className="details__left__channel">By {currentVideo.channel}</p>
          <span className="details__left__time">{formattedDate}</span>
        </div>
        <div className="details_right">
          <img
            className="details__right__views--image"
            src={views}
            alt="views icon"
          />{" "}
          <span className="details__right__views">{currentVideo.views}</span>
          <img
            className="details__right__likes--image"
            src={likes}
            alt="likes icon"
          />{" "}
          <span className="details__right__likes">{currentVideo.likes}</span>
        </div>
      </div>
      <div className="description">
        <p className="description__text">{currentVideo.description}</p>
      </div>
    </>
  );
};

export default VideoDescription;