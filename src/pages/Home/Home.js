import "./Home.scss";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import Conversation from "../../components/Conversation/Conversation";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { videosEndpoint } from "../../utils/api-utils";
import { getVideoDetailEndpoint } from "../../utils/api-utils";
import axios from "axios";

function Home() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoToDisplay, setVideoToDisplay] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(videosEndpoint)
      .then(({ data }) => {
        setVideos(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  useEffect(() => {
    if (!videos) {
      return;
    }
    const selectedVideoId = videoId || (videos && videos[0].id);
    const selectedVideoToDisplay =
      videos && videos.find((video) => video.id === selectedVideoId);
    if (!selectedVideoToDisplay) {
      setError(404);
      return;
    }
    setVideoToDisplay(selectedVideoToDisplay);
    const videoDetailEndpoint = getVideoDetailEndpoint(
      selectedVideoToDisplay.id
    );
    axios
      .get(videoDetailEndpoint)
      .then(({ data }) => {
        setVideoDetail(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [videos, videoId]);

  if (error) {
    if (error === 404) {
      return <Navigate to="/not-found" />;
    }
    return <h1>Error from api</h1>;
  }
  if (!videos || !videoDetail) {
    return (
      <div className="container">
        <h1>LOADING...</h1>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="Home">
      <Header />
      <Video videoDetail={videoDetail} />
      <section className="bottom">
        <section className="left">
          <VideoDescription videoDetail={videoDetail} />
          <Conversation videoDetail={videoDetail} />
          <Comments videoDetail={videoDetail} />
        </section>
        <section className="right">
          <NextVideos videoToDisplay={videoToDisplay} videosData={videos} />
        </section>
      </section>
    </div>
  );
}

export default Home;
