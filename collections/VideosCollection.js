var VideosCollection = Backbone.Collection.extend({
  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?&fields=items(id,snippet(title,description,thumbnails))&part=snippet&type=video&vdideoEmbeddable=true&key=AIzaSyArisV7p7t9_m16hXa2FQ-o3-h5c8a6eZ4&q=' + encodeURI($('#search-text-input').val())
  },
  model: VideoModel
});
