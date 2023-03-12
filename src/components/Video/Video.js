import "./Video.scss";
import scrubbingIcon from "../../assets/images/scrub.svg"

function Video({ videoDetail }) {
  const { video, image, duration } = videoDetail;
  return (
    <div className="video">
      <video className="video__video" src={video} poster={image}></video>
      <div className="video__controls">
        <div className="video__controls__play"></div>
        <div className="video__controls__progress">
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
            0:00/{duration}
          </span>
        </div>
        <div className="video__controls__right">
          <div className="video__controls__right__fullscreen"></div>
          <div className="video__controls__right__mute"></div>
        </div>
      </div>
    </div>
  );
}

export default Video;
