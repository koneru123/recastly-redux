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
//debugger;
//console.log(props)
    this.props.searchYouTube(options, (videos) =>
      dispatch(changedVideoList(videos)),
      dispatch(changedVideo(videos[0]))
    )
  }
// setTimeout(() => {searchYouTube(options, (videos) =>
//     dispatch(changedVideoList(videos)),
//     dispatch(changedVideo(videos[0]))
//   )}, 500);

    // searchYouTube(options, (videos) => searchYouTube({
    //   dispatch(changeVideoList(videos)),
    //   dispatch(changeVideo(videos[0]));
    // }))

  // setTimeout(() => {this.props.searchYouTube(options, (videos) =>
  //   this.setState({
  //     videos: videos,
  //     currentVideo: videos[0]
  //   })
  // )}, 500);
};

export default handleVideoSearch;
