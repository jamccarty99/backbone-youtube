var VideoRouter = Backbone.Router.extend({
  routes: {
    'videos/:id': 'show/Videos',
    '*default': 'showVideos'
  },

  showVideos: function (id) {

    var allVideos = appModel.get('videos');

    var currentVideo = allVideos.findWhere({ _id: id });

    appModel.set('current_video', currentVideo);
    appModel.set('show_videos', true);
  },

  showBeers: function () {
    appModel.set('show_videos', false);
  }
});
