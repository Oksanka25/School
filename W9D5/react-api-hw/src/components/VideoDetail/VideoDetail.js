import "./VideoDetail.css";

const VideoDetail = ({ selectedVideo }) => {
  const detailInstructions = 
    <div>
      <p>Search for a video &#x2934;</p>
      <p>Select one from the list &#x27A1;</p>
    </div>

  const titleCondition = !selectedVideo ? detailInstructions : selectedVideo.snippet.title
  const descriptionCondition = !selectedVideo ? null : selectedVideo.snippet.description
  const videoSrc = !selectedVideo ? null : `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div className="container videoDetail__container">
      <div className={selectedVideo ? "video__player" : "is-hidden"}>
        <iframe
          className={selectedVideo ? "video" : "is-hidden"}
          src={videoSrc}
          title={selectedVideo ? selectedVideo.snippet.title : null}
          alt={selectedVideo ? selectedVideo.snippet.title : null}
          allowFullScreen="allowFullScreen"
        />
      </div>
      <h4>{titleCondition}</h4>
      <p className="text-small">{descriptionCondition}</p>
    </div>
  )
}

export default VideoDetail;