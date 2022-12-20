import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect  }) => {

	const listOfVideos = videos.map(video => (
			<VideoItem
			onVideoSelect = {onVideoSelect}
			key = {video.id.videoId}
			video = {video}
			/>
		));

	return (
		  <div className="p-4">
		  	{listOfVideos}
		 </div>
		);
}

export default VideoList;