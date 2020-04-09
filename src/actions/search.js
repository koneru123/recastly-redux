import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {
  return (dispatch) => {
    var options = {
       key: YOUTUBE_API_KEY,
       query: query
    };
    searchYouTube(options, (videos) => {
      console.log(videos);
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]))
    })
  }
};

export default handleVideoSearch;
