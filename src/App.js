import './App.css';
import youtube from './api/ytb';
import SearchBar from './components/SearchBar';
import {useState} from "react";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState({id: {}, snippet: {}})
  return (
     <div className="container">
       <div className="row">
          <div className="col-12">
           <SearchBar onSubmit = {handleSubmit}/>
          </div>
          <div className="col-8">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="col-4">
            <VideoList videos={videos} onVideoSelect={setSelectedVideos} />
          </div>
        </div>
     </div>
  );

  async function handleSubmit(searchItem){
    const {data : { items: videos }} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "YOUR YOUTUBE KEY HERE!!!",
        q: searchItem,
      }
    });
    setVideos(videos);
    setSelectedVideos(videos[0]);
   // console.log(response.data.items)
  }

}

export default App;