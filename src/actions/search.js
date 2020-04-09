import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';


// var handleVideoSearch = (query) => {
//   debugger
//   let options = {
//     key: YOUTUBE_API_KEY,
//     query: query
//   };

//   //console.log();
//   return dispatch => {
//     searchYouTube(options, (videos) => {
//       dispatch(changeVideoList(videos));
//       dispatch(changeVideo(videos[0]));
//       return videos;

//     });
//   };
// };

var handleVideoSearch = (q) => {
  return _.debounce((dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  }, 500);
};

export default handleVideoSearch;


/*
var handleVideoSearch = (q) => {
  return (dispatch) = {
    getYouTubeVideos(query) {
      var options = {
        key: YOUTUBE_API_KEY,
        query: query
      };

      searchYouTube(options, (videos) =>
        dispatch(changeVideo(videos[0]));
        dispatch(changeVideoList(videos));
    })
    }
  }
}

*/