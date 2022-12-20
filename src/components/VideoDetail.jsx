import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoDetail = ({ video: {id: {videoId}, snippet: {title, channelTitle, description}} }) => {
	if(!videoId) return <div>Loading...</div>

	const videoSrc = `https://www.youtube.com/embed/${videoId}`;

	return (
		  <div className="">
		   	<div className="">
			   <iframe
			   	frameBorder="0"
			   	height="420px"
			   	width="100%"
			   	title="Video Player"
			   	src={videoSrc}
		  		 />
		    </div>

		    <div className="">
		    	<h3>{title}</h3>
		    	<h4>{channelTitle}</h4>
		    	<h5>{description}</h5>
		    </div>
		 </div>
		);
}

export default VideoDetail;