var VideoModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?',

  defaults: function (response) {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      url: encodeURI($('#search-text-input').val()),
      videos: new VideosCollection(),
    }
  },

  parse: function(response){

  			console.log("Inside Parse");
        console.log(response.items);
  		  var responseArray = response.items;
        for (var i = 0; i < responseArray.length; i++) {
          var id = responseArray[i].id.videoId;
          var title = responseArray[i].snippet.title;
          var description = responseArray[i].snippet.description;
        }
        console.log(this.model);
      //  .append(id);


  			//return models
  			return this.models;

  		},
  	});

    // var VideosCollectionInstance = new VideosCollection();
    //
    // initialize: function () {
    //   this.bind("reset", function (model, options) {
    //     console.log("Inside event");
    //     console.log(model);
    //
    //   });
    // }
//   	var video = new VideoCollection();
//
//   	video.fetch({
//   		success: function(response,xhr) {
//   			console.log("Inside success");
//   			console.log(response);
//   		},
//   		error: function (errorResponse) {
//   			console.log(errorResponse)
//   		}
//   	});
// //
//     // var parsed_response;
//     //
//     // parsed_response = _(response).clone();
//     //
//     // var parsed_response = _.map(parsed_response, function (obj) {
//     //     return function (_obj) {
//     //         if (_obj.prop === "" || typeof _obj.prop === "null" ) {
//     //             _obj.isProp = false;
//     //         }
//     //         else {
//     //             _obj.isProp = true;
//     //         }
//     //         return _obj;
//     //     }(obj)
//
//     // console.log(response);
//     // console.log(parsed_response);
//     return parsedResponse;
// }
//
//});
