var VideoModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?&fields=items(id,snippet(title,description,thumbnails))&part=snippet&type=video&vdideoEmbeddable=true&key=AIzaSyArisV7p7t9_m16hXa2FQ-o3-h5c8a6eZ4&q=',

  defaults: function (response) {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      thumbnail: this.thumbnail,
      url: encodeURI($('#search-text-input').val()),
      videos: new VideosCollection(),
    }
  },

  parse: function(response) {

  			console.log("Inside Parse");
        console.log(response.items);
  		  var responseArray = response.items;
        for (var i = 0; i < responseArray.length; i++) {
          var id = response.items[i].id.videoId;
          var title = response.items[i].snippet.title;
          var description = response.items[i].snippet.description;
          var thumbnail = response.items[i].snippet.thumbnails.medium;
          var videoModel = new VideoModel(response.items);
        }
        console.log(id);

  			return this.models;

  		},
  	});
