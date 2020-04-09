import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {
  debugger
  let options = {
    key: YOUTUBE_API_KEY,
    query: query
  };

  //console.log();
  return dispatch => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
      return videos;

    });
  };
};

export default handleVideoSearch;
