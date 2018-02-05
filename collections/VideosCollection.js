var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3',
  model: VideoModel
});
