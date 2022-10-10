import "./VideoList.css";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const foundVideos = videos.map((video, index) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={index}
      />);
  });

  return (
    <div className="videoList__container">
      {foundVideos}
    </div>
  );
}

export default VideoList;