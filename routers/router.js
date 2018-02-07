var VideoRouter = Backbone.Router.extend({
  routes: {
    'videos/:id': 'showVideo',
    '*default': 'showVideos'
  },

  showVideo: function (id) {

    var allVideos = appModel.get('videos');

    var currentVideo = allVideos.findWhere({ id: id[1] });

    appModel.set('current_video', currentVideo);
    appModel.set('show_videos', true);
  },

  showVideos: function () {
    appModel.set('show_videos', false);
  }
});
