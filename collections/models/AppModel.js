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
      this.get('current_video').get('videos').url = 'https://www.googleapis.com/youtube/v3/search?&fields=items(id,snippet(title,description,thumbnails))&part=snippet&type=video&vdideoEmbeddable=true&key=AIzaSyArisV7p7t9_m16hXa2FQ-o3-h5c8a6eZ4&q=' + encodeURI($('#search-text-input').val());
    });
  },
 });
