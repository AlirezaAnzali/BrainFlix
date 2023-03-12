import "./NextVideos.scss";
import VideoInfo from "../VideoInfo/VideoInfo";
import { Link } from "react-router-dom";

function NextVideos({ videoToDisplay, videosData }) {
  return (
    <section className="videos">
      <p className="title">NEXT VIDEOS</p>
      <section className="list">
        {videosData.map((item) => {
          if (item.id !== videoToDisplay.id) {
            return (
              <Link
                key={item.id}
                to={`/video/${item.id}`}
                className="list__div"
              >
                <VideoInfo key={item.id} videosData={item} />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </section>
    </section>
  );
}

export default NextVideos;
