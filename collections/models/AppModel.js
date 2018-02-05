var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_video: null,

      // either true or false
      show_videos: false
    }
  },

  initialize: function () {
    this.listenTo(this, 'change:current_video', function () {
      this.get('current_video').get('videos').url = 'https://www.googleapis.com/youtube/v3/search' + this.get('#current_video').id + '&key=AIzaSyBcUj-h1dSz93gent1Pu4y9wKl1qSQ8VpE&fields=items(id,snippet(title,description))&part=snippet';
    });
  },
 });
