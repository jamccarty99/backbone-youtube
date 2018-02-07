var VideosCollection = Backbone.Collection.extend({
  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?' + encodeURI($('#search-text-input').val()) + '&key=AIzaSyArisV7p7t9_m16hXa2FQ-o3-h5c8a6eZ4&fields=items(id,snippet(title,description,thumbnails))&part=snippet';
  },
  model: VideoModel
});
