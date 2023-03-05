import "./NextVideos.scss";
import VideoInfo from "../VideoInfo/VideoInfo";

function NextVideos({ currentVideo, videoData, displayVideo }) {
  return (
    <section className="list">
      {videoData.map((item, index) => {
        if (item.id !== currentVideo.id) {
          return (
            <VideoInfo
              key={item.id}
              videoData={item}
              onClick={() => {
                displayVideo(item.id);
              }}
              className="list__div"
            />
          );
        } else {
          return <></>;
        }
      })}
    </section>
  );
}

export default NextVideos;