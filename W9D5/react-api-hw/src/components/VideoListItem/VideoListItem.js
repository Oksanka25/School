import "./VideoListItem.css"

const VideoListItem = ({ video, onVideoSelect }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-container">
      <div>
        <img className="video-thumbnail" src={thumbnail} alt={title} />
      </div>
      <h4 className="video-title">{video.snippet.title}</h4>
    </div>
  )
}

export default VideoListItem;