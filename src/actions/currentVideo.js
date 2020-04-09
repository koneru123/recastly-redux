var changeVideo = (video) => {
  //console.log(video)
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CHANGE_VIDEO',
    video: video
  };
};

export default changeVideo;
