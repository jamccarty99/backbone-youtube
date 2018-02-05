var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      title: '',
      description: '',
      videos: new VideosCollection(),
    }
  },
  // when 'reviews' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {
    var videos = this.get('videos') || new VideosCollection();

    videos.set(response.videos);
    response.videos = videos

    return response;
  }
});
