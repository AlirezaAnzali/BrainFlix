import "./Video.scss";
import scrubbingIcon from "../../assets/images/scrub.svg"

function Video({ getVideoDetails }) {
  const { video, image, duration } = getVideoDetails();
  return (
    <div className="video">
      <video
        className="video__video"
        src={video}
        poster={image}
      ></video>
      <div className="video__controls">
        <button className="video__controls__play video__controls__button"></button>
        <div className="video__controls__progress video__controls__button">
          <div className="video__controls__progress__progress">
            <div className="video__controls__progress__buffer"></div>
            <div className="video__controls__progress__played"></div>
            <div className="video__controls__progress__scrubber">
              <img
                className="video__controls__progress__scrubbing-icon"
                src={scrubbingIcon}
                alt="scrubbing icon"
              />
            </div>
          </div>
          <span className="video__controls__progress__time">
            0:00 / {duration}
          </span>
        </div>
        <div className="video__controls__button">
          <button className="video__controls__fullscreen video__controls__button"></button>
          <button className="video__controls__mute video__controls__button"></button>
        </div>
      </div>
    </div>
  );
}

export default Video;
