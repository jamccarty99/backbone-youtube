var VideoModel = Backbone.Model.extend({
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?',
  idAttribute: 'id',

  defaults: function () {
    return {
      title: '',
      description: '',
      videos: new VideosCollection().fetch(),
    }
  },
  // when 'videos' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {
    var videos = this.get('videos') || new VideosCollection();

    videos.set(response.videos);
    response.videos = videos

    return response;
  }
});
