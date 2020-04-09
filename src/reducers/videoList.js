import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  // console.log('state');
  // console.log(state);
  // console.log('action');
  // console.log(action);
    if (action.type === 'CHANGE_VIDEO_LIST') {
      console.log([action.videos[0]]);
      return action.videos.map(video => {
        return video;
      });

      //return state = [action.videos[0]];
    } else {
      return state;
    }
};

export default videoListReducer;
