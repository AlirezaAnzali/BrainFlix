import "./VideoInfo.scss";

const VideoInfo = ({ videosData, onClick }) => {
  const { title, channel, image } = videosData;
  return (
    <div className="info" onClick={onClick}>
      <div className="info__container">
        <img
          className="info__container__image"
          src={image}
          alt={`${title} poster`}
        />
      </div>

      <div className="info__text">
        <h3 className="info__text__title">{title}</h3>
        <p className="info__text__channel">{channel}</p>
      </div>
    </div>
  );
};


export default VideoInfo;
