import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Conversation from "./components/Conversation/Conversation";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from 'react';
import videoDetailsData from "./data/video-details.json"; 
import videoData from "./data/videos.json"; 

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  function displayVideo(clickedVideoId) {
    const newVideo = videoData.find((video) => video.id === clickedVideoId);
    setCurrentVideo(newVideo);
  }

  function getVideoDetails() {
    const currentVideoId = currentVideo.id;
    const currentVideoDetails = videoDetailsData.find((videoDetail) => {
      return videoDetail.id === currentVideoId;
    });
    return currentVideoDetails;
  }

  return (
    <div className="App">
      <Header />
      <Video getVideoDetails={getVideoDetails} />
      <section className="bottom">
        <section className="left">
          <VideoDescription getVideoDetails={getVideoDetails} />
          <Conversation getVideoDetails={getVideoDetails} />
          <Comments getVideoDetails={getVideoDetails} />
        </section>
        <section className="right">
          <NextVideos
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            videoData={videoData}
            displayVideo={displayVideo}
          />
        </section>
      </section>
    </div>
  );
}

export default App;
