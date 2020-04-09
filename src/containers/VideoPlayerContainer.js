import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';

let mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  }
}

var VideoPlayerContainer = connect(
  mapStateToProps,
  null,
)(changeVideo);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
