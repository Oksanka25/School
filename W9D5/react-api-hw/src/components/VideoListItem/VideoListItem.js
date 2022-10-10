import "./VideoListItem.css"

const VideoListItem = ({ video, onVideoSelect }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  
  return (
    <div onClick={() => onVideoSelect(video)} className="video__container">
      <div>
        <img className="video__thumbnail" src={thumbnail} alt={title} />
      </div>
      <h4 className="video__title">{video.snippet.title}</h4>
    </div>
  )
}

export default VideoListItem;