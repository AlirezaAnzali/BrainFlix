import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import { useState } from 'react';
import videoDetails from "./data/video-details.json";

function App() {
const [currentVideo, setCurrentVideo]= useState(videoDetails[0]);
  return (
    <div className="App">
      <Header />
      <Video currentVideo={currentVideo} />
    </div>
  );
}

export default App;
