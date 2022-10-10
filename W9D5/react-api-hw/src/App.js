import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import youtube from "./apis/youtube";
import { useState, useEffect } from "react";
import "./App.css"

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onQuerySubmit = async query => {
    const res = await youtube.get("/search", { params: { q: query } })
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    onQuerySubmit('')
  }, [])


  return (
    <div className="container app__container">
      <h1 className="title">MYTube </h1>
      <SearchBar onQuerySubmit={onQuerySubmit} />
      <div className="app__container-grid">
        <div className="col__left">
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
        <div className={videos.length === 0 ? "is-hidden" : "col__right"}>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;