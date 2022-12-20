import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoItem = ({ video, onVideoSelect  }) => {

	return (
		<div className="col-12 mb-2">
			  <div className="text-center d-flex pointer cursor-pointer" onClick={ () => onVideoSelect(video)}>
			  	<img className="thumbnail me-2" alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
			  	<h6>{video.snippet.title}</h6>
			  </div>
		 </div>
		);
}

export default VideoItem;