import "./VideoInfo.scss";

const VideoInfo = ({ videoData, onClick }) => {
  const { title, channel, image } = videoData;
  return (
    <div className="info" onClick={onClick}>
      <img className="info__image" src={image} alt={`${title} poster`} />
      <div className="info__text">
        <h3 className="info__text__title">{title}</h3>
        <p className="info__text__channel">{channel}</p>
      </div>
    </div>
  );
};


export default VideoInfo;
