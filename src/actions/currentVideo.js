var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CHANGE_VIDEO',
    payload: video
  };
};

export default changeVideo;
